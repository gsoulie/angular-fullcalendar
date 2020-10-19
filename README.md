# Angular Fullcalendar Demo

## Installation

[Documentation](https://fullcalendar.io/docs/angular)       

During the installation, it's possible to import specific calendar's modules. As example, here we import core, daygrid, timegrid, list and interaction :

````
npm install --save @fullcalendar/core @fullcalendar/angular @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @fullcalendar/interaction
````

> Warning : The import line ````import { FullCalendarModule } from '@fullcalendar/angular';```` **MUST** be the very first line in *app.module.ts*

If not, the following error may occurs :

````
vdom.js:3 Uncaught Error: Please import the top-level full calendar lib before attempting to import a plugin.
    at Module../node_modules/@fullcalendar/common/vdom.js (vdom.js:3)
    at __webpack_require__ (bootstrap:79)
    at Module../node_modules/@fullcalendar/common/main.js (main.js:1)
    at __webpack_require__ (bootstrap:79)
    at Module../node_modules/@fullcalendar/daygrid/main.js (main.js:1)
    at __webpack_require__ (bootstrap:79)
    at Module../src/app/demo/demo.component.ts (demo.component.ts:1)
    at __webpack_require__ (bootstrap:79)
    at Module../src/app/Modules/app-routing.module.ts (app-routing.module.ts:1)
    at __webpack_require__ (bootstrap:79)
````
