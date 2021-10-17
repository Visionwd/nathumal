import React, { Component } from 'react'
import axios from "axios"
import Layout from "../components/Layout"

export class Api extends Component {

  
    state={
        data:""
    }

    componentDidMount(){
        this.setState({data:"hllo"})
        axios.post('http://www.pixelshakers.com/test.php',{
            myvalue:"hello"
        })
          .then(function (response) {
            console.log(JSON.parse(response.config.data).myvalue);
            return JSON.parse(response.config.data)
            
          }).then(data=>{
            this.setState({
                data:data.myvalue
            })
          })
          .catch(function (error) {
            console.log(error);
          });

//   fetch('http://www.pixelshakers.com/test.php', {
//   method: 'POST',
//   body: {
//     myvalue:"hello"
//   },
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
    }



    render() {
        return (
          <Layout>
              <p>your api message is :{this.state.data}</p>
          </Layout>
        )
    }
}

export default Api
