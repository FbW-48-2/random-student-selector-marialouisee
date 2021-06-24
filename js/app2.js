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


class StudentPicker {
    constructor(imagesArr, studentsArr){
        this.images = imagesArr;
        this.students = studentsArr;
        this.h1 = document.querySelector('#h1');
        this.img = document.querySelector("#img")
        // this.btn = document.querySelector('#btn')
    }

    getRandomName(){
        return this.students[Math.floor(Math.random() * this.students.length)]
    }

    getRandomImage(){
        return this.images[Math.floor(Math.random() * this.images.length)]
    }

    
    updateHTML(){
        h1.innerText = this.getRandomName()
        img.src = this.getRandomImage()
    }

    spin(){
        // setInterval(this.updateHTML, 3000)
    }
}

const btn = document.querySelector('#btn')

const ohNoPicker = new StudentPicker(imageUrls, students)


btn.addEventListener('click', (e)=>{
    ohNoPicker.spin()
})