# Routing 
Being able to show different pages to the user



## Setting Router Package
`npm i --save react-router react-router-dom`
- react-router: contains the logic
- react-router-dom: render it to dom



## BrowserRouter (react-router-dom)
All its children components can use functions and components for routing from react-router-dom.
- Switch: Re-renders just one of the routes inside it that matches from top
- Route
  - exact(absolute path)
  - Handling unkown 404 routes: no path attribute
- Redirect: when inside switch, it doesnt render the content, it just changes URL 

```javascript
<Switch>
    <Route path='/posts' exact render={() => <h1>POSTS</h1>} />
    <Route path='/new-post' exact component={NewPost} />
    <Redirect from='/' to='/posts' />
    <Route render={() => <h1>404 NOT FOUND</h1>} /> 
</Switch>
```



## Navigationn between pages

### USING UI
- `<a href='/'>HOME</a>`
  - on loading we loose state
  - pages are constantly re-loaded
- `<Link to='/'>HOME</Link>`
  - we are not loading pages
  - we are not re-rendering pages
- `<NavLink to='/' exact activeClassName='active' activeStyle={{}}>HOME</NavLink>`
  - Styling active links differently

### PROGRAMMATICALLY
- `props.history.push('/')`: pushes new page
- `props.history.replace('/')`: replaces new page inplace of old one



## Accessing Routing related props
1. Those components inside Route component (say component A): `props`
2. Children of Component A
```javascript
import { withRouter } from 'react-router-dom'
export default withRouter(post)
```



## Route parameters
1. Passing Route parameters: `<Route path='/post/:id' exact component={Post} />`
2. Extracting Route parameters: `props.match.params.id`