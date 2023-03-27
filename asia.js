var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType='json';
xhr.send();
xhr.onload = function()
    {
        var responseObj =xhr.response;
        var res =responseObj.filter(function(item) { 
            return item.continents =='Asia';        
        });
    console.log(res.map(function(item) {
        return item.region;

      }));
    console.log(res);
    }