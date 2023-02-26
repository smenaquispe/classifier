import './index.css'
import SummaryForm from "./SummaryForm"

function App() {
  return (
  <>
      <div className=''>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Let's <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">summarize</mark> text</h1>
        <SummaryForm></SummaryForm>
      </div>
    </>
  )
}

export default App
