import "./db.json";
import { LayoutRes } from "./LayoutRes";
import { InputRes } from "./InputRes";
import { useState } from "react";
import style from "./ShowRestDetails.module.css";
export function ShowRestDetails() {
  let restDetails = require("./db.json");
  const [rest, setRest] = useState(restDetails.Restaurant);
  console.log(rest);
  const sortByStar = (num) => {
    let upDateRest = restDetails.Restaurant.filter((ele) => ele.rating > num);
    setRest(upDateRest);
  };
  const sortByAsc = () => {
    console.log("asc");
    let upDateRest = restDetails.Restaurant.sort((a, b) => {
      return a.costForOne - b.costForOne;
    });
    console.log("asc", upDateRest);
    setRest(upDateRest);
  };
  const sortByDsc = () => {
    console.log("dsc");
    let upDateRest = restDetails.Restaurant.sort((a, b) => {
      return b.costForOne - a.costForOne;
    });
    setRest(upDateRest);
  };
  const sortByCash = () => {
    let upDateRest = restDetails.Restaurant.filter((ele) =>
      ele.paymentMethods.includes("cash")
    );
    setRest(upDateRest);
  };
  const sortByOnline = () => {
    let upDateRest = restDetails.Restaurant.filter((ele) =>
      ele.paymentMethods.includes("online")
    );
    setRest(upDateRest);
  };
  const showAll = () => {
    let upDateRest = restDetails.Restaurant;
    setRest(upDateRest);
  };
  return (
    <div className={`${style.stylelayout}`}>
      <InputRes />
      <div>
        <button onClick={() => sortByStar(1)}>1 star</button>
        <button onClick={() => sortByStar(2)}>2 star</button>
        <button onClick={() => sortByStar(3)}>3 star</button>
        <button onClick={() => sortByStar(4)}>4 star</button>
      </div>
      <div>
        <button onClick={() => sortByAsc()}>Asc</button>
        <button onClick={() => sortByDsc()}>Dsc</button>
      </div>
      <div>
        <button onClick={() => sortByCash()}>cash</button>
        <button onClick={() => sortByOnline()}>online</button>
        <button onClick={() => showAll()}>all</button>
      </div>
      <LayoutRes rest={rest} />
    </div>
  );
}
