import { useEffect } from "react";

const Expenses = (): JSX.Element => {
  useEffect(() => {
    fetch("/.netlify/functions/kaka")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
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
