import { useEffect } from "react"
import Game from "./components/Game"
import Header from "./components/Header"
import store from "./store/store"
import { observer } from "mobx-react-lite"

const App = observer(() => {

  useEffect(() => {
    store.getMatches()
    return () => {
      store.disconnectWebSocket()
    }
  }, [])

  return (
    <div className="max-w-[1800px] mx-auto pl-5 pr-5 pt-11 flex flex-col gap-5">
     <Header/> 
     <div className="flex flex-col gap-3">
     {store.sortedMatches.map((el, idx) => (
      <Game key={idx} {...el} />
     ))}
     
     </div>
    </div>
  )
})

export default App
