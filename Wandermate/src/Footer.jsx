import React from 'react';

function Footer() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-3/4 h-64 p-2 mb-5 bg-white shadow-2xl">
          <div className=" flex justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">About Wandermate</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Destination
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Tours
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Hotels
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Explore</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Flights
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Car Rentals
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Activities
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Deals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Trip Advisor Sites</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li className="group">
                  <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-black font-bold text-center">
            © 2024 WanderMate LLC All Rights Reserved
          </p>

        </div>
      </div>
    </>
  );
}

export default Footer;
