import React from 'react';
import {Link} from 'react-router';
import { Parallax, Background } from 'react-parallax';
import ParallaxComponent from 'react-parallax-component';
import Equipment from './Equipment';
import How from './How';
import Where from './Where';
import Inspirations from './Inspirations';
// import Resources from './Resources';
import Style from '../styles/Style.js';
//import {Background} from 'react-materialize';

const Yes = React.createClass({
  render: function(){
    var Styling = {
      color: 'blue'
    };
    window.setTimeout(function(){scrollBy(0, window.innerHeight)}, 0);

    return(
      <div style={Style}>
        <div className="image-div">
          <img className='background-image' src="/app/images/climbOn2.jpg" />
        </div>
        <Inspirations />
        <div className="image-div">
          <img className='background-image' src="/app/images/climbOn3.jpg" />
        </div>
        <Where />
        <div className="image-div">
          <img className='background-image' src="/app/images/climbOn4.jpg" />
        </div>
        <How />
        <div className="image-div">
          <img className='background-image' src="/app/images/climbOn5.jpg" />
        </div>
        <Equipment />
        <div className="image-div">
          <img className='background-image' src="/app/images/climbOn1.jpg" />
        </div>
      </div>
    );
  }
});

export default Yes;
