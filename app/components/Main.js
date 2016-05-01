import React from 'react';
import Home from './Home';
import Style from '../styles/Style.js';

const Main = React.createClass({
  render: function(){
    return(
      <div style={Style} className="main-container">
        {this.props.children}
      </div>
    )
  }
});

export default Main;
