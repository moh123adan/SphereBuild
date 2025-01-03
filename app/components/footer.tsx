export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1F2937] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} by Sphere Constructions.</p>
        </div>
      </div>
    </footer>
  );
}
