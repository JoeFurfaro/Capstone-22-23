import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Page = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="w-full lg:pt-32 bg-slate-100 min-h-screen absolute top-0 z-0 flex flex-col">
                {children}
                <Footer />
            </div>
        </>
    );
}

export default Page;