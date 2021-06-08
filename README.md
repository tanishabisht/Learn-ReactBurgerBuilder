# Burger Builder React Application
This application is my goto guide for best practices in React.

## Folder Structure
- public
  - favicon.ico
  - index.html
- src
  - Components
    - Burger
  - Container
    - Layout
      - Navbar
      - Layout
    - Aux (Similar to React.Fragment)
  - Pages
  - Config
    - axios

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

## Stacks Used
`css modules` `Materialize` `prop-types` `axios`