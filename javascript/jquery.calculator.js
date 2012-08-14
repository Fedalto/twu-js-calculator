$("document").ready(function(){

        calculator = new Calculator();

        $("input[type ='button']").click(function() {
            calculator.enter($(this).val());
        $("input[id = 'display']").val(calculator.display());
        });

        });
