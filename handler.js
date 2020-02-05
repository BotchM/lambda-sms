const sid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_PHONE_NUMBER;

const client = require('twilio')(sid, authToken);

const send = event => {
  const sms = {
    to: event.body.to,
    body: event.body.message || '',
    from: twilioNum,
  };

  return client.messages.create(sms);
}

module.exports.sendMessage = async (event, context, callback) => {
  try {
    const message = await send(event)

    console.log(`message ${message.body}`);

    // Use the callback here
  } catch (error) {
    console.log(error.message)

    // Use the callback here
  }
};
