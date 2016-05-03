import React from 'react';
import Style from '../styles/Style';
import axios from 'axios';

const Inspirations = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: []
    };
  },

  componentDidMount: function() {
    console.log("get all videos!");

    //AjaxHelper.getAllRecipes()
    var url = "http://0.0.0.0:3000/videos.json";
    axios.get(url)
    .then(function(response){
      console.log("Response.data:", response.data.videos);
      this.setState({
        ajaxReturn: response.data.videos
      });
    }.bind(this))
    .catch(function(err){
      console.warn('Error');
      return err;
    })
  },

  render: function(){
    return(
      <div>
        <h4>Inspirations</h4>
        <iframe width="428" height="240" src="https://www.youtube.com/embed/l8fVyqWYB-Y" frameBorder="0" allowFullScreen>
        </iframe>

        <br/>


          <br/>
          <br/>
      </div>
    );
  }
});

export default Inspirations;
