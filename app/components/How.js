import React from 'react';
import Style from '../styles/Style';
import {Button, Modal} from 'react-materialize';

const How = React.createClass({
  render: function(){
    return(
      <div className='equipment'>
        <h4>How do I climb?</h4>
        <div className='equipment-images'>
          <img style={Style.img} src="/app/images/climbOn6.jpg" />
          <br/>
          <Modal
            header='How to Rock Climb'
            trigger={
              <Button className='modal-button' waves='light'>Step-By-Step</Button>
            }>
            <iframe width="900" height="300" src={"http://www.wikihow.com/Rock-Climb"} frameBorder="0" allowFullScreen>MODAL
            </iframe>
          </Modal>
        </div>
      </div>
    );
  }
});

export default How;
