'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FAF7F1] min-h-screen p-6 md:p-12 text-gray-800">
      <div className="mb-10">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/450ce2f6-bc20-432a-9e9e-4a48a995b92b/logo-transparent-png.png?format=1500w"
          alt="Logo"
          width={250}
          height={100}
          className="w-56 md:w-84"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-16 md:items-start">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-serif text-gray-200">Privacy Policy</h1>
          <div>
            <h2 className="text-lg font-semibold mb-5 font-serif">Contact Us</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              If you have any questions or concerns about this privacy policy, please contact me at:
            </p>
            <a
              href="mailto:jennifer@drjenniferhahm.com"
              className="text-blue-600 hover:underline block mt-1"
            >
              jennifer@drjenniferhahm.com
            </a>
          </div>
        </div>

        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-lg font-bold mb-1 leading-relaxed">For Website Visitors</h2>
            <p className="text-gray-600 font-serif">
              This website is hosted by Squarespace. Squarespace collects personal data when you visit this website, including:
            </p>
            <ul className="list-disc list-inside mt-2 font-serif text-gray-600">
              <li>Information about your browser, network and device</li>
              <li>Web pages you visited prior to coming to this website</li>
              <li>Your IP address</li>
            </ul>
            <p className="mt-2 text-gray-600 font-serif">
              Squarespace needs the data to run this website, and to protect and improve its platform and services. Squarespace analyzes the data in a de-personalized form.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-1 font-serif">Cookies</h2>
            <p className="text-gray-600 font-serif">
              This website uses cookies and similar technologies, which are small files or pieces of text that download to a device when a visitor accesses a website or app.
              For information about viewing the cookies dropped on your device, visit <span className="italic">The cookies Squarespace uses</span>.
            </p>
            <p className="mt-2 text-gray-600 font-serif">
              These functional and required cookies are always used, which allow Squarespace, our hosting platform, to securely serve this website to you.
            </p>
            <p className="mt-2 text-gray-600 font-serif">
              These analytics and performance cookies are used on this site, as described below, only when you acknowledge our cookie banner.
              We use analytics cookies to view site traffic, activity, and other data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-1 font-serif">Fonts</h2>
            <p className="text-gray-600 font-serif">
              This website uses font files from Google Fonts and Adobe Fonts. To properly display this site to you, servers where the font files are stored may receive personal information about you, including:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 font-serif">
              <li>Information about your browser, network, or device</li>
              <li>Your IP address</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-[#FAF7F1] text-gray-800 text-center py-12 px-4 mt-12">
        <div className="space-y-4 max-w-4xl mx-auto">
          <p className="text-xl font-semibold text-gray-500">Jennifer Hahm, Ph.D., Licensed Psychologist</p>
          <p>
            <a href="mailto:jennifer@drjenniferhahm.com" className="text-blue-600 hover:underline">
              jennifer@drjenniferhahm.com
            </a>
            <br />
            <a href="tel:+12489398150" className="text-blue-600 hover:underline">Phone: (248) 939-8150</a> |{" "}
            <a href="tel:+12489398190" className="text-blue-600 hover:underline">Fax: (248) 939-8190</a>
          </p>
          <p className="text-lg text-gray-500 font-serif">28175 Haggerty Rd, Novi, MI 48377</p>
          <div className="space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/good-faith-estimate" className="text-blue-600 hover:underline">Good Faith Estimate</Link>
            <Link href="/client-portal" className="text-blue-600 hover:underline">Client Portal</Link>
          </div>
          <p className="text-xl text-gray-500 font-serif mt-4">
            © 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
