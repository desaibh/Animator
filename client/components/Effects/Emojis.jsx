import React from 'react';
import ReactEmoji from 'react-emoji'
import EmojiPicker = from 'emojione-picker';
import emojiMap from 'react-emoji-picker/lib/emojiMap';

const emojiPickerStyles = {
  position: 'absolute',
  left: 0, top: '3.9rem',
  backgroundColor: 'white',
  width: '100%',
  padding: '.3em .6em',
  border: '1px solid #0074d9',
  borderTop: 'none',
  zIndex: '2'
};

class Emojis from React.Component (
  constructor() {
    super();
    this.state = {
      emoji: null,
      showEmojiPicker: false,
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.toggleEmojiPicker, false)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.toggleEmojiPicker, false)
  }
  toggleEmojiPicker(e) {
    if(this.refs.emoji.contains(e.target)) {
      this.setState({showEmojiPicker: true});
    } else {
      setTimeout(this.validateEmoji, 10)
      this.setState({showEmojiPicker: false});
    }
  }
  validateEmoji() {
    let matched = emojiMap.filter(function(emoji) {
      return `:${emoji.name}:` === this.state.emoji
    })
    if(matched.length === 0) {
      this.setState({emoji: null})
    }
  }
  updateState(e) {
    this.setState({emoji: e.target.value})
  }
  setEmoji(emoji) {
    this.setState({emoji: emoji})
  }
  grabKeyPress(e) {
    if(e.keyCode === 13) {
      e.preventDefault()
    }
  }
  emojiPicker() {
    if(this.state.showEmojiPicker) {
      return (
        <EmojiPicker
          style={emojiPickerStyles} onSelect={this.setEmoji}
          query={this.state.emoji}
        />
      )
    }
  }
  render() {
    return (
      <div>
        <p ref="emoji">
          <label htmlFor="emoji">Emoji</label>
          <input name="emoji" id="emoji" value={this.state.emoji} autoComplete="off"
            type={this.state.showEmojiPicker ? "search" : "text"}
            onChange={this.updateState} onKeyDown={this.grabKeyPress}/>
          {this.emojiPicker()}
        </p>
      </div>
    )
  }
}

export default Emojis;
