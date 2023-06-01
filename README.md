[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=1.0.0&x2=0)](https://www.npmjs.com/package/@shopwaive/credit)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# @shopwaive/credit

> Introducing the Shopwaive API. Ecommerce developers now have access to the same tools that power Shopwaive's leading credit accounting platform to create ultra-converting checkouts.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Running tests](#running-tests)
  - [API](#api)
    - [getCustomer](#getcustomer)
      - [Options](#options)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/shopwaive/-shopwaive-credit.git
$ cd -shopwaive-credit
```

To install and set up the library, run:

```sh
$ npm install -S @shopwaive/credit
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev @shopwaive/credit
```

## Usage

### Running tests

```sh
$ node script.js
```

## API

### Example

```js
Shopwaive.getCustomer(config, customer_email)
```

Supported options and result fields for `getCustomer` are listed below.

#### Options

`config`

| Type | X-Shopwaive-Access-Token | X-Shopwaive-Platform | Content-Type |
| --- | --- | --- | --- |
| object | 'shpat_4b2f...' | 'shopify' | 'application/json' |



`customer_email`

| Type | email |
| --- | --- |
| string | 'support@shopwaive.com' |



#### Request

Example:
Perform an asynchronous http request to getCustomer

```js
const config = {
    headers: {
        "X-Shopwaive-Access-Token": "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6",
        "X-Shopwaive-Platform": "shopify",
        "Content-Type":"application/json"
    }
};

const Shopwaive = require('@shopwaive/credit');
const email = "support@shopwaive.com";

async function getCustomer() {
    return new Promise((resolve, reject) => {
        let data = Shopwaive.getCustomer(config, email);
        resolve(data)
    });
}

getCustomer().then(res => {
    let data = res.data;
    if (data) {
        console.log(res.data);
    }
    console.log(res.status)
    console.log(res.statusText)

})
```

## Built With

* Axios

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Shopwaive**

## License

© Shopwaive.
