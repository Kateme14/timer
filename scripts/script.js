'use strict'
// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.
// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс —
// посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то
// из постов не загрузиться, нам тогда необходимо вывести в консоль ошибку.
// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты,
// или больше постов, или меньше.
// Реализуйте задачу двумя способами:
// Promise chaining
// Async / await

// Promise chaining
    function fetchPost(postNumber) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to fetch post ${postNumber}`)
            }
            return response.json()
          })
      }
      
      fetchPost(15)
        .then(post15 => {
          console.log("Post 15:", post15)
          return fetchPost(23)
        })
        .then(post23 => {
          console.log("Post 23:", post23)
          return fetchPost(7)
        })
        .then(post7 => {
          console.log("Post 7:", post7)
          return fetchPost(3)
        })
        .then(post3 => {
          console.log("Post 3:", post3)
        })
        .catch(error => {
          console.error("Error:", error)
        })

// Async / await

async function fetchPostsInOrder() {
    try {
        const post15 = await fetchPost(15)
        console.log(post15)

        const post23 = await fetchPost(23)
        console.log(post23)

        const post7 = await fetchPost(7)
        console.log(post7)

        const post3 = await fetchPost(3)
        console.log(post3)
    } catch (error) {
        console.error(error)
    }
}

async function fetchPost(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if (!response.ok) {
        throw new Error(`Error: Unable to load post ${postId}`)
    }
    return response.json()
}

fetchPostsInOrder()