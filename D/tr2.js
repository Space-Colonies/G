var sec=0,page=1,fname = 'Bossman',msg='message',movieUrl="",moviePage="", TaskToHandle=1,TaskId="";

var  startValue = 6000, initData,id2='537920146';

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  var endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 1000,
    progressColor = "grey";
  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = startValue;
    progressValue.style.color = progressColor;

    innerCircle.style.backgroundColor = "#2e2e2e";
    progressBar.style.background = 'conic-gradient('+progressColor +','+startValue * (360/endValue)+'deg,#3e3e3e 0)';
    
    /*progressBar.style.background = 'conic-gradient(${progressColor} ${
      startValue * (360/endValue)
    }deg,darkgrey 0deg)';
    */
  }, speed);
});
 
//const tmer =setInterval(txt, 1000);

async function initfunc()
{
    try{   
    fname='Gumau';
      document.getElementById('ic').innerHTML =fname[0];
      document.getElementById('nm').innerHTML ="Hi, "+fname;
     
Telegram.WebApp.ready(); 
      await lditemsdebug();   
      Telegram.WebApp.themeParams.text_color= '#4e4e4e';
      Telegram.WebApp.setHeaderColor('#4e4e4e');
      //Telegram.WebApp.setBottomBarColor('#2e2e2e');
      Telegram.WebApp.setBackgroundColor('#2e2e2e');
          
     Telegram.WebApp.disableVerticalSwipes(); 
     //initData= Telegram.WebApp.initData;    
     id2 =  window.Telegram.WebApp.initDataUnsafe.user.id;
      fname= window.Telegram.WebApp.initDataUnsafe.user.first_name;
              
                                                         
      //setTimeout(getdt, 8000);
         
      document.getElementById('ic').innerHTML =fname[0];
      document.getElementById('nm').innerHTML ="Hi, "+fname;
     
      setInterval(txt,10000);                                               
       
    }catch(er){showAlert(er);}              
}
    
  
async function txt(){   
         
        sec =startValue; 
      
       if(sec==86000) {startValue=0;   uu.autofarm +=86000;}
      
         document.getElementById('auto').innerHTML ='Bot $Gumau : '+uu.autofarm;
             document.getElementById('tc').innerHTML ="Task $Gumau : "+uu.TaskCoins;
                          
         // document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
  
}
 


