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
        <Link to="/yes"><button onClick={this.clickConfirm}>Yes</button></Link>
        <Link to="/no"><button onClick={this.clickConfirm}>No</button></Link>
      </div>
    )
  }
});

export default Home;
