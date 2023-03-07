// import React from 'react';
// import './App.css';
// import Main from './home/main/Main.js';

// function App() {
//   return (
//     <div className="App">
//       <Main/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "@ksedline/turnjs";

import "./styles.css";

import image0Path from './images-demo/Image0.jpg';
import image1Path from './images-demo/Image1.jpg';
import image2Path from './images-demo/Image2.jpg';
import image3Path from './images-demo/Image3.jpg';
import image4Path from './images-demo/Image4.jpg';
import image5Path from './images-demo/Image5.jpg';
import image6Path from './images-demo/Image6.jpg';
import image7Path from './images-demo/Image7.jpg';

class Turn extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {}
  };

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    if (this.el) {
      $(this.el)
        .turn("destroy")
        .remove();
    }
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = event => {
    if (event.keyCode === 37) {
      $(this.el).turn("previous");
    }
    if (event.keyCode === 39) {
      $(this.el).turn("next");
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={Object.assign({}, this.props.style)}
        ref={el => (this.el = el)}
      >
        {this.props.children}
      </div>
    );
  }
}

const options = {
  width: 1800,
  height: 800,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages = [
  image0Path,
  image1Path,
  image2Path,
  image3Path,
  image4Path,
  image5Path,
  image6Path,
  image7Path,
];

const App = () => {
  return (
    <Turn options={options} className="magazine">
      {pages.map((page, index) => (
        <div key={index} className="page">
          <img src={page} alt="" />
        </div>
      ))}
    </Turn>
  );
};


const root =  document.getElementById("root");
ReactDOM.render(<App />, root);
