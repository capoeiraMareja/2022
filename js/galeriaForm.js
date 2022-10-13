//Listen for a submit
/*
var name = document.getElementById('name');
var number = document.getElementById('number');
var msg = document.getElementById('subject');

function myclick() {
  var name = document.contato.name.value;
  var number = document.contato.number.value;
  var subject = document.contato.subject.value;
  window.alert(name, number, subject);
} */

const contactForm = document.querySelector('.form-contact')
const nome = document.querySelector('.nome')
const number = document.querySelector('.number')
const subject = document.querySelector('.subject')

const submit = document.querySelector('.submit-form')

// teste
function validar() {
  var nome = document.getElementById('name').value
  if (nome.value == "" || number.value == "") {
   // enable alert
    document.querySelector('.alertVazio').style.display = 'block';

    // remove the alert
    setTimeout(() => {
      document.querySelector('.alertVazio').style.display = 'none';
    }, 3000);

    return true;
  } else {
   // enable alert
   document.querySelector('.alert').style.display = 'block';

   // remove the alert
   setTimeout(() => {
      document.querySelector('.alertVazio').style.display = 'none';
    }, 3000);

  }
}

// teste

submit.addEventListener('click', e => {
   validar()
  e.preventDefault()

  db.collection('form-contact')
    .doc()
    .set({
      Nome: nome.value,
      Numero: number.value,
      Subject: subject.value
    })
    .then(() => {
      contactForm.reset()
 
    })
})
