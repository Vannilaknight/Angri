# Angri - Colored Node.js Logging

## Installation

    npm install angri

## Getting Started

```js
var logger = require('angri');
```

### Description

Angri logs information to the console with a timestamp and a color to help discern logs.

### Logging Functions

```js
logger.log("Users saved");

logger.info("You left the oven on");

logger.warning("Its dangerous to go alone. Take this!");

logger.error("Error", "errorMessage");

logger.routeHit("/home/user");

logger.serverStart("http://localhost:3030");
```

### Future Features

* Save logs to file
* Customize colors
* Event Listeners
