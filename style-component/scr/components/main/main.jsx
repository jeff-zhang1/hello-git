import React from "react";
import { Title } from "../title";
import { Table } from "../table";
import { HashRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Switch from "react-switch";
import styled from "styled-components";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Theme: DefaultTheme,
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    if (this.state.checked === true) {
      this.setState({ Theme: DefaultTheme, checked: false });
    } else {
      this.setState({ Theme: PinkTheme, checked: true });
    }
  }

  render() {
    return (
      <div>
        <SW>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </SW>
        <ThemeProvider theme={this.state.Theme}>
          <HashRouter>
            <div>
              <Route
                path="/"
                render={(props) => (
                  <Title {...props} theme={this.state.Theme} />
                )}
              />
              <Route
                path="/table"
                render={(props) => (
                  <Table {...props} theme={this.state.Theme} />
                )}
              />
            </div>
          </HashRouter>
        </ThemeProvider>
      </div>
    );
  }
}
const SW = styled.div`
  position: absolute;
  left: 20;
  top: 20;
`;

const DefaultTheme = {
  backgroundColor: "white",
  fontColor: "#33997a",
  borderColor: "#33997a",
  backgroundImage: "url(./Dark/background.png)",
  color: "white",
  tColor: "white",
};

const PinkTheme = {
  backgroundColor: "#DB7290",
  fontColor: "white",
  borderColor: "#ffd7e8",
  backgroundImage: "url(./Light/background_light.png)",
  color: "blue",
  tColor: "black",
};

export { Main };
