//타입스크립트에는 마우스 올려보기

// 타입 단언(as)을 사용해 에러를 해결해주세요.

const link = document.querySelector('a') as HTMLAnchorElement;

link.href = ''



// 타입 단언 제네릭을 사용해 에러를 해결해주세요.

const image = document.querySelector<HTMLImageElement>('img');
// const image = document.querySelector<HTMLImageElement>('img')!;
// !를 붙이거나! 아래처럼 조건식을 사용 ! 있을 때만 사용
if(image){
  image.src = '/assets/visual.jpg'
  image.alt = '작품명 : 모나리자'
}





// 타입 좁히기와 단언(as)를 사용해 에러를 해결해주세요.

const checkbox = document.querySelector('input[type="checkbox"]');

if(checkbox){
  (checkbox as HTMLInputElement).checked =  false
}






// 상속여부(instanceof)를 사용해 에러를 해결해주세요.

const agreement = document.querySelector('input[type="checkbox"]');


if (agreement instanceof HTMLInputElement) {
  agreement.checked = true;
}


// as const를 사용해 오류 없이 role을 정확히 비교할 수 있도록 수정해보세요.
//Object.freeze 와 같다. 값을 전대 못 바꾸지 때문이다.

const user = {
  role: "guest"
} as const


if (user.role === "guest") {
  console.log("게스트입니다.");
}