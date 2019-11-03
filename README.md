# HACK KOCHI CHAT APP

This is the source code for the chat app we developed based on publish subscribe architecture.The various features incorporated includes:
 * firebase database
 * javascript backend
 * real time application
 * simple html/css frontend which allows publishers to send both text messages and images
### Folder Structure Conventions
Follow the directory structure of the project
``` bash
. 
├── ... 
├── web 
│   ├── functions 
│   └──public 
│       ├── images 
│       ├── scripts 
│       └──styles 
├──web-start 
│   ├── functions 
│   └── public 
│       ├── images 
│       ├── scripts 
│       └── styles 
├── performance-monitoring 
│   └── public 
│       ├── images 
│       ├── scripts 
│       └── styles 
├── performance-monitoring-start 
│   └──public 
│       ├── images 
│       ├── scripts 
│       └── styles 
├──	cloud-functions 
│   ├── functions 
│   └──public 
│       ├── images 
│       ├── scripts 
│       └── styles 
├──cloud-functions-start 
│   ├── functions 
│   └── public 
│       ├── images 
│       ├── scripts 
│       └── styles 
├──cloud-functions-angular 
│   ├── e2e 
│   ├── functions 
│   └── src 
│       ├── app 
│       ├── assets 
│       │   └──images 
│       └── environment 
├──cloud-functions-angular-start 
│   ├── e2e 
│   ├── functions 
│   └── src 
│       ├── app 
│       ├── assets 
│       │   └── images 
│       └── environment                
│     
└── ... 
```

## Local Setup

1. Install the CLI by running the following npm command:
```
npm -g install firebase-tools
```

2.Authorize the Firebase CLI by running the following command:
```
firebase login
```

3. With your command line accessing your app's local web-start directory, associate Hack Kochi chat app with your Firebase project by running the following command:
```
firebase use --add
```

4. In the console from the web-start directory
```
firebase serve --only hosting
```

5. Import the Firebase SDK
6. Configure Firebase

## HOSTING 
Files were deployed to the Firebase project by running the following command:
```
firebase deploy --except functions

```
And finally visit Hack Kochi Chat App that's now fully hosted using Firebase Hosting:)

## License
See [LICENSE](LICENSE)
