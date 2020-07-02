import React from "react"
import {BookMark} from "../BookMark"

class TopBlock extends React.Component{
    render(){
        return(
            <div id="topBlock">
                <BookMark to="/" name="First" />
                <BookMark to="/mytasks" name="My Tasks" />
                <BookMark to="/inProgress" name="In Progress" />
                <BookMark to="/completed" name="Completed" />
            </div>
        )
    }
}

export {TopBlock}