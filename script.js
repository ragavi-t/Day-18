let dropDown = document.createElement("div")
dropDown.setAttribute('id', 'dropDiv')
dropDown.innerHTML = ' <h4>Select Country</h4> '
document.getElementById('container').appendChild(dropDown)

let selection = document.createElement('select')
selection.setAttribute('id', 'countries')
selection.innerText = ''
document.getElementById('dropDiv').appendChild(selection)

let details = document.createElement('div')
details.setAttribute('id', 'details')
details.innerText = ''
document.getElementById('container').appendChild(details)

let capital = document.createElement('div')
capital.setAttribute('id', 'capital')
capital.innerText = ''
document.getElementById('details').appendChild(capital)

let region = document.createElement('div')
region.setAttribute('id', 'region')
region.innerText = ''
document.getElementById('details').appendChild(region)

let countryCode = document.createElement('div')
countryCode.setAttribute('id', 'code')
countryCode.innerText = ''
document.getElementById('details').appendChild(countryCode)


const countriesList = document.getElementById("countries")
let countries;
countriesList.addEventListener("change", function (event) {
    displayCountryInfo(event.target.value)

});

fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("error :", err));


function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    countries.forEach(country => options += `<option id=countryName value = "${country.ccn3}">${country.name.common}</option>`);
    countriesList.innerHTML = options;
    displayCountryInfo("414")
}
console.log()

function displayCountryInfo(countryByccn3Code) {
    const countryData = countries.find(country => country.ccn3 === countryByccn3Code);
    console.log(countryData)
    document.getElementById('capital').innerHTML = `<h6>Capital : ${countryData.capital}</h6>`
    document.getElementById('region').innerHTML = `<h6>Region : ${countryData.region}</h6>`
    document.getElementById('code').innerHTML = `<h6>Country Code : ${countryData.cca3}</h6>`
    document.querySelector("#flagImage img").src = countryData.flags.png
}