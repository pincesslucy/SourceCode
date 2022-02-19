
function enterkey() {
	if (window.event.keyCode == 13) {
    next_page()
    }
}

function next_page() {
    const p1 = document.getElementById('inputPassword').value;
    if( p1 != 2627 ) {
        alert("비밀번호불일치");
    } else{
        location.href="1_week.html";
    }

}

//ajax
function fetchpage(name){
    fetch(name).then(function(response){
      response.text().then(function(text){
        document.querySelector('article').innerHTML = text;
      })
    });
  }
  if(location.hash){
    fetchpage(location.hash.substring(2));
  } else {
    fetchpage('1_week_vscode');
  }