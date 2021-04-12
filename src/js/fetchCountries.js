import notif from './notification.js'

 function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
   .then(response => {
    
        if(response.ok){
            return response.json()
        }
        else {
            notif.error(error) 
        }
        })

   .catch(error => {
       notif.error(error)})
   }

   export default {fetchCountries}