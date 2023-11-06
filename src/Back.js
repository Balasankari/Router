import Image from './components/images/Bookshop-bro.png'
function Back() {
  return (
    <div class="container mt-5 mb-5 ">
    
    
    <h3 className='text-center '>Welcome To Our site</h3>
    <div class="row">
      <div class="col">
      <img style={{width: "450px" , height:'450px'}} src={Image} class="card-img-top" alt="..."/>
      </div>
      <div class="col mt-5 mb-5">
        <p className='mt-5 justiy-content-center mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum dolorum blanditiis rem nisi ratione quae nulla eligendi accusamus consequuntur reiciendis. Iste optio quibusdam quam recusandae eos velit eaque suscipit voluptatem!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam earum provident. Nemo repellendus dignissimos, odit culpa debitis sapiente, reprehenderit repudiandae mollitia esse porro illo earum iste dolor vitae assumenda?</p>
      </div>
    </div>
    </div>
  )
}

export default Back
