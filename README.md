# Feed Reader Testing

**Feed Reader Testing** uses [Jasmine][1] for the purpose of unit testing on a web-based application that reads RSS feeds. In this project, various test suites are written in order to govern the functionality of the Feed Reader and corresponding specs are written to meet the expectations.

> This project is part of Udacity's [**Front-End Web Developer Nanodegree Program**][5]

### Dependencies

These are the following required packages needed for building the project and running the tools --

`express` `del` `gulp` `gulp-clean-css` `gulp-htmlmin` `gulp-imagemin` `gulp-uglify` `gulp-watch` `run-sequence`

## Get Started

- ###### Running the application

For running the application on our local machine you need [node][2] and [npm][3] installed with global access. For more info on installation check [here][4]! Now open up the **terminal** (for Linux or macOS) or **command prompt** (for Windows) and type:

```
git clone https://github.com/pbiswas101/Feed-Reader-Testing
cd Feed-Reader-Testing/
npm install
```

Executing the above commands will install all the relevant dependencies required for running as well as building the project. Now, if you encounter vulnerabilities in some packages, just type:

```
npm audit fix
```

Finally, start the application by typing:

```
npm start
```

Now, open up any browser and check **localhost:8070**; you should be able to see the application running with all the test suites specified like so:

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/08/screenshot-from-2018-08-23-22-24-49.png)

- ###### Building the application

The repository already contains the **production code** in the `dist` folder along with **source code** in the `src` folder; however, if you want to build the production code from scratch you need to install the **gulp command line** tool globally on your local machine:

```
npm install --global gulp-cli
```

Finally, build the updated `dist` folder by typing the following command:

```
gulp
```

## License

The MIT License 2018 - [Priyabrata Biswas][5].

[1]: https://jasmine.github.io/
[2]: https://nodejs.org/en/
[3]: https://www.npmjs.com/
[4]: https://nodejs.org/en/download/
[5]: https://github.com/pbiswas101
