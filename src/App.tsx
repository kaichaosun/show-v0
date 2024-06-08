import { Price } from '@/components/price'
import { Shortform } from '@/components/shortform'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className='mt-20'>Show v0</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Shortform />
      
      <Price />
    </div>
  )
}

export default App
