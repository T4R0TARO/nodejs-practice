// npm i nodemon -g
// nodemon
// ctr + c 'to exit nodemon'

// npm init

// npm i date-fns

/** npm install
 * when you clone a repo from github
 * npm install will download the node modules that are in the app
 * the install references the package.json
 */

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(uuid());

// save as a devDependencies
// npm i nodemon --save-dev
// OR
// npm i nodemon -D

console.log("hmu");

// npm i uuid

/* json 
 "dependencies": {
    "date-fns": "^2.30.0",
    "uuid": "^9.0.0"
  },

  "nameOfDependency" : "^majorVersion.minorVersion.patch",

  ^: update minorVersion or patch but do not update major version
  blank: only this specified version will work
  ~: update a patch version but not major or minor versions
  *: update the newest version all the time

  install specific version 
  npm i uuid@8.3.1

  check for updates 
  npm update 

  uninstall a dependecy
  npm uninstall 
  npm un  
  npm rm  

  if devDependency use `-D`
  npm rm nodemon -D

  ! if you uninstall a packaged it does not remove it from script
  ! remember to remove it manually
*/
