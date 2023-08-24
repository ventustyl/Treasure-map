
# Projet Parallaxe de Carte au trésor (optmisé sur desktop)

Ce projet consiste en l'implémentation d'un effet de parallaxe pour une carte, basé sur le mouvement de la souris sur les ordinateurs de bureau et le toucher sur les appareils mobiles.

## Fonctionnement

Le script JavaScript dans ce projet permet à la carte de se déplacer en réponse au mouvement de la souris sur les ordinateurs de bureau et au toucher sur les appareils mobiles. L'effet de parallaxe est créé en ajustant les propriétés de positionnement de la carte en fonction des mouvements de l'utilisateur.

## Utilisation

1. Téléchargez les fichiers du projet ou copiez le code source dans vos fichiers existants.

2. Dans le fichier HTML de votre projet, assurez-vous d'avoir les éléments suivants :

```html
<div id="map-container">
  <div id="map"> <!-- Votre contenu de carte ici --> </div>
</div>` 
```
3.  Incluez le script JavaScript dans votre fichier HTML, soit en utilisant une balise `<script>` interne, soit en liant un fichier externe :


`<script src="chemin/vers/votre/script.js"></script>` 

4.  Assurez-vous d'ajuster les IDs des éléments dans le script (`'map-container'` et `'map'`) pour correspondre à ceux de votre HTML.
    
5.  Ouvrez le fichier HTML dans un navigateur, à la fois sur un ordinateur de bureau et sur un appareil mobile, pour observer l'effet de parallaxe en action.
    

## Astuces pour une Meilleure Fluidité

-   Optimisez les calculs de position pour réduire la charge du processeur.
-   Réduisez la complexité des éléments de la scène pour améliorer les performances.
-   Utilisez les outils de développement pour profiler et déboguer le code.
-   Testez sur plusieurs appareils et ajustez si nécessaire.

## Licence

Ce projet est sous licence MIT. 

----------

Auteur : Eric Venturino
Site visible sur : https://ventustyl.github.io/Treasure-map/
