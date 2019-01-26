// buttonId.addEventListener('click', add);
//
// function add() {
//     weatherForecast();
// }
//
//
// function weatherForecast() {
//
//   let town = inputId.value;
//   xml.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=' + town + '&APPID=a6cbd1739b09211445abdfb2703aa168');
//
//
//
//   xml.addEventListener('readystatechange', function() {
//     if (xml.readyState == 4 && xml.status == 200) {
//       getNewData();
//     }
//   })
//   xml.send();
// }
// function getNewData() {
//   let newData = JSON.parse(xml.responseText);
//   console.log(newData);
// };
