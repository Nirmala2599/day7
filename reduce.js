
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        const{population}=element;
        return{...acc,[population]:element};
    },0)
    
    console.log(population);}
        
        
    
    