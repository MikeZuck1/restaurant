import Image from "next/image";
import ImageBanner from "@/public/images/Hotel-Restaurant-Waldhaus-in-Leukerbad-Chalet-Chic.jpg";
export default function Banner() {
  return (
    <section>
      <div className="">
        <Image src={ImageBanner} alt="Image resto hotel" />
        <div className="absolute left-1/2 top-1/2 w-[24rem] h-[3rem] flex items-center justify-center bg-black/50 text-white text-2xl -translate-x-1/2 -translate-y-1/2">
          <h2 className="uppercase">bienvenue au restaurant !</h2>
        </div>
      </div>
    </section>
  );
}
