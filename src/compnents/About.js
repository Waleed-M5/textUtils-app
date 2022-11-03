import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "Black",
  //   backgroundColor: "White",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <>
      <div className="container">
        <h1
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          About Us
        </h1>
        <div className="accordion" id="accordionExample">
          <div
            className="accordion-item1"
            style={(myStyle, { border: "2px solid", borderColor: "white" })}
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils Gives You a Way To Analyze Your Txet Quickly And
                Efficiently. Be It Word Count, Character Count Or
              </div>
            </div>
          </div>
          <div
            className="accordion-item2"
            style={(myStyle, { border: "2px solid", borderColor: "white" })}
          >
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils Is a Free Chracter Counter Tool That Provides Instant
                Character Count & Word Count Satistics For a Given Text.
                TextUtils Reports The Number Of Words And Chracter. This Is
                Suitable For Writing Text With Word/ Character Limit.
              </div>
            </div>
          </div>
          <div
            className="accordion-item3"
            style={(myStyle, { border: "2px solid", borderColor: "white" })}
          >
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatibe</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This Word Counter Software Works In Any Web Browser Such As
                Chrome, Firefox, Internet Explorer, Microsoft Edge, Safari,
                Opera. It Suits To Count Characters In Facebook, Blog, Books,
                Excel Document, PDF Document, Essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
