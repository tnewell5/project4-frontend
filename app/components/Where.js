import React from 'react';
import Style from '../styles/Style';

const Where = React.createClass({
  render: function(){
    const gym = 'climbing gym';
    return(
      <div>
        <h4>Where do I climb?</h4>
          <img style={Style.img} src="/app/images/climb2.jpg" />
          <br/>
          <form action="https://maps.google.com/maps" method="get" target="_blank">
            <label className="googleInput" htmlFor="saddr">Enter your location:</label><br/>
            <input type="text" name="saddr" />
            <input type="hidden" name="daddr" value={gym} />
            <input className="googleButt"type="submit" value="Get directions" />
          </form>
          <br/>
          <br/>
      </div>
    );
  }
});

export default Where;
