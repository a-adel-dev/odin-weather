export default function footer() {
  const component = document.createElement('footer');
  component.innerHTML = `&copy; 2023. Developed by Ahmad Adel | <a href="https://github.com/a-adel-dev/odin-weather" target="_blank">source</a>`;

  return component;
}
