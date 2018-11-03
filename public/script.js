function save(){
    let value = $("#text").val();
    $.ajax({
        method: "POST", 
        data: {content : value},
        success: function(){
            alert("file saved!");
        }
    });

}