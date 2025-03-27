// Represents a single product item
export type Product = {
  id: number;            // Unique product ID
  name: string;          // Product name
  brand: string;         // Brand name
  price: number;         // Price in USD
  description: string;   // Short product description
  shade: string;         // Color/shade name
};

// Represents an item in the shopping cart
export type CartItem = {
  id: number;            // Unique cart item ID
  productId: number;     // ID of the associated product
  amount: number;        // Quantity of this product in cart
};
