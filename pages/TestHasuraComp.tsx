import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "@/queries/query_users";

const TestHasuraComp = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return <div>Hasura test</div>;
};

export default TestHasuraComp;
