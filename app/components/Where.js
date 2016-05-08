import React from 'react';
import Style from '../styles/Style';
import {Button, Modal} from 'react-materialize';

const Where = React.createClass({
  render: function(){
    const gym = 'climbing gym';
    return(
      <div className='equipment'>
        <h4>Where do I climb?</h4>
        <div className='equipment-images'>
          <img className='center-image' src="/app/images/climbOn7.jpg" />
        </div>
        <br/><br/>
          <form action="https://maps.google.com/maps" method="get" target="_blank">
            <label className="googleInput" htmlFor="saddr">Enter your location:</label><br/>
            <input className='search-input' type="text" name="saddr" />
            <input type="hidden" name="daddr" value={gym} />
            <input className="search-button" className="googleButt" type="submit" value="Get directions" />
          </form>
          <br/>
          <br/>
      </div>
    );
  }
});

export default Where;
