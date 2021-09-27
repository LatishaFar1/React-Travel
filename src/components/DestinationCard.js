function DestinationCard({ dest }) {
  return (
    <div>
      <div>
        <img src={dest.img_url} alt={dest.location} />
        <div>
          <h3>{dest.location}</h3>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
