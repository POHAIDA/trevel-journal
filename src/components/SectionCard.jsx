export default function SectionCard(props) {
  console.log(props);

  return (
    <>
      <div className="country--block">
        <div className="country--block-img">
          <img src={`./images/${props.imageUrl}`} />
        </div>
        <div className="country--block-description">
          <div className="location">
            <span>
              <img src="./images/map.png" alt="map" /> {props.location}
            </span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="title">{props.title}</h1>
          <h4 className="date">
            {props.startDate} - {props.endDate}
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
      <hr className="line" />
    </>
  );
}
