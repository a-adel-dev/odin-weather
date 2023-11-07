export default function toggleButton(app, render) {
  const container = document.createElement('div');
  container.classList.add('toggle-div');
  const button = document.createElement('input');
  button.id = 'check';
  button.classList.add('toggle-button');
  button.setAttribute('type', 'checkbox');
  if (app.getImperial()) {
    button.checked = true;
  }

  const label = document.createElement('label');
  label.setAttribute('for', 'check');
  label.addEventListener('click', () => {
    app.toggleUnits();
    render(app);
  });

  container.appendChild(button);
  container.appendChild(label);
  return container;
}
