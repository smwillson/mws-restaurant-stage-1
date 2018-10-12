var errorPictureArray =[
`../img/errpic1.jpg`,
`../img/errpic2.jpg`,
`../img/errpic3.jpg`,
`../img/errpic4.jpg`,

];

var picNumber = Math.floor(Math.random() * 3);


var errorImage = document.createElement('img');
errorImage.src =errorPictureArray[picNumber];
errorImage.setAttribute('alt','Image of my cat Nacho TacoCat showcasing an error when interet is unavailable');
var imgDiv = document.getElementsByClassName('errMsgImg')[0];
imgDiv.append(errorImage);
