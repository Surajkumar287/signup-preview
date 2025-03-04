let data = localStorage.getItem("data");
debugger
let imgData = localStorage.getItem("imgData64");
if (imgData) {
    imgData = JSON.parse(imgData);
}
else {
    alert("data null")
}

let imgElement = document.getElementById("img");
imgElement.style.display = "block";
imgElement.src = imgData.img;

console.log(data);
data = JSON.parse(data);

let sName = document.getElementById("name").value = data.name;
let sEmail = document.getElementById("email").value = data.email;
let sPhone = document.getElementById("phone").value = data.phone;
let address = document.getElementById("address").value = data.address;