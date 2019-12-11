

import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css'
import Name from '../ButtonComponents/Name';
import Id from '../ButtonComponents/Id';
import data from '../MOCK_DATA';

class TableExample extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            tableData:[]

        };
        this.compareBy.bind(this);
        this.handleNameClick.bind(this);
    }

    componentDidMount() {
        // axios.get(`http://localhost:8080/demo/all`)
        //     .then(res => {
        //         console.log(res);
                this.setState({
                    tableData: data,
                   

                })
            // }
            // )
    }

    handleNameClick(key){
       
            let arrayCopy = [...this.state.tableData];
            arrayCopy.sort(this.compareBy(key));
            this.setState({tableData: arrayCopy});
          
    }

    handleIdClick(key){
        let arrayCopy = [...this.state.tableData];
        arrayCopy.sort(this.compareBy(key));
        this.setState({tableData: arrayCopy});   
    }

    compareBy(key) {
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      }
     
      
        

    render() {
        return (
            <div >

            <Name onClick={() => this.handleNameClick('name')}/>
            <Id onClick={()=>this.handleIdClick('id')}/>
            <table id="student" className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {this.state.tableData.map((d,key)=>{
                        return(<tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.address}</td>
                    </tr>
                        )})}
                </tbody>
            </table>
            </div>

        );
    }
}


export default TableExample ;