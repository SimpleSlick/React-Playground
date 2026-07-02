export default function App() {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex p-10 flex-col items-start">
        <div className="flex flex-col w-1/2 gap-7">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 h-20 py-2 font-medium border outline-none rounded-3xl"
          ></input>
          <textarea
            placeholder="Write Details"
            className="px-5 h-40 py-2 border outline-none font-medium rounded-3xl"
          ></textarea>
          <button className="bg-white text-black outline-none px-5 py-2 rounded-3xl">
            Add Notes
          </button>
        </div>
      </form>
    </div>
  );
}
