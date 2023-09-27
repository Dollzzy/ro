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

  
  