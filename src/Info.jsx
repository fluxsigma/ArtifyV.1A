import React from "react";
import "./info.css"
import infopic from "./image/pic.jpeg"

function Info() {
  return (
    <>
      <div className="maininfo">
        <div className="pic">
          <div className="container">
            <div className="search_wrap search_wrap_1">
              <div className="search_box">
                <input
                  type="text"
                  className="input"
                  placeholder="AI ART TRANSFORM"
                />
                <div className="btn">
                  <p>Generate</p>
                </div>
              </div>
            </div>
          </div>
          <button>
            <b>Prompt to Art</b>
          </button>
          <img src={infopic} alt="" className="img" />
        </div>
        <div className="heading">
          <h1>Turn Any Text Into Beautiful </h1>
          <h1>Art</h1>
          <br />
          <br />
          <p>Creating visual art is now easier than before.Just enter a text</p>
          <br />
          <p>
            prompt to describe the image you want,and Fotot's AI art generator
            will
          </p>
          <br />
          <p>
            turn text into art magically and instantly.There are a variety of
            art styles
          </p>
          <br />
          <p>
            for you to choose from-
            photorealistic,illustration,cartoon,anime,3D,
          </p>
          <br />
          <p>
            watercolor,oil painting,and more.Unleash your imagination to create
          </p>
          <br />
          <p>impressive AI art with Fotor now!</p>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Info;
