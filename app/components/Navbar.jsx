export function Navbar() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
      </style>

      <div className="flex">
        <div className="pl-4 md:pl-10 pt-4 md:pt-6 flex items-center gap-4">
          <img
            src="/st1.png"
            alt="logo"
            className="transform scale-x-[-1] w-10 h-10 md:w-10 md:h-10 "
          />
          <h2 className="lilita-one-regular text-xl md:text-3xl">ASTRA</h2>
        </div>
        <div className="flex pl-50">
        <div className="border flex justify-center rounded-2xl pr-4 pl-4 ">
          <button>Sigin In</button>
        </div>
        </div>
        {/* <div className="">
          <button className="AstraPro ">
            <div className="wrapper">
              <span>Get AstraPro</span>
              <div className="circle circle-12"></div>
              <div className="circle circle-11"></div>
              <div className="circle circle-10"></div>
              <div className="circle circle-9"></div>
              <div className="circle circle-8"></div>
              <div className="circle circle-7"></div>
              <div className="circle circle-6"></div>
              <div className="circle circle-5"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-1"></div>
            </div>
          </button>
        </div> */}
      </div>
    </div>
  );
}
