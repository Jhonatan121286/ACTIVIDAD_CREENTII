function cambioimagen1() {
    $(this).css("background", "gray")    
}
function cambioimagen2() {
    $(this).css("background", "pink")    
}
$(".texto1").hover(cambioimagen1, cambioimagen2)



$(".col-md-8").mouseover(function() {
    $(this).css("filter", "saturate(300%)") 
})
$(".col-md-8").mouseout(function() {
    $(this).css("filter", "grayscale(300%)")  
})