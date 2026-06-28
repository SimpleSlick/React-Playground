export default function App(){
  return(
    <div className="h-screen bg-black text-white">
      <form className="flex p-10 flex-col items-start gap-7">
        <input type="text" placeholder="Enter Notes Heading" className="px-5 h-20 w-1/2 py-2 border rounded-3xl"></input>
        <input type="text" placeholder="Write Details" className="px-5 h-40 py-2 w-1/2 border rounded-3xl"></input>
        <button className="bg-white text-black px-5 py-2 rounded-3xl w-1/2">Add Notes</button>
      </form>
    </div>
  )
}