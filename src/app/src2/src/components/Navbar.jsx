import macCrest from '../images/mcmaster/macCrest.png';

const Navbar = () => {

    const navLinks = [
      {
        name: "Home",
        href: "/",
        icon: null,
      },
      {
        name: "Demo",
        href: "/demo",
        icon: null,
      },
      {
        name: "GitHub",
        href: "https://github.com",
        icon: null,
      },
    ]

    return (
        <div className="w-full mx-auto bg-white flex fixed z-10 top-0 shadow-md">
            <div className="w-6/12 pl-6 flex py-3 gap-4 items-center">
                <div>
                  <img src={macCrest} className="w-10" />
                </div>
                <div className="flex flex-col">
                  <h1 className="hidden lg:block text-lg text-slate-800 leading-6">2022-23 Capstone Project - Roadside Object Detection</h1>
                  <h1 className="hidden sm:block lg:hidden text-lg text-slate-800 leading-6">2022-23 Capstone Project</h1>
                  <h1 className="hidden md:block text-md text-slate-500">by Nihal Azavedo, Tinson Chen, Joe Furfaro</h1>
                </div>
            </div>
            <div className="w-6/12 pr-6 flex gap-4 lg:gap-0 flex-row-reverse">
              {navLinks.reverse().map((l, index) => {
                return l.href != window.location.pathname+window.location.search ?
                <a key={"nl-" + index} className="text-center w-20 lg:w-24 pt-5 text-slate-800 hover:text-slate-500" href={l.href}>
                  {l.name}
                </a> :
                <a key={"nl-" + index} className="text-center w-20 lg:w-24 border-b-4 font-bold border-mac-maroon pt-5 text-mac-maroon" href={l.href}>
                {l.name}
              </a>
              })}
            </div>
        </div>
    );
  }

  export default Navbar;