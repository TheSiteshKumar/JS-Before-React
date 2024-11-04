// var ans = new Promise((res, rej) => {
//   var n = Math.floor(Math.random() * 10);

//   console.log(`Random number generated: ${n}`);

//   if (n < 5) {
//     return res();
//   } else {
//     return rej();
//   }
// });

// ans
//   .then(function () {
//     console.log("below 5");
//   })
//   .catch(function () {
//     console.log("above 5");
//   });

// sabse pahle ghar par aao
// gate kholo aur gate lagao
// khana pakao kahana khao
// incognito mode chalao
// sojao kyuki tum thak gaye ho

var ans = new Promise(function (res, rej) {
  return res("sabse pahle ghar par aao");
});

var p2 = ans.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("gate kholo aur gate lagao");
  });
});

var p3 = p2.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("khana pakao kahana khao");
  });
});

var p4 = p3.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("incognito mode chalao");
  });
});

var p5 = p4.then(function (data) {
  console.log(data);
  return new Promise(function (res, rej) {
    return res("sojao kyuki tum thak gaye ho");
  });
});

// Handle final promise
p5.then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.error("Error in promise chain:", error);
});
