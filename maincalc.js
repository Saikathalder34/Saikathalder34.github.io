var start=false;
function gethistory(){
    
    return document.getElementById("history").innerText;
}
function getresult()
{
    return document.getElementById("result").innerText;
}
function printresult(x)
{
    if(start==true)
    {document.getElementById("result").innerText=x;
    document.getElementById("result").style.backgroundColor="seashell";
    document.getElementById("result").style.fontSize="30px"}


}
function on_off()
{   
    start=true;
    his=gethistory();
    res=getresult();
    if(his!="History" && res!="type here")
    {
        printhistory("have a nice day");
        printresult("its already on")
    }
    else{
    printhistory("You are awesome")
    printresult("lets go");
    }
}
function printhistory(x)
{   
    if(start==true)
    {
    if(x=="NaN")
    { document.getElementById("history").innerText="";}
    else{
    document.getElementById("history").innerText=x;}
    }
}
function printnumber(x)
{   
    s=getresult();
    if(s=="NaN" || s=="its already on" || s=="lets go" || s=="saikathalder301@gmail.com")
    {
        printresult(x);
        printhistory("");
    }
    else{
    s=s + String(x);
    printresult(s);
    }
}
function clearall()
{
    s="";
    if(getresult()=="")
    {
        printhistory(s);
    }
    printresult(s);
}

function clearrecent()
{
    s=getresult();
    s= s.substr(0,s.length-1);
    printresult(s);
}
var op;
function printoperator(x)
{   
    op=x;
    s=getresult();
    if(s=="NaN" || s=="type here")
    {
        printresult(x);
    }
    else{
    s=s + String(x);
    printresult(s);
    }
}

function eva()
{
    fn1=getresult();
    fn=fn1.split(op);
    if(op=='+')
    {
        printhistory(fn1);
        r=parseFloat(fn[0]) + parseFloat(fn[1]);
        printresult(r);
    }
    else if(op=='-')
    {   
        printhistory(fn1);
        r=parseFloat(fn[0]) - parseFloat(fn[1]);
        printresult(r);
    }
    if(op=='x')
    {
        printhistory(fn1);
        r=parseFloat(fn[0]) * parseFloat(fn[1]);
        s=String(r);
        if(s.length>15)
        {
            s=s.split(".");
            if(s[0].length > 12)
            {   
                s[1]=s[1].substr(0,1);
                k=s[0]+s[1];
                printresult(k);
            }
        }
        else if(s.length <6 )
        {
            printresult(r);
        }
        else{
        printresult(r);
        }
    }
    if(op=='/')
    {
        printhistory(fn1);
        r=parseFloat(fn[0]) / parseFloat(fn[1]);
        s=String(r);
        k=s[s.length-1];
        s=s.substr(0,5)+k;
        printresult(s);
    }
    if(op=='%')
    {
        printhistory(fn1);
        r=parseInt(fn[0]) % parseInt(fn[1]);
        printresult(r);
    }

}
function contact()
{
    printhistory("mail at");
    var re=document.getElementById("result");
    re.innerText="saikathalder301@gmail.com";
    re.style.fontSize="16px";
    re.style.backgroundColor="springgreen"
    start=true;
}




