import Section1 from "./components/Section1/Section1";
import image1 from "./assets/professioanl.avif";
import image2 from "./assets/work.avif";
import image3 from "./assets/meet.avif";
import image4 from "./assets/working.avif";
import image5 from "./assets/inter.avif";

export default function App() {
  type custom = {
    img: string;
    intro: string;
    tag: string;
    color: string;
  };

  const users: custom[] = [
    {
      img: image1,
      intro:
        "Tech-savy professionals who value fact, secure, and personalized digital banking experiences.",
      tag: "Satisfied",
      color: "bg-sky-700",
    },
    {
      img: image2,
      intro:
        "Small businesses looking for accessible financial services and flexible banking support.",
      tag: "Underserved",
      color: "bg-lime-600",
    },
    {
      img: image3,
      intro:
        "Working professionals who still lack access to complete financial products and credit.",
      tag: "Underbanked",
      color: "bg-slate-700",
    },
    {
      img: image4,
      intro:
        "Growing organizations needing smarter collaboration and scalable banking solutions.",
      tag: "Underserved",
      color: "bg-lime-600",
    },
    {
      img: image5,
      intro:
        "Corporate teams enjoying efficient, reliable, and fully integrated digital banking services.",
      tag: "Satisfied",
      color: "bg-sky-700",
    },
  ];

  return (
    <div>
      <Section1 user={users} />
    </div>
  );
}
