import { useEffect, useState } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
 
function App() {
  const [largeText, setLargeText] = useState(() =>
    JSON.parse(localStorage.getItem('largeText') ?? 'false')
  )

  useEffect(() => {
    localStorage.setItem('largeText', JSON.stringify(largeText))
  }, [largeText])

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Juan Dela Cruz" />
        </div>
    </SettingsContext>
  )
}
 
export default App