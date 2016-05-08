import React from 'react';
import {Button, Icon, Dropdown, NavItem, Navbar, Col, Row, Preloader} from 'react-materialize';
import { Parallax } from 'react-parallax';

const Parallax5 = React.createClass({
	render: function () {
  	return (
    	<div className="image-div">
				<Parallax bgImage="/app/images/climbOn2.jpg" strength={400} className='parallax-image'>
        <br/><br/>
				</Parallax>
      </div>
    )
  }
});

export default Parallax5;
