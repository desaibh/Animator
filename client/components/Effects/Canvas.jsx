import React from 'react';

const propTypes = {
   saveChoice: React.PropTypes.func.isRequired,
}

class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      canvasWidth: '',
      canvasHeight: '',
      canvasBorder: '',
      canvasGetContext: '',
      ctxFont: '',
      ctxFill: '',
      ctxStrokeText: '',
      ctxCreateLinearGradient: '',
      ctxAddColorStopZero: '',
      ctxAddColorStopOne: '',
      ctxFillStyle: '',
      ctxFillRect: '',
      ctxDrawImg: '',
      circleCx: '',
      circleCy: '',

    }
  }
  render() {
    return(
      <div>
        <label>
          <span className="span4"><b>Canvas Size:</b></span><br/>
          <div className="nowrap">
            <em>Width:</em> <input type="number" min="0" name="canvasWidth"  onChange={this.onChangeHandler}/>
            <em>Height:</em> <input type="number" min="0" name="canvasHeight"  onChange={this.onChangeHandler}/>
          </div>
        </label>
        <label>
          <span className="span4"><b>Border:</b> </span><br />
          <label className="optionbutton">*Color:</label>
          <input type="color" name="canvasColor" onChange={this.onChangeBdrHandler} />
          <br />
          <label className="optionbutton">*Style:</label>
          <input list="canvasColor" name="canvasColor"  onChange={this.onChangeBdrHandler} />
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
        </label>
        <span className="span4"><b><u>LINE:</u></b></span><br/>

        <label>
          <span className="span4"><b>Line:</b></span><br/>
          <div className="nowrap">
            <em>Move X:</em> <input type="number" min="0" name="moveWidth"  onChange={this.onChangeHandler}/>
            <em>Move Y:</em> <input type="number" min="0" name="moveHeight"  onChange={this.onChangeHandler}/>
            <em>Line X:</em> <input type="number" min="0" name="lineWidth"  onChange={this.onChangeHandler}/>
            <em>Line Y:</em> <input type="number" min="0" name="lineHeight"  onChange={this.onChangeHandler}/>
          </div>
        </label>
        <label>
          <span className="span4"><b>Circle:</b></span><br/>
          <div className="nowrap">
            <em>Left:</em> <input type="number" min="0" name="moveWidth"  onChange={this.onChangeHandler}/>
            <em>Top:</em> <input type="number" min="0" name="moveHeight"  onChange={this.onChangeHandler}/>
            <em>Arc (0 for circle):</em> <input type="number" min="0" name="lineWidth"  onChange={this.onChangeHandler}/>
            <em>Degrees:</em> <input type="number" min="0" name="lineHeight"  onChange={this.onChangeHandler}/>
          </div>
        </label>
        <label>
          <span className="span4"><b>Font:</b></span><br/>
          <div className="nowrap">
            <em>Size:</em> <input type="number" min="0" name="moveWidth"  onChange={this.onChangeHandler}/>
            <em>Family:</em> <input type="number" min="0" name="moveHeight"  onChange={this.onChangeHandler}/>
            <em>Text:</em> <input type="number" min="0" name="lineWidth"  onChange={this.onChangeHandler}/>
            <em>Style:</em> <input type="number" min="0" name="ctxFontStyle"  onChange={this.onChangeHandler}/>
            <input list="ctxFontStyle" name="ctxFontStyle"  onChange={this.onChangeBdrHandler} />
            <datalist id="borderstyle">
              <option value="filltext">Fill Text</option>
              <option value="stroketext">StrokeText</option>
            </datalist><br />
            <em>Left:</em> <input type="number" min="0" name="ctxTxtLpos"  onChange={this.onChangeHandler}/>
            <em>Top:</em> <input type="number" min="0" name="lineHeight"  onChange={this.onChangeHandler}/>
          </div>
        </label>
      </div>
    )
  }
}

Canvas.propTypes = propTypes;

export default Canvas;
