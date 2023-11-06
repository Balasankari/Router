import React from 'react'

function Blog() {
  return (
    <div id="blog"class="container mt-5 mb-5 ">
    <h1 className='text-center mb-2'>Blog</h1>
    <h3 className='text-center mb-5'>Most visited places</h3>
    <div class="row mx-5">
      <div class="col ">
      <div class="card" style={{width: "18rem" , height:'50%'}}>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/670/030/small/world-tourism-day-concept-free-vector.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Vist Place</h5>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
     
    </div>
  </div>
      </div>
      <div class="col">
      <div class="card" style={{width: "18rem" , height:'50%'}}>
      <img src="https://cdn.pixabay.com/photo/2017/11/16/10/42/tourist-2954034_1280.png" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Vist Place</h5>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
     
    </div>
  </div>
      </div>
     
      <div class="col">
      <div class="card" style={{width: "18rem" , height:'50%'}} >
      <img src="https://previews.123rf.com/images/sodis/sodis1803/sodis180300048/97997674-world-travel-planning-summer-vacations-airport-holiday-journey-tourism-and-vacation-theme-flat.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Visit Place</h5>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    
    </div>
  </div>
      </div>
    </div>
  </div>
  )
}

export default Blog