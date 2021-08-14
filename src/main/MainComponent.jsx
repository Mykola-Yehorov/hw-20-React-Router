import {Link, Switch, Route, useRouteMatch} from "react-router-dom";
import React from "react";
import './main.css';
import LogoImg from './img/Graphic_Logo.webp';

const MainComponent = () => {
	return (
		<div class="main__container">
			<img src={LogoImg}  />
			<h1 class="main__title">Чому навчання в Курсорі - це круто?</h1>			
		</div>

	);
  }

  export default MainComponent;