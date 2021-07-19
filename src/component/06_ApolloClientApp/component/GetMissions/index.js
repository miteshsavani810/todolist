import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { filter } from "../../index";

const missions = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      id
      launch_site {
        site_name_long
      }
    }
  }
`;

const missionWithId = gql`
  query launchesPast($id: String) {
    launchesPast(find: { mission_name: $id }) {
      mission_name
      id
      launch_site {
        site_name_long
      }
    }
  }
`;

const Client_side_filterMission = gql`
  query launchesPasts {
    filteredMission @client {
      mission_name
      id
      launch_site {
        site_name_long
      }
    }

    launchesPast {
      mission_name
      id
      launch_site {
        site_name_long
      }
    }
  }
`;

const GetMissions = () => {
  const [filterText, setFilterText] = useState("");
  const { loading, error, data } = useQuery(Client_side_filterMission, {
    variables: { filter: filter },
  });

  const updateFilter = (e) => {
    setFilterText(e.target.value);
    filter(e.target.value);
  };

  if (loading) return <p> Loading... </p>;
  if (error) {
    console.error(error);
    return <span> Error</span>;
  }

  console.log("list of mission", data);
  return (
    <div className="mt-5">
      <div className="m-5">
        <input type="text" value={filterText} onChange={updateFilter} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mission Name</th>
            <th scope="col">Launce site</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.filteredMission.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.mission_name}</td>
                <td>{d.launch_site.site_name_long}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetMissions;
