import { CartItem, Product } from "../types";

type Props = {
  item: CartItem;
  products: Product[];
  onRemove: (itemId: number) => void; 
};

export default function CartItemRow({ item, products, onRemove }: Props) {
  const product = products.find((p) => p.id === item.productId);

  return (
    <tr>
      <td>{product ? `⟡  ${product.name}` : "❌ PRODUCT NOT FOUND"}</td>
      <td>${product?.price.toFixed(2)}</td>
      <td>{item.amount}</td>
      <td>
        <button 
          className="btn btn-sm btn-dark"
          onClick={() => onRemove(item.id)}
        >
          ✖ Remove
        </button>
      </td>
    </tr>
  );
}
