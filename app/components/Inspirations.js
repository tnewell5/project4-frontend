import React from 'react';
import Style from '../styles/Style';
import axios from 'axios';

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
      <div>
        <h4>Inspirations</h4>
        <iframe width="428" height="240" src={this.state.ajaxReturn} frameBorder="0" allowFullScreen>
        </iframe>

        <br/>


          <br/>
          <br/>
      </div>
    );
  }
});

export default Inspirations;
