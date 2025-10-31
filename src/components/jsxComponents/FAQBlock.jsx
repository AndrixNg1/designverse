import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Settings,
  LifeBuoy,
} from "lucide-react"; // icons modernes

const categories = [
  {
    id: 1,
    icon: <Rocket className="w-6 h-6 text-orange-600" />,
    title: "Premiers pas",
    description: "Apprenez à utiliser ShowcaseX dès vos premières minutes.",
    questions: [
      {
        q: "Comment créer mon premier projet ?",
        a: "Accédez à votre tableau de bord et cliquez sur « Nouveau projet ». Vous pourrez y importer vos fichiers et commencer à créer en quelques secondes.",
      },
      {
        q: "Puis-je importer mes visuels existants ?",
        a: "Oui. ShowcaseX prend en charge Figma, Sketch, PSD et PNG. Les imports sont automatiques et sans perte de qualité.",
      },
      {
        q: "Comment publier mon projet en ligne ?",
        a: "Depuis votre espace projet, cliquez sur « Publier ». Votre création obtiendra instantanément un lien partageable et une page dédiée.",
      },
      {
        q: "Puis-je collaborer avec mon équipe ?",
        a: "Absolument. Invitez vos collaborateurs via l’onglet « Membres » pour coéditer, commenter et valider vos créations en temps réel.",
      },
    ],
  },
  {
    id: 2,
    icon: <Settings className="w-6 h-6 text-orange-600" />,
    title: "Paramètres & Configuration",
    description: "Personnalisez ShowcaseX selon vos besoins et votre flux de travail.",
    questions: [
      {
        q: "Comment modifier mon profil et mon avatar ?",
        a: "Rendez-vous dans « Mon compte » puis cliquez sur « Modifier le profil » pour ajuster vos informations personnelles et votre image.",
      },
      {
        q: "Puis-je changer le thème de l’interface ?",
        a: "Oui. Accédez à « Apparence » et choisissez entre le mode clair, sombre ou automatique selon vos préférences système.",
      },
      {
        q: "Comment connecter mes réseaux sociaux ?",
        a: "Vous pouvez lier LinkedIn, Instagram et Behance depuis « Intégrations » pour synchroniser vos publications.",
      },
      {
        q: "Puis-je activer les notifications intelligentes ?",
        a: "Oui. Activez les alertes personnalisées (projets publiés, commentaires, statistiques) depuis les paramètres de notification.",
      },
    ],
  },
  {
    id: 3,
    icon: <LifeBuoy className="w-6 h-6 text-orange-600" />,
    title: "Support & Assistance",
    description: "Trouvez rapidement des solutions ou contactez notre équipe support.",
    questions: [
      {
        q: "Comment contacter le support technique ?",
        a: "Cliquez sur le bouton « Aide » dans le menu principal ou soumettez une demande via le centre d’assistance intégré.",
      },
      {
        q: "Quels sont les délais moyens de réponse ?",
        a: "Le support répond en moins de 24h ouvrées, avec une priorité pour les comptes Premium et Entreprise.",
      },
      {
        q: "Comment signaler un bug ou une anomalie ?",
        a: "Dans « Aide > Signaler un problème », décrivez votre souci. Les rapports détaillés sont traités en priorité.",
      },
      {
        q: "Le plan Premium inclut-il un support prioritaire ?",
        a: "Oui. Les membres Premium bénéficient d’un canal dédié, d’un suivi personnalisé et d’un temps de réponse réduit.",
      },
    ],
  },
];

export default function FAQBlock() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* --- Liste des catégories --- */}
      <div className="flex flex-col space-y-5">
        {categories.map((cat) => {
          const isActive = activeCategory.id === cat.id;
          return (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-start p-6 rounded-2xl border-2 cursor-pointer backdrop-blur-sm transition-all shadow-sm ${
                isActive
                  ? "border-orange-600 bg-orange-50/60 shadow-md"
                  : "border-gray-200 bg-white/80 hover:border-orange-300 hover:shadow-lg hover:bg-white/90"
              }`}
            >
              <div className="p-3 bg-orange-100 rounded-xl mr-4 flex items-center justify-center">
                {cat.icon}
              </div>
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    isActive ? "text-orange-400" : "text-gray-900"
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-snug">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* --- Bloc FAQ dynamique --- */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="space-y-4"
          >
            {activeCategory.questions.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl p-5 bg-white/80 hover:bg-white/90 hover:border-orange-400 transition-all shadow-sm"
              >
                <summary className="flex justify-between items-center cursor-pointer text-gray-900 font-medium text-lg">
                  {faq.q}
                  <span className="text-xl text-orange-500 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 pl-1 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
