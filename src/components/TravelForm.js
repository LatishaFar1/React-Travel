function TravelForm() {
  return (
    <>
      <form className="TravelForm">
        <div>
          <label>Location: </label>
          <br />
          <input name="Location" type="text" />
          <br />
          <label>IMG URL: </label>
          <input
            name="IMG URL"
            placeholder="Paste the URL of an image of the destination"
            type="text"
          />
          <br />
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default TravelForm;
