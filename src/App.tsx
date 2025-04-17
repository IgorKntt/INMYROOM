import './App.scss'
import { Content } from '@/components/Content/Content.tsx'
import { TapBar } from '@/components/TapBar/TapBar'
import { useEffect } from 'react';

function App() {

  return (
    <>
    <main className ="main">
      <Content />
    </main>
    <TapBar />
    </>

  )
}

export default App
