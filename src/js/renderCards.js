import Notiflix from 'notiflix';

export default function renderCountriesCards(countries) {
  let countriesAmount = countries.length;
  const countriesList = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');
  const countriesArray = [];

  if (countriesAmount > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (countriesAmount >= 2 && countriesAmount <= 10) {
    countriesArray.push(
      countries
        .map(country => {
          return `<li class="country">
          <img src='${country.flags.svg}' alt='${country.flags.alt}' />
          <span class="country-name">${country.name.official}</span>
        </li>`;
        })
        .join('')
    );
    countryInfo.innerHTML = '';
    countriesList.innerHTML = countriesArray;
  } else {
    countriesArray.push(
      countries
        .map(country => {
          return `<div class="country"><img src='${country.flags.svg}' alt='${
            country.flags.alt
          }'/>
          <span class="country-name"> <b>${
            country.name.official
          }</b></span></div>
          <p class="country-description"> <b>Capital:</b> ${country.capital}</p>
          <p class="country-description"> <b>Population:</b> ${
            country.population
          }</p>
          <p class="country-description"> <b>Languages:</b> ${Object.values(
            country.languages
          ).join(', ')}</p>
        `;
        })
        .join('')
    );
    countriesList.innerHTML = '';
    countryInfo.innerHTML = countriesArray;
  }
}
