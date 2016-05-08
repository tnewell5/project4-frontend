import React from 'react';
import {Button, Icon, Dropdown, NavItem, Navbar, Col, Row, Preloader} from 'react-materialize';
import { Parallax } from 'react-parallax';

const Parallax1 = React.createClass({
	render: function () {
  	return (
    	<div className="image-div">
				<Parallax bgImage="/app/images/climbOn1.jpg" strength={400} className='parallax-image'>
					<br/>
					<h3 className='h-tag'> Start Climbing! </h3>
				</Parallax>
      </div>
    )
  }
});

export default Parallax1;
