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

  let menupc = document.querySelector('.menu-open-pc');
  let informatii = document.querySelector('.info-pc');
  let setari = document.querySelector('.setari-pc');
  let materi = document.querySelector('.materi-pc');
  let linkContainer = document.querySelector('.main-pc-menu'); // Containerul pentru linkuri
  
  informatii.addEventListener('click', function(event) {
    event.stopPropagation();
    menupc.style.display = 'block';
    
    // Afișează linkurile corespunzătoare opțiunii "Info"
    linkContainer.innerHTML = `
    <a href="Contact.html">Contact</a>
    <a href="Informatii.html">Informatii</a>
    <a href="">Creator</a>
    `;
  });
  
  setari.addEventListener('click', function(event) {
    event.stopPropagation();
    menupc.style.display = 'block';
    
    // Afișează linkurile corespunzătoare opțiunii "Setari"
    linkContainer.innerHTML = `
      Negasit
    `;
  });
  
  materi.addEventListener('click', function(event) {
    event.stopPropagation();
    menupc.style.display = 'block';
    
    // Afișează linkurile corespunzătoare opțiunii "Materi"
    linkContainer.innerHTML = `
     Negasit
    `;
  });
  
  document.addEventListener('click', function(event) {
    menupc.style.display = 'none';
  });
  