import React from 'react';
import store from '../store';

export default React.createClass({
  getInitialState: function() {
    return store.document.toJSON();
  },
  componentDidMount: function() {
    store.document.on('change', () => {
      this.setState(store.document.toJSON());
    })
  },
  toggleRead: function() {
    store.document.toggleRead();
  },
  readCheck: function() {
    if(this.state.isRead) {
      return (
        <div>
          Read <input type="checkbox" checked={this.state.isRead} onClick={this.toggleRead} />
        </div>
      )
    } else {
      return (
        <div>
          Mark as read <input type="checkbox" checked={this.state.isRead} onClick={this.toggleRead} />
        </div>
      )
    }
  },
  render: function() {
    return (
      <div>
        <p>${this.state.content}</p>
        {this.readCheck()}
      </div>
    )
  }
})
