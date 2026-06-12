# Plan : Plateforme E-Learning Cameroun - "KamerAcademy"

## Objectif
Créer la plus grande plateforme e-learning complète au Cameroun permettant aux entrepreneurs camerounais de vendre facilement des formations en ligne de manière conviviale.

## Stack Technique
- React + TypeScript + Tailwind CSS + shadcn/ui
- Vite comme bundler
- Animations Framer Motion
- Design adapté au contexte camerounais (couleurs chaudes, terre d'Afrique)

## Architecture de la Plateforme

### Pages Publiques
1. **Landing Page** - Page d'accueil attractive avec hero, features, témoignages, statistiques
2. **Catalogue de Formations** - Grille de cours avec filtres et recherche
3. **Page Détail Formation** - Présentation complète d'un cours (vidéo promo, programme, formateur, avis, prix)
4. **Page Formateur** - Profil public du formateur avec ses cours
5. **Blog/Ressources** - Articles et ressources gratuites
6. **Page Tarifs** - Plans pour les formateurs
7. **Contact / À Propos**

### Espace Apprenant (Connecté)
8. **Dashboard Apprenant** - Vue d'ensemble des cours en cours, complétés, certificats
9. **Lecteur de Cours** - Lecteur vidéo avec sidebar de leçons, ressources téléchargeables, quiz
10. **Messagerie** - Communication avec les formateurs
11. **Panier & Paiement** - Checkout avec Mobile Money / OM / cartes
12. **Certificats** - Téléchargement des attestations

### Espace Formateur (Connecté)
13. **Dashboard Formateur** - Statistiques (ventes, revenus, étudiants, avis)
14. **Gestion des Cours** - CRUD cours (titre, description, prix, catégorie, image, vidéo promo)
15. **Création de Contenu** - Upload vidéos, création de sections et leçons, ressources
16. **Gestion des Quiz** - Création de questions à choix multiples
17. **Gestion des Élèves** - Liste des inscrits, progrès, messages
18. **Revenus & Paiements** - Historique des ventes, demandes de retrait (Mobile Money)
19. **Paramètres du Compte** - Profil, moyens de paiement, notifications

### Espace Admin
20. **Dashboard Admin** - KPIs globaux
21. **Gestion Utilisateurs** - Apprenants et formateurs
22. **Gestion des Cours** - Modération, mise en avant
23. **Gestion des Paiements** - Transactions, commissions, retraits
24. **Catégories & Tags** - Organisation du catalogue
25. **Paramètres de la Plateforme**

## Stages d'Exécution

### Stage 1 — Skill Loading & Design
- Charger `vibecoding-webapp-swarm` pour construire l'app React
- Charger `web-template-library` pour le template de base
- Concevoir le design system (couleurs, typographie, composants)

### Stage 2 — Structure & Layout
- Scaffold du projet React + TypeScript + Tailwind + shadcn/ui
- Mise en place du routing (React Router)
- Layout principal avec navigation responsive
- Système d'authentification (login/register)

### Stage 3 — Pages Publiques (Parallel)
- Landing Page
- Catalogue de formations
- Page détail formation
- Page formateur
- Blog, Tarifs, Contact

### Stage 4 — Espaces Connectés (Parallel)
- Espace Apprenant (dashboard, lecteur, panier, certificats)
- Espace Formateur (dashboard, gestion cours, création contenu, revenus)
- Espace Admin (dashboard, gestion utilisateurs, paiements)

### Stage 5 — Intégration & Polish
- Animations et transitions
- Responsive design final
- Données mockées réalistes (contexte camerounais)
- Déploiement

## Design Direction
- **Couleurs** : Tons chauds inspirés du Cameroun - terre cuite, vert végétal, or/sunset
- **Typographie** : Clean et moderne, lisible
- **Illustrations** : Style afro-contemporain, diversité des visages camerounais
- **Ton** : Chaleureux, encourageant, professionnel, accessible
- **Langue** : Français principal (avec support bilingue EN/FR)

## Identité Visuelle
- Nom : **KamerAcademy**
- Tagline : "Apprenez. Créez. Prospérez."
- Logo : Graduation cap + map du Cameroun stylisée
