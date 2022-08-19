import{m as i,T as l,d as u,C as c}from"./index.612e8617.js";window.Alpine=i;i.data("SetupForm",()=>({init(){this.$root.querySelectorAll("input").forEach(e=>e.addEventListener("keypress",t=>{t.key=="Enter"&&(t.preventDefault(),t.target.closest(".tab-pane").querySelector("button[data-href]").click())})),window.addEventListener("storage",function(e){e.key=="integrations"&&e.newValue&&JSON.parse(e.newValue).name=="mlc"&&($("#integration-mlc").text("Already Configured").attr("disabled",!0),window.focus(),localStorage.removeItem("integrations"))})},validateFileSize(e,t){e.target.files[0].size>t&&(confirm(`This image file is larger than ${t/1e3}KB which may result in increased load times. Are you sure you'd like to use this file?`)||(e.target.value=""))},switchTab(e){let t=!0;if(e.target.closest('[role="tabpanel"]').querySelectorAll("input,textarea").forEach(n=>{n.checkValidity()===!1&&(t=!1)}),t==!1)return;let o=e.target.dataset.href,r=this.$root.querySelector(`[data-bs-target="${o}"]`);l.getOrCreateInstance(r).show()},setThemeColor(e){document.querySelector("#config-color-input").value=e.target.value},resetThemeColor(e){document.querySelector("#config-color-input").value="",document.querySelector("#config-color-picker").value=""},processDateTime(e){return function(t){let a=document.querySelector(`#${e}-date`),o=document.querySelector(`#${e}-time`),r=u(`${a.value} ${o.value}`,"YYYY-MM-DD HH:mm").unix();isNaN(r)?document.querySelector(`#${e}-preview`).value="":document.querySelector(`#${e}-preview`).value=r}},mlcSetup(){let e=document.querySelector,t=c.config.urlRoot,a={name:e("#ctf_name").value,type:"jeopardy",description:e("#ctf_description").value,user_mode:e("#user_mode").value,event_url:window.location.origin+t,redirect_url:window.location.origin+t+"/redirect",integration_setup_url:window.location.origin+t+"/setup/integrations",start:e("#start-preview").value,end:e("#end-preview").value,platform:"CTFd",state:window.STATE};const o=[];for(let r in a)o.push(encodeURIComponent(r)+"="+encodeURIComponent(a[r]));window.open("https://www.majorleaguecyber.org/events/new?"+o.join("&"),"_blank")},submitSetup(e){if(document.querySelector("#newsletter-checkbox").checked){let o={email:e.target.querySelector("input[name=email]").value,b_38e27f7d496889133d2214208_d7c3ed71f9:"",c:"jsonp_callback_"+Math.round(1e4*Math.random())};const r=[];for(let n in o)r.push(encodeURIComponent(n)+"="+encodeURIComponent(o[n]));var t=document.createElement("script");t.src="https://newsletters.ctfd.io/lists/ot889gr1sa0e1/subscribe/post-json?"+r.join("&"),document.head.appendChild(t)}}}));i.start();