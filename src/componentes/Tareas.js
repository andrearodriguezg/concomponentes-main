import M from 'minimatch';
import React, { Component } from 'react';

class Tareas extends Component {

    constructor(){
        super();
        this.state = {
            title:'',
            description:'',
            tasks: [],
            _id: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    agregarTarea(e) {
        e.preventDefault();
        if(this.state._id) {
          fetch(`/api/tasks/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
              title: this.state.title,
              description: this.state.description
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              window.M.toast({html: 'tarea actualizada'});
              this.setState({_id: '', title: '', description: ''});
              this.fetchTasks();
            });
        } else {
          fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              window.M.toast({html: 'Task Saved'});
              this.setState({title: '', description: ''});
              this.fetchTasks();
            })
            .catch(err => console.error(err));
        }
    
      }

    componentDidMount() {
        this.fetchTasks
    }

    buscarTarea() {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                this.setState({tasks: data});
                console.log(this.state.tasks);
            });
    }

    eliminarTarea(id) {
        if(confirm('eliminar?')){
            fetch('/api/task/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data=> {
                console.log(data)
                M.toast({html:'tarea eliminada'});
                this.fetchTasks();
                });
        }
    }

    editarTarea(id){
        fetch('/api/task/' + id,)
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            this.setState({
                title:data.title,
                description:data.description,
                _id:data._id,
            })
        })
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]:value
        });
    }
};
export {Tareas}