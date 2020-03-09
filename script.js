const btn=document.querySelector('.btn-click');


const inputBtn=document.querySelector('#input-btn');

btn.addEventListener('click',function(e){

    if(inputBtn.value==""){
        e.preventDefault();
        // console.log("Please enter a value")
        showAlert("Please enter a value","danger");

    }else{
    e.preventDefault();
    // alert("laff");
    console.log(inputBtn.value );
    showAlert("You've successfully entered the correct value chick","success");
    document.querySelector('.submit-msg').innerHTML=inputBtn.value;
    inputBtn.value="";
}})


function showAlert(message,className){
    const div=document.createElement('div');
    div.className=`alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    // const container=document.querySelector('.form-container');
    // const form=document.querySelector('#book-form');

    const formGroup=document.querySelector('.form-group');
    const inputBtn=document.querySelector('#input-btn');
    formGroup.insertBefore(div,inputBtn);
    setTimeout(function(){
        document.querySelector('.alert').remove();
     },3000)


}