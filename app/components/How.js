import React from 'react';
import Style from '../styles/Style';

const How = React.createClass({
  render: function(){
    return(
      <div>
        <h4>How do I climb?</h4>
          <img style={Style.img} src="/app/images/climb2.jpg" />
          <br/>
          <a href={"http://www.wikihow.com/Rock-Climb"} target="blank">Step-By-Step</a>
          <br/>
          <br/>
      </div>
    );
  }
});

export default How;
