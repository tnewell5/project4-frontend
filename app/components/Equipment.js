import React from 'react';
import Style from '../styles/Style';

const Equipment = React.createClass({
  render: function(){
    return(
      <div className='equipment'>
        <h4>What equipment do I need?</h4>
        <div className='equipment-images'>
          <a className='equipment-link' href={"http://www.ems.com/search?q=climbing%20shoes"} target="blank">
            <img style={Style.img} src="/app/images/climbing-shoes.jpg" />
          </a>
          <a className='equipment-link' href={"http://www.ems.com/climb/rock-climbing/chalk-bags-and-chalk/"} target="blank">
            <img style={Style.img} src="/app/images/chalk-bag.jpg" />
          </a>
          <a href={"http://www.ems.com/climb/rock-climbing/harnesses/"} target="blank">
            <img style={Style.img} src="/app/images/harness.jpg" />
          </a>
        </div>
      </div>
    );
  }
});

export default Equipment;
