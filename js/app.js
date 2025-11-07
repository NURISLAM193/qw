
let items = document.querySelectorAll('header a');
let ps = document.querySelectorAll('main p');

items.forEach(item => {
  item.addEventListener('click', (event) => {

    items.forEach(el => el.classList.remove('active'));
    ps.forEach(el => el.classList.remove('active'));

    item.classList.add('active');

    event.preventDefault();
  });
});


let lis = document.querySelectorAll('ul li');

lis.forEach(li => {
  li.addEventListener('click', () => {

    lis.forEach(el => el.classList.remove('active'));

    
    li.classList.add('active');
  });
});

