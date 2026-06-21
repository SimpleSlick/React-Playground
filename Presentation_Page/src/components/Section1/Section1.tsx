import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

type User = {
  img: string;
  intro: string;
  tag: string;
  color: string;
};

type Section1Props = {
  user: User[];
};

export default function Section1({ user }: Section1Props) {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Content user={user} />
    </div>
  );
}
