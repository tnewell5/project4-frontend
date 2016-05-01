import React from 'react';
import {Link} from 'react-router';

const No = React.createClass({
  render: function(){
    return(
      <div>
        <h4>Come back when you will change your mind!</h4>
        <Link to="/">Home</Link>
      </div>
    );
  }
});

export default No;
