export default function createSnowPattern(numSnowFlakes) {
  const container = document.createElement('div');

  for (let i = 0; i < numSnowFlakes; i += 1) {
    const snowFlake = document.createElement('i');
    snowFlake.className = 'snowflake';
    container.appendChild(snowFlake);
  }

  return container;
}
