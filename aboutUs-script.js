const openButton = document.getElementById('letter-icon')
const closeButton = document.getElementById('close-button')
const popup = document.getElementById('popup1')
const overlay = document.getElementById('overlay')

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

openButton.addEventListener('click', () =>{
    popup.classList.add('active')
    overlay.classList.add('active')
})

closeButton.addEventListener('click', ()=>{
    popup.classList.remove('active')
    overlay.classList.remove('active')
})

var btns = document.getElementsByClassName("read-more-btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        this.textContent = this.textContent.includes('More') ? "Read Less" : "Learn More";
        const text = this.previousElementSibling;
        if (text.style.maxHeight){
            text.style.maxHeight = null;
        } else {
            text.style.maxHeight = text.scrollHeight + "px";
            var content = this.closest('.content, .content-interns');
            content.style.maxHeight = parseFloat(content.style.maxHeight)+parseFloat(content.scrollHeight) +"px";
        }
    });
}




