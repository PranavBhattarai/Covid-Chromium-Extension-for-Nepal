if(navigator.onLine){
fetch("https://api.covid19api.com/country/nepal")
.then((response)=>response.json())
.then((data)=>{
    data = data.reverse();

    document.getElementById("active").innerText=data[0].Active;
    document.getElementById("confirmed").innerText=data[0].Confirmed;
    document.getElementById("death").innerText=data[0].Deaths;
});

} else{
    document.getElementById("content").innerHTML="<br/><br/>No Internet Connection<br/><br/>";
}
