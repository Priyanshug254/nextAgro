export default function PrivacyPolicyPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-center mb-6 text-green-600">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Your privacy is our priority. At <span className="font-semibold">NextAgro</span>, 
            we are committed to protecting your data and ensuring a secure experience on our platform.
          </p>
  
          <div className="space-y-6 text-gray-700 text-lg">
            <h2 className="text-2xl font-semibold text-green-500">Data Collection</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect only the essential information such as name, contact details, and rental preferences.</li>
              <li>All personal data is collected with your consent and stored securely.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold text-green-500">Usage of Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your data is used to facilitate equipment rentals and improve our services.</li>
              <li>We do not share your personal information with third parties without your permission, unless required by law.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold text-green-500">Data Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We use encryption and secure protocols to protect your data from unauthorized access.</li>
              <li>Our platform undergoes regular security audits to identify and fix vulnerabilities.</li>
            </ul>
  
            <h2 className="text-2xl font-semibold text-green-500">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have the right to access, modify, or delete your personal data at any time.</li>
              <li>If you have any concerns regarding your data, contact us at <a href="mailto:privacy@farmerconnect.com" className="text-blue-500">privacy@NextAgro.com</a>.</li>
            </ul>
          </div>
  
          <div className="mt-8 text-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded transition"
              onClick={() => alert('Thank you for reading our Privacy Policy!')}
            >
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    );
  }
  