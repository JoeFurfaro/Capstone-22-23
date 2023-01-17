import "../styles/components/Header.css"

const Header = ({activeSlug}) => {

    const pages = [
        {
            title: "Home",
            slug: "home",
            url: "/",
            external: false,
        },
        {
            title: "Demo",
            slug: "demo",
            url: "/demo",
            external: false,
        },
        {
            title: "Github",
            slug: null,
            url: "https://github.com/JoeFurfaro/Capstone-22-23",
            external: true,
        }
    ];

    return (
        <div className="row pt-4">
            <div className="col-6 ps-5">
                <div className="row">
                    <div className="col">
                        <h6 className="fw-bold">2022-23 Capstone Project - Roadside Object Detection</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6 className="fw-regular">by Nihal Azavedo, Tinson Chen, and Joe Furfaro</h6>
                    </div>
                </div>

            </div>
            <div className="col-6 pe-5">
                <div className="row justify-content-end">
                    {pages.map(p => 
                            <div key={"nav-item-" + p.slug} className="nav-item-wrapper mt-1">
                                <a
                                    target={p.external ? "_blank" : "_self"}
                                    className={"mx-1 mt-1 nav-link " + (activeSlug === p.slug ? "fw-bold" : "")}
                                    href={p.url}
                                >
                                    {!p.external ? null : <i className="me-1 fa-solid fa-arrow-up-right-from-square"></i>}
                                    {p.title}
                                </a>
                            </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;