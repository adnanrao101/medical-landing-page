import "./Hero.css";
// import googleLogo from "./google.png"; // apna Google logo ya icon import karna
import user1 from "./pic2.png"; // demo profile images
import user2 from "./pic3.png";
import user3 from "./pic4.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Smile Brighter Today with <span>Edinburgh's</span> Top Dentists
        </h1>
        <p>
          Welcome to City Dental Care Clinic in Edinburgh, which is fully equipped
          with state-of-the-art machines for patient comfort. We offer Invisalign
          treatment, teeth whitening, and smile makeovers to boost confidence and durability.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">BOOK A CONSULTATION</button>
          <button className="btn-outline">EXPLORE OUR SERVICES</button>
        </div>

        {/* Google Reviews Section */}
        <div className="reviews">
          <div className="review-avatars">
            <img src={user1} alt="user" />
            <img src={user2} alt="user" />
            <img src={user3} alt="user" />
          </div>
          <div className="review-text">
            <span>GOOGLE</span>
            {/* <img src={googleLogo} alt="Google" className="google-logo" /> */}
            <p>
              Based on <span>200 reviews</span>
            </p>
          </div>
          <div className="review-stars">
            <span className="rating-text">4.8 out of 5</span>
            <span className="stars">⭐⭐⭐⭐⭐</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;


















































// import './Hero.css'

// function Hero() {
//     return(
//         <>
//         <body>
            
//         </body>
//         </>
//     )
// }

// export default Hero;