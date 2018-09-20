'use strict'

import React, { Component } from 'react'

const App  = () => (
  <div className="app">
    <div className="search">
      <input type="search" placeholder="Digite o nome do usuário no Github" />
    </div>
    <div className="user-info">
      <img src="https://avatars0.githubusercontent.com/u/7607791?v=4" />
      <h1 className="username"> 
        <a href="https://github.com/calleufuzi"> Calleu Fuzi </a>
      </h1>
      <ul className="repos-info">
        <li>
          Repositórios : 19
        </li>
        <li>
          Seguidores : 1
        </li>
        <li>
          Seguindo : 3
        </li>
      </ul>
    </div>
    <div className="actions">
        <button>Ver reposiórios</button>
        <button>Ver favoritos</button>
      </div>
      <div className="repos">
        <h2>Repositótos:</h2>
        <ul>
          <li>
            <a href="#">Nome do Repositório</a>
          </li>
          <li>
            <a href="#">Nome do Repositório</a>
          </li>
        </ul>
      </div>
      <div className="starred">
        <h2>Favoritos:</h2>
        <ul>
          <li>
            <a href="#">Nome do Repositório</a>
          </li>
          <li>
            <a href="#">Nome do Repositório</a>
          </li>
        </ul>
      </div>
  </div>
)


export default App
