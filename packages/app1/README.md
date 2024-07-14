# App1

Act as the app shell and an aggregation portal with other remote (app2)

## Installation

```console
// install all packages defined in package.json
npm i
```

## Start the service

```
npm run start
```

It will host the app1 on localhost:3000

### Note

App1 has a module federation relationship with app2, to fully present the functions of app1, the service of app2 (localhost:3001) needs to be turned on.

## Build

```
npm run build
```