import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice";
import { RootState } from "./redux/store";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value)

  return (
    <div className="flex justify-center mt-32">
      <div className="bg-gray-100 border-blue-400 px-24 py-10 rounded-xl">
        <button
          onClick={() => dispatch(decrement())}
          className="increment border-2 border-red-400 px-8 py-1 text-2xl bg-red-400 hover:bg-red-500 hover:shadow-xl text-white rounded-md"
        >-</button>
        <span className="count mx-5 text-4xl">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="increment border-2 border-green-400 px-8 py-1 text-2xl bg-green-400 hover:bg-green-500 hover:shadow-xl text-white rounded-md"
        >+</button>
      </div>
    </div>
  )
}