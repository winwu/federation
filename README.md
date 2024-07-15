# Module Federation Example

# Introduction

This project demonstrates a micro frontend architecture using Module Federation. It allows independently deployed applications (app1 and app2) to share components dynamically.


# Getting Started

## Prerequisites

* Node.js (>=18.14.2)
* npm (>=9.5)

Please based on the engines in package.json file.


## Installation

1. Clone the repo

```
git clone https://github.com/winwu/federation.git
cd federation

```

2. Install dependencies


```
npm i
```

## Run this application

Run the following command in the root directory to start all applications:

```bash
npm run start
```


The applications will be available at:

- `app1`: http://localhost:3000
- `app2`: http://localhost:3001
- `shared-components`: http://localhost:3003


# Project Structure

- `app1`: First frontend application. Act as the app shell and an aggregation portal with app2. app1's feature is a synchronous counter, mainly implemented by React and Redux.
- `app2`: Second micro frontend application. app2's feature is a asynchronous counter, mainly implemented by React and Redux.
- `shared-components`: Shared components. (CustomLabel and CustomButton)

<img src="../master/assets/workspace.png?raw=true" width="400">

<img src="../master/assets/app1_app2.jpg?raw=true">