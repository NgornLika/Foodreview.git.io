const menu =[
    {
        'page_menu':'Home',
        'link':'#',
    },
    {
        'page_menu':'Khmer',
        'link':'khmer.html',
    },
    {
        'page_menu':'Thai',
        'link':'thai.html',
    },
    {
        'page_menu':'Vietnamese',
        'link':'vietnam.html',
    },
    {
        'page_menu':'Korea',
        'link':'korean.html',
    },
    {
        'page_menu':'Europe',
        'link':'europe.html',
    },
    
    {
        'page_menu':'Health food',
        'link':'health-food.html',
    },
];
var  pageMenu='';
for(let i in menu){
   pageMenu += `<li><a href="${menu[i]['link']}">${menu[i]['page_menu']}</a></li>`;
}
document.getElementsByClassName('page-menu')[0].innerHTML=`<ul>${pageMenu}</ul>`;
//////////////logo///////////
const pageName=[
    {
        pagename : 'Great-FooD'
    }
];
for(let i in pageName){
    var pagename=pageName[i]['pagename'];
}
document.getElementById('page-name').innerHTML=pagename;

const logo=[
    {
        'id':'https://i.pinimg.com/736x/c4/c9/8a/c4c98a02ddf96fb83b6db6fc3319158e.jpg'
    }
];
var pageLogo ='';
for(let i in logo){
    pageLogo = `<img src="${logo[i]['id']}" alt="">`;
}
document.getElementsByClassName('logo')[0].innerHTML=pageLogo;
// document.getElementsByClassName('footer-logo')[0].innerHTML=pageLogo;

// Footer //
const address=[
    {
        'address':'<i class="fa-solid fa-location-dot"></i> Saang Kandal,Phnom Penh,Cambodia <br>'
    },
    {
        'address':'<i class="fa-brands fa-telegram"></i> +855 16 ### ###'
    },
];
var _address='';
for(let i in address){
    _address += `<a href="#">${address[i]['address']}</a>`;
}
document.getElementsByClassName('about')[0].innerHTML=_address;

const social=[
    {
        'follow' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png',
        'url':'https://www.facebook.com/profile.php?id=100039996099054&sk=about'
    },
    {
        'follow' : 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
        'url':'https://www.instagram.com/____lykakaa_____/'
    },
    {
        'follow' : 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png',
        'url':'https://www.youtube.com/channel/UCiGLlE80vF3gFDExOhujoMw'
    },
];
var link='';
for(let i in social){
    link +=`<a href="${social[i]['url']}" target="_blank">
                <img src="${social[i]['follow']}" alt="">
            </a>`;
}
document.getElementsByClassName('label')[0].innerHTML=link;

// login //
document.getElementById('icon').addEventListener('click',function(){
    document.getElementById('login-box').style.display='none';
    document.getElementById('Shadow_box').style.display='none';
})
document.getElementById('wrong').addEventListener('click',function(){
    document.getElementById('register-box').style.display='none';
    document.getElementById('Shadow_box').style.display='none';
})
var check=false;
Login=()=>{
    if(!check){ 
        document.getElementById('Shadow_box').style.display='flex';
        document.getElementById('login-box').style.display='flex';
        check=true;
    }else{
        document.getElementById('Shadow_box').style.display='flex';
        document.getElementById('login-box').style.display='flex';
        check =!true;
        console.log(check)
    }
}

var email =document.getElementById('email');
var password =document.getElementById('password');
BLogin=()=>{
    let pass='12345';
    let user='admin@gmail.com';
    if(email.value !="" && password !=""){
        if(email.value==user && password.value==pass){
             swal({
                title : "Login Success",
                text:"Account has been login!",
                icon: "success",
                button: "Aww yiss",
             }).then((result) =>{
                if(result){
                    // window.location.href='dasboard.html';
                    window.location.href='index.html';
                }
             }).catch((err)=>{
                if(err){
                    swal({
                        title : "Login Field !",
                        text:"Have something wrong!",
                        icon: "error",
                        button: "Aww yiss",
                    });
                }
             })
             
        }else{
            swal({
                title : "Login Field !",
                text:"Have something wrong!",
                icon: "error",
                button: "Aww yiss",
            });
        }
    }else{
        swal({
            title : "Field !",
            text:"Can't login!",
            icon: "error",
            button: "Aww yiss",
        });
    }

}

Register_log=()=>{
    document.getElementById('login-box').style.display='none';
    document.getElementById('register-box').style.display='flex';
}
document.getElementById('acc_login').addEventListener('click',function(){
    document.getElementById('register-box').style.display='none';
    document.getElementById('login-box').style.display='flex';
    document.getElementById('Shadow_box').style.display='flex';
})