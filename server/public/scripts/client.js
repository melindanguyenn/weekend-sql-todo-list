$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    getTask();
}

function getTask() {
    //GET request
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log('back from GET', response);
        displayTasks(response);
    }).catch(function (err) {
        console.log(err);
        alert('get not working');
    }) 
}  //displayTasks(response) is giving the response to function


function displayTasks(responseArray) {
    $('#listedTasks').empty();
    for (let i = 0; i < responseArray.length; i++) {
        $('#listedTasks').append(`<tr>
        <td>${responseArray[i].task}</td>
        <td>${responseArray[i].notes}</td>
        <td><select id="taskStatus">
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
        </select></td>
        <td><button id="delete">Delete</button></td>
        </tr>`)
    }
} //displays tasks to DOM and allows user to change status of the task or delete