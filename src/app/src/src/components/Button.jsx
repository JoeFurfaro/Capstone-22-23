const Button = ({text, href, icon="", iconSide="left", primary=true, scheme="maroon"}) => {
    
    const inner = <div className={"flex place-content-center items-baseline gap-2 " + (iconSide === "left" ? "flex-row" : "flex-row-reverse")}>
                      {icon != "" ? <i className={"fa-solid " + icon}></i> : null}
                      <p>{text.toUpperCase()}</p>
                  </div>

    if(primary) {
      if(scheme === "maroon")
        return (
          <a href={href} className="inline-block px-8 tracking-wide rounded-lg py-3 font-bold shadow-md bg-mac-maroon hover:bg-mac-maroon-darker text-red-100 hover:text-red-200">
            {inner}
          </a>
        );
      else if(scheme === "purple")
        return (
          <a href={href} className="inline-block px-8 tracking-wide rounded-lg py-3 font-bold shadow-md bg-mac-purple hover:bg-mac-purple-darker text-pink-100 hover:text-pink-200">
            {inner}
          </a>
        );
    } else {
      return (
        <a href={href} className="inline-block px-8 tracking-wide rounded-lg py-3 font-bold shadow-md bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-600">
          {inner}
        </a>
      );
    }

    
}

export default Button;