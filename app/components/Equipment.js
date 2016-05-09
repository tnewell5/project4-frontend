import React from 'react';
import Style from '../styles/Style';
import {Button, Modal} from 'react-materialize';

const Equipment = React.createClass({
  getInitialState: function(){
    return {
      shoesSrc: '',
      harnessSrc: '',
      chalkSrc: ''
    };
  },
  onShoeClick: function(){
    console.log('onShoeClick was called!');
    this.setState({
      shoesSrc: "https://www.ems.com/search?q=climbing%20shoes"
    });
  },
  onHarnessClick: function(){
    console.log('onHarnessClick was called!');
    this.setState({
      harnessSrc: "https://www.ems.com/climb/rock-climbing/harnesses/"
    });
  },
  onChalkClick: function(){
    console.log('onChalkClick was called!');
    this.setState({
      chalkSrc: "https://www.ems.com/climb/rock-climbing/chalk-bags-and-chalk/"
    });
  },
  render: function(){
    return(
      <div className='equipment'>
        <h4>What equipment do I need?</h4>
        <div className='equipment-images'>
          <img style={Style.img} src="/app/images/climbing-shoes.jpg" />
          <img style={Style.img} src="/app/images/chalk-bag.jpg" />
          <img style={Style.img} src="/app/images/harness.jpg" />
          <br/>
          <span onClick={this.onShoeClick}>
            <Modal
              header='Climbing Shoes'
              trigger={
                <Button className='modal-button' waves='light'>Shoes</Button>
              }>
              <iframe width="700" height="300" src={this.state.shoesSrc} frameBorder="0" allowFullScreen>MODAL
              </iframe>
            </Modal>
          </span>

          <span onClick={this.onChalkClick}>
            <Modal
              header='Chalk Bags'
              trigger={
                <Button className='modal-button' waves='light'>Chalk Bag</Button>
              }>
              <iframe width="700" height="300" src={this.state.chalkSrc} frameBorder="0" allowFullScreen>MODAL
              </iframe>
            </Modal>
          </span>

          <span onClick={this.onHarnessClick}>
            <Modal
              header='Climbing Harnesses'
              trigger={
                <Button className='modal-button' waves='light'>Harness</Button>
              }>
              <iframe width="700" height="300" src={this.state.harnessSrc} frameBorder="0" allowFullScreen>MODAL
              </iframe>
            </Modal>
          </span>

        </div>
      </div>
    );
  }
});

export default Equipment;
