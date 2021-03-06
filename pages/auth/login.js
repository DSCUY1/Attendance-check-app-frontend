import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { form } from "../../scripts/form";
import axios from "axios";
import Router from "next/router";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    form();
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log({ email, password });
    try {
      await axios
        .post("users/signin", { email, password })
        .then(async (res) => {
          localStorage.setItem("jwt", Object.values(res.data));
          console.log(localStorage.getItem("jwt"));
          Router.push("/");
        });
    } catch (err) {
      toast.error(err.response.data.detail);
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <div className="row myCard">
          <div className="col-md-5 ">
            <section className="rightSection">
              <div className="box">
                <div>
                  <Image
                    src="/static/img.png"
                    className="img-logo"
                    height={85}
                    width={85}
                    alt="logo du login"
                  />
                </div>
                <p>Page de connexion au système</p>
              </div>
            </section>
          </div>
          <div className="col-md">
            <section className="leftSection">
              <form
                className="myForm text-center"
                onSubmit={onSubmit}
                id="form"
              >
                <header>
                  <h2>Login</h2>
                </header>

                <div className="FormContent">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control js-input"
                      id="1"
                      required
                    />
                    <label htmlFor="email" className="form-label" id="label-1">
                      Email
                    </label>
                  </div>
                  <div className="md-form mb-0">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control js-input"
                      id="2"
                      required
                    />
                    <label
                      htmlFor="password"
                      className="form-label"
                      id="label-2"
                    >
                      Password
                    </label>
                  </div>
                  <div className="md-form mb-0 mt-3 checkbox-input">
                    <label>
                      <input id="check_1" name="check_1" type="checkbox" />
                      <small> Garder ma session ouverte</small>
                      <div className="invalid-feedback"></div>
                    </label>
                  </div>
                </div>

                <div className="FormFooter">
                  <div className="md-form mb-0">
                    <a href="/" className="passForgot">
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <div className="md-form mb-0">
                    <button type="submit" className="butt">
                      Login Now &#x27F6;
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
