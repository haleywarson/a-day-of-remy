# a-day-of-remy

# Remy App

## Table of Contents

[General Info](#general-info)

[Technologies](#technologies)

[Setup](#setup)

[Features](#features)

[Code Example](#code-example)

[Inspiration](#inspiration)

[Contact](#contact)

## General Info

A day in the life of Remy... here's your chance to take care of Remy for a day!

## Technologies

- React
- CSS
- Html
- JSX

## Setup

Fork and clone this repo and run "npm install". Run "npm install -g json-server" and "json-server --watch db.json". Then run "npm start".

## Features

- Move Remy to the kitchen, dog bed, kennel or dog park
- Feed Remy dog treats
- Start and stop Remy's nap
- Visit Remy's friends
- Learn more about Remy

## Code Example

```js
const renderRemy = () => {
        let remyInDogBed = props.dogBed.length !== 0;
        if(remyInDogBed) {
            return (
                <>
                    <RemyCard
                      dogBed={props.dogBed}
                      remys={props.remys}
                      napRemy={props.napRemy}
                      parkRemy={props.parkRemy}
                      feedRemy={props.feedRemy}
                      kennelRemy={props.kennelRemy}
                    />
                    <button onClick={() => props.startClock()}>Goodnight!</button>
                    <p>{props.time}</p>
                    <button onClick={() => props.stopClock()}>Wake up!</button>
                </>
            );
                }
        };
```

## Inspiration

Eric's beloved puppy Remy and the wonders of React.

## Contact

The Remy App was created by [Eric Lee](https://www.linkedin.com/in/ericmlee05/) and [Haley Warson](https://www.linkedin.com/in/haleywarson/).

Contact us with any questions.
