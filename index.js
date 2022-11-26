let express = require("express");
let app = new express();

let newpro = fetch("https://api.openweathermap.org/data/2.5/weather?q=patna&appid=1c498ed436194996868104427e41f9e6");
let data = {
    name:"vivek singh rajput",
    skill : [1,2,3,4],
    salary : "2 cr per annum.",
    locations : ["seattale","amestardam","singapore","london","warsaw"]
}
let da ={};
newpro.then((res)=>{
    return res.json();
}).then((r)=>{
    console.log(r.main.temp);
    da = r;
    // console.log(da);
})
setTimeout(()=>{
    console.log(da);
},3000)
// console.log(newpro.r.main.temp);



app.set("view engine","ejs");

app.get("",(req,res)=>{
    res.send("hi there")
})
app.get("/p",(req,res)=>{
    res.render("index.ejs",{data})
})
app.get("/t",(req,res)=>{
    res.render("index.ejs",{da})
})
app.listen(5000);