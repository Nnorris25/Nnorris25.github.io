const wannaChatButton = document.getElementById('wannaChatButton');
let open = false;
wannaChatButton.addEventListener('click', function(){
	const para = document.querySelector('p');
	if (open) {
		para.classList.remove('popped') 
		wannaChatButton.innerText = 'Wanna Chat?';
	}else{
		para.classList.add('popped');
		wannaChatButton.innerText = 'See ya!';
	}
	open = !open;
});
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

const openModal = function() {
  document.body.classList.add('modal-open');
};

const closeModal = function() {
  document.body.classList.remove('modal-open');
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

const iconLink = document.querySelector('.google-thumb');

let modalOpenTimeout = null;

iconLink.addEventListener('mouseover', function() {
  modalOpenTimeout = setTimeout(openModal, 1000);
});

iconLink.addEventListener('mouseout', function() {
  clearTimeout(modalOpenTimeout);
  closeModal();
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.collapsible("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}