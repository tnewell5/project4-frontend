import React from 'react';
import {Link} from 'react-router';
import { Parallax, Background } from 'react-parallax';
import ParallaxComponent from 'react-parallax-component';
import Equipment from './Equipment';
import How from './How';
import Where from './Where';
//import {Background} from 'react-materialize';

const Yes = React.createClass({
  render: function(){
    var Styling = {
      color: 'blue'
    };
    window.setTimeout(function(){scrollBy(0, window.innerHeight)}, 0);

    return(
      <div>
        <Where />
        <How />
        <Equipment />
        <br/><br/>
        <h4>Great! Start Climbing!</h4>

      </div>
    );
  }
});

export default Yes;
