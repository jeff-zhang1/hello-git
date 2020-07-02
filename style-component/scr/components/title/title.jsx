import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Switch from "react-switch";
import { Link } from "react-router-dom";

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      Theme: {},
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <ThemeProvider theme={this.state.Theme}>
            <div>
              <Background>
                <h>Test background set</h>
                <br />
                <div>
                  <Link
                    to={{
                      pathname: "table",
                      state: { Theme: this.state.Theme },
                    }}
                  >
                    <Button>to table</Button>
                  </Link>
                  <Link to="/">
                    <Button>to home</Button>
                  </Link>
                </div>
              </Background>
            </div>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
const Button = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 2em;
  border-radius: 3px;
  display: inline-block;
  color: ${(props) => props.theme.fontColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Background = styled.div`
  background-image: ${(props) => props.theme.backgroundImage};
  min-height: 100vh;
  flex-direction: row;
  align-items: normal;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  display: block;
  text-align: center;
  color: ${(props) => props.theme.color};
`;

//把該目錄的Title組件匯出
export { Title };
