let Books=[]

function AddBook(){

    var data=GetFormData("frm")
    
    if(data.index=="")
    {
        Books.push(data)
    }
    else{
        let index=data.index;
        delete data.index;
        Books.splice(index,1, data)
        document.getElementById("btn_add").innerHTML="Add Book"
    }
 
    BindBook()    
    resetForm()
}

function GetFormData(){
    var frm=document.querySelectorAll("#frm input")
  
    var data={}
    for(var i=0; i<frm.length; i++){
       var name=frm[i].getAttribute("name");
       var val=frm[i].value;
       data[name]=val;
  
    }
    return data;
}


function BindBook(){
    let temp=`<tr><th>SNo.</th><th>title</th><th>Price</th><th>Author</th><th>Action</th></tr>`
    Books.forEach(function(book,i){
        temp+=`<tr><td>${i+1}</td><td>${book.title}</td><td>${book.price}</td><td>${book.author}</td><td><a href="#" onclick="EditBook(${i})">Edit</a>||<a href="#" onclick="DeleteBook(${i})">del</a></td></tr>`
    })
    document.getElementById("tbl_books").innerHTML=temp;
}

function EditBook(index){
    event.preventDefault();
    var data=Books[index];
    document.getElementById("title").value=data.title;
    document.getElementById("price").value=data.price;
    document.getElementById("author").value=data.author;
    document.getElementById("index").value=index;
    document.getElementById("btn_add").innerText="Update Book";
    
}
function DeleteBook(id){
    event.preventDefault()
    Books.splice(id, 1)
    BindBook();
}

function resetForm(){
    document.forms[0].reset();
}
window.onload=BindBook;

document.getElementById("btn_add").addEventListener("click", AddBook)