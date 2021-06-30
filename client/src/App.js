import React, { Component } from 'react'
import {userApi} from "./axios"
export default class App extends Component {
  componentDidMount=async()=>{
    // const usersData=await fetch(`http://localhost:3001/users`).then((res)=>{return res.json()}).then((data)=>{return data})
    // console.log(usersData)
    const userData=await userApi.get("/users").then((res)=>{return res.data})
    console.log(userData)
  }
  render() {
    return (
      <div>
        hai from client
      </div>
    )
  }
}
