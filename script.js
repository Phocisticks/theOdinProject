$(document).ready(function() 
{
    var $block = '<td><div class="square"/></td>';
    var $side = 10;
    var $grid = 250;
    var $size = 100;
    function updateSize($side)
    {
        // Flushes out the previous grid
        $('.row').remove();
        
        // Creating the rows
        for (var i = 0; i < $side; i++) 
        {
            $('table').append('<tr class="row"></tr>');   
        }
        // Creating the columns
        for (var j = 0; j < $side; j++) 
        {
            $('tr').append($block);
        }
        $('.square').css({"width":"$size"});
        // Attaches the hover command to the divs
        // Must be done inside this function otherwise hover won't update after resize
        $('div').hover( function()
        {
           $(this).addClass('selected'); 
        }); 
    }      
    
    //Creating the beginning grid
    updateSize($side);
     // Resizes the grid to user specification
    $('button').click(function()
    {
        $side = $('input[name=size]').val();
        $('input[name=size]').val("");
        updateSize($side);
    });
});
