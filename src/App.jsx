import Contact from"./components/contact"
import Register from"./components/Register"
import Home from"./components/Home"
import Login from"./components/login"
function App(){
  return(
    <div className="h-screen w-screen bg-slate-500 flex items-center justify-center gap-x-[10px]">
     {/* <h2 className="text-8xl text-white">Hello React!</h2>
      <div className="h-10 w-10 bg-yellow-500 rounded-2xl"></div>
      <div className="h-10 w-10 bg-blue-500 rounded-2xl"></div>
      <div className="h-10 w-10 bg-pink-500 rounded-2xl"></div>
      <div className="h-10 w-10 bg-green-500 rounded-2xl"></div>*/}
      {/*<Login/>*/}
      {/*<Home data="Welcome Everyone!"/>*/}
     {/* <Register/>*/}
     <Contact data="For more Info:!"/>

    </div>
  )
}
export default App
       