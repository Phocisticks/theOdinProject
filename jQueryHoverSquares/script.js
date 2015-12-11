$(document).ready(function() 
{
    var $block = '<td><div class="square"/></td>';
    var $row = '<tr class="row"></tr>'
    var $side = 10;
    var $grid = 500;
    var $size = 35;
    var $selected = 'option_1'
    var $Modifier = 'selected';
    
    // Sets every square and sets full opacity for the 'blackout' option
    function whiteout()
    {
        $('.square').css({'opacity':'1','background-color':'#FFF'});
    }
    // Updates the size of the grid
    // @$side is the height and width of our grid
    function update($side)
    {
        // Flushes out the previous grid
        $('.row').remove();
        
        // Creating the rows
        for (var i = 0; i < $side; i++) 
        {
            $('table').append($row);   
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
        // Returns a random hex string for color
        // Found when I googled 'Random Color in CSS'
        function randColor()
        {
            return '#'+ Math.floor(Math.random()*16777215).toString(16);
        }
        // Attaches the hover command to the divs
        // Must be done inside this function otherwise hover won't update after resize
        $('.square').hover(function()
        {
            // changes the context of our hover based on the choosen option
            switch($selected)
            {
                // Changes the color of blocks to yellow
                case 'option_1':
                    $(this).css('background-color','#FF0000')
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
    update($side);
    $('#'+$selected).addClass('choosen');
    
    // Resizes the grid to user specification
    $('button').click(function()
    {
        $side = $('input[name=size]').val();
        update($side);
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
    // Changes the border of the selections to signal which one has been choosen
    $('.options').click(function()
    {
        // Removes the choosen class from all options
        $('.options').removeClass('choosen');
        // Then attaches it to the selected options
        $(this).addClass('choosen');
        // updates the selection then redraws the grid
        $selected = $(this).attr('id');
        update($side);
        if($selected == 'option_3')
        {
            whiteout();
        }
    });
});
