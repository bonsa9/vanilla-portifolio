const sentenceToDisplay = "I'm a FullStack Developer."
const sentenceDiv = document.querySelector('#designation')
const lettersInSentence = sentenceToDisplay.split('')

let i =0 

let animation = setInterval(() => {
    if(i<lettersInSentence.length){
    if(lettersInSentence[i]==" "){
        sentenceDiv.innerHTML+="&nbsp"
    }
    else{
        sentenceDiv.innerText+=lettersInSentence[i]
    }
    i++
}
else{
    i=0
    sentenceDiv.innerText=''
}
}, 200);



document.querySelector('#mini-game-web-project-img').addEventListener('click',()=>{
    window.open('https://playzz-web.vercel.app/')
})

