# Welcome to kLogs
> The only log manager you'll ever need! Sponsored by [Blog Desire](https://www.blogdesire.com)

kLogs is a super simple logger for any of your projects. Some example use cases are tracking errors on your project. Sample SDK is available for some common languages. Yet, it's extremely simple to use with any programming language!
# Primary Concept
The primary concept is pretty simple. You get the API key, you prepare your log, and send a post request with the log to the server. And the next time you visit the server, you can see all the logs you have prepared and sent to the server!

# Get started with kLogs and JavaScript
First you load the kLogs SDK.
```javascript
<script src="https://logs.khokon.dev/kLogs.js">
```
Or install via npm

```
npm install @khokonm/klogs
```

Make sure to require kLogs before using when installed via npm
```javascript
const kLogs = require("@khokonm/klogs")
```

Then you create a new instance of the kLogs SDK.
```javascript
var Logs = new kLogs('YOUR_API_KEY');
```

After that you prepare your log.
```javascript
var log = {
  "message": "This is a log message",
  "source": "Project X",
  "medium": "ServerSide Script",
  "additional_info": {
    "server": "node-16",
    "note": "a sample note"
  }
};
Logs.prepare(log);
```

Finally you send the log to the server.
```javascript
Logs.send();
```
The send method returns a promise. You can use the then method to get the response.
```javascript
Logs.send().then((response) => {
  console.log(response);
});
```
and you can use the catch method to handle errors.
```javascript
Logs.send().catch((error) => {
  console.log(error);
});
```
or you might want to use the async/await syntax.
```javascript
const response = await Logs.send();
console.log(response);
```
Alltogether it should look something like this:
```javascript
var Logs = new kLogs('YOUR_API_KEY');
var log = {
  "message": "This is a log message",
  "source": "Project X",
  "medium": "ServerSide Script",
  "additional_info": {
    "server": "node-16",
    "note": "a sample note"
  }
};
Logs.prepare(log);
const response = await Logs.send();
console.log(response);
```
# Other Languages
kLogs still brand new and hasn't developed a lot more SDKs yet. But you can contact [here](
    https://khokon.dev/contact
) to request for SDK in a new language. We will be happy to add it.
But if you want to use kLogs in your language, you can use just follow these steps:
1. Register [here](https://logs.khokon.dev/register) to get your API key.
2. Initial a POST request
3. Pass your api key in the header of the request (key: API-KEY)
4. Pass your log in the body of the request
5. Send the request to `https://logs.khokon.dev/api`

## Body Parameters
The body of the request should be a JSON object. The following parameters are available currently:
- `message`: The message of the log. (String, Required)
- `source`: The source of the log. (String, Optional)
- `medium`: The medium of the log. (String, Optional)
- `additional_info`: Additional information of the log. (Object, Optional)

# Limitations
kLogs is still in beta and it's 100% free. So, we had to put some limitations on the usage/number of requests. Here are some of them:
- You can send at most 60 requests per minute.
- You can send at most 500 requests per hour.
- You can send at most 2500 requests per day.
- You can send at most 25000 requests per month.


# License
kLogs is licensed under the [MIT license](
    https://logs.khokon.dev/license.html
).
# Contributing
If you want to contribute to kLogs, please check out [here](
    https://github.com/khokonm/kLogs
).
# Version
kLogs version is [1.0.1](
    https://logs.khokon.dev/
).
# Changelog
- [1.0.1](
    https://logs.khokon.dev/
): Initial release.
