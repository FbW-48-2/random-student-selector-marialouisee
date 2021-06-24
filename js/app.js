const imageUrls = [
    'https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif',
    'https://media.giphy.com/media/I9BrUZDq5hksw/source.gif',
    'https://media.giphy.com/media/B37cYPCruqwwg/source.gif',
    'https://media.giphy.com/media/hHuOmWidPXwCk/source.gif',
    'https://media.giphy.com/media/18hKuycmFuwaQ/source.gif',
    'https://media.giphy.com/media/3oFzma9FGIblOf6Wk0/source.gif',
    'https://media.giphy.com/media/7QxZfWnBLdGI8/source.gif',
    'https://media.giphy.com/media/KmTnUKop0AfFm/source.gif',
    'https://media.giphy.com/media/UseBZDm3O00hy/source.gif',
    'https://media.giphy.com/media/l0HlMWkHJKvyjftKM/source.gif',
    'https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif',
    'https://media.giphy.com/media/PzQvWAhgfUipW/source.gif',
    'https://media.giphy.com/media/3q3RzbSNRugy0mH6LQ/giphy.gif',
    'https://media.giphy.com/media/2gG2xiMTtFwsg/source.gif',
    'https://media.giphy.com/media/YrD1PQldGsstG/source.gif',
    'https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif',
    'https://media.giphy.com/media/gLQjUikb8nQnS/source.gif',
    'https://media.giphy.com/media/B6G2MYBmtnGYU/source.gif',
    'https://media.giphy.com/media/gE6IUBRWZd744/source.gif',
    'https://media.giphy.com/media/cO39srN2EUIRaVqaVq/source.gif'
];

const students = ['Aimee', 'Beda', 'Carlos', 'Christoph','Dalibor', 'Daniel', 'Francesco', 'Habid', 'Jonathan', 'Mo', 'Norman', 'Priya', 'Martin', 'Shinhee', 'Shreekesh', 'Tim', 'Lucas',  'Lui']

const h1 = document.querySelector('#h1')
const btn = document.querySelector('#btn')
const img = document.querySelector("#img")

const getRandomName = (names) => {
    return names[Math.floor(Math.random() * students.length)]
}
const getRandomImage = (images) => {
    return images[Math.floor(Math.random() * images.length)]
}

const updateHTML = () => {
    

    let interval = setInterval(function(){
        h1.innerText = getRandomName(students)
    }, 100)

    setTimeout(function(){
        clearInterval(interval)
        img.src = getRandomImage(imageUrls)
    }, 4000)
    // img.src = getRandomImage(imageUrls)

}

btn.addEventListener('click', (e)=>{

    updateHTML()

})