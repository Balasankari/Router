import React from 'react'

function ContactUs() {
  return (
    <div id="contact"class="container mt-3 mb-3">
    <h1 className='text-center '>Contact Us</h1>
    <h3 className='text-center '>Always be in Touch with us</h3>
    <div class="row">
    <div class="col mt-5">
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
                    <label for="your-subject" class="form-label">Your Subject</label>
                    <input type="text" class="form-control" id="your-subject" name="your-subject"/>
                  </div>
                  <div class="col-12">
                    <label for="your-message" class="form-label">Your Message</label>
                    <textarea class="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="d-grid gap-2">
                        <button  type="submit" class="mt-2 btn1 btn-dark w-100 fw-bold " >Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
      </div>
      
      
    </div>
    </div>
  )
}

export default ContactUs