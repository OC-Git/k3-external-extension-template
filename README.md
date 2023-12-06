# K3-External-Extension-Template

This template is intended for extension development of a [K3 configurator](https://www.k3-konfigurator.de/).

Key points of the template are:

* Easy start & introduction
* Accompaniment of the feature explanation by the [documentation](https://k3.objectcode.de/docs/)
* Use as starting point for own projects

# Steps

## Install AWS-CLI to have access to @k3-core NPM-module
* Install AWS-CLI according to: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
* Use AWS-Key provided by ObjectCode - just ask us!
* run `npm run login` in your CLI in this Repo

## Import App
* Download the APP-JSON here: https://oc-k3.s3.amazonaws.com/assets/data/current/cb176540-ba15-4642-9549-e70a6e11ebaa.de.json
* Create a Configurator in K3 and import the JSON above
* Publish this configurator
* Copy and paste the App-URL according to published URL - looks like ?app=xxx

## Start Project
* Run `npm install` in this repository
* Run `npm start` in this repository
* When Configurator opens, APP-Code is missing: Put your App-URL in, for example: 
http://localhost:3000/k3-external-extension-template?app=cb176540-ba15-4642-9549-e70a6e11ebaa

*Happy coding!*
