import React from 'react';
import {Link} from 'react-router';

const No = React.createClass({
  render: function(){
    return(
      <div className='no-page'>
        <div className='no-div'>
          <h4>Come back when you change your mind!</h4>
          <br/>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }
});

export default No;
