import React from 'react';

const propTypes = {
  cssString: React.PropTypes.string.isRequired,
}

class AnimatorView extends React.Component {
  constructor() {
    super();

  }
  render() {
    let divValue = '{ ' + this.props.cssString + ' "width" : "500px" } '
    let divJSON = JSON.parse(divValue);
    let divStyle = Object.keys(divJSON).map((key) => {
      // console.log(key, divJSON[key])
    });
    // console.log('divJSON: ', divJSON)
    return(
      <div>
          <div style={{ divJSON }}><p>Hello, world!</p></div>
      </div>
    )
  }
}

AnimatorView.propTypes = propTypes;

export default AnimatorView;
