import renderApp from './renderApp';

export default function toggleButton(appSettings) {
  const container = document.createElement('div');
  container.classList.add('toggle-div');
  const button = document.createElement('input');
  button.id = 'check';
  button.classList.add('toggle-button');
  button.setAttribute('type', 'checkbox');
  if (appSettings.getImperial()) {
    button.checked = true;
  }

  const label = document.createElement('label');
  label.setAttribute('for', 'check');
  label.addEventListener('click', () => {
    appSettings.toggleUnits();
    renderApp(appSettings);
  });

  container.appendChild(button);
  container.appendChild(label);
  return container;
}
