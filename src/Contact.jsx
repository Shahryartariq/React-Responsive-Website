import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        msg: "",
    })


  const InputEvent = (e) => {
      const {name, value} = e.target;
      setData((oldData)=>{
          return {
              ...oldData,
              [name]: value,
          }
      })
  };


  const formSubmit = (e) => {
      e.preventDefault();
      alert(`My name is ${data.name}. My Phone is ${data.phone}. My Email is ${data.email}. My Message is ${data.msg}`)
      setData(()=>{
          return {
            fullName: "",
            phone: "",
            email: "",
            msg: "",
          }
      });
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-center"> Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Full Name"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile Number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your Message here.."
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
