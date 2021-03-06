import React from "react"
import { connect } from "react-redux"
import { addTodoList } from "../../actions"
import { InputTasksForm } from "../inputtasksform"

class ConInputTask extends React.Component {
    constructor(props){
        super(props)
        if (this.props.listData) {
            this.state = this.props.listData
        }
        else {
            this.state = { id: '', name: '', date: '', time: '', file: ''
                        , commit: '', important: '', complete: false }
        }
        this.changeState = this.changeState.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.tagImportant = this.tagImportant.bind(this)
        this.filebox = React.createRef()

        this.changeListState = type =>{
            if(this.props.changeState)
                this.props.changeState(type)
            else
                console.log('新增狀態所以沒有this.props.changeState')
        }
    }

    tagImportant() {
        //如果現在不是重要的就把它變重要的
        if (this.state.important == '') {
            this.setState({ important: 'Y' })
        }
        else {
            this.setState({ important: '' })
        }
        //一併更新狀態到外面的`List`組件去
        this.changeListState('important')
    }

    changeState(event) {
        let value = event.target.value
        if (event.target.name === "file") {
            value = value.substring(value.lastIndexOf('\\') + 1)
        }
        else if (event.target.name === "complete"){
            value = event.target.checked
            //一併更新狀態到外面的`List`組件去
        this.changeListState('complete')
        }
        this.setState({ [event.target.name]: value })
    }

    submitTodo() {
        //先檢查資料，至少要有名稱
        if (this.state.name === '') {
            alert('待辦事項名稱未輸入！')
        }
        else {   
                //判斷id是否有值
            if (this.state.id === '') {
                this.props.addTodoList(this.state)
                alert('成功新增！')
            }
            else {
                //有的話就執行編輯
                this.props.editTodoList(this.state)
                alert('編輯成功！')
        }
            //關閉新增畫面
            this.props.closeAdd()
            //初始化資料資料(這裡留著important:'Y'，等等透過事件初始化他)
            this.setState({ id: '', name: '', date: '', time: '', file: '', commit: '', important: '', complete: false })
            //不受控組件另外處理
            this.filebox.current.value = ''
        }
    }

   

    render() {
        return (
            <div>
                <div class="inputTaskTitle">
                    <input name="complete" type="checkbox" class="taskChk" checked={this.state.complete} onChange={this.changeState} />
                    <input name="name" type="text" placeholder="Type Something Here…"
                        class={(this.state.important == 'Y' ?
                            'important taskTitle ' : 'taskTitle ') +
                            (this.state.complete ? 'complete' : '')}
                        value={this.state.name}
                        onChange={this.changeState} />
                          <i class={this.state.important == 'Y' ?
                        'fas fa-star fa-lg icon iconImportant' : 'far fa-star fa-lg icon'}
                        onClick={this.tagImportant} ></i>
                    <i class="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                <InputTasksForm closeAdd={this.props.closeAdd}
                stateData={this.state}
                changeState={this.changeState}
                submitTodo={this.submitTodo}
                filebox={this.filebox} />
            </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //使用dispatch呼叫事件addTodoList操作store
        addTodoList: todoList => dispatch(addTodoList(todoList))
      }    
}

const InputTask = connect(null, mapDispatchToProps)(ConInputTask)

export { InputTask }