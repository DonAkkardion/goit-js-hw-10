import"./assets/styles-DsNzbcUo.js";import{f as m,i as r}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("datetime-picker"),t=document.querySelector("button"),i=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");function a(e){return String(e).padStart(2,"0")}function f(e){const h=Math.floor(e/864e5),F=Math.floor(e%864e5/36e5),C=Math.floor(e%36e5/6e4),b=Math.floor(e%6e4/1e3);return{days:h,hours:F,minutes:C,seconds:b}}m(o,{enableTime:!0,time_24hr:!0,minuteIncrement:1,onClose:function(e){const n=e[0];n?n<new Date?(r.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",iconColor:"#FFF",timeout:5e3,displayMode:2}),t.disabled=!0):t.disabled=!1:t.disabled=!0}}),o.addEventListener("focus",function(){m.parseDate(o.value,"Y-m-d H:i")||(t.disabled=!0)}),t.disabled=!0,t.addEventListener("click",function(){o.disabled=!0,t.disabled=!0;const e=new Date(o.value);if(e<=new Date){r.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",iconColor:"#FFF",timeout:5e3,displayMode:2}),o.disabled=!1,t.disabled=!1;return}let n=e.getTime()-new Date().getTime();const u=setInterval(function(){if(n-=1e3,n<=0)clearInterval(u),i.textContent="00",d.textContent="00",c.textContent="00",l.textContent="00",o.disabled=!1,t.disabled=!1,r.success({title:"Countdown Finished",message:"Timer has ended!",position:"topRight"});else{const s=f(n);i.textContent=a(s.days),d.textContent=a(s.hours),c.textContent=a(s.minutes),l.textContent=a(s.seconds)}},1e3)})});
//# sourceMappingURL=1-timer.js.map
