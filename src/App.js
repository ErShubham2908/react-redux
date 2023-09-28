// import { useDispatch, useSelector } from "react-redux";
// import { add, reset } from "./CounterSlice";

// function App() {
//   const dispatch = useDispatch();
//   const { count } = useSelector(state => state);

//   function addOneToCount() {
//     dispatch(add(1));
//   }

//   function resetCount() {
//     dispatch(reset());
//   }

//   return (
//     <div>
//       Count: {count}
//       <button onClick={addOneToCount}>
//         +1
//       </button>
//       <button onClick={resetCount}>
//         RESET
//       </button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Counter from './Counter/Counter'

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
