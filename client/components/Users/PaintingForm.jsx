import React from 'react';

const propTypes = {
  sendPainting: React.PropTypes.func,
};

class PaintingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: '',
      submitted: false
     };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ submitted: false });
  }
  handleInputChange(e) {
    const target = e.target.value;
    this.setState({ target: target });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.sendPainting(this.state.target);
    this.setState({ submitted: true });

  }
  render() {
    return (
      <div>
        {this.state.submitted  ? false :
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="SAVE PAINTING" className="formSubmit" />
        </form>}
      </div>
    );
  }
}

PaintingForm.propTypes = propTypes;

export default PaintingForm;