function closePopUp()
{
   ppp.style.display= "none";
}
function scrl2(el){
  //el.scrollIntoView(
 /*{ behavior: "smooth",
  block: "start", 
  inline: "nearest"}*/
//);
  header.scrollIntoView();
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
       header.textContent="HOME";
    scrl2(p1);   
       

     }
     else if(e.id=="p4b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "block";
     p3.style.display= "none";
       header.textContent="TASKS";
       scrl2(p2);
      settsk(); 
    // ppp.style.display= "none";
     }
  else if(e.id=="p5b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "flex";
     p3.style.display= "none";
       header.textContent="FREQUENTLY ASKED QUESTIONS";
       scrl2(p2);
      setpg(); 
    //ppp.style.display= "none";
     }
     else if(e.id=="p3b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "flex";
       header.textContent="ABOUT";
       document.getElementById("txt9").innerHTML=aa;
       scrl2(p3);
    
       
     }
    else if(e.id=="p2b") 
     {
       
       showAlert("Sorry, this page wil be made available before the first widthrawal date." );
      
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

   





function showinvite(e)
{
          TaskToHandle= 5;TaskId="";
          msg='Get unlimited $Gumau inviting as many frens as you can. Each invite earns you 1,000,000 $Gumau per new user. You can copy your referral link below.';
    document.getElementById('bt1').innerHTML ='Copy referal link to clipboard';
    document.getElementById('bt2').innerHTML ='Share referral link';          
    document.getElementById('pop').innerHTML =msg;
          ppp.style.height= '80%';
          ppp.style.display= "flex";            
}

function ShowAd(e)
{
     TaskToHandle= 2;TaskId="";
    msg="Watch ads to get 100,000 $Gumau per ad view. If you don't have our MC app installed already, you will have to download and install it first which will give you access to download our game and earn 2,000,000 $Gumau for first time installation of the game after you watch your first ad.";
  document.getElementById('bt1').innerHTML ='Watch ads to earn $Gumau';
    document.getElementById('bt2').innerHTML ='Download MC app';
  document.getElementById('pop').innerHTML =msg;
  ppp.style.height= '90%';     
  ppp.style.display= "flex";       
          
}

function Showapp(e)
{
     TaskToHandle= 3;TaskId=e.id;
    msg="Download Gumau Coin Android app to earn 100,000 $Gumau each time you watch an ad.";
          document.getElementById('bt1').innerHTML ='Download app now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
     ppp.style.height= '80%';     
    ppp.style.display= "flex";       
          
}

function Showtg(e)
{
     TaskToHandle= 4;TaskId=e.id;
    msg="Join our Telegram group to earn 100,000 $Gumau. ";
          document.getElementById('bt1').innerHTML ='Join our Telegram group now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
    ppp.style.height= '90%';     
    ppp.style.display= "flex";       
          
}
function Showtc(e)
{
     TaskToHandle= 6;TaskId=e.id;
    msg="Subscribe to our Telegram channel to earn 200,000 $Gumau.";
    document.getElementById('bt1').innerHTML ='Subscribe to channel now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
    ppp.style.height= '70%';     
    ppp.style.display= "flex";       
  
}
function Showyt(e)
{
     TaskToHandle= 7;TaskId=e.id;
    msg="Watch a Youtube video to earn 300,000 $Gumau.";
    document.getElementById('bt1').innerHTML ='Watch video now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
    ppp.style.height= '70%';     
    ppp.style.display= "flex";       
  
}
 
var link2open,closeapp=false;
function openApp(browser)
{  
  let br=[  'default','chrome','firefox','safari','opera' ];
 /* if(link2open.includes('maniadl') )
  {
     if(uu.TaskCoins >=300000)
            {
             uu.TaskCoins-=200000; 
           // Telegram.WebApp.openLink(v  ,{try_browser:'chrome'});
              savedebug();
            }else{ showAlert("Not enough Task $Gumau. Watch ad or carryout some other tasks and try again." ); return;}
     
  }
  
  if(browser==0){ Telegram.WebApp.openLink(link2open,{try_instant_view:false});}
  else if(link2open.includes('mc2025.mc') ){link2open= link2open.replace('http://mc2025.mc/','https://movizbot.github.io/a');  Telegram.WebApp.openLink(link2open,{try_browser:br[browser]});}
  else{ Telegram.WebApp.openLink(link2open,{try_browser:br[browser]});  }
  */
  Telegram.WebApp.openLink(link2open,{try_browser:br[1]});  
  if(closeapp) setTimeout(close,30000);
  
}


function closeOptions(){ appotions.style.display='none';}
 async function HandleTask(e)
{ 
          if(e==bt1){
    if(TaskToHandle==1)
          { 
           link2open=movieUrl;
            //ldvid(movieUrl);
          }   
   else if(TaskToHandle==2)
          { 
                    
       // u[0].rwd= 'Sani'; let str=  JSON.stringify(u[0]);
           uu.rwd= fname;uu.ask1= new Date().getTime().toString(); 
            let str= uu.autofarm +'-'+ uu.TaskCoins +'-'+ uu.refId +'-'+ uu.Ref +'-'+ uu.ask1 +'-'+ uu.rwd +'-'+ uu.yts +'-'+ new Date(uu.signUpdt).toLocaleDateString()+'-'+ new Date(uu.activedt).toLocaleDateString() +'-'+ new Date(uu.lastLogindt).toLocaleDateString();

            //let str= JSON.stringify(uu);
         savedebug();
            let st="https://gumaucoin.github.io/d/?action="+ "mbadsd_"+ str;// +"#Intent;scheme=mc;package=com.mcgames.mcapp;end";
            //let st="<a href='intent://mc2025.mc/ytvid#Intent;scheme=mc;package=com.mcgames.mcapp;end'> Watch ad now</a>";
      link2open=st;closeapp=true;
          }   
  else if(TaskToHandle==3)
          { 
                    //Telegram.WebApp.openLink('https://sundayib.github.io/P/',{try_instant_view:false});
            //link2open='https://mcoin2025.github.io/Apps/Downloads/';
            Telegram.WebApp.openTelegramLink('https://t.me/gumauchannel');
              return;
          }   
  else if(TaskToHandle==4)
          { if(!uu.others.includes('grp')){uu.others=uu.others+ 'grp'; uu.TaskCoins +=100000;savedebug();}
            
         Telegram.WebApp.openTelegramLink('https://t.me/gumaucoin');
              
            
                return;
          }
  else if(TaskToHandle==5)
          { 
            let code= await getrefcode();
                    navigator.clipboard.writeText(code);
                    showAlert('Referral link has been copied to clipboard.');
            uu.refId= code;
            savedebug();return;
          }
    else if(TaskToHandle==6)
            { 
              if(!uu.others.includes('chch')){ uu.others=uu.others+ 'chch'; uu.TaskCoins +=100000;savedebug();}
             Telegram.WebApp.openTelegramLink('https://t.me/gumauchannel');
            
               
              return;
            }
            else if(TaskToHandle==7)
          { 
                    
           uu.rwd= fname;uu.ask1= new Date().getTime().toString(); 
            let str= uu.autofarm +'-'+ uu.TaskCoins +'-'+ uu.refId +'-'+ uu.Ref +'-'+ uu.ask1 +'-'+ uu.rwd +'-'+ uu.yts +'-'+ new Date(uu.signUpdt).toLocaleDateString()+'-'+ new Date(uu.activedt).toLocaleDateString() +'-'+ new Date(uu.lastLogindt).toLocaleDateString();

            //let str= JSON.stringify(uu);
         savedebug();
            let st="https://gumaucoin.github.io/d/?action=ytvidd_"+ str;// +"#Intent;scheme=mc;package=com.mcgames.mcapp;end";
           link2open=st; closeapp=true;
          }   
          else
          { 
                    showAlert('Task is empty '+TaskToHandle);
            return;
          }   
          }
          else
          {
             if(TaskToHandle==1)
          { 
            link2open=moviePage;
            
          }   
   else if(TaskToHandle==2)
          { 
                    
            //link2open='https://t.me/gumaucoin';
            Telegram.WebApp.openTelegramLink('https://t.me/gumauchannel');
              return;
          }  
        else if(TaskToHandle==5)
          { 
            
            Telegram.WebApp.openTelegramLink('https://t.me/share/url?url='+uu.refId+'&text=You are invited to join Gumau Coin today.');
            return;
          }      
  else 
          { 
            ppp.style.display= "none";return;
          }   
            
          }
 // appotions.style.display='flex';
  openApp(1);
  ppp.style.display= "none";
}


//HOME ENDS

 async function getdt()
{
          
var weekdt = new Date("14/April/2025 20:30:00");
var now = new Date();
          
 if(weekdt.getTime()>now.getTime() || now.getTime()- weekdt.getTime()> 2580000000){ showAlert("Your phone date is not correct. Set it and try again. The app will close automatically."); close(); return;}
  if(now.getTime() - (new Date(uu.lastLogindt).getTime()) > 2752000000 ) { uu.autofarm=0; uu.activedt=now.toISOString(); showAlert("It has been more than 30 days since your last login and because of this your bot coin has reset to zero. To avoid similar situation, try to login at least once every 30 days." )} 
 uu.lastLogindt=now.toString();
       
  /*save("uu.lastLogindt",now.toString()); */
           
    if(new Date( uu.signUpdt).getTime() > now.getTime) uu.signUpdt=now.toString();
         
          let d = new Date();
let h = d.getHours() * 3600;
let m = d.getMinutes() * 60;
 //sec = d.getSeconds() + h  + m; 
      startValue =  d.getSeconds() + h  + m;   
          var diff = now.getTime() - uu.activedt.getTime();
    uu.autofarm= Math.floor((diff )/ (1000)) - startValue;
     if(uu.autofarm<0)uu.autofarm=0;
 
}       
    

const nameOf = async(v) =>(v).toString().replace(/[ |\(\)=>]/g,'').substring(5);
  var u=[];// [u1,u2,u3,u4,u5,u6];
  function user(autofarm,TaskCoins ,refId,Ref,ask1,rwd,yts,signUpdt,activedt,lastLogindt,install,vidshare,others)
  { 
    this.autofarm=autofarm;
    this.TaskCoins=TaskCoins;
    this.refId=refId;
    this.Ref=Ref;
    this.ask1=ask1;
    this.rwd=rwd;
    this.yts=yts;
    this.signUpdt=signUpdt;
    this.activedt=activedt;
    this.lastLogindt= lastLogindt;  
    this.install = install;  
    this.vidshare = vidshare;  
    this.others = others;                                                   
                               
  }
  async function  savedebug(key,value)
{
          try{
         
            let saver ="";
            try{saver=JSON.stringify(uu); }catch(x){/*showAlert(x);*/}           
Telegram.WebApp.CloudStorage.setItem('data2', saver, function(err, saved) {
                if (err) 
                   {
                     showAlert('Error: ' + err);
                   } 
           else {
                    if (saved)
                   {
                       //showAlert('saved');
                    }
                    
                }
            });
          } catch(err){ showAlert("Error saving : "+err);}
    }
  
  function nu()
  {
    u[0]=new user(60,1000000 ,'y','q','6ask',60,60,Date().toString(),new Date().toString(),new Date().toString(),0, new Date(2025-03-10).toString(),'6k');
  }
  var uu;
  async function cloud(x){uu=u[0];savedebug();}
   //async function cloud(){ alert(await nameOf(()=>u[0].signUpdt) +'  '+  u1.signUpdt); }
  async function  lditemsdebug() {
            let res='';
                    Telegram.WebApp.CloudStorage.getItem("data2", function(err, value) {
                      let save=false;
                            if (err) {
                                showAlert('Error reading from cloud: ' + err);
                                      //for (let i=0;i<keys.length;i++)save(keys[i],"z");
                            } else {
                        
                       if(value.length<20){save=true; value= JSON.stringify(u[0]); showAlert("Welcome! You've been awarded 1,000,000 $Gumau as a welcome bonus." ); }   
    uu=JSON.parse(value);
    uu.signUpdt =new Date(uu.signUpdt);
    uu.activedt =new Date(uu.activedt);
    uu.lastLogindt =new Date(uu.lastLogindt);
    
                         for(let prop in uu)
                              { 
                      if(uu[prop].toString().length >0){ }     
                      else if(prop.toString()=="TaskCoins"){ uu[prop]=0;}
                      else if(prop.toString()=="refId"){ /*uu[prop]=getrefcode();*/}
                      else if(prop.toString()=="ref"){/*uu[prop]="noref";*/}
                      else if(prop.toString()=="ask1"){ /*uu[prop]="nil";*/}
                      else if(prop.toString()=="rwd"){ uu[prop]=0;}
                      else if(prop.toString()=="yts"){uu[prop]=0; }
                      else if(prop.toString()=="signUpdt"){ uu[prop]=new Date();}
                      else if(prop.toString()=="activedt"){ uu[prop]=new Date();}
                      else if(prop.toString()=="lastLogindt"){ uu[prop]=new Date();}
                                
                         //  res=res+' <obj>' +prop +' = '+uu[prop]+'</obj>' ;       
                         }
                              //document.getElementById('ff').innerHTML=res;
                  //if(save){setTimeout( savedebug,5000);   alert(save.toString());}
                       getQuery();
                            }
                           
                        });
    
                  
        }
  function tttoo(p4,p5){
      movIndex =p4; 
     let i=Number(p5); let urll= lis[i].HLink.replace("dlmania","maniadl" );
      showAlert(urll);    ldvid(urll);ShowMovieList(); scrl2(lis[i].Hid);
      
    }
async function getQuery(isref=false)
{
 //Params = new URLSearchParams(window.location.search);
   try{
  let Params = /*"RSsFYFYAM2RSsdZduSRSsFdw4ERan1LVPsiVzndy673e2ed";//*/Telegram.WebApp.initDataUnsafe.start_param;
  if(Params.includes('dy673e2ed')){Params=Params.replace('dy673e2ed','');  Params=dec(Params);   }
    // alert(Params);
     if(Params.includes('ask181890'))
          {
          //  alert('ask181890');
           let [p1,p2,p3]= Params.split("-") ; 
           //alert(p3);
            if(uu.ask1 == p3)  
           {
             //alert('awarded');
              Award(p2*100000) ;
             if(p1.includes(  "ytvid"))showAlert("You've earned "+(p2*100000)+ "$Gumau for watching a video. " );else showAlert("You've earned "+(p2*100000)+ "$Gumau for watching ads." );
              if(uu.yts<100 ){Award( 2000000);
                  uu.yts=2000000; showAlert("Congratulations! You have been awarded 2,000,000 $Gumau for installing our app.");}            
             
           } else  showAlert("To get rewarded for a task, you need to start it from the task section. ");                             
          }
     /*else if(Params.includes('yts'))
  {
    let [p1,p2]= Params.split("-");
    
    //if(vidCodes.includes(p2))Award( 200000);
  }*/
        else if(Params.includes('reference' ))
  {
    //let [f1,f2,f3,f4,f5]=Params.split('-');
     let z=Params.split('-');
     
     if(z.length>3)
    {
      ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "none";
      
      fl=z[1];//f3;  
      let url=url2+"List"+fl+".json";
    getJSON(url).then(data => {
    lis=data;
      let i=Number(z[3]); //(f5); 
      let urll= lis[i].HLink.replace("dlmania","maniadl" );
      movIndex = z[2]; //f4; 
      ShowMovieList(); scrl2(document.getElementById(lis[i].Hid));
}).catch(error => {
  //showAlert(error);
});
     }
  
    if(uu.Ref === 'q')
    {
     
      let refcode=Params.substring(Params.lastIndexOf('_')+1);   //.split('_')[1];
      
      if(refcode.includes('-')) refcode=refcode.slice(0,refcode.indexOf('-'));
      
    let code= await getrefcode(false); //uu.refId= code;
      
    //if(! code.includes(refcode))
      {uu.Ref= refcode;
      await sendMsg(code+'===='+refcode );
        //alert('sent ref  ');
      }
  }
                               
  }  else{if (isref)uu.Ref='noref' ;}
     if(uu.Ref.length < 4 && Params.length<3)uu.Ref='noref';
   }catch(x){ /*alert(x);*/}
  if(uu.refId.length<3)uu.refId= await getrefcode();
  //uu.lastLogindt=new Date();    
     getdt(); savedebug();   
}


  var en='KeWoVaQn5x';
async function getrefcode(url=true)
{   let n='',id2= window.Telegram.WebApp.initDataUnsafe.user.id.toString();
        //showAlert(id2);
  for(let i=0;i<id2.length;i++)
    {
   n=n+ en[id2[i]];
    }
  let res= '';
  if(url)res='https://t.me/Gumau_bot/Gumau?startapp=reference_' + n;
  else res=n;
  return res;
}

  
  function deldebug(){
    
  Telegram.WebApp.CloudStorage.removeItem('data2', function(err, deleted) {
                if (err) {
                  showAlert('Error: ' + err);
                } else {
                    if (deleted) {showAlert('deleted');return; }
                  
                }
  });
  
}
  
  nu();
 //lditemsdebug();
   

function Award(am)
{
  uu.TaskCoins+=am;
  
}

function showAlert(message) {
         //alert(message);
          //  Telegram.WebApp.showAlert( 'message);
  
  Telegram.WebApp.showPopup({
                title  : 'GCoin',
                message: message,
                buttons: [
                    
    {id: 'faq', type: 'default', text: 'Ok'},
                    {type: 'cancel'},
                ]
            }, function (buttonId) { }
  );
  
  
  
  
}

 function tsk(ic,title,desc,click,id=0)
{
  this.ic=ic;
  this.title=title;
  this.desc=desc;
  this.click=click;
  this.id=id;
  
  let txt='Go',col= ' grey';
  if(click.length <2) {txt='done';col=' grey';}
 let temp=  '<div class="ncontainerT">'
  +'<div class="dv1" >'
            +'<div class="dv2">'+ic +'</div>'
         +'</div>'
        +'<div class="dv3" >'
          +'<div style=" font-size: 24px; ">'+ title + '</div>'
              +'<div>'+desc+'</div>'
           +'</div>'
          +'<button id="'+id+'" class="bt" style="color:'+ col +'"  onclick="'+click+'(this );">'+txt+'</button>'
     +'</div>';
   let b=document.getElementById("p2").innerHTML +temp;
    document.getElementById("p2").innerHTML=b;
        
  
}

 function settsk()
{
  document.getElementById("p2").innerHTML="";
  
  tsk('F','Frens Invite','Invite frens to earn unlimited $Gumau','showinvite');
  tsk('A','Android App',' Download app from channel','Showapp');
  tsk('G','TG Group ','Join TG group to earn 100,000 $Gumau','Showtg');
  tsk('C','TG Channel','Subscribe to Telegram channel to earn $Gumau','Showtc');
  tsk('M','Mobile ads view','View ads to earn $Gumau ','ShowAd');
  tsk('Y','YouTube Vids','Earn 300,000 $Gumau per YT video watched','Showyt');
  //tsk('V','Video Share','Earn 500,000 $Gumau for video share','vsharein4');
  
}


var titles=[ 'one', 'two', 'three', 'four', 'five', 'six', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ','thirteen ', 'fourteen ', 'fifteen ', 'sixteen ','seventeen ', 'eighteen ', 'nineteen ','twenty', 'twenty one','twenty two ', 'twenty three ', 'twenty four ', 'twenty five ','twenty six ', 'twenty seven ', 'twenty eight ', 'twenty nine ','thirty ', 'thirty one', 'thirty two', 'thirty three ','thirty four ', 'thirty five ', 'thirty six ', 'thirty seven ','thirty eight ', 'thirty nine ', 'forty ', 'forty one ','forty two ','forty three ','forty four ','forty five ','forty six '] ;

 

 function setpg()
{
  document.getElementById("p2").innerHTML= ' <div class="ncontainerabt" style="padding:80px 10px ">1. Am I required to make any deposit or pay for gas fee before airdrop? </br>No, you only need to participate in carrying out tasks. </br> 2. How much time will Gumau cost me? </br> It will cost you around 7 to 15 minutes a day if you were to watch at least 10 mobile ads. </br> 3.Am I required to login daily, weekly or monthly? </br> You are required to carry out at least one task every 30 days to keep your farm bot active failure to which your bot $Gumau will be cleared but your task $Gumau will remain unaffected. </br>4. For how long do I have to participate before getting qualified for airdrop? </br>There is no time frame but the longer you participate,the better the chance of bigger airdrop. You can also widthraw your earnings at every month end. </br> 5. What is the value of Gumau? </br> That ' + "can't"+ ' be estimated at the moment but at every month end, a value will be estimated for the sake of the people who may want to widthraw their earnings. </br>6. How long is mining going to last for? </br> Most likely before the end of 2025 but it all depend on the number of active users we have. For example less than 100,000 active users may take about a year ; 100,000 to 200,000 may take about 7 months; 400,000 and beyond may take about 4 to 5 months but this timeline is not guaranteed.  </br>7. Is Gumau backed by any investment? </br>Not at the moment, GCoin rely on revenue generated mostly from ads. However, GCoin is working hard to attract investors.  </br>8. How much should I be expecting? </br> That cannot be estimated for now. </br>9. What is the easiest way to earn Gumau? The easiest way is through referral which gives you 100,000 $Gumau for every new user that uses your referral link. </br>10. When did farming begin? Farming began in May, 2025.</div>';
  
}

function pld(e)
{
  for(let i=0;i<titles.length;i++) {if(e.id==titles[i]){fl=i+1; break;}}
  if(fl<11)glis(url2+"List"+fl+".json"); else showAlert("You can only load pages one to ten at the moment. Other pages will be released as soon as we get more users.");
  
}
//PAGE 3
var lis = ﻿[];
const getJSON = async url => {
  const response = await fetch(url);
  if(!response.ok)  showAlert("Error : "+response.statusText);
  const data = response.json();
  return data;
  }

  var fl=1, url2="https://sundayib.github.io/Mtest/D/";
 async function glis(url)
{
  
  getJSON(url).then(data => {
 //alert(data);
    lis=data;movIndex=0;
    ShowMovieList(); 
}).catch(error => {
  showAlert(error);
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
    
    
    
    
    var temp = '<div id='+ Hid+' class="frame">'
        +'<div id="tit" style="font-size:5vh; margin: 20px"> '+tit+'</div>'
 //+'<img src='+img+ ' style="height: 50vh; width:38vh;"/>'
 +'<div id="len"style="font-size:4vh"> Duration : '+len+ '</div>'
      +'<div id="des"style="font-size: 3vh; margin-left: 20px; margin-right: 20px"> DESCRIPTION :'+ des +' </div>'
     +'<button class="bt3" style="color:  grey;background: #101010;border:1px solid  grey;" onclick="shareMovie(this);" id="share" name= '+Hid+'>Share Video </button>'
  
  +'<button class="bt3" style="color:  grey;background: #101010;border:1px solid  grey;" onclick="showmovie(this);" id='+hre+' name= '+Hid+'>Watch or download ('+hsi+')</button>'
  +'<button class="bt3" style="color: #101010;background:  grey;border:1px solid  grey;" onclick="showmovie(this);" id='+lre+' name= '+Lid+'>Watch or download ('+lsi+')</button>'
  
  +'</div>';
        let b=document.getElementById("p3content").innerHTML +temp;
    document.getElementById("p3content").innerHTML=b;
  
}

 function ShowMovieList()
{
    ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "block";
       scrl2(p3);
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
  let p=  " ";  //"http://daib.github.io/P/img/"+str+".jpg";
  return p;
}
 
 async function nex()
{
  
     // if(movIndex==lis.length-9) { if(fl<45){fl=fl+1; await glis(url2+ "List"+fl+".json");movIndex= 0;ShowMovieList(); return;} showAlert("End of page reached"); }
     
  if(movIndex +10 <lis.length) movIndex+=10; else {movIndex=lis.length-9; showAlert("End of page reached. Go to pages section to load more movies."); }
    ShowMovieList();   
}
 async function prev()
{
   if(movIndex>=10)
    {
       movIndex= movIndex-10;
     ShowMovieList();   
      
    }
    else //{ if(fl>0){fl=fl-1; await glis(url2+ "List"+fl+".json"); movIndex= lis.length-9;ShowMovieList();  return;} }
      showAlert("You are already on the first page.");
}

var g17 = "ttt2", a17 = "OdRXDTEL79gzAwmiyVK3j0Zs4PN5l6GCxoSIkBe28bfpunqaMYWUrQ1cvhHt-JF_", c17 = "_H3jUo1hTAOqpPe-CtDZGM5SfwkI6vNcmzQXsBrLYng4ulJR7yE8axFKWiV2b09d",yybb="iMM2r7++.2LaM9g9vA.WaSAv+_SMuxYFwwVVVx7QQcWPWSz6/Vki.AKl84fsOjoqQnrnWTfMFv+r95lb9rr.v9";
        function enco( en) { let f = ""; for (let i = 0; i < en.length; i++) { f = f + (c17[a17.indexOf(en[i])]); } return f + ObsString(); }
        function dec( de) { let f = ""; for (let i = 0; i < de.length; i++) { f = f + (a17[c17.indexOf(de[i])]); } return f.slice(0,f.lastIndexOf('-')); }
        function rnd(min, max) { return Math.floor(Math.random() * (max - min) ) + min;}     
       
        function ObsString()
        {
            let ez = "",e=[];
            for (let i = 0; i < 15; i++) { e[i]=rnd(0, a17.length ); }
            for (let i = 0; i < e.length; i++) ez = ez + a17[e[i]];
            ez= ez.replace(/b/g,"w");ez=ez.replace(/B/g,"x");
            return c17[a17.indexOf('-')] + ez;
        }
  

 async function sendMsg(rf)
{
 //alert("started");
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'User-Agent': 'Telegram',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    text: rf,
    chat_id: '-1002278007970',
    
    disable_web_page_preview: true,
    disable_notification: true
    
  })
};
//det();
 await fetch( (t81+t83), options)
  .then(res => res.json())
  .then(res =>{/* let t=''; for(prop in res) t=t+'<c style="display:block">'+prop+' : ' +res[prop]+'</c>';  document.getElementById('ff').innerHTML=t*/})
  .catch(err => alert(err +  '   '+ t81+t83));
  
}
let t81='https://api.telegram.org/bo',t83='t7804298505:AAETQ_UsQGUlmxdzqcp_H9lE015NAurOvAQ/sendMessage',t84='9lE015NAurOvAQ/sendMessage',t85='',t86='',t87='';
var aa=    "<p> I am Sunday Ibrahim, just a regular guy like most struggling Nigerians who work hard day after day to cater for their needs in this hard economy. I believe that when we work together scratching each other's back as average Nigerians, we can make our lives better because no one will do that for us.</p>"
          +"<p> I have a personal project which relies on the success of this app and after I succeeded, I guarantee all users of this app that the free gift coming from the project will surpass what any user could ever think of. Of course this doesn't mean that you won't widthraw your reward at the end of the month but I say this to make you serious about this project and when free gifts from the proceeds of the other project starts going round, you won't say you weren't told. The project is not related to digital token or any software and I know that it will succeed before the end of 2026 if Gcoin succeeded. You may think I deliberately keep you in suspense about the other project but I don't. I simply decide not to say it because you won't believe me and it will make me look like just another scammer trying to get people use his app. So, I say focus on your monthly earnings from this project if you have any doubt. </p>"
          +"<p>Finally, people who know me very well know how I cherish my privacy and how sensitive I am to pictures or having my name circulate around let alone the internet but the very fact that I decided to sacrifice that and put my image on this app should convince all those that really know me very well how dead serious I am.</p>";
         

initfunc();






  

          