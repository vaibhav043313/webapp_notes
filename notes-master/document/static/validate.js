$(function(){
    var $new_note = $("#validate-note");
    if($new_note.length){
        $new_note.validate({
            rules:{
                title:{
                    required: true
                },
                content:{
                    required: true
                }
            },
            messages:{
                title:{
                    required: "Title is Mandatory!"
                },
                content:{
                    required: "Discription is Mandatory!"
                }
            }
        })
    }
})
