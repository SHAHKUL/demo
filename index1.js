//a. Get all the countries from Asia continent /region using Filter function

// var request=new XMLHttpRequest()
// request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true)
// request.send()
// request.onload=function()
// {
//     var data=JSON.parse(request.response)
//     var pop=data.filter((item)=>(item.region=="Asia"))
//     console.log(pop)
// }

//b. Get all the countries from Asia continent /region using Filter function

// var request=new XMLHttpRequest()
// request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true)
// request.send()
// request.onload=function()
// {
//     var data=JSON.parse(request.response)
//    let pop=data.filter((item)=>item.population<200000)
//    console.log(pop)


// }


//c. Print the following details name, capital, flag using forEach function

// var request=new XMLHttpRequest()
// request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true)
// request.send()
// request.onload=function()
// {
//     var data=JSON.parse(request.response)
//    let pop=data.forEach(item =>
//    console.log(item.name,item.capital,item.flag)  
       
//    );
  


// }



// d. Print the total population of countries using reduce function
// var request=new XMLHttpRequest()
// request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true)
// request.send()
// request.onload=function()
// {
//     var data=JSON.parse(request.response)
//    let pop=data.reduce((acc,item) => acc+item.population,0)
//    console.log(pop)
// }


// e. Print the country which uses US Dollars as currency.


// var request=new XMLHttpRequest()
// request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true)
// request.send()
// request.onload=function()
// {
//     var data=JSON.parse(request.response)
//   let currency=data.filter((item)=>
//   {
//       for(let i in item.currencies)
//       {
//           if(item.currencies[i].code==="USD")
//           return true
//       }

//   })
// console.log(currency)
// }






















