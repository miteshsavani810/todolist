import React from "react";
import { useQuery } from "graphql-hooks";

const listOfMission = `
    query CompletedMission {
        launchesPast(limit: 10) {
            mission_name
        }
}`;

const Mission = () => {
  const { data } = useQuery(listOfMission);
  console.log(data);

  return (
    <div>
      {data &&
        data.launchesPast.map((mission, index) => (
          <p key={index} className="p-2 border rounded shadow-sm p-3 bg-white">
            {mission.mission_name}
          </p>
        ))}
    </div>
  );
};

export default Mission;
