import React from 'react'

function PrivacyPolicy() {
  return (
<div className="bg-white text-gray-800 px-6 md:px-16 py-12 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: April 11, 2025</p>
      </header>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block col-span-1 border-r pr-4">
          <nav className="sticky top-20 space-y-4 text-sm">
            <a href="#collection" className="block hover:text-amber-600">Collection of Personal Info</a>
            <a href="#use" className="block hover:text-amber-600">Use of Data</a>
            <a href="#disclosure" className="block hover:text-amber-600">Disclosure Practices</a>
            <a href="#cookies" className="block hover:text-amber-600">Cookies & Tracking</a>
            <a href="#security" className="block hover:text-amber-600">Data Security & Retention</a>
            <a href="#rights" className="block hover:text-amber-600">User Rights</a>
            <a href="#children" className="block hover:text-amber-600">Children & International Users</a>
            <a href="#contact" className="block hover:text-amber-600">Contact Info</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-span-4 md:col-span-3 space-y-12 text-[15px] leading-relaxed">
          <section id="collection">
            <h2 className="text-2xl font-semibold mb-4">Collection of Personal Info</h2>
            <p>
              We collect personal information in the following ways:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Directly from users: including name, email, address, and payment info during checkout.</li>
              <li>Via cookies and tracking technologies: browsing behavior, device information, and preferences.</li>
              <li>From third-party services: such as analytics providers or social media platforms (if connected).</li>
            </ul>
          </section>

          <section id="use">
            <h2 className="text-2xl font-semibold mb-4">Use of Data</h2>
            <p>
              We use your personal data for:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Processing orders and delivering products</li>
              <li>Sending promotional emails and updates (with your consent)</li>
              <li>Enhancing website performance and personalizing user experience</li>
              <li>Preventing fraud and ensuring website security</li>
            </ul>
          </section>

          <section id="disclosure">
            <h2 className="text-2xl font-semibold mb-4">Disclosure Practices</h2>
            <p>
              We may share your data with:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Trusted service providers (e.g., payment processors and delivery partners)</li>
              <li>Legal authorities if required by law or in response to legal processes</li>
              <li>In case of a merger or acquisition, your information may be transferred to the new entity</li>
            </ul>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-semibold mb-4">Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Understand user preferences</li>
              <li>Improve our website and services</li>
              <li>Track the effectiveness of marketing campaigns</li>
            </ul>
            <p className="mt-2">
              You can disable cookies via your browser settings, though some features may not function properly.
            </p>
          </section>

          <section id="security">
            <h2 className="text-2xl font-semibold mb-4">Data Security & Retention</h2>
            <p>
              We implement strict security measures to protect your information from unauthorized access or misuse. Your data is retained only as long as necessary for business, legal, or compliance needs.
            </p>
          </section>

          <section id="rights">
            <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Access your personal data</li>
              <li>Request corrections or updates</li>
              <li>Delete your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-2">
              You may contact us to exercise any of these rights.
            </p>
          </section>

          <section id="children">
            <h2 className="text-2xl font-semibold mb-4">Children & International Users</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect data from children. If you are an international user, please note that your information may be transferred to and stored in countries with different data protection laws.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <p>
              If you have concerns about your privacy or want to exercise your legal rights, contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> <a href="mailto:rohailkamal@gmail.com" className="text-amber-600 hover:underline">rohailkamal@gmail.com</a><br />
            </p>
          </section>
        </main>
      </div>
    </div>

        );
      }
export default PrivacyPolicy