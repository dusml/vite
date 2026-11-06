import { Pokemon } from "./type";

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';


// fethchData 함수를 만들고 비동기 통신을 위한 제네릭 타임을 지정해 주세요


//데이터만 글어오는 애 그걸 p에 넣어주고, 그걸 카드에 넣어 추출 하고 싶다 그게 투 카드 (내가 원하는데이터만 가지고 싶다)먼저 데이커 구조를 설개를 한다. -> 이제 그 함수를 통해 반환하는 게 포케몬 카드를 반환핟가.. 객체에 아이디 이름 이미지를 그러면 어디서 가져오냐 투카드에 전달된 매게 변수에서... 타입이 코켓몬 이라는 가장 큰 타입에서.. 픽이라는 기능을 이용해서 3가지만 뽑아서 타입으,로 지정을 하겠다. 
async function fetchData<T>(url:string):Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} : ${url}`);
  }

  return response.json();
}

// Pokemon 데이터를 PokemonCard(타입정의 필요: id , name, image)로 변환하는 toCard 함수를 만들어주세요
type PokemonCard = {
  id:number;
  name:string;
  image: string;
}

//폿케몬 카드를 내보내야 한다, 값을 리컨 해야 하니 리턴이 들어가소, 
function toCard ({id, name, sprites}:Pick<Pokemon, 'id' | 'name' | 'sprites'>):PokemonCard{

  return {
    id, //id : id중복이여서 지워도 된다.
    name,
    image: sprites.front_default ?? ''
  };
}

// PokemonCard를 받아서 HTML 문자열을 반환하는 함수를 만들어주세요.
function createCard({id, name, image}:PokemonCard):string {
  return `
    <div class="card" data-id="${id}">
      <img src="${image}" alt="${name}">
      <h2>${name}</h2>
    </div>
  `;
}

function renderCard(target: HTMLElement | null,cards: PokemonCard[]): void {
  if (!target) return;
  target.insertAdjacentHTML('beforeend',cards.map(createCard).join(''));
}

// renderCard('body', [toCard(p)])


fetchData<Pokemon>(`${BASE_URL}/25`)
.then((p) => {

  // 카드 렌더링
  renderCard(document.querySelector<HTMLElement>('#app'),[toCard(p), toCard(p), toCard(p)]);

});


function fetchPokemon(count:number) :Promise<Pokemon>[]{
  return Array.from({length: count}, (_,i) => fetchData<Pokemon>(`${BASE_URL}/${i + 1}`))
}


const promise = fetchPokemon(10);

Promise.all(promise).then((list) => {
  console.log(list);
});