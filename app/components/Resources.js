import React from 'react';
import Style from '../styles/Style';

const Resources = React.createClass({
  render: function(){
    return(
      <div className='equipment'>
        <h4>Resources</h4>
        <a href={"https://reelrocktour.com/"} target="blank">Climbing Films</a>
        <br/><br/>
        <a href={"https://en.wikipedia.org/wiki/Grade_(climbing)"} target="blank">Climbing Rating System</a>
        <br/><br/>
        <a href={"http://www.climbing.com/people/doctor-of-climbology-33-must-read-climbing-books/"} target="blank">Climbing Books</a>
        <br/><br/>
        <a href={"http://www.meetup.com/topics/rockclimbing/"} target="blank">Climbing Meetups</a>
        <br/><br/>
      </div>
    );
  }
});

export default Resources;
