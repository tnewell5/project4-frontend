import React from 'react';
import {Link} from 'react-router';


const Home = React.createClass({
  clickConfirm: function(){
    console.log('button was clicked!');
  },
  render: function(){
    return(
      <div>
        <h1 className="title-box">Climb On!</h1>
        <div>
          <h4 className='entry-text'>Want to learn how to climb?</h4>
        </div>
        <Link to="/no"><button onClick={this.clickConfirm}>Not really</button></Link>
        <Link to="/yes"><button onClick={this.clickConfirm}>Sure!</button></Link>
      </div>
    )
  }
});

export default Home;
