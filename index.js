console.log('this is project 4');

// grab username
const username =document.getElementById('username');
const email =document.getElementById('email');
const number =document.getElementById('number');
let validName = false;
let validEmail = false;
let validNumber = false;
let sucess = document.getElementById('sucess');
let failure = document.getElementById('failure');
$('#sucess').hide();
$('#failure').hide();
username.addEventListener('blur' , ()=>{
    console.log('username is blured');
    let str = username.value;
    console.log(str);
    const regex = /^([a-zA-z]+)([a-zA-Z0-9]+){2,10}$/;
    if(regex.test(str)){
        console.log('it matched');
        username.classList.add('is-valid');
        username.classList.remove('is-invalid');
        validName = true;
    }else{
        console.log('not matched');
        username.classList.add('is-invalid');
        username.classList.remove('is-valid'); 
        validName = false;
    }
});
// username.addEventListener('input' , ()=>{
//     console.log('username is blured');
//     let str = username.value;
//     console.log(str);
//     const regex = /^([a-zA-z]+)([a-zA-Z0-9]+){2,10}$/;
//     if(regex.test(str)){
//         console.log('it matched');
//         username.classList.add('is-valid');
//         username.classList.remove('is-invalid');
//         validName = true;
//     }else{
//         console.log('not matched');
//         username.classList.add('is-invalid');
//         username.classList.remove('is-valid'); 
//         validName = false;
//     }
// });

email.addEventListener('blur' , ()=>{
    console.log('email is blured');
    let str = email.value;
    console.log(str);
    // let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ /;
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const regex = /^[a-zA-z]([a-zA-Z0-9])@([a-zA-Z])\.([a-zA-Z]){0,10}$/;
   if(regex.test(str)){
       console.log('it matched');
       email.classList.add('is-valid');
       email.classList.remove('is-invalid');
       validEmail = true;
   }else{
       console.log('not matched');
       email.classList.add('is-invalid');
       email.classList.remove('is-valid');
       validEmail = false;
   }
});
emailk.addEventListener('input',()=>{
    console.log("Just checking that its working aur not otherwise its your wise you can do")
    let strcheking = email.value;
    console.log(strcheking)
})
// email.addEventListener('input' , ()=>{
//     console.log('email is blured');
//     let str = email.value;
//     console.log(str);
//     // let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ /;
//     regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     // const regex = /^[a-zA-z]([a-zA-Z0-9])@([a-zA-Z])\.([a-zA-Z]){0,10}$/;
//    if(regex.test(str)){
//        console.log('it matched');
//        email.classList.add('is-valid');
//        email.classList.remove('is-invalid');
//        validEmail = true;
//    }else{
//        console.log('not matched');
//        email.classList.add('is-invalid');
//        email.classList.remove('is-valid');
//        validEmail = false;
//    }
// });
number.addEventListener('blur' , ()=>{
    console.log('phone is blured');
    let str = number.value;
    console.log(str);
    const regex = /^[0-9]([0-9]+){9}$/;
    if(regex.test(str)){
        console.log('it matched');
        number.classList.add('is-valid');
        number.classList.remove('is-invalid');
        validNumber = true;
    }else{
        console.log('not matched');
        number.classList.remove('is-valid');
        number.classList.add('is-invalid');
        validNumber = false;
       
    }
});


// number.addEventListener('input' , ()=>{
//     console.log('phone is blured');
//     let str = number.value;
//     console.log(str);
//     const regex = /^[0-9]([0-9]+){9}$/;
//     if(regex.test(str)){
//         console.log('it matched');
//         number.classList.add('is-valid');
//         number.classList.remove('is-invalid');
//         validNumber = true;
//     }else{
//         console.log('not matched');
//         number.classList.remove('is-valid');
//         number.classList.add('is-invalid');
//         validNumber = false;
       
//     }
// });
let submit = document.getElementById('submit');

submit.addEventListener('click' , (e)=>{
    e.preventDefault();
    console.log('you submitted data');
    if(validNumber && validName && validEmail){
        console.log(validEmail , validName , validNumber);
        sucess.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#sucess').show();
    }else{
        failure.classList.add('show');
        // sucess.classList.remove('show');
        $('#sucess').hide();
        $('#failure').show();
    }
});
