# CONFIG TINY :blush:

A personal implemention of the popular config library on NPM

## Quick Start

```bash
npm i config-tiny
```

or

```bash
yarn add config-tiny
```

You can also fork the project on github at https://github.com/iamnasirudeen/config.tiny

## Usage

Create a **config** folder in the root directory of your project and create a file inside the folder named **default.json**.

e.g

```bash
cd `path/to/project/` && mkdir config && cd config && touch default.json
```

The code above helps you create a config folder and also a default.json file inside the folder then you can use it like this.

The content of the `default.json` file should look like the one below.

```js
{
  "data": {
    "email": "iamnasirudeen@gmail.com"
  },
  "github_handle": "iamnasirudeen",
  "port": 3000
}

```

Then

```js
const config = require("config-tiny");
let port = config.get("port") || process.env.PORT;
```

## Note

The Config folder has to be in the root directory of your project as config uses the nodejs `**process.cwd()**` API to locate the root directory of the config folder.

`config.tiny` doesnt really support nested objects a future version would have this feature supported.

e.g

```js
config.get("data.email"); // iamnasirudeen@gmail.com
config.get("data"); // {email: "iamnasirudeen@gmail.com"}
config.get("github_handle"); // iamnasirudeen
```

## Use Case

config.tiny can be used to save environment keys. It can be used in replace of DotEnv.

Contributors are also allowed. You can hit me up at iamnasirudeen@gmail.com.

Developed with :heart: by Olohundare Nasirudeen <https://github.com/iamnasirudeen>
