//import hooks and types
import { useEffect, useState } from "react";
import { CartItem, Product } from "../types";
import CartItemRow from "./CartItemRow";

//CartList displays items in the shopping cart
export default function CartList() {
  // State variables for cart items, products, loading, and errors
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch cart items and products on initial render
  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/cart");
        if (!response.ok) {
          setErrorMessage(response.statusText);
        } else {
          const data = await response.json();
          setCartItems(data);
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchCart();

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) {
          setErrorMessage("Oops! " + response.statusText);
        } else {
          const data = await response.json();
          setProducts(data);
          setErrorMessage("");
        }
      } catch (error: any) {
        setErrorMessage("Oops! " + error.message);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Remove a cart item by ID
  const removeFromCart = async (itemId: number) => {
    try {
      const response = await fetch(`http://localhost:3001/cart/${itemId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
      }
    } catch (error) {
      console.error("Failed to remove item", error);
    }
  };

    // Display loading, error, or cart table
  return (
    <>
      <h2 className="display-5 text-center mb-3">your shopping bag</h2>

      {loading ? (
        <p className="text-body-tertiary">loading your beauty picks...</p>
      ) : errorMessage ? (
        <p className="text-danger">{errorMessage}</p>
      ) : (
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>product</th>
                <th>price</th>
                <th>qty</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  products={products}
                  onRemove={removeFromCart}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
