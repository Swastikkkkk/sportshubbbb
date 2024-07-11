fetch('https://api.cricapi.com/v1/currentMatches?apikey=22965c27-cec5-4c75-b9bc-ec9d69edce91&offset=0')
.then(res => {return res.json();})
.then(data =>{data.foreach(id => {
    const markup = <li>${id.score}</li>
    document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
});})
.catch(error => console.log(error));
