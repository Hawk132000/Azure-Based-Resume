window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://azureresumecounterfunc.azurewebsites.net/api/CounterHttpTrigger?code=0g4AfqGvwWLChyy4Qnai8kb8Z9KDvJ9bS8L_VnUYZh0ZAzFu1JOGnQ=='
const localFunctionApi = 'http://localhost:7071/api/CounterHttpTrigger';

const getVisitCount = () => {
    let count = 0;

    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        const count = response;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}