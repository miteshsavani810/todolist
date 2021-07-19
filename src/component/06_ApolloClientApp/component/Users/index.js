import React, { useCallback, useMemo, useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

import { Box, Paper, makeStyles } from "@material-ui/core";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { getUserQuery } from "../../graphql/query";
import { addUserQuery, deleteUserQuery } from "../../graphql/mutation";

const useStyles = makeStyles(() => ({
  paper: {
    textAlign: "center",
    padding: "10px",
    margin: "5px",
    minWidth: "150px",
    position: "relative",
  },

  icon: {
    fontSize: "20px",
    position: "absolute",
    right: 0,
    top: 0,
    color: "#6b0505",
    "&:hover": {
      color: "#d20f0f",
      fontSize: "22px",
      cursor: "pointer",
    },
  },

  inputBlock: {
    display: "flex",
    justifyContent: "center",
  },
  userDataBlock: {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    maxHeight: "700px",
    overflow: "scroll",
  },
}));

const Users = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");

  const [insert_users] = useMutation(addUserQuery);

  const [delete_users] = useMutation(deleteUserQuery, {
    update(cache, { data: { delete_users } }) {
      console.log("after delte");
      console.log(delete_users);
      cache.modify({
        fields: {
          users(existingUser = [], { readField }) {
            let newUsers = existingUser.filter((user) => {
              return readField("id", user) !== delete_users.returning[0].id;
            });
            return newUsers;
          },
        },
      });
    },
  });

  const {
    loading,
    error,
    data: userData,
  } = useQuery(getUserQuery, { fetchPolicy: "cache-network" });

  const addUserData = useCallback(
    (e) => {
      e.preventDefault();
      insert_users({
        variables: {
          name: username,
        },
        /* optimisticResponse: {
          insert_users: {
            returning: [
              {
                name: username,
                id: "11222",
              },
            ],
          },
        }, */
        update(cache, { data: { insert_users } }) {
          console.log("after update");
          console.log(insert_users);

          cache.modify({
            fields: {
              users(existingUser = []) {
                const newUserData = cache.writeFragment({
                  data: insert_users.returning[0],
                  fragment: gql`
                    fragment NewUsers on users {
                      id
                      name
                    }
                  `,
                });
                return [...existingUser, newUserData];
              },
            },
          });
        },
      });
      setUsername("");
    },
    [insert_users, username]
  );

  const deleteUser = useCallback(
    (e, id) => {
      console.log("id is ", id);

      //e.currentTarget.parentElement.style.display = "none";

      delete_users({
        variables: {
          id: id,
        },
        optimisticResponse: {
          delete_users: {
            returning: [
              {
                id: id,
              },
            ],
          },
        },
      });
    },
    [delete_users]
  );

  const displayData = useMemo(() => {
    return (
      userData &&
      userData.users.map((user) => (
        <Paper key={user.id} className={classes.paper}>
          <span>{user.name} </span>
          <HighlightOffIcon
            className={classes.icon}
            onClick={(e) => deleteUser(e, user.id)}
          />
        </Paper>
      ))
    );
  }, [userData, classes.paper, classes.icon, deleteUser]);

  /* console.log("userData");
  console.log(userData); */

  return (
    <>
      <div>
        <p> Add User page </p>
        <form onSubmit={addUserData} className={classes.inputBlock}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit"> Submit </button>
        </form>
        <hr />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Box className={classes.userDataBlock}>{displayData}</Box>
        )}
      </div>
    </>
  );
};

export default Users;
