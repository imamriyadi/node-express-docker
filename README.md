Node Express docker [Node Express]

[Node Express]: https://hub.docker.com/r/imamriyadi/node-express

## Install dependencies.

```
$ npm install
```

## Run the app

```
$ npm run start
```

## Build Docker image

```
$ cd ~/node-express-docker  # or whatever is the directory location of this repo
$ docker build --tag node-express:1.0 .
```

## Create Docker Container

```
$ docker container create --name app-node-express -p 3000:3000 node-express:1.0
```

## Start Docker Container

```
$ docker container start app-node-express
```
## Stop Docker Container

```
$ docker container stop app-node-express
```