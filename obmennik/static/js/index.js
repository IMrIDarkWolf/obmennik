$(document).ready(function () {
  coin = "BTC";
    coins = "DASH";
    $(document).on("click", ".tools", function () {
        $(".load").show();
        $('.tools').removeClass('hover');
        coin = $(this).attr('data-tool');
        $(this).addClass('hover');
        var give = $("#give").val();
				$.ajax({
					url: "", // Обработчик
					type: "GET",
					data: {"coin": coin,"give":give,"coins":coins, "typet": "take"},
					cache: false,
					success: function(response){
	console.log(response);		
	$("#receive").val(Number(response));
    $(".load").hide();

			    }
				});
    });
        $(document).on("click", ".tool", function () {
        $(".load").show();
        $('.tool').removeClass('hover');
        coins = $(this).attr('data-tool');
        $(this).addClass('hover');
        var give = $("#give").val();
				$.ajax({
					url: "", // Обработчик
					type: "GET",
					data: {"coin": coin,"give":give,"coins":coins, "typet": "take"},
					cache: false,
					success: function(response){
	console.log(response);		
	$("#receive").val(Number(response));
    $(".load").hide();

			    }
				});
    }); 
    $('#mail').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #569b44'});
                $('#submit').removeAttr("disabled");
                $("#message_accept").text('Верно').show().delay(1500).fadeOut(800);
            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#submit').attr("disabled", "disabled");
                $("#message_error").text('Не верно').show().delay(1500).fadeOut(800);
                
            }
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#submit').attr("disabled", "disabled");
            $("#message_error").text('Поле email не должно быть пустым').show().delay(1500).fadeOut(800);
        }
    });
    $(document).on("click", "#submit", function () {
       var mail = $("#mail").val();
       var review = $("#revi").val();
        var dates = new Date();
        				$.ajax({
					url: "", // Обработчик
					type: "GET",
					data: {"mail": mail,"review":review,"dates":dates, "typet": "review"},
					cache: false,
		success:function(data){
        console.log(data);
//			datas = JSON.parse(data);
//			 $.each(datas, function(index, data){
// });
//
//			if(datas.value == "true"){
//				$("#message_accept").text(datas.echo).show().delay(1500).fadeOut(800);
//		                $(".text_review").prepend("<div class='item_review'><b>"+ mail +"</b><p>"+ review +"</p><div class='date'>"+ dates +"</div></div>");
//
//			}
//            			if(datas.value == "false"){
//				$("#message_error").text(datas.echo).show().delay(1500).fadeOut(800);
//	
//		
//			}
			
		}
                    
    
    });

         });
    $("#give").keyup(function(){
        $(".load").show();
        var give = $("#give").val();
				$.ajax({
					url: "", // Обработчик
					type: "GET",
					data: {"coin": coin,"give":give,"coins":coins, "typet": "take"},
					cache: false,
					success: function(response){
	console.log(response);		
	$("#receive").val(Number(response));

    $(".load").hide();

			    }
				});
});
    $(document).on("click", "#get", function () {
        var give = $("#give").val();
        var receive = $("#receive").val();
        $.ajax({
            type: "POST"
            , data: {"give": give, "receive": receive, "get": coin, "set": coins, 'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val()
            }
            , url: ""
            , cache: false
            , success: function (response) {
                $("#tes").html(response);
            }
        });
    });
    $("input#receive").keydown(function (event) {
        // Разрешаем нажатие клавиш backspace, Del, Tab и Esc
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем выделение: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем клавиши навигации: Home, End, Left, Right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        }
        else {
            // Запрещаем всё, кроме клавиш цифр на основной клавиатуре, а также Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
    $("input#give").keydown(function (event) {
        // Разрешаем нажатие клавиш backspace, Del, Tab и Esc
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем выделение: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем клавиши навигации: Home, End, Left, Right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        }
        else {
            // Запрещаем всё, кроме клавиш цифр на основной клавиатуре, а также Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });


});
