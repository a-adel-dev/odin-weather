export default function createRainPattern(numRaindrops) {
  const container = document.createElement('div');
  container.className = 'rain-container';

  for (let i = 0; i < numRaindrops; i += 1) {
    const raindrop = document.createElement('i');
    raindrop.className = 'rain';
    container.appendChild(raindrop);
  }

  return container;
}
