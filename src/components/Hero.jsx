import Data from "../../data";
import Marker from "../assets/images/marker.png";
import "../assets/css/Hero.css";

function Hero() {
  return (
    <main className="hero">
      {Data.map((entry) => {
        return <Entries entriesObj={entry} key={entry.title} />;
      })}
    </main>
  );
}

function Entries({
  entriesObj: { title, img, text, dates, country, googleMapsLink },
}) {
  return (
    <section className="card">
      <img src={img.src} alt={img.alt} className="img" loading="lazy" />
      <div className="entries">
        <div className="country-detail">
          <img src={Marker} alt="marker" className="marker" />
          <h3 className="country">{country}</h3>
          <a className="google-map" href={googleMapsLink} target="_blank">
            View on google map
          </a>
        </div>
        <h2 className="title">{title}</h2>
        <p className="dates">{dates}</p>
        <p className="text">{text}</p>
      </div>
    </section>
  );
}

export default Hero;
