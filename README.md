# Angri - Colored Node.js Logging

## Installation

    npm install angri

## Getting Started

```js
var Angri = require('angri');
```

### Description

Angri logs information to the console with a timestamp and a color to help discern logs.

### Logging Functions

```js
Angri.log("Users saved");

Angri.info("You left the oven on");

Angri.warning("Its dangerous to go alone. Take this!");

Angri.error("Error", "errorMessage");

Angri.routeHit("/home/user");

Angri.serverStart("http://localhost:3030");
```

### Future Features

* Save logs to file
* Customize colors
* Event Listeners
