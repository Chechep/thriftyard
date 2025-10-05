export default function ProductCardMinimal({ product, onClick }) {
  const mainImage = product.images[0]; // show first image

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col text-gray-800 dark:text-gray-200"
    >
      <img
        src={mainImage}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{product.category}</p>
      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
        Ksh {product.price}
      </p>
    </div>
  );
}
