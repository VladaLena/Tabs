// const tabHeaders = document.querySelectorAll('[data-tab]');
// const contentBoxes = document.querySelectorAll('[data-tab-content]')

// tabHeaders.forEach(function(item){
//     item.addEventListener('click', function(){

//         contentBoxes.forEach(function(item){
//             item.classList.add('d-none');
//         });

//         const contentBox = document.querySelector('#' + this.dataset.tab);
//         contentBox.classList.remove('d-none');
//     })
// })

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });

    contents.forEach(function (content) {
      content.classList.remove("live");
    });

    e.target.classList.add("live");

    const element = document.getElementById(id);
    element.classList.add("live");
  }
});
