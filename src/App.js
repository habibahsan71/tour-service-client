import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Services from "./pages/Services.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import PageNotFound from "./pages/PageNotFound.js";
import AuthProvider from "./contexts/AuthProvider.js";
import Footer from "./components/footer/Footer.js";
import Reset from "./pages/Reset.js";
import Details from "./pages/Details.js";
import PrivateRoute from "./route/PrivateRoute.js";
import Cart from "./pages/Cart.js";
import AddServices from "./pages/AddServices";
import ManageServices from "./pages/ManageServices";
import ManageOrder from "./pages/ManageOrder";


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header> </Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>

            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <PrivateRoute path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>

            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>


            <Route path="/reset">
              <Reset></Reset>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>

            <PrivateRoute path="/services/:id">
              <Details></Details>
            </PrivateRoute>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
