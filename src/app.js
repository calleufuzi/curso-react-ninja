'use strict'

import React, { Component } from 'react'
import Ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content';


class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []

    }
  }

  handleSearch (e) {
    const value  = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      Ajax().get(`https://api.github.com/users/${value}`)
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos:result.public_repos,
            following: result.following,
            followers: result.followers
          }
        })
      })
    }
  }

  getRepos (type) {
    return (e) => {
      Ajax().get(`https://api.github.com/users/calleufuzi/${type}`)
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
          }))
        })
      })
      
    }
  }

  render () {
    return <AppContent 
    userinfo={ this.state.userinfo }
    repos={this.state.repos}
    starred={this.state.starred}
    handleSearch={(e) => this.handleSearch(e)}
    getRepos={this.getRepos('repos')}
    getStarred={this.getRepos('starred')}
    />
  }
}
export default App
