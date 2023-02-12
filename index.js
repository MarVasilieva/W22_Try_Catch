function onSearch(){
    let wordsearch =document.getElementById("userGiff").value;
    fetch ("https://api.giphy.com/v1/gifs/search?q=" + wordsearch + "&api_key=b11HdOMgaljN360FcyhSLpDQ4plP203S&limit=5")
    .then ((response) => {
       if (response.status >=200 && response.status < 300) {
        return response;
       }
       else {
        let error = new Error ('Сервер не доступен');
        error.response = response;
        throw error
       }
    })
  .then (response => response.json())
  .then(user =>{
        let array = user.data;
        console.log(array);
        array.forEach(function(image) {
            const Myimage= document.createElement("img");
            const divContainer = document.querySelector("#result");
            Myimage.src = image.images.fixed_height.url;
            divContainer.appendChild(Myimage);
        });
       })
    .catch(error => console.log(error));
}
function onDelete(){
    document.querySelector("#result").innerHTML = '';
}
   