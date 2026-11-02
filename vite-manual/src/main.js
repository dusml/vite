
//static assets import (정적 자산 불러오기)
import visual from '@/assets/visual.jpg'
import '@/style.css'
// import {title} from '/src/style.module.css'
import S from '@/style.module.css'

// console.log(title);
console.log(S.title);



const template = `
  <div>
    <h2 class = "${S.title}">hello vite!</h2>
    <p>최고의 번들링 도구인 vite를 사용해보세요!</p>
    <img width = "300" src="${visual}" alt=""/>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', template);