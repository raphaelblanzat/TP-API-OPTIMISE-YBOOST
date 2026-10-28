# Projet Developpement :

## Catalogue de Périphériques & Setups Hardware

- Entité principale : Matériel informatique (souris, claviers, écrans, composants).

- Auth & Gestion utilisateurs : Profils utilisateurs, création et sauvegarde de son "setup" personnalisé, avis et notes.
- Recherche & Filtres :
  - Recherche par marque, modèle ou capteur
  - Filtres par catégorie de composant, connectivité (filaire/sans-fil)
  - Caractéristiques techniques
  - Plage de prix

Axes d'optimisation API : Filtrage à facettes (calcul rapide des comptages par filtre), requêtes avec jointures indexées sur les spécifications, denormalisation pour la note moyenne


## Tâches à Réaliser :

1. API Optimisé
- Fonctionnalités :
  - Conception de l'Api pour la gestion de Péripheriques
  - Respect de la norme REST. (GET, POST, PUT, DELETE)
  - Optimisation
  de la vitesse de traitement des requêtes.
  - Fiabilité des données fournies (consistance, exactitude).
  - Gestion des utilisateurs (authentification, données utilisateur).
  - Endpoint pour la recherche et la filtration des recettes.
    - Rechercher un péripheriques par nom, composant, prix
    - Filtrer par type de péripheriques (souris, casque ,clavier) ...
    - Créer, modifier, suprimmer un péripheriques (CRUD)

2. Interface Utilisateur 
- Fonctionnalités :
  - Recherche et visualisation des péripheriques.
  - Interaction avec les péripheriques  (charactéristique, ajout aux favoris, partage).
  - Adaptation à une ou plusieurs plateformes (web, mobile, desktop).
  - Gestion des utilisateurs (connexion, inscription, personnalisation)






