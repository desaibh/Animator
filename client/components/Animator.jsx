import React from 'react';
import Modal from 'react-modal';
import Collapsible from 'react-collapsible';
import SavePainting from './Users/SavePainting.jsx';
import PaintingForm from './Users/PaintingForm.jsx';
import Animations from './Effects/Animations.jsx';
import Background from './Effects/Background.jsx';
import Canvas from './Effects/Canvas.jsx';
import D3Animations from './Effects/D3Animations.jsx';
import Keyboard from './Effects/Keyboard.jsx';
import PageLayout from './Effects/PageLayout.jsx';
import Typography from './Effects/Typography.jsx';
import StyleSheet from './Styles/StyleSheet.jsx'

const propTypes = {
  updateAuth: React.PropTypes.func.isRequired,
};

class Animator extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      cssKeys: [],
      cssStyles: {},
      background: '',
      backgroundImage: '',
      backgroundPosition: '',
      backgroundSize: '',
      backgroundBorder: '',
      backgroundGradient: '',
      backgroundOpacity: '',
      text: 'Hello World!',
      textColor: '',
      textDirection: '',
      textAlign: '',
      textIndent: '',
      textShadow: '',
      hshadow: '',
      vshadow: '',
      blur: '',
      glow: '',
      textTransform: '',
      verticalAlign: '',
      whiteSpace: '',
      letterSpacing: '',
      font: 'monospace',
    }
    this.saveChoice = this.saveChoice.bind(this);
  }
  forceUpdate() {
    this.render();
  }
  saveChoice(cssKey, cssValue) {
    if (cssKey ==  'background') {
      this.setState({ background: cssValue });
    }
    if (cssKey ==  'backgroundImage') {
      this.setState({backgroundImage: cssValue});
    }
    if (cssKey ==  'backgroundPosition') {
      this.setState({backgroundPosition: cssValue});
    }
    if (cssKey ==  'backgroundSize') {
      this.setState({backgroundSize: cssValue});
    }
    if (cssKey ==  'bgborder') {
      this.setState({backgroundBorder: cssValue});
    }
    if (cssKey ==  'text') {
      this.setState({text: cssValue});
    }
    if (cssKey ==  'textColor') {
      this.setState({textColor: cssValue});
    }
    if (cssKey ==  'textDirection') {
      this.setState({textDirection: cssValue});
    }
    if (cssKey ==  'textAlign') {
      this.setState({textAlign: cssValue});
    }
    if (cssKey ==  'textIndent') {
      this.setState({textIndent: cssValue});
    }
    if (cssKey ==  'textShadow') {
      this.setState({textShadow: cssValue});
    }
    if (cssKey ==  'hshadow') {
      this.setState({hshadow: cssValue});
    }
    if (cssKey ==  'vshadow') {
      this.setState({vshadow: cssValue});
    }
    if (cssKey ==  'blur') {
      this.setState({blur: cssValue});
    }
    if (cssKey ==  'glow') {
      this.setState({glow: cssValue});
    }
    if (cssKey ==  'textTransform') {
      this.setState({textTransform: cssValue});
    }
    if (cssKey ==  'verticalAlign') {
      this.setState({verticalAlign: cssValue});
    }
    if (cssKey ==  'whiteSpace') {
      this.setState({whiteSpace: cssValue});
    }
    if (cssKey ==  'letterSpacing') {
      this.setState({letterSpace: cssValue});
    }
    if (cssKey ==  'font') {
      this.setState({font: cssValue});
    }
    let data = this.state.cssKeys;
    let validator = false;
    if (cssValue !== ' ') {
      data.forEach((item) => {
        if (cssKey == item.cssKey) {
          item.cssValue = cssValue;
          validator = true;
        }
      })
      if (validator == false) {
        data.push({cssKey, cssValue});
      }
      this.setState({ cssKeys: data });
    }

    this.forceUpdate();
  }
  savePaintings() {
    this.setState ({ open: true })
  }
  closePainting() {
    this.setState  ({ open: false })
  }
  handleSubmit() {

  }
  render() {
    const onehundred = 100;
    console.log(this.state.cssKeys)
    return(
      <div>
        <div className="flex-container">
          <div id="controllers">
            <Collapsible trigger="Background" transitionTime={onehundred} >
              <Background saveChoice={this.saveChoice} />
            </Collapsible>
            <Collapsible trigger="Typography" transitionTime={onehundred} >
              <Typography saveChoice={this.saveChoice} />
            </Collapsible>
            {/* <Collapsible trigger="Canvas" transitionTime={onehundred} >
              <Canvas saveChoice={this.saveChoice} />
            </Collapsible>
            <Collapsible trigger="Emojis" transitionTime={onehundred} >
              <PageLayout saveChoice={this.saveChoice} />
            </Collapsible>
            <Collapsible trigger="Animations" transitionTime={onehundred} >
              <Animations saveChoice={this.saveChoice} />
            </Collapsible>
            <Collapsible trigger="Keyboard" transitionTime={onehundred} >
              <Keyboard saveChoice={this.saveChoice} />
            </Collapsible>
            <Collapsible trigger="D3Animations" transitionTime={onehundred} >
              <D3Animations saveChoice={this.saveChoice} />
            </Collapsible> */}
          </div>
          <div id ="contentView">
            <StyleSheet
              cssKeys = {this.state.cssKeys}
              background={this.state.background}
              backgroundPosition={this.state.backgroundPosition}
              backgroundSize={this.state.backgroundSize}
              backgroundImage={this.state.backgroundImage}
              backgroundBorder={this.state.backgroundBorder}
              text={this.state.text}
              textColor={this.state.textColor}
              textAlign={this.state.textAlign}
              textIndent={this.state.textIndent}
              textShadow={this.state.textShadow}
              hshadow={this.state.hshadow}
              vshadow={this.state.vshadow}
              blur={this.state.blur}
              glow={this.state.glow}
              textTransform={this.state.textTransform}
              verticalAlign={this.state.verticalAlign}
              whiteSpace={this.state.whiteSpace}
              letterSpacing={this.state.letterSpacing}
              font={this.state.font}
            />
          </div>
        </div>
        <button className="saveButton" onClick={this.savePainting}>SAVE</button>
        <Modal isOpen={this.state.open} onRequestClose={this.closePainting}>
              <PaintingForm
                closePainting={this.closePainting}
                handleSubmit={this.handleSubmit}
                buttonText={"SAVE"}
              />
          <button onClick={this.closePainting} id="closeButton">CLOSE</button>
       </Modal>
      </div>
    )
  }
}

Animator.propTypes = propTypes;

export default Animator;
