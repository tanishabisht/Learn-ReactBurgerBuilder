# Learn - React Burger Builder Application
This is the sixth installment of a seven-part series designed to improve your React development skills. This application is goto guide for best practices in React. 


## Instructions to run the application
Follow these instructions to get the application running:
1. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
2. Install necessary packages:
   - `npm install`
3. Start the application:
   - To run the project : `npm start`


## BurgerBuilder: Folder Structure
- public: contains root html file
- src
  - Config: contains backend configurations
  - UI: contains components that are customized basic UI elements
  - Helper: contains additional helper functions e.g. javascript functions to change obj to arr
  - Components: Sub-components used in pages
  - Pages: contains main pages of the application
  - Store: contains redux logic


## Best Practices
- Components should have these two important properties:
  - Modularity
  - Reusability
- Prop Type Validation: refer [this](./Documentation/PropTypes.js)
- Proper Segregation for Components managing state
- Add handler as a suffix to event based functions
- Create Higher Order Components for repetetive Tasks: refer [this](./Documentation/HOC.md)
- Have a seperate folder `UI` for personalised UI components 
- Have seperate folder for all the configurations
  - HTTP Requests: refer [this](./Documentation/HTTP_Requests.md)
- Efficient way to convert array to objects and vice versa
- Establish routing if you have more than one pages to render
  - Routing best practices: refer [this](./Documentation/Routing.md)
- One of the implementations for form creation is in the FormPage.js file
  - Contains form validation
- Redux: for state management. Refer [this](./Documentation/Redux.md)


## Technologies Used
`css modules` `Materialize` `prop-types` `axios` `redux` `react-redux` `redux-thunk`


## React Learning Series
This project is part of a comprehensive React learning series:
1. [React Application for User Listing](https://github.com/tanishabisht/Learn-ReactUsersListing)
2. [Hooks in React](https://github.com/tanishabisht/Learn-ReactHooks)
3. [State Management in React](https://github.com/tanishabisht/Learn-ReactStateManagement) 
4. [Material-UI in React](https://github.com/tanishabisht/Learn-ReactMUI) 
5. [Redux in React](https://github.com/tanishabisht/Learn-ReactRedux) 
6. [Optimizing React Apps](https://github.com/tanishabisht/Learn-ReactOptimization) 
7. [Building a Burger Builder App in React](https://github.com/tanishabisht/Learn-ReactBurgerBuilder) (this repository)