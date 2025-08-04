const copy = document.getElementById("copy");
const btn= document.getElementById("btn");

btn.addEventListener('click', function(){
    copy.select();
    document.execCommand("copy");
})