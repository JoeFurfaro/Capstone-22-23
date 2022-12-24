import {useEffect} from "react";
import Header from "../components/Header";
import "../styles/pages/Page.css";

const Page = ({children, title, slug}) => {

    useEffect(() => {
        document.title = title;
    }, []);

    return (<>
        <div className="container-fluid">
            <Header activeSlug={slug} />
            <div className="row mt-5">
                <div className="col-10 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    </>);
}

export default Page;