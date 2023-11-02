# This is a fork from the original Angular google maps project from sebastian holstein,

We have published the package under our organization since we needed support for Angular 14 and later versions.

We will be maintaining this package in order to provide compatibility with newer Angular versions

We are not planning on adding new features to this package, nor changes on the API, and we plan to get back to the original angular google maps as soon the maintenance is reestablished on the original package.


[![AGM - Angular Google Maps](assets/images/angular-google-maps-logo.png)](https://angular-maps.com/)

# AGM - Angular Google Maps

Angular components for Google Maps. (Previously known as angular2-google-maps)

---

[Website](https://angular-maps.com/) | [Demo](https://angular-google-maps-ng15.stackblitz.io) | [Twitter](https://twitter.com/Sebholstein) | [Chat](https://discord.gg/XAr2ACE) | [API Documentation](https://angular-maps.com/api-docs/)

---

[![Build Status](https://travis-ci.org/SebastianM/angular-google-maps.svg?branch=master)](https://travis-ci.org/SebastianM/angular-google-maps) [![Questions?: join the chat](https://img.shields.io/badge/questions%3F-join%20the%20chat-blue.svg)](https://discord.gg/XAr2ACE) [![npm version](https://badge.fury.io/js/%40agm%2Fcore.svg)](https://www.npmjs.com/package/@agm/core) ![supported angular versions: 9+](https://img.shields.io/badge/supported%20angular%20versions-9.1+-green.svg)

---

## Packages

This project is a mono repo and hosts multiple packages:
original Packages

| Package                 | Downloads                                                                                                                                         |
|-------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| @agm/core               | [![@agm/core](https://img.shields.io/npm/dm/@agm/core.svg)](https://www.npmjs.com/package/@agm/core)                                              |
| @agm/snazzy-info-window | [![@agm/snazzy-info-window](https://img.shields.io/npm/dm/@agm/snazzy-info-window.svg)](https://www.npmjs.com/package/@agm/snazzy-info-window)    |
| @agm/markerclusterer    | [![@agm/markerclusterer](https://img.shields.io/npm/dm/@agm/markerclusterer.svg)](https://www.npmjs.com/package/@agm/markerclusterer) |
| @agm/drawing            | [![@agm/drawing](https://img.shields.io/npm/dm/@agm/drawing.svg)](https://www.npmjs.com/package/@agm/drawing) |

Forked Packages

| Package                 | Downloads                                                                                                                                         |
|-------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| @grupo-san-cristobal/agm-core               | [![@grupo-san-cristobal/agm-core](https://img.shields.io/npm/dm/@grupo-san-cristobal/agm-core.svg)](https://www.npmjs.com/package/@grupo-san-cristobal/agm-core)                                              |
| @grupo-san-cristobal/agm-snazzy-info-window | [![@grupo-san-cristobal/agm-snazzy-info-window](https://img.shields.io/npm/dm/@grupo-san-cristobal/agm-snazzy-info-window.svg)](https://www.npmjs.com/package/@grupo-san-cristobal/agm-snazzy-info-window)    |
| @grupo-san-cristobal/agm-markerclusterer    | [![@grupo-san-cristobal/agm-markerclusterer](https://img.shields.io/npm/dm/@grupo-san-cristobal/agm-markerclusterer.svg)](https://www.npmjs.com/package/@grupo-san-cristobal/agm-markerclusterer) |
| @grupo-san-cristobal/agm-drawing            | [![@grupo-san-cristobal/agm-drawing](https://img.shields.io/npm/dm/@grupo-san-cristobal/agm-drawing.svg)](https://www.npmjs.com/package/@grupo-san-cristobal/agm-drawing) |

---

## Versions

Our convention is that the major number of the version of the package corresponds with the Angular version so

v14.x.x is recomended for Angular 14
v15.x.x is recomended for Angular 15
and so on

For previous Angular versions use the original packages. 

--

## Playing with AGM (Angular Google Maps)

If you just want to play with AGM and don't want to set up a full project, you can use the following Plunker. It has all the dependencies to play with Angular, Typescript and of course `AGM`:

[&raquo; Play with Angular Google Maps on Stackblitz](https://stackblitz.com/edit/angular-google-maps-ng15?file=src%2Fapp%2Fapp.component.ts)

## Installation

`AGM` gets shipped via the Node Package Manager. So make sure that you have [NodeJS](https://nodejs.org) installed.  
You can install the package with the following command:

```shell
npm install @grupo-san-cristobal/agm-core
```

You should also checkout the [Getting started](https://angular-maps.com/guides/getting-started/) guide for further information.
