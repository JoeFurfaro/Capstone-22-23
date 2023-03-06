import supportedBus from '../images/supported/bus.png';
import supportedMinivan from '../images/supported/minivan.png';
import supportedManhole from '../images/supported/manhole.png';
import supportedMountainBike from '../images/supported/mountainBike.png';
import supportedTrain from '../images/supported/train.png';
import supportedPickup from '../images/supported/pickup.png';
import supportedParkBench from '../images/supported/parkBench.png';
import supportedPoliceCar from '../images/supported/policeCar.png';
import supportedRV from '../images/supported/rv.png';
import supportedStreetSign from '../images/supported/streetSign.png';
import supportedTaxi from '../images/supported/taxi.png';
import supportedTrafficLight from '../images/supported/trafficLight.png';

import preset1 from '../images/presets/preset1.jpg';
import preset2 from '../images/presets/preset2.jpg';
import preset3 from '../images/presets/preset3.jpg';

import { useEffect, useState, useRef } from 'react';

import Page from './Page';
import UploadButton from '../components/UploadButton';
import Button from '../components/Button';

import axios from 'axios';

const DemoPage = () => {

    const [error, setError] = useState("");
    const [uploadImage, setUploadImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [resultData, setResultData] = useState(null);

    const startAnalyzing = (image, type) => {
        setUploadImage(image);

        console.log({image:image, type:type});
        axios.post(`/process`, {image:image, type:type})
            .then(res => {
                const response = res.data;
                setResultImage(response.postProcessed);
                setResultData(response.annotations);
            })

        setError(null);
    }

    const PreUpload = () => {

        const CheckMarkListItem = ({text}) => {
            return <div className="flex my-1">
                <div className="pl-6">
                    <p className="text-slate-700">
                        <i className="fa-solid fa-check"></i>
                    </p>
                </div>
                <div className="pl-2">
                    <p className="text-slate-700">
                        {text}
                    </p>
                </div>
            </div>
        }

        const SupportedObjects = () => {
            const types = [
                // {name: "R.V.", image: supportedRV},
                // {name: "Street sign", image: supportedStreetSign},
                // {name: "School bus", image: supportedBus},
                {name: "Bike", image: supportedMountainBike},
                {name: "Train", image: supportedTrain},
                {name: "Pickup Truck", image: supportedPickup},
                // {name: "Taxi", image: supportedTaxi},
                // {name: "Minivan", image: supportedMinivan},
                // {name: "Traffic light", image: supportedTrafficLight},
                // {name: "Park bench", image: supportedParkBench},
                // {name: "Police car", image: supportedPoliceCar},
                // {name: "Manhole cover", image: supportedManhole},
            ];

            let listText = "";
            for(let i = 0; i < types.length; i++) {
                let t = types[i];
                listText += i == types.length - 1 ? t.name : t.name + ", ";
            }

            return (
                <div className="w-full rounded-lg px-5 py-6 bg-slate-100">
                    <h3 className="text-slate-400 sm:hidden md:block font-bold tracking-wider 2xl:text-xl xl:text-lg">
                        <i className="fa-solid fa-info-circle mr-2"></i>SUPPORTED OBJECT CLASSES
                    </h3>
                    <h3 className="text-slate-400 hidden sm:block md:hidden font-bold tracking-wider 2xl:text-xl xl:text-lg">
                        <i className="fa-solid fa-info-circle mr-2"></i>OBJECT CLASSES
                    </h3>
                    <div className="mt-3 flex-wrap hidden lg:flex">
                        {types.map((t, index) =>
                            <div key={"so-" + index} className={"px-2 py-2 w-full flex items-center " + (index < types.length - 1 ? "border-b-2 border-b-slate-200" : "")}>
                                <div className="w-12 2xl:w-14">
                                    <img src={t.image} className="w-full" />
                                </div>
                                <p className="text-slate-600 pl-3 2xl:text-lg">
                                    {t.name}
                                </p>
                            </div>    
                        )}
                    </div>
                    <div className="mt-1 hidden sm:block lg:hidden ml-8 mr-3">
                        <ul className="list-disc">
                            {types.map((t, index) =>
                                <li key={"so-list-" + index} className="text-slate-500 pl-2">{t.name}</li>
                            )}
                        </ul>
                    </div>
                    <div className="block sm:hidden mx-1">
                        <p className="text-slate-500 mt-2">
                            {listText}
                        </p>
                    </div>
                </div>
            );
        }

        const Presets = () => {
            const presets = [
                preset1,
                preset2,
                preset3,
            ];

            return (
                <div className="container mx-auto mt-12 grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 px-12 sm:px-3 md:px-0 gap-5 md:gap-x-12 md:gap-y-8 mb-24">
                    {presets.map((preset, index) =>
                        <div key={"preset-" + index} className="2xl:h-72 xl:h-60 relative" onClick={(e) => startAnalyzing(getBase64Image(document.getElementById("preset-" + index)), "image/png")}>
                            <div className="rounded-lg w-full h-full opacity-0 hover:opacity-100 bg-mac-maroon bg-opacity-60 hover:cursor-pointer absolute left-0 flex flex-col place-content-center">
                                <h1 className="text-white font-bold text-center xl:text-lg">Choose This Image</h1>
                            </div>
                            <img id={"preset-" + index} src={preset} className="object-cover rounded-lg w-full h-full" />
                        </div>    
                    )}
                </div>
            );
        }

        const getBase64Image = (img) => {
            var canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL("image/png");
            return dataURL;
        }

        const processUpload = (file) => {
            if(file.type != "image/png" && file.type != "image/jpg" && file.type != "image/jpeg") {
                setError("Invalid file format: try again using a PNG, JPG, or GIF file");
                return;
            }

            if(file.size > 500000) {
                setError("File is too large: try again using a file < 500KB in size");
                return;
            }

            const reader = new FileReader();
    
            reader.addEventListener("load", () => {
                startAnalyzing(reader.result, file.type);
            }, false);
    
            reader.readAsDataURL(file);
        }

        return (
            <>
                <div className="bg-white container mx-auto sm:rounded-lg shadow-lg mt-20 sm:mt-24 lg:mt-0 py-8 lg:py-12 xl:py-24 px-6 sm:px-12 gap-2 sm:gap-8 2xl:px-20 xl:px-16 flex sm:flex-row flex-col">
                    <div className="w-full sm:w-6/12 flex flex-col place-content-center">
                        <h1 className="text-mac-maroon text-xl sm:text-lg md:text-xl font-bold tracking-wider xl:text-3xl 2xl:text-4xl">UPLOAD AN INPUT IMAGE</h1>
                        <p className="text-slate-700 mt-3 mb-3 md:mt-6 md:mb-6 xl:text-lg">Choose an input file that meets the following criteria:</p>
                        <CheckMarkListItem text="A PNG or JPG image" />
                        <CheckMarkListItem text="No larger than 500KB" />
                        <CheckMarkListItem text="Contains less than 5 instances of supported objects" />
                        <div className="mt-4 md:mt-8">
                            <UploadButton onChange={processUpload} text="CHOOSE FILE" icon="fa-circle-chevron-right" iconSide="right" /> 
                        </div>
                        <p className="text-red-600 mt-6">{error}</p>
                    </div>
                    <div className="w-full sm:w-6/12">
                        <SupportedObjects />
                    </div>
                </div>
                <div className="relative z-10 h-2 w-20 border-t-4 border-slate-700 mx-auto lg:mt-24 mt-12"></div>
                <h1 className="relative z-10 tracking-wide text-slate-700 text-center text-2xl lg:text-3xl font-bold mt-8 mb-2 lg:mb-6 2xl:text-4xl">OR TRY OUR PRESETS</h1>
                <Presets />
            </>
        )
    }

    const PostUploadPanel = ({children}) => {
        return (
            <div className="bg-white container mx-auto sm:rounded-lg shadow-lg py-8 lg:py-12 xl:py-24 px-12 flex flex-col-reverse lg:flex-row gap-8 xl:px-16 2xl:px-20 lg:mt-0 mt-20 sm:mt-24 mb-24">
                <div className="2xl:w-5/12 w-full lg:w-6/12 flex flex-col place-content-center">
                    {children}
                </div>
                <div className="2xl:w-7/12 w-full lg:w-6/12 lg:py-3 lg:px-4">
                    <img className="w-full rounded-lg" src={resultImage === null ? uploadImage : resultImage} />
                </div>
            </div>
        );
    }

    const Loading = () => {
        const loadingBar = useRef(null);
        const [startTime, setStartTime] = useState(new Date().getTime());
        const [loadingBarSize, setLoadingBarSize] = useState(50);
        const [timePassed, setTimePassed] = useState(0);

        useEffect(() => {
            setLoadingBarSize(loadingBar.current.clientWidth)
        }, [loadingBar])

        const delay = 3000;

        useEffect(() => {
            const time = new Date().getTime();
            setStartTime(time);

            const barInterval = setInterval(() => {
                let timePassed = new Date().getTime() - startTime;
                if(timePassed > delay) {
                    setResultImage(uploadImage);
                    clearInterval(barInterval);
                }
                setTimePassed(timePassed);
            }, 1);

            return () => {
                clearInterval(barInterval);
            }
        }, []);

        let diff = new Date().getTime() - startTime;
        let overlayWidth = 0;
        if(diff >= delay)
            overlayWidth = 0;
        else
            overlayWidth = loadingBarSize - (timePassed / delay) * loadingBarSize;

        return (
            <PostUploadPanel>
                <h1 className="text-mac-maroon text-2xl font-bold tracking-wider xl:text-3xl 2xl:text-4xl">SIT TIGHT!</h1>
                <p className="text-slate-500 mt-4 xl:text-lg 2xl:mt-6">
                    Our model is analyzing the input image. This might take a few seconds.
                </p>
                <div className="mt-6 2xl:mt-6">
                    <div ref={loadingBar} id="loadingBar" className="z-10 w-100 h-6 2xl:h-8 rounded-full bg-gradient-to-r from-mac-maroon to-purple-900 relative">
                        <div style={{width: overlayWidth}} id="loadingOverlay" className="z-20 h-6 2xl:h-8 rounded-r-full bg-white opacity-50 absolute right-0"></div>
                    </div>
                </div>
            </PostUploadPanel>
        );
    }

    const EmptyResults = () => {
        return (
            <PostUploadPanel>
                <h1 className="text-mac-maroon text-2xl font-bold tracking-wider xl:text-3xl 2xl:text-4xl">NO OBJECTS DETECTED</h1>
                <p className="text-slate-500 mt-4 mb-6 2xl:mt-6 xl:text-lg 2xl:mb-6">
                    Our model did not detect any supported objects in the input image. 
                </p>
                <div>
                    <Button href="/demo" text="TRY AGAIN" icon="fa-circle-chevron-right" iconSide="right" />
                </div>
            </PostUploadPanel>
        );
    }

    const Results = () => {
        return (
            <PostUploadPanel>
                <h1 className="text-slate-800 text-2xl font-bold tracking-wider xl:text-3xl 2xl:text-4xl">RESULTS</h1>
                <table className="mt-4 xl:mt-6">
                    <thead>
                        <tr>
                            {["OBJECT", "CONFIDENCE"].map((col, index) =>
                                <th className="xl:text-lg border-b-2 border-b-gray-100 text-left text-slate-400 font-bold tracking-wider py-3" key={"th-" + index}>
                                    {col}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {resultData.predictions.map((o, index) =>
                            <tr key={"tr-" + index}>
                                <td className="xl:text-lg py-3 border-b-2 border-b-gray-100 text-slate-800">{o.label}</td>
                                <td className="xl:text-lg text-slate-500 py-3 border-b-2 border-b-gray-100">{(o.confidence*100).toFixed(1)}%</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="flex sm:flex-row flex-col mt-12 gap-2">
                    <div>
                        <Button href="/demo" text="TRY AGAIN" icon="fa-circle-chevron-right" iconSide="right" />
                    </div>
                </div>
            </PostUploadPanel>
        );
    }

    return (
        <Page>
            {uploadImage === null ? <PreUpload /> : null}
            {uploadImage != null && resultData === null ? <Loading /> : null}
            {uploadImage != null && resultData != null && resultData.predictions.length == 0 ? <EmptyResults /> : null}
            {uploadImage != null && resultData != null && resultData.predictions.length > 0 ? <Results /> : null}
        </Page>
    );
}

export default DemoPage;