import React from 'react'
import securePaymentImg from '../../assets/secure-payment.png';
import longLasting from '../../assets/longLasting.png';
import fastDelivery from '../../assets/fast-delivery.png';
import support from '../../assets/support.png';




function PreFooter() {

const prefooterImages = 
[
  {src: securePaymentImg, alt: 'Secure Payment', heading: 'Secure Payment', para:'Your transactions are protected.'},
  {src: longLasting, alt: 'Long Lasting icon', heading: 'Long-Lasting Scents', para:"Enjoy up to 12-hour fragrance."},
  {src: fastDelivery, alt: 'Fast Delivery icon', heading: 'Fast Delivery', para:"Delivered within 2-5 business days."},
  {src: support, alt: '24/7 Support icon', heading: '24/7 Customer Support', para:"We're here to help anytime!"},


  
]

  return (
    <div className="mx-auto w-full flex flex-wrap justify-center gap-6 text-center mb-6">
  {prefooterImages.map((image, index) => (
    <div className="bg-gray-200 w-1/3 sm:w-1/3 flex flex-col items-center p-4 rounded-lg shadow-md md:w-1/3 lg:w-1/5 ">
      <h3 className="text-yellow-700 font-semibold">{image.heading}</h3>
      <img src={image.src} alt={image.alt} className="w-16 h-16 object-contain my-2" />
      <p className="text-gray-800 text-xs">{image.para}</p>
    </div>
  ))}
</div>


    )
}

export default PreFooter