export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aastha Neurotherapy & All Joint Related Treatment Center</h3>
            <p className="text-gray-300 mb-4">Expert orthopedic and neurotherapy treatments by Dr. A-HAQUE in Ranchi</p>
            <div className="text-gray-300">
              <p className="mb-2">📞 Phone: 9431338221</p>
              <p className="mb-2">📧 Email: drahaque.in@gmail.com</p>
              <p>📍 Ranchi, Jharkhand</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="text-gray-300 space-y-2">
              <li>Neurotherapy</li>
              <li>Hot & Vacuum Cupping</li>
              <li>Agni Karma</li>
              <li>Katti Basti</li>
              <li>Steam & Oil Massage</li>
              <li>Joint Pain Treatment</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Specializations</h4>
            <ul className="text-gray-300 space-y-2">
              <li>AVN (Avascular Necrosis)</li>
              <li>Spine Disorders</li>
              <li>Knee Joint Problems</li>
              <li>Neurological Conditions</li>
              <li>Chronic Pain Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Aastha Neurotherapy & All Joint Realted Trestment Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
