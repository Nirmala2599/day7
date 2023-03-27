var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType='json';
xhr.send();
xhr.onload = function()
    {
        var responseObj =xhr.response;
       
    

      var copy=[];
      responseObj.forEach(function(item) {

        copy.push(`${item.name.common},${item.capital},${item.flag} `);
      });
      console.log(copy);
    }
  