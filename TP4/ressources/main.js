fetch('http://gigondas:1111/sprietna/ihm/tp4/schedules?cityFrom=1&cityTo=2').then(response => {
    if (response.ok) {
        return response.json()
    } else {
        throw response
    }
}).then(schedules => {
    console.log(schedules)
}).catch(error => {
    error.text().then(errorMessage => {
        console.log('Request failed : ' + errorMessage);
    });
});


