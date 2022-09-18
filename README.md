# README

React app that shows covid statistics from around the world.

Design: https://www.figma.com/file/dt4MVZmywQbj1Cu4c1G8xK/Codempire%3A-COVID-statistic

API: https://documenter.getpostman.com/view/10808728/SzS8rjbc

Requirements:
- display of all country statistics;
- search for a country by name;
- a modal window with details of country statistics when clicked on;

Technologies:
- React (with hooks)
- Typescript
- Redux (thunk)
- Axios
- SCSS

## Example JSON Response from the Price Ticker service
```json
[
    {
      "Country": "Ukraine",
      "CountryCode": "UA",
      "Slug": "ukraine",
      "NewConfirmed": 153,
      "TotalConfirmed": 1225,
      "NewDeaths": 5,
      "TotalDeaths": 32,
      "NewRecovered": 3,
      "TotalRecovered": 25,
      "Date": "2020-04-05T06:37:00Z"
    },
]
```
