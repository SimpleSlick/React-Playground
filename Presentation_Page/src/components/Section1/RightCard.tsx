import RightCardContent from "./RightCardContent";

type User = {
  img: string;
  intro: string;
  tag: string;
  color: string;
};

type RightCardProps = {
  user: User;
  index: number;
};

export default function RightCard({ user, index }: RightCardProps) {
  return (
    <div className="h-full w-90 overflow-hidden shrink-0 relative rounded-4xl">
      <RightCardContent user={user} index={index} />
    </div>
  );
}
