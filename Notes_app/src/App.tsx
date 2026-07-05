import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const[details, setDetails] = useState("");

  // Form Handling
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(title);

    setTitle("");
    setDetails("");
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-10 lg:w-1/2 flex-col items-start gap-7"
      >
        <h1 className="font-bold text-3xl">Add Notes</h1>

        {/* Input For Notes Heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 h-20 w-full py-2 font-medium text-xl border outline-none rounded-3xl"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>

        {/* Description Input */}
        <textarea
          placeholder="Write Details"
          className="px-5 h-40 py-2 w-full border outline-none text-xl font-medium rounded-3xl"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="bg-white w-full text-black outline-none px-5 text-xl py-2 rounded-3xl">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 h-screen">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-6 h-full overflow-auto">
        <div className="h-65 w-55 rounded-3xl bg-white"></div>
        <div className="h-65 w-55 rounded-3xl bg-white"></div>
        <div className="h-65 w-55 rounded-3xl bg-white"></div>
        </div>
      </div>
    </div>
  );
}
