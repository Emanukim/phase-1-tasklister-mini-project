document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit',(e) => 
  {  e.preventDefault()
  console.log(e.target.description.value);
  })
});
document.getElementsByClassName