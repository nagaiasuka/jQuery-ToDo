$(function() {
    
    $("#btn").on("click", function(){

        // 要素の取得
        let value = $("#input").val();

        if(value != ""){
            
            // 追加箇所
            let ul = $(".todo-list");
            // 追加するもの
            let addNode1 =$("<li>").text(value);
            let deleteBtn =$("<div>").addClass("delete").text("削除");
            
            ul.append(addNode1);
            $(addNode1).append(deleteBtn);

            
        }
        
        // 削除機能
        $(".delete").on("click", function(){
            $(this).parent().remove();
        });
    });


});