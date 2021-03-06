'use strict';

var React = require('react');
var Message = require('./Message.jsx');

var Messages = React.createClass({
  propTypes: {
    messages: React.PropTypes.array.isRequired,
    deleteMessage: React.PropTypes.func,
    updateMessage: React.PropTypes.func
  },

  render: function () {
    var messages = [];
    var message;

    for (var i = 0; i < this.props.messages.length; i++) {
      message = this.props.messages[i];
      messages.push(<Message key={message.id} message={message} deleteMessage={this.props.deleteMessage} updateMessage={this.props.updateMessage} />);
    }

    return (
      <ul>
        { messages }
      </ul>
    );
  }
});

module.exports = Messages;
