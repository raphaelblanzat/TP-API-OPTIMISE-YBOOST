import type { productType } from "../types/productType";

export const baseProductList: productType[] = [
    {
        id: 1,
        name: "Logitech G502 HERO",
        brand: "Logitech",
        slug: "logitech-g502-hero",
        categorie: "Souris",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 49.99,
        info: `### Capteur et performances

- Capteur optique HERO 25K, jusqu'à 25 600 DPI
- Vitesse maximale : plus de 400 IPS ; accélération maximale : 40 G
- Fréquence de rapport USB : jusqu'à 1 000 Hz

### Commandes et conception

- 11 boutons programmables et molette débrayable avec défilement rapide
- Éclairage RGB LIGHTSYNC personnalisable
- Poids ajustable avec cinq poids de 3,6 g
- Connexion filaire USB-A`,
        description: `- Souris gaming filaire avec capteur HERO 25K
- 11 boutons programmables et poids ajustable
- Molette débrayable et éclairage RGB LIGHTSYNC

Couleur : Noir`,
    },
    {
        id: 2,
        name: "Logitech G203 LIGHTSYNC",
        brand: "Logitech",
        slug: "logitech-g203-lightsync",
        categorie: "Souris",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 29.99,
        info: `### Capteur et performances

- Capteur optique gaming réglable de 200 à 8 000 DPI
- Fréquence de rapport USB : jusqu'à 1 000 Hz

### Commandes et conception

- Six boutons programmables
- Éclairage RGB LIGHTSYNC avec effets personnalisables
- Forme compacte ambidextre
- Connexion filaire USB-A`,
        description: `- Souris gaming filaire légère et compacte
- Capteur réglable jusqu'à 8 000 DPI
- Six boutons et éclairage RGB LIGHTSYNC

Couleur : Noir`,
    },
    {
        id: 3,
        name: "Razer DeathAdder V3",
        brand: "Razer",
        slug: "razer-deathadder-v3",
        categorie: "Souris",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 69.99,
        info: `### Capteur et performances

- Capteur optique Focus Pro 30K
- Résolution maximale : 30 000 DPI
- Vitesse maximale : 750 IPS ; accélération maximale : 70 G

### Commandes et conception

- Six boutons programmables
- Forme ergonomique pour droitiers
- Poids d'environ 59 g
- Connexion filaire USB-C`,
        description: `- Souris gaming filaire ultralégère
- Capteur optique jusqu'à 30 000 DPI
- Forme ergonomique pour droitiers

Couleur : Noir`,
    },
    {
        id: 4,
        name: "Logitech MX Master 3S",
        brand: "Logitech",
        slug: "logitech-mx-master-3s",
        categorie: "Souris",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 99.99,
        info: `### Capteur et performances

- Capteur optique Darkfield réglable de 200 à 8 000 DPI
- Fonctionne sur la plupart des surfaces, y compris le verre

### Commandes et connexions

- Connexion Bluetooth Low Energy ou récepteur Logi Bolt USB
- Connexion possible à trois appareils et bascule Easy-Switch
- Molette MagSpeed avec défilement électromagnétique
- Clics silencieux et sept boutons

### Batterie et dimensions

- Batterie rechargeable USB-C, annoncée jusqu'à 70 jours d'autonomie
- Poids : environ 141 g`,
        description: `- Souris sans fil pensée pour la productivité
- Défilement MagSpeed et clics silencieux
- Connexion Bluetooth ou récepteur USB Logi Bolt
- Recharge USB-C

Couleur : Graphite`,
    },
    {
        id: 5,
        name: "SteelSeries Rival 3",
        brand: "SteelSeries",
        slug: "steelseries-rival-3",
        categorie: "Souris",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 34.99,
        info: `### Capteur et performances

- Capteur optique TrueMove Core
- Résolution réglable jusqu'à 8 500 CPI
- Fréquence de rapport USB : jusqu'à 1 000 Hz

### Commandes et conception

- Six boutons programmables
- Éclairage RGB à trois zones
- Patins en PTFE et câble USB
- Connexion filaire USB-A`,
        description: `- Souris gaming filaire avec capteur TrueMove Core
- Sensibilité réglable jusqu'à 8 500 CPI
- Six boutons et éclairage RGB à trois zones

Couleur : Noir`,
    },
    {
        id: 6,
        name: "Logitech G915 X",
        brand: "Logitech",
        slug: "logitech-g915-x",
        categorie: "Claviers",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 229.99,
        info: `### Touches et performances

- Clavier mécanique sans pavé numérique
- Switches mécaniques GL à profil bas
- Touches PBT à double injection
- Fréquence de rapport pouvant atteindre 1 000 Hz

### Connexions et commandes

- Connexion LIGHTSPEED 2,4 GHz, Bluetooth ou USB-C filaire
- Éclairage RGB LIGHTSYNC par touche
- Commandes multimédia et molette de volume
- Compatible avec le logiciel Logitech G HUB`,
        description: `- Clavier mécanique gaming sans fil à profil bas
- Connexion LIGHTSPEED, Bluetooth ou USB-C
- Éclairage RGB touche par touche
- Touches PBT et commandes multimédia`,
    },
    {
        id: 7,
        name: "Logitech G213 Prodigy",
        brand: "Logitech",
        slug: "logitech-g213-prodigy",
        categorie: "Claviers",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 59.99,
        info: `### Touches et performances

- Clavier à membrane avec pavé numérique
- Touches à réponse rapide et résistance aux éclaboussures

### Connexions et commandes

- Connexion filaire USB-A
- Éclairage RGB LIGHTSYNC réparti en cinq zones
- Touches dédiées aux commandes multimédia
- Personnalisation avec Logitech G HUB`,
        description: `- Clavier gaming filaire avec pavé numérique
- Éclairage RGB sur cinq zones
- Touches multimédia dédiées
- Conception résistante aux éclaboussures`,
    },
    {
        id: 8,
        name: "Logitech MX Keys S",
        brand: "Logitech",
        slug: "logitech-mx-keys-s",
        categorie: "Claviers",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 119.99,
        info: `### Touches et conception

- Clavier sans fil à touches concaves et profil bas
- Rétroéclairage intelligent activé par la proximité des mains
- Pavé numérique intégré

### Connexions et batterie

- Connexion Bluetooth Low Energy ou récepteur Logi Bolt USB
- Jumelage avec trois appareils et bascule Easy-Switch
- Batterie rechargeable USB-C
- Compatible avec Windows, macOS, Linux, iPadOS et ChromeOS`,
        description: `- Clavier sans fil conçu pour le travail
- Touches rétroéclairées et pavé numérique
- Bluetooth ou récepteur USB Logi Bolt
- Connexion à trois appareils`,
    },
    {
        id: 9,
        name: "Keychron K2",
        brand: "Keychron",
        slug: "keychron-k2",
        categorie: "Claviers",
        type: "Gaming",
        compatibilitys: ["PC", "Mac", "Mobile"],
        prix: 89.99,
        info: `### Touches et conception

- Clavier mécanique compact au format 75 %
- 84 touches et choix de switches mécaniques selon la version
- Sélecteur de disposition Windows/Android ou macOS/iOS

### Connexions et batterie

- Bluetooth pour jusqu'à trois appareils ou connexion USB-C filaire
- Batterie intégrée rechargeable
- Compatible avec les ordinateurs et appareils mobiles Bluetooth`,
        description: `- Clavier mécanique compact au format 75 %
- Connexion Bluetooth ou USB-C
- Peut être jumelé avec trois appareils
- Disposition commutable entre Windows et macOS`,
    },
    {
        id: 10,
        name: "Corsair K70 RGB PRO",
        brand: "Corsair",
        slug: "corsair-k70-rgb-pro",
        categorie: "Claviers",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 169.99,
        info: `### Touches et performances

- Clavier mécanique avec pavé numérique
- Switches Cherry MX, selon la version choisie
- Technologie AXON avec fréquence de rapport pouvant atteindre 8 000 Hz

### Connexions et commandes

- Connexion filaire USB-A
- Éclairage RGB individuel par touche
- Touches multimédia dédiées et molette de volume
- Personnalisation avec le logiciel Corsair iCUE`,
        description: `- Clavier mécanique gaming filaire
- Éclairage RGB touche par touche
- Fréquence de rapport jusqu'à 8 000 Hz
- Pavé numérique et commandes multimédia`,
    },
    {
        id: 11,
        name: "LG UltraGear 27GR83Q-B",
        brand: "LG",
        slug: "lg-ultragear-27gr83q-b",
        categorie: "Ecrans",
        type: "Gaming",
        compatibilitys: ["PC", "PS5", "Xbox"],
        prix: 449.99,
        info: `### Affichage

- Dalle IPS de 27 pouces au format 16:9
- Résolution QHD : 2 560 x 1 440 pixels
- Fréquence maximale : 240 Hz
- Temps de réponse annoncé : 1 ms GtG

### Connectique et fonctionnalités

- Deux entrées HDMI 2.1 et une entrée DisplayPort 1.4
- Compatible NVIDIA G-SYNC et AMD FreeSync Premium
- Haut-parleurs intégrés`,
        description: `- Écran gaming QHD de 27 pouces
- Dalle IPS avec fréquence jusqu'à 240 Hz
- Compatible HDMI 2.1, G-SYNC et FreeSync
- Convient aux PC et consoles compatibles`,
    },
    {
        id: 12,
        name: "Samsung Odyssey G5 27 pouces",
        brand: "Samsung",
        slug: "samsung-odyssey-g5-27",
        categorie: "Ecrans",
        type: "Gaming",
        compatibilitys: ["PC", "PS5", "Xbox"],
        prix: 299.99,
        info: `### Affichage

- Dalle VA incurvée de 27 pouces, courbure 1000R
- Résolution QHD : 2 560 x 1 440 pixels
- Fréquence maximale : 144 Hz selon la version
- Temps de réponse annoncé : 1 ms MPRT

### Connectique et fonctionnalités

- Entrées HDMI et DisplayPort
- AMD FreeSync Premium
- Mode faible latence automatique selon les sources compatibles`,
        description: `- Écran gaming QHD incurvé de 27 pouces
- Dalle VA et fréquence jusqu'à 144 Hz
- AMD FreeSync Premium
- Connexion HDMI ou DisplayPort`,
    },
    {
        id: 13,
        name: "Dell P2422H",
        brand: "Dell",
        slug: "dell-p2422h",
        categorie: "Ecrans",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 189.99,
        info: `### Affichage

- Dalle IPS de 23,8 pouces au format 16:9
- Résolution Full HD : 1 920 x 1 080 pixels
- Fréquence de rafraîchissement : 60 Hz
- Traitement antireflet

### Connectique et ergonomie

- Entrées HDMI, DisplayPort et VGA
- Hub USB intégré avec quatre ports USB-A
- Pied réglable en hauteur, inclinaison, pivot et rotation`,
        description: `- Écran de bureau Full HD de 23,8 pouces
- Dalle IPS avec traitement antireflet
- Pied ergonomique réglable
- Hub USB et entrées HDMI, DisplayPort et VGA`,
    },
    {
        id: 14,
        name: "ASUS TUF Gaming VG249Q1A",
        brand: "ASUS",
        slug: "asus-tuf-vg249q1a",
        categorie: "Ecrans",
        type: "Gaming",
        compatibilitys: ["PC", "PS5", "Xbox"],
        prix: 179.99,
        info: `### Affichage

- Dalle IPS de 23,8 pouces au format 16:9
- Résolution Full HD : 1 920 x 1 080 pixels
- Fréquence maximale : 165 Hz
- Temps de réponse annoncé : 1 ms MPRT

### Connectique et fonctionnalités

- Deux entrées HDMI 1.4 et une entrée DisplayPort 1.2
- Compatible AMD FreeSync Premium
- Haut-parleurs stéréo intégrés`,
        description: `- Écran gaming Full HD de 23,8 pouces
- Dalle IPS jusqu'à 165 Hz
- Compatible AMD FreeSync Premium
- Deux entrées HDMI et DisplayPort`,
    },
    {
        id: 15,
        name: "BenQ GW2790",
        brand: "BenQ",
        slug: "benq-gw2790",
        categorie: "Ecrans",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 159.99,
        info: `### Affichage

- Dalle IPS de 27 pouces au format 16:9
- Résolution Full HD : 1 920 x 1 080 pixels
- Fréquence de rafraîchissement : 100 Hz
- Traitement antireflet et modes de réduction de lumière bleue

### Connectique et ergonomie

- Entrées HDMI et DisplayPort
- Haut-parleurs intégrés
- Inclinaison réglable et fixation VESA`,
        description: `- Écran de bureau Full HD de 27 pouces
- Dalle IPS avec fréquence de 100 Hz
- Modes de confort visuel
- Haut-parleurs et connectiques HDMI et DisplayPort`,
    },
    {
        id: 16,
        name: "HyperX Cloud III Wireless",
        brand: "HyperX",
        slug: "hyperx-cloud-iii-wireless",
        categorie: "Casques",
        type: "Gaming",
        compatibilitys: ["PC", "PS5", "PS4"],
        prix: 169.99,
        info: `### Spécifications du casque

- Transducteurs dynamiques de 53 mm
- Réponse en fréquence : 10 Hz à 21 kHz
- Impédance : 64 ohms
- Casque circum-auriculaire fermé

### Microphone et connexions

- Microphone amovible à électret avec réduction de bruit
- Connexion sans fil 2,4 GHz par adaptateur USB
- Commandes de volume et de coupure du microphone sur le casque

### Batterie et confort

- Autonomie annoncée jusqu'à 120 heures, variable selon l'utilisation
- Coussinets en mousse à mémoire de forme`,
        description: `- Jusqu'à 120 heures d'autonomie annoncée
- Transducteurs de 53 mm et son spatial DTS Headphone:X
- Microphone amovible avec réduction de bruit
- Compatibilité : PC, PS5 et PS4 avec adaptateur USB

Couleur : Noir`,
    },
    {
        id: 17,
        name: "Logitech G PRO X 2 LIGHTSPEED",
        brand: "Logitech",
        slug: "logitech-g-pro-x-2-lightspeed",
        categorie: "Casques",
        type: "Gaming",
        compatibilitys: ["PC", "PS5", "PS4", "Mobile"],
        prix: 249.99,
        info: `### Spécifications du casque

- Transducteurs audio en graphène de 50 mm
- Réponse en fréquence : 20 Hz à 20 kHz
- Casque circum-auriculaire fermé

### Microphone et connexions

- Microphone amovible de 6 mm
- Connexion sans fil LIGHTSPEED 2,4 GHz, Bluetooth ou filaire 3,5 mm
- Récepteur USB-A fourni ; compatibilité selon le mode de connexion

### Batterie et conception

- Autonomie annoncée jusqu'à 50 heures
- Portée sans fil annoncée jusqu'à 30 m dans des conditions optimales`,
        description: `- Transducteurs en graphène de 50 mm
- Connexion LIGHTSPEED, Bluetooth ou filaire 3,5 mm
- Microphone amovible et autonomie annoncée de 50 heures
- Compatible PC, PlayStation et appareils mobiles selon la connexion`,
    },
    {
        id: 18,
        name: "Logitech G435 LIGHTSPEED",
        brand: "Logitech",
        slug: "logitech-g435-lightspeed",
        categorie: "Casques",
        type: "Gaming",
        compatibilitys: ["PC", "PS5", "PS4", "Mobile"],
        prix: 69.99,
        info: `### Spécifications du casque

- Transducteurs de 40 mm
- Réponse en fréquence : 20 Hz à 20 kHz
- Conception circum-auriculaire légère

### Microphones et connexions

- Deux microphones à formation de faisceau intégrés
- Connexion sans fil LIGHTSPEED 2,4 GHz par récepteur USB
- Bluetooth pour les appareils compatibles

### Batterie et poids

- Autonomie annoncée jusqu'à 18 heures
- Poids : environ 165 g
- Le fonctionnement dépend de la prise en charge du mode sans fil par l'appareil`,
        description: `- Casque sans fil léger d'environ 165 g
- Connexion LIGHTSPEED 2,4 GHz ou Bluetooth
- Deux microphones intégrés
- Autonomie annoncée jusqu'à 18 heures`,
    },
    {
        id: 19,
        name: "JBL Quantum 100",
        brand: "JBL",
        slug: "jbl-quantum-100",
        categorie: "Casques",
        type: "Gaming",
        compatibilitys: ["PC", "Mac", "Xbox", "PS5", "PS4", "Mobile"],
        prix: 39.99,
        info: `### Spécifications du casque

- Transducteurs dynamiques de 40 mm
- Réponse en fréquence : 20 Hz à 20 kHz
- Casque circum-auriculaire fermé

### Microphone et connexions

- Microphone directionnel amovible
- Connexion analogique mini-jack 3,5 mm
- Câble intégré d'environ 1,2 m
- La compatibilité micro dépend de la prise casque de l'appareil`,
        description: `- Casque gaming filaire avec connexion 3,5 mm
- Microphone directionnel amovible
- Compatible avec les appareils dotés d'une prise casque
- Transducteurs de 40 mm`,
    },
    {
        id: 20,
        name: "Sony INZONE H5",
        brand: "Sony",
        slug: "sony-inzone-h5",
        categorie: "Casques",
        type: "Gaming",
        compatibilitys: ["PC", "PS5"],
        prix: 149.99,
        info: `### Spécifications du casque

- Transducteurs de 40 mm
- Réponse en fréquence : 5 Hz à 20 kHz en mode filaire
- Casque circum-auriculaire fermé

### Microphone et connexions

- Microphone sur perche relevable avec réduction de bruit
- Connexion sans fil 2,4 GHz par récepteur USB ou filaire 3,5 mm
- Fonctionnalités audio spatial et profils selon l'appareil utilisé

### Batterie et poids

- Autonomie annoncée jusqu'à 28 heures
- Poids : environ 260 g`,
        description: `- Casque gaming sans fil léger
- Connexion 2,4 GHz par USB ou filaire 3,5 mm
- Microphone sur perche relevable
- Autonomie annoncée jusqu'à 28 heures`,
    },
    {
        id: 21,
        name: "Elgato Wave:3",
        brand: "Elgato",
        slug: "elgato-wave-3",
        categorie: "Microphones",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 159.99,
        info: `### Capsule et captation

- Microphone électrostatique à électret
- Directivité cardioïde
- Résolution de conversion jusqu'à 24 bits / 96 kHz

### Connexions et commandes

- Connexion USB-C
- Sortie casque avec contrôle de volume
- Commandes tactiles de gain, volume et coupure du micro
- Logiciel Wave Link pour le mixage audio`,
        description: `- Microphone USB conçu pour le streaming et la voix
- Directivité cardioïde et conversion jusqu'à 24 bits / 96 kHz
- Sortie casque et commandes intégrées
- Mixage logiciel avec Wave Link`,
    },
    {
        id: 22,
        name: "Blue Yeti",
        brand: "Blue",
        slug: "blue-yeti",
        categorie: "Microphones",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 119.99,
        info: `### Capsule et captation

- Microphone USB à trois capsules
- Directivités sélectionnables : cardioïde, bidirectionnelle, omnidirectionnelle et stéréo
- Résolution audio jusqu'à 16 bits / 48 kHz

### Connexions et commandes

- Connexion USB
- Sortie casque avec écoute sans latence
- Commandes de gain, volume du casque et sélection de directivité`,
        description: `- Microphone USB polyvalent pour voix et appels
- Quatre directivités sélectionnables
- Sortie casque et réglage du gain intégrés
- Connexion USB pour PC et Mac`,
    },
    {
        id: 23,
        name: "HyperX SoloCast",
        brand: "HyperX",
        slug: "hyperx-solocast",
        categorie: "Microphones",
        type: "Gaming",
        compatibilitys: ["PC", "Mac", "PS5", "PS4"],
        prix: 59.99,
        info: `### Capsule et captation

- Capsule électrostatique à électret
- Directivité cardioïde
- Résolution d'enregistrement jusqu'à 24 bits / 96 kHz

### Connexions et commandes

- Connexion USB-C avec câble USB fourni
- Coupure tactile du microphone avec indicateur LED
- Support orientable et adaptateur pour bras articulé`,
        description: `- Microphone USB compact pour jeu et appels
- Captation cardioïde et résolution jusqu'à 24 bits / 96 kHz
- Coupure tactile avec indicateur lumineux
- Compatible PC, Mac et PlayStation`,
    },
    {
        id: 24,
        name: "Rode NT-USB Mini",
        brand: "Rode",
        slug: "rode-nt-usb-mini",
        categorie: "Microphones",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 99.99,
        info: `### Capsule et captation

- Microphone à condensateur avec directivité cardioïde
- Réponse en fréquence : 20 Hz à 20 kHz
- Conversion numérique jusqu'à 24 bits / 48 kHz

### Connexions et commandes

- Connexion USB-C
- Sortie casque 3,5 mm pour l'écoute directe
- Réglage de niveau et filtre anti-pop intégré
- Support magnétique de bureau amovible`,
        description: `- Microphone USB compact pour visioconférence et création
- Directivité cardioïde avec filtre anti-pop interne
- Écoute casque sans latence
- Support de bureau magnétique`,
    },
    {
        id: 25,
        name: "FIFINE AM8",
        brand: "FIFINE",
        slug: "fifine-am8",
        categorie: "Microphones",
        type: "Gaming",
        compatibilitys: ["PC", "Mac", "PS5", "PS4"],
        prix: 59.99,
        info: `### Capsule et captation

- Microphone dynamique à directivité cardioïde
- Conçu pour limiter la captation des sons venant de l'arrière

### Connexions et commandes

- Connexion USB-C pour ordinateur et appareils compatibles
- Sortie XLR pour une interface audio ou une table de mixage
- Sortie casque, réglage du gain et coupure tactile
- Éclairage RGB désactivable`,
        description: `- Microphone dynamique adapté au streaming et aux appels
- Connexions USB-C et XLR
- Sortie casque et commandes intégrées
- Éclairage RGB avec réglage de coupure tactile`,
    },
    {
        id: 26,
        name: "Logitech C920 HD Pro",
        brand: "Logitech",
        slug: "logitech-c920-hd-pro",
        categorie: "Caméra",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 79.99,
        info: `### Image et vidéo

- Résolution vidéo jusqu'à 1080p à 30 images par seconde
- Mise au point automatique
- Correction automatique de l'éclairage

### Audio et connexion

- Deux microphones stéréo intégrés
- Connexion USB-A
- Fixation universelle pour écran ou trépied
- Compatible avec les principales applications de visioconférence`,
        description: `- Webcam Full HD pour appels et visioconférences
- Mise au point automatique et correction de l'éclairage
- Deux microphones intégrés
- Fixation sur écran ou trépied`,
    },
    {
        id: 27,
        name: "Logitech Brio 500",
        brand: "Logitech",
        slug: "logitech-brio-500",
        categorie: "Caméra",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 139.99,
        info: `### Image et vidéo

- Résolution vidéo jusqu'à 1080p à 30 images par seconde
- Correction automatique de l'éclairage RightLight 4
- Cadrage automatique et mode de présentation selon les applications compatibles

### Audio et connexion

- Deux microphones avec réduction du bruit
- Connexion USB-C
- Cache de confidentialité intégré
- Fixation réglable pour écran`,
        description: `- Webcam Full HD avec cadrage automatique
- Correction de l'éclairage et réduction du bruit
- Cache de confidentialité intégré
- Connexion USB-C`,
    },
    {
        id: 28,
        name: "Logitech StreamCam",
        brand: "Logitech",
        slug: "logitech-streamcam",
        categorie: "Caméra",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 149.99,
        info: `### Image et vidéo

- Résolution vidéo jusqu'à 1080p à 60 images par seconde
- Mise au point automatique et exposition intelligente
- Rotation possible pour filmer en format portrait

### Audio et connexion

- Deux microphones frontaux
- Connexion USB-C
- Fixation pour écran et support de trépied inclus
- Réglages complémentaires disponibles avec Logitech Capture`,
        description: `- Webcam Full HD jusqu'à 60 images par seconde
- Orientation paysage ou portrait
- Mise au point automatique
- Connexion USB-C et microphones intégrés`,
    },
    {
        id: 29,
        name: "Razer Kiyo X",
        brand: "Razer",
        slug: "razer-kiyo-x",
        categorie: "Caméra",
        type: "Gaming",
        compatibilitys: ["PC", "Mac"],
        prix: 69.99,
        info: `### Image et vidéo

- Résolution vidéo jusqu'à 1080p à 30 images par seconde
- Mode 720p jusqu'à 60 images par seconde
- Mise au point automatique

### Audio et connexion

- Microphone omnidirectionnel intégré
- Connexion USB-A
- Support orientable et fixation pour trépied
- Paramètres vidéo personnalisables avec Razer Synapse`,
        description: `- Webcam pour streaming et appels vidéo
- Jusqu'à 1080p à 30 images/s ou 720p à 60 images/s
- Mise au point automatique
- Microphone intégré et support orientable`,
    },
    {
        id: 30,
        name: "Logitech C270 HD",
        brand: "Logitech",
        slug: "logitech-c270-hd",
        categorie: "Caméra",
        type: "Bureautique",
        compatibilitys: ["PC", "Mac"],
        prix: 29.99,
        info: `### Image et vidéo

- Résolution vidéo jusqu'à 720p à 30 images par seconde
- Correction automatique de l'éclairage
- Champ de vision diagonal de 55 degrés

### Audio et connexion

- Microphone mono avec réduction du bruit
- Connexion USB-A
- Clip universel pour écran ou ordinateur portable`,
        description: `- Webcam HD simple pour appels vidéo
- Image jusqu'à 720p à 30 images par seconde
- Microphone intégré avec réduction du bruit
- Clip de fixation universel`,
    },
    {
        id: 31,
        name: "Xbox Wireless Controller",
        brand: "Microsoft",
        slug: "xbox-wireless-controller",
        categorie: "Manettes",
        type: "Gaming",
        compatibilitys: ["PC", "Xbox", "Mobile"],
        prix: 59.99,
        info: `### Commandes et conception

- Manette sans fil avec gâchettes et croix directionnelle
- Bouton de partage dédié
- Prise casque stéréo 3,5 mm

### Connexions et alimentation

- Connexion sans fil Xbox, Bluetooth ou USB-C filaire
- Alimentation par deux piles AA ou batterie rechargeable vendue séparément
- Compatible avec Xbox Series X|S, Xbox One, Windows et appareils Bluetooth compatibles`,
        description: `- Manette sans fil Xbox avec bouton de partage
- Connexion Xbox, Bluetooth ou USB-C
- Prise casque 3,5 mm
- Compatible Xbox, PC Windows et appareils mobiles compatibles`,
    },
    {
        id: 32,
        name: "Sony DualSense",
        brand: "Sony",
        slug: "sony-dualsense",
        categorie: "Manettes",
        type: "Gaming",
        compatibilitys: ["PC", "PS5", "Mobile"],
        prix: 74.99,
        info: `### Commandes et retour haptique

- Retour haptique et gâchettes adaptatives dans les jeux compatibles
- Microphone intégré et bouton de coupure
- Haut-parleur intégré et prise casque 3,5 mm

### Connexions et batterie

- Connexion sans fil Bluetooth ou USB-C filaire
- Batterie rechargeable intégrée
- Fonctionnalités avancées disponibles sur PS5 ; fonctions variables sur PC et mobile`,
        description: `- Manette sans fil conçue pour la PlayStation 5
- Retour haptique et gâchettes adaptatives
- Microphone intégré et prise casque
- Connexion Bluetooth ou USB-C`,
    },
    {
        id: 33,
        name: "Sony DualShock 4",
        brand: "Sony",
        slug: "sony-dualshock-4",
        categorie: "Manettes",
        type: "Gaming",
        compatibilitys: ["PC", "PS4", "Mobile"],
        prix: 59.99,
        info: `### Commandes et conception

- Pavé tactile cliquable, barre lumineuse et capteur de mouvement
- Haut-parleur intégré et prise casque 3,5 mm
- Bouton SHARE dédié

### Connexions et batterie

- Connexion sans fil Bluetooth ou USB filaire
- Batterie rechargeable intégrée
- Compatible avec PS4 ; prise en charge PC et mobile selon le jeu et la configuration`,
        description: `- Manette sans fil pour PlayStation 4
- Pavé tactile, capteur de mouvement et bouton SHARE
- Prise casque et haut-parleur intégré
- Connexion Bluetooth ou USB`,
    },
    {
        id: 34,
        name: "8BitDo Ultimate 2.4G",
        brand: "8BitDo",
        slug: "8bitdo-ultimate-2-4g",
        categorie: "Manettes",
        type: "Gaming",
        compatibilitys: ["PC", "Mobile"],
        prix: 59.99,
        info: `### Commandes et conception

- Manette sans fil avec joysticks à effet Hall sur les versions concernées
- Deux boutons arrière programmables
- Profil de commandes personnalisable avec le logiciel 8BitDo Ultimate

### Connexions et batterie

- Connexion 2,4 GHz par récepteur USB ou USB filaire
- Station de recharge incluse selon le pack
- Compatible avec Windows et appareils Android pris en charge
- Ne pas confondre avec la version Bluetooth, dont la compatibilité diffère`,
        description: `- Manette sans fil 2,4 GHz pour PC et Android compatibles
- Deux boutons arrière personnalisables
- Récepteur USB et connexion filaire
- Vérifier la version avant achat : la compatibilité varie selon le modèle`,
    },
    {
        id: 35,
        name: "Logitech F310",
        brand: "Logitech",
        slug: "logitech-f310",
        categorie: "Manettes",
        type: "Gaming",
        compatibilitys: ["PC"],
        prix: 29.99,
        info: `### Commandes et conception

- Manette filaire avec disposition classique à deux sticks
- Croix directionnelle à quatre commutateurs
- Sélecteur de modes XInput et DirectInput

### Connexion et compatibilité

- Câble USB-A d'environ 1,8 m
- Compatible avec les jeux PC prenant en charge XInput ou DirectInput
- Aucun logiciel supplémentaire nécessaire pour les fonctions de base`,
        description: `- Manette PC filaire avec câble USB
- Modes XInput et DirectInput
- Disposition classique à deux sticks
- Compatible avec les jeux prenant en charge les manettes PC`,
    },
];
