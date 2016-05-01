import React from 'react';
import {Link} from 'react-router';

const Yes = React.createClass({
  render: function(){
    window.setTimeout(function(){scrollBy(0, window.innerHeight)}, 0);
    return(
      <div>

        <h4>Great! Start Climbing!</h4>
        
      </div>
    );
  }
});

export default Yes;
