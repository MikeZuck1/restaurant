export default function Header() {
  return (
    <header className="bg-red-950">
      <div className="flex justify-between px-[2rem] py-[2rem]">
        <div className="flex gap-[.9rem] text-[#fff]">
          <div className="">Logo</div>
          <h1 className="">Restaurant le CSS</h1>
        </div>
        <nav className="">
          <ul className="flex gap-[3rem] text-gray-400">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Notre Philosophie</a>
            </li>
            <li>
              <a href="#">La Carte</a>
            </li>
            <li>
              <a href="#">Infos Pratiques</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
