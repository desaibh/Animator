import React from 'react';
import StyleCanvas from './StyleCanvas.jsx';

const propTypes = {
  background: React.PropTypes.string,
  backgroundPosition: React.PropTypes.string,
  backgroundSize: React.PropTypes.string,
  backgroundImage: React.PropTypes.string,
  backgroundBorder: React.PropTypes.string,
  text: React.PropTypes.string,
  textColor: React.PropTypes.string,
  textDirection: React.PropTypes.string,
  textAlign: React.PropTypes.string,
  textIndent: React.PropTypes.string,
  textShadow: React.PropTypes.string,
  hshadow: React.PropTypes.string,
  vshadow: React.PropTypes.string,
  blur: React.PropTypes.string,
  glow: React.PropTypes.string,
  textTransform: React.PropTypes.string,
  verticalAlign: React.PropTypes.string,
  whiteSpace: React.PropTypes.string,
  letterSpacing: React.PropTypes.string,
  font: React.PropTypes.string,
}

class StyleSheet extends React.Component {
  componentDidMount() {
    this.render();
  }
  componentWillMount() {
    this.render();
  }
  render() {
      let bgStyle = {
        width: '100%',
        minWidth: '800px',
        minHeight: '800px',
        padding: '10px',
        margin: '-10px  10px',
        background: this.props.background,
        backgroundImage: this.props.backgroundImage,
        backgroundPosition: this.props.backgroundPosition,
        backgroundSize: this.props.backgroundSize,
        border: this.props.backgroundBorder,
        color: "#333",
        display: "inline-block",
      };
      let fontStyle = {
        fontFamily: "monospace",
        fontSize: "32px",
        color: this.props.textColor,
        direction: this.props.textDirection,
        align: this.props.textAlign,
        textIndent: this.props.textIndent,
        textShadow: this.props.textShadow,
        hshadow: this.props.hshadow,
        vshadow: this.props.vshadow,
        blur: this.props.blur,
        glow: this.props.glow,
        textTransform: this.props.textTransform,
        verticalAlign: this.props.verticalAlign,
        whiteSpace: this.props.whiteSpace,
        letterSpacing: this.props.letterSpacing,
        fontFamily: this.props.font,
      }
      return (
        <div style={bgStyle}>
          <h1 style={fontStyle}>
            {this.props.text}
          </h1>
          {this.props.children}
          <StyleCanvas />
        </div>
      );
    }
}

StyleSheet.propTypes = propTypes;

export default StyleSheet;
