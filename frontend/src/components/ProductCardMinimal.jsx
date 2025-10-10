export default function ProductCardMinimal({ product, onClick }) {
  const mainImage = product.images[0];

  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl shadow-md shadow-blue-300 hover:shadow-lg transition p-4 flex flex-col text-gray-800 dark:text-gray-200"
    >
      <img
        src={mainImage}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-black dark:text-white font-medium">
        Ksh {product.price}
      </p>
    </div>
  );
}
