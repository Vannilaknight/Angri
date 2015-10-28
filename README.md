# Angri - Logger for Hapi.js

## Installation

    npm install angri

## Getting Started

```js
var Angri = require('angri');
```

### Logging Functions

```js
Angri.log("Users saved");

Angri.info("You left the oven on");

Angri.warning("Its dangerous to go alone. Take this!");

Angri.error("Error", "errorMessage");

Angri.routeHit("/home/user");

Angri.serverStart("http://localhost:3030");
```
