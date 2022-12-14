# LEGIO · XXX
Legio XXX is the website for a North American Roman re-enactment group.

[View here](https://legio-30.org)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Table of Contents
[[_TOC_]]

## Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS 16](https://nodejs.org/en/)
- _[Docker](https://docs.docker.com/install/) (Optional)_

## Setup
The project can either be run using NPM or Docker. NPM is recommended for development.
<details>
<summary>NPM</summary>

1. Install the dependencies: `npm install`
2. Start the Angular server: `npm run start`
</details>

<details>
<summary>Docker</summary>

1. Build the docker image: `docker build -t legio-xxx:<TAG> .`
2. Start the new image: `docker run -p 4200:80 legio-xxx:<TAG>`

</details>

The website should now be accessible on [http://localhost:4200](http://localhost:4200)

## Cheatsheet
```bash
# Start Angular server
npm run start

# Build production
npm run build:prod

# Build docker image
docker build -t legio-xxx:<TAG>

# Run docker image
docker run -p 4200:80 legio-xxx:<TAG>
```

