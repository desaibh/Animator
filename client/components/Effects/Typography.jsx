import React from 'react';

const propTypes = {
   saveChoice: React.PropTypes.func.isRequired,
}

class Typography extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      textColor: '',
      textDecoration: '',
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
      font: '',
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  forceUpdate(cssKey, cssValue) {
    this.props.saveChoice(cssKey, cssValue)
  }
  onChangeHandler(e) {
    e.preventDefault();
    if ((e.target.value !== 'none') &&
        (e.target.value !== '') &&
        (e.target.value !== undefined)) {
      if (e.target.name == 'text') {
        this.forceUpdate('text', e.target.value);
      }
      if (e.target.name == 'textColor') {
        this.forceUpdate('textColor', e.target.value);
      }
      if (e.target.name == 'textAlignment') {
        this.forceUpdate('textAlignment', e.target.value);
      }
      if (e.target.name == 'letterspacing') {
        let letterSpacing = e.target.value;
        this.forceUpdate('letter-spacing', letterSpacing);
      }
      if (e.target.name == 'lineheightpx') {
        let lineHeight = e.target.value + 'px';
        this.forceUpdate('lineHeight', lineHeight);
      }
      if (e.target.name == 'lineheightpercent') {
        let lineHeight = e.target.value + '%';
        this.forceUpdate('lineHeight', lineHeight);
      }
      if (e.target.name == 'textdecoration') {
        let textDecoration = e.target.value + '%';
        this.forceUpdate('textDecoration', textDecoration);
      }
      if (e.target.name == 'textindentpx') {
        let textIndent = e.target.value + 'px';
        this.forceUpdate('textIndent', textIndent);
      }
      if (e.target.name == 'textindentpercent') {
        let textIndent = e.target.value + '%';
        this.forceUpdate('textIndent', textIndent);
      }
      if (e.target.name == 'hshadowpx') {
        this.setState({ hshadow: (e.target.value + 'px ')});
      }
      if (e.target.name == 'vshadowpx') {
        this.setState({ vshadow: (e.target.value + 'px ')});
      }
      if (e.target.name == 'blurradius')  {
        this.setState({ blur: (e.target.value + 'px ')});
      }
      if (e.target.name == 'textColorshadow') {
        this.setState({ glow: e.target.value});
      }
      this.setState({ textShadow: this.state.hshadow + this.state.vshadow + this.state.blur + this.state.glow })
      if ((e.target.name == 'initialshdw') || (e.target.name == 'noshdw')) {
        this.setState({ textShadow: ''});
      }
      this.forceUpdate('textShadow', this.state.textShadow);

      if ((e.target.name == 'textTransform') || (e.target.name == 'noshdw')) {
        this.setState({ textTransform: e.target.value });
        this.forceUpdate('textTransform', this.state.textTransform);
      }
      if ((e.target.name == 'textAlign') || (e.target.name == 'noshdw')) {
        this.setState({ textAlign: e.target.value });
        this.forceUpdate('textAlign', this.state.textAlign);
      }
      if (e.target.name == 'verticalAlign') {
        this.setState({ verticalAlign: e.target.value });
        this.forceUpdate('verticalAlign', this.state.verticalAlign);
      }
      if ((e.target.name == 'whiteSpace') || (e.target.name == 'noshdw')) {
        this.setState({ whiteSpace: e.target.value });
        this.forceUpdate('whiteSpace', this.state.whiteSpace);
      }
      if (e.target.name == 'letterspacepx') {
        this.setState({ letterSpacing: e.target.value + 'px' });
        this.forceUpdate('letterSpacing', this.state.letterSpacing);
      }
      if (e.target.name == 'letterspacepercent') {
        this.setState({ letterSpacing: e.target.value + '%' });
        this.forceUpdate('letterSpacing', this.state.letterSpacing);
      }
      if (e.target.name == 'font') {
        this.setState({ font: e.target.value + '%' });
        this.forceUpdate('font', this.state.font);
      }
    }
  }
  render() {
    return(
      <div>
        <label>
          <span className="span4"><b>Text:</b> </span>
          <input type="textarea" cols="50" name="text" id="text" onChange={this.onChangeHandler} />
        </label>
        <label>
          <span className="span4"><b>Color:</b> </span>
          <input type="color" name="textColor" id="textColor" onChange={this.onChangeHandler} />
        </label>
        <label>
          <span className="span4"><b>Text Alignment:</b> </span>
          <input list="textAlignment" name="textAlignment"  onChange={this.onChangeHandler} />
          <datalist id="textAlignment">
          <option value="right">right</option>
          <option value="left">left</option>
          <option value="center">center</option>
          <option value="justify">justify</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
          <option value="none">none</option>
          </datalist>
        </label>
        <label>
          <div className="nowrap">
            <span className="span4"><b>Letter Spacing:</b> </span>
            <input type="number" name="letterspacing" onChange={this.onChangeHandler} />
          </div>
        </label>
        <label>
          <span className="span4"><b>Line Height:</b></span>
          <div className="nowrap">
            <em>Pixels:</em> <input type="number" min="0" name="lineheightpx"  onChange={this.onChangeHandler}/><br />
            <em>Percent:</em> <input type="number" min="0" name="lineheightpercent"  onChange={this.onChangeHandler}/>
          </div>
        </label>
        <label>
          <span className="span4"><b>Text Decoration:</b> </span>
          <input list="textdecoration" name="textdecoration"  onChange={this.onChangeHandler} />
          <datalist id="textdecoration">
            <option value="underline">underline</option>
            <option value="overline">overline</option>
            <option value="capitalize">line-through</option>
            <option value="initial">initial</option>
            <option value="inherit">inherit</option>
            <option value="none">none</option>
          </datalist>
        </label>
        <label>
          <span className="span4"><b>Text Indent:</b></span>
          <div className="nowrap">
            <em>Pixels:</em> <input type="number" min="0" name="textindentpx"  onChange={this.onChangeHandler}/><br />
            <em>Percent:</em> <input type="number" min="0" name="textindentpercent"  onChange={this.onChangeHandler}/>
          </div>
        </label>
        <label>
          <span className="span4"><b>Text Shadow:</b></span>
          <div className="nowrap">
            <em>Horizontal Shadow:</em> <input type="number"  name="hshadowpx"  onChange={this.onChangeHandler}/> <br />
            <em>Vertical Shadow:</em> <input type="number" name="vshadowpx"  onChange={this.onChangeHandler}/><br />
            <em>Blur Radius:</em> <input type="number" min="0" name="blurradius"  onChange={this.onChangeHandler}/><br />
            <em>Color:</em> <input type="color" name="textColorshadow" onChange={this.onChangeHandler} /><br />
            <em>Initial:</em> <input type="number" name="initialshdow" onChange={this.onChangeHandler} /><br />
            <em>None:</em> <input type="noshdw" name="none" onChange={this.onChangeHandler} />
          </div>
        </label>
        <label>
          <span className="span4"><b>Text Transform: </b> </span>
          <input list="textTransform" name="textTransform"  onChange={this.onChangeHandler} />
          <datalist id="textTransform">
            <option value="uppercase">uppercase</option>
            <option value="lowercase">lowercase</option>
            <option value="capitalize">capitalize</option>
            <option value="initial">initial</option>
            <option value="inherit">inherit</option>
            <option value="none">none</option>
          </datalist>
        </label>
        <label>
          <span className="span4"><b>Text Align: </b> </span>
          <input list="textAlign" name="textAlign"  onChange={this.onChangeHandler} />
          <datalist id="textAlign">
            <option value="center">center</option>
            <option value="left">left</option>
            <option value="right">right</option>
            <option value="justify">justify</option>
            <option value="initial">initial</option>
            <option value="inherit">inherit</option>
            <option value="none">none</option>
          </datalist>
        </label>
        <label>
          <span className="span4"><b>Vertical Align: </b> </span>
          <div className="nowrap">
            <em>Pixels:</em> <input type="number" min="0" name="textindentpx"  onChange={this.onChangeHandler}/><br />
            <em>Percent:</em> <input type="number" min="0" name="textindentpercent"  onChange={this.onChangeHandler}/><br />
          </div>
          <em>Relative: </em>
          <input list="verticalAlign" name="verticalAlign"  onChange={this.onChangeHandler} />
          <datalist id="verticalAlign">
            <option value="baseline">baseline</option>
            <option value="length">length</option>
            <option value="sub">sub</option>
            <option value="super">super</option>
            <option value="top">top</option>
            <option value="text-top">text-top</option>
            <option value="middle">middle</option>
            <option value="bottom">bottom</option>
            <option value="text-bottom">text-bottom</option>
            <option value="initial">initial</option>
            <option value="inherit">inherit</option>
            <option value="none">none</option>
          </datalist>
        </label>
        <label>
          <span className="span4"><b>White Space: </b> </span>
          <input list="whiteSpace" name="whiteSpace"  onChange={this.onChangeHandler} />
          <datalist id="whiteSpace">
            <option value="normal">normal</option>
            <option value="no-wrap">no-wrap</option>
            <option value="pre">pre</option>
            <option value="pre-line">pre-line</option>
            <option value="pre-wrap">pre-wrap</option>
            <option value="initial">initial</option>
            <option value="inherit">inherit</option>
          </datalist>
        </label>
        <label>
          <span className="span4"><b>Letter Spacing:</b></span>
          <div className="nowrap">
            <em>Pixels:</em> <input type="number" min="0" name="letterspacepx"  onChange={this.onChangeHandler}/><br />
            <em>Percent:</em> <input type="number" min="0" name="letterspacepercent"  onChange={this.onChangeHandler}/>
          </div>
        </label>
        <label>
          <span className="span4"><b>Font</b> </span>
          <input list="font" name="font"  onChange={this.onChangeHandler} />
          <datalist id="font">
            <option value="arial">arial</option>
            <option value="charcoal">charcoal</option>
            <option value="courier">courier</option>
            <option value="cursive">cursive</option>
            <option value="gadget">gadget</option>
            <option value="geneva">geneva</option>
            <option value="georgia">georgia</option>
            <option value="helvetica">helvetica</option>
            <option value="monaco">monaco</option>
            <option value="monotype">monotype</option>
            <option value="palatino">palatino</option>
            <option value="sans-serif">sans-serif</option>
            <option value="serif">serif</option>
            <option value="tahoma">tahoma</option>
            <option value="times">times</option>
            <option value="verdana">verdana</option>
          </datalist>
        </label>
      </div>
    )
  }
}

Typography.propTypes = propTypes;

export default Typography;
