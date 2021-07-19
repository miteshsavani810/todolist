import React from "react";
import { GraphQLClient, ClientContext } from "graphql-hooks";

import Mission from "./component/Mission";

const GraphQL = () => {
  const client = new GraphQLClient({ url: "https://api.spacex.land/graphql/" });

  return (
    <ClientContext.Provider value={client}>
      <div className="container m-4">
        <Mission />
      </div>
    </ClientContext.Provider>
  );
};

export default GraphQL;
