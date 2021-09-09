## Router

### Setup

- Modify index.js to add the Router wrapped around the App.

## App.js => Controls the router

- Place a Switch
- Register routes => <Route path='/pokemons' component={Home} />
- Routes have a path(url) and the component to render if the url matches.

2 types of Routes:

- Static path='/pokemons'
- Dynamic path='/details/:id'

useParams:

- Router gives us a hook to read the params ('/:id') from the url.
- We will use this params to fetch specific items by id while reusing the Details page.
