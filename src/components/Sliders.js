import React from 'react'

function Sliders() {
  return (
   <>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"600px"}}src="https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844226_1280.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption mt-5 mb-5">
        <h1>Take only memories, leave only footprints</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"600px"}}src="https://cdn.pixabay.com/photo/2016/07/17/21/44/mountains-1524804_1280.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption mt-5 mb-5">
        <h1>To Travel is to Live.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
   
      <img style={{height:"600px"}}src="https://cdn.pixabay.com/photo/2020/02/06/15/59/forest-4824759_640.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption mt-5 mb-5">
      <h1>Adventures are the best way to learn</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}

export default Sliders