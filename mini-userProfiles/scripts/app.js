//  Take note on the empty array we're passing as the second parameter to angular.module, this empty array tells Angular to create a new module rather than just getting an old module that has already been created. It's crucial to understand that in our 'app.js' file we're creating a new module (passing in the empty []) because our 'app.js' file is our hub as we mentioned earlier.

// REMEMBER: when we put "[]" in our angular.modules declaration, it's telling Angular that we are creating a new module named "userProfiles". If we were to omit the "[]" it would be asking Angular to go and look for a module named "userProfiles"

var app = angular.module('userProfiles', []);
