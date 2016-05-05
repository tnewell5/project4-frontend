import React from 'react';
import Style from '../styles/Style';
import {Button, Modal} from 'react-materialize';

const Equipment = React.createClass({
  render: function(){
    return(
      <div className='equipment'>
        <h4>What equipment do I need?</h4>
        <div className='equipment-images'>
          <img style={Style.img} src="/app/images/climbing-shoes.jpg" />
          <img style={Style.img} src="/app/images/chalk-bag.jpg" />
          <img style={Style.img} src="/app/images/harness.jpg" />
          <br/>
          <Modal
            header='Climbing Shoes'
            trigger={
              <Button className='modal-button' waves='light'>Shoes</Button>
            }>
            <iframe width="700" height="300" src={"http://www.ems.com/search?q=climbing%20shoes"} frameBorder="0" allowFullScreen>MODAL
            </iframe>
          </Modal>
          <Modal
            header='Chalk Bags'
            trigger={
              <Button className='modal-button' waves='light'>Chalk Bag</Button>
            }>
            <iframe width="700" height="300" src={"http://www.ems.com/climb/rock-climbing/chalk-bags-and-chalk/"} frameBorder="0" allowFullScreen>MODAL
            </iframe>
          </Modal>
          <Modal
            header='Climbing Harnesses'
            trigger={
              <Button className='modal-button' waves='light'>Harness</Button>
            }>
            <iframe width="700" height="300" src={"http://www.ems.com/climb/rock-climbing/harnesses/"} frameBorder="0" allowFullScreen>MODAL
            </iframe>
          </Modal>
        </div>
      </div>
    );
  }
});

export default Equipment;
