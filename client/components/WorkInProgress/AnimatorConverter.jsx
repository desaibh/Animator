import React from 'react';
import AnimatorView from './AnimatorView.jsx';

const propTypes = {
  cssKeys: React.PropTypes.array.isRequired,
}

class AnimatorConverter extends React.Component {
  constructor() {
    super();
    this.state = { cssString: '', }
  }
  componentDidMount(){
  }
  componentWillReceiveProps(nextProps) {
    let str = '';
    this.props.cssKeys.forEach((keyVal) => {
      let trimkey=keyVal.cssKey.trim();
      let trimval=keyVal.cssValue.trim();
      str += `"${trimkey}": "'${trimval}'", `
    })
    this.setState({ cssString: str });
  }
  render() {
    return(
      <AnimatorView cssString={this.state.cssString}/>
    )
  }
}

AnimatorConverter.propTypes = propTypes;

export default AnimatorConverter;
