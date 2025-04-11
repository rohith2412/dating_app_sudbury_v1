export function Navbar() {
  return (
    <div className="m-3">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
      </style>

      <div className="flex ">
        <div className="pl-15  pt-4  flex items-center gap-4">
          <img
            src="/st1.png"
            alt="logo"
            className="transform scale-x-[-1] w-10 h-10  "
          />
          <h2 className="lilita-one-regular text-xl ">ASTRA</h2>
        </div>
        <div className="pr-15  mt-4 flex w-full justify-end  h-12  ">
          <div className="join border flex  justify-center rounded-4xl  pr-4 pl-4 ">
            <button className="lilita-one-regular font-bold text-gray-800 tracking-tight">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
