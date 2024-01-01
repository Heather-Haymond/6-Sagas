# Saga Functions and SQL Joins Code Challenge

🎉 You're here! The final Prime Digital Academy code challenge. 🎉

Plot twist: You are no longer employed at that same cutting-edge web development shop! It ended up getting purchased by NASA as a result of how amazing your dashboard prototype was. Due to some shockingly large outstanding Blockbuster late fees from 2006, you're not eligible to obtain the security clearance that's required to keep working on the space travel thingy.

Anyway, now you're self-employed and you've been contracted by a local zoo to finish building an app. All this initial version of the app needs to do is display *species name* and *class name* data for the zoo's 20 animals, inside a table element with two columns. Something like this:

| Species | Class |
|---|---|
| Tomato Frog | Amphibian |
| Wyoming Toad | Amphibian |
| Blue Spiny Lizard | Reptile |
| Murray River Turtle | Reptile |

The previous developer got stuck and couldn't figure out:
1. How to write a SQL join.
2. How to implement the `redux-saga` library.

Everything else in this app is bug-free and finished, including automated tests! Thanks to this, **you'll only need to write code inside two files**:
1. `zoo.router.js`
2. `store.js`

There's also a `database.sql` file that you'll use to construct a database with two tables:
1. `species`
2. `class`

All that's left for you to do is:
1. Create a `GET` route that responds with all of the zoo animal data from the database.
2. Make a Saga function that'll fetch the zoo animal data and put it into the `zooAnimals` reducer.

You got this. 🙂

## Get Set Up for Success:

1. Fork and clone this repo to your computer.
2. `cd` into the cloned repo and run `npm install`.
3. Run `npm test` to verify that the automated tests work as expected.
    * There are two test files.
    * All but one of the tests should be currently failing, and this will cause **a lot** of text output in your terminal.
    * *Let us know immediately if something goes wrong with running the tests.*
3. Create a new database named `zoo_animals`.
4. Execute the SQL queries found in `database.sql` in order to:
    * Create the tables you'll need.
    * Populate them with seed data.
4. Start up the app:
    * `npm run server`
    * `npm run client`
    * Verify that the app starts up and the terminal is error-free.
5. If it doesn't automatically happen, open `localhost:5173` in your browser to see the initial state of the app.
    * Don't forget to check the browser console. It should also be error-free.

## Requirements:

* When the app is loaded, a user should see all 20 zoo animals displayed inside a `<table>`. Each row should show one animal's *species name* and *class name*

## About the Built-In Tests:

* **PLEASE DO**:
    * Run them to verify that the React app and `GET` route behave as specified.
    * Use `npm run test:server` and `npm run test:client` if you'd like to run the test files separately.

* **DO NOT**:
    * 🔥 Modify any file, except for `zoo.router.js` and `store.js`. (For base mode, anyway!)
        * Changing **anything** besides these could make it **impossible** for your code to pass the automated tests.

## Once You've Finished:

* You're free to take a break, but please do not disturb your fellow students.
* You're free to write CSS and make your submission look pretty.
    * Be sure your CSS *does not cause the automated tests to fail*, though!
* It'd be a nice touch if you could order the results of your SQL query to be alphabetized by class and species.
* You can move on to stretch goals if you'd like, but **don't forget to commit your base mode solution**.

## Lastly:

Congratulations! It is mind-blowingly impressive how much you've learned in just 12 weeks. If you haven't lately, you should do some fist pumps and/or a happy dance. Above all, we hope you feel incredibly proud.

**Now...onward to your Solo Project!**

---

## Stretch Goals:

For the next iteration of this app, the zoo's Head Zookeeper would like to be able to use it to keep the list of animals up to date. (They really shouldn't have to manually edit the database tables.)

To make this possible, the app will need to:
* Allow a user to delete animals from the database.
* Provide a form that enables a user to create a new animal.
    * It'll need to include a dropdown for choosing a class name.
- Include another form that allows the Zookeeper to add a new class.

As usual, you'll need to make sure that your solution(s) do not cause any of the automated tests to fail.
