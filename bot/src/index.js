module.exports = async function App(context) {
  const message = context.event.text;

  if (context.event.isText) {
    if (message.indexOf("hi") >= 0 || message.indexOf("hello") >= 0) {
      await context.sendText("Hello 👋");
    }

    if (
      message.indexOf("how are you") >= 0 ||
      message.indexOf("what's up") >= 0 ||
      message.indexOf("you") >= 0
    ) {
      await context.sendText("Thanks, I'm good!, what's can i help you ? 😊");
    }

    if (message.indexOf("news") >= 0) {
      await context.sendText(
        "No news for now, you can check Google for it: https://google.com 🤗"
      );
    }

    if (message.indexOf("date") >= 0 || message.indexOf("today") >= 0) {
      var date = new Date();
      var d = date.toUTCString();
      await context.sendText("Today is: " + d + " in your location 😱");
    }

    if (message.indexOf("thanks") >= 0 || message.indexOf("thank you") >= 0) {
      await context.sendText("With pleasure, it's all you need ? ☺");
    }

    if (message.indexOf("yes") >= 0) {
      await context.sendText("Have a good day 😋");
    }

    if (message.indexOf("no") >= 0) {
      await context.sendText("What can i help you ? 😊");
    }
  }
};