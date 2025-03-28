import Image from "next/image";
import SaladeImage from "@/public/images/salade_img.jpg";

export default function Salade() {
  return (
    <div className="flex justify-center w-full bg-gray-200">
      <Image
        src={SaladeImage}
        alt="salade image"
        objectFit="cover"
      />
    </div>
  );
}