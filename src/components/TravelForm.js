function TravelForm() {
  return (
    <>
      <form className="TravelForm">
        <div>
          <label className="dest-label">LOCATION: </label>

          <input name="Location" type="text" />
          <br />
          <label className="dest-label">IMG URL: </label>
          <input
            name="IMG URL"
            placeholder="Paste a URL of an image of the destination"
            type="text"
          />
          <br />
          <button className="button">Submit</button>
        </div>
      </form>
    </>
  );
}

export default TravelForm;
