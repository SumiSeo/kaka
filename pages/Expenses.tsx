import AuthContext from "@/stores/authContext";
import { useContext, useEffect, useState } from "react";

const Expenses = (): JSX.Element => {
  const { user, authReady } = useContext(AuthContext);
  const [expenses, setExpenses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/expenses",
        user
          ? {
              headers: {
                Authorization: "Bearer " + user?.token?.access_token,
              },
            }
          : {
              headers: {
                Authorization: "Bearer ",
              },
            }
      )
        .then((response) => {
          if (!response.ok) {
            throw Error("You must be logged in to view this content");
          }
          return response.json();
        })
        .then((data) => {
          setExpenses(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setExpenses(null);
        });
    }
  }, [user, authReady]);
  return (
    <div>
      <h1>Expenses Detail</h1>
      <p>{!authReady && <div>Loading...</div>}</p>
      <p>{error && <div>{error}</div>}</p>
      <p>
        {expenses &&
          expenses?.map((expense: any) => (
            <div key={expense.name}>{expense.name}</div>
          ))}
      </p>
    </div>
  );
};

export default Expenses;
