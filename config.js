"use strict";

const fs = require("fs");
const path = require("path");
const config_directory = path.join(process.cwd(), "config");
const config_file = path.join(config_directory, "default.json");

if (!fs.existsSync(config_directory))
  throw new Error("config directory does not exist");

if (!fs.existsSync(config_file))
  throw new Error("a default.json file doesnt exist in the config folder");

const config = function () {
  this.read_config_file = fs.readFileSync(config_file, { encoding: "utf-8" });
  this.parsed_config_file = Object.freeze(JSON.parse(this.read_config_file));
};

config.prototype.get = function (arg) {
  let arg_is_an_object = arg.split(".").length > 1;
  if (arg_is_an_object) {
    let arg_array = arg.split(".");
    let new_argument = arg_array[arg_array.length - 1];
    let res;
    Object.keys(this.parsed_config_file).map((key, index) => {
      if (this.parsed_config_file[key].hasOwnProperty(new_argument)) {
        res = this.parsed_config_file[key][new_argument];
      }
    });
    return res;
  }

  if (!arg_is_an_object) {
    // Filter through all the objects in the default.json file and get the value of arg(argument)
    let arg_value = Object.keys(this.parsed_config_file)
      .filter((item) => item == arg)
      .toString();

    // check arg(argument) validity
    if (arg_value == "")
      return arg.concat(" doesnt exist in the config/default.json file");

    return this.parsed_config_file[arg_value];
  }
};

config.prototype.has = function (arg) {
  if (!arg) throw new Error("config.has needs an argument.");
  let arg_is_an_object = arg.split(".").length > 1;
  if (arg_is_an_object) {
    let arg_array = arg.split(".");
    let new_argument = arg_array[arg_array.length - 1];
    let res;

    Object.keys(this.parsed_config_file).map((key, index) => {
      if (this.parsed_config_file[key].hasOwnProperty(new_argument)) res = true;

      if (res == true) return;
      else res = false;
    });
    return res;
  }

  if (!arg_is_an_object) {
    // Filter through all the objects in the default.json file and get the value of arg(argument)
    let arg_value = Object.keys(this.parsed_config_file)
      .filter((item) => item == arg)
      .toString();

    if (arg_value == "") return false;

    return true;
  }
};

module.exports = new config();
