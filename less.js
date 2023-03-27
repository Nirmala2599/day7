var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType='json';
xhr.send();
xhr.onload = function()
    {
        var responseObj =xhr.response;
        var res= responseObj.filter((item)=>{
            return item.population<200000;
    
    });console.log(res);
}