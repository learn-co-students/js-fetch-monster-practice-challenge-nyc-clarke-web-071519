//-----grab available elements from the document---------
const URL_PREFIX='http://localhost:3000/';
const createMonster = document.querySelector('#create-monster')
const monsterContainer = document.querySelector('#monster-container')

document.addEventListener('DOMContentLoaded', function() {
    //when the page loads, show the first 50 monster
    fetch(URL_PREFIX)

 
        _limit=[50]
        .then(response => response.json())
        .then(monsterObj => monsterObj.forEach(monster => {

    //each monster's name, age, and desc should be shown
    let li = document.createElement('LI')
            li.innerHTML =
            `<h2> ${monster.name} </h2>
            <h4> ${monster.age} </h4>
            <p> ${monster.description} </p>
            `
        monsterContainer.appendChild(li)
        }))

    //when you click the button, the monster should
    //be added to the list and saved to the API

    fetch(URL_PREFIX, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'ACCEPT': 'application/json'
        },
        body: JSON.stringify(),
            'name': name,
            'age': age,
            'description': description

    
    })

    //attach the newly created monster to the list
    monsterContainer.addEventListener('click', function(event) {
        if (event.target.className === 'create-monster') {
            let newMonsterInfo = document.createElement('li')
            newMonsterInfo.innerHTML = `
            <h2> ${monster.name} </h2>
            <h4> ${monster.age} </h4>
            <p> ${monster.description} </p>
            `
        createMonster.appendChild(newMonsterInfo)
        }
    })
})

