export default function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardconatiner h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-3 rounded-full border-2 left-10 bottom-10">
            &copy; check
          </button>
        </div>
      </div>
      <div className="cardconatiner flex gap-5 h-[50vh] w-1/2">
        <div className="card rounded-xl w-1/2 h-full bg-[#5a7370]">
          <div className="card relative rounded-xl w-full h-full  flex items-center justify-center">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            />
            <button className="absolute px-5 py-3 rounded-full border-2 left-10 bottom-10">
              &copy; check
            </button>
          </div>
        </div>
        <div className="card rounded-xl w-1/2 h-full bg-[#747a79]">
          <div className="card relative rounded-xl w-full h-full flex items-center justify-center">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            />
            <button className="absolute px-5 py-3 rounded-full border-2 left-10 bottom-10">
              &copy; check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
