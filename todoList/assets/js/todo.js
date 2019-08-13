//alert("Konbanwa")
//check off specific todos
//$("li").click(function(){
//    //if li is gray
//        //turn black
//    //else
//        //turn it gray
//alert($(this).css("color"))
//    if($(this).css("color") === "rgb(128, 128, 128)"){
//        $(this).css({
//            "color":"black",
//            "text-decoration":"none"
//        });
//    } else {
//        $(this).css({
//            "color":"gray",
//            "text-decoration":"line-through"
//        });
//    }
//    if used without quotes around css properties
//    $(this).css({
//        color:"grey",
//        textDecoration:"line-through"
//    });
//})

var ye = [];
var check = 0;

 $("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
 })

// X - delete todo
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function(){
        ye.push($(this).text())
        $(this).remove();
    });
    event.stopPropagation(); /* Stops click listener from bubbling up */
})

$("input[type='text']").keypress(function(){
    /* which correspondes with which key was pressed */
    if(event.which === 13){
        var input_text = $(this).val();
        $(this).val("");
        $(".todo_list_items").append("<li><span><i class='fa fa-trash'></i></span> " + input_text + "</li>");
    }
})

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle("slow");
})

$('.fa-folder').click(function(){
    $('.todo_list_items li').toggleClass('pagination');
    window.setTimeout(function(){
        $('.todo_list_items').toggle("slow", function(){
            $("input[type='text']").toggle("fast")
            $(".fa-plus-square").toggle();
            var text = $('h1:nth-child(1)').text();
            $('h1:nth-child(1)').text(text === 'To-Do List' ? 'Archived' : 'To-Do List');
            $("h1").toggleClass('pag-2')
            
//            for(var i = 0; i != ye.length; i++){
//                console.log(i)
//                $(".arch-list").append("<li>" + ye[i] + "</li>");
//            }
            
            if(ye.length != check){
                updateArchived(ye);
            }
            
            $('.archived').toggle("slow");
        });
    },500);
    
});

function updateArchived(yee){
    check = yee.length;
    for(var i = 0; i != yee.length; i++)
        $(".arch-list").append("<li>" + yee[i] + "</li>");
}
