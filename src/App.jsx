import { Navbar , Welcome , Dock } from '#components';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome /> 
      <Dock />
    </main>
  )
}

export default App