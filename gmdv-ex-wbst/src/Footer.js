import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends Component {
	render(){
		return(
			<div className="bg-dark p-3">
				<ul className="nav justify-content-center">
					<li className="nav-item">
							<a className="nav-link active" href="#">Github/Swolv-Lith</a>
					</li>
					<li className="nav-item">
							<a className="nav-link" href="#">LinkedIn/MNhemetz</a>
					</li>
					<li className="nav-item">
							<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Stay Home</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default Footer