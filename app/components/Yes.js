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
import Parallax2 from './Parallax2';
import Parallax3 from './Parallax3';
import Parallax4 from './Parallax4';
import Parallax5 from './Parallax5';


const Yes = React.createClass({
  render: function(){
    // window.setTimeout(function(){scrollBy(0, window.innerHeight)}, 2000);
    window.setTimeout(function(){scrollBy(0, 2889)}, 0);

    return(
      <div style={Style}>
        <Parallax5 />
        <Inspirations />
        <Parallax4 />
        <Where />
        <Parallax3 />
        <How />
        <Parallax2 />
        <Equipment />
        <Parallax1 />
      </div>
    );
  }
});

export default Yes;
