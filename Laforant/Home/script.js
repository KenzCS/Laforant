$(document).ready(function()
{
    $(".row-3-sub2 p").hide();
    $(".cartoon").hide();
    $(".circle").hide();
    $(".row-4-sub2 p").hide();

    $(document).scroll(function()
    {
        var y = $(this).scrollTop();
        if (y > 400)
        {
            $(".row-3-sub2 p").fadeIn();
            $(".cartoon").fadeIn();
        }
        else
        {
            $(".row-3-sub2 p").fadeOut();
            $(".cartoon").fadeOut();
        }
      });

    $(document).scroll(function()
    {
        var y = $(this).scrollTop();
        if (y > 1000)
        {
            $(".circle").fadeIn();
            $(".row-4-sub2 p").fadeIn();
        }
        else
        {
            $(".circle").fadeOut();
            $(".row-4-sub2 p").fadeOut();
        }
      });
});