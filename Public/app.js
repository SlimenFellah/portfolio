let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll(".logo")

const reload = () => {
    setTimeout(()=>{
    logoSpan.forEach((span,index) => {
        setTimeout(()=>{
            span.classList.add('active')
        }, (index +1) * 400)
    })

    setTimeout(()=>{
        logoSpan.forEach((span,index) =>{
            setTimeout(()=>{
                span.classList.remove('active')
                span.classList.add('fade')
            },(index +1) *50)
        })
    },2000)

    setTimeout(()=>{
        intro.style.top = '-100vh'
    },2300)
})
}
window.addEventListener('DOMContentLoaded',()=>{
    reload()
/*
    setTimeout(()=>{
         logoSpan.forEach((span,index) => {
            setTimeout(()=>{
                span.classList.add('active')
            }, (index +1) * 400)
        })

        setTimeout(()=>{
            logoSpan.forEach((span,index) =>{
                setTimeout(()=>{
                    span.classList.remove('active')
                    span.classList.add('fade')
                },(index +1) *50)
            })
        },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh'
        },2300)
    })
*/      
})

function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
   
}
const openmenuBtn = document.getElementById('openmenuBtn')
const seeWorkBtn = document.getElementById('seeWorkBtn')
const submitBtn = document.getElementById('submitBtn')
const arrow1 = document.getElementById('arrow1')
const arrow2 = document.getElementById('arrow2')
const workArea = document.getElementById('workArea')
const footer = document.getElementById('footer')
let body = document.getElementById('body');
let breakTag = document.getElementById('break')
let dmimg = document.getElementById('dmImg')
let workT = document.querySelectorAll('#workT')


nameInp = document.getElementById('nameInp');
nameerr = document.getElementById('nameerr');
nameL = document.getElementById('nameL');
emailInp = document.getElementById('emailInp');
emailerr = document.getElementById('emailerr');
emailL = document.getElementById('emailL');
subjectInp = document.getElementById('subjectInp');
subjecterr = document.getElementById('subjecterr');
subjectL = document.getElementById('subjectL');
messageInp = document.getElementById('messageInp');
messageerr = document.getElementById('messageerr');
messageL = document.getElementById('messageL');

aboutlink = document.getElementById('aboutlink')
myworklink = document.getElementById('myworklink')
contactlink = document.getElementById('contactlink')

errorTag = document.getElementById('errorTag');
form = document.getElementById('form')


const switchmode = () => {
    logo.classList.toggle('text-black')
    logo.classList.toggle('text-white')
    intro.classList.toggle('bg-white')
    intro.classList.toggle('bg-black')
    logoSpan.forEach((span,index) =>{
            span.classList.remove('fade')
    })
    intro.style.top = '0vh'
    reload()
    toggleMenu()
    setTimeout(()=>{
        body.classList.toggle('bg-black')
        body.classList.toggle('text-white')
        body.classList.toggle('bg-white')
        body.classList.toggle('text-black')
        menu.classList.toggle('md:bg-black')
        menu.classList.toggle('md:text-white')
        menu.classList.toggle('md:bg-white')
        menu.classList.toggle('md:bg-black')
        dmimg.classList.toggle('md:invert')
        openmenuBtn.classList.toggle('invert')
        seeWorkBtn.classList.toggle('invert')
        submitBtn.classList.toggle('invert')
        arrow1.classList.toggle('invert')
        arrow2.classList.toggle('invert')
        footer.classList.toggle('invert')
        breakTag.classList.toggle('bg-bg1i')
        breakTag.classList.toggle('bg-bg1')
        workArea.classList.toggle('bg-bg1s')
        workArea.classList.toggle('bg-bg1is')
        nameInp.classList.toggle('border-black')
        emailInp.classList.toggle('border-black')
        subjectInp.classList.toggle('border-black')
        messageInp.classList.toggle('border-black')
        aboutlink.classList.toggle('hover-underline-animation-wm')
        aboutlink.classList.toggle('hover-underline-animation-dm')
        myworklink.classList.toggle('hover-underline-animation-wm')
        myworklink.classList.toggle('hover-underline-animation-dm')
        contactlink.classList.toggle('hover-underline-animation-wm')
        contactlink.classList.toggle('hover-underline-animation-dm')
        workT.forEach((work) => {
            work.classList.toggle('text-white')
            work.classList.toggle('text-black')
        })
        
    },1000)
    
}


const hidemenuBtn = document.getElementById('hidemenuBtn')
const menu = document.getElementById('menu')

const toggleMenu = () => {
    menu.classList.toggle('fixed')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
    openmenuBtn.classList.toggle('hidden')
    setTimeout(()=>{
        //menu.classList.toggle('hideUpAnimation')
        
    },1000)
}


const phrases = ['Computer science student ...', 'Web developer ...','Freelancer ...', 'Ai & Cyber Security enthusiast ...']
const typewriter = document.querySelector('.typewriter')
let sleeptime = 100
let curphraseindex = 0
const writeloop = async () => {
    
    while(true){
        let currentword = phrases[curphraseindex];
        for(let i=0;i < currentword.length;i++){
            typewriter.innerText = currentword.substring(0,i+1)
            await sleep(sleeptime)
        }
        await sleep(sleeptime * 10)
        for(let i=currentword.length ;i>0 ;i--){
            typewriter.innerText = currentword.substring(0,i-1)
            await sleep(sleeptime)
        }
        await sleep(sleeptime)
        
        if (curphraseindex === phrases.length-1){
            curphraseindex = 0;
        } else{
            curphraseindex++;
        } 
    }
}
writeloop()

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInp.value))
  {
    return (true)
  }
    return (false)
}



