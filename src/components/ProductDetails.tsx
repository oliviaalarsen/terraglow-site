// Import hooks and types
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types";

// ProductDetails component displays details for a single product
export default function ProductDetails() {
    const { productId } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState<null | Product>(null);

    // Fetch product data by ID when component mounts
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("http://localhost:3001/products/" + productId);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>loading product details...</div>;
    }

    return (
        <div>
            <h2 className="display-6 text-center">{product.name}</h2>
            <p className="text-center"><strong>brand:</strong> {product.brand}</p>
            <p className="text-center"><strong>price:</strong> ${product.price}</p>
            <p className="text-center"><strong>shade:</strong> {product.shade}</p>
            <p className="text-center"><strong>description:</strong> {product.description}</p>
        </div>
    );
}
