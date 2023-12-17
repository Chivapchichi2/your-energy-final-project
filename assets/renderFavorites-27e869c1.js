var A=Object.defineProperty;var Q=(t,e,s)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>(Q(t,typeof e!="symbol"?e+"":e,s),s),H=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var d=(t,e,s)=>(H(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)};import{a as m,i as k,d as K}from"./vendor-19302023.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function J(){const t=document.querySelector(".burger"),e=document.querySelector(".nav-bar-mobile");t.addEventListener("click",function(){t.classList.toggle("change"),e.classList.toggle("is-hidden")})}J();document.addEventListener("DOMContentLoaded",()=>{const t=window.location.href;document.querySelectorAll(".header-menu-link").forEach(s=>{s.classList.remove("current-page"),s.href===t&&s.classList.add("current-page")})});class p{}c(p,"CLICK","click"),c(p,"SUBMIT","submit");var _,L,x,S,w;class z{constructor(){f(this,_,"exercises");f(this,L,"filters");f(this,x,"quote");f(this,S,"subscription");f(this,w,"rating");m.defaults.baseURL="https://your-energy.b.goit.study/api/"}async fetchFiltersOfExercises(e="Muscles",s=1,a=12){const r=new URLSearchParams({filter:e,page:s,limit:a});return await m.get(`${d(this,L)}?${r}`)}async fetchQuote(){return await m.get(`${d(this,x)}`)}async fetchExercisesByFilters(e="",s="",a="",r=1,n=10){const l=new URLSearchParams({[a]:s,keyword:e,page:r,limit:n});return await m.get(`${d(this,_)}?${l}`)}async fetchExerciseByID(e){return await m.get(`${d(this,_)}/${e}`)}async postSubscription(e){const s={email:e};return await m.post(`${d(this,S)}`,s)}async patchExerciseRating({id:e,rate:s,email:a,review:r}){const n={rate:s,email:a,review:r};await m.patch(`${d(this,_)}/${e}/${d(this,w)}`,n)}}_=new WeakMap,L=new WeakMap,x=new WeakMap,S=new WeakMap,w=new WeakMap;const C={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topRight"};class u{static success(e){k.success({title:"OK",titleColor:"green",message:e,messageColor:"green",progressBarColor:"green",...C})}static error(e){k.error({title:"Error",titleColor:"red",message:e,messageColor:"red",progressBarColor:"red",...C})}static warning(e){k.warning({title:"Caution",message:e,titleColor:"red",messageColor:"red",progressBarColor:"red",...C})}}class G{constructor(){c(this,"patchExerciseRating");this.apiClient=new z,this.page=p.DEFAULT_PAGE_NUMBER}async getFiltersOfExercises(e){try{const{data:s}=await this.apiClient.fetchFiltersOfExercises(e,this.page);return s}catch(s){u.error(s.message)}}async getQuote(){try{const{data:e}=await this.apiClient.fetchQuote();return e}catch(e){u.error(e.message)}}async getExercisesByFilters(e,s,a){try{const{data:r}=await this.apiClient.fetchExercisesByFilters(e,s,a,this.page);return r}catch(r){u.error(r.message)}}async getExercisesByID(e){const s=e.toString();try{const{data:a}=await this.apiClient.fetchExerciseByID(s);return a}catch(a){u.error(a.message)}}async subscribe(e){try{const{data:s}=await this.apiClient.postSubscription(e);u.success(s.message)}catch(s){u.error(s.message)}}async sendRating(e){try{return await this.apiClient.patchExerciseRating(e)}catch(s){u.error(s.message)}}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=p.DEFAULT_PAGE_NUMBER}set setCurrentPage(e){this.page=Number(e)}}const g=new G;class ${static validateEmail(e){return/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}static firstToUpper(e){return e[0].toUpperCase()+e.substring(1)}}class V{constructor(e){this.container=e}render(e){const s=e.map(a=>{const r=a.imgURL?`<img class="filter__list__muscles-img" src="${a.imgURL}" alt="${a.name}" />`:"";return`<li class="filter__list__muscles" data-name="${a.name}">
                      <div class="filter__list__descr-wrapper">
                          <p class="filter__list__muscles-name">${$.firstToUpper(a.name)}</p>
                          <span class="filter__list__filter-tag">${a.filter}</span>
                      </div>
                      ${r}
                </li>`}).join("");this.container.innerHTML=s}}const i={musclesFilter:document.querySelector('[data-filterRequset="Muscles"]'),bodyPartsFilter:document.querySelector('[data-filterRequset="Body parts"]'),equipmentFilter:document.querySelector('[data-filterRequset="Equipment"]'),inputHolder:document.querySelector(".filter__searchBox"),inputField:document.querySelector(".filter__searchBox__input"),filterList:document.querySelector(".filter__list"),specialSign:document.querySelector(".filter__query__specialSign"),specialText:document.querySelector(".filter__query"),noData:document.querySelector(".error-block")};class P{constructor(e,s=!1){this.container=e,this.favorite=s}render(e){const s=e.map(a=>{const{bodyPart:r,burnedCalories:n,name:l,target:b,_id:h,rating:E,gifUrl:F}=a;return`
      <li class="body_parts__item">
        <div class="headline_flexbox">
          <div class="grade_flexbox">
            <span class="body_parts__item-type">WORKOUT</span>
            <div class="body_parts__item-gradebox">
              ${this.favorite?`<button class="bin" data-id="${h}">
              <svg class="next-btn-svg" width="16px" height="16px">
                <use href="../img/sprite.svg#icon-bin"></use>
              </svg>
            </button>`:`<span class="body_parts__item-grade">${E}</span>
              <svg class="body_parts__item-grade-svg" width="18px" height="18px">
                <use href="../img/sprite.svg#icon-star-icon"></use>
              </svg>`}
            </div>
          </div>
          <div class="body_parts-start-flexbox">
            <button class="next-btn" data-id="${h}">Start
              <svg class="next-btn-svg" width="16px" height="16px">
                <use href="../img/sprite.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class='body_parts__excercise-flexbox'>
          <svg class='body_parts__excercise-svg' width='24px' height='24px'>
            <use href='${F}'></use>
          </svg>
          <h3 class='body_parts__excercise-name'>${l}</h3>
        </div>
        <ul class='body_parts__info'>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Burned calories:</span>
            <span class='body_parts__info-item-value'>${n}/...</span>
          </li>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Body part:</span>
            <span class='body_parts__info-item-value'>${r}</span>
          </li>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Target:</span>
            <span class='body_parts__info-item-value'>${b}</span>
          </li>
        </ul>
      </li>`}).join("");this.container.innerHTML=s}}class y{constructor(){c(this,"debounceDelay",300);c(this,"activeFilter","muscles");c(this,"filterQuery","");c(this,"query","");c(this,"currentPage",1);c(this,"totalPages",0);if(y.instance)return y.instance;y.instance=this}}const o=new y,j=new V(i.filterList),M=new P(i.filterList);function R(t){i.musclesFilter&&i.bodyPartsFilter&&i.equipmentFilter&&(Y(t),Z(t),g.getFiltersOfExercises(t).then(e=>{j.render(e.results)}))}function Y(t){switch(t){case"Muscles":i.musclesFilter.classList.add("filter__btn__active"),i.bodyPartsFilter.classList.remove("filter__btn__active"),i.equipmentFilter.classList.remove("filter__btn__active");break;case"Body parts":i.musclesFilter.classList.remove("filter__btn__active"),i.bodyPartsFilter.classList.add("filter__btn__active"),i.equipmentFilter.classList.remove("filter__btn__active");break;case"Equipment":i.musclesFilter.classList.remove("filter__btn__active"),i.bodyPartsFilter.classList.remove("filter__btn__active"),i.equipmentFilter.classList.add("filter__btn__active");break}}function Z(t){switch(t){case"Muscles":i.musclesFilter.disabled=!0,i.bodyPartsFilter.disabled=!1,i.equipmentFilter.disabled=!1;break;case"Body parts":i.musclesFilter.disabled=!1,i.bodyPartsFilter.disabled=!0,i.equipmentFilter.disabled=!1;break;case"Equipment":i.musclesFilter.disabled=!1,i.bodyPartsFilter.disabled=!1,i.equipmentFilter.disabled=!0;break}}function I(){R("Muscles"),o.activeFilter="muscles",q()}function W(){R("Body parts"),o.activeFilter="bodypart",q()}function X(){R("Equipment"),o.activeFilter="equipment",q()}function ee(t){const e=t.target.closest(".filter__list__muscles");e&&(o.filterQuery=e.dataset.name,g.getExercisesByFilters("",o.filterQuery,o.activeFilter).then(({page:s,totalPages:a,results:r})=>{o.currentPage=s,o.totalPages=a,M.render(r)}),q($.firstToUpper(o.filterQuery)))}function q(t=""){var e,s,a,r,n;(e=i.noData)==null||e.classList.add("hidden"),t===""?((s=i.inputHolder)==null||s.classList.add("hidden"),(a=i.specialSign)==null||a.classList.add("hidden")):((r=i.inputHolder)==null||r.classList.remove("hidden"),(n=i.specialSign)==null||n.classList.remove("hidden")),i.specialText&&(i.specialText.textContent=t)}const te=K(t=>{o.query=t.target.value,g.getExercisesByFilters(o.query,o.filterQuery,o.activeFilter).then(({page:e,totalPages:s,results:a})=>{o.currentPage=e,o.totalPages=s,M.render(a),a.length?i.noData.classList.add("hidden"):i.noData.classList.remove("hidden")})},o.debounceDelay);function se(){I(),i.musclesFilter.addEventListener(p.CLICK,I),i.bodyPartsFilter.addEventListener(p.CLICK,W),i.equipmentFilter.addEventListener(p.CLICK,X),i.filterList.addEventListener(p.CLICK,ee),i.inputField.addEventListener("input",te)}i.musclesFilter&&i.bodyPartsFilter&&i.equipmentFilter&&se();function ae(){const t=localStorage.getItem("dailyQuote"),e=localStorage.getItem("quoteDate"),s=new Date().toDateString();t&&e===s?U(JSON.parse(t)):re()}function re(){g.getQuote().then(t=>{ie(t)}).catch(t=>console.error("Error fetching quote:",t))}function ie(t){const e=new Date().toDateString();localStorage.setItem("dailyQuote",JSON.stringify(t)),localStorage.setItem("quoteDate",e),U(t)}function U(t){const e=document.querySelector(".quote-text"),s=document.querySelector(".name-text");e.textContent=t.quote,s.textContent=t.author}ae();class ne{static init(){const e=document.querySelector(".footer-submit-btn");e==null||e.addEventListener("click",this.submitButtonHandler)}static submitButtonHandler(e){e.preventDefault();let s=document.querySelector(".footer-form-input");if(!$.validateEmail(s.value.trim())){u.error("Email is not valid");return}g.subscribe(s.value.trim()),s.value=""}}ne.init();const oe=document.querySelector(".modal-background");function le(t,e){const s=document.querySelector(".modal_rating");s.innerHTML=`${e}.0`}function ce(){const t=document.querySelectorAll('input[name="rate"]');t.forEach(function(e,s){e.addEventListener("change",function(a){ue(t,e,s),le(a.target.checked,a.target.value)})})}function de(){const t=document.querySelector(".modal_set_rating_form");t.addEventListener("submit",e=>{e.preventDefault();const s=new FormData(e.target);let a={id:t.dataset.id};s.forEach((r,n)=>{a={...a,[n]:n==="rate"?Number(r):r}}),pe(a)})}function ue(t,e,s){if(e.classList.contains("checked"))for(let a=s+1;a<t.length;a++)t[a].classList.remove("checked");else for(let a=0;a<s;a++)t[a+1].classList.add("checked")}async function pe(t){console.log("data to send",t),await g.sendRating(t),O()}function me(t){const e=`<div class="modal_set_rating">
    <button class="modal_close_btn" type="button">
      <svg
        class="modal_close_btn_icon"
        width="24"
        height="24"
        aria-label="heart icon"
      >
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <form class="modal_set_rating_form" data-id="${t}">
      <p class="modal_rating_title">Rating</p>
      <div class="modal_set_rating_wrap">
        <span class="modal_rating">1.0</span>
        <label>
          <input
            class="visually-hidden checked"
            type="radio"
            name="rate"
            value="1"
            checked
          />
          ★
        </label>
        <label>
          <input
            class="visually-hidden"
            type="radio"
            name="rate"
            value="2"
          />
          ★
        </label>
        <label>
          <input
            class="visually-hidden"
            type="radio"
            name="rate"
            value="3"
          />
          ★
        </label>
        <label>
          <input
            class="visually-hidden"
            type="radio"
            name="rate"
            value="4"
          />
          ★
        </label>
        <label>
          <input
            class="visually-hidden"
            type="radio"
            name="rate"
            value="5"
          />
          ★
        </label>
      </div>

      <input
        class="modal_enter_email"
        type="email"
        name='email'
        placeholder="Email"
        required
      />
      <textarea
        class="modal_enter_comment"
        name="review"
        placeholder="Your comment"
        required
      ></textarea>

      <button class="modal_submit_rating_btn" type="submit">Send</button>
    </form>
  </div>`;oe.innerHTML=e,ce(),de()}const B="favorites",v=document.querySelector(".modal-background"),T=document.querySelector(".filter__list");T==null||T.addEventListener("click",t=>{const e=t.target;if(e.classList.contains("next-btn")||e.parentElement.classList.contains("next-btn")){const s=e.closest(".next-btn").getAttribute("data-id");ge(s)}});async function ge(t){const e=await g.getExercisesByID(t);fe(e),ye()}function fe(t){const{_id:e,gifUrl:s,name:a,rating:r,target:n,bodyPart:l,equipment:b,popularity:h,burnedCalories:E,description:F}=t,D=`  <div class="modal">
    <button class="modal_close_btn" type="button">
      <svg
        class="modal_close_btn_icon"
        width="24"
        height="24"
        aria-label="heart icon"
      >
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal_image_wrap">
      <img
        class="modal_image"
        src="${s}"
        alt="${a}"
        onerror="this.onerror = null; this.src ='img/modal/no_image.png'"
      />
    </div>
    <div>
      <h1 class="modal_title">${a}</h1>
      <div class="modal_rating_wrap">
        <span class="modal_rating">${r}</span>
        <div
          class="stars"
          style="--rating: ${r}"
          aria-label="Rating of this product is ${r} out of 5."
        ></div>
      </div>

      <ul class="modal_list">
        <li>
          <p class="modal_list_title">Target</p>
          <p class="modal_list_data">${n||"N/D"}</p>
        </li>
        <li>
          <p class="modal_list_title">Body Part</p>
          <p class="modal_list_data">${l||"N/D"}</p>
        </li>
        <li>
          <p class="modal_list_title">Equipment</p>
          <p class="modal_list_data">${b||"N/D"}</p>
        </li>
        <li>
          <p class="modal_list_title">Popular</p>
          <p class="modal_list_data">${h||"N/D"}</p>
        </li>
        <li>
          <p class="modal_list_title">Burned Calories</p>
          <p class="modal_list_data">${E||"N/D"}</p>
        </li>
      </ul>

      <p class="modal_explanation">
        ${F}
      </p>

      <div class="modal_btn_wrap">
        <button class="modal_favorite_btn" type="button">
          Add to favorites
          <svg
            class="modal_btn_icon"
            width="18"
            height="18"
            aria-label="heart icon"
          >
            <use href="./img/sprite.svg#icon-heart-icon"></use>
          </svg>
        </button>
        <button class="modal_rating_btn" type="button">Give a rating</button>
      </div>
    </div>
  </div>`;v.innerHTML=D,_e(e),be(t)}function _e(t){document.querySelector(".modal_rating_btn").addEventListener("click",s=>{ve(t)})}function be(t){document.querySelector(".modal_favorite_btn").addEventListener("click",s=>{he(t)})}function he(t){const e=JSON.parse(localStorage.getItem(B))||[];e.some(s=>s._id===t._id)?localStorage.setItem(B,JSON.stringify(e.filter(s=>s._id!==t._id))):localStorage.setItem(B,JSON.stringify([...e,t]))}function ye(){v.classList.remove("hide")}function ve(t){me(t)}v.addEventListener("click",t=>{const e=t.target;(e.classList.contains("modal-background")||e.classList.contains("modal_close_btn")||e.parentElement.classList.contains("modal_close_btn"))&&O()});function O(){v.classList.add("hide"),v.innerHTML=""}function Ee(t){t.forEach(e=>{e.isIntersecting?scrollToTopBtn==null||scrollToTopBtn.classList.remove("showBtn"):scrollToTopBtn==null||scrollToTopBtn.classList.add("showBtn")})}function Le(){N.scrollTo({top:0,behavior:"smooth"})}let N;function xe(){const t=document.getElementById("scrollToTopBtn");let e=document.querySelector(".observer-area");if(!e)return;new IntersectionObserver(Ee,{threshold:.2}).observe(e),N=document.documentElement,t.addEventListener("click",Le)}xe();const Se=document.querySelector(".favorites-list"),we=document.querySelector(".favorites-error-message"),qe=new P(Se,!0),Fe=[{_id:"64f389465ae26083f39b183e",bodyPart:"back",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0180.gif",name:"cable low seated row",target:"upper back",description:"This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.",rating:4.17,burnedCalories:284,time:3,popularity:1343},{_id:"64f389465ae26083f39b183e",bodyPart:"back",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0180.gif",name:"cable low seated row",target:"upper back",description:"This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.",rating:4.17,burnedCalories:284,time:3,popularity:1343},{_id:"64f389465ae26083f39b183e",bodyPart:"back",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0180.gif",name:"cable low seated row",target:"upper back",description:"This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.",rating:4.17,burnedCalories:284,time:3,popularity:1343},{_id:"64f389465ae26083f39b183e",bodyPart:"back",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0180.gif",name:"cable low seated row",target:"upper back",description:"This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.",rating:4.17,burnedCalories:284,time:3,popularity:1343},{_id:"64f389465ae26083f39b183e",bodyPart:"back",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0180.gif",name:"cable low seated row",target:"upper back",description:"This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.",rating:4.17,burnedCalories:284,time:3,popularity:1343}],ke=JSON.stringify(Fe);localStorage.setItem("exercisesData",ke);function Ce(){const t=JSON.parse(localStorage.getItem("exercisesData"));console.log(t),t?qe.render(t):we.style.display="block"}Ce();
//# sourceMappingURL=renderFavorites-27e869c1.js.map
