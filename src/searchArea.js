import searchSVG from './img/search.svg';
import renderApp from './renderApp';

export default function searchArea(appSettings) {
  // Create a container div for the search box and button
  const searchForm = document.createElement('form');
  searchForm.classList.add('search-container');
  searchForm.setAttribute('novalidate', 'true');

  const searchGroup = document.createElement('div');
  searchGroup.classList.add('search-group');

  // Create an input element for the search box
  const searchBox = document.createElement('input');
  searchBox.classList.add('search-box');
  searchBox.setAttribute('type', 'text');
  searchBox.setAttribute('placeholder', 'search city or US zip');
  searchBox.required = true;

  // Create a button element for the search button
  const searchButton = document.createElement('button');
  searchButton.classList.add('search-button');
  searchButton.setAttribute('type', 'submit');

  // Create an image element for the search button
  const searchIcon = document.createElement('img');
  searchIcon.src = searchSVG;
  searchIcon.setAttribute('alt', 'Search');
  searchButton.appendChild(searchIcon);

  // Append the input and button to the container
  searchGroup.appendChild(searchBox);
  searchGroup.appendChild(searchButton);

  searchForm.appendChild(searchGroup);

  const validationText = document.createElement('p');
  validationText.classList.add('hidden');
  validationText.classList.add('validation-text');
  validationText.innerHTML = 'please insert a valid city name.';

  // Add a click event listener to the button
  searchButton.addEventListener('click', (e) => {
    if (!searchBox.checkValidity()) {
      e.preventDefault();
      validationText.classList.remove('hidden');
    } else {
      validationText.classList.add('hidden');
      appSettings.setLocation(searchBox.value);
      renderApp(appSettings);
    }
  });

  searchForm.appendChild(validationText);

  return searchForm;
}
