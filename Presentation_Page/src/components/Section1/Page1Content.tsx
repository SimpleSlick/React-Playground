import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

type User = {
  img: string;
  intro: string;
  tag: string;
  color: string;
};

type Page1ContentProps = {
  user: User[];
};

export default function Page1Content({ user }: Page1ContentProps) {
  return (
    <div className="pb-10 pt-6 flex gap-10 items-center p-17 h-[90vh] ">
      <LeftContent />
      <RightContent user={user} />
    </div>
  );
}
