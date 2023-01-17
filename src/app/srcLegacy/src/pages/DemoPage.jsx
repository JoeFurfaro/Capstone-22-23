import Page from "./Page";
import sampleImage1 from "../assets/sample1.jpg";
import sampleImage2 from "../assets/sample2.jpg";

import uploadIcon from "../assets/upload.png";

import "../styles/pages/DemoPage.css";

import {useState} from "react";
import axios from "axios";

import supportedClasses from "../data/supportedClasses";

const DemoPage = () => {

    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadName, setUploadName] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const UploadPhase = () => {
        const sampleImages = [
            {"name": "sample1.jpg", "src": sampleImage1},
            {"name": "sample2.jpg", "src": sampleImage2},
            {"name": "sample1.jpg", "src": sampleImage1},
            {"name": "sample2.jpg", "src": sampleImage2},
            {"name": "sample1.jpg", "src": sampleImage1},
            {"name": "sample2.jpg", "src": sampleImage2},
            {"name": "sample1.jpg", "src": sampleImage1},
            {"name": "sample2.jpg", "src": sampleImage2},
            {"name": "sample1.jpg", "src": sampleImage1},
            {"name": "sample2.jpg", "src": sampleImage2},
            {"name": "sample1.jpg", "src": sampleImage1},
            {"name": "sample2.jpg", "src": sampleImage2},
        ];

        const startAnalyzing = (image) => {
            setUploadedImage(image);
            setError(null);

            axios.post("http://localhost:5000/imagenet", {image: image}).then((response) => {
                setResult(response.data);
            }).catch((err => {
                console.log(err);
            }));
        }

        const processUpload = (file) => {
            // Check for image type using file.type
            if(file.type != "image/png" && file.type != "image/jpg" && file.type != "image/jpeg") {
                setError("Invalid file type: The test image must either be of type PNG or JPG!");
                return;
            }
            setUploadName(file.name);

            const reader = new FileReader();
    
            reader.addEventListener("load", () => {
                startAnalyzing(reader.result);
            }, false);
    
            reader.readAsDataURL(file);
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
          
        return <>
            <input type="file" onChange={(e) => {processUpload(e.target.files[0])}} id="imgupload" style={{display: "none"}}/>
            <label htmlFor="imgupload">
                <div className="row upload-row pb-4 pt-1">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-2 mx-auto">
                                <img className="w-100" src={uploadIcon} alt="Cloud containing arrow pointing up" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-center fw-bold">Click Here to Upload a Test Image</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mx-auto">
                                <p className="text-center">Cras eget arcu mollis, facilisis odio eu, fringilla sem. Pellentesque at vulputate dolor. Vivamus felis odio, auctor id placerat sed, feugiat in nisi. Curabitur a lorem vitae tortor fermentum hendrerit. Maecenas at dui luctus, porta lectus in, consequat.</p>
                            </div>
                        </div>
                        {error === null ? null : <div className="row">
                            <div className="col-6 mx-auto text-center mt-3">
                                <div className="alert alert-danger fade show" role="alert">
                                    <strong>{error}</strong>
                                </div>
                            </div>    
                        </div>}
                    </div>
                </div>
            </label>
            
            <div className="row mt-4 mb-4">
                <div className="col-12">
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4 className="text-center fw-bold">Or Try One of Our Sample Images</h4>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-8 mx-auto pb-5">
                    <div className="row">
                        {sampleImages.map((s,i) =>
                            <div className="col-2 mt-4" key={"sample-image-" + i}>
                                <img onClick={(e) => {startAnalyzing(getBase64Image(e.target)); setUploadName(s.name)}} src={s.src} className="sample-image rounded w-100 h-100" />
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        </>
    }

    const LoadingPhase = () => {
        return <div className="row">
            <div className="col-10 mx-auto text-center">
                <img src={uploadedImage} alt="Custom image the user selected or uploaded for processing" className="rounded uploaded-image-loading" />
                <div className="loading-text">
                    <div className="spinner-border" style={{width: "4rem", height: "4rem"}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <h3 className="fw-bold loading-text-heading mt-4">Uploading and Analyzing</h3>
                    <p className="mt-3">Your food will be ready in a few seconds</p>
                </div>
            </div>
        </div>
    }

    const ResultPhase = () => {
        const TryAgainButton = () => {
            return (
                <button onClick={() => {setResult(null); setUploadedImage(null); setUploadName(null);}} className="btn w-100 btn-primary">
                    <i className="fa-solid fa-arrow-rotate-right me-2"></i>Try Demo Again
                </button>
            )
        }

        const DownloadResultButton = () => {
            return (
                <a download={"postprocessed_" + uploadName} href={result.postProcessed} className="btn w-100 btn-outline-secondary">
                    <i className="fa-solid fa-download me-2"></i> Download Image
                </a>
            )
        }

        return <>
            <div className="row">
                <div className="ms-auto col-8 rounded result-image-column text-center px-3 py-3">
                    <img src={result.postProcessed} alt="Custom image the user selected or uploaded for processing, postprocessed" className="post-processed-image" />
                </div>
                <div className="col-3 rounded result-annotation-column ms-3 me-auto px-4">
                    <h4 className="fw-bold mt-3 mb-0">Results</h4>
                    <hr className="mt-2" />
                    <div className="row">
                        <div className="col-12">
                            {result.annotations.length === 0 ? (<>
                                <p className="text-danger">No objects were detected in the image. Is it possible that the image you uploaded is low quality or that no supported objects are present?</p>
                                <TryAgainButton />
                                <hr />
                                <h6 className="fw-bold mt-4">Supported Classes</h6>
                                <p>Our model currently supports the following roadside object classes:</p>
                                <p className="text-secondary"><em>
                                    {supportedClasses.map((c,i) => i == supportedClasses.length - 1 ? <span key={"sc-" + c.name}>{c.name}</span> : <span key={"sc-" + c.name}>{c.name + ", "}</span>)}    
                                </em></p>
                            </>) :(
                                <>
                                    <p><strong><span className="text-primary">{result.annotations.length}</span></strong> {result.annotations.length == 1 ? "object was" : "objects were"} detected in the test image:</p>
                                    <table className="table mb-4">
                                        <thead>
                                            <tr>
                                                <th>Color</th>
                                                <th>Object</th>
                                                <th>Confidence</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.annotations.map((a,i) =>
                                                <tr key={"annotation-row-" + i}>
                                                    <td><i className="fa-solid fa-square fs-3" style={{color: a.color}}></i></td>
                                                    <td>{a.className}</td>
                                                    <td>{a.confidence}%</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <TryAgainButton />
                                    <p className="text-center text-secondary mt-1 mb-2">or</p>
                                    <DownloadResultButton />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    }

    return <Page title="Capstone 22-23 - Demo" slug="demo">
        {uploadedImage === null ? <UploadPhase /> : null}
        {uploadedImage != null && result == null ? <LoadingPhase /> : null}
        {uploadedImage != null && result != null ? <ResultPhase /> : null}
    </Page>
}

export default DemoPage;