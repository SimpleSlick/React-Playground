import { useState } from "react";
import './index.css';
import { Minimize2 } from 'lucide-react';

type Task = {
  title: string;
  details: string;
};

export default function App() {
  const [title, setTitle] = useState("");
  const[details, setDetails] = useState("");

  const[task, setTask] = useState<Task[]>([]);

  // Form Handling
  const submitHandler = (e: any) => {
    e.preventDefault();

    let copyTask = [...task];

    copyTask.push({title, details})

    setTask(copyTask);

    console.log(copyTask);

    setTitle("");
    setDetails("");
  };

  // Delete Button Handling
  const delete_note = (idx: any) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);
    setTask(copyTask);

    // console.log("Note Deleted");
  }

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
          placeholder="Write Details Here......"
          className="px-5 h-40 py-2 w-full border outline-none text-xl font-medium rounded-3xl"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        {/* Input Submission */}
        <button className="bg-white w-full text-black outline-none px-5 text-xl py-2 rounded-3xl hover:cursor-pointer active:bg-mist-500 active:text-zinc-200 active:scale-99">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 h-screen">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map((elem, idx) => {
            return <div key={idx} id="image" className="relative h-65 w-60 rounded-2xl text-black p-5 bg-cover">
              <button onClick={() => {
                delete_note(idx)
              }} className="absolute cursor-pointer active:scale-90 top-4 right-4 rounded-full"><Minimize2 size={18}/></button>
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium text-neutral-700">{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
