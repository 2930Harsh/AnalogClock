setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    mstime = d.getMilliseconds();
    hrotation = htime*30 + mtime/2;
    mrotation = 6*mtime+stime/10;
    srotation = 6*stime+mstime*6/1000;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},10)