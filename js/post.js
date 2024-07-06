const comments = document.querySelector('.comments')
const postContainer = document.querySelector('.post')
const titleComments = document.querySelector('.title-comments')
if (location.search) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${location.search.substring(8)}`)
        .then(res => res.json())
        .then(res => renderPost(res))

    fetch(`https://jsonplaceholder.typicode.com/comments${location.search}`)
        .then(res => res.json())
        .then(res => renderComments(res))

}

const createPost = ({ title, body }) => {
    const postBody = document.createElement('div')
    postBody.classList.add('text-wrap')
    const postTitle = document.createElement('h2')
    postTitle.innerText = title
    const postText = document.createElement('p')
    postText.innerHTML = body
    postBody.append(postTitle, postText)
    return postBody
}

const renderPost = (post) => {
    postContainer.append(createPost(post))
}
const renderComments = (commentsArr) => {
    commentsArr.map((comment) => comments.append(createComment(comment)))
    titleComments.innerHTML = `Комментарии (${commentsArr.length})`
}

const createComment = ({ name, email, body }) => {
    const comment = document.createElement('div')
    comment.classList.add('comment')
    const mediaList = document.createElement('ul')
    mediaList.classList.add('media-list')
    const media = document.createElement('li')
    media.classList.add('media')
    const mediaBody = document.createElement('div')
    mediaBody.classList.add('media-body')
    const textSuccess = document.createElement('strong')
    textSuccess.classList.add('text-success')
    textSuccess.innerText = name
    const textMuted = document.createElement('p')
    textMuted.style = 'margin: 0'
    textMuted.classList.add('text-muted')
    textMuted.innerText = email
    const commentText = document.createElement('p')
    commentText.innerHTML = body
    comment.append(mediaList)
    mediaList.append(media)
    media.append(textSuccess, textMuted, commentText)
    return comment
}
