import React from 'react';
import store from '../store';

export default React.createClass({
  render: function() {
    return (
      <div>
        <p>${this.props.content}</p>
      </div>
    )
  }
})
