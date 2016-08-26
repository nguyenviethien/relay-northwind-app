## Relay Northwind demo app

> This is a true story. The events depicted took place in Northwind in 1996-1998. At the request of the survivors, the names have been changed. Out of respect for the dead, the rest has been told exactly as it occurred.
> **©Fargo**

This is application shown Component-Based approach on full power 💪💪💪.

Build using React, Relay and GraphQL.

[Live DEMO](https://nodkz.github.io/relay-northwind/)

[Live GraphQL server DEMO](http://graphql-compose.herokuapp.com/northwind/)

Internally implements many cool things:
- Connections with infinite lists and filtering
- Running Relay queries from component (not via routing)
- Display loaders when fetching data
- Build on top of [graphql-compose](https://github.com/nodkz/graphql-compose) auto-generated schema from mongoose (MongoDB).
- Eslint with GraphQL fragment validation, Webpack 2, React Hot Loader 3.0.0-beta, last versions of React and Babel.
- Many thanks to @taion for `react-router-relay`, `react-bootstrap` and changes in `react-router`. Awesome work!

### Data models
This APP has 8 basic types, which has many cross-relations (via one-to-one, arrays, connections):
- category
- customer
- employee
- order
- product
- region
- shipper
- supplier


### Thanks to
- [@shayden](https://github.com/shayden) for the csv dump.
- [@tmcnab](https://github.com/tmcnab/northwind-mongo) that converted it to MongoDB.
- [@leisenstein](https://github.com/leisenstein/northwind-mongo) that clean up a CSV data.
