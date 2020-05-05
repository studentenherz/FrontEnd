

// const shareBtn = document.getElementById("share-btn");
//
// var filesArray = new Array();
// var file = new File(["foo"], "sources/frase1.svg");
// filesArray.push(file.value);

// console.log(filesArray);
//
// shareBtn.onclick = function() {
  // if (navigator.canShare && navigator.canShare({files: filesArray })) {
  //   // alert("puedes compartir");
  //   navigator.share({
  //     files: filesArray,
  //     title: 'Prueba',
  //     text: 'It worked!'
  //   }).then(()=> console.log('Successfully shared.'))
  //   .catch((error)=> console.log('Unsuccesful sharing', error));
  // }
  // else{
  //   alert(`You're system doesn't support file sharing`);
  // }
  // alert("sí");
//   const image = new URL("src/frase1.svg", "http://127.0.0.1/FrontEnd");
//   if (navigator.share) {
//             navigator.share({
//                     title: "title.value",
//                     text: "jaja",
//                     url: image,
//                 })
//                 .then(() => console.log('Successful share'))
//                 .catch((error) => console.log('Error sharing', error));
//         } else {
//             console.log("Web Share API is not supported in your browser.")
//         }
// }
