import React from 'react';
import Style from '../styles/Style';
import axios from 'axios';
import {MediaBox} from 'react-materialize';

const Inspirations = React.createClass({
  getInitialState: function() {
    return {
      //ajaxReturn: []
      ajaxReturn: ''
    };
  },

  componentDidMount: function() {
    console.log("get all videos!");

    //var url = "https://0.0.0.0:3000/videos.json";
    var url = "https://project4-backend.herokuapp.com/videos.json"
    console.log('this url gets sent to backend:', url);
    axios.get(url)
    .then(function(response){
      console.log("Response.data:", response.data.videos[0].link);
      this.setState({
        ajaxReturn: response.data.videos[0].link
      });
    }.bind(this))
    .catch(function(err){
      console.warn('Error');
      return err;
    })
  },

  render: function(){
    window.setTimeout(function(){scrollBy(0, window.innerHeight)}, 2000);
    return(
      <div className='equipment'>
        <h4>Inspirations and Resources</h4>
        <div className='flex-container'>
          <div className='youtube-video'>
            <iframe className='video' width="357" height="200" src={this.state.ajaxReturn} frameBorder="0" allowFullScreen>
            </iframe>
          </div>
          <div className='resources-links'>
            <a className='link' href={"https://reelrocktour.com/"} target="blank">Climbing Films</a>
            <br/>
            <a className='link' href={"https://en.wikipedia.org/wiki/Grade_(climbing)"} target="blank">Climbing Rating System</a>
            <br/>
            <a className='link' href={"http://www.climbing.com/people/doctor-of-climbology-33-must-read-climbing-books/"} target="blank">Climbing Books</a>
            <br/>
            <a className='link' href={"http://www.meetup.com/topics/rockclimbing/"} target="blank">Climbing Meetups</a>
          </div>
        </div>
      </div>
    );
  }
});

export default Inspirations;
