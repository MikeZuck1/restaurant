export default function Informations() {
  const schedule = {
    firstTitle: "horaires d'ouverture",
    secondTitle: "adresse",
    week: "Du Lundi à jeudi : 12h00-14h30 et 19h00-22h30",
    weekend: "Du Vendredi et Samedi : 12h00-14h30 et 19h00-23h30",
    sunday: "Du Dimache : 12h00-14h30 et 19h00-22h30",
    adress: "",
    sentence: "",
  };

  return (
    <div className="bg-amber-200 h-[40rem]">
      <h1 className="mt-[2rem] text-center text-3xl font-medium capitalize text-red-900">
        infos pratiques
      </h1>
      <div className="flex flex-row justify-around px-[15rem]">
        <div className="">
          <div className="bg-blue-400 text-sm mt-[3rem] h-[20rem] w-[25rem]">
            <h3 className="font-bold">{schedule.firstTitle}</h3>
            <p className="">
              <p className="my-7">{schedule.week}</p>
              <p className="my-7">{schedule.weekend}</p>
              <p className="my-7">{schedule.sunday}</p>
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-400 font-bold text-sm mt-[3rem] h-[30rem] w-[25rem]">
            <h3>{schedule.secondTitle} :</h3>
            <p className="my-7">{}</p>
            <p className="my-7">{}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
