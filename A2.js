'use strict';
// let blo = document.getElementById("btn");
// let bb= document.getElementById("toggler");
// blo.onclick() = function () {
//     bb.style.display = "none";
// }


const modal = document.getElementById('test');
const overlay = document.querySelector('.overlay');
const btnCloseModalId = document.getElementById('close-modal-id');
const btnsOpenModalId = document.getElementById('show-modal-id');

btnsOpenModalId.onclick = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

btnCloseModalId.onclick = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}



// ##########################
// ##########################
// ##########################
// Start-Sign-Up
const BtnSignUp = document.getElementById('For-Sign-Up');
const modalSignUp = document.getElementById('test1');
const btnOpenModalIdSignUp = document.getElementById('open-modal-id-SignUp');
const btnCloseModalIdSignUp = document.getElementById('close-modal-id-SignUp');
const btnReturnToSignUp = document.getElementById('return-SignUp-id');

btnOpenModalIdSignUp.onclick = function () {
    modalSignUp.classList.remove('hidden');
}


btnCloseModalIdSignUp.onclick = function () {
  modalSignUp.classList.add('hidden');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnReturnToSignUp.onclick = function () {
  modalSignUp.classList.add('hidden');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// End-Sign-Up
// Start-Sign-In
const BtnSignIn = document.getElementById('For-Sign-Up');
const modalSignIn = document.getElementById('test2');
const btnOpenModalIdSignIn = document.getElementById('open-modal-id-SignIn');
const btnCloseModalIdSignIn = document.getElementById('close-modal-id-SignIn');

btnOpenModalIdSignIn.onclick = function () {
    modalSignIn.classList.remove('hidden');
}

btnCloseModalIdSignIn.onclick = function () {
  modalSignIn.classList.add('hidden');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// End-Sign-In