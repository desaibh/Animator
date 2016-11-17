import React from 'react';

const propTypes = {
  handleSubmit: React.PropTypes.func,
  buttonText: React.PropTypes.string,
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }
  render() {
    return (
      <div>
      <div id="formdisplay">
        <form className="formContainer" onSubmit={this.handleSubmit} >
          <div className="card4">
            <div className="teal">
              <h2>{this.props.buttontext}</h2>
            </div>
            <p>
            <label className="grey">Email</label>
            <input
              classname="forminput"
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email..."
              onChange={this.handleInputChange}
            />
            </p>
            <p>
            <label className="grey">Password</label>
            <input
              classname="forminput"
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password..."
              onChange={this.handleInputChange}
            />
            </p>
            <input type="submit" value={this.props.buttonText} />
          </div>
        </form>
        </div>
      </div>
    );
  }
}

UserForm.propTypes = propTypes;

export default UserForm;
