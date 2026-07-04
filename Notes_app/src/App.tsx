import './index.css';

export default function App() {
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-10 lg:w-1/2 flex-col items-start gap-7"
      >
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 h-20 w-full py-2 font-medium text-xl border outline-none rounded-3xl"
        ></input>
        <textarea
          placeholder="Write Details"
          className="px-5 h-40 py-2 w-full border outline-none text-xl font-medium rounded-3xl"
        ></textarea>
        <button className="bg-white w-full text-black outline-none px-5 text-xl py-2 rounded-3xl">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 p-10 bg-gray-600 h-screen">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        
        <div className="mt-7 flex-1 overflow-y-auto notes-scroll">
          <div className="flex flex-wrap gap-6">
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>
          <div className="h-65 w-55 rounded-3xl bg-white"></div>

        </div>
        </div>
      </div>
    </div>
  );
}
