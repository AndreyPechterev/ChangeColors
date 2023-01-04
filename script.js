let btn = document.querySelector('.btn'),
    span = document.querySelector('.color'),
    body = document.querySelector('body');

const hexCode = [0,1,2,3,4,5,6,7,8,9,"a",'b',"c","d","e","f"]

function changeColor() {
  let color = '';
  for (let i = 0; i<6; i++) {
    color += hexCode[Math.floor(Math.random() * hexCode.length)]
  }
  return '#' + color;
}

btn.addEventListener('click', function() {
  let text = changeColor();
  body.style.backgroundColor = text;
  span.textContent = text;
  span.style.color = text;
})