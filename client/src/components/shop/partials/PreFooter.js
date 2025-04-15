import React from 'react'
import logo from '../../assets/logo.png';
import './style.css'; 



function PreFooter() {


  return (
  <>  <div className="mx-auto w-full flex flex-wrap justify-center gap-6 text-center mb-6">  
  <img src={logo} alt="Logo" className="w-1/3 sm:w-1/3 flex flex-col items-center p-4 rounded-lg md:w-1/3 lg:w-1/5 " />
</div>
{/* After Logo Quick Links Section */}
<div class="w-full bg-gray-900 text-white py-8 px-4 md:px-12 lg:px-24">
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div class="footer-block">
      <h2 class="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h2>
      <ul class="space-y-2">
        <li>
          <a href="/policies/refund-policy" class="quickLinks text-gray-300 hover:text-yellow transition duration-300 ease-in-out">
            Return Policy
          </a>
        </li>
        <li>
          <a href="/policies/privacy-policy" class="quickLinks text-gray-300 hover:text-white transition duration-300 ease-in-out">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/policies/shipping-policy" class="quickLinks text-gray-300 hover:text-white transition duration-300 ease-in-out">
            Shipping Policy
          </a>
        </li>
        <li>
          <a href="/policies/terms-and-conditions" class="quickLinks text-gray-300 hover:text-white transition duration-300 ease-in-out">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="/contact-us" class="quickLinks text-gray-300 hover:text-white transition duration-300 ease-in-out">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>


</>
    )
}

export default PreFooter