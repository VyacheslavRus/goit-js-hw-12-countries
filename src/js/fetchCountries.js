import notif from './notification.js'

 function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
   .then(response => response.json())
   .catch(error => {
       notif.error(error)})
   }

   export default {fetchCountries}