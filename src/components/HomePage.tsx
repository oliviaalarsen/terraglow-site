// Importing the hero image and newsletter component
import modelImage from '../assets/model.png';
import NewsletterSignup from "../components/NewsletterSignup";

// HomePage component displays the main landing section of the site
export default function HomePage() {
    return (
      <section className="homepage">
          {/* Page headline */}
          <h1 className="display-2 mb-4">welcome to terraglow</h1>

          {/* Hero image */}
          <img 
            src={modelImage}
            alt="clean girl aesthetic model" 
            className="beauty-hero"
          />

          {/* Tagline and Newsletter */}
          <div className="homepage-text">
            <h2 className="display-6 mt-4">radiant beauty, simplified</h2>
            <p>
              discover curated essentials designed to elevate your daily routine with soft, minimalist glow
            </p>

            <NewsletterSignup />
          </div>
      </section>
    );
}
