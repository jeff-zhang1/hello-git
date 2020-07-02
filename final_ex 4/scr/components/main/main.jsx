import React from "react"
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom"
import { TopBlock } from "../topblock"
import { First } from "../firstpage"
import { MyTasks } from "../mytask"
import { todoListStore } from "../../store"
import { InProgress } from "../inprogress"
import { Completed } from "../completed"
import Background from "./astronaut_ring_neon_156673_1920x1080.jpg"


var sectionStyle = {
    width: "100%",
    height: "1200px",
    margin:"0px",
    padding:"0px",
  // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`, 
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    verticalAlign:"top"
  
  };

class Main extends React.Component {
    render() {
        return (
            <Provider store={todoListStore}>
                <HashRouter>
                    <div style={sectionStyle}>
                        <TopBlock />
                        <Route exact path="/" component={First} />
                        <Route exact path="/mytasks" component={MyTasks} />
                        <Route exact path="/inProgress" component={InProgress} />
                        <Route exact path="/completed" component={Completed} />
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

window.store = todoListStore

export { Main }