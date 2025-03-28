export default function Map() {
  const price = 19;

  return (
    <div className="flex-col justify-center h-[30rem] p-[4rem] bg-gray-200">
      <h1 className="text-center capitalize font-medium text-red-900">
        la carte
      </h1>
      <div className="mt-[4rem] text-center font-medium">
        Notre menu du midi à {price} €
      </div>
      <p className="mt-6 text-center text-sm">
        Tranche de foi gras de canard mi-cuit, chuntey et brioche maison
      </p>
      <hr className="" />
      <p className="mt-6 text-center text-sm">
        Jarret de porc confit, purée du moment, jeunes légumes bio de notre
        producteur
      </p>
      <p className="mt-6 text-center text-sm">
        Biscuit chocolat noir, mousse de lait, griotte et chantilly
      </p>
    </div>
  );
}
