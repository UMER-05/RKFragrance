import React from 'react'
import Layout from "../layout";
import PreFooter from '../partials/PreFooter';

const ShippingPolicy = () => {
  return (
    <Layout>
<div className="mt-16 bg-white text-gray-800 px-6 md:px-16 py-12 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-2">Shipping Policy</h1>
        <p className="text-sm text-gray-500">Last updated: April 11, 2025</p>
      </header>

      <main className="space-y-12 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Following are the terms and conditions that constitute our Shipping Policy. By placing an order with Fragsens, you agree to the shipping terms below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Domestic Shipping Policy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Shipment Processing Time</h3>
              <p>
                We confirm all orders via WhatsApp before proceeding with shipping (Cash on Delivery only).
              </p>
              <p className="mt-2">
                All orders are processed and delivered within <strong>2-5 business days</strong> after confirmation. Orders are not shipped or delivered on weekends or public holidays.
              </p>
              <p className="mt-2">
                If we're experiencing a high volume of orders, shipments may be delayed slightly. If there is a significant delay, we’ll notify you via email or phone.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Shipping Rates & Delivery Estimates</h3>
              <p>
                <strong>Shipping is free</strong> on all orders across Pakistan.
              </p>
              <p className="mt-2">
                Occasionally, delivery delays may occur due to unforeseen issues.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Shipment Confirmation & Order Tracking</h3>
              <p>
                After your order is shipped, you will receive a confirmation email containing tracking number(s) and delivery details.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Damages</h3>
              <p>
                Fragsens is not responsible for any damage or loss that occurs during shipping. If you receive a damaged item, please contact us immediately for assistance.
              </p>
              <p className="mt-2">
                Keep all packaging materials and the damaged item safe in case a claim needs to be filed.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Fragsens. All rights reserved.
      </footer>
    </div>
    <PreFooter/>
    </Layout>
  )
}

export default ShippingPolicy