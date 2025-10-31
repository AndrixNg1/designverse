import { useState } from "react";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
        w-[92%] md:w-[85%] lg:w-[75%]
      "
    >
      <motion.div
        whileHover={{ scale: 1.01, backdropFilter: "blur(28px)" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="
          backdrop-blur-2xl bg-white/60 
          hover:bg-white/70 
          border border-white/30 
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          rounded-3xl 
          px-6 py-4 md:px-12 md:py-5
          flex justify-between items-center 
          transition-all duration-300
        "
      >
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src="/images/icons/show.png" alt="ShowcaseX Logo" className="h-9 w-9" />
          <span className="text-2xl font-semibold text-gray-900">
            ShowcaseX
          </span>
        </a>

        {/* Menu Desktop centré */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
          <a
            href="/explore"
            className="text-gray-800 hover:text-blue-600 transition font-medium tracking-wide"
          >
            Explorer
          </a>
          <a
            href="/blog"
            className="text-gray-800 hover:text-blue-600 transition font-medium tracking-wide"
          >
            Blog
          </a>

          {/* Menu À propos */}
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600 font-medium transition tracking-wide"
            >
              À propos
              {aboutOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="
                    absolute mt-4 bg-white/90 backdrop-blur-xl 
                    shadow-xl rounded-2xl py-3 w-48 
                    border border-white/40
                  "
                >
                  <a
                    href="/about"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition"
                  >
                    À propos de nous
                  </a>
                  <a
                    href="/privacy"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition"
                  >
                    Confidentialité
                  </a>
                  <a
                    href="/contact"
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition"
                  >
                    Contact
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bouton "Commencer" (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="/get-started"
            className="
              relative inline-flex items-center justify-center
              px-5 py-2.5 font-semibold text-white
              bg-gradient-to-r from-blue-600 to-blue-500
              rounded-full shadow-md
              transition-all duration-300 ease-out
              hover:from-blue-500 hover:to-blue-400
              hover:shadow-lg hover:shadow-blue-200/50
              focus:outline-none focus:ring-2 focus:ring-blue-300
            "
          >
            Commencer
          </a>
        </div>

        {/* Bouton mobile menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-3 rounded-xl hover:bg-white/50 transition"
        >
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </motion.div>

      {/* Menu Mobile suspendu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden mt-4 bg-white/70 backdrop-blur-2xl 
              border border-white/30 rounded-3xl shadow-xl overflow-hidden
            "
          >
            <a
              href="/explore"
              className="block px-6 py-3 text-gray-800 hover:bg-white/60 transition"
            >
              Explorer
            </a>
            <a
              href="/blog"
              className="block px-6 py-3 text-gray-800 hover:bg-white/60 transition"
            >
              Blog
            </a>

            {/* Sous-menu About */}
            <div className="border-t border-white/40">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full text-left flex justify-between items-center px-6 py-3 text-gray-800 hover:bg-white/60 transition"
              >
                À propos
                {aboutOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 pb-3"
                  >
                    <a
                      href="/about"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-500"
                    >
                      À propos de nous
                    </a>
                    <a
                      href="/privacy"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-500"
                    >
                      Confidentialité
                    </a>
                    <a
                      href="/contact"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-500"
                    >
                      Contact
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bouton "Commencer" sur mobile */}
            <div className="border-t border-white/40 mt-2">
              <a
                href="/get-started"
                className="
                  block m-3 text-center px-5 py-2.5 font-semibold text-white
                  bg-gradient-to-r from-blue-600 to-blue-500
                  rounded-full shadow-md
                  transition-all duration-300 ease-out
                  hover:from-blue-500 hover:to-blue-400
                "
              >
                Commencer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
