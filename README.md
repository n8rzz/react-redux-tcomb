# SS-Octopus
> A React starter app!  Complete with React, Redux, Babel, Browserify and Tcomb.  Built on a super simple Hapi server.  Task running by Gulp with a Swagger-mock-api already in place.  Testing with Ava and Nyc

## Installation
Clone this repo then run
```bash
    npm install && gulp
```

## Up and running
There are a few processes that need to be running in order for everything to play nice together:

Start the server
```bash
    npm run start
```

Start the Swagger-mock-api
```bash
    gulp mockapi
```

Now you're up and running!

## Available tasks
#### NPM Tasks:
```bash
    npm run test
    npm run report
```

#### Gulp Tasks:
```bash
    gulp (alias for `gulp-build`)
    gulp watch
    gulp mockapi
```

## Known Issue:
> This implementation of react-router with Hapi is not working correctly:

There is an issue with the Hapi/react-router router that I'm still trying to work out.  If you try to navigate to a URL that is not the root, you will see a 404.  If you navigate to a URL via react-router's `<Link>` component, all is right with world.

I'm working on it.  

The root of the issue has to do with Hapi's handling of wildcard routes and then serving a static dir.  If you want to solve this on your own, feel free to open a PR!

---

### Happy Reacting!!
