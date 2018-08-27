$(document).ready(function(){
    $('#felsa1').click(function(){
       $('#par').css('fontWeight' , 'bold')
    }) ;
    $('#felsa2').click(function(){
        $('#par').css('fontStyle' , 'italic')
    }) ;
    $('#felsa3').click(function(){
        $('#par').css('textDecoration' , 'underline')
    }) ;
    $('#familly').change(function(){
        var x= $('#familly').val() ;
        $('#par').css('fontFamily' , x )
    }) ;
    $("#size").change(function () {
        
        $("#par").css("fontSize" , $("#size").val()+'px' )
        
    }) ;
        
    
})
