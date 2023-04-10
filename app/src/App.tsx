import './index.css'
import ClassifyForm from "./ClassifyForm"

function App() {
  return (
  <>
      <div className=''>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Clasifica <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">textos</mark> al instante</h1>
        <ClassifyForm></ClassifyForm>
      </div>
    </>
  )
}

export default App
