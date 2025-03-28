import Image from "next/image";
import Chief from "@/public/images/chief_kitchen.png";

export default function History() {
  return (
    <>
      <section className="mt-[3rem]">
        <div className="flex flex-row justify-between py-[2rem] px-[21rem] mx-auto">
          <div className="w-[15rem] text-center flex items-center justify-around">
            <Image src={Chief} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center px-[10rem] w-[31rem]">
            <h1 className="font-bold text-red-900">Notre Philosophie</h1>
            <p className="mt-[2rem] w-[30rem] text-sm/7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
              Fugit possimus molestiae autem consequuntur culpa quos aliquid
              <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ab ut quidem necessitatibus praesentium, officia nihil animi
              ipsa. Unde vitae beatae
              <br /> <br /> Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Magnam quas, quaerat illo, aperiam voluptate quis laboriosam
              <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel id, corporis possimus porro optio dolore aspernatur.{" "}
              <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Repellat, impedit doloremque facere similique deleniti.{" "}
              <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Repellat, impedit doloremque facere similique deleniti.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
