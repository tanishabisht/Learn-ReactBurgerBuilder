# Burger Builder React Application
This application is my goto guide for best practices in React.


## Folder Structure
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


## Stacks Used
`css modules` `Materialize` `prop-types` `axios` `redux` `react-redux` `redux-thunk`