const { handler } = require("./puppet");

handler({}, {})
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
