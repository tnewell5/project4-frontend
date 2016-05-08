import React from 'react';
import {Link} from 'react-router';
import { Parallax, Background } from 'react-parallax';
import ParallaxComponent from 'react-parallax-component';
import Equipment from './Equipment';
import How from './How';
import Where from './Where';
import Inspirations from './Inspirations';
import Style from '../styles/Style.js';
import Parallax1 from './Parallax1';


const Yes = React.createClass({
  render: function(){
    // var Styling = {
    //   color: 'blue'
    // };
    // window.setTimeout(function(){scrollBy(0, window.innerHeight)}, 2000);
    window.setTimeout(function(){scrollBy(0, 2889)}, 0);

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
        <Parallax1 />
      </div>
    );
  }
});

export default Yes;
