import React from "react";
import $ from "jquery";
import "@ksedline/turnjs";

import "./bookturn.css";

class BookTurn extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {}
  };

  componentDidMount() {
    let element = $("<div />").html("Loading...");
    $(this.el).turn("addPage", element, 10);
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

export default BookTurn;