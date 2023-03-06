import macLogo from "../images/mcmaster/macLogo.png";


const Footer = () => {
    return (
      <div className="z-10 w-full bg-slate-300 py-16 mt-auto">
          <div className="container mx-auto flex md:flex-row flex-col items-center">
              <div className="md:border-l-2 md:border-l-slate-400 md:pl-4">
                  <h2 className="sm:hidden text-center md:text-left font-bold tracking-wide text-slate-700">THANK YOU!</h2>
                  <h2 className="hidden sm:block text-center md:text-left font-bold tracking-wide text-slate-700">THANK YOU FOR CHECKING OUT OUR PROJECT!</h2>
                  <a href="https://github.com/JoeFurfaro/Capstone-22-23" className="mt-1 md:mt-0 text-center md:text-left block tracking-wide text-slate-700 hover:text-slate-600"><i className="fa-brands fa-github mr-1"></i>View on GitHub</a>
              </div>
              <a href="https://mcmaster.ca" className="hidden md:block md:ml-auto">
                  <img src={macLogo} className="h-12 brightness-90 hover:brightness-100" />
              </a>
          </div>
      </div>
  );
  }

export default Footer;