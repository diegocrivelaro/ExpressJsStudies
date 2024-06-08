const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  res.send(`
   <html>
    <head>
      <title>Middleware</title>
    <body>
      <h1>Middleware</h1>
    </body>
   </html>
  `)
})

module.exports = router;