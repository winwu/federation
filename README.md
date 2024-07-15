# Module Federation Example

## How to use

Run the following command to install packages

```bash
npm i
```

Run the following commands in the root directory

```bash
npm run start
```

Both `app1` and `app2` are independently deployed apps:

- `app1`: http://localhost:3000
- `app2`: http://localhost:3001

and `shared-components` is deployed:

- `shared-components`: http://localhost:3003


## Local Registry Install and configuration

# Install verdaccio

```
npm install --global verdaccio
```

# serve local registry

```
verdaccio
```

open http://localhost:4873/

# Set npm registr url

Both way works:

1. set by cli

 `npm config set registry=http://localhost:4873/`


2. set by .npmrc

create `.npmrc` file on root folder, add this line 

```
registry=http://localhost:4873/
```
