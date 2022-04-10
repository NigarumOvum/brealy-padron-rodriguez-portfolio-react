# Brealy Fabian Padron Rodriguez Portfolio
https://brealypadronrodriguez.vercel.app/

**Built with:**

![React](https://img.icons8.com/plasticine/48/000000/react.png)
![Typscript](https://img.icons8.com/color/48/000000/typescript.png)
![css3](https://img.icons8.com/color/48/000000/css3.png)


## Description

<p align='center'>My personal Portfolio Web App Developed with React(JSX) & TypeScript using the Model-View-View-Model (MVVM) architectural pattern, CSS and syled-components for styles.

I made use of Async/Await and Fetch to connect to GitHub API to retrieve my Github Repos and using map() inside return function with a setInterval() of 1sec inside useEffect hook.

For dark/light theme mode I used createContext() and useContext() hooks to share values like these between components without having to explicitly pass a prop through every level of the tree, to set default styles and toggle theme.
</p>

Application is also Dockerized for development and production deployment.
  
## Front-end deployed in: Vercel

## Commands
  <p align='center'>  If you want to deploy it for test you'll need Node.js or Docker installed to run this project</p>

<h3 align='center'>You can clone this repository with the next command: </h3>
<p align='center'> <strong>git clone https://github.com/NigarumOvum/brealy-react-app </strong> </p>

<h3 align='center'>Go inside directory:</h3>
  <p align='center'> <strong> cd brealy-react-app </strong> </p>

<p align='center'>  then you can run inside the directory the command: </p>
  <p align='center'<strong>npm start </strong> </p>
  
  <p align='center'> Now you can acces the project thought this localhost url in port 3000  </p>
  <p align='center'<strong>http://localhost:3000</strong> </p>

<h2 align='center'>  also you can use Docker  </h2>

<p align='center'<strong>docker build --tag react-portfolio . </strong> </p>

<p align='center'<strong>docker run --publish 3000:3000 react-portfolio </strong> </p>

<h2 align='center'<strong>or  Docker Compose</strong> </h2>

<p align='center'<strong>docker-compose build  </strong> </p>

<p align='center'<strong>docker-compose run react-portfolio </strong> </p>


## Hi, I'm [Brealy Padron Rodriguez](https://github.com/NigarumOvum/) 👋, a Full-Stack Developer Specialist, based in San Jose, Costa Rica
