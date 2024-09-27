import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <h2 className="heading">
        <span className="underline">What</span> We Do
      </h2>
      <div className="what-we-do-items">
        <div className="what-we-do-item">
          <img
            src="https://i.pinimg.com/474x/d3/b9/6b/d3b96b5244bdfa0001a95168686e469a.jpg"
            alt="Build Industrial Projects"
            className="icon"
          />
          <p>Builds Industrial Projects</p>
        </div>
        <div className="what-we-do-item">
          <img
            src="https://i.pinimg.com/474x/d3/b9/6b/d3b96b5244bdfa0001a95168686e469a.jpg"
            alt="Interior Build"
            className="icon"
          />
          <p>Interior Build</p>
        </div>
        <div className="what-we-do-item">
          <img
            src="https://i.pinimg.com/474x/d3/b9/6b/d3b96b5244bdfa0001a95168686e469a.jpg"
            alt="Construction"
            className="icon"
          />
          <p>Construction</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