function getMachineId() {
    let machineId = localStorage.getItem('MachineId');
    
    if (!machineId) {
        machineId = crypto.randomUUID();
        localStorage.setItem('MachineId', machineId);
    }
    return machineId;
}


// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     let messages = []
//     if (nameInp.value === '' || nameInp.value == null){
//         messages.push({
//             type : "name",
//             text : "Name is invalid !"})
//     }
//     if (!ValidateEmail(emailInp.value) || emailInp.value === '' || emailInp.value == null){
//         messages.push({
//             type : "email",
//             text : "Email is invalid !"})
//     }
//     if (subjectInp.value === '' || subjectInp.value == null){
//         messages.push({
//             type : "subject",
//             text : "Subject is invalid !"})
//     }
//     if (messageInp.value === '' || messageInp.value == null){
//         messages.push({
//             type : "message",
//             text : "Message is invalid !"})
//     }
    
//     if(messages.length > 0){
//         form.scrollIntoView();
//         messages.forEach(async (msg) => {
//             const {type, text} = msg;
//             const typeE = type.concat('err')
//             const typeI = type.concat('Inp')
//             const typeL = type.concat('L')

//             typeEdom = document.getElementById(typeE);
//             typeIdom = document.getElementById(typeI);
//             typeLdom = document.getElementById(typeL);
//             typeEdom.innerText = text;
//             typeIdom.classList.add('inpError')
//             typeLdom.classList.add('labelError')
//         })
//         setTimeout(()=>{
//             messages.forEach( (msg) => {
//                 const {type} = msg;
//                 const typeE = type.concat('err')
//                 const typeI = type.concat('Inp')
//                 const typeL = type.concat('L')
//                 typeEdom = document.getElementById(typeE);
//                 typeIdom = document.getElementById(typeI);
//                 typeLdom = document.getElementById(typeL);
//                 typeEdom.textContent = '­'
//                 typeIdom.classList.remove('inpError')
//                 typeLdom.classList.remove('labelError')
//                 })
//         },2000)
//     }
//     else{
//         let id = getMachineId()
//         var VisitorAPI = function(t,e,a){var s=new XMLHttpRequest;s.onreadystatechange=function(){var t;s.readyState===XMLHttpRequest.DONE&&(200===(t=JSON.parse(s.responseText)).status?e(t.data):a(t.status,t.result))},s.open("GET","https://api.visitorapi.com/api/?pid="+t),s.send(null)};
//         new VisitorAPI(
//             "S0gv64BePlK2ufSLKCfX",
//             async function(Udata){
//                 var currentdate = new Date(); 
//                 console.log(Udata)
//                 var datetime = currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + " @ "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ":" 
//                 + currentdate.getSeconds();
//                 const msgbody = {
//                     id: id,
//                     city : Udata.city,
//                     cityLatLong : Udata.cityLatLong,
//                     countryName : Udata.countryName,
//                     ipAddress : Udata.ipAddress,
//                     deviceBrand : Udata.deviceBrand,
//                     deviceFamily : Udata.deviceFamily,
//                     deviceModel : Udata.deviceModel,
//                     browser : Udata.browser,
//                     os : Udata.os,
//                     osVersion : Udata.osVersion,
//                     date : datetime,
//                 };
//                 const {data} = await axios.post('/messagedata', JSON.stringify(msgbody))
//             },
//             function(errorCode, errorMessage){console.log(errorCode, errorMessage)}
//         );
        
//         var currentdate = new Date(); 
//         var datetime = currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + " @ "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ":" 
//                 + currentdate.getSeconds();
//         const msgbody = {
//             name : nameInp.value,
//             email : emailInp.value,
//             subject : subjectInp.value,
//             message : messageInp.value,
//             date : datetime,
//             id : id,
//         };
//         const {data} = await axios.post('/', JSON.stringify(msgbody))
//         nameInp.value = ""
//         emailInp.value = ""
//         subjectInp.value = ""
//         messageInp.value = ""
//         messageerr.innerHTML = "MESSAGE SENT SUCCESSFULLY ! THANKS"
//         messageerr.classList.add('sucess')
//         setTimeout(()=>{
//             messageerr.classList.remove('sucess')
//             messageerr.innerHTML = "&nbsp; &nbsp;"
//         },2000)
//     }
// })

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
        
    })
})

let hiddenElements = document.querySelectorAll('.hid')

hiddenElements.forEach((elem)=>{
    observer.observe(elem)
})

// let id = getMachineId()
// var VisitorAPI = function(t,e,a){var s=new XMLHttpRequest;s.onreadystatechange=function(){var t;s.readyState===XMLHttpRequest.DONE&&(200===(t=JSON.parse(s.responseText)).status?e(t.data):a(t.status,t.result))},s.open("GET","https://api.visitorapi.com/api/?pid="+t),s.send(null)};
// new VisitorAPI(
//             "S0gv64BePlK2ufSLKCfX",
//             async function(Udata){
//                 var currentdate = new Date(); 
//                 console.log(Udata)
//                 var datetime = currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + " @ "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ":" 
//                 + currentdate.getSeconds();
//                 const msgbody = {
//                     id: id,
//                     city : Udata.city,
//                     cityLatLong : Udata.cityLatLong,
//                     countryName : Udata.countryName,
//                     ipAddress : Udata.ipAddress,
//                     deviceBrand : Udata.deviceBrand,
//                     deviceFamily : Udata.deviceFamily,
//                     deviceModel : Udata.deviceModel,
//                     browser : Udata.browser,
//                     os : Udata.os,
//                     osVersion : Udata.osVersion,
//                     date : datetime,
//                 };
//                 const {data} = await axios.post('/visitordata', JSON.stringify(msgbody))
//             },
//             function(errorCode, errorMessage){console.log(errorCode, errorMessage)}
//     );