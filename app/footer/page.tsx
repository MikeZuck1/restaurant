export default function Footer() {
  const firstSentence = "Resautrant le CSS";
  const secondSentence = "Tous droits réservés";
  
  return (
    <div className="flex justify-center items-center h-[5rem] bg-red-950">
      <p className="text-[#fff]">
        <span className="">&copy;</span> 2020 - {firstSentence} -{" "}
        {secondSentence}
      </p>
    </div>
  );
}