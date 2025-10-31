import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-white/60 backdrop-blur-2xl border-t border-white/40 rounded-t-3xl shadow-[0_-4px_30px_rgba(0,0,0,0.05)] px-8 py-12 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
        
        {/* 🧩 Logo + description */}
        <div className="flex flex-col space-y-3">
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/images/icons/show.png"
              alt="ShowcaseX Logo"
              className="h-10 w-10"
            />
            <span className="text-2xl font-semibold text-gray-900">
              ShowcaseX
            </span>
          </a>
          <p className="text-gray-700 max-w-xs leading-relaxed">
            ShowcaseX aide les designers et créateurs à <br />
            <span className="text-blue-600 font-medium">
              partager leur créativité
            </span>{" "}
            et à inspirer le monde.
          </p>
        </div>

        {/* 🔗 Liens rapides */}
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col space-y-2">
            <h4 className="text-gray-900 font-semibold mb-1">Découvrir</h4>
            <a href="/explore" className="text-gray-700 hover:text-blue-600 transition">
              Explorer
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition">
              À propos
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-gray-900 font-semibold mb-1">Contact</h4>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Nous contacter
            </a>
            <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition">
              Confidentialité
            </a>
          </div>
        </div>

        {/* 🌐 Réseaux + CTA */}
        <div className="flex flex-col space-y-4 items-start md:items-end">
          <div className="flex space-x-4 text-gray-700 text-lg">
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaTiktok />
            </a>
          </div>

          <a
            href="/get-started"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition shadow-sm"
          >
            Commencer
          </a>
        </div>
      </div>

      {/* 📜 Bas de page */}
      <div className="mt-12 border-t border-white/40 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} ShowcaseX. Tous droits réservés.
      </div>
    </footer>
  );
}
