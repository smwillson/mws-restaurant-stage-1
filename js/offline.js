var errorPictureArray =[
`../img/errpic1.jpg`,
`../img/errpic2.jpg`,
`../img/errpic3.jpg`,
`../img/errpic4.jpg`,

];

var picNumber = Math.floor((Math.random() * 4) + 1);


var errorImage = document.createElement('img');
errorImage.src =errorPictureArray[picNumber];
errorImage.setAttribute('alt','Image of my cat Nacho showcasing an error to load page');
var imgDiv = document.getElementsByClassName('errMsgImg')[0];
imgDiv.append(errorImage);
