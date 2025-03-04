function submit(){
    let sName = document.getElementById("name").value;
    let sEmail=document.getElementById("email").value;
    let sPhone=document.getElementById("phone").value;
    let sAddress=document.getElementById("address").value;
    let sPhoto=document.getElementById("photo").value;

    let signUpData={
        "name":sName,
        "email":sEmail,
        "phone":sPhone,
        "address":sPhone,
        "photo":sPhoto
    };
debugger
    let img=document.getElementById("photo");
    let uploadFile=img.files[0];

    let file= new FileReader();
    file.onload=function(event){
        debugger
        let img64={
            img:event.target.result
        }
        localStorage.setItem("imgData64",JSON.stringify(img64))
    }
    console.log(signUpData);

    localStorage.setItem("data",JSON.stringify(signUpData));
    file.readAsDataURL(uploadFile);
    window.location.href ="preview.html";
}