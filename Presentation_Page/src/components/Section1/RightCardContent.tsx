import { ArrowRight } from "lucide-react";

type User = {
  img: string;
  intro: string;
  tag: string;
  color: string;
};

type RightCardContentProps = {
  user: User;
  index: number;
};

export default function RightCardContent({
  user,
  index,
}: RightCardContentProps) {
  return (
        <>
      <img
        src={user.img}
        className="h-full w-full object-cover absolute inset-0"
      ></img>
      <div className="absolute top-0 left-0 h-full w-full p-9 flex flex-col justify-between bg-linear-to-t from-black/86 via-black/47 to-transparent">
        <h2 className="h-11 w-11 bg-white rounded-full justify-center items-center flex text-2xl font-semibold">
          {index + 1}
        </h2>
        <div>
          <p className="text-lg text-slate-100 leading-relaxed mb-12">
            {user.intro}
          </p>
          <div className="flex justify-end">
            <button
              className={`${user.color} text-white px-6 py-2 font-semibold text-lg rounded-full`}
            >
              {user.tag}
            </button>
            <button
              className={`${user.color} text-white px-4 py-2 font-semibold text-lg rounded-full`}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
