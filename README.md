# Front-End-Learning
A repository that contains various front-end learning projects. This serves as a space where I can keep common UI patterns and templates which I can re-use and modify in the future.

Many of these examples are mirrored on codepen. Links will be provided as they exist.

## Some notes on formatting:

* **File & folder naming conventions:**
Use underscores "_" between file names. Since the GitHub repository name forces *kebab-style* for the repository root folder. All sub folders will follow underscore style. File names will use underscores across all types.

* **Variable names:** will use camelCase.
* **Functions:** will use camelCase.
* **CSS class rules:** will use kebab-case.
* **SASS variables:** will use kebab-case.
* **HTML id's:** will use camelCase.
* **Image names:** will use underscore case.

## Pricing Grid Template:
A basic pricing grid based on the flexbox layout engine.
* The file **pricing_grid_template.html** contains a single product option in the pricing grid. A pricing grid can have many product options.
* The file **pricing_grid_preview.html** will show what many product options looks like in the browser.

## Random Color Background Event:
A JavaScript that attached a click event to a `100vh` (view height) body element
and generates a psuedorandom hexadecimal color before setting it to the body.

* CodePen live preview: https://codepen.io/nickfazzpdx/pen/QzpYGK

## User Registration Page
A basic user registration page with form inputs that dislay submitted information.

## Hour Based Countdown Timer App
Implements a countdown timer that provides a 60 minute maximum value. Features
include clearing the timer, individual controls to set the time using buttons,
pausing the timer. This project uses JQuery to manage events, CSSOM, and DOM manipulation.
* The file **timer_app.js** implements the button UI states.
* The file **timer_app_fn_test.js** implements a function based version of the UI states.
* The file **timer_logic.js** imeplements the countdown timer functionality.

## Addition Evaluator
Using HTML, CSS, and JavaScript this small UI example is something that could be
used in educational web software to solve math problems. This projects relies on Bootstrap 4.5 to manage style and layout grid.

* CodePen live preview: https://codepen.io/nickfazzpdx/pen/KKzKrrG

## Horizontal Navs
Examples of some common horizontal navigation UI components for the web
with responsive design features using HTML, CSS, and JavaScript.
* Panel based horizontal nav
* Bottom border horizontal nav
* Context colored horizontal nav
    * Each nav has a different tab color based on name/context

## Switching Images Using JS
A basic script that switches two images based on a given condition.

* CodePen live preview: https://codepen.io/nickfazzpdx/pen/ZEQoaRK

## TODO List - Implemented Using a Vanilla Web Development Stack
Using only pure JavaScript, HTML5 and CSS3 to create the front end of a TODO list app.
* The directory and file structure follows that all files are in the subdirectory `/todo_vanilla`