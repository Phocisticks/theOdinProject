$(document).ready(function() 
{
    var $block = '<td><div class="square"/></td>';
    var $side = 10;
    var $grid = 500;
    var $size = 35;
    var $selected = 'option_1'
    var $color;
    var $Modifier = 'selected';
    
    function whiteout()
    {
        $('.square').css({'opacity':'1','background-color':'#FFF'});
    }
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
        // Determines the size of each square
        $size = $grid / $side;
        //Changing the size of the squares                
        $('.square').css({"width":$size,'height':$size});
        
        // Attaches the hover command to the divs
        // Must be done inside this function otherwise hover won't update after resize
        function randColor()
        {
            return '#'+ Math.floor(Math.random()*16777215).toString(16);
        }
        $('.square').hover(function()
        {
            switch($selected)
            {
                case 'option_1':
                    $(this).addClass('selected');
                    break;
                case 'option_2':
                    $(this).css("background-color",randColor());
                    break;
                case 'option_3':
                    var opac = $(this).css('opacity');
            $(this).css('opacity',(opac-0.1));
                    break;
                default:
            }
        }); 
    }      
    
    // Creating the beginning grid
    updateSize($side);
    $('#'+$selected).addClass('choosen');
    
    // Resizes the grid to user specification
    $('button').click(function()
    {
        $side = $('input[name=size]').val();
        updateSize($side);
    });
    // Adds hover effect to the sidebar selection
    $('.options').hover(function()
    {
        $(this).addClass('active');
    },
    function()
    {
        $(this).removeClass('active');
    });
    
    $('.options').click(function()
    {
        $('.options').removeClass('choosen');
        $(this).addClass('choosen');
        $selected = $(this).attr('id');
        updateSize($side);
        if($selected == 'option_3')
        {
            whiteout();
        }
    });
});
