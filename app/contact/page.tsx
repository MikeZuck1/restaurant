import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const obj = {
    title: "nous contacter",
    name: "votre nom",
    mail: "votre mail",
    message: "votre message",
  };

  return (
    <div className="h-[30rem] bg-gray-200">
      <div className="mt-[2rem]">
        <h1 className="text-center text-red-900 first-letter:uppercase text-3xl font-medium">
          {obj.title}
        </h1>
      </div>
      <div className="mt-[3rem] px-[17rem]">
        <form action="">
          <label htmlFor="">{obj.name} :</label>
          <Input className="" />
          <label htmlFor="">{obj.mail} :</label>
          <Input className="" />
          <label htmlFor="">{obj.message} :</label>
          <Textarea />
          <div className="flex justify-center mt-[1rem]">
            <Button className="bg-red-950 cursor-pointer px-[2rem]">
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
