// write your code here

const BASE_URL = 'http://localhost:3000/images/1'
const flatgram = document.querySelector(".image-container")


fetch(BASE_URL)
.then(res => res.json())
.then(instaPage);


function instaPage(picture){
    const pic = document.querySelector('.title');
    pic.textContent = "Woofing those bugs away"
    pic.id = `id - ${picture.id}`
    pic.likes = 0

    const picImg = document.querySelector('fg-image');
    //picImg.src = 

    const picLikes = document.querySelector(".likes-section")
    
    
    const bttn = document.querySelector('fg-like-button')
    bttn.addEventListener('click', increaseLike)

    
    bodyOfPicture(captions)

    flatgram.append(pic, bttn,caption1,caption2,caption3)
    

}

function bodyOfPicture(captions){

    const caption1 = document.getElementById('fg-comments').innerHTML = "What a cute dog!"
    console.log(caption1)
    //caption1.textContent = "What a cute dog!"
    caption1.imageId = '1'

    const caption2 = document.querySelector('li')
    caption2.textContent = "He's got a nose for bugs!"
    caption1.imageId = '1'

    const caption3 = document.querySelector('li')
    caption3.textContent = "Woof!"
    caption3.imageId = '1'


}


function increaseLike(e){
    const likesElement = e.target.previousElementSibling
    likesElement.textContent = parseInt(likesElement.textContent) + 1
}