import React from "react";

const Contact = () => {
  return (
  <div>
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Contact Us
      </h1>
    </div>
    <form className="text-center flex flex-col items-center">
      <input type="text" className="m-4 p-4 border border-amber-50 w-1/6" placeholder="Name" />
      <input type="text" className="m-4 p-4 border border-amber-50 w-1/6" placeholder="Description"/>
      <button className="m-4 p-4 border border-amber-50 bg-green-200 rounded-2xl w-1/10">Submit</button>
    </form>
  </div>
  );
};

export default Contact;
