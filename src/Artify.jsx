import React from "react";
import "./artify.css";
import Info from "./Info";
// import mainimg from "./cat.gif";
function Artify() {
  return (
    <>
      <div className="about">
        <div className="main-about">
          <div className="main-text">
            <h1>
              ARTIFY-<span className="version">V.1a</span>{" "}
              <p>
                ARTIFY-V.1a is a tool that can create realistic images and art{" "}
                <br />
                from a description in natural language.
              </p>
            </h1>
          </div>

          {/* <img className="mainimg" src={mainimg} alt="" srcset="" /> */}
        </div>

        <div className="arts">
          <img
            className="artimg"
            src="https://i.gifer.com/WSE.gif"
            alt=""
          />
          <img
            className="artimg"
            src="https://i.gifer.com/7UPe.gif"
            alt=""

          />

          <img
            className="artimg"
            src="https://i.gifer.com/2Mwd.gif"
            alt=""
          
          />

          <img
            width={"200px"}
            className="artimg"
            src="https://i.gifer.com/YARO.gif"
            alt=""
          
          />

          <img
            className="artimg"
            src="https://i.gifer.com/66.gif"
            alt=""
          />
          <div className="ai">
            
            <span>Powered by OpenAI</span> <br></br> 
            <span style={
              {color:"magenta",
              fontSize:"16px",
              fontFamily:"Roboto"
            
            }} >UI components by Vishal Mishra And Praveen Kumar</span>
          </div>

         
        </div>

      </div>
     
    </>
  );
}

export default Artify;
