const listUser = document.querySelector('.cards')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => renderUsers(res))

const renderUsers = (users) => {
    users.map((user) => listUser.append(createUser(user)))
}

const createUser = (user) => {
    const card = document.createElement('div')
    card.classList.add('card')
    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    const cardEmail = document.createElement('p')
    cardEmail.innerHTML = user.email
    const cardText = document.createElement('p')
    cardText.innerHTML = user.name
    const cardBtn = document.createElement('a')
    cardBtn.classList.add('btn', 'btn-primary')
    cardBtn.href = `user.html?postId=${user.id}`
    cardBtn.innerHTML = 'Go users accaunt'
    card.append(cardBody)
    cardBody.append(cardEmail, cardText, cardBtn)
    console.log(card);
    return card
}
