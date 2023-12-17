var O=Object.defineProperty;var N=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>(N(t,typeof e!="symbol"?e+"":e,s),s),A=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var d=(t,e,s)=>(A(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)};import{a as p,i as C,d as Q}from"./vendor-19302023.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function H(){const t=document.querySelector(".burger"),e=document.querySelector(".nav-bar-mobile");t.addEventListener("click",function(){t.classList.toggle("change"),e.classList.toggle("is-hidden")})}H();class m{}c(m,"CLICK","click"),c(m,"SUBMIT","submit");var f,E,S,x,q;class K{constructor(){g(this,f,"exercises");g(this,E,"filters");g(this,S,"quote");g(this,x,"subscription");g(this,q,"rating");p.defaults.baseURL="https://your-energy.b.goit.study/api/"}async fetchFiltersOfExercises(e="Muscles",s=1,a=12){const i=new URLSearchParams({filter:e,page:s,limit:a});return await p.get(`${d(this,E)}?${i}`)}async fetchQuote(){return await p.get(`${d(this,S)}`)}async fetchExercisesByFilters(e="",s="",a="",i=1,n=10){const o=new URLSearchParams({[a]:s,keyword:e,page:i,limit:n});return await p.get(`${d(this,f)}?${o}`)}async fetchExerciseByID(e){return await p.get(`${d(this,f)}/${e}`)}async postSubscription(e){const s={email:e};return await p.post(`${d(this,x)}`,s)}async patchExerciseRating({id:e,rate:s,email:a,review:i}){const n={rate:s,email:a,review:i};await p.patch(`${d(this,f)}/${e}/${d(this,q)}`,n)}}f=new WeakMap,E=new WeakMap,S=new WeakMap,x=new WeakMap,q=new WeakMap;const $={timeout:3e3,close:!1,closeOnClick:!0,icon:null,position:"topRight"};class u{static success(e){C.success({title:"OK",titleColor:"green",message:e,messageColor:"green",progressBarColor:"green",...$})}static error(e){C.error({title:"Error",titleColor:"red",message:e,messageColor:"red",progressBarColor:"red",...$})}static warning(e){C.warning({title:"Caution",message:e,titleColor:"red",messageColor:"red",progressBarColor:"red",...$})}}class J{constructor(){c(this,"patchExerciseRating");this.apiClient=new K,this.page=m.DEFAULT_PAGE_NUMBER}async getFiltersOfExercises(e){try{const{data:s}=await this.apiClient.fetchFiltersOfExercises(e,this.page);return s}catch(s){u.error(s.message)}}async getQuote(){try{const{data:e}=await this.apiClient.fetchQuote();return e}catch(e){u.error(e.message)}}async getExercisesByFilters(e,s,a){try{const{data:i}=await this.apiClient.fetchExercisesByFilters(e,s,a,this.page);return i}catch(i){u.error(i.message)}}async getExercisesByID(e){const s=e.toString();try{const{data:a}=await this.apiClient.fetchExerciseByID(s);return a}catch(a){u.error(a.message)}}async subscribe(e){try{const{data:s}=await this.apiClient.postSubscription(e);u.success(s.message)}catch(s){u.error(s.message)}}async sendRating(e){try{return await this.apiClient.patchExerciseRating(e)}catch(s){u.error(s.message)}}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=m.DEFAULT_PAGE_NUMBER}set setCurrentPage(e){this.page=Number(e)}}const _=new J;class T{static validateEmail(e){return/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}static firstToUpper(e){return e[0].toUpperCase()+e.substring(1)}}class z{constructor(e){this.container=e}render(e){const s=e.map(a=>{const i=a.imgURL?`<img class="filter__list__muscles-img" src="${a.imgURL}" alt="${a.name}" />`:"";return`<li class="filter__list__muscles" data-name="${a.name}">
                      <div class="filter__list__descr-wrapper">
                          <p class="filter__list__muscles-name">${T.firstToUpper(a.name)}</p>
                          <span class="filter__list__filter-tag">${a.filter}</span>
                      </div>
                      ${i}
                </li>`}).join("");this.container.innerHTML=s}}const r={musclesFilter:document.querySelector('[data-filterRequset="Muscles"]'),bodyPartsFilter:document.querySelector('[data-filterRequset="Body parts"]'),equipmentFilter:document.querySelector('[data-filterRequset="Equipment"]'),inputHolder:document.querySelector(".filter__searchBox"),inputField:document.querySelector(".filter__searchBox__input"),filterList:document.querySelector(".filter__list"),specialSign:document.querySelector(".filter__query__specialSign"),specialText:document.querySelector(".filter__query"),noData:document.querySelector(".error-block")};class G{constructor(e){this.container=e}render(e,s=!1){const a=e.map(i=>{const{bodyPart:n,burnedCalories:o,name:b,target:L,_id:h,rating:B,gifUrl:w}=i;return`
      <li class="body_parts__item">
        <div class="headline_flexbox">
          <div class="grade_flexbox">
            <span class="body_parts__item-type">WORKOUT</span>
            <div class="body_parts__item-gradebox">
              ${s?`<button class="bin" data-id="${h}">
              <svg class="next-btn-svg" width="16px" height="16px">
                <use href="./img/sprite.svg#icon-bin"></use>
              </svg>
            </button>`:`<span class="body_parts__item-grade">${B}</span>
              <svg class="body_parts__item-grade-svg" width="18px" height="18px">
                <use href="./img/sprite.svg#icon-star-icon"></use>
              </svg>`}
            </div>
          </div>
          <div class="body_parts-start-flexbox">
            <button class="next-btn" data-id="${h}">Start
              <svg class="next-btn-svg" width="16px" height="16px">
                <use href="./img/sprite.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class='body_parts__excercise-flexbox'>
          <svg class='body_parts__excercise-svg' width='24px' height='24px'>
            <use href='${w}'></use>
          </svg>
          <h3 class='body_parts__excercise-name'>${b}</h3>
        </div>
        <ul class='body_parts__info'>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Burned calories:</span>
            <span class='body_parts__info-item-value'>${o}/...</span>
          </li>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Body part:</span>
            <span class='body_parts__info-item-value'>${n}</span>
          </li>
          <li class='body_parts__info-item'>
            <span class='body_parts__info-item-key'>Target:</span>
            <span class='body_parts__info-item-value'>${L}</span>
          </li>
        </ul>
      </li>`}).join("");this.container.innerHTML=a}}class y{constructor(){c(this,"debounceDelay",300);c(this,"activeFilter","muscles");c(this,"filterQuery","");c(this,"query","");c(this,"currentPage",1);c(this,"totalPages",0);if(y.instance)return y.instance;y.instance=this}}const l=new y,V=new z(r.filterList),D=new G(r.filterList);function k(t){j(t),Y(t),_.getFiltersOfExercises(t).then(e=>{V.render(e.results)})}function j(t){switch(t){case"Muscles":r.musclesFilter.classList.add("filter__btn__active"),r.bodyPartsFilter.classList.remove("filter__btn__active"),r.equipmentFilter.classList.remove("filter__btn__active");break;case"Body parts":r.musclesFilter.classList.remove("filter__btn__active"),r.bodyPartsFilter.classList.add("filter__btn__active"),r.equipmentFilter.classList.remove("filter__btn__active");break;case"Equipment":r.musclesFilter.classList.remove("filter__btn__active"),r.bodyPartsFilter.classList.remove("filter__btn__active"),r.equipmentFilter.classList.add("filter__btn__active");break}}function Y(t){switch(t){case"Muscles":r.musclesFilter.disabled=!0,r.bodyPartsFilter.disabled=!1,r.equipmentFilter.disabled=!1;break;case"Body parts":r.musclesFilter.disabled=!1,r.bodyPartsFilter.disabled=!0,r.equipmentFilter.disabled=!1;break;case"Equipment":r.musclesFilter.disabled=!1,r.bodyPartsFilter.disabled=!1,r.equipmentFilter.disabled=!0;break}}function I(){k("Muscles"),l.activeFilter="muscles",F()}function Z(){k("Body parts"),l.activeFilter="bodypart",F()}function W(){k("Equipment"),l.activeFilter="equipment",F()}function X(t){const e=t.target.closest(".filter__list__muscles");e&&(l.filterQuery=e.dataset.name,_.getExercisesByFilters("",l.filterQuery,l.activeFilter).then(({page:s,totalPages:a,results:i})=>{l.currentPage=s,l.totalPages=a,D.render(i)}),F(T.firstToUpper(l.filterQuery)))}function F(t=""){r.noData.classList.add("hidden"),t===""?(r.inputHolder.classList.add("hidden"),r.specialSign.classList.add("hidden")):(r.inputHolder.classList.remove("hidden"),r.specialSign.classList.remove("hidden")),r.specialText.textContent=t}const ee=Q(t=>{l.query=t.target.value,_.getExercisesByFilters(l.query,l.filterQuery,l.activeFilter).then(({page:e,totalPages:s,results:a})=>{l.currentPage=e,l.totalPages=s,D.render(a),a.length?r.noData.classList.add("hidden"):r.noData.classList.remove("hidden")})},l.debounceDelay);function te(){I(),r.musclesFilter.addEventListener(m.CLICK,I),r.bodyPartsFilter.addEventListener(m.CLICK,Z),r.equipmentFilter.addEventListener(m.CLICK,W),r.filterList.addEventListener(m.CLICK,X),r.inputField.addEventListener("input",ee)}te();function se(){const t=localStorage.getItem("dailyQuote"),e=localStorage.getItem("quoteDate"),s=new Date().toDateString();t&&e===s?P(JSON.parse(t)):ae()}function ae(){_.getQuote().then(t=>{ie(t)}).catch(t=>console.error("Error fetching quote:",t))}function ie(t){const e=new Date().toDateString();localStorage.setItem("dailyQuote",JSON.stringify(t)),localStorage.setItem("quoteDate",e),P(t)}function P(t){const e=document.querySelector(".quote-text"),s=document.querySelector(".name-text");e.textContent=t.quote,s.textContent=t.author}se();class re{static init(){document.querySelector(".footer-submit-btn").addEventListener("click",this.submitButtonHandler)}static submitButtonHandler(e){e.preventDefault();let s=document.querySelector(".footer-form-input");const a=T.validateEmail(s.value.trim());if(console.log("emailIsValid:",a),!a){u.error("Email is not valid");return}_.subscribe(s.value.trim()),s.value=""}}re.init();function ne(t){t.forEach(e=>{e.isIntersecting?scrollToTopBtn.classList.remove("showBtn"):scrollToTopBtn.classList.add("showBtn")})}function le(){M.scrollTo({top:0,behavior:"smooth"})}let M;function oe(){const t=document.getElementById("scrollToTopBtn");let e=document.querySelector(".observer-area");new IntersectionObserver(ne,{threshold:.2}).observe(e),M=document.documentElement,t.addEventListener("click",le)}oe();const ce=document.querySelector(".modal-background");function de(t,e){const s=document.querySelector(".modal_rating");s.innerHTML=`${e}.0`}function ue(){const t=document.querySelectorAll('input[name="rate"]');t.forEach(function(e,s){e.addEventListener("change",function(a){pe(t,e,s),de(a.target.checked,a.target.value)})})}function me(){const t=document.querySelector(".modal_set_rating_form");t.addEventListener("submit",e=>{e.preventDefault();const s=new FormData(e.target);let a={id:t.dataset.id};s.forEach((i,n)=>{a={...a,[n]:n==="rate"?Number(i):i}}),_e(a)})}function pe(t,e,s){if(e.classList.contains("checked"))for(let a=s+1;a<t.length;a++)t[a].classList.remove("checked");else for(let a=0;a<s;a++)t[a+1].classList.add("checked")}async function _e(t){console.log("data to send",t),await _.sendRating(t),U()}function ge(t){const e=`<div class="modal_set_rating">
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
  </div>`;ce.innerHTML=e,ue(),me()}const R="favorites",v=document.querySelector(".modal-background"),fe=document.querySelector(".filter__list");fe.addEventListener("click",t=>{const e=t.target;if(e.classList.contains("next-btn")||e.parentElement.classList.contains("next-btn")){const s=e.closest(".next-btn").getAttribute("data-id");be(s)}});async function be(t){const e=await _.getExercisesByID(t);he(e),Ee()}function he(t){const{_id:e,gifUrl:s,name:a,rating:i,target:n,bodyPart:o,equipment:b,popularity:L,burnedCalories:h,description:B}=t,w=`  <div class="modal">
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
        <span class="modal_rating">${i}</span>
        <div
          class="stars"
          style="--rating: ${i}"
          aria-label="Rating of this product is ${i} out of 5."
        ></div>
      </div>

      <ul class="modal_list">
        <li>
          <p class="modal_list_title">Target</p>
          <p class="modal_list_data">${n||"N/D"}</p>
        </li>
        <li>
          <p class="modal_list_title">Body Part</p>
          <p class="modal_list_data">${o||"N/D"}</p>
        </li>
        <li>
          <p class="modal_list_title">Equipment</p>
          <p class="modal_list_data">${b||"N/D"}</p>
        </li>
        <li>
          <p class="modal_list_title">Popular</p>
          <p class="modal_list_data">${L||"N/D"}</p>
        </li>
        <li>
          <p class="modal_list_title">Burned Calories</p>
          <p class="modal_list_data">${h||"N/D"}</p>
        </li>
      </ul>

      <p class="modal_explanation">
        ${B}
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
  </div>`;v.innerHTML=w,ye(e),ve(t)}function ye(t){document.querySelector(".modal_rating_btn").addEventListener("click",s=>{Se(t)})}function ve(t){document.querySelector(".modal_favorite_btn").addEventListener("click",s=>{Le(t)})}function Le(t){const e=JSON.parse(localStorage.getItem(R))||[];e.some(s=>s._id===t._id)?localStorage.setItem(R,JSON.stringify(e.filter(s=>s._id!==t._id))):localStorage.setItem(R,JSON.stringify([...e,t]))}function Ee(){v.classList.remove("hide")}function Se(t){ge(t)}v.addEventListener("click",t=>{const e=t.target;(e.classList.contains("modal-background")||e.classList.contains("modal_close_btn")||e.parentElement.classList.contains("modal_close_btn"))&&U()});function U(){v.classList.add("hide"),v.innerHTML=""}
//# sourceMappingURL=modal-bc66c19b.js.map
