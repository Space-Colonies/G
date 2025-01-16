
var sec=0,autofarm=0,TaskCoins=0,page=1,fname = 'Bossman',msg='message',movieUrl="",moviePage="", TaskToHandle=1,refId="",ref="",ask1="",rwd=0,yts="";
var signUpdt;//= new Date("9/Dec/2089 00:00:00");
var activedt;//= new Date("9/Dec/2024 00:00:00");
	var lastLogindt;//= new Date();

var  startValue = 6000, initData,id2='537920146';

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  var endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 1000,
    progressColor = "grey";//progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = "#2e2e2e";

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * (360/endValue)
    }deg,darkgrey 0deg)`;
    /*if (startValue === endValue) {
      clearInterval(progress);
    }*/
  }, speed);
});
 

const tmer =setInterval(txt, 1000);
const tmer2 =setTimeout(getdt, 7000);

 
async function initfunc()
{
    try{   
    
Telegram.WebApp.ready(); 
       Telegram.WebApp.setHeaderColor('#2e2e2e');       
     Telegram.WebApp.disableVerticalSwipes(); 
     //initData= Telegram.WebApp.initData;    
     id2 =  window.Telegram.WebApp.initDataUnsafe.user.id;  
      fname= window.Telegram.WebApp.initDataUnsafe.user.first_name;
              //navigator.clipboard.writeText(window.Telegram.WebApp.initData);
             // alert("initData:  "+window.Telegram.WebApp.initData);
    await lditems();                                                      
       
      document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
     document.getElementById('tc').innerHTML ="Task Coins : "+TaskCoins;
                                                            
       
    }catch(er){showAlert(er);}              
}
    
  
async function txt(){   
         //startValue=sec;
        sec =startValue; 
      
       if(sec==86000) {startValue=0;   autofarm +=86000;}
      
         document.getElementById('auto').innerHTML ='Bot coin : '+autofarm;
             
         // document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
                                 
          
}
 


function closePopUp()
{
   ppp.style.display= "none";
          
}
function pageld(e){
    // alert("ffffff");
 if(e.id=="p1b") 
     {
     ppp.style.display= "none";
     p1.style.display= "block";
     p2.style.display= "none";
     p3.style.display= "none";
    // ppp.style.display= "none";
     }
     else if(e.id=="p4b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "block";
     p3.style.display= "none";
      settsk(); 
    // ppp.style.display= "none";
     }
  else if(e.id=="p5b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "block";
     p3.style.display= "none";
      setpg(); 
    // ppp.style.display= "none";
     }
     else if(e.id=="p3b") 
     {
       glis(url2+ "List"+fl+".json");
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "block";
      ShowMovieList();            
    // ppp.style.display= "none";
     }
    else if(e.id=="p2b") 
     {
       glis(url2+a1);
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "block";
      ShowMovieList();            
    // ppp.style.display= "none";
     }
}
 function showpops(ms,b1,b2,height,task)
{
     msg=ms;
          document.getElementById('bt1').innerHTML =b1;
          document.getElementById('bt2').innerHTML =b2;
          document.getElementById('pop').innerHTML =msg;
          ppp.style.height= height;
          ppp.style.display= "flex";            
}
function showmovie(e)
{
     movieUrl=e.id; 
      if(e.id.includes("://hd"))    
     moviePage= "https://hdmania2.net/showmovie.php?id=" +e.name;   
    else  moviePage= "https://mp4mania1.net/showmovie.php?id=" +e.name;   
                   
     TaskToHandle= 1;    
     let msg='Watch or download the movie directly at the cost of 100,000 coins or visit the movie web page at zero cost. ';
          let b1='Watch or dowload directly';
    let b2 ='Visit movie page';          
    let height= '80%';
          showpops(msg,b1,b2,height);
}


function showinvite()
{
          TaskToHandle= 5;
          msg='Get unlimited coins inviting as many frens as you can. Each invite earns you 100,000 coins per new user. You can copy your referral link below.';
    document.getElementById('bt1').innerHTML ='Copy referal link to clipboard';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;
          ppp.style.height= '80%';
          ppp.style.display= "flex";            
}

//GET REFERRAL CODE
var en='KeWoVaQn5x',rfc;
function getrefcode()
{   let n='';
          alert(id2);
  for(let i=0;i<id2.length;i++)
    {
   n=n+ en[id2[i]];
    }
    //alert(rfc);
         return n;
}

     function  requestWriteAccess() {
            Telegram.WebApp.requestWriteAccess(function(allowed) {
                if (allowed) {
                    alert('Access granted');
                    
                } else {
                  alert('Write access was denied');
                }
            });
        }





function ShowAd()
{
     TaskToHandle= 2;
    msg="Watch ads to get 200,000 coin per ad. If you don't have the whot game installed already, you will have to download and install it from Amazon app store first which will give you 1,000,000 coins for first time installation. If you don't have Amazon app store installed on your device, you may have to install it first before installing Whot.";
    document.getElementById('bt1').innerHTML ='Watch ads from our mobile game';
    document.getElementById('bt2').innerHTML ='Download app from Amazon ';          
    document.getElementById('pop').innerHTML =msg;
          ppp.style.height= '90%';     
    ppp.style.display= "flex";       
          
}

function ShowYt()
{
     TaskToHandle= 3;
    msg="Watch the Youtube video to the end without fast forwarding to earn 500,000 coins.";
          document.getElementById('bt1').innerHTML ='Watch video now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
     ppp.style.height= '80%';     
    ppp.style.display= "flex";       
          
}

function ShowWebsite()
{
     TaskToHandle= 4;
    msg="Subscribe to YouTube channel to earn 1,000,000 coins.  Reward for the subscription may take upto 72 hours  before being awarded in order to prevent cheating through different verification processes. Penalty for cheating is 3,000,000 coins deduction.";
          document.getElementById('bt1').innerHTML ='Subscribe to channel now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
     ppp.style.height= '90%';     
    ppp.style.display= "flex";       
          
}

function HandleTask(e)
{ 
          if(e==bt1){
    if(TaskToHandle==1)
          { 
            Telegram.WebApp.openLink(movieUrl  ,{try_instant_view:false});
            //window.open(movieUrl);
          }   
   else if(TaskToHandle==2)
          { 
                    showAlert('Task is mobile ad');
          }   
  else if(TaskToHandle==3)
          { 
                    showAlert('Task is mobile YT');
          }   
  else if(TaskToHandle==4)
          { 
                    showAlert('Task is yt subcription ');
          }
  else if(TaskToHandle==5)
          { 
            requestWriteAccess();
                    navigator.clipboard.writeText(getrefcode());
                    showAlert('Referral link copied.');
          }
                              
          else
          { 
                    showAlert('Task is empty '+TaskToHandle);
          }   
          }
          else
          {
             if(TaskToHandle==1)
          { showAlert(moviePage);//window.open(moviePage);
          }   
   else if(TaskToHandle==2)
          { 
                    window.open('amazonapplink');
          }   
  else 
          { 
                    ppp.style.display= "none";
          }   
      
                    
                 
          }
}




//HOME ENDS


 async function getdt()
{
          
var weekdt = new Date("16/Dec/2024 20:30:00");
var now = new Date();
          
 if(weekdt.getTime()>now.getTime() || now.getTime()- weekdt.getTime()> 2580000000){ showAlert("Your phone date is not correct. Set it and try again. The app will close automatically."); close(); return;}
  if(now.getTime() -lastLogindt.getTime() > 2752000000 ) { autofarm=0; activedt=now; save("activedt",now.toString()); showAlert("It has been more than 30 days since your last login and because of this your bot coin has reset to zero. To avoid similar situation, try to login at least once every 30 days." )} 
 lastLogindt=now;
       
  /*save("lastLogindt",now.toString()); */
           
    if(signUpdt.getTime() > now.getTime) save("signUpdt",now.toString());
         
          let d = new Date();
let h = d.getHours() * 3600;
let m = d.getMinutes() * 60;
 //sec = d.getSeconds() + h  + m; 
      startValue =  d.getSeconds() + h  + m;   
          var diff = now.getTime() - activedt.getTime();
    autofarm= Math.floor((diff )/ (1000)) - startValue;
     if(autofarm<0)autofarm=0;
 
}       
    



  
   function getQuery(isref=false)
{
 //Params = new URLSearchParams(window.location.search);
    Params = window.Telegram.WebApp.initDataUnsafe.start_param;
  
           if(Params.has('ask'))
          {
           let [p1,p2]=   Params.split("_") ;  
 if(ask1 == p2)  
           {
              Award() ;     
           }                               
          }
        else if(Params.has('ref'))
  {
    let refcode=Params.split('_')[1];
    save('ref',refcode);
    //send bot msg
     sendMsg(id+'===='+refcode);
                                
  }  else{if (isref)save('ref','noref');   }
        /*  if(Params.has('ask'))
          {
            let  askcode=Params.get('ask');
                    if(ask1 == askcode)  
           {
              Award() ;     
           }                    
          }
          else if(Params.has('ref'))
  {
    let refcode=Params.get('ref');
    save('ref',refcode);
    //send bot msg
     sendMsg(id+'='+refcode);
                               
  }
  else
  {
            if(!ref.length > 2)
            {
    save('ref','noref');
            }
  }*/
}

function Award()
{
    if(rwd >0)save("rwd","0") ;    
}


async function  save(key,value)
{
     /*     try{
  Telegram.WebApp.setHeaderColor('#2e2e2e');
                  
Telegram.WebApp.CloudStorage.setItem(key, value, function(err, saved) {
                if (err) 
                   {
                     showAlert('Error: ' + err);
                   } 
           else {
                    if (saved)
                   {
                        //bot 2 send msg
                    }
                    
                }
            });
          } catch(err){ showAlert("setittem "+err);}
    */
}


 function getItem(key) {
            
                    
                        Telegram.WebApp.CloudStorage.getItem(key, function(err, value) {
                            if (err) {
                                showAlert('Error: ' + err);
                            }
                          else {
                                
                                //use value
                            }
                          
                        });
                    
                   }


 async function  lditems() {
            /*
           let keys= ["autofarm","TaskCoins" ,"refId","ref","ask1","rwd","yts","signUpdt","activedt","lastLogindt"];
   for(let i=0;i<keys.length;i++) del(keys[i]);
                        Telegram.WebApp.CloudStorage.getItems(keys, function(err, values) {
                            if (err) {
                                showAlert('Error reading 4m cloud: ' + err);
                                      //for (let i=0;i<keys.length;i++)save(keys[i],"z");
                            } else {
                                
                           // if(goAhead(values[keys[0]])) autofarm = values[keys[0]]; else autofarm=0;
                                   if(goAhead(values[keys[1]]))  TaskCoins = values[keys[1]]; else TaskCoins = 0;
                                  if(goAhead(values[keys[2]]))   refId = values[keys[2]]; else refId = getrefcode();
                                  if(goAhead(values[keys[3]]))   ref = values[keys[3]]; else ref = "nil"; 
                                  if(goAhead(values[keys[4]]))   ask1 = values[keys[4]]; else ask1 = "";
                                  if(goAhead(values[keys[5]]))   rwd = values[keys[5]]; else rwd = 0;
                                  if(goAhead(values[keys[6]]))  yts = values[keys[6]]; else yts = 0;
                                  if(goAhead(values[keys[7]]))   signUpdt = new Date(values[keys[7]]); else signUpdt = new Date();
                                   if(goAhead(values[keys[8]]))  activedt = new Date(values[keys[8]]);  else activedt = new Date() ;
                                  if(goAhead(values[keys[9]]))   lastLogindt = new Date(values[keys[9]]); else lastLogindt = new Date();
                              
                              document.getElementById('t1').innerHTML ="Task Coins : "+TaskCoins;
                              document.getElementById('t2').innerHTML =" refId : "+refId;
                              document.getElementById('t3').innerHTML ="ref : "+ref;
                              document.getElementById('t4').innerHTML =" ask1 : "+ask1;
                              document.getElementById('t5').innerHTML =" rwd : "+rwd;
                              document.getElementById('t6').innerHTML ="yts : "+yts;
                              document.getElementById('t7').innerHTML =" signUpdt : "+signUpdt;
                              document.getElementById('t8').innerHTML ="activedt : "+activedt;
                              document.getElementById('t9').innerHTML ="lastLogindt : "+lastLogindt;
                             // document.getElementById('t8').innerHTML ="activedt : "+activedt;
                              
                            }
                           
                        });
      //await save(keys[0], autofarm);
                            /*  await save(keys[1], TaskCoins);
                              await save(keys[2],refId );
                              await save(keys[3],ref );
                              await save(keys[4], ask1);
                              await save(keys[5], rwd);
                              await save(keys[6], yts);
                              await save(keys[7], signUpdt);
                              await save(keys[8], activedt);
                             await save(keys[9], lastLogindt);
                             */ 
                    
        }

function del(key){
  Telegram.WebApp.CloudStorage.removeItem( key , function(err, deleted) {
                if (err) {
                  alert('Error: ' + err);
                } else {
                    if (deleted) {return; }
                      
                }
  });
  
}

 function goAhead(o)
{
  if(o.length > 1) return true;else return false;       
}



   function  sendMsg(msg)
{
  Telegram.WebApp.sendData(msg);
 /*fetch("https://api.telegram.org/bot{HTTP_API_TOKEN}/sendMessage?chat_id={CHAT_ID}&text={"+msg+"}")
  .then((response) => {
     if (!response.ok) {
      throw new Error("Network response was not ok");
    }
            return response.json();
  })
  .then((data) => console.log(data));
  */
  
}

function showAlert(message) {
         alert(message);
            //Telegram.WebApp.showAlert("V2 "+message);
        }

 function tsk(ic,title,desc,click)
{
  this.ic=ic;
  this.title=title;
  this.desc=desc;
  this.click=click;
  
  
  let txt='Go',col= 'white';
  if(click.length <2) {txt='done';col='grey';}
 let temp=  '<div class="ncontainerT">'
  +'<div class="dv1" >'
            +'<div class="dv2">'+ic +'</div>'
         +'</div>'
        +'<div class="dv3" >'
          +'<div style=" font-size: 24px; ">'+ title + '</div>'
              +'<div>'+desc+'</div>'
           +'</div>'
          +'<button class="bt" style="color:'+ col +'"  onclick="'+click+'();">'+txt+'</button>'
     +'</div>';
   let b=document.getElementById("p2").innerHTML +temp;
    document.getElementById("p2").innerHTML=b;
        
  
}

 function settsk()
{
  document.getElementById("p2").innerHTML="";
        
  tsk('F','Frens Invite','Invite frens to earn unlimited MCoins','showinvite');
  tsk('Y','Youtube',' Best movies part one','ShowYt');
  tsk('YC','YT Channel ','Subscribe to YouTube channel to earn coins','ShowWebsite');
  tsk('TC','TG Channel','Subscribe to Telegram channel to earn coins','ShowWebsite');
  tsk('M','Mobile ads view','View ads to earn MCoins ','ShowAd');
  
  
}








var titles=[ 'one', 'two', 'three', 'four', 'five', 'six', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ','thirteen ', 'fourteen ', 'fifteen ', 'sixteen ','seventeen ', 'eighteen ', 'nineteen ','twenty', 'twenty one','twenty two ', 'twenty three ', 'twenty four ', 'twenty five ','twenty six ', 'twenty seven ', 'twenty eight ', 'twenty nine ','thirty ', 'thirty one', 'thirty two', 'thirty three ','thirty four ', 'thirty five ', 'thirty six ', 'thirty seven ','thirty eight ', 'thirty nine ', 'forty ', 'forty one ','forty two ','forty three ','forty four ','forty five ','forty six '] ;

 function pgs(ic,title,desc,id)
{
  this.ic=ic;
  this.title=title;
  this.desc=desc;
  this.id=id;
  
  let txt='Load';
  
 let temp=  '<div class="ncontainerT">'
  +'<div class="dv1" >'
            +'<div class="dv2">'+ic +'</div>'
         +'</div>'
        +'<div class="dv3" >'
          +'<div style=" font-size: 24px; ">'+ title + '</div>'
              +'<div>'+desc+'</div>'
           +'</div>'
          +'<button class="bt" id="'+ id+'" onclick="pld(this);">'+txt+'</button>'
     +'</div>';
   let b=document.getElementById("p2").innerHTML +temp;
    document.getElementById("p2").innerHTML=b;
        
  
}

 function setpg()
{
  document.getElementById("p2").innerHTML="";
        
  let ic='';
  for(let i=0;i<titles.length;i++)
  {
    if(i<9)ic='0'+(i+1); else ic=''+(i+1); 
    pgs(ic,'Page '+titles[i],'Contains videos no. '+((i*50)+1)+' to '+((i*50)+50),titles[i]);
  
  }
}

function pld(e)
{
  for(let i=0;i<titles.length;i++) {if(e.id==titles[i]){fl=i; break;}}
  glis(url2+ "List"+fl+".json");
  
  
}
// PAGE 3

var lis = ﻿[];
const getJSON = async url => {
  const response = await fetch(url);
  if(!response.ok)  alert("Error code: "+response.statusText);

  const data = response.json(); 
   
  return data;
    
  }

 
  var a1="List34.json", fl=0, a2="List35.json", url2="https://sundayib.github.io/Mtest/";
 async function glis(url)
{alert(url);
  getJSON(url).then(data => {
  alert(data);lis=data;alert(lis.length.toString());
}).catch(error => {
  alert(error);
});
 }





function get(url){
    showAlert(url.id);
}
 var movIndex=0;
 
 function ini( tit, des,img,len,hre='tttt',lre, hsi,lsi,Lid ,Hid)
{
    this.tit=tit;
    this.des=des;
    this.img=img;
    this.len=len;
    this.hre=hre;
    this.lre=lre;
    this.hsi=hsi;
    this.lsi=lsi;
    this.Lid=Lid;
    this.Hid=Hid;
    
    
    
    
    var temp = '<div id="fr" class="frame">'
        +'<div id="tit" style="font-size:5vh; margin: 20px"> '+tit+'</div>'
 //+'<img src='+img+ ' style="height: 50vh; width:38vh;"/>'
 +'<div id="len"style="font-size:4vh"> Duration : '+len+ '</div>'
      +'<div id="des"style="font-size: 3vh; margin-left: 20px; margin-right: 20px"> DESCRIPTION :'+ des +' </div>'
     
  +'<button class="bt3" style="color: white;background: #2e2e2e;border:1px solid white;" onclick="showmovie(this);" id='+hre+' name= '+Hid+'>High resolution ('+hsi+')</button>'
  +'<button class="bt3" style="color: #2e2e2e;background: white;border:1px solid white;" onclick="showmovie(this);" id='+lre+' name= '+Lid+'>Low resolution ('+lsi+')</button>'
   
  +'</div>';
        let b=document.getElementById("p3content").innerHTML +temp;
    document.getElementById("p3content").innerHTML=b;
        
    //document.body.appendChild(temp);
    
 // alert(img);
    
}
 function ShowMovieList()
{
    //alert('init');
    
    let x = 0;
    if(movIndex +10 <lis.length)x = movIndex +10;
    else x=lis.length;
     if(x>0)
    {
  document.getElementById("p3content").innerHTML= "  ";      
    for(let i= movIndex;i< x;i++)  
    {
              //"VidImgs\\"+lis[i].Lid+".jpg"
   ini(lis[i].Tit,lis[i].Des, gtim(lis[i].Lid),lis[i].Length,lis[i].HLink,lis[i].LLink,lis[i].HSize,lis[i].LSize,lis[i].Lid , lis[i].Hid);
    }
    }
     
    
}

 function gtim(str)
{
  let p= "http://sundayib.github.io/P/img/"+str+".jpg";
  
  return p;
}
 
 async function nex()
{
   
     ShowMovieList();   
      if(movIndex==lis.length-9) { if(fl<45){fl=fl+1; await glis(url2+ "List"+fl+".json");movIndex= 0;ShowMovieList(); return;} showAlert("End of page reached"); }
    if(movIndex +10 <lis.length) movIndex+=10; else movIndex=lis.length-9;
    
}
 async function prev()
{
   if(movIndex>=10)
    {
       movIndex= movIndex-10;
     ShowMovieList();   
      
    }
    else { if(fl>0){fl=fl-1; await glis(url2+ "List"+fl+".json"); movIndex= lis.length-9;ShowMovieList();  return;} showAlert("You are already on the first page.");}
}

async function delete2(key)
{
 Telegram.WebApp.CloudStorage.removeItem(key, function(err, deleted) {
                if (err) {
                    alert('Error: ' + err);
                } else {
                    if (deleted) {
                        alert('Deleted' );
                        }
                        
                    }
                    
                
            });
}
/*function npage(){
          if(page==1){page=2;document.getElementById('p1').style.display = "none";
                    document.getElementById('container').style.display = "block";
                    
                    
          }
        else{ page=1;document.getElementById('container').style.display = "none";
                    document.getElementById('p1').style.display = "block";
                       }  
}
*/
initfunc();

 // settsk();    
//setpg();
          