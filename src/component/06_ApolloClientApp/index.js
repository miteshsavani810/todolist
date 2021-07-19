import React from "react";

import Movie from "./component/GetMissions";
import Users from "./component/Users";

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useHistory, useParams } from "react-router";

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          filteredMission: (existing, { args, readField }) => {
            const currentFilter = filter();
            const missions = readField("launchesPast") || [];
            let filterMission = missions.filter((mission) => {
              const title = readField("mission_name", mission);
              return title.toLowerCase().includes(currentFilter.toLowerCase());
            });
            return filterMission;
          },
        },
      },
    },
  }),
  link: new HttpLink({
    uri: "https://api.spacex.land/graphql/",
  }),
});

export const filter = client.cache.makeVar("");

const ApolloClientApp = () => {
  let { id: paramId } = useParams();
  const history = useHistory();

  const redirectToMissions = () => {
    history.push("/apollo-client/1");
  };
  const redirectToAddUser = () => {
    history.push("/apollo-client/2");
  };

  console.log("param id is ", paramId);

  return (
    <ApolloProvider client={client}>
      <div
        style={{
          margin: "10px 0",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={redirectToMissions}> Get Missions</button>
        <button onClick={redirectToAddUser}> Add User</button>
      </div>

      <div
        style={{
          margin: "10px 0",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {paramId && (paramId === "1" ? <Movie /> : <Users />)}
      </div>
    </ApolloProvider>
  );
};

export default ApolloClientApp;
