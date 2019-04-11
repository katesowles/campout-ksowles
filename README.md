# **dyrt-ksowles**

## App Quick-Run Instructions

1. See the "Prerequisites" section below and confirm that your system meets those requirements.
1. Clone the repository by clicking the green "Clone or Download" button, and copy the link provided in the dropdown.
1. In your Terminal, navigate via `cd` commands to a suitable directory for installing the repository.
1. Once you've found your preferred directory, type the command `git clone [link from the Step 2]` in the Terminal, then click enter.
1. Run command `cd dyrt-ksowles` in the Terminal to navigate into the repo root.
1. From there, type command `ember serve` in the Terminal, then click enter.
1. Open a new window or tab in Google Chrome and open the following URL: [http://localhost:4200](http://localhost:4200)

---

## Further Improvements:

1. Form validation
1. Data normalization
1. Error handling
1. Sidebar component's "it renders" integration test fails
1. Modal component's "it renders" integration test fails
1. Add test coverage throughout
1. Install Ember syntax highlighting and linter plugins
1. Figure out if I'm doing nested routes wrong, or if there's a cleaner way to manage the super not-DRY `app/templates/add.hbs` situation
1. Get a better handle on data/state management options
1. Dive into understanding the `{{yield}}` tag in more depth
1. Read about Ember anti-patterns, and plan related refactors
1. Re-enable the modal backdrop's ability to close the modal and change the view
1. Read more Ember docs and tutorials, because why not?

---

## Contribution Instructions

### Prerequisites

You will need the following things properly installed on your computer. Also listed are the current versions of my development machine.

* [Git](https://git-scm.com/) - v2.20.1
* [Node.js](https://nodejs.org/) - v8.15.0
* [NPM](https://www.npmjs.com/) - v6.4.1
* [Ember CLI](https://ember-cli.com/) - v3.8.1
* [Google Chrome](https://google.com/chrome/) - v73 at the time of writing this

### Installation

* `git clone <repository-url>` this repository
* `cd dyrt-ksowles`
* `npm install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

###### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

###### Running Tests

* `ember test`
* `ember test --server`

###### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

###### Building

* `ember build` (development)
* `ember build --environment production` (production)

###### Deploying

Specify what it takes to deploy your app.

### Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
