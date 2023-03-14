npm i ng-recaptcha@4.3.0
https://www.npmjs.com/package/ng-recaptcha/v/4.3.0

npm i ngx-material-file-input@2.1.1
https://www.npmjs.com/package/ngx-material-file-input/v/2.1.1

https://www.npmjs.com/package/firebase/v/9.6.7
https://www.npmjs.com/package/@angular/fire/v/7.2.1

https://www.npmjs.com/package/@angular/fire


https://github.com/angular/angularfire/blob/HEAD/docs/install-and-setup.md

----------------------------------------
steps

1. create angular project and install npm packages.
2. now we can add angular fire and firebase in our project like

https://www.npmjs.com/package/firebase/v/9.6.7
npm i firebase@9.6.7

https://www.npmjs.com/package/@angular/fire/v/7.2.1
npm i @angular/fire@7.2.1
 later we can add all modules related firebase in app.module.ts
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

3.now go to googlefirebase site and create project and copy the firebase sdk file and paste in
  environment file later import in app.module.

4.later we can install npm install -g firebase-tools.

5. now we can add angular materialy
ng add @angular/material
