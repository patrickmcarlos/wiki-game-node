# Unnamed Wiki Game

## Introduction

[Unnamed Wiki Game] is a simple game where players will be provided an excerpt from a Wikipedia article and they must try to accurately guess the title of the article.

This is the backend component of the application.

## About Me

My name is Patrick, and I'm a Software Engineer based in Canada. I currently do frontend development, particularly in the AI/ML space.

## Purpose

This project is intended to improve my full-stack development skills. I anticipate various technical challenges both in the front and backend, as well as having to make key design decisions along the way.

Key skills / technologies I plan to learn more about include:

-   Frontend toolchains (i.e. build tools, dev tools, libraries)
-   Node backend development
-   App deployment (CI/CD, Docker, etc.)
-   Cloud services (AWS in particular)

Over the course of this project, I will be documenting my learnings on Medium, which you can find at: https://medium.com/@patrickcarlos.

## Game Mechanics

### Speed Mode

In the initial release of the game, "Speed Mode" will be available, where users are given a minute to provide as many guesses for the article title. After the time is up, all of the guesses will be compared to the title name, and the guess with the highest similarity score will be used to calculate player score.

### Curated Mode

Curated mode, which is intended to be released after Speed Mode, will allow users to guess the title for the Article of the Day. Unlike the Speed game mode, instead of calculating scores, the number of attempts will be recorded.

### Links

Frontend Repo: https://github.com/patrickmcarlos/wiki-game-react
