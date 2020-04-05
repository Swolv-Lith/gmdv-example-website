import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Carousel extends Component {
  
	render() {
		return(
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/id/20/1400/500" className="d-block w-auto" alt="..."/>
            <div className="carousel-caption d-none d-inline">
              <h5 className="text-dark">Original Games</h5>
              <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button className='btn btn-dark'>Find the Gallery</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/0/1400/500" className="d-block w-auto" alt="..."/>
            <div className="carousel-caption d-none d-inline">
              <h5>Mod Gallery</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className='btn btn-dark'>Find the Gallery</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/180/1400/500" className="d-block w-auto" alt="..."/>
            <div className="carousel-caption d-none d-inline">
              <h5>Fan Made Gallery</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <button className='btn btn-dark'>Find the Gallery</button>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
		)
  }
}

export default Carousel