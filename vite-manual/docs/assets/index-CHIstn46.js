(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/visual-DeI00CVD.jpg`,t={title:`Hei`};console.log(t.title);var n=`
  <div>
    <h2 class = "${t.title}">hello vite!</h2>
    <p>최고의 번들링 도구인 vite를 사용해보세요!</p>
    <img width = "300" src="${e}" alt=""/>
  </div>
`;document.body.insertAdjacentHTML(`beforeend`,n);