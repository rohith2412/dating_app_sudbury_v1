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
        <div className="pr-15 flex w-full justify-end  h-12  ">
          <div className="join border flex  justify-center rounded-4xl  pr-4 pl-4 ">
            <button className="lilita-one-regular font-bold text-black tracking-tight">
              Join Now
            </button>
          </div>
        </div>
        {/* <div className="">
          <button class="AstraPro">
            <div class="wrapper">
              <span>UIVERSE</span>
              <div class="circle circle-12"></div>
              <div class="circle circle-11"></div>
              <div class="circle circle-10"></div>
              <div class="circle circle-9"></div>
              <div class="circle circle-8"></div>
              <div class="circle circle-7"></div>
              <div class="circle circle-6"></div>
              <div class="circle circle-5"></div>
              <div class="circle circle-4"></div>
              <div class="circle circle-3"></div>
              <div class="circle circle-2"></div>
              <div class="circle circle-1"></div>
            </div>
          </button>
        </div> */}
      </div>
    </div>
  );
}
