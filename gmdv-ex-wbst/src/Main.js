import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Main extends Component {
	render() {
		return(
			<div className="carousel-item">
			<img src="head" alt="Careca Head"/>
			<div className="carousel-caption d-none d-md-block">
					<h5>Confira nossos exemplos</h5>
					<p>Efeitos e personagens feitos sob medida!!</p>
			</div>
			</div>					
		)
	}
}
export default Main