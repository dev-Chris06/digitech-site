(function () {
  "use strict";

  var STORAGE_KEY = "digitech-lang";

  var dictionary = {
    fr: {
      "meta.homeTitle":
        "DIGITECH – Transformez vos ambitions en réalités numériques",
      "meta.homeDescription":
        "DIGITECH, agence spécialisée dans la digitalisation des entreprises.",
      "meta.teamTitle": "DIGITECH – Transformez vos ambitions en réalités numériques",
      "meta.legalTitle": "Mentions légales - DIGITECH",
      "meta.legalDescription": "Mentions légales du site DIGITECH.",
      "meta.privacyTitle": "Politique de confidentialité - DIGITECH",
      "meta.privacyDescription":
        "Politique de confidentialité du site DIGITECH.",
      "meta.notFoundTitle": "Page introuvable - DIGITECH",
      "meta.notFoundDescription":
        "La page demandée est introuvable sur le site DIGITECH.",
      "aria.home": "DIGITECH - Accueil",
      "aria.mainNav": "Navigation principale",
      "aria.menu": "Menu",
      "aria.backTop": "Retour en haut",
      "aria.keyFigures": "Chiffres clés",
      "alt.logo": "Logo DIGITECH",
      "alt.digitech": "Capture d'écran de la page d'accueil DIGITECH",
      "nav.services": "Services",
      "nav.method": "Méthode",
      "nav.work": "Réalisations",
      "nav.team": "Équipe",
      "nav.contact": "Contact",
      "nav.footerMethod": "Notre méthode",
      "cta.quote": "Demander un devis",
      "cta.start": "Démarrer un projet",
      "cta.work": "Voir nos réalisations",
      "cta.appointment": "Prenons rendez-vous",
      "cta.home": "Retour à l'accueil",
      "cta.services": "Voir nos services",
      "hero.badge": "Agence de Digitalisation",
      "hero.title":
        'Transformez vos<br /><span class="hero__title--accent">ambitions</span> en<br />réalités numériques',
      "hero.subtitle":
        "DIGITECH accompagne les PME et entrepreneurs dans leur transformation digitale : sites web, applications, marketing, automatisation et formation.",
      "stats.first": "Premiers",
      "stats.projectsCurrent": "projets en cours",
      "stats.techTracks": "filières techniques",
      "stats.expertises": "Expertises",
      "stats.complementary": "complémentaires",
      "stats.support": "Support",
      "stats.supportAvailable": "Support disponible",
      "stats.clientCommitment": "Engagement client",
      "visual.growth": "Croissance digitale",
      "visual.onTime": "Projet livré à temps",
      "visual.personalized": "Accompagnement personnalisé",
      "services.tag": "Ce que nous faisons",
      "services.title": "Nos Services",
      "services.subtitle":
        "Des solutions digitales complètes pour accélérer la croissance de votre entreprise.",
      "service.web.title": "Création de sites web",
      "service.web.desc":
        "Sites vitrines, e-commerce et portails sur mesure, rapides, accessibles et optimisés pour le SEO.",
      "service.web.item1": "✓ Site vitrine ou e-commerce",
      "service.web.item2": "✓ Design responsive (mobile/desktop)",
      "service.web.item3": "✓ Optimisation SEO de base",
      "service.app.title": "Applications sur mesure",
      "service.app.desc":
        "Développement d'applications web et mobiles adaptées à vos processus métier et à vos utilisateurs.",
      "service.app.item1": "✓ Application web ou mobile",
      "service.app.item2": "✓ Intégration à vos outils existants",
      "service.app.item3": "✓ Tests et maintenance",
      "service.marketing.title": "Marketing digital & SEO",
      "service.marketing.desc":
        "Stratégie digitale, référencement naturel, campagnes publicitaires et gestion des réseaux sociaux.",
      "service.marketing.item1": "✓ Audit SEO",
      "service.marketing.item2": "✓ Gestion des réseaux sociaux",
      "service.marketing.item3": "✓ Campagnes publicitaires ciblées",
      "service.automation.title": "Automatisation",
      "service.automation.desc":
        "Automatisation des tâches répétitives, intégrations API, workflows intelligents et gains de productivité mesurables.",
      "service.automation.item1": "✓ Automatisation de tâches répétitives",
      "service.automation.item2": "✓ Intégration d'API",
      "service.automation.item3": "✓ Reporting de gains de productivité",
      "service.brand.title": "Identité de marque",
      "service.brand.desc":
        "Logo, charte graphique, brandbook et supports visuels pour une image cohérente et mémorable.",
      "service.brand.item1": "✓ Logo et charte graphique",
      "service.brand.item2": "✓ Brandbook",
      "service.brand.item3": "✓ Supports visuels (cartes, flyers...)",
      "service.training.title": "Formation",
      "service.training.desc":
        "Formations personnalisées pour maîtriser les outils digitaux, les CMS, la productivité et l'IA appliquée.",
      "service.training.item1": "✓ Formation aux outils digitaux",
      "service.training.item2": "✓ Prise en main de CMS",
      "service.training.item3": "✓ Initiation à l'IA appliquée",
      "service.more": "En savoir plus →",
      "method.tag": "Notre approche",
      "method.title": "Une méthode éprouvée en 5 étapes",
      "method.subtitle":
        "Chaque projet suit un processus structuré pour garantir qualité, délais et satisfaction client.",
      "method.analysis.title": "Analyse",
      "method.analysis.desc":
        "Audit de votre situation actuelle, identification des besoins et définition des objectifs.",
      "method.strategy.title": "Stratégie",
      "method.strategy.desc":
        "Élaboration d'une feuille de route digitale sur mesure adaptée à votre secteur.",
      "method.design.title": "Conception",
      "method.design.desc":
        "Design UX/UI, maquettes et prototypes validés avec vous avant le développement.",
      "method.dev.title": "Développement",
      "method.dev.desc":
        "Intégration technique rigoureuse, tests multi-appareils et optimisation des performances.",
      "method.follow.title": "Suivi",
      "method.follow.desc":
        "Accompagnement post-lancement, maintenance proactive et évolutions continues.",
      "work.tag": "Notre portfolio",
      "work.title": "Nos Réalisations",
      "work.subtitle":
        "Des projets concrets qui reflètent notre expertise et notre engagement qualité.",
      "work.digitech.title": "Le site que vous consultez",
      "work.digitech.desc":
        "Site vitrine responsive réalisé pour DIGITECH, avec formulaire de contact fonctionnel, traduction FR/EN, optimisation SEO de base et déploiement sur Netlify.",
      "final.title": "Prêt à digitaliser votre entreprise ?",
      "final.subtitle":
        "Parlons de votre projet dès aujourd'hui. Premier échange gratuit et sans engagement.",
      "contact.tag": "Parlons-en",
      "contact.title": "Contactez-nous",
      "contact.subtitle":
        "Remplissez le formulaire ou contactez-nous directement. Nous répondons sous 24h.",
      "contact.address": "Adresse",
      "contact.phone": "Téléphone",
      "form.subject": "Nouveau message - Site DIGITECH",
      "form.firstName": "Prénom *",
      "form.firstNamePlaceholder": "Prénoms",
      "form.lastName": "Nom *",
      "form.lastNamePlaceholder": "NOM",
      "form.email": "Email professionnel *",
      "form.emailPlaceholder": "mon@entreprise.com",
      "form.company": "Entreprise",
      "form.companyPlaceholder": "Mon Entreprise SAS",
      "form.service": "Service souhaité",
      "form.serviceDefault": "Sélectionner un service…",
      "form.serviceWebOption": "Création de site web",
      "form.serviceAppOption": "Application sur mesure",
      "form.message": "Votre message *",
      "form.messagePlaceholder": "Décrivez votre projet en quelques mots…",
      "form.submit": "Envoyer ma demande",
      "form.sending": "Envoi...",
      "form.consent":
        'En soumettant ce formulaire, vous acceptez notre <a href="politique-confidentialite.html" data-i18n-key="footer.privacy">politique de confidentialité</a>.',
      "form.requiredFirst": "Le prénom est requis.",
      "form.requiredLast": "Le nom est requis.",
      "form.requiredMessage": "Le message est requis.",
      "form.requiredDefault": "Ce champ est requis.",
      "form.invalidEmail": "Veuillez entrer un email valide.",
      "form.success":
        "Message envoyé avec succès, nous vous répondrons rapidement.",
      "form.error":
        "Une erreur est survenue pendant l’envoi. Veuillez réessayer ou nous écrire directement par email.",
      "team.tag": "Notre équipe",
      "team.title": "L'équipe derrière DIGITECH",
      "team.subtitle":
        "Une équipe soudée qui réunit stratégie, créativité et exécution pour transformer chaque ambition digitale en résultat concret.",
      "team.role1": "Directeur d'agence et Technique",
      "team.desc1":
        "Coordonne la vision technique de DIGITECH et veille à la qualité des solutions livrées.",
      "team.role2": "Responsable communication et identité visuelle",
      "team.desc2":
        "Structure la communication de l'agence et accompagne les projets d'identité visuelle.",
      "team.role3":
        "Ingénieur Réseau et Sécurité & Responsable Administratif et Financier",
      "team.desc3":
        "Apporte son expertise réseau et sécurité pour concevoir des environnements fiables.",
      "team.ctaTitle": "Envie de travailler avec nous ?",
      "team.ctaSubtitle":
        "Parlons de votre projet et voyons comment l'équipe DIGITECH peut vous accompagner.",
      "footer.tagline": "Transformez vos ambitions en réalités numériques.",
      "footer.desc":
        "Agence spécialisée dans la digitalisation des entreprises. Nous accompagnons PME et entrepreneurs dans leur transformation numérique.",
      "footer.navigation": "Navigation",
      "footer.contact": "Contact",
      "footer.mapTitle": "Carte DIGITECH",
      "footer.openMap": "Ouvrir sur Google Maps",
      "footer.rights": "© 2025 DIGITECH. Tous droits réservés.",
      "footer.legal": "Mentions légales",
      "footer.privacy": "Politique de confidentialité",
      "legal.back": "Retour à l'accueil",
      "legal.tag": "Informations légales",
      "legal.title": "Mentions légales",
      "legal.subtitle":
        "Informations relatives à l'édition, l'hébergement et l'utilisation du site DIGITECH.",
      "legal.editorTitle": "Éditeur du site",
      "legal.editorIntro":
        "Le présent site est édité par DIGITECH, agence spécialisée dans la digitalisation des entreprises.",
      "legal.name": "Nom :",
      "legal.address": "Adresse :",
      "legal.rccm": "RCCM :",
      "legal.ifu": "IFU :",
      "legal.email": "Email :",
      "legal.phone": "Téléphone :",
      "legal.pending": "[à immatriculer]",
      "legal.hostTitle": "Hébergement",
      "legal.hostIntro": "Le site est hébergé par Netlify.",
      "legal.hostAddress":
        "Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, États-Unis.",
      "legal.ipTitle": "Propriété intellectuelle",
      "legal.ipText":
        "Les textes, images, logos, éléments graphiques, icônes et contenus présents sur ce site sont la propriété de DIGITECH ou sont utilisés avec autorisation. Toute reproduction, modification, diffusion ou exploitation non autorisée est interdite.",
      "legal.liabilityTitle": "Responsabilité",
      "legal.liabilityText1":
        "DIGITECH s'efforce de fournir des informations exactes et à jour. Toutefois, le site peut contenir des erreurs ou omissions. DIGITECH ne peut être tenu responsable d'une indisponibilité temporaire du site, d'une erreur technique ou de l'utilisation faite des informations publiées.",
      "legal.liabilityText2":
        "Les liens externes éventuellement présents sur le site mènent vers des services tiers. DIGITECH ne contrôle pas ces sites et ne peut être tenu responsable de leur contenu.",
      "privacy.tag": "Données personnelles",
      "privacy.title": "Politique de confidentialité",
      "privacy.subtitle":
        "Cette page explique quelles données sont collectées via le site DIGITECH et comment elles sont utilisées.",
      "privacy.dataTitle": "Données collectées",
      "privacy.dataIntro":
        "Lorsque vous utilisez le formulaire de contact, les informations suivantes peuvent être collectées :",
      "privacy.firstName": "Prénom",
      "privacy.lastName": "Nom",
      "privacy.email": "Adresse email",
      "privacy.company": "Entreprise",
      "privacy.service": "Service demandé",
      "privacy.message": "Message envoyé",
      "privacy.purposeTitle": "Finalité de la collecte",
      "privacy.purposeText":
        "Ces données sont utilisées uniquement pour recevoir votre demande, comprendre votre besoin et vous répondre dans le cadre d'un échange commercial ou informatif.",
      "privacy.formspreeTitle": "Transmission via Formspree",
      "privacy.formspreeText":
        "Le formulaire de contact utilise Formspree, un service tiers permettant de transmettre les messages envoyés depuis le site vers l'adresse email de DIGITECH. Les données saisies dans le formulaire sont donc transmises à Formspree pour assurer cet envoi.",
      "privacy.noAccountTitle": "Absence de compte, commande et paiement",
      "privacy.noAccountText":
        "Le site DIGITECH est un site vitrine. Il ne propose pas de paiement en ligne, de commande directe, de compte utilisateur, ni d'espace client.",
      "privacy.retentionTitle": "Conservation et accès",
      "privacy.retentionText":
        "Les messages reçus sont conservés le temps nécessaire au traitement des demandes et au suivi des échanges avec les personnes ayant contacté DIGITECH.",
      "privacy.deleteTitle": "Modification ou suppression des données",
      "privacy.deleteText":
        'Vous pouvez demander la modification ou la suppression de vos données en écrivant à : <a href="mailto:digitechagency0@gmail.com">digitechagency0@gmail.com</a>.',
      "404.tag": "Page introuvable",
      "404.message": "Cette page n'existe pas ou a été déplacée",
      "404.subtitle": "Pas de panique, revenons à l'essentiel."
    },
    en: {
      "meta.homeTitle": "DIGITECH - Turn your ambitions into digital realities",
      "meta.homeDescription":
        "DIGITECH, an agency specialized in business digitalization.",
      "meta.teamTitle": "DIGITECH - Turn your ambitions into digital realities",
      "meta.legalTitle": "Legal notice - DIGITECH",
      "meta.legalDescription": "Legal notice for the DIGITECH website.",
      "meta.privacyTitle": "Privacy policy - DIGITECH",
      "meta.privacyDescription": "Privacy policy for the DIGITECH website.",
      "meta.notFoundTitle": "Page not found - DIGITECH",
      "meta.notFoundDescription":
        "The requested page could not be found on the DIGITECH website.",
      "aria.home": "DIGITECH - Home",
      "aria.mainNav": "Main navigation",
      "aria.menu": "Menu",
      "aria.backTop": "Back to top",
      "aria.keyFigures": "Key figures",
      "alt.logo": "DIGITECH logo",
      "alt.digitech": "Screenshot of the DIGITECH homepage",
      "nav.services": "Services",
      "nav.method": "Method",
      "nav.work": "Work",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "nav.footerMethod": "Our method",
      "cta.quote": "Request a quote",
      "cta.start": "Start a project",
      "cta.work": "View our work",
      "cta.appointment": "Book a call",
      "cta.home": "Back to home",
      "cta.services": "View our services",
      "hero.badge": "Digitalization Agency",
      "hero.title":
        'Turn your<br /><span class="hero__title--accent">ambitions</span> into<br />digital realities',
      "hero.subtitle":
        "DIGITECH helps SMEs and entrepreneurs with digital transformation: websites, applications, marketing, automation and training.",
      "stats.first": "First",
      "stats.projectsCurrent": "projects in progress",
      "stats.techTracks": "technical tracks",
      "stats.expertises": "Expertise",
      "stats.complementary": "areas combined",
      "stats.support": "Support",
      "stats.supportAvailable": "Support available",
      "stats.clientCommitment": "Client commitment",
      "visual.growth": "Digital growth",
      "visual.onTime": "Project delivered on time",
      "visual.personalized": "Personalized support",
      "services.tag": "What we do",
      "services.title": "Our Services",
      "services.subtitle":
        "Complete digital solutions to accelerate your business growth.",
      "service.web.title": "Website creation",
      "service.web.desc":
        "Showcase websites, e-commerce stores and custom portals that are fast, accessible and SEO-ready.",
      "service.web.item1": "✓ Showcase or e-commerce website",
      "service.web.item2": "✓ Responsive design (mobile/desktop)",
      "service.web.item3": "✓ Basic SEO optimization",
      "service.app.title": "Custom applications",
      "service.app.desc":
        "Web and mobile application development tailored to your business processes and users.",
      "service.app.item1": "✓ Web or mobile application",
      "service.app.item2": "✓ Integration with existing tools",
      "service.app.item3": "✓ Testing and maintenance",
      "service.marketing.title": "Digital marketing & SEO",
      "service.marketing.desc":
        "Digital strategy, organic search, advertising campaigns and social media management.",
      "service.marketing.item1": "✓ SEO audit",
      "service.marketing.item2": "✓ Social media management",
      "service.marketing.item3": "✓ Targeted advertising campaigns",
      "service.automation.title": "Automation",
      "service.automation.desc":
        "Automation of repetitive tasks, API integrations, smart workflows and measurable productivity gains.",
      "service.automation.item1": "✓ Repetitive task automation",
      "service.automation.item2": "✓ API integration",
      "service.automation.item3": "✓ Productivity gains reporting",
      "service.brand.title": "Brand identity",
      "service.brand.desc":
        "Logo, graphic guidelines, brandbook and visual materials for a consistent and memorable image.",
      "service.brand.item1": "✓ Logo and graphic guidelines",
      "service.brand.item2": "✓ Brandbook",
      "service.brand.item3": "✓ Visual materials (cards, flyers...)",
      "service.training.title": "Training",
      "service.training.desc":
        "Personalized training to master digital tools, CMS platforms, productivity and applied AI.",
      "service.training.item1": "✓ Digital tools training",
      "service.training.item2": "✓ CMS onboarding",
      "service.training.item3": "✓ Introduction to applied AI",
      "service.more": "Learn more →",
      "method.tag": "Our approach",
      "method.title": "A proven 5-step method",
      "method.subtitle":
        "Every project follows a structured process to ensure quality, timelines and client satisfaction.",
      "method.analysis.title": "Analysis",
      "method.analysis.desc":
        "Audit of your current situation, identification of needs and definition of goals.",
      "method.strategy.title": "Strategy",
      "method.strategy.desc":
        "Creation of a custom digital roadmap tailored to your sector.",
      "method.design.title": "Design",
      "method.design.desc":
        "UX/UI design, mockups and prototypes validated with you before development.",
      "method.dev.title": "Development",
      "method.dev.desc":
        "Rigorous technical implementation, cross-device testing and performance optimization.",
      "method.follow.title": "Follow-up",
      "method.follow.desc":
        "Post-launch support, proactive maintenance and continuous improvements.",
      "work.tag": "Our portfolio",
      "work.title": "Our Work",
      "work.subtitle":
        "Concrete projects that reflect our expertise and quality commitment.",
      "work.digitech.title": "The website you are viewing",
      "work.digitech.desc":
        "A responsive showcase website built for DIGITECH, with a working contact form, FR/EN translation, basic SEO optimization and deployment on Netlify.",
      "final.title": "Ready to digitalize your business?",
      "final.subtitle":
        "Let's talk about your project today. First consultation free and with no commitment.",
      "contact.tag": "Let's talk",
      "contact.title": "Contact us",
      "contact.subtitle":
        "Fill out the form or contact us directly. We reply within 24 hours.",
      "contact.address": "Address",
      "contact.phone": "Phone",
      "form.subject": "New message - DIGITECH website",
      "form.firstName": "First name *",
      "form.firstNamePlaceholder": "First name",
      "form.lastName": "Last name *",
      "form.lastNamePlaceholder": "LAST NAME",
      "form.email": "Professional email *",
      "form.emailPlaceholder": "me@company.com",
      "form.company": "Company",
      "form.companyPlaceholder": "My Company Inc.",
      "form.service": "Requested service",
      "form.serviceDefault": "Select a service...",
      "form.serviceWebOption": "Website creation",
      "form.serviceAppOption": "Custom application",
      "form.message": "Your message *",
      "form.messagePlaceholder": "Describe your project in a few words...",
      "form.submit": "Send my request",
      "form.sending": "Sending...",
      "form.consent":
        'By submitting this form, you accept our <a href="politique-confidentialite.html" data-i18n-key="footer.privacy">privacy policy</a>.',
      "form.requiredFirst": "First name is required.",
      "form.requiredLast": "Last name is required.",
      "form.requiredMessage": "Message is required.",
      "form.requiredDefault": "This field is required.",
      "form.invalidEmail": "Please enter a valid email address.",
      "form.success": "Message sent successfully. We will reply shortly.",
      "form.error":
        "An error occurred while sending. Please try again or email us directly.",
      "team.tag": "Our team",
      "team.title": "The team behind DIGITECH",
      "team.subtitle":
        "A close-knit team combining strategy, creativity and execution to turn every digital ambition into concrete results.",
      "team.role1": "Agency Director and Technical Lead",
      "team.desc1":
        "Coordinates DIGITECH's technical vision and ensures the quality of delivered solutions.",
      "team.role2": "Communications and Visual Identity Lead",
      "team.desc2":
        "Structures the agency's communication and supports visual identity projects.",
      "team.role3":
        "Network and Security Engineer & Administrative and Financial Lead",
      "team.desc3":
        "Brings network and security expertise to design reliable environments.",
      "team.ctaTitle": "Want to work with us?",
      "team.ctaSubtitle":
        "Let's talk about your project and see how the DIGITECH team can support you.",
      "footer.tagline": "Turn your ambitions into digital realities.",
      "footer.desc":
        "An agency specialized in business digitalization. We support SMEs and entrepreneurs in their digital transformation.",
      "footer.navigation": "Navigation",
      "footer.contact": "Contact",
      "footer.mapTitle": "DIGITECH map",
      "footer.openMap": "Open in Google Maps",
      "footer.rights": "© 2025 DIGITECH. All rights reserved.",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy policy",
      "legal.back": "Back to home",
      "legal.tag": "Legal information",
      "legal.title": "Legal notice",
      "legal.subtitle":
        "Information about the publication, hosting and use of the DIGITECH website.",
      "legal.editorTitle": "Website publisher",
      "legal.editorIntro":
        "This website is published by DIGITECH, an agency specialized in business digitalization.",
      "legal.name": "Name:",
      "legal.address": "Address:",
      "legal.rccm": "RCCM:",
      "legal.ifu": "IFU:",
      "legal.email": "Email:",
      "legal.phone": "Phone:",
      "legal.pending": "[to be registered]",
      "legal.hostTitle": "Hosting",
      "legal.hostIntro": "The website is hosted by Netlify.",
      "legal.hostAddress":
        "Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, United States.",
      "legal.ipTitle": "Intellectual property",
      "legal.ipText":
        "The texts, images, logos, graphic elements, icons and content on this website are owned by DIGITECH or used with authorization. Any unauthorized reproduction, modification, distribution or use is prohibited.",
      "legal.liabilityTitle": "Liability",
      "legal.liabilityText1":
        "DIGITECH strives to provide accurate and up-to-date information. However, the website may contain errors or omissions. DIGITECH cannot be held responsible for temporary unavailability, technical errors or the use made of the published information.",
      "legal.liabilityText2":
        "External links that may appear on the website lead to third-party services. DIGITECH does not control these websites and cannot be held responsible for their content.",
      "privacy.tag": "Personal data",
      "privacy.title": "Privacy policy",
      "privacy.subtitle":
        "This page explains what data is collected through the DIGITECH website and how it is used.",
      "privacy.dataTitle": "Data collected",
      "privacy.dataIntro":
        "When you use the contact form, the following information may be collected:",
      "privacy.firstName": "First name",
      "privacy.lastName": "Last name",
      "privacy.email": "Email address",
      "privacy.company": "Company",
      "privacy.service": "Requested service",
      "privacy.message": "Message sent",
      "privacy.purposeTitle": "Purpose of collection",
      "privacy.purposeText":
        "This data is used only to receive your request, understand your need and reply to you as part of a commercial or informational exchange.",
      "privacy.formspreeTitle": "Transmission via Formspree",
      "privacy.formspreeText":
        "The contact form uses Formspree, a third-party service that forwards messages sent from the website to DIGITECH's email address. The data entered in the form is therefore transmitted to Formspree to ensure delivery.",
      "privacy.noAccountTitle": "No account, order or payment",
      "privacy.noAccountText":
        "The DIGITECH website is a showcase website. It does not offer online payment, direct ordering, user accounts or a client area.",
      "privacy.retentionTitle": "Retention and access",
      "privacy.retentionText":
        "Messages received are kept for the time necessary to process requests and follow up with people who contacted DIGITECH.",
      "privacy.deleteTitle": "Data modification or deletion",
      "privacy.deleteText":
        'You can request modification or deletion of your data by writing to: <a href="mailto:digitechagency0@gmail.com">digitechagency0@gmail.com</a>.',
      "404.tag": "Page not found",
      "404.message": "This page does not exist or has been moved",
      "404.subtitle": "No worries, let's get back to what matters."
    }
  };

  var sharedBindings = [
    { selector: ".header__logo", key: "aria.home", attr: "aria-label" },
    { selector: ".header__logo img, .footer__logo img", key: "alt.logo", attr: "alt" },
    { selector: ".header__nav", key: "aria.mainNav", attr: "aria-label" },
    { selector: ".hamburger", key: "aria.menu", attr: "aria-label" },
    { selector: ".back-to-top", key: "aria.backTop", attr: "aria-label" },
    { selector: ".trust-banner", key: "aria.keyFigures", attr: "aria-label" },
    { selector: 'a.nav__link[href$="#services"], .footer__nav-col a[href$="#services"]', key: "nav.services" },
    { selector: 'a.nav__link[href$="#methode"]', key: "nav.method" },
    { selector: '.footer__nav-col a[href$="#methode"]', key: "nav.footerMethod" },
    { selector: 'a.nav__link[href$="#realisations"], .footer__nav-col a[href$="#realisations"]', key: "nav.work" },
    { selector: 'a.nav__link[href$="equipe.html"], a.nav__link[href="equipe.html"]', key: "nav.team" },
    { selector: 'a.nav__link[href$="#contact"]', key: "nav.contact" },
    { selector: ".header__cta, .mobile-menu__cta", key: "cta.quote" },
    { selector: ".legal-header .btn", key: "nav.contact" },
    { selector: ".footer__tagline", key: "footer.tagline" },
    { selector: ".footer__desc", key: "footer.desc" },
    { selector: ".footer__nav-title", key: "footer.navigation", firstOnly: true },
    { selector: ".footer__nav-col:nth-of-type(3) .footer__nav-title", key: "footer.contact" },
    { selector: ".footer__map iframe", key: "footer.mapTitle", attr: "title" },
    { selector: ".map-link", key: "footer.openMap" },
    { selector: ".footer__bottom p", key: "footer.rights" },
    { selector: '.footer__legal a[href$="mentions-legales.html"]', key: "footer.legal" },
    { selector: '.footer__legal a[href$="politique-confidentialite.html"]', key: "footer.privacy" }
  ];

  var homeBindings = [
    { selector: "title", key: "meta.homeTitle" },
    { selector: 'meta[name="description"]', key: "meta.homeDescription", attr: "content" },
    { selector: 'meta[property="og:title"]', key: "meta.homeTitle", attr: "content" },
    { selector: 'meta[property="og:description"]', key: "meta.homeDescription", attr: "content" },
    { selector: ".hero__badge", key: "hero.badge", textNode: true },
    { selector: ".hero__title", key: "hero.title", html: true },
    { selector: ".hero__subtitle", key: "hero.subtitle" },
    { selector: "#hero-cta-primary span", key: "cta.start" },
    { selector: ".hero__actions .btn--outline-navy", key: "cta.work" },
    { selector: ".hero__stats .hero__stat:nth-child(1) .stat__number", key: "stats.first" },
    { selector: ".hero__stats .hero__stat:nth-child(1) .stat__label", key: "stats.projectsCurrent" },
    { selector: ".hero__stats .hero__stat:nth-child(3) .stat__label", key: "stats.techTracks" },
    { selector: ".growth-card__title", key: "visual.growth" },
    { selector: ".growth-metric:nth-child(1) .growth-metric__val", key: "stats.first" },
    { selector: ".growth-metric:nth-child(1) .growth-metric__lab", key: "stats.projectsCurrent" },
    { selector: ".growth-metric:nth-child(2) .growth-metric__val", key: "stats.expertises" },
    { selector: ".growth-metric:nth-child(2) .growth-metric__lab", key: "stats.complementary" },
    { selector: ".growth-metric:nth-child(3) .growth-metric__lab", key: "stats.support" },
    { selector: ".float-badge--1", key: "visual.onTime", textNode: true },
    { selector: ".float-badge--2", key: "visual.personalized", textNode: true },
    { selector: ".trust-stat:nth-child(1) .trust-stat__number", key: "stats.first" },
    { selector: ".trust-stat:nth-child(1) .trust-stat__label", key: "stats.projectsCurrent" },
    { selector: ".trust-stat:nth-child(3) .trust-stat__label", key: "stats.complementary" },
    { selector: ".trust-stat:nth-child(5) .trust-stat__label", key: "stats.clientCommitment" },
    { selector: ".trust-stat:nth-child(7) .trust-stat__label", key: "stats.supportAvailable" },
    { selector: "#services .section__tag", key: "services.tag" },
    { selector: "#services .section__title", key: "services.title" },
    { selector: "#services .section__subtitle", key: "services.subtitle" },
    { selector: ".service-card:nth-child(1) .service-card__title", key: "service.web.title" },
    { selector: ".service-card:nth-child(1) .service-card__desc", key: "service.web.desc" },
    { selector: ".service-card:nth-child(1) li:nth-child(1)", key: "service.web.item1" },
    { selector: ".service-card:nth-child(1) li:nth-child(2)", key: "service.web.item2" },
    { selector: ".service-card:nth-child(1) li:nth-child(3)", key: "service.web.item3" },
    { selector: ".service-card:nth-child(2) .service-card__title", key: "service.app.title" },
    { selector: ".service-card:nth-child(2) .service-card__desc", key: "service.app.desc" },
    { selector: ".service-card:nth-child(2) li:nth-child(1)", key: "service.app.item1" },
    { selector: ".service-card:nth-child(2) li:nth-child(2)", key: "service.app.item2" },
    { selector: ".service-card:nth-child(2) li:nth-child(3)", key: "service.app.item3" },
    { selector: ".service-card:nth-child(3) .service-card__title", key: "service.marketing.title" },
    { selector: ".service-card:nth-child(3) .service-card__desc", key: "service.marketing.desc" },
    { selector: ".service-card:nth-child(3) li:nth-child(1)", key: "service.marketing.item1" },
    { selector: ".service-card:nth-child(3) li:nth-child(2)", key: "service.marketing.item2" },
    { selector: ".service-card:nth-child(3) li:nth-child(3)", key: "service.marketing.item3" },
    { selector: ".service-card:nth-child(4) .service-card__title", key: "service.automation.title" },
    { selector: ".service-card:nth-child(4) .service-card__desc", key: "service.automation.desc" },
    { selector: ".service-card:nth-child(4) li:nth-child(1)", key: "service.automation.item1" },
    { selector: ".service-card:nth-child(4) li:nth-child(2)", key: "service.automation.item2" },
    { selector: ".service-card:nth-child(4) li:nth-child(3)", key: "service.automation.item3" },
    { selector: ".service-card:nth-child(5) .service-card__title", key: "service.brand.title" },
    { selector: ".service-card:nth-child(5) .service-card__desc", key: "service.brand.desc" },
    { selector: ".service-card:nth-child(5) li:nth-child(1)", key: "service.brand.item1" },
    { selector: ".service-card:nth-child(5) li:nth-child(2)", key: "service.brand.item2" },
    { selector: ".service-card:nth-child(5) li:nth-child(3)", key: "service.brand.item3" },
    { selector: ".service-card:nth-child(6) .service-card__title", key: "service.training.title" },
    { selector: ".service-card:nth-child(6) .service-card__desc", key: "service.training.desc" },
    { selector: ".service-card:nth-child(6) li:nth-child(1)", key: "service.training.item1" },
    { selector: ".service-card:nth-child(6) li:nth-child(2)", key: "service.training.item2" },
    { selector: ".service-card:nth-child(6) li:nth-child(3)", key: "service.training.item3" },
    { selector: ".service-card__link", key: "service.more" },
    { selector: "#methode .section__tag", key: "method.tag" },
    { selector: "#methode .section__title", key: "method.title" },
    { selector: "#methode .section__subtitle", key: "method.subtitle" },
    { selector: ".process__step:nth-child(1) .process__title", key: "method.analysis.title" },
    { selector: ".process__step:nth-child(1) .process__desc", key: "method.analysis.desc" },
    { selector: ".process__step:nth-child(3) .process__title", key: "method.strategy.title" },
    { selector: ".process__step:nth-child(3) .process__desc", key: "method.strategy.desc" },
    { selector: ".process__step:nth-child(5) .process__title", key: "method.design.title" },
    { selector: ".process__step:nth-child(5) .process__desc", key: "method.design.desc" },
    { selector: ".process__step:nth-child(7) .process__title", key: "method.dev.title" },
    { selector: ".process__step:nth-child(7) .process__desc", key: "method.dev.desc" },
    { selector: ".process__step:nth-child(9) .process__title", key: "method.follow.title" },
    { selector: ".process__step:nth-child(9) .process__desc", key: "method.follow.desc" },
    { selector: "#realisations .section__tag", key: "work.tag" },
    { selector: "#realisations .section__title", key: "work.title" },
    { selector: "#realisations .section__subtitle", key: "work.subtitle" },
    { selector: ".portfolio-card:nth-child(1) img", key: "alt.digitech", attr: "alt" },
    { selector: ".portfolio-card:nth-child(1) .portfolio-card__title", key: "work.digitech.title" },
    { selector: ".portfolio-card:nth-child(1) .portfolio-card__desc", key: "work.digitech.desc" },
    { selector: ".cta-section__title", key: "final.title" },
    { selector: ".cta-section__subtitle", key: "final.subtitle" },
    { selector: "#cta-final", key: "cta.appointment", textNode: true },
    { selector: "#contact .section__tag", key: "contact.tag" },
    { selector: "#contact .section__title", key: "contact.title" },
    { selector: "#contact .section__subtitle", key: "contact.subtitle" },
    { selector: ".contact-info-item:nth-child(1) strong", key: "contact.address" },
    { selector: ".contact-info-item:nth-child(3) strong", key: "contact.phone" },
    { selector: 'input[name="_subject"]', key: "form.subject", attr: "value" },
    { selector: 'label[for="firstName"]', key: "form.firstName" },
    { selector: "#firstName", key: "form.firstNamePlaceholder", attr: "placeholder" },
    { selector: 'label[for="lastName"]', key: "form.lastName" },
    { selector: "#lastName", key: "form.lastNamePlaceholder", attr: "placeholder" },
    { selector: 'label[for="email"]', key: "form.email" },
    { selector: "#email", key: "form.emailPlaceholder", attr: "placeholder" },
    { selector: 'label[for="company"]', key: "form.company" },
    { selector: "#company", key: "form.companyPlaceholder", attr: "placeholder" },
    { selector: 'label[for="service"]', key: "form.service" },
    { selector: '#service option[value=""]', key: "form.serviceDefault" },
    { selector: '#service option[value="web"]', key: "form.serviceWebOption" },
    { selector: '#service option[value="app"]', key: "form.serviceAppOption" },
    { selector: '#service option[value="marketing"]', key: "service.marketing.title" },
    { selector: '#service option[value="automation"]', key: "service.automation.title" },
    { selector: '#service option[value="branding"]', key: "service.brand.title" },
    { selector: '#service option[value="formation"]', key: "service.training.title" },
    { selector: 'label[for="message"]', key: "form.message" },
    { selector: "#message", key: "form.messagePlaceholder", attr: "placeholder" },
    { selector: "#btn-text", key: "form.submit" },
    { selector: ".form-consent", key: "form.consent", html: true }
  ];

  var teamBindings = [
    { selector: "title", key: "meta.teamTitle" },
    { selector: 'meta[name="description"]', key: "meta.homeDescription", attr: "content" },
    { selector: 'meta[property="og:title"]', key: "meta.teamTitle", attr: "content" },
    { selector: 'meta[property="og:description"]', key: "meta.homeDescription", attr: "content" },
    { selector: ".team .section__tag", key: "team.tag" },
    { selector: ".team .section__title", key: "team.title" },
    { selector: ".team .section__subtitle", key: "team.subtitle" },
    { selector: ".team-card:nth-child(1) .team-card__role", key: "team.role1" },
    { selector: ".team-card:nth-child(1) .team-card__desc", key: "team.desc1" },
    { selector: ".team-card:nth-child(2) .team-card__role", key: "team.role2" },
    { selector: ".team-card:nth-child(2) .team-card__desc", key: "team.desc2" },
    { selector: ".team-card:nth-child(3) .team-card__role", key: "team.role3" },
    { selector: ".team-card:nth-child(3) .team-card__desc", key: "team.desc3" },
    { selector: ".cta-section__title", key: "team.ctaTitle" },
    { selector: ".cta-section__subtitle", key: "team.ctaSubtitle" },
    { selector: ".cta-section .btn", key: "cta.appointment", textNode: true }
  ];

  var legalBindings = [
    { selector: "title", key: "meta.legalTitle" },
    { selector: 'meta[name="description"]', key: "meta.legalDescription", attr: "content" },
    { selector: ".legal-back", key: "legal.back" },
    { selector: ".legal-page__header .section__tag", key: "legal.tag" },
    { selector: ".legal-page__header .section__title", key: "legal.title" },
    { selector: ".legal-page__header .section__subtitle", key: "legal.subtitle" },
    { selector: ".legal-content section:nth-child(1) h2", key: "legal.editorTitle" },
    { selector: ".legal-content section:nth-child(1) p", key: "legal.editorIntro" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(1) strong", key: "legal.name" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(2) strong", key: "legal.address" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(3) strong", key: "legal.rccm" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(3)", key: "legal.pending", textNode: true },
    { selector: ".legal-content section:nth-child(1) li:nth-child(4) strong", key: "legal.ifu" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(4)", key: "legal.pending", textNode: true },
    { selector: ".legal-content section:nth-child(1) li:nth-child(5) strong", key: "legal.email" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(6) strong", key: "legal.phone" },
    { selector: ".legal-content section:nth-child(2) h2", key: "legal.hostTitle" },
    { selector: ".legal-content section:nth-child(2) p:nth-of-type(1)", key: "legal.hostIntro" },
    { selector: ".legal-content section:nth-child(2) p:nth-of-type(2)", key: "legal.hostAddress" },
    { selector: ".legal-content section:nth-child(3) h2", key: "legal.ipTitle" },
    { selector: ".legal-content section:nth-child(3) p", key: "legal.ipText" },
    { selector: ".legal-content section:nth-child(4) h2", key: "legal.liabilityTitle" },
    { selector: ".legal-content section:nth-child(4) p:nth-of-type(1)", key: "legal.liabilityText1" },
    { selector: ".legal-content section:nth-child(4) p:nth-of-type(2)", key: "legal.liabilityText2" }
  ];

  var privacyBindings = [
    { selector: "title", key: "meta.privacyTitle" },
    { selector: 'meta[name="description"]', key: "meta.privacyDescription", attr: "content" },
    { selector: ".legal-back", key: "legal.back" },
    { selector: ".legal-page__header .section__tag", key: "privacy.tag" },
    { selector: ".legal-page__header .section__title", key: "privacy.title" },
    { selector: ".legal-page__header .section__subtitle", key: "privacy.subtitle" },
    { selector: ".legal-content section:nth-child(1) h2", key: "privacy.dataTitle" },
    { selector: ".legal-content section:nth-child(1) p", key: "privacy.dataIntro" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(1)", key: "privacy.firstName" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(2)", key: "privacy.lastName" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(3)", key: "privacy.email" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(4)", key: "privacy.company" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(5)", key: "privacy.service" },
    { selector: ".legal-content section:nth-child(1) li:nth-child(6)", key: "privacy.message" },
    { selector: ".legal-content section:nth-child(2) h2", key: "privacy.purposeTitle" },
    { selector: ".legal-content section:nth-child(2) p", key: "privacy.purposeText" },
    { selector: ".legal-content section:nth-child(3) h2", key: "privacy.formspreeTitle" },
    { selector: ".legal-content section:nth-child(3) p", key: "privacy.formspreeText" },
    { selector: ".legal-content section:nth-child(4) h2", key: "privacy.noAccountTitle" },
    { selector: ".legal-content section:nth-child(4) p", key: "privacy.noAccountText" },
    { selector: ".legal-content section:nth-child(5) h2", key: "privacy.retentionTitle" },
    { selector: ".legal-content section:nth-child(5) p", key: "privacy.retentionText" },
    { selector: ".legal-content section:nth-child(6) h2", key: "privacy.deleteTitle" },
    { selector: ".legal-content section:nth-child(6) p", key: "privacy.deleteText", html: true }
  ];

  var notFoundBindings = [
    { selector: "title", key: "meta.notFoundTitle" },
    { selector: 'meta[name="description"]', key: "meta.notFoundDescription", attr: "content" },
    { selector: ".not-found .section__tag", key: "404.tag" },
    { selector: ".not-found__message", key: "404.message" },
    { selector: ".not-found__subtitle", key: "404.subtitle" },
    { selector: ".not-found__actions .btn", key: "cta.home" },
    { selector: ".not-found__link", key: "cta.services" }
  ];

  function getPageBindings() {
    var path = window.location.pathname;
    if (path.indexOf("equipe") !== -1) return teamBindings;
    if (path.indexOf("mentions-legales") !== -1) return legalBindings;
    if (path.indexOf("politique-confidentialite") !== -1) return privacyBindings;
    if (path.indexOf("404") !== -1 || document.querySelector(".not-found-page")) {
      return notFoundBindings;
    }
    return homeBindings;
  }

  function bindElement(el, binding) {
    if (!el || el.hasAttribute("data-i18n-key")) return;
    el.setAttribute("data-i18n-key", binding.key);
    if (binding.attr) el.setAttribute("data-i18n-attr", binding.attr);
    if (binding.html) el.setAttribute("data-i18n-html", "true");
    if (binding.textNode) el.setAttribute("data-i18n-text-node", "true");
  }

  function bindPageTranslations() {
    sharedBindings.concat(getPageBindings()).forEach(function (binding) {
      var els = document.querySelectorAll(binding.selector);
      if (binding.firstOnly && els[0]) {
        bindElement(els[0], binding);
        return;
      }
      els.forEach(function (el) {
        bindElement(el, binding);
      });
    });
  }

  function getInitialLanguage() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
    return (navigator.language || "").toLowerCase().indexOf("fr") === 0
      ? "fr"
      : "en";
  }

  function translate(key, lang) {
    return (dictionary[lang] && dictionary[lang][key]) || dictionary.fr[key] || "";
  }

  function applyElementTranslation(el, lang) {
    var key = el.getAttribute("data-i18n-key");
    var value = translate(key, lang);
    var attr = el.getAttribute("data-i18n-attr");

    if (attr) {
      attr.split(",").forEach(function (name) {
        el.setAttribute(name.trim(), value);
      });
      return;
    }

    if (el.getAttribute("data-i18n-html") === "true") {
      el.innerHTML = value;
    } else if (el.getAttribute("data-i18n-text-node") === "true") {
      var textNode = Array.prototype.slice.call(el.childNodes).filter(function (node) {
        return node.nodeType === 3 && node.textContent.trim();
      }).pop();
      if (textNode) {
        textNode.textContent = " " + value;
      } else {
        el.appendChild(document.createTextNode(value));
      }
    } else {
      el.textContent = value;
    }
  }

  function updateLanguage(lang, persist) {
    var nextLang = lang === "fr" ? "fr" : "en";
    if (persist) localStorage.setItem(STORAGE_KEY, nextLang);
    document.documentElement.lang = nextLang;

    document.querySelectorAll("[data-i18n-key]").forEach(function (el) {
      applyElementTranslation(el, nextLang);
    });

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.textContent = nextLang.toUpperCase();
      button.setAttribute(
        "aria-label",
        nextLang === "fr" ? "Passer le site en anglais" : "Switch site to French",
      );
    });

    window.dispatchEvent(
      new CustomEvent("digitech:languagechange", { detail: { lang: nextLang } }),
    );
  }

  function initLanguageToggle() {
    var lang = getInitialLanguage();
    bindPageTranslations();

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        updateLanguage(document.documentElement.lang === "fr" ? "en" : "fr", true);
      });
    });

    updateLanguage(lang, false);
  }

  window.DigitechI18n = {
    dictionary: dictionary,
    getCurrentLanguage: function () {
      return document.documentElement.lang || getInitialLanguage();
    },
    t: function (key) {
      return translate(key, this.getCurrentLanguage());
    },
    updateLanguage: updateLanguage
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguageToggle);
  } else {
    initLanguageToggle();
  }
})();
