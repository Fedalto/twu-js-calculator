describe("Calculator", function() {
        var calculator;

        beforeEach(function() {
                calculator = new Calculator();
        });

        describe("Entering single digits", function() {
                describe("when entering '0'", function() {
                        it("should display 0", function() {
                                calculator.enter("0");
                                expect(calculator.display()).toEqual("0");
                        });
                });
        });

        describe("Entering multiple digits", function(){
                describe("when entering 123", function() {
                        it("should display 123", function(){
                                calculator.enter("1");
                                calculator.enter("2");
                                calculator.enter("3");
                                expect(calculator.display()).toEqual("123");
                        })
                })
        });

        describe("Press Add button", function(){
                        describe("when adding two number", function(){
                                it("should display the result", function(){
                                    calculator.enter("1");
                                    calculator.enter("2");
                                    calculator.enter("3");
                                    calculator.enter("+");
                                    calculator.enter("1");
                                    calculator.enter("2");
                                    calculator.enter("3");
                                    calculator.enter("=");
                                    expect(calculator.display()).toEqual("246");
                                })
                        })
                });

        describe("Operations", function(){
                describe("when subtracting two number", function(){
                        it("should display the result", function(){
                            calculator.enter("5");
                            calculator.enter("5");
                            calculator.enter("5");
                            calculator.enter("-");
                            calculator.enter("2");
                            calculator.enter("2");
                            calculator.enter("2");
                            calculator.enter("=");
                            expect(calculator.display()).toEqual("333");
                        })
                })
                describe("when multiplying two number", function(){
                        it("should display the result", function(){
                            calculator.enter("5");
                            calculator.enter("5");
                            calculator.enter("5");
                            calculator.enter("x");
                            calculator.enter("2");
                            calculator.enter("=");
                            expect(calculator.display()).toEqual("1110");
                        })
                })
                describe("when dividing two number", function(){
                        it("should display the result", function(){
                            calculator.enter("5");
                            calculator.enter("5");
                            calculator.enter("5");
                            calculator.enter("÷");
                            calculator.enter("1");
                            calculator.enter("1");
                            calculator.enter("1");
                            calculator.enter("=");
                            expect(calculator.display()).toEqual("5");
                        })
                })
                describe("when mod two number", function(){
                        it("should display the result", function(){
                            calculator.enter("7");
                            calculator.enter("7");
                            calculator.enter("7");
                            calculator.enter("%");
                            calculator.enter("1");
                            calculator.enter("5");
                            calculator.enter("=");
                            expect(calculator.display()).toEqual("12");
                        })
                })
                describe("when concatenating multiple operations", function(){
                        it("should display the result", function(){
                            calculator.enter("7");
                            calculator.enter("7");
                            calculator.enter("7");
                            calculator.enter("%");
                            calculator.enter("1");
                            calculator.enter("5");
                            calculator.enter("x");
                            calculator.enter("3");
                            calculator.enter("=");
                            expect(calculator.display()).toEqual("36");
                        })
                })

        });
});
