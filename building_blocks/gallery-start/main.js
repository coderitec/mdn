const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let img = 1; img <= 5; img++) {
   const newImage = document.createElement('img');
   newImage.setAttribute('src', `./images/pic${img}.jpg`);
   thumbBar.appendChild(newImage);

   newImage.addEventListener('click', function(){
       displayedImage['src'] = newImage['src'];
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(){
    let className = btn.getAttribute('class');
    if (className==='dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
