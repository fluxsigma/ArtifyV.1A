import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./App.css";
// import cat from "./cat.gif";
import loader from "./loader.gif";
import Feature from "./Feature";
import Info from "./Info";

// import DownloadButton from "./Downloadbtn";


function App() {
  const [prompt, setPrompt] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [isLoading, setIsLoading] = useState(false);

  // const [btnState , setBtnState] = useState(false);

  //   function hello() {
  //     setBtnState(btnState => !btnState)

  //   }

  //let toggleClassCheck = btnState ? "active": null;

  const [result, setResult] = useState("");
  const generateImage = async () => {
    setIsLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
    setIsLoading(false);
  };


   
// console.log(result);


  // const imageUrl =  result;
  return (
    <div className="main">
      <>
        <h2>ARTIFY-  <span style={{color:"magenta"}}>v1A</span> </h2>

        <textarea
          type="text"
          className="app-input"
          placeholder=" Try with, Mechanical Dawn, Technology City, a Mechanical Transformer, epic fantasy art"
          onChange={(e) => setPrompt(e.target.value)}
          rows="20"
          cols="40"
        />

        <button
          onClick={() => {
            generateImage();
          }}
        >
          Generate
        </button>
        {console.log(prompt)}

        {/* {result.length > 0 ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <> </>
          //<div className={`image ${toggleClassCheck}`} />

        )} */}

        {isLoading ? (
          <div className="loading-text">
            {/* <div className={"image"}  /> */}
            please wait im dreaming...
            <img className="image" src={loader} alt="" srcset="" />
          </div> // show loading text while fetching data
        ) : result.length > 0 ? (
          <div className="Aimage">
            <img className="result-image" src={result} alt="result" />
      
          </div>
        ) : (
         <></>
          
        )}
        <Feature/>
        <Info></Info>
     
      </>
    </div>
  );
}

export default App;
