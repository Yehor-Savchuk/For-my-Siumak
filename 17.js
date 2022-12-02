document.getElementById('inputPassword').oninput = checkPass;
function checkPass(){
  if (document.getElementById('inputPassword').value == '68940'){
    document.getElementById('aPass').style.display = 'block';
  }
}
