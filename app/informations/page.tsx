
export default function Informations() {
  const schedule = {
    firstTitle: "horaires d'ouverture",
    secondTitle: "adresse",
    week: "Du Lundi à jeudi : 12h00-14h30 et 19h00-22h30",
    weekend: "Du Vendredi et Samedi : 12h00-14h30 et 19h00-23h30",
    sunday: "Du Dimache : 12h00-14h30 et 19h00-22h30",
    adress: "Notre adresse est le 1 rue des moineaux à Paris.",
    sentence: "Trouvez votre itinéraire sur cette carte :",
  };

  return (
    <div className="h-[30rem]">
      <h1 className="mt-[2rem] text-center text-3xl font-medium capitalize text-red-900">
        infos pratiques
      </h1>
      <div className="flex flex-row justify-around px-[15rem]">
        <div>
          <div className="text-sm mt-[3rem] h-[20rem] w-[25rem]">
            <h3 className="font-bold">{schedule.firstTitle}</h3>
            <hr className="my-6 border border-red-900 w-1/6" />
            <p className="my-7">{schedule.week}</p>
            <p className="my-7">{schedule.weekend}</p>
            <p className="my-7">{schedule.sunday}</p>
          </div>
        </div>
        <div>
          <div className="text-sm mt-[3rem] h-[30rem] w-[25rem]">
            <h3 className="font-bold">{schedule.secondTitle} :</h3>
            <hr className="my-6 border border-red-900 w-1/6" />
            <p className="my-7">{schedule.adress}</p>
            <p className="my-7">{schedule.sentence}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
