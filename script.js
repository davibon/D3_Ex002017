function launch(){
    var num = cRandom(1911,2016);
    console.log(num);
    d3.select("p#ranum").text(num);
}

var cRandom = function(m,n){
    return Math.floor(Math.random()*(n-m))+m;
}