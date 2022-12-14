import "./App.css";
import Carform from "./components/forms/Carform";
import Personform from "./components/forms/Personform";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import PersonCard from "./components/cards/PersonCard";
import CarCard from "./components/cards/CarCard";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ShowMore from "./components/pages/ShowMore";
import { GET_CARS, READ_TODO } from "./queries";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {;

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" render={() => <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
      }}
      >
      <div className="forms">
        <Carform />
        <Personform />
      </div>
      <div className="cards">
        <PersonCard />
        <CarCard />
      </div>
    </div>}></Route>
    <Route
      path="/person/:id"
      render={(props) => <ShowMore props={props} />}
    ></Route>
          <Route
            path="*"
            exact={true}
            render={() => <div
              className="restricted 404"
              style={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                padding: "1rem",
                flexFlow: "column nowrap",
                justifyContent: "center",
              }}
            >
              <h1 style={{ color: "red" }}>
              You are caught trying to enter restricted area.
              </h1>
              <Link to="/" >
                Please return to your home page
              </Link>
            </div>}
          ></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
