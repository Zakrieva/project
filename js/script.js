const listPosts = document.querySelector('.row')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => renderPosts(res))

const renderPosts = (posts) => {
    posts.map((post) => listPosts.append(createPost(post)))
}

const createPost = (post) => {
    const col = document.createElement('div')
    col.classList.add('col-md-3')
    const card = document.createElement('div')
    card.classList.add('card')
    card.style = 'width: 18rem'
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = post.title
    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerHTML = post.body
    const cardBtn = document.createElement('a')
    cardBtn.classList.add('btn', 'btn-primary')
    cardBtn.href = `pages/post.html?postId=${post.id}`
    cardBtn.innerHTML = 'Go somewhere'
    col.append(card)
    card.append(cardBody)
    cardBody.append(cardTitle, cardText, cardBtn)
    return col
}
