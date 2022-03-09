window.onload = function () {
  const textUpperInput = document.querySelector('#upperTextInput');
  const textBottomInput = document.querySelector('#bottomTextInput');
  const campoUpLoadDaImagem = document.querySelector('#memeInsert');
  const colorDiv = document.querySelectorAll('.colorDiv');
  const preLoadedMemes = document.querySelector('.memesSection');
}

const textUpperInput = document.querySelector('#upperTextInput');
const textBottomInput = document.querySelector('#bottomTextInput');
function textAplly() {
  const memeUpperh2 = document.querySelector('#memeUpperText');
  const memeBottomh2 = document.querySelector('#memeBottomText');
  memeUpperh2.innerText = textUpperInput.value;
  memeBottomh2.innerText = textBottomInput.value;
}
textUpperInput.addEventListener('keyup', textAplly);
textBottomInput.addEventListener('keyup', textAplly);


const colorPalette = document.querySelectorAll('.textColorConfig')[0];
function textColorChanger(event) {
  const memeUpperh2 = document.querySelector('#memeUpperText');
  const memeBottomh2 = document.querySelector('#memeBottomText');
  if (event.target.classList[1] === 'colorDiv') {
    const target = event.target.classList[0];
    memeUpperh2.classList.remove('blackText', 'whiteText', 'redText', 'greenText', 'blueText');
    memeBottomh2.classList.remove('blackText', 'whiteText', 'redText', 'greenText', 'blueText');
    memeUpperh2.classList.add(target+'Text');
    memeBottomh2.classList.add(target+'Text');
  }
}
colorPalette.addEventListener('click', textColorChanger);


function leitorDeImagem(event) {
  const imagemUpada = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(imagemUpada);
  reader.onloadend = () => {
    document.querySelector('#memeImage').setAttribute('src', reader.result);
  };
}
const campoUpLoadDaImagem = document.querySelector('#memeInsert');
campoUpLoadDaImagem.addEventListener('change', leitorDeImagem);

const preLoadedMemes = document.querySelector('#memesSection');
function preLoaded(event) {
  if (event.target.classList[0] === 'memeImg') {
    const memeImg = event.target.getAttribute('src');
    document.querySelector('#memeImage').setAttribute('src', memeImg);
  };
}
preLoadedMemes.addEventListener('click', preLoaded);

const downloadBtn = document.getElementById('printBtn');
downloadBtn.addEventListener('click', downloadFunc);
function downloadFunc() {
  const ssTarget = document.getElementById('printArea');
  html2canvas(ssTarget).then((canvas) => {
    const canvasConverter = canvas.toDataURL('image/png');
    let a = document.createElement('a');
    a.setAttribute('href', canvasConverter);
    a.setAttribute('download', 'meme.png');
    a.click();
    a.remove();
  });
}

/*Image Reproduction Fonts:
* https://museudememes.com.br/collection/nazare-confusa
* https://museudememes.com.br/collection/chloe-sincera
* https://museudememes.com.br/collection/por-que-voce-nao-amadurece
* https://museudememes.com.br/collection/nazare-confusa*/
