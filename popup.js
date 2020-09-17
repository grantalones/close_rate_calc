// // let closed_bluesight = document.getElementsByClassName("tile closed-bluesight")[0];
// 
// let closed_bluesight = document.getElementById("header-menu")
// 
// // console.log(closed_bluesight);
// window.alert(closed_bluesight);


  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'open_active = parseFloat(document.getElementsByClassName("tile open active")["0"].getElementsByClassName("count pull-left")[0].innerText);closed_staff = parseFloat(document.getElementsByClassName("tile closed-staff")["0"].getElementsByClassName("count pull-left")[0].innerText);closed_bluesight = parseFloat(document.getElementsByClassName("tile closed-bluesight")["0"].getElementsByClassName("count pull-left")[0].innerText);closerate = closed_bluesight/(closed_staff+open_active+closed_bluesight);window.alert("Close Rate: "+(100*closerate).toString());'});
  });




// let changeColor = document.getElementById('changeColor');
// 
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
