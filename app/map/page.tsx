export default function Map() {
  const firstPrice = 19;
  const secondPrice = 27;

  return (
    <div className="flex-col justify-center h-[35rem] p-[4rem] bg-gray-200">
      <h1 className="text-center capitalize font-medium text-red-900">
        la carte
      </h1>
      {/* FIRST SESSION OF PRICE */}
      <div className="mt-[3rem] text-center font-medium">
        Notre menu du midi à {firstPrice} €
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

      {/* SECOND SESSION OF PRICE */}
      <div className="mt-[3rem] text-center font-medium">
        Notre menu du midi à {secondPrice} €
      </div>
      <p className="mt-6 text-center text-sm">
        Terrine de pot -au- feu, vinaigrette aux oeufs
      </p>
      <p className="mt-6 text-center text-sm">
        Poisson du jour poêlé, vinaigrette citron meyer et jeunes légumes bio de
        notre producteur
      </p>
      <p className="mt-6 text-center text-sm">
        Chou à la crème pâtissière à la vanille bourbon et citron confit
      </p>
    </div>
  );
}
