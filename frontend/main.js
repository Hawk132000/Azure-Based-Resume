window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/CounterHttpTrigger';

const getVisitCount = () => {
    let count = 0;

    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        const count = response;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}