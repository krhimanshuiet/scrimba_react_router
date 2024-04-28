/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((res) => {
        setVans(res.vans);
      });
  }, []);
  const vanElement = vans.map((van: any) => (
    <div className="van-title" key={van.id}>
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van?.name}</h3>
        <p>
          ${van?.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));
  return (
    <div className="van-list-container">
      <div className="van-list">{vanElement}</div>
    </div>
  );
};

export default Vans;
