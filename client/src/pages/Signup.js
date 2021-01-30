import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';

import API from "../utils/API";
import { useQuestionContext } from "../utils/GlobalState";

// import InputBox from "../components/SignUp-Page/InputBox/inputBox";
import FlagContainer from "../components/SignUp-Page/Flags/FlagContainer";
import Btn from "../components/SignUp-Page/Button/Button";
import Div from "../components/SignUp-Page/Div/Div";
import Footer from "../components/SignUp-Page/Footer/Footer";
import Title from "../components/SignUp-Page/Title/Title";
import Container from "../components/SignUp-Page/Container/Container";
import FlagImg from "../components/SignUp-Page/Flags/FlagImg";
import Jumbotron from "../components/SignUp-Page/Jumbotron/Jumbotron";

function SignUp() {
  const history = useHistory();

  const [state, setState] = useState({
    username: "",
    password: "",
    retypedPassword: ""
  });

  const [globalState, dispatch] = useQuestionContext();

  const data = {
    placeholder: {
      username: "Enter a Username",
      password: "Enter a Password",
      reEnterPassword: "Re-enter Password"
    },
    title: "Sign Up",
    flags: {
      "Aland Islands": "AX",
      Albania: "AL",
      Algeria: "DZ",
      "American Samoa": "AS",
      Bahamas: "BS",
      "Palestinian Territory, Occupied": "PS",
      "United Arab Emirates": "AE",
      "United Kingdom": "GB",
      "United datas": "US"
    },
    flags2: {
      CZ: "Czechia",
      AZ: "Azerbaijan",
      DK: "Denmark",
      DM: "Dominica",
      EC: "Ecuador",
      EG: "Egypt",
      SV: "El Salvador",
      GQ: "Equatorial Guinea",
      ER: "Eritrea"
    }
  };

  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = data => {
    console.log(data);
    // e.preventDefault();
    API.signUpAuth(state)
      .then(res => {
        dispatch({
          user: "setUsername",
          name: JSON.parse(res.config.data).username
        });
        history.push("/home");
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const handleSignup = e => {
  //   e.preventDefault();
  //   API.signUpAuth(state)
  //     .then(res => {
  //       dispatch({
  //         user: "setUsername",
  //         name: JSON.parse(res.config.data).username
  //       });
  //       history.push("/home");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  function HandleInputChange(event) {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setState({ ...state, [name]: value });
  }

  return (
    <Container width="max-content" margin="0rem auto" padding="0rem 0rem .2rem">
      <Div class="row" margin="0 auto">
        <FlagContainer>
          {" "}
          <Div margin="0 auto" class="row">
            {Object.values(data.flags).map(flag => (
              <FlagImg margin=".7rem" flag={flag} />
            ))}{" "}
          </Div>
        </FlagContainer>
        <Div margin="1rem auto" alignItems="center">
          <Title name={data.title} />{" "}
          <Jumbotron margin="1rem auto" width="max-content">
          <form className="p-2" onSubmit={handleSubmit(onSubmit)} method="post">
            <div className="mb-4">
              <input
                value={state.username}
                placeholder={data.placeholder.username}
                onChange={HandleInputChange}
                name="username"
                ref={register({ required: true })} /> {/* register an input */}
              <div>
                {errors.username && 'Username is required.'}</div>
            </div>
            <div className="mb-4">
              <input
                value={state.password}
                placeholder={data.placeholder.password}
                onChange={HandleInputChange}
                name="password"
                type="password"
                ref={register({ required: true })} />
              <div>
                {errors.password && 'Password is required.'}</div>
            </div>
            <div className="mb-4">
              <input
                padding="0rem 0rem .5rem 0rem"
                value={state.retypedPassword}
                placeholder={data.placeholder.reEnterPassword}
                onChange={HandleInputChange}
                name="retypedPassword"
                type="password"
                ref={register({ required: true })} />
              <div>
                {errors.password && 'Password confirmation required.'}</div>
            </div>
            <div className="btn-group">

              <Link to={`/login`} role="Btn"><Btn type="button">Back</Btn></Link>
              <Btn margin="0 1.2rem" type="submit">Sign Up</Btn>
              {/* <Link to={`/signup`} role="Btn"><Btn type="button">Signup</Btn></Link> */}
              <Link to={`/scores`} role="Btn"><Btn type="button">Scores</Btn></Link>
            </div>
          </form> 
          </Jumbotron>
        </Div>

        <FlagContainer>
          {" "}
          <Div margin="0 auto" class="row">
            {Object.keys(data.flags2).map(flag => (
              <FlagImg margin=".7rem" flag={flag} />
            ))}{" "}
          </Div>
        </FlagContainer>
        <Footer />
      </Div>
    </Container>
  );
}

export default SignUp;





