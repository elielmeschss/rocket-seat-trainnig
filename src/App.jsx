
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { PostNew } from './components/PostNew'

import './global.css'
import styled from './App.module.css'

function App() {
  return (
    <div>
      <Header/>
     
      <div className={styled.wrapper}>
        <Sidebar/>

        <main>
          <PostNew />
          <PostNew />

        </main>
      </div>
    </div>
  )
}

export default App
