function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM";
    if(hh>=12)
    {
        am_pm="PM";
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm} ${am_pm}`
    document.getElementById("Time").innerHTML=fullTime;
    if(mo==0)
    {
        mo="జనవరి"
    }
    else if(mo==1)
    {
        mo="ఫిబ్రవరి"
    }
    else if(mo==2)
    {
        mo="మార్చ్"
    }
    else if(mo==3)

    {
        mo="ఏప్రిల్"
    }
    else if(mo==4)
    {
        mo="మే"
    }
    else if(mo==5)
    {
        mo="జూన్"
    }
    else if(mo==6)
    {
        mo="జూలై"
    }
    else if(mo==7)
    {
        mo="ఆగస్టు"
    }
    else if(mo==8)
    {
        mo="సెప్టెంబర్"
    }
    else if(mo==9)
    {
        mo="అక్టోబర్"
    }
    else if(mo==10)
    {
        mo="నవంబర్"
    }
    else
    {
        mo="డిసెంబర్"
    }
    var fulldate=`${dd}/${mo}/${yy}`
    document.getElementById("Date").innerHTML=fulldate;

    switch(day)
    {
        case 0: day="Sunday"
                document.body.style.backgroundImage="url(../0.jpg)"
                break;
        case 1: day="Monday"
                document.body.style.backgroundImage="url(../1.jpg)"
                break;
        case 2: day="Tuesday"
                document.body.style.backgroundImage="url(../2.jpg)"
                break;
        case 3: day="Wednesday"
                document.body.style.backgroundImage="url(../3.jpg)"
                break;
        case 4: day="Thrusday"
                document.body.style.backgroundImage="url(../4.jpg)"
                break;
        case 5: day="Friday"
                document.body.style.backgroundImage="url(../5.jpg)"
                break;
        case 6: day="Saturday"
                document.body.style.backgroundImage="url(../6.jpg)"
                break;
    }
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000)
}

function greet()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="Good Morning"
        document.getElementById("bgVid").src="../Morning.mp4"
    }
    else if(hh>12 && hh<=16)
    {
        document.getElementById("GreetMessage").innerHTML="Good Afternoon"
        document.getElementById("bgVid").src="../Afternoon.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
    }
    else if(hh>16 && hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="Good Evening"
        document.getElementById("bgVid").src="../Evening.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
    }
    else
    {
        document.getElementById("GreetMessage").innerHTML="Good Night"
        document.getElementById("GreetMessage").style.color="white"
        document.getElementById("bgVid").src="../Night.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
    }
}
greet()

function closeWind()
{
    document.getElementById("greet").style.display="none"
}
var a=setTimeout(closeWind,5000);