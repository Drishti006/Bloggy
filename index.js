import express from "express"


const app = express();
const port = 3000;
app.use(express.static("styles"))
app.use(express.urlencoded({extended:true}))

let blogArray = [];
let blogTitle = [];


app.get("/",(req,res)=>{
    res.render("index.ejs",{
        blogArray:blogArray,
        blogTitle:blogTitle
    })

})
app.get("/add",(req,res)=>{
    res.render("create.ejs")
})
app.post("/created",(req,res)=>{
    console.log(req.body);
    blogArray.push(req.body.blog)
    blogTitle.push(req.body.title)
    res.redirect("/")
})
app.get("/delete/:index",(req,res)=>{
    const indexToDelete = req.params.index;
    blogArray.splice(indexToDelete,1)
    blogTitle.splice(indexToDelete,1)
    console.log(indexToDelete)
    console.log(blogArray)
    res.redirect("/")
})
app.get("/update/:index",(req,res)=>{
    const updateIndex = req.params.index;
    console.log(updateIndex)
    res.render("update.ejs",{
        updateBlog: blogArray[updateIndex],
        updateTitle: blogTitle[updateIndex],
        updatedIndex: updateIndex
    })
})
app.post("/updated/:updatedIndex",(req,res)=>{
    const indextoUpdate = req.params.updatedIndex;
    blogArray[indextoUpdate] = req.body.updatedBlog;
    blogTitle[indextoUpdate] = req.body.updatedTitle;
    console.log("req.body.updatedTitle")
    res.redirect("/")
})
app.get("/blog/:index",(req,res)=>{
    const indexOfBlog = req.params.index;
    res.render("blog.ejs",{
        blogBody: blogArray[indexOfBlog],
        index: indexOfBlog,
        blogTitle: blogTitle[indexOfBlog]
    })
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})