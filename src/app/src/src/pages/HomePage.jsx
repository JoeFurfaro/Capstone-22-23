import Page from './Page';
import team from "../images/team.jpg";
import joe from "../images/joe.jpg";
import tinson from "../images/tinson.jpg";
import nihal from "../images/nihal.jpg";
import lofiSample from "../images/lofi-sample.png";
import Button from '../components/Button';
import PersonCard from '../components/PersonCard';
import LofiScreen from '../components/LofiScreen';
import { useLayoutEffect, useState } from 'react';

const HomePage = () => {
    const AngledBackgroundPattern = () => {
        const useWindowSize = () => {
          const [size, setSize] = useState([0, 0]);
          useLayoutEffect(() => {
            function updateSize() {
              setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
          }, []);
          return size;
        }
  
        const [width, _] = useWindowSize();
  
        const svgHeight = 2250;

        return (
          <svg className="z-0 absolute w-full mt-24" height={svgHeight + "px"} xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="bg-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#86113E" />
                <stop offset="100%" stopColor="#861165" />
            </linearGradient>
            <polygon points={`0,0 ${width},250 ${width},${svgHeight} 0,${svgHeight-250}`} fill="url(#bg-grad)" />
          </svg>
        );
    }

    return (
        <Page>
            <AngledBackgroundPattern />
            <div className="mt-16 sm:mt-24 lg:mt-0 relative z-10 container mx-auto sm:rounded-lg bg-white lg:flex-row flex-col-reverse flex shadow-xl">
              <div className="w-full lg:w-6/12 px-12 2xl:px-20 xl:px-16 py-12 rounded-l-lg flex flex-col place-content-center">
                  <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-800 font-bold tracking-wider">WELCOME TO OUR PROJECT</h1>
                  <p className="2xl:mt-8 mt-4 leading-7 text-slate-700 mb-7 2xl:mb-10">
                  For our Capstone, we designed an AI model that can classify common roadside objects given an unrestricted input image. Alongside of this we built a modern backend web API for accessing and testing this model. To showcase the model and the API at the Capstone presentation day at the end of the semester, we also designed and implemented the demonstration user interface that you are accessing right now. We invite you to test out our work, either by uploading your own input images or choosing from one of our presets!
                  </p>
                  <div>
                    <Button text="Try It Out" href="/demo" icon="fa-circle-chevron-right" iconSide="right" />
                  </div>
              </div>
              <div className="w-full lg:w-6/12 lg:rounded-r-lg">
                  <img src={team} className="w-full lg:rounded-r-lg h-96 lg:h-auto object-cover lg:object-contain sm:rounded-t-lg lg:rounded-tl-none" />
              </div>
            </div>
            <div className="relative z-10 h-2 w-20 border-t-4 border-white mx-auto lg:mt-24 mt-12"></div>
            <h1 className="relative z-10 tracking-wide text-white text-center text-2xl xl:text-4xl md:text-3xl font-bold mt-4 lg:mt-10 2xl:text-4xl">OUR TEAM</h1>
            <div className="relative z-10 container mx-auto mt-12 lg:mt-16 flex lg:flex-row flex-col gap-4 xl:gap-16">
              <PersonCard image={joe} name="Joe Furfaro" program="Computer Science" linkedin="https://www.linkedin.com/in/joe-furfaro/" github="https://github.com/JoeFurfaro" description="Joe is a 4th year student who is passionate about large system design, robotics, and backend web development." />
              <PersonCard image={tinson} name="Tinson Chen" program="Arts & Science" linkedin="https://www.linkedin.com/in/tinson-chen-763769231/" github="https://github.com/strfsh-jstr" description="Tinson is a 4th year combining in Artsci + CS. He is interested in AI governance, natural language processing and design." />
              <PersonCard image={nihal} name="Nihal Azavedo" program="Computer Science" linkedin="https://www.linkedin.com/in/nihal-azavedo/" github="https://github.com/NihalAzavedo" description="Nihal is a 4th year student whose main interests are AI alignment and interpretability research." />
            </div>
            <div className="relative z-10 h-2 w-20 border-t-4 border-slate-700 sm:border-white mx-auto lg:mt-24 mt-12"></div>
            <h1 className="relative z-10 tracking-wide sm:text-white text-slate-700 text-center text-2xl xl:text-4xl md:text-3xl font-bold mt-4 lg:mt-10">INTERACTIVE AI DEMO</h1>
            <LofiScreen>
                <img className="mx-auto lg:w-6/12 xl:w-4/12 2xl:w-5/12 mb-6" src={lofiSample} />
                <Button text="Try It Out" href="/demo" icon="fa-circle-chevron-right" iconSide="right" scheme="purple" />
            </LofiScreen>
            <div className="pt-24"></div>
        </Page>
    );
}

export default HomePage;