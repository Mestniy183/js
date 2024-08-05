const input = document.querySelector('.form-task');
const addBtn = document.querySelector('.button');
const ul = document.querySelector('.task-list');

function createItem(element) {
    let newItem = document.getElementById('template').cloneNode(true).content;
    newItem.querySelector('.task__text').value = element;
    newItem.querySelector('.task__delete').addEventListener('click', deleteItem)

    ul.append(newItem);
}
function addNewTask(event) {
    event.preventDefault()
    let task = input.value.trim();
    if (!task) {
        alert('Поле не должно быть пустым');
        return
    }
    createItem(task)

    //   Создаём пустой массив.
    const arr = JSON.parse(localStorage.getItem('listTasks')) || []
    // Добавляем в массив надпись, которую написали в инпут.
    arr.push(task)
    // Установка массива в локалсторадж.
    localStorage.setItem('listTasks', JSON.stringify(arr))

    input.value = '';

    input.focus();
}

function displayList() {
    // Получение массива из локалсторадж.
    let list = JSON.parse(localStorage.getItem('listTasks')) || []
    // Перебераем полученный массив из локалсторадж и создаём элементы
    // на основе этого массива.
    list.forEach((element) => {
        createItem(element)

    })
}

document.addEventListener('DOMContentLoaded', displayList)
function deleteItem(event) {
    event.preventDefault();
    const target = event.target.parentElement;
    target.remove()
    const taskText = target.firstElementChild.value
    const tasks = JSON.parse(localStorage.getItem('listTasks')) || [];
    const updatedList = tasks.filter(task => task !== taskText);
    localStorage.setItem('listTasks', JSON.stringify(updatedList))
    console.log(updatedList);

}
addBtn.addEventListener('click', addNewTask)

localStorage.setItem('дело1', 3) //установить значение,где дело1 это ключ,а 3 значение этого ключа
sessionStorage.setItem('дело1', 3)
console.log(localStorage.getItem('дело1')); //получение значения по ключу
localStorage.removeItem('дело1') //удаление элемента по ключу
// localStorage.clear() //удаляет весь локалсторадж
localStorage.test = 3
console.log(localStorage.test);
delete localStorage.test

// localStorage.setItem('дело1',3)
// localStorage.setItem('дело2',4)
// localStorage.setItem('дело3',5)
// console.log(localStorage.length);
// for(let i = 0; i<localStorage.length; i++){
//     let key = localStorage.key(i)
//     console.log(`${key}: ${localStorage.getItem(key)}`);
// }

// localStorage.user = JSON.stringify({
//     name: 'Леонид'
// })
// console.log(JSON.parse(localStorage.user));

// localStorage.setItem('дело1',1)
// console.log(localStorage.getItem('дело1'));
// localStorage.removeItem('дело1')
// localStorage.clear()