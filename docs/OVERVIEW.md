# Overview

**Problem**: DHS STATS is split up into several repositories that are each built into npm packages in Angular Package Format. Local development process currently has problems because any of these packages that are being developed have to be `npm link`ed into the web directory. The `dhs-stats-presentation-platform` repository is a dependency to each of the other packages. So if you are working on a package and that platform at the same time, you can't link them into web at the same time because of the dependency tree.

This is an example of front end start up of web for local development:

* In `dhs-stats-presentation-web`, you have to `npm link PACKAGE-NAME`
* Run `ng serve --vendorSourceMap` in web
* Go to the package directory that was just linked, move into the `dist` directory, remove `node_modules`, go back up a level, then run `ng buil --watch` to start working on that package.

This is a small set of steps. There are others that sometimes have to be run depending on the package you are working on.

**Problem 2**: The repositories are setup separate and then built as Angular packages so that any of those packages can be run in the app based on the version specified. If all of these repositories were not packages and not Angular packages, they would always be built with the latest web app, even if those changes to that particular package.

**Problem 3**: The concept of a library is:

> a collection of components, services, directives, etc. to be shared across different Angular projects

SMS and PTDB, are not classified in this category. They have routes, so the concept is not accurate in how they are being classified.

So right now the current problems need to have a solution that will allow for:

* Each module - AKA package - needs to be abstracted away from web so that it can be versioned. This allows for determing what version of the module should be in the app at any given time
* Local development of one or more modules should be as easy as running `ng serve --vendorSourceMap` in web.
