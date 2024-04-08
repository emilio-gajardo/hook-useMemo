import './App.css';
import { Empleados } from './components/Empleados';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <section>
        {
          <>
            {/* Ejerc. usando "Hook memo" */}
            {/* <Tareas /> */}

            {/* Ejerc. usando metodo "React.memo" para components*/}
            <Gestion />
          </>
        }
      </section>
    </div>
  );
}

export default App;
