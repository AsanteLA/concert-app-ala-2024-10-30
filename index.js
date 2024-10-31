let express = require("express");
let app = new express();                                                                     

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.cj44a88eg9cv.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "DonutSponsor1",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
 let html = "<body><ul>";
 for (let i=0; i<result.length;i++){
 html += "<li>" + result[i].location + "</li>";
 }
 html += "</body>"
  console.log(result);
  res.send(html);
 }); 
});
app.listen(3000);
