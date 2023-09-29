function f() 
{
    window.location.replace("search.html");
}

// acest cod este preluat de pe un formu si cata modiicat  de retinut

function search() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".articles");
    li = ul.getElementsByTagName('li');
    let resultsDiv = document.querySelector('.rezults');

    let count = 0;

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        count++;
      } else {
        li[i].style.display = "none";
      }
    }
    resultsDiv.innerText = "Rezultate: " + count;
  }
  

let searchbtn,menubtn,close,menu;

  searchbtn = document.querySelector('.search')
  menubtn = document.querySelector('.menu')
  menu = document.querySelector('.menu-open')
  close = document.querySelector('.close')

  searchbtn.addEventListener('click', ()=> {
    window.location.replace("search.html");
  })

  menubtn.addEventListener('click', ()=> {

    menu.style.display = 'block'

  })

  close.addEventListener('click', ()=> {

    menu.style.display = 'none'

  })


 