const name = document.querySelector('.name');
const btn = document.querySelector('.button');
const result = document.querySelector('#result');

function getAge(e) {
  e.preventDefault();
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(name.value)) {
    result.innerHTML = '영어만 입력 가능합니다.';
    name.value = '';
    return;
  } else {
    const url = `https://api.agify.io/?name=${name.value}`;
    return axios
      .get(url)
      .then(res => res.data)
      .then(items => (result.innerHTML = createHTML(items)));
  }
}
function createHTML(items) {
  return `
    <h2>
      ${items.name}
      ${items.age}歳
    </h2>
  `;
}
btn.addEventListener('click', getAge);
