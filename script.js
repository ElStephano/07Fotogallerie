let images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg', 'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg', 'img/img14.jpg', 'img/img15.jpg', 'img/img16.jpg', 'img/img17.jpg', 'img/img18.jpg', 'img/img19.jpg', 'img/img20.jpg', 'img/img21.jpg', 'img/img22.jpg',];

function renderImages() {
    let imageContainer = document.getElementById('imgDiv');
    imageContainer.innerHTML = '';

    for (let i = 0; i < images.length; i++) {
        imageContainer.innerHTML += `
        <img onclick="openImg(${i})" class="images" id="picture${i}" src="${images[i]}" alt="">
        <div id="showImg"></div>
        `;
    }
}

function openImg(i) {
    let showImg = document.getElementById('showImg');
    showImg.classList.add('showImg');
    showImg.innerHTML = `
    <img id="show" class="openImage" src="${images[i]}" alt="">
    <div class="navIcons">
        <img onclick="backImg(${i});event.stopPropagation();" class="icons" src="./icons/back.svg" alt="next">
        <button class="button" onclick="closeImg(${i})">zur Übersicht</button>
        <img onclick="nextImg(${i});event.stopPropagation();" class="icons" src="./icons/forward.svg" alt="back">
    </div>
    `;
}

function closeImg() {
    let closeImg = document.getElementById('showImg');
    closeImg.classList.remove('showImg', 'openImage');
    renderImages();
}

function nextImg(i) {
    document.getElementById('show').src == i++;
    if(i == 22){
        i = 0;
    }
    openImg(i);
}

function backImg(i) {
    document.getElementById('show').src == i--;
    if(i == -1){
        i = 21;
    }
    openImg(i);
}