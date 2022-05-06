
![Logo](./src/assets/img/favicon.png)


# SISPOS DASHBOARD

Clean POS Dashboard made using the PEAN Stack.  
<br><br>


## Technologies

- Front-end: [Angular](https://angular.io), [Angular Material](https://material.angular.io), [Bootstrap](https://getbootstrap.com), [sweetalert2](https://sweetalert2.github.io)
- Back-end: [PostgreSQL](https://www.postgresql.org), [Express](https://expressjs.com), [Node.js](https://nodejs.org/en/)
- APIs: [SISAPI](https://sispos-api.herokuapp.com), [countryflagsapi](https://countryflagsapi.com)

<br><br>
## Features

- Locally stored data (Postgres)  
- Personal API
- Fast & Simple  
- Easy to deploy
- Full Data C.R.U.D 

<br><br><br><br>

## Screenshots

The Main Login Page the user gets Directed to upon loading the website.  
![Main Page](./src/assets/readme/main.png)  

The Login Page, the user is redirected here if he selects the Login option in the page earlier.  
![Login Page](./src/assets/readme/login.png)  

The Dashboard Main Page, the user is redirected here only upon a successfull login process.
![Dashboard Main Page](./src/assets/readme/gif-main.gif)  

The Dashboard Tables, where the user can see full details on all system data, with crud options.  
![Dashboard Tables](./src/assets/readme/gif-tables.gif)  

The To-Do Page, where the user can manage personal tasks and delete completed tasks.  
![Dashboard Tables](./src/assets/readme/gif-todo.gif)  
<br><br><br><br>
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| whitesmoke | ![#F5F5F5](https://via.placeholder.com/10/F5F5F5?text=+) #F5F5F5 |
| sky gradient | ![#2980B9](https://via.placeholder.com/10/2980B9?text=+) #2980B9 | ![#6DD5FA](https://via.placeholder.com/10/6DD5FA?text=+) #6DD5FA |
| primary gradient | ![#4A00E0](https://via.placeholder.com/10/4A00E0?text=+) #4A00E0 | ![#8E2DE2](https://via.placeholder.com/10/8E2DE2?text=+) #8E2DE2 |
| warning gradient | ![#f5af19](https://via.placeholder.com/10/f5af19?text=+) #f5af19 | ![#f12711](https://via.placeholder.com/10/f12711?text=+) #f12711 |
| light gradient | ![#78ffd6](https://via.placeholder.com/10/78ffd6?text=+) #78ffd6 | ![#a8ff78](https://via.placeholder.com/10/a8ff78?text=+) #a8ff78 |
| info gradient | ![#5D26C1](https://via.placeholder.com/10/5D26C1?text=+) #5D26C1 | ![#a17fe0](https://via.placeholder.com/10/a17fe0?text=+) #a17fe0 |
| danger gradient | ![#93291E](https://via.placeholder.com/10/93291E?text=+) #93291E | ![#ED213A](https://via.placeholder.com/10/ED213A?text=+) #ED213A |

<br><br><br><br>
## API Reference

#### SISAPI

Sispos uses [SISAPI](https://github.com/RedaBoi12/sisapi) P.E.N API for all data.  
- Full API Reference can be found at the page.  




#### COUNTRIESAPI

```http
  GET /${file-type}/${country}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `file-type`      | `string` | **Required**. png or svg |
| `country`      | `string` | **Required**. country code or name |

 <br><br><br><br>
## Test online

 https://sispos-dashboard.herokuapp.com
<br><br><br><br>
## Run Locally

```bash
  git clone https://github.com/RedaBoi12/sispos.git
```

2) Go to the project directory

```bash
  cd sispos
```

3) Install dependencies

```bash
  npm install
```

4) Start the server

```bash
  ng serve
```

<br><br><br><br>
## Roadmap

- Additional browser support

- Additional code optimisation
<br><br><br><br>
## Support

For support, email redabusiness10@gmail.com.

<br><br><br><br>
## FAQ

#### How long did this project take?

Answer : Less than a month.

#### Do you plan on updating it in the future?

Answer : Not really, this project is mainly for me to learn angular.

<br><br><br><br>
## 🚀 About Me
Hello, my name is [ElGoumri Reda](https://www.github.com/RedaBoi12), and I am the creator of this repository
"SISPOS", which is my second angular project and
is primarily intended to help me learn and understand the framework
as much as possible .


## 🛠 Skills
HTML, CSS, jQuery, Javascript, Typescript  
**Frameworks:** Bootstrap, Angular

<br><br><br><br>
## Lessons Learned

**What did you learn while building this project? What challenges did you face and how did you overcome them?**

Long before this project, I had very little knowledge of front end development.
or web development in general, but working on this project, getting errors
and spending so much time looking for fixes is really how a person
learn something.

The most difficult challenge for me in this project was learning how to fully manipulate
an API using http requests and the HttpClient module offered by Angular, whether in
retrieving all the information via a GET request, loading the return into an observable,
by transforming it into an array to move it from one page to another and display the information
correct to the user.   

I also learned how to make a full P.E.N REST Api from scratch, and linked it to my project. Which is really cool!
