import './App.css'
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-sage-700 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-sage-900">
            <img src={logo} alt="" width={100}/>
          </div>
          <div className="flex gap-8 text-sage-900 font-semibold">
            <a href="#services" className="hover:text-sage-700 transition hover:underline">Services</a>
            <a href="#about" className="hover:text-sage-700 transition hover:underline">About</a>
            <a href="#contact" className="hover:text-sage-700 transition hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sage-50 to-sage-100 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center place-items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6 leading-tight drop-shadow-lg">
            Quality Exteriors for Your Home
          </h1>
          <p className="text-xl text-sage-800 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            At Prairie Select Exteriors, we bring warmth and beauty to your home's exterior. 
            From roofing to siding, we deliver exceptional craftsmanship you can trust.
          </p>
          <button className="bg-sage-700 hover:bg-sage-800 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg hover:shadow-xl text-lg">
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">Our Services</h2>
          <p className="text-center text-sage-800 mb-16 max-w-2xl mx-auto text-lg font-medium">
            We offer a comprehensive range of exterior services to protect and beautify your home.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-sage-50 rounded-lg p-8 hover:shadow-lg transition border-l-4 border-sage-600">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-3">Roofing</h3>
              <p className="text-sage-800 leading-relaxed font-medium">
                Durable roofing solutions that protect your home from the elements while enhancing curb appeal.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-sage-50 rounded-lg p-8 hover:shadow-lg transition border-l-4 border-sage-600">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🪟</span>
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-3">Siding</h3>
              <p className="text-sage-800 leading-relaxed font-medium">
                Premium siding that combines beauty with weather resistance. Available in multiple styles and colors.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-sage-50 rounded-lg p-8 hover:shadow-lg transition border-l-4 border-sage-600">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🚪</span>
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-3">Windows & Doors</h3>
              <p className="text-sage-800 leading-relaxed font-medium">
                Energy-efficient windows and doors that improve comfort and lower utility costs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Service Card 4 */}
            <div className="bg-sage-50 rounded-lg p-8 hover:shadow-lg transition border-l-4 border-sage-600">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-3">Exterior Painting</h3>
              <p className="text-sage-800 leading-relaxed font-medium">
                Professional exterior painting services that refresh and protect your home's appearance.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-sage-50 rounded-lg p-8 hover:shadow-lg transition border-l-4 border-sage-600">
              <div className="w-12 h-12 bg-sage-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-3">Gutters & Drainage</h3>
              <p className="text-sage-800 leading-relaxed font-medium">
                Complete gutter solutions to protect your foundation and landscaping from water damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-sage-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-sage-600 rounded-lg h-90 flex items-center justify-center shadow-lg">
              <span className="text-6xl">🏡</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Prairie Select</h2>
              <p className="text-sage-800 mb-6 leading-relaxed font-medium text-lg p-4">
                With over 15 years of experience serving the prairie communities, we've built our reputation on quality craftsmanship and exceptional customer service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 font-bold text-xl">✓</span>
                  <span className="text-sage-900 font-semibold">Licensed and insured professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 font-bold text-xl">✓</span>
                  <span className="text-sage-900 font-semibold">Guaranteed workmanship and materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 font-bold text-xl">✓</span>
                  <span className="text-sage-900 font-semibold">Free estimates and consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 font-bold text-xl">✓</span>
                  <span className="text-sage-900 font-semibold">Locally owned and operated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6 text-center place-items-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-sage-800 mb-8 max-w-2xl mx-auto font-medium p-4">
            Get in touch with us today for a free consultation and estimate. We look forward to hearing from you.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-sage-700 hover:bg-sage-800 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg hover:shadow-xl text-lg">
              Request a Quote
            </button>
            <a href="tel:1-555-0100" className="text-sage-700 hover:text-sage-800 font-bold text-xl border-2 border-sage-700 px-6 py-3 rounded-lg hover:bg-sage-50 transition">
              (555) 010-0100
            </a>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md border-2 border-sage-700">
            <p className="text-sage-900 mb-2 font-semibold text-lg">📧 hello@prairieselect.com</p>
            <p className="text-sage-900 font-semibold text-lg">📍 Prairie, SK | Service area: 200+ km radius</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Prairie Select Exteriors</h3>
              <p className="text-sm text-sage-200 font-medium">Quality exterior solutions for prairie homes.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-sage-200">
                <li><a href="#services" className="hover:text-white transition font-medium">Services</a></li>
                <li><a href="#about" className="hover:text-white transition font-medium">About</a></li>
                <li><a href="#contact" className="hover:text-white transition font-medium">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Hours</h4>
              <p className="text-sm text-sage-200 font-medium">Mon - Fri: 8am - 5pm</p>
              <p className="text-sm text-sage-200 font-medium">Sat - Sun: By appointment</p>
            </div>
          </div>
          <div className="border-t border-sage-700 pt-8 text-center text-sm text-sage-300">
            <p className="font-medium">&copy; 2026 Prairie Select Exteriors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
