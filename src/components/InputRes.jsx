import { useState } from "react";
import { v4 as uuid } from "uuid";
import data from "./db.json";
import style2 from "./InputRes.module.css";

export function InputRes() {
  const [flag, setFlag] = useState(false);
  //const [restValues, setRestValues] = useState({});
  console.log("data", data);
  const SaveRestaurant = (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.name.value,
      image: e.target.image.value,
      costForOne: e.target.costForOne.value,
      min: e.target.min.value,
      timeForDelivery: e.target.timeForDelivery.value,
      rating: e.target.rating.value,
      votes: e.target.votes.value,
      reviews: e.target.reviews.value
    };

    const fs = require("fs");
    const jsonString = JSON.stringify(obj);
    console.log("json", jsonString);
    fs.writeFile("./db.json", jsonString);
    setFlag(false);
  };

  return (
    <>
      <button onClick={() => setFlag(true)}>Add Restaurant</button>
      {flag ? (
        <div className={`${style2.makeFormCenter}`}>
          <form action="" onSubmit={(e) => SaveRestaurant(e)}>
            <input
              type="text"
              placeholder="Enter Restaurant name"
              name="name"
              id={uuid()}
            />
            <input
              id={uuid()}
              type="text"
              placeholder="Enter Image URL"
              name="image"
            />
            <input
              type="number"
              placeholder="Enter Cost For One"
              name="costForOne"
              id={uuid()}
            />
            <input
              type="number"
              placeholder="Enter Minimum Delivery Price"
              name="min"
              id={uuid()}
            />
            <input
              type="number"
              placeholder="Enter Time To Deliver Food"
              name="timeForDelivery"
              id={uuid()}
            />
            <input
              id={uuid()}
              type="number"
              placeholder="Enter Rating"
              name="rating"
            />
            <input
              id={uuid()}
              type="number"
              placeholder="Enter Votes"
              name="votes"
            />
            <input
              id={uuid()}
              type="number"
              placeholder="Enter Reviews"
              name="reviews"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
