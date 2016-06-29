'use strict';

import "./index.scss";
import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import uirouter from "angular-ui-router";
import routing from "./app.routing";
import home from "./components/home";

angular
  .module('myApp', [
    'ngMaterial',
    uirouter,
    home
  ])
  .config(routing);
