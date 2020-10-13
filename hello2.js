var btn=document.getElementById("btn").addEventListener("click",getPost);
var con=0;
var div = document.getElementById("cardDiv");

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        return res.json();
    })

    .then((post)=>{
        for (let index = 0; index < 1; index++) {
            div.innerHTML+=`
            <div class="card col-3 m-1 mx-auto">
            
                <div class="card-body">
                    <h5 class="card-title">Id: ${post[con].id}</h5>
                    <p class="card-text">Name: ${post[con].name}</p>
                    <p class="card-text">UserName: ${post[con].username}</p>
                    <p class="card-text">Email: ${post[con].email}</p>
                    <h5 class="card-title">Address:</h5>
                    <p class="card-text">${post[con].address["street"]}</p>
                    <p class="card-text">${post[con].address["suite"]}</p>
                    <p class="card-text">${post[con].address["city"]}</p>
                    <p class="card-text">${post[con].address["zipcode"]}</p>
                    <p class="card-text">Website: ${post[con].website}</p>
                    <p class="card-text">Phone No: ${post[con].phone}</p>
                    <h5 class="card-text">Company</h5>
                    <p class="card-text">${post[con].company["name"]}</p>
                    <p class="card-text">${post[con].company["catchPhrase"]}</p>
                    <p class="card-text">${post[con].company["bs"]}</p>
                    <p class="card-text">

                </div>
            </div>
            
            `
            con=con+1;
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}