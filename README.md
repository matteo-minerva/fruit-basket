<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./public/images/favicon.ico" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Fruit Basket</h3>

  <p align="center">
    Project created for JS Advanced Guide @start2impact
    <br />
    <br />
    <a href="https://fruit-basket-s2i.herokuapp.com/">Live Demo</a>
    ·
    <a href="https://github.com/matteo-minerva/fruit-basket/issues">Report Bug</a>
    ·
    <a href="https://github.com/matteo-minerva/fruit-basket/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://fruit-basket-s2i.herokuapp.com/)

The application at startup will need to display the list of fruits. It must then contact the API `api/fruit/all` of the external service FruityVice. For each fruit, only the name and family of the fruit must be displayed.

When the user clicks on a fruit or on an appropriate button, the application must be able to display the details of the nutritional factors of the fruit itself.

The application must allow the user to search for a specific fruit. This must always be done through the use of the API by specifying the name of the fruit, for example, `api/fruit/banana`.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Parcel](https://parceljs.org/)
- [jQuery](https://jquery.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Axios](https://axios-http.com/)
- [lodash](https://lodash.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/matteo-minerva/fruit-basket
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the app via the following commands: </br>
   (<em>you can find the project build inside the `/dist` folder</em>)
   ```sh
     npm run dev #for development
     npm run build #for production
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Matteo Minerva - m.minerva@outlook.it

Project Link: [https://github.com/matteo-minerva/fruit-basket](https://github.com/matteo-minerva/fruit-basket)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [How to Deploy a Parcel Build to Heroku](https://javascript.plainenglish.io/how-to-deploy-a-parcel-build-to-heroku-fa1ea74d2b96)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
- [Infinum Frontend Handbook](https://infinum.com/handbook/frontend)
- [Frontend structure](https://docs.sulu.io/en/1.6/developer/create-bundle/frontend-structure.html)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/matteo-minerva/fruit-basket/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/m-minerva/
[product-screenshot]: ./screenshot.png
