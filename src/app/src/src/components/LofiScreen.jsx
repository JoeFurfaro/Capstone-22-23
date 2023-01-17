import lofiMac from "../images/lofi-mac.svg";

const LofiScreen = ({children}) => {
    const WindowControlButton = ({color}) => {
        if(color === "green")
          return <div className={"w-4 h-4 bg-green-500 hover:bg-green-600 active:bg-green-700 hover:cursor-pointer rounded-full"}></div>
        if(color === "yellow")
          return <div className={"w-4 h-4 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 hover:cursor-pointer rounded-full"}></div>
        if(color === "red")
          return <div className={"w-4 h-4 bg-red-500 hover:bg-red-600 active:bg-red-700 hover:cursor-pointer rounded-full"}></div>
    }
  
    const BrowserAction = () => {
        return <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-300 hover:bg-slate-400 hover:bg-opacity-30 active:bg-opacity-60 hover:cursor-pointer"></div>
    }
  
    const TinyNavLink = ({active=false}) => {
      if(!active) {
        return <div className="w-10 rounded-full h-3 hover:cursor-pointer hover:bg-opacity-60 active:bg-opacity-70 bg-slate-400 bg-opacity-40"></div>
      } else {
        return <div className="w-10 hover:cursor-pointer">
            <div className="w-10 rounded-full h-3 bg-red-400 bg-opacity-40"></div>
            <div className="w-10 h-1 bg-red-400 bg-opacity-40 mt-4"></div>
        </div>
      }
    }

    return (
        <div className="relative z-10 w-11/12 sm:container mx-auto bg-slate-200 rounded-lg mt-12 lg:mt-16 bg-opacity-90 shadow-xl">
          <div className="w-full rounded-t-lg bg-slate-300 h-8 bg-opacity-90 pt-2">
            <div className="w-3/12 rounded-full h-4 bg-slate-400 bg-opacity-80 mx-auto"></div>
            <div className="w-3/12 absolute right-0 top-0 h-8">
                <div className="flex w-full pr-3 gap-2 pt-2 flex-row-reverse">
                  <WindowControlButton color="green" />
                  <WindowControlButton color="yellow"/>
                  <WindowControlButton color="red" />
                </div>
            </div>
          </div>
          <div className="w-full bg-slate-200 h-12 bg-opacity-80 gap-3 flex">
            <div className="w-1/12 md:w-1/12 h-12 flex pl-1 sm:pl-3 gap-1 sm:gap-3 sm:pt-2 pt-3">
                <h1 className="sm:text-xl text-slate-400 hover:text-slate-500 active:text-slate-600 hover:cursor-pointer"><i className="fa-solid fa-arrow-left"></i></h1>
                <h1 className="sm:text-xl text-slate-400 hover:text-slate-500 active:text-slate-600 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></h1>
            </div>
            <div className="w-7/12 md:w-9/12 h-12 py-2">
              <div className="w-full h-8 bg-white hover:cursor-text hover:bg-slate-100 hover:bg-opacity-100 bg-opacity-70 rounded-lg flex px-2">
                <div className="w-6/12 h-4 bg-slate-300 bg-opacity-90 mt-2 rounded-lg"></div>
              </div>
            </div>
            <div className="w-3/12 md:w-2/10 h-1 flex flex-row-reverse px-1 sm:px-2 gap-2 pt-3 sm:pt-2">
              <BrowserAction />
              <BrowserAction />
              <BrowserAction />
            </div>
          </div>
          <div className="w-full bg-white h-12 bg-opacity-60 flex">
            <div className="w-6/12 h-12 flex gap-2 ml-3 pt-2">
              <img src={lofiMac} className="h-8" />
              <div className="hidden sm:block">
                <div className="w-64 rounded-full h-4 hover:cursor-text bg-slate-400 bg-opacity-40"></div>
                <div className="w-48 rounded-full h-3 hover:cursor-text bg-slate-300 bg-opacity-60 mt-1"></div>
              </div>
            </div>
            <div className="w-6/12 h-12 flex gap-3 flex-row-reverse pr-3 mt-4">
                <TinyNavLink />
                <TinyNavLink active/>
                <TinyNavLink />
            </div>
          </div>
          <div className="w-full py-8 text-center">
            {children}
          </div>
          <div className="w-full bg-slate-300 rounded-b-lg flex px-10 py-6">
              <div className="w-1/2 pl-3 border-l-2 border-l-slate-400">
                <div className="w-48 rounded-full h-4 hover:cursor-text bg-slate-400 bg-opacity-50"></div>
                <div className="flex gap-1 mt-1">
                    <div className="w-3 h-3 hover:cursor-pointer bg-slate-400 rounded-full bg-opacity-50"></div>
                    <div className="w-24 rounded-full h-3 hover:cursor-pointer bg-slate-400 bg-opacity-50"></div>
                </div>
              </div>
              <div className="bg-slate-400 hover:bg-opacity-40 active:bg-opacity-50 hover:cursor-pointer ml-auto rounded-lg bg-opacity-30 w-24 h-8"></div>
          </div>
        </div>
    );
}

export default LofiScreen;