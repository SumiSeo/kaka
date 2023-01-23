import AuthContext from "@/stores/authContext";
import { useContext, useEffect } from "react";

const Expenses = (): JSX.Element => {
  const { user, authReady } = useContext(AuthContext);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/expenses",
        user && {
          headers: {
            Authorization: "Bearer " + user?.token?.access_token,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }, [user, authReady]);
  return (
    <div>
      <h1>Expenses Detail</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non facere
        maiores veniam quis similique modi, earum, explicabo soluta, deserunt
        perferendis at commodi vel accusamus molestiae. Quo repellendus rem
        consequuntur molestiae!
      </p>
    </div>
  );
};

export default Expenses;
