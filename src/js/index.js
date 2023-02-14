import fetchCountries from './fetchCountries';
import renderCountriesCards from './renderCards';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import '../css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const countriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(e) {
  let searchForName = e.target.value.trim();

  if (searchForName) {
    fetchCountries(searchForName)
      .then(countries => {
        renderCountriesCards(countries);
      })
      .catch(fetchError);
  } else {
    removeMarkup();
  }
}

function fetchError() {
  removeMarkup();
  return Notiflix.Notify.failure('Oops, there is no country with that name');
}

function removeMarkup() {
  countryInfo.innerHTML = '';
  countriesList.innerHTML = '';
}
