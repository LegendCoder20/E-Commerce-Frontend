import React, {useState} from "react";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [query, setQuery] = useState("");

  const hName = (e) => {
    setName(e.target.value);
  };

  const hEmail = (e) => {
    setEmail(e.target.value);
  };

  const hPhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };

  const hQuery = (e) => {
    setQuery(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    let data = {name, email, phoneno, query};
    console.log(data);

    emailjs
      .send("aryan_ma", "template_54fhpde", data, "oIzrqXv28iYKjToUc")
      .then(() => {
        toast.success("Form Submitted");
        setName("");
        setEmail("");
        setPhoneNo("");
        setQuery("");
      })
      .catch((err) => {
        toast.error("Failed to submit form. Please try again later.");
      });
  };

  return (
    <React.Fragment>
      <div className="text-center font-bold text-4xl mt-4">
        <h1>Contact Me</h1>
      </div>
      <div className="container mx-auto mt-4 p-4 lg:w-96">
        <form className="space-y-4 " onSubmit={submitData}>
          <div className="flex flex-col">
            <label htmlFor="validationDefault01" className="font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded"
              id="validationDefault01"
              placeholder="Enter your Name"
              value={name}
              onChange={hName}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="validationDefaultUsername"
              className="font-medium mb-1"
            >
              E-mail
            </label>
            <div className="flex">
              <span
                className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l"
                id="inputGroupPrepend2"
              >
                @
              </span>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-r w-full"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Enter your E-mail"
                value={email}
                onChange={hEmail}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="validationDefault03" className="font-medium mb-1">
              Phone Number
            </label>
            <div className="flex">
              <span
                className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l"
                id="inputGroupPrepend2"
              >
                +91
              </span>
              <input
                type="number"
                className="border border-gray-300 p-2 rounded-r w-full"
                id="validationDefault03"
                placeholder="Enter your Phone-no"
                value={phoneno}
                onChange={hPhoneNo}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="font-medium mb-1"
            >
              Query
            </label>
            <textarea
              className="border border-gray-300 p-2 rounded resize-none"
              id="exampleFormControlTextarea1"
              placeholder="Enter your Query"
              rows="3"
              value={query}
              onChange={hQuery}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ContactMe;
