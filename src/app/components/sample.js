import React, { Component } from "react";
import { Http } from "../services/http-client/Provider";

export default class sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    Http.get(
      "/todos/1",
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
    Http.post(
      "/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  render() {
    return <div> textInComponent </div>;
  }
}
