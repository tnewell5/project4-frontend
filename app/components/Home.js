import React from 'react';
import {Link} from 'react-router';


const Home = React.createClass({
  clickConfirm: function(){
    console.log('button was clicked!');
  },
  render: function(){
    return(
      <div className='entry-page'>
        <h3 className="title-box">Climb On!</h3>
        <br/>
        <div className='entry-div'>
          <h4 className='entry-text'>Want to learn how to climb?</h4>
          <br/>
          <Link to="/no"><button className='entry-button' onClick={this.clickConfirm}>Not really</button></Link>
          <Link to="/yes"><button className='entry-button' onClick={this.clickConfirm}>Sure!</button></Link>
        </div>
      </div>
    )
  }
});

export default Home;
