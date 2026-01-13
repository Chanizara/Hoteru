import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Navbar />
      
      {/* Main Content - with proper padding top to account for fixed navbar */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-center text-slate-900 mb-4">
            Welcome to HOTERU
          </h1>
          <p className="text-xl text-center text-slate-600 mb-12">
            Experience Luxury & Comfort
          </p>
          
          {/* Sample content sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Luxury Rooms</h3>
              <p className="text-slate-600">Experience comfort in our beautifully designed rooms with premium amenities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">World-Class Service</h3>
              <p className="text-slate-600">Our dedicated staff is available 24/7 to ensure your perfect stay.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">Premium Facilities</h3>
              <p className="text-slate-600">Enjoy our spa, fitness center, pool, and fine dining restaurants.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
