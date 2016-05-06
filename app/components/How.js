import React from 'react';
import Style from '../styles/Style';
import {Button, Modal} from 'react-materialize';

const How = React.createClass({
  render: function(){
    return(
      <div className='equipment'>
        <h4>How do I climb?</h4>
        <div className='equipment-images'>
          <img className='center-image' src="/app/images/climbOn6.jpg" />
          <br/>
          <a className='link' href={"http://www.wikihow.com/Rock-Climb"} target="blank">Step-By-Step</a>
        </div>
      </div>
    );
  }
});

export default How;
