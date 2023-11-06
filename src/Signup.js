import React from 'react'

function Signup() {
  return (
    
    <div className='container mt-5'>
        <h1 className='text-center'>Signup</h1>
         <div class="row">
    <div class="col-6 mt-5"></div>
         <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="your-name" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="your-name" name="your-name" required/>
                  </div>
                  <div class="col-md-6">
                    <label for="your-surname" class="form-label">Your Surname</label>
                    <input type="text" class="form-control" id="your-surname" name="your-surname" required/>
                  </div>
                  <div class="col-md-6">
                    <label for="your-email" class="form-label">Your Email</label>
                    <input type="email" class="form-control" id="your-email" name="your-email" required/>
                  </div>
                  <div class="col-md-6">
                    <label for="your-subject" class="form-label">Password</label>
                    <input type="text" class="form-control" id="your-subject" name="your-subject"/>
                  </div>
                  <div class="col-md-6">
                    <label for="your-subject" class="form-label">College/School</label>
                    <input type="text" class="form-control" id="your-subject" name="your-subject"/>
                  </div>
                  <div class="col-md-6">
                    <label for="your-subject" class="form-label">Phone no.</label>
                    <input type="text" class="form-control" id="your-subject" name="your-subject"/>
                  </div>
                  <div class="col-md-6">
                    <label for="your-subject" class="form-label">Country</label>
                    <input type="text" class="form-control" id="your-subject" name="your-subject"/>
                  </div>
                  <div class="col-md-6">
                    <label for="your-subject" class="form-label">State</label>
                    <input type="text" class="form-control" id="your-subject" name="your-subject"/>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="d-grid gap-2">
                        <button  type="submit" class="mt-2 btn1 btn-dark w-100 fw-bold " >Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
    </div>
    </div>
    
  )
}

export default Signup