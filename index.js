const express=require('express');
const port = 8000;
const path=require('path');
const bodyparser=require('body-parser');

const db=require('./config/mongoose');
const Todo=require('./models/todo');


const app=express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assests'));

app.use(express.urlencoded());

app.get('/todo',function(request,response){
    return response.render('todo',{
        title:"Let play with ejs"

    });
});

app.get('/',function(request,response)
{
        Todo.find({},function(err,todo)
        {
            if(err){
                console.log("Error is found in the server!!");
                return ;
            }
            return response.render('todo',{
                title:'todolist',
                todo_list:todo
            })
        })
})


app.post('/create-todo',function(request,response)
{
    Todo.create({
        desc:request.body.desc,
        option:request.body.option,
        date:request.body.date
    },
       function(err,newTodo){
           if(err){
               console.log('Error is find !!!');
               return ;
           }
           console.log('*******',newTodo);
           return response.redirect('back');
    })
})

app.get('/delete-todo/',function(request,response)
{
    let id=request.query.id;
    Todo.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            console.log('Error is occuring !!!');
            return ;
        }
        return response.redirect('back');
    });
})

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in the port !!!",err);
    }
    console.log("Working fine at the Port number",port);
})