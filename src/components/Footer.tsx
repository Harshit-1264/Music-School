import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-6 text-gray-400">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400">
            New Delhi, India
            <br />
            Delhi 10001
          </p>
          <p className="text-gray-400 mt-2">
            Email:{" "}
            <a href="mailto:info@musicschool.com" className="hover:underline">
              info@musicschool.com
            </a>
          </p>
          <p className="text-gray-400 mt-1">Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-ts pt-8">
        {" "}
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
