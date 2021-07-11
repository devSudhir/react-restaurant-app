import { v4 as uuid } from "uuid";
import { food } from "./LayoutRes.module.css";
export function LayoutRes({ rest }) {
  return (
    <div className={food}>
      {rest.map((ele) => (
        <div>
          <div id={uuid()}>
            <span id={uuid()}>
              <img src={ele.image} alt="food_image" />
            </span>
            <span id={uuid()}>
              <h2>{ele.name}</h2>
              <p>{ele.tag.join(",")}</p>
              <p>
                Min &#8377;{ele.min}{" "}
                <li style={{}}>Up to {ele.timeForDelivery} min</li>
              </p>
              <p>costForOne:{ele.costForOne}</p>
              <p>Payments:{ele.paymentMethods.join(",")}</p>
            </span>
            <span id={uuid()}>
              <h3 style={{ padding: "5px" }}>{ele.rating}</h3>
              <p
                style={{
                  color: "greenyellow",
                  margin: "10px 0",
                  fontWeight: "700"
                }}
              >
                {ele.votes} votes
              </p>
              <p style={{ color: "tomato", fontWeight: "700" }}>
                {ele.reviews} reviews
              </p>
            </span>
          </div>
          <div>
            <hr />
            <button style={{ textAlign: "right" }}>Order Online</button>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}
