import React from 'react';

const propTypes = {}

class StyleCanvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
  }
  render() {
    return (
        <canvas ref="canvas" width={300} height={300}/>
    );
  }
}

StyleCanvas.proptypes = propTypes;

export default StyleCanvas;
