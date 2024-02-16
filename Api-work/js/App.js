function loadData2(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(raw => ShowData(raw))
}

function ShowData(raw){
    console.log(raw)
}