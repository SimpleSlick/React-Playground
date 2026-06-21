import RightCard from "./RightCard";

type User = {
  img: string;
  intro: string;
  tag: string;
  color: string;
};

type RightContentProps = {
  user: User[];
};

export default function RightContent({ user }: RightContentProps) {
  return (
    <div
      id="right"
      className="h-full w-2/3 p-6 flex overflow-x-auto flex-nowrap gap-9"
    >
      {user.map((item, index) => (
        <RightCard key={index} user={item} index={index} />
      ))}
    </div>
  );
}
