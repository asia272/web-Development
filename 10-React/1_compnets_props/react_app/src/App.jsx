import UserCard from './components/UserCard'
import './App.css'

function App() {
let users = [
  {
    name:"asia",
    des:"hi i am asia"
  },
  {
    name:"muryam",
    des:"hi i am muryam"
  },
  {
    name:"amna",
    des:"hi i am aman"
  }, {
    name:"sidra",
    des:"hi i am sidra"
  },
]

  return (
    <>
      <div className='container'>
        <UserCard info={users[0]}/>
        <UserCard info={users[1]}/>
        <UserCard info={users[2]}/>
        <UserCard info={users[3]}/>
      </div>
       
    </>
  )
}

export default App
