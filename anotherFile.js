document.addEventListener('DOMContentLoaded', event => {
  let name = document.getElementById('name')
  let button = document.querySelector("[type='submit']")
  document.addEventListener('keyup', event => {
    maxLength = 10
    if (name.value.length > maxLength) {
      document.querySelector('p').textContent = 'No More'
      button.disabled = true
    }
  })

})


const networkRequest = () => {
  setTimeout(() => {
    console.log('Async Code');
  }, 2000);
};
console.log('Hello World');
networkRequest();
console.log('The End');