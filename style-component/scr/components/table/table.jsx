import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import axios from "axios";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Theme: {},
      Data: [],
    };
    this.whirtConsole = this.whirtConsole.bind(this);
  }
  componentDidMount() {
    const url = "http://127.0.0.1:5000/todo/api/v1.0/tasks";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.tasks);
        const d = res.data.tasks;
        this.setState({ Data: d });
        console.log("api get success");
      })
      .catch((err) => {
        console.log(err);
        console.log("api get fail");
      });
  }
  whirtConsole() {
    console.log("Theme", this.props.location.state.Theme);
  }
  render() {
    const columns = [
      {
        dataField: "id",
        text: "ID",
      },
      {
        dataField: "done",
        text: "Finish",
      },
      {
        dataField: "title",
        text: "Title",
      },
      {
        dataField: "description",
        text: "Description",
      },
    ];
    const products = [
      {
        id: 1,
        name: "BENA1",
        mode: "static",
        IP: "192.168.0.1",
        net: "255.255.255.0",
        gatewat: "192.168.0.254",
      },
      {
        id: 2,
        name: "BENA2",
        mode: "static",
        IP: "192.168.0.2",
        net: "255.255.255.0",
        gatewat: "192.168.0.254",
      },
      {
        id: 3,
        name: "BENA3",
        mode: "static",
        IP: "192.168.0.3",
        net: "255.255.255.0",
        gatewat: "192.168.0.254",
      },
      {
        id: 4,
        name: "BENA4",
        mode: "static",
        IP: "192.168.0.4",
        net: "255.255.255.0",
        gatewat: "192.168.0.254",
      },
      {
        id: 5,
        name: "BENA5",
        mode: "static",
        IP: "192.168.0.5",
        net: "255.255.255.0",
        gatewat: "192.168.0.254",
      },
    ];
    return (
      <ThemeProvider theme={this.state.Theme}>
        <Btable>
          <button onClick={this.whirtConsole}>day</button>
          <Styledtable>
            <BootstrapTable
              id="Basic"
              keyField="id"
              data={this.state.Data}
              columns={columns}
            />
          </Styledtable>
        </Btable>
      </ThemeProvider>
    );
  }
}

const Btable = styled.div`
  position: absolute;
  left: 200;
  top: 160;
  right: 200;
`;

const Styledtable = styled.table`
  width: 1500px;
  height: 500px;
  overflow: auto;
  line-height: 1;
  display: block;
  table-layout: fixed;
  th {
    color: black;
    font-size: 26px;
    background-image: url(./Dark/Title_background.png);
  }
  td {
    color: ${(props) => props.theme.tColor};
    font-size: 26px;
  }
  tr:nth-child(odd) {
    background-color: rgba(250, 249, 253, 0.1);
  }
  tr:nth-child(even) {
    background-color: rgba(243, 243, 243, 0.3);
  }
`;

export { Table };
