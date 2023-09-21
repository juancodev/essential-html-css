/*
const detailsList = document.querySelectorAll('details')
    detailsList.forEach((details) => {
      details.querySelector('summary').addEventListener('click', expand);
    })

    function expand() {
      detailsList.forEach((details) => {
      details.removeAttribute('open');
      })
}*/

$('summary').toggle();