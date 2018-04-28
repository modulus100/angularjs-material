import angular from 'angular';
import appModule from './app/app';
import angularMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';
import 'angularjs-social-login';

import '../node_modules/angular-material/angular-material.css';

angular.module("crud", [angularMaterial, uiRouter, appModule, 'socialLogin'])
    .config(["$compileProvider","socialProvider", function ($compileProvider, socialProvider) {

      $compileProvider.debugInfoEnabled(false);
      socialProvider.setGoogleKey("625020750188-hvvue2ajm8mbt1efq74sf51ethkl2g5f.apps.googleusercontent.com");
}]);
