

import {Link} from 'react-router-dom'
function Home() {
  return (
  < >
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid ">
    <Link to="/" class="navbar-brand ">Books</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
          <Link to="/" class="nav-link ">Home</Link>
        </li>
        <li class="nav-item">
          <a href="/review" class="nav-link ">Products</a>
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link ">About</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact Us</Link>

        </li>
       
        <li class="nav-item">
        <Link to="/signup" class="nav-link ">Signup</Link>
        </li>
       
      
      </ul>
      
    </div>
  </div>
</nav>





 
 
</>

  )
}

export default Home