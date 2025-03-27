// Import brand-themed image
import makeupImage from "../assets/makeup.png";

// AboutUs component introduces the brand
export default function AboutUs() {
    return (
      <section className="about-us">
        <h1 className="display-5">we are terraglow</h1>

        {/* Hero image */}
        <div className="hero-image-wrapper">
          <img 
            src={makeupImage}
            alt="our earthen-rich products" 
            className="hero-beach-image"
          />
        </div>

        {/* Brand story */}
        <p className="mt-4">
          inspired by the earth, designed for your glow. terraglow blends skin-loving ingredients 
          with minimalist beauty to create essentials that let your natural radiance shine through.
        </p>
      </section>
    );
}
