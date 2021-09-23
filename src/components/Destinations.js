import { useState } from "react";
import TravelForm from "./TravelForm";

function Destinations() {
  const [show, setHidden] = useState(true);

  return (
    <>
      <h1 className="title"> Destinations </h1>
      <div className="side-travelform">
        <button className="button" onClick={() => setHidden(!show)}>
          {" "}
          show submission form{" "}
        </button>
        {show ? <TravelForm /> : null}
      </div>
    </>
  );
}

export default Destinations;
