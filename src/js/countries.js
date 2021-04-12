import countriesTamplate from '../templates/countries.hbs'
import countriesTamplateList from '../templates/countriesTamplateList.hbs'
import api from './fetchCountries.js'
import debouns from 'lodash.debounce'
import noti from './notification.js'

const input = document.querySelector('input')

function inputSubmit(e) {
    const inputValue = e.target.value
    
    api.fetchCountries(inputValue)
    .then(data=>{
        console.log(data);
        if (data.length === 1) {
            renderCountries(data)
        }
        else if(data.length>=2 && data.length <= 10){
            markupCountriesList(data)
        }
        else if (data.length >10) {
            noti.error404()
        }
    })
}

function renderCountries(data) {
    const markupCountry = document.querySelector('.countries').innerHTML = countriesTamplate(data) 
}

function markupCountriesList(data) {
    const markupCountry = document.querySelector('.countries').innerHTML = countriesTamplateList(data) 
}

input.addEventListener('input',debouns(inputSubmit, 1000))