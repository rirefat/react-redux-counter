import { decrement, increment, incrementByFive } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

export default function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value)

  return (
    <div className="flex justify-center mt-32">
      <div className="bg-gray-100 border-blue-400 px-24 py-10 rounded-xl">
        <button
          onClick={() => dispatch(decrement())}
          className="mx-2 border-2 border-red-400 px-8 py-1 text-2xl bg-red-400 hover:bg-red-500 hover:shadow-xl text-white rounded-md"
        >-</button>
        <button
          onClick={() => dispatch(increment())}
          className="mx-2 border-2 border-green-400 px-8 py-1 text-2xl bg-green-400 hover:bg-green-500 hover:shadow-xl text-white rounded-md"
        >+</button>
        <button
          onClick={() => dispatch(incrementByFive(5))}
          className="mx-2 border-2 border-green-400 px-8 py-1 text-2xl bg-green-400 hover:bg-green-500 hover:shadow-xl text-white rounded-md"
        >+5</button>
        <span className="mx-5  text-4xl">{count}</span>
      </div>
    </div>
  )
}