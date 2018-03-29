//Initial entry point for Angular.  This is where Angular modules get imported and the application gets 'bootstrapped' with those modules.
import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
