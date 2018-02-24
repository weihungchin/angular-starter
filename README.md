# PwaMark1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Description

Minimal starter project with service-worker and manifest.json. Lighthouse score of over 90+.

##Steps used to generate this project
(Assuming Angular CLI v1.6.9 is installed)

1. Run:

```
ng new projectName --service-worker --style=scss
```

2. Add `manifest.json` file in the `src` folder generated in Step 1. Copy the content below into `manifest.json`

```
{
    "short_name": "AppName",
    "name": "Name on Splash Screen™",
    "start_url": "/",

    "theme_color": "#f48c5b",
    "background_color": "#ffffff",

    "display": "standalone",
    "orientation": "portrait",

    "icons": [
        {
            "src": "/assets/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]


}
```

3. In `angular-cli.json`, in the `assets` array, add `manifest.json`, like the following:

```
{
    ...
    "apps":[
         ...
        "assets":[
            ...
            "manifest.json"
        ]
    ]

}
```

4. Add the following meta link tag into `index.html`. (Change the path reference to the path of your favicon)

   <link rel="manifest" href="/manifest.json">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="theme-color" content="#363636">
   <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
  <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">

  5. Add a `noscript` tag inside the `<body>` tag of `index.html`

  ```
  <body>
  <noscript>
    <pre class="cow">
        -----------------------------------
      &lt; Opps, why u no enable Javascript 😥 &gt;
        -----------------------------------
               \   ^__^ 
                \  (oo)\_______
                   (__)\       )\/\
                       ||----w |
                       ||     ||
          
      </pre>
      </noscript>
</body>

  ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
