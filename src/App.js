import './App.css';
import StateTut from './components/useState/StateTut';
import ReducerTut from './components/useReducer/ReducerTut';
import EffectTut from './components/useEffect/EffectTut';
import RefTut from './components/useRef/RefTut';

function App() {
  return (
    <div className="app">
      {/* <StateTut /> */}
      {/* <ReducerTut /> */}
      {/* <EffectTut /> */}
      <RefTut />
    </div>
  );
}

export default App;
