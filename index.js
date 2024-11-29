import{S as p,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function u(n){const s=document.querySelector(".gallery");s.innerHTML="";const a=n.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${t.webformatURL}" 
                    alt="${t.tags}" 
                />
            </a>
            <div class="gallery-container">
            <p class="gallery-text">Likes: <span class="gallery-span">${t.likes}</span></p>
            <p class="gallery-text">Views: <span class="gallery-span">${t.views}</span></p>
            <p class="gallery-text">Comments: <span class="gallery-span">${t.comments}</span></p>
            <p class="gallery-text">Downloads: <span class="gallery-span">${t.downloads}</span></p>
            </div>
        </li>
    `).join("");s.insertAdjacentHTML("beforeend",a)}const y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d="47343073-38824ad25c719e3c94b2dfcbe",g=document.querySelector(".button"),c=document.querySelector(".input"),i=document.getElementById("loading");g.addEventListener("click",n=>{n.preventDefault();const s=c.value.trim();if(!s){l.warning({title:"Hint",message:"Try to enter something into the input..."});return}i.style.display="block";const t=`https://pixabay.com/api/?${new URLSearchParams({key:`${d}`,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(t).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(i.style.display="none",e.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(e.hits),u(e.hits),y.refresh(),c.value=""}).catch(e=>{i.style.display="none",l.error({title:"Error",message:`Something went wrong: ${e.message}`})})});
//# sourceMappingURL=index.js.map
