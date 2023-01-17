const UploadButton = ({text, onChange, icon="", iconSide="left", primary=true, scheme="maroon"}) => {
    
    const inner = <div className={"flex items-baseline gap-2 " + (iconSide === "left" ? "flex-row" : "flex-row-reverse")}>
                      {icon != "" ? <i className={"fa-solid " + icon}></i> : null}
                      <p>{text.toUpperCase()}</p>
                  </div>

    if(primary) {
      if(scheme === "maroon")
        return (
            <>
                <input id="upload-button" className="hidden" type="file" onChange={(e) => {onChange(e.target.files[0])}} />
                <label htmlFor="upload-button">
                    <div className="inline-block px-8 tracking-wide rounded-lg py-3 hover:cursor-pointer font-bold shadow-md bg-mac-maroon hover:bg-mac-maroon-darker text-red-100 hover:text-red-200">
                        {inner}
                    </div>
                </label>
            </>
        );
      else if(scheme === "purple")
      return (
        <>
            <input id="upload-button" className="hidden" type="file" onChange={(e) => {onChange(e.target.files[0])}} />
            <label htmlFor="upload-button">
                <div className="inline-block px-8 tracking-wide rounded-lg py-3 hover:cursor-pointer font-bold shadow-md bg-mac-purple hover:bg-mac-purple-darker text-pink-100 hover:text-pink-200">
                    {inner}
                </div>
            </label>
        </>
    );
    } else {
        return (
            <>
                <input id="upload-button" className="hidden" type="file" onChange={(e) => {onChange(e.target.files[0])}} />
                <label htmlFor="upload-button">
                    <div className="inline-block px-8 tracking-wide rounded-lg py-3 hover:cursor-pointer font-bold shadow-md bg-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-600">
                        {inner}
                    </div>
                </label>
            </>
        );
    }

    
}

export default UploadButton;