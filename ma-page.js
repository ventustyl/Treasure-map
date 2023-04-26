const speed = 25; // Vitesse de déplacement de la carte

const map = document.querySelector('body');
const width = map.offsetWidth;
const height = map.offsetHeight;

// Fonction pour déplacer la carte en fonction de la position du curseur
function moveMap(event) {
    const x = event.clientX;
    const y = event.clientY;
    const offsetX = width / 2 - x + window.innerWidth  - width / 2;
    const offsetY = height / 2 - y + window.innerHeight   - height / 2;
    map.style.backgroundPosition = `${offsetX / speed}px ${offsetY / speed}px`;
    console.log(offsetX);
  }
  

// Ajout de l'événement pour déplacer la carte au survol de la bordure
map.addEventListener('mousemove', moveMap);
