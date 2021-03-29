const form = document.querySelector('form')
const button = document.querySelector('#button');
const input = document.querySelector('.input');


button.addEventListener('click', function(){
    const arrInput = document.querySelectorAll('.input');
    const lastIndex = arrInput.length-1;
    const newInput = document.createElement('input');
    newInput.className = 'input';
    newInput.style.display = 'block';
    (/555/gm.test(arrInput[lastIndex].value))?
        newInput.value = arrInput[lastIndex].value.replace(/555/gmi, '---') :
        newInput.value = arrInput[lastIndex].value;
    ((lastIndex+1)%2 === 0)? newInput.value = newInput.value.toUpperCase():
        newInput.value = newInput.value.toLowerCase();
        form.append(newInput)
})