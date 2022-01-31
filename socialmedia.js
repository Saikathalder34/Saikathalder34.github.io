
function movingplate(pole1, pole2, plateno)
{   
    var start;
    var end;
     // this is for pole1 to pole2 or pole3
     // i need to do it for pole2 to any pole
     // i need to do it for pole3 to any pole
    if(pole1==1)
    {start=120 - (plateno -1)*10;
    end= start+ (pole2 -pole1)*300;}
    if(pole1==2)
    {   
        start=420 - (plateno -1)*10;
        end=start + (pole2 - pole1) * 300;
    }
    if(pole1==3){
        start = 720 -(plateno -1)*10;
        end = start + (pole2 - pole1) * 300;
    }
    var pos=start;
    
    let x=setInterval(animate, 1);
    function animate()
    {   
        
        var s= "plate" + String(plateno);
        var  ob=document.getElementById(s);
        if(pos==end)
        {
            clearInterval(x);
        }
        else if(pos<end)
        {
            pos++;
            ob.style.left= pos+ "px";
        }
        else{
            pos--;
            ob.style.left= pos+ "px";
        }
    }

}
// start pole , destine pole , plate no.
//movingplate(1 , 2, 1);
//setTimeout(movingplate , 10000 ,2,3,1);
let ar=[];
let i=0;
function towerofbrahmaji(plate ,s , d , h)
{
    if(plate==1)
    {
        ar[i]=[s, d , plate];
        i++;
        return;
    }
    towerofbrahmaji(plate-1 , s , h ,d);
    ar[i]=[s , d , plate];
    i++;
    towerofbrahmaji(plate-1, h , d , s);

}

function start_timer()
{   
    
    var k=0;
    var h=0;
    let x=setInterval(time , 1000 );
    document.getElementById("timer").innerHTML="";
    document.getElementById("timer").style.letterSpacing="3px";
    function time()
    {	
        if(k == 60)
        { 
             k=0;
            h++;
        }
        document.getElementById("timer").innerHTML=h + "min : " + k+"sec";
        k++;
    }
}
//main
function actualcall()
{   
    start_timer();
    var k=3000;
    for(var j=0;j<ar.length;j++)
    {
        setTimeout(movingplate , k ,ar[j][0], ar[j][1], ar[j][2]);
        k+=3000;
    }
}
towerofbrahmaji(7 ,1 , 3, 2);




