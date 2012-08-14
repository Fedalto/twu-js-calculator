function Calculator(){
    this.displayContent = "";
    this.operand1 = "";
    this.operand2 = "";
    this.nextOperation= function(){};
    this.hasNextOperation = false;

    this.enter = function(number)
    {
        if (isNaN(Number(number))) {
            this.pressOperationButton(number);
        } else {
            this.displayContent += number;
        }
    }

    this.display = function()
    {
        if(this.displayContent === "") return this.operand1;
        return this.displayContent;
    }

    this.pressOperationButton = function(operator)
    {
        this.operand2 = this.operand1;
        this.operand1 = this.displayContent;
        this.displayContent = "";

        if (operator === "="){
            return this.equalToOperation();
        }

        if(this.hasNextOperation ){
            this.equalToOperation();
        }

        this.hasNextOperation = true;
        switch(operator)
        {
            case '+' : this.nextOperation = this.addOperation; break;
            case '-' : this.nextOperation = this.subtractOperation; break;
            case 'x' : this.nextOperation = this.multiplyOperation; break;
            case '÷' : this.nextOperation = this.divideOperation; break;
            case '%' : this.nextOperation = this.modOperation; break;
        }

    }

    this.equalToOperation = function()
    {
        this.displayContent = "";
        this.operand1 = this.nextOperation().toString();
    }

    this.addOperation = function()
    {
        this.operand1 = Number(this.operand2)+Number(this.operand1);
        return this.operand1;
    }

    this.subtractOperation = function()
    {
        this.operand1 = Number(this.operand2)-Number(this.operand1);
        return this.operand1;
    }

    this.multiplyOperation = function()
    {
        this.operand1 = Number(this.operand2)*Number(this.operand1);
        return this.operand1;
    }

    this.divideOperation = function()
    {
        this.operand1 = Number(this.operand2)/Number(this.operand1);
        return this.operand1;
    }

    this.modOperation = function()
    {
        this.operand1 = Number(this.operand2)% Number(this.operand1);
        return this.operand1;
    }

}
