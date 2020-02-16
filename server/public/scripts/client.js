$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    getTask();
}

function getTask() {
    // make ajax request to GET songs from server
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log('back from GET', response);
    }).catch(function (err) {
        console.log(err);
        alert('get not working');
    }) 
}
