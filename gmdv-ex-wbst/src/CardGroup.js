import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class CardGroup extends Component {
	render(){
		return(
			<div className="container mt-5">
				<div className="card-columns">
						<div className="card">
								<img src="https://picsum.photos/id/365/367/267" className="card-img-top" alt="..."/>
								<div className="card-body">
										<h5 className="card-title">Bloqueio Criativo</h5>
										<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								</div>
						</div>
						<div className="card p-3">
								<blockquote className="blockquote mb-0 card-body">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
										<footer className="blockquote-footer">
												<small className="text-muted">
														Someone famous in <cite title="Source Title">Shaolin</cite>
												</small>
										</footer>
								</blockquote>
						</div>
						<div className="card">
								<img src="https://picsum.photos/id/366/367/267" className="card-img-top" alt="..."/>
								<div className="card-body">
										<h5 className="card-title">Problemas de Oragnização?</h5>
										<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
										<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
								</div>
						</div>
						<div className="card bg-primary text-white text-center p-3">
								<blockquote className="blockquote mb-0">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
										<footer className="blockquote-footer text-white">
												<small>
														Someone famous in <cite title="Source Title">Mantis Style</cite>
												</small>
										</footer>
								</blockquote>
						</div>
						<div className="card text-center">
								<div className="card-body">
										<h5 className="card-title">Como manter a mente limpa no Home Office</h5>
										<p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
										<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
								</div>
						</div>
						<div className="card">
								<img src="https://picsum.photos/id/367/367/267" className="card-img-top" alt="Só uma imagem"/>
						</div>
						<div className="card p-3 text-right">
								<blockquote className="blockquote mb-0">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
										<footer className="blockquote-footer">
												<small className="text-muted">
														Someone famous in <cite title="Source Title">Jackie Chan</cite>
												</small>
										</footer>
								</blockquote>
						</div>
						<div className="card">
								<div className="card-body">
										<h5 className="card-title">Conflitos de linguagem</h5>
										<p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
										<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
								</div>
						</div>
				</div>
			</div>
		)
	}
}

export default CardGroup