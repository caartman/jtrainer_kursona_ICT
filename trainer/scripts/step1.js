var VStep1;// A variable for future validator
var step1 = function () {
    //var plot = null;
    this.preDispatch = function () {

    };

    this.postDispatch = function () {
        VStep1 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep1.addValidator($('input[name="step1-input"]'), ['QA Analyst', 'QA'], true, false) // It means 1 and 4 will be correct
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page1 button.check').click(function () {
            VStep1.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep1.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP1_INPUT: new TextInput('step1-input')
                .render(),
        }
    }
};