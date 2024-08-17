import{a as h,S as v,i as x}from"./assets/vendor-2d00e8c4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}})();const L="/goit-advancedjs-hw-04/assets/x-d9947029.svg",b="https://pixabay.com/api/",w=async(r,e)=>{const a=new URLSearchParams({q:r,key:"45298002-4b3df346318b923a57726fdbd",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});return(await h.get(`${b}?${a.toString()}`)).data},S=new v(".gallery-item a",{captionsData:"alt",captionDelay:"250"});function $(r,e){const a=r.map(s=>`
  <li class="gallery-item">
  <a class="gallery-link" href=${s.largeImageURL}>
    <img
      class="gallery-image"
      src=${s.webformatURL} 
      alt="${s.tags}"
    />
  </a>
    <ul class="gallery-item-text">
      <li class="gallery-item-text-container">
        <p class="gallery-item-text-header">Likes</p>
        <p class="gallery-item-text-value">${s.likes}</p>
      </li>
      <li class="gallery-item-text-container">
        <p class="gallery-item-text-header">Views</p>
        <p class="gallery-item-text-value">${s.views}</p>
      </li>
      <li class="gallery-item-text-container">
        <p class="gallery-item-text-header">Comments</p>
        <p class="gallery-item-text-value">${s.comments}</p>
      </li>
      <li class="gallery-item-text-container">
        <p class="gallery-item-text-header">Downloads</p>
        <p class="gallery-item-text-value">${s.downloads}</p>
      </li>
      </ul>
    </li>`).join("");e.insertAdjacentHTML("beforeend",a),S.refresh()}const u=document.querySelector("form"),i=document.querySelector(".wrapper button"),d=document.querySelector(".gallery"),m=document.querySelector(".wrapper span");let o=null,y=null,c=null,f=null;const p=(r,e)=>{x.show({message:`${r}`,messageColor:"#ffffff",color:e,position:"topRight",displayMode:1,iconUrl:`${L}`})},g=r=>{m.classList.add("loader"),w(r,o).then(e=>{e.hits.length===0?p("Sorry, there are no images matching your search query. Please try again!","#EF4040"):(c=Math.ceil(e.totalHits/15),$(e.hits,d),f=d.firstElementChild.getBoundingClientRect().height*2,scrollBy(0,f),o===c?p("We're sorry, but you've reached the end of search results.","#68cce4"):o<c&&i.classList.remove("inactive"))}).catch(e=>console.log(e)).finally(()=>{u.reset(),m.classList.remove("loader")})};u.addEventListener("submit",r=>{r.preventDefault(),d.innerHTML="",i.classList.add("inactive");let e=u.elements.userinput.value.trim();e?(o=1,y=e,g(e)):p("Search field can not be empty!","#EF4040")});i.addEventListener("click",r=>{r.target.type==="button"&&(i.classList.add("inactive"),o+=1,g(y))});
//# sourceMappingURL=commonHelpers.js.map
