/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/


'use strict';
const Alexa = require('alexa-sdk');
const C_DateHelper = require('./dateHelper');
const dateHelper = new C_DateHelper();
const C_babyInfo = require('./babyInfo');
const babyInfo = new C_babyInfo();

//Add get a week random fact intent

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.21e22e7c-99d8-452a-af5a-3e59e8810de3';

const SKILL_NAME = 'La App de Noa';
const HELP_MESSAGE = 'De momento no sé hacer nada más, ya iré mejorando';
const HELP_REPROMPT = '¿Qué puedo hacer por ti?';
const STOP_MESSAGE = 'Adios Mamuza!';

//User variables
const lastperiod = new Date(2018,4,3);
const momName = "Aloña";
const babyName ="Noa";

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================


function createResponse (){

    var mom = userData("1");
    let ageResponse="";

    if (mom.babyName===""){
        if (mom.babyAge.ndays===0){
            ageResponse = "Tu bebé ya tiene " + mom.babyAge.nweeks + " semanas.";
        } else { if (mom.babyAge.ndays===1) {
            ageResponse = "Tu bebé tiene " + mom.babyAge.nweeks + " semanas y " + mom.babyAge.ndays + " dií.";
        } else {
            ageResponse = "Tu bebé tiene " + mom.babyAge.nweeks + " semanas y " + mom.babyAge.ndays + " días.";  
      }
    }
    } else {
         if (mom.babyAge.ndays===0){
            ageResponse = mom.babyName + " ya tiene " + mom.babyAge.nweeks + " semanas.";
        } else { if (mom.babyAge.ndays===1) {
            ageResponse = mom.babyName + " ya tiene " + mom.babyAge.nweeks + " semanas y " + mom.babyAge.ndays + " día.";
        } else {
            ageResponse = mom.babyName + " ya tiene " + mom.babyAge.nweeks + " semanas y " + mom.babyAge.ndays + " días.";  
        }}
    }


    
    let fullResponse = "Hola "+mom.name+". "+ ageResponse + " " + babyInfo.getWeekFact(mom.babyAge.nweeks.toString());
    var myResponse = {
        cardTitle:"La App de la Pequeña Noa"
        , text: fullResponse
        , text2read:fullResponse
        , image:"white"};
    return myResponse
};

function userData(_userID){
    if (momName==="") {
        //RequestFromConversation
    };
    if (lastperiod===""){
        //RequestFromConversation  
    };
    var age = dateHelper.weeksAndDaysFrom(lastperiod);
    if (age > 15 & babyName===""){
        //RequestFromConversation  
    };
    var mom = {
        name: momName
        , period: lastperiod
        ,  babyAge: dateHelper.weeksAndDaysFrom(lastperiod)
        , babyName: babyName
    }
    return mom;
}




const handlers = {
    'getWeekFact': function () {
        console.log("getWeekFact");
        let mom = userData("1");
        let weekRqstNum = this.event.request.intent.slots.weekNumber.value;
        let weekRequest ="";
        console.log(mom.babyAge)
        console.log(weekRqstNum)
        if (mom.babyAge.nweeks<=weekRqstNum) {
            weekRequest = "No, no, no.... No quieras adelantarte, cada cosa a su tiempo. Disfruta de la semana " +  mom.babyAge.nweeks
        } else {
            weekRequest = babyInfo.getWeekFact(weekRqstNum)
        };
        var myresponse = createResponse();
        this.response.cardRenderer(weekRequest);
        this.response.speak(weekRequest)
        this.emit(':responseReady');
        this.response.listen("¿Qué más quieres saber?");
    },
    'measureAsk':function(){
        this.response.cardRenderer("Wip");
        this.response.speak("Wip")
        this.response.listen()
        this.emit(':responseReady');
    },
    'LaunchRequest': function () {
        console.log("LaunchRequest");
        var myresponse = createResponse();
        this.response.cardRenderer(myresponse.cardTitle,myresponse.text);
        this.response.speak(myresponse.text2read)
        this.response.listen()
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.SessionEndedRequest': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
