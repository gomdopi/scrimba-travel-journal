export default function Entry(props: {
  img: { src: string; alt: string }
  title: string
  country: string
  googleMapsLink: string
  dates: string
  text: string
}) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.img.src} alt={props.img.alt} className="main-image" />
      </div>
      <div className="info-container">
        <img src="marker.png" alt="map marker icon" className="marker-icon" />
        <span className="entry-location">{props.country.toUpperCase()}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h1 className="entry-title">{props.title}</h1>
        <p className="entry-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  )
}
