// const fs = require("fs/promises");

// //===== Promise API =======

// (async () => {
//   try {
//     await fs.copyFile("text.txt", "copy-promise.txt");
//   } catch (error) {
//     console.log(error);
//   }
// })();

//=======Callback API =======
const fs = require("fs");

fs.copyFile("text.txt", "copy-promise-1.txt", (error) => {
  if (error) console.log(error);
});
