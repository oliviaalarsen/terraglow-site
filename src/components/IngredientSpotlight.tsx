// IngredientSpotlight showcases featured skincare ingredients
export default function IngredientSpotlight() {
  const ingredients = [
    {
      name: "Jojoba Oil",
      benefit: "Deeply hydrates and balances oil production.",
      img: "https://hips.hearstapps.com/hmg-prod/images/jojoba-oil-in-the-glass-bottle-royalty-free-image-1574089162.jpg",
    },
    {
      name: "Peptides",
      benefit: "Supports collagen for firmer, youthful skin.",
      img: "https://cdn.shopify.com/s/files/1/0557/0369/9549/articles/A_peptide_serum_400x400.jpg.webp?v=1710512373",
    },
    {
      name: "Green Tea Extract",
      benefit: "Packed with antioxidants to soothe and protect your skin barrier.",
      img: "https://th.bing.com/th/id/OIP._9U7B4KDFIjllVrR2QKIngHaE8?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="container my-5 p-5 rounded-4 shadow" style={{ backgroundColor: "#fffaf5", border: "1px solid #e4dcd2" }}>
      <h2 className="text-center text-brown mb-4">ingredients we love 🌿</h2>

      {/* Ingredient cards in responsive grid */}
      <div className="row g-4">
        {ingredients.map((ingredient, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "#f8eee8" }}>
              <img src={ingredient.img} className="card-img-top rounded-top" alt={ingredient.name} />
              <div className="card-body">
                <h5 className="card-title text-brown">{ingredient.name}</h5>
                <p className="card-text text-brown">{ingredient.benefit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
