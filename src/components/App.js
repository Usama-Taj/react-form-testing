import React from "react";
import Header from "./common/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Body from "./common/Body";
import SmallForm from "./forms/SmallForm";
import MediumForm from "./forms/MediumForm";
import BigForm from "./forms/BigForm";
import ReduxForm from "./forms/ReduxForm";
const App = () => {
  return (
    <Router>
      <Header />
      <Body>
        <Routes>
          <Route exact path="/" element={<SmallForm />} />
          <Route exact path="/small-form" element={<SmallForm />} />
          <Route exact path="/medium-form" element={<MediumForm />} />
          <Route exact path="/big-form" element={<BigForm />} />
          <Route exact path="/redux-form" element={<ReduxForm />} />
        </Routes>
      </Body>
    </Router>
  );
};

export default App;
