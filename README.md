<p align="center">
  <a href="https://devfel.com/" rel="noopener">
 <img  src="https://devfel.com/imgs/devfel-logo-01.JPG" alt="DevFel"></a>
</p>

<h1 align="center">Embroidery Floss Converter</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
In this HTML, CSS and JavaScript application I created a chart conversion used by embroidery professionals to convert floss (a.k.a. threads) from one brand to another. It can also be used to find a specific color and look for the code companies use for them. All the data comes from a JSON file created by myself and stored withing the code (../data/flosscolor.json).</p>

  <p align="center">
  <a href="" rel="noopener">
 <img  width="600px" src="./src/assets/gofinance-frontend.gif" alt="GoFinance"></a>
</p>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Dependencies](#dependencies)
- [Author](#authors)
- [Acknowledgments](#acknowledgement)

---

## 🧐 Application features <a name = "about"></a>

- **_List the backend's API transactions:_** the Dashboard page should be able to display a listing through a table, with the title, value, type and category field for all transactions that are registered in the API.
- **_Display the balance:_** On the Dashboard page, it is possible to check the balance that is returned from the backend, containing the income total, the outcome total and the final balance.
- **_Import CSV files:_** the Import page allow users to send a file in csv format to your backend, which will import the transactions into your database.

With this application the user is able to:<br/>

1. navigate between two pages using react's single page concept <br/>
1. list the total balance inside the cards <br/>
1. list the transactions <br/>
1. upload a file

---

## 🏁 Getting Started <a name = "getting_started"></a>

In order to get a copy of this project an run on your local machine for development and testing purposes you will need to clone the project, run the "yarn" command on your terminal to install all the dependencies and execute the command "yarn start".
It is also important to mention that this project requires a running database to get the data, for more information on the backend of this project check <a href="https://github.com/devfel/goFinance-backend" rel="noopener">this repository.</a>

---

## ⛏️ Built Using <a name = "built_using"></a>

- [ReactJS](https://reactjs.org/) - Web Framework
- [Typescript](https://www.typescriptlang.org/) - Programming Language
- [HTML](https://pt.wikipedia.org/wiki/HTML) - Markup Language
- [CSS](https://en.wikipedia.org/wiki/CSS) - Style Sheets

---

## 🔁 Dependencies <a name = "dependencies"></a>

Some project library dependencies includes but are not limited to:

- "axios": "^0.19.2",
- "filesize": "^6.1.0",
- "history": "^4.10.1",
- "polished": "^3.5.2",
- "react": "^16.13.1",
- "styled-components": "^5.1.0",
- "typescript": "~3.7.2"

---

## ✍️ Author <a name = "authors"></a>

- [@devfel](https://github.com/devfel) - Luiz Flávio Felizardo

---

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Challenge proposed by Rocket Seat within the gostack 14 bootcamp.
