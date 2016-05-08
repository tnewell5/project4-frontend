import React from 'react';
import {Button, Icon, Dropdown, NavItem, Navbar, Col, Row, Preloader} from 'react-materialize';
import { Parallax } from 'react-parallax';

const Parallax2 = React.createClass({
	render: function () {
  	return (
    	<div className="image-div">
				<Parallax bgImage="/app/images/climbOn5.jpg" strength={400} className='parallax-image'>
				</Parallax>
      </div>
    )
  }
});

export default Parallax2;
