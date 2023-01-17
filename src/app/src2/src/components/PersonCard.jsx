const PersonCard = ({image, name, program, linkedin, github, description}) => {
    return (
      <div className="w-11/12 mx-auto sm:mx-0 sm:w-full lg:w-4/12 bg-white rounded-lg shadow-md flex flex-wrap">
        <img className="w-full sm:w-4/12 md:w-3/12 lg:w-full rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg lg:rounded-t-lg lg:rounded-bl-none lg:mb-0 xl:mb-3" src={image} />
        <div className="w-full sm:w-8/12 md:w-9/12 flex flex-col lg:w-full px-5">
          <div className="w-full mt-5 md:mt-8 flex items-top px-3 2xl:px-8 lg:mt-4 xl:mt-6 2xl:mt-8 xl:px-6">
            <div className="w-full">
              <h3 className="text-lg lg:text-base font-bold text-slate-800 leading-4 2xl:text-xl xl:text-lg">{name}</h3>
              <h4 className="text-slate-600 text-lg lg:text-base 2xl:text-xl xl:text-lg">{program}</h4>
            </div>
            <div className="w-full flex flex-row-reverse gap-2">
              <a href={github} className="text-black hover:text-slate-700 text-4xl xl:text-5xl"><i className="fa-brands fa-github"></i></a>
              <a href={linkedin} className="text-blue-500 hover:text-blue-400 text-4xl xl:text-5xl"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="mb-5 sm:mb-0 w-full mt-3 md:mt-6 lg:mt-2 px-3 xl:px-6 2xl:px-8 2xl:mt-4 2xl:mb-10 xl:mt-4 xl:mb-6 lg:mb-5">
            <p className="text-slate-500 text-lg lg:text-base 2xl:text-lg">{description}</p>
          </div>
        </div>
      </div>
    );
  }

export default PersonCard;