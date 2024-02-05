import React from "react";
import UserClass from "./UserClass";

const Contact = () => {
  return (
    <div className="font-bold test-3xl text-center">
      <h1>Contact Us:</h1>
      <form>
        <input className="border border-black p-2 m-2" type="text" placeholder="name" />
        <input className="border border-black p-2 m-2" type="text" placeholder="message" />
        <button className="border border-green-400 p-2 m-2 rounded-xl">Submit</button>
      </form>
      {/* <UserClass name={"saif"} location={"lucknow"} /> */}
    </div>
  );
};

export default Contact;
