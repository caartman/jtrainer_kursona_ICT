var VStep3;// A variable for future validator
var step3 = function () {
    var plot = null;
    this.preDispatch = function () {

    };

    this.postDispatch = function () {
        VStep3 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep3.addValidator($('input[name="step3-radios"]'), 'fourr')
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page1 button.check').click(function () {
            VStep3.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep3.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP3_RADIOS: new Radios('step3-radios')
                .addRadio('{{RADIO_TEXT_1}}', 'onee')
                .addRadio('{{RADIO_TEXT_2}}', 'twoo')
                .addRadio('{{RADIO_TEXT_3}}', 'threee')
                .addRadio('{{RADIO_TEXT_4}}', 'fourr')
                .randomize() // You can randomize radio elements
                .render(),
        }
    }
};