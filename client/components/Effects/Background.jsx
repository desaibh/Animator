import React from 'react';

const propTypes = {
   saveChoice: React.PropTypes.func.isRequired,
}

class Background extends React.Component {
  constructor() {
    super();
    this.state = {
      background: ' ',
      color:' ',
      image:' ',
      position:' ',
      selectedPosition:'',
      vpos: ' ',
      hpos: ' ',
      size:' ',
      wpix: ' ',
      hpix: ' ',
      repeat:' ',
      origin:' ',
      clip:' ',
      attachment:' ',
      borderpx: '',
      bordercolor: '',
      borderstyle: '',
      backgroundBorder: '',
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeBdrHandler = this.onChangeBdrHandler.bind(this);
  }
  forceUpdate(cssKey, cssValue) {
    this.props.saveChoice(cssKey, cssValue);
  }
  onChangeHandler(e) {
    if (e.target.value !== '') {
      let bg = this.state.background || ' ';
      if (e.target.name == 'color') {
        this.setState({color: e.target.value});
      }
      if (e.target.name == 'image') {
        let image = `url('${e.target.value}')`;
        this.setState({image: image})
      }
      let position = this.state.position || '';
      if (e.target.name == 'choice-position') {
        if (this.state.selectedPosition !== e.target.id) {
          this.setState({
            selectedPosition: e.target.id,
            position: ' ',
            vpos: '',
            hpos: '',
          })
        }
      }
      if (this.state.selectedPosition == 'percent') {
        if (e.target.name == "vpercent") {
         this.setState({vpos: e.target.value + '%'})
       } else if (e.target.name == "hpercent") {
         this.setState({hpos: e.target.value + '%'})
        }
        position = this.state.vpos + ' ' + this.state.hpos + ' ';
        this.setState({position: position});
      }
      if (this.state.selectedPosition == 'pixel') {
        if (e.target.name == "vpixels") {
         this.setState({vpos: e.target.value + 'px'})
        } else if (e.target.name == "hpixels") {
         this.setState({hpos: e.target.value + 'px'})
        }
        position = this.state.vpos + ' ' + this.state.hpos + ' ';
        this.setState({position: position});
      }
      if (this.state.selectedPosition == 'keywordposition') {
        position = e.target.value;
        this.setState({position: position})
      }
      if (e.target.name == "widthpx") {
        this.setState({
          wpix: e.target.value + 'px',
          size: this.state.wpix + " " + this.state.hpix
        })
      } else if (e.target.name == "heightpx") {
        this.setState({
          hpix: e.target.value + 'px',
          size: this.state.wpix + " " + this.state.hpix
        })
      } else if (e.target.name == "keywordsize") {
        this.setState({size: e.target.value })
      }
      if (e.target.name=="repeat") {
        this.setState({repeat: e.target.value})
      }
      if (e.target.name=="origin2") {
        this.setState({origin: e.target.value})
      }
      if (e.target.name=="clip") {
        this.setState({clip: e.target.value})
      }
      if (e.target.name=="attachment") {
        this.setState({attachment: e.target.value})
      }
      bg = this.state.color + ' ' +
         this.state.repeat + ' ' +
         this.state.clip + ' ' +
         this.state.attachment + ' ';
      this.setState({ background: bg })
      this.forceUpdate('background', this.state.background );
      this.forceUpdate('backgroundImage', this.state.image);
      this.forceUpdate('backgroundPosition', this.state.position);
      this.forceUpdate('backgroundSize', this.state.size);
    }
  }
  onChangeBdrHandler(e){
    e.preventDefault();
    let bdr = this.state.backgroundBorder;
    if (e.target.name ==  'borderpx') {
      this.setState({borderpx: e.target.value + "px "})
    }
    if (e.target.name ==  'bordercolor') {
      this.setState({bordercolor: e.target.value + " "})
    }
    if (e.target.name ==  'borderstyle') {
      this.setState({borderstyle: e.target.value})
    }
    console.log(this.state.borderstyle);
    bdr = this.state.borderpx + this.state.bordercolor + this.state.borderstyle;
    this.setState({ backgroundBorder: bdr })
    this.forceUpdate('bgborder', this.state.backgroundBorder)
  }
  render() {
    return(
      <div>
        <label>
          <span className="span4"><b>Color:</b> </span>
          <input type="color" name="color" onChange={this.onChangeHandler} />
        </label>
        <label>
          <span className="span4"><b>Image(URL):</b> </span>
          <input type="url" name="image" onChange={this.onChangeHandler} />
        </label>
        <label>
          <span className="span4"><b>Position:</b></span><br />
          <div>
            <input type="radio" name="choice-position" id="percent" onChange={this.onChangeHandler}/>
            <label htmlFor="percent" className="radiobutton">Percent:</label>
            <div className="reveal-if-active">
              <div className="nowrap">
                <span><em>Horizontal</em></span>
                <input type="number" min="1" max="100" name="hpercent" onChange={this.onChangeHandler} />
              </div>
              <div className="nowrap">
                <span><em>Vertical</em></span>
                <input type="number" min="1" max="100" name="vpercent" onChange={this.onChangeHandler} />
              </div>
            </div>
          </div>
          <div>
            <input type="radio" name="choice-position" id="pixel" onChange={this.onChangeHandler}/>
            <label htmlFor="pixel" className="radiobutton">Pixels:</label>
            <div className="reveal-if-active">
              <div className="nowrap">
                <span><em>Horizontal</em></span>
                <input type="number" min="0" name="hpixels" onChange={this.onChangeHandler} />
              </div>
              <div className="nowrap">
                <span><em>Vertical</em></span>
                <input type="number" min="0" name="vpixels" onChange={this.onChangeHandler} />
              </div>
            </div>
          </div>
          <div>
            <input type="radio" name="choice-position" id="keyword2" onChange={this.onChangeHandler} />
            <label htmlFor="keyword2" className="radiobutton">Keyword:</label>
            <div className="reveal-if-active" >
              <span><em>Position:</em></span>
              <input list="keywordposition" name="keywordposition" onChange={this.onChangeHandler} />
              <datalist id="keywordposition">
                <option value="left top">left top</option>
                <option value="left center">left center</option>
                <option value="left bottom">left bottom</option>
                <option value="right top">right top</option>
                <option value="right center">right center</option>
                <option value="right bottom">right bottom</option>
                <option value="center top">center top</option>
                <option value="center center">center center</option>
                <option value="center bottom">center bottom</option>
              </datalist>
            </div>
          </div>
          <div>
            <input type="radio" name="choice-position" id="nopos" onChange={this.onChangeHandler} />
            <label htmlFor="nopos" className="radiobutton">None</label>
          </div>
        </label>
        <label>
          <span className="span4"><b>Size:</b> </span><br />
          <div>
            <input type="radio" name="choice-size" id="pixels2" onChange={this.onChangeHandler}/>
            <label htmlFor="pixels2" className="radiobutton">Pixels:</label>
            <div className="reveal-if-active" >
              <div className="nowrap">
                <em>Width:</em> <input type="number" min="0" name="widthpx"  onChange={this.onChangeHandler}/> <br />
                <em>Height:</em> <input type="number" min="0" name="heightpx"  onChange={this.onChangeHandler}/>
              </div>
            </div>
          </div>
          <div>
            <input type="radio" name="choice-size" id="keyword3" onChange={this.onChangeHandler}/>
            <label htmlFor="keyword3" className="radiobutton">Keyword:</label>
            <div className="reveal-if-active" >
              <span><em>Position:</em></span>
              <input list="keywordsize" name="keywordsize"  onChange={this.onChangeHandler} />
              <datalist id="keywordsize">
                <option value="auto">auto</option>
                <option value="cover">cover</option>
                <option value="contain">contain</option>
                <option value="initial">initial</option>
              </datalist>
            </div>
          </div>
          <div>
            <input type="radio" name="choice-size" id="nosize" onChange={this.onChangeHandler} />
            <label htmlFor="nosize" className="radiobutton">None</label>
          </div>
        </label>
        <label>
          <span className="span4"><b>Repeat:</b> </span>
          <input list="repeat" name="repeat"  onChange={this.onChangeHandler} />
          <datalist id="repeat">
            <option value="repeat">repeat</option>
            <option value="no-repeat">no-repeat</option>
            <option value="repeat-x">repeat-x</option>
            <option value="repeat-y">repeat-y</option>
            <option value="initial">initial</option>
          </datalist>
        </label>
        {/* <label>
          <span className="span4"><b>Origin:</b> </span>
          <input list="origin2" name="origin2"  onChange={this.onChangeHandler} />
          <datalist id="origin2">
            <option value="padding-box">padding-box</option>
            <option value="border-box">border-box</option>
            <option value="content-box">content-box</option>
            <option value="initial">initial</option>
          </datalist>
        </label> */}
        <label>
          <span className="span4"><b>Border:</b> </span><br />
          <label className="optionbutton">*Color:</label>
          <input type="color" name="bordercolor" onChange={this.onChangeBdrHandler} />
          <br />

          <label className="optionbutton">*Style:</label>
          <input list="borderstyle" name="borderstyle"  onChange={this.onChangeBdrHandler} />
          <datalist id="borderstyle">
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
            <option value="groove">groove</option>
            <option value="ridge">ridge</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="hidden">hidden</option>
            <option value="mix">mix</option>
            <option value="none">none</option>
          </datalist><br />
          <label className="optionbutton">*Size:</label>
          <input type="number" min="0" name="borderpx"  onChange={this.onChangeBdrHandler}/>
         </label>
         {/* <label>
          <span className="span4"><b>Clip:</b> </span>
          <input list="clip" name="clip"  onChange={this.onChangeHandler} />
          <datalist id="clip">
            <option value="background-box">background-box</option>
            <option value="border-box">border-box</option>
            <option value="content-box">content-box</option>
            <option value="initial">initial</option>
          </datalist>
        </label> */}
        <label>
          <span className="span4"><b>Attachment:</b> </span>
          <input list="attachment" name="attachment" onChange={this.onChangeHandler} />
          <datalist id="attachment">
            <option value="scroll">scroll</option>
            <option value="fixed">fixed</option>
            <option value="local">local</option>
            <option value="initial">initial</option>
          </datalist>
        </label>
      </div>
    )
  }
}

Background.propTypes = propTypes;

export default Background;
