import { useEffect, useState } from "react";
import TravelForm from "./TravelForm";

function Destinations() {
  const [show, setHidden] = useState(true);
  const [dest, setDest] = useState([]);

  useEffect(() => {
    fetch("http:localhost:3000/Destinations")
      .then((response) => response.json())
      .then((data) => setDestination(data));
  }, []);

  const destinationCards = dest.map((dest) => {
    return <DestinationCard dest={dest} key={dest.id} />;
  });

  return (
    <>
      <h1 className="title"> Destinations </h1>
      <div className="side-travelform">
        <div className="side-travelform-inner">
          <button className="button" onClick={() => setHidden(!show)}>
            {" "}
            show submission form{" "}
          </button>
          {show ? <TravelForm /> : null}
        </div>
      </div>
    </>
  );
}

export default Destinations;
