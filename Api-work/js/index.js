function loadusers2(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(raw => ShowData(raw))
}
function ShowData(raw){
    for (const every of raw)
    {
        console.log(every.name);
    }
}