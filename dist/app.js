// const fill = document.querySelector('.filled');
// const fillTwo = document.querySelector('.filled-2');
// const fillThree = document.querySelector('.filled-2');

const emtyBoxes = document.querySelectorAll('.empty');
const fills = document.querySelectorAll('.fill');


fills.forEach(fill => {
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);
})

emtyBoxes.forEach(box => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);

});

function dragOver(e) {
  e.preventDefault();

}

function dragEnter(e) {
  e.target.classList.add('hover');
}

function dragLeave(e) {
  e.target.classList.remove('hover');
}

function dragDrop(e) {

  fills.forEach(fill => {
    if(fill.classList.contains('invisible')){
      e.target.appendChild(fill)
    }
  })

  e.target.classList.remove('hover');


}


function dragStart(e) {
  e.target.classList.add('hold');


  setTimeout(() => {
    e.target.classList.add('invisible')
  }, 0);
};


function dragEnd(e) {

  // const id = e.target.id;

  // const currentImg = document.querySelector(`#${id}`);

  // const currentImgClass = currentImg.className;

  // fills.forEach(fill => {
  //   if(fill.id === id){
  //     fill.className = currentImgClass;
  //     fill.classList.remove('invisible');
  //     fill.classList.remove('hold');
  //   };
  // })

  e.target.classList.remove('invisible');
  e.target.classList.remove('hold');


  
}

