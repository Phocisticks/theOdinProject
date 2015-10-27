$(document).ready(function() 
{
    var $newdiv = $('<td><div class="square" /></td>');
    var $side = 10;
   
    function updateSize(side)
    {
        $('.row').remove();
        for (var i = 0; i < $side; i++) 
        {
            $('table').append('<tr class="row"></tr>');   
        }
        for (var i = 0; i < $side; i++) 
        {
            $('tr').append($newdiv);  
        }
    }
    
    //Creating the beginning grid
    updateSize($side);
    
    // Resizes the grid to user specification
    $('button').click(function()
    {
        $side = prompt("Choose a side Length");
        updateSize($side);
    });
    
    $('.square').hover( function()
    {
       $(this).addClass('selected'); 
    });
});
