export default function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-3 rounded-full border-2 left-10 bottom-10">
            &copy; 2019-2024
          </button>
        </div>
      </div>
      <div className="cardconatiner flex gap-5 h-[50vh] w-1/2">
        <div className="card rounded-xl w-1/2 h-full bg-[#5a7370]">
          <div className="card relative rounded-xl w-full h-full  flex items-center justify-center">
            <img
              className="w-32 capitalize"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            />
            <button className="absolute px-5 py-3 rounded-full border-2 left-10  bottom-10 uppercase">
              Rating 5.0 on clutch
            </button>
          </div>
        </div>
        <div className="card rounded-xl w-1/2 h-full bg-[#212121]">
          <div className="card relative rounded-xl w-full h-full flex items-center justify-center">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            />
            <button className="absolute px-5 py-3 rounded-full border-2 left-10 bottom-10 uppercase">
              Alumni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
