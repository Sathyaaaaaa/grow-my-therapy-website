export default function GoodFaithEstimate() {
  return (
    <div className="bg-[#FAF7F1] min-h-screen px-6 py-10 md:px-20 md:py-16 text-gray-800">
      <div className="mb-10">
        <img
          src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/450ce2f6-bc20-432a-9e9e-4a48a995b92b/logo-transparent-png.png?format=1500w"
          alt="Logo"
          className="w-60 md:w-66 mb-44"
        />
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-6 text-[18px] leading-relaxed">
        <h1 className="text-6xl font-sans font-serif mb-6 text-gray-600 leading-relaxed">Good Faith Estimate</h1>

        <p className="text-gray-500 font-sans font-serif leading-relaxed">
          Effective January 1, 2022, a ruling went into effect called the <strong>“No Surprises Act,”</strong> which requires mental health practitioners to provide a “Good Faith Estimate” (GFE) about <u>out-of-network care to any patient who is uninsured or who is insured but does not plan to use their insurance benefits to pay for health care items and/ or services.</u>
        </p>

        <p className="text-gray-500 font-sans font-serif leading-relaxed">
          The Good Faith Estimate works to show the cost of items and services that are reasonably expected for your mental health care needs for an item or service. The estimate is based on information known at the time the estimate was created. The Good Faith Estimate does not include any unknown or unexpected costs that may arise during treatment.
        </p>

        <p className="text-gray-400 font-sans font-serif leading-relaxed mb-36">
          You are entitled to receive this “Good Faith Estimate” of what the charges could be for psychotherapy services provided to you. While it is not possible for a psychotherapist to know, in advance, how many psychotherapy sessions may be necessary or appropriate for a given person upon the initiation of psychotherapy, an estimate of the cost of services will be provided. Your total cost of services will depend upon the number of psychotherapy sessions you attend, your individual circumstances, and the type and amount of services that are provided to you. This estimate is not a contract and does not obligate you to obtain any services.
        </p>

        <p className="pt-4 text-gray-600 font-sans font-serif text-3xl">Jennifer Hahm, Ph.D., Licensed Psychologist</p>
        <p className="text-gray-600 font-sans font-serif">
          <a href="mailto:jennifer@drjenniferhahm.com" className="text-gray-600 font-sans font-serif text-blue-600 underline">jennifer@drjenniferhahm.com</a><br />
          Phone: (248) 939-8150 | Fax: (248) 939-8190
        </p>
        <p className="text-gray-600 font-sans font-serif">28175 Haggerty Rd, Novi, MI 48377</p>
      </div>

      <footer className="mt-16 pt-12 border-t border-gray-300 text-center text-gray-700 text-sm space-y-2">
        <div className="space-x-4">
          <a href="/" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Home</a>
          <a href="/privacy-policy" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Privacy Policy</a>
          <a href="/good-faith-estimate" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Good Faith Estimate</a>
          <a href="/client-portal" className="text-blue-600 hover:underline text-gray-600 font-sans font-serif">Client Portal</a>
        </div>
        <p className="mt-2">© 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
