export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-yellow-400 font-semibold text-base sm:text-lg">Christian-World College Koko</p>
        <p className="text-xs sm:text-sm mt-1 text-gray-300">Excellence in Education</p>
        <p className="text-xs sm:text-sm text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
          Mile 1 Koko Beach, Off Akwarajor school Road, Warri North LGA. Delta State
        </p>
        <p className="text-xs sm:text-sm text-gray-400 mt-2">
          &#9742; 08034802717, 08076499600
        </p>
        <div className="mt-3 text-xs sm:text-sm text-gray-400">
          <p>Montessori | Nursery | Primary | Secondary</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
