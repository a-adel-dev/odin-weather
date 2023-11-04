export default function toggleButton() {
  const container = document.createElement('div');
  container.classList.add('toggle-div');
  const button = document.createElement('input');
  button.id = 'check';
  button.classList.add('toggle-button');
  button.setAttribute('type', 'checkbox');

  const label = document.createElement('label');
  label.setAttribute('for', 'check');

  container.appendChild(button);
  container.appendChild(label);
  return container;
}
