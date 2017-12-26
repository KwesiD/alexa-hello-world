const Alexa = require('alexa-sdk');
const fs = require('fs');

const APP_ID = fs.readFileSync('appId') + "";

const greetingStrings = {
 "en-US": {
    "translation": {
   	"GREETINGS": ["Hello","Good Morning","Good Day"]
    }

 }

};

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell',"Let me greet you!");
        this.emit('GetGreeting');
    },
    'GetGreetingIntent': function () {
        this.emit('GetGreeting');
    },
    'GetGreeting': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const greetArr = this.t('GREETINGS');
        const index = Math.floor(Math.random() * greetArr.length);
        const randomGreeting = greetArr[index];

        // Create speech output
        //const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tell',randomGreeting);
    }
};

exports.handler = function (event, context) {
   /* if(event.session.attributes){
        event.session.attributes['foo'] = 'bar';
    }*/
    const alexa = Alexa.handler(event, context);
   // console.log(event.session.attributes);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = greetingStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
