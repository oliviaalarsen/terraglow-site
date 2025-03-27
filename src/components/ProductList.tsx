// Importing necessary hooks, types, and image asset
import { useState } from "react";
import type { Product } from "../types";
import { Link, useLoaderData } from "react-router-dom";
import makeupImage from '../assets/makeup.png';

// Loader function to fetch product data from API
export const productListLoader = async () => {
    const response = await fetch("http://localhost:3001/products");
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
};

// ProductList component displays a list of all products
export default function ProductList() {
    const products = useLoaderData() as Product[]; // Get product data from loader
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [error, setError] = useState<null | string>(null);

    // Function to add a product to the cart
    const addToCart = async (productId: number) => {
        const newCartItem = {
            productId: productId,
            amount: 1,
        };
        setIsAddingToCart(true);
        try {
            const response = await fetch("http://localhost:3001/cart", {
                method: "POST",
                body: JSON.stringify(newCartItem),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                setError(response.statusText);
            }
        } catch (error: any) {
            setError(error.message);
        }
        setIsAddingToCart(false);
    };

    return (
    <>
      {/* Hero section with product image */}
      <div className="product-hero-container">
        <h2 className="display-5 text-center mb-4">your beauty essentials</h2>
        <div className="hero-image-wrapper">
          <img 
            src={makeupImage}
            alt="our earthen-rich products" 
            className="hero-beach-image"
          />
        </div>
      </div>

      {/* Product cards grid */}
      <div className="d-flex flex-wrap gap-2 position-relative">
        {error && <p className="text-danger">{error}</p>}
        {products.map((product) => (
          <div className="card flex-grow-1 shimmer-card" key={product.id}>
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text">brand: {product.brand}</p>
              <p className="card-text">shade: {product.shade}</p>
              <p className="product-description">{product.description}</p>
              <p><Link to={"/products/" + product.id}>view details</Link></p>
              <button
                className="glow-button"
                disabled={isAddingToCart}
                onClick={() => addToCart(product.id)}
              >
                {isAddingToCart ? "adding..." : "$" + product.price.toFixed(2) + " - add to bag"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
    );
}
