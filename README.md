# DHS STATS Workspace

## Version 0.0.0-alpha1

Sprint Implementation Stretch Goal: **25**

This repository is a workspace that is used for development of the STATS web app. It is not the web app itself, rather a wrapper around the web app and the libraries/packages used. The tools that are used for this workspace setup are:

[Nx](https://nx.dev/ ) - Angular CLI powered modern development
[Lerna](https://lerna.js.org/) - A tool for managing JavaScript projects with multiple packages
[ng-packagr](http://ng-packagr.github.io/ng-packagr/#slide=1) - From Components to Angular Package Format

There is a combination of the options available from each of these tools that will allow for easier local development setup and every day work, and to publish the web app and the libaries/packages (**NOTE** - still don't know what we will call these.)

## Quick Start & Documentation

Coming soon

## Development server

Run `ng serve webapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name --project=webapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

The following projects are available to use for code scaffolding `--project=XX`
* `--project=admin`
* `--project=login`
* `--project=platform`
* `--project=ptdb`
* `--project=sms`

## Build

Run `ng build XXX` to build the project you want to build. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Publishing a Library

To publish a new version, run `lerna publish`.  This will prompt for a new version for each package (ptdb, sms, etc...)

## Running unit tests

Run `ng test` in the project you are wanting to test

## Running end-to-end tests

Run `ng e2e` in the project you want to execute the end-to-end tests via [Cypress](http://www.protractortest.org/).

## Further help
Coming soon
