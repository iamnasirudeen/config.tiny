# CONFIG TINY :blush:

A personal implemention of the popular config library on NPM

## Quick Start

It's not actually a Module on NPM for now, but you can just git clone https://github.com/iamnasirudeen/config.tiny and use in your project. config.tiny does not depend on any other nodejs library.

## Usage

Create a **config** folder in the root directory of your project and create a file inside the folder named **default.json**.

e.g

```
cd yourProjectDirectory && mkdir config && cd config && touch default.json
```

The code above helps you create a config folder and also a default.json file inside the folder

## Note

config.tiny doesnt really support nested objects for now. Nested objects is one feature i would be adding later on. But it has support for a single nested object.

e.g

```
config.get("data.email") // iamnasirudeen@gmail.com
config.get("data") // {email: "iamnasirudeen@gmail.com"}
config.get("github_handle") // iamnasirudeen
```

## Use Case

config.tiny can be used to save environment keys. It can be used in replace of DotEnv.

Contributors are also allowed. You can hit me up at iamnasirudeen@gmail.com.

Developed with :heart: by Olohundare Nasirudeen <https://github.com/iamnasirudeen>
