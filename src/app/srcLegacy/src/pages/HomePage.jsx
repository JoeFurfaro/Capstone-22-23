import Page from "./Page";
import homeImage from "../assets/homeImage.jpg";
import person from "../assets/person.png";
import joe from "../assets/joe.jpg";
import tinson from "../assets/tinson.jpg";

import "../styles/pages/HomePage.css";

import supportedClasses from "../data/supportedClasses";

const HomePage = () => {

    const welcomeMessage = "Cras eget arcu mollis, facilisis odio eu, fringilla sem. Pellentesque at vulputate dolor. Vivamus felis odio, auctor id placerat sed, feugiat in nisi. Curabitur a lorem vitae tortor fermentum hendrerit. Maecenas at dui luctus, porta lectus in, consequat enim. Sed et dolor commodo, aliquet nibh non, volutpat eros. Praesent vestibulum auctor nisi, non ultricies sapien rutrum sagittis. Nullam pellentesque, ipsum sit amet iaculis molestie, augue purus facilisis lacus, sed consequat lectus augue ac nibh. Praesent viverra libero eget tellus commodo placerat. Suspendisse urna nisl, condimentum sed sollicitudin ac, malesuada a erat. Pellentesque vel nunc pretium, aliquet ante luctus, condimentum metus. Nam sed mauris ornare, pulvinar eros tempor, efficitur erat. Aliquam et velit semper, molestie tortor id, consectetur sapien. Praesent venenatis tortor id felis blandit venenatis. Nunc in sapien quis tortor sagittis commodo sit amet sit amet sem. Quisque nec neque mauris.";
    const people = [
        {
            name: "Nihal Azavedo",
            linkedin: "https://www.linkedin.com/in/nihal-azavedo/",
            github: "https://github.com/NihalAzavedo",
            image: person,
            description: "Cras eget arcu mollis, facilisis odio eu, fringilla sem. Pellentesque at vulputate dolor. Vivamus felis odio, auctor id placerat sed, feugiat in nisi. Curabitur a lorem vitae tortor fermentum hendrerit. Maecenas at dui luctus, porta lectus in, consequat.",
        },
        {
            name: "Tinson Chen",
            linkedin: "https://www.linkedin.com/in/tinson-chen-763769231/",
            github: "https://github.com/strfsh-jstr",
            image: tinson,
            description: "Cras eget arcu mollis, facilisis odio eu, fringilla sem. Pellentesque at vulputate dolor. Vivamus felis odio, auctor id placerat sed, feugiat in nisi. Curabitur a lorem vitae tortor fermentum hendrerit. Maecenas at dui luctus, porta lectus in, consequat.",
        },
        {
            name: "Joe Furfaro",
            linkedin: "https://www.linkedin.com/in/joe-furfaro/",
            github: "https://github.com/JoeFurfaro",
            image: joe,
            description: "Cras eget arcu mollis, facilisis odio eu, fringilla sem. Pellentesque at vulputate dolor. Vivamus felis odio, auctor id placerat sed, feugiat in nisi. Curabitur a lorem vitae tortor fermentum hendrerit. Maecenas at dui luctus, porta lectus in, consequat.",
        }
    ];

    const SectionTitle = ({title}) => {
        return <div className="row">
            <div className="col-12">
                <h3 className="text-center fw-bold">{title}</h3>
            </div>
        </div>
    }

    return <Page title="Capstone 22-23 - Home" slug="home">
        <div className="row">
            <div className="col-9 mx-auto">
                <div className="row">
                    <div className="ms-auto col-7">
                        <h3 className="fw-bold">Welcome to Our Project Page!</h3>
                        <p className="mt-3">{welcomeMessage}</p>
                    </div>
                    <div className="me-auto col-5">
                        <img alt="TODO" className="w-100 rounded" src={homeImage} />
                    </div>
                </div>
            </div>
        </div>
        <hr className="mt-5 mb-5" />
        <SectionTitle title="Our Team" />
        <div className="row mt-4 justify-content-center">
            <div className="col-9 mx-auto">
                <div className="row">
                    {people.map(p =>
                        <div className="col-4" key={"person-" + p.name}>
                            <div className="row">
                                <div className="col-6 mx-auto">
                                    <img src={p.image} className="w-100 rounded" alt={"Photograph of " + p.name} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="fw-bold text-center mt-4">{p.name}</h5>
                                    <div className="row justify-content-center">
                                        <div className="col-12 text-center">
                                        {p.github === null ? null :
                                            <a href={p.github} target="_blank"><i className="mx-1 person-github fa-brands fa-github"></i></a>
                                        }
                                        {p.linkedin === null ? null :
                                            <a href={p.linkedin} target="_blank"><i className="mx-1 person-linkedin fa-brands fa-linkedin"></i></a>
                                        }
                                        </div>
                                    </div>
                                    <div className="row mt-2 mb-5">
                                        <div className="col-11 mx-auto">
                                            <p className="text-center">{p.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <hr className="mb-5" />
        <SectionTitle title="Supported Object Classes" />
        <div className="row mb-5 mt-5">
            <div className="col-9 mx-auto">
                <div className="row justify-content-center">
                    {supportedClasses.map(c =>
                        <div key={"supported-class-" + c.name} className="col-2 mx-3">
                            <img src={c.img} className="w-100 rounded" />
                            <h6 className="text-center mt-3 mb-5">{c.name}</h6>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </Page>
}

export default HomePage;