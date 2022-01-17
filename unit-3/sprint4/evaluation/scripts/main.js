async function apiCall(url) {
    try{
        let res=await fetch(url);
        let data=await res.json();
        return data;
    }
   catch(err){
       console.log(err)
   }
    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(({title,description,content,image}) => {
        let div=document.createElement("div");
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let img=document.createElement("img");
        let h3=document.createElement("h3");
        img.src=image;
        p1.innerText=description;
        p2.innerText=content;
        h3.innerText=title;
        div.append(h3,img,p1);
        var obj={
            content1:content,
            img1:image,
            title1:title

        }
        // console.log(obj)
       
        div.addEventListener("click",show)
        function show(){
            
                console.log(obj)
               localStorage.setItem("article", JSON.stringify(obj))
                window.location.href="./news.html"
    
            
        }
        main.append(div);

    });

}

export { apiCall, appendArticles }
