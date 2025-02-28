// // Hàm để tải và hiển thị dữ liệu JSON
// function loadJSON(callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.overrideMimeType("application/json");
//     xhr.open('GET', './Assets/Save/data.json', true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             callback(xhr.responseText);
//         }
//     };
//     xhr.send(null);
// }

// // Hàm để hiển thị dữ liệu JSON lên trang web
// function displayJSON(data) {
//     const jsonData = JSON.parse(data);
//     const displayElement = document.getElementById('json-data');
//     displayElement.innerHTML = `
//         <p><strong>Tên:</strong> ${jsonData.name}</p>
//         <p><strong>Tuổi:</strong> ${jsonData.age}</p>
//         <p><strong>Thành phố:</strong> ${jsonData.city}</p>
//     `;
// }

// // Gọi hàm để tải và hiển thị dữ liệu JSON
// loadJSON(function(response) {
//     displayJSON(response);
// });
