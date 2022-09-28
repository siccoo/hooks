import './App.css';
import StateTut from './components/useState/StateTut';
import ReducerTut from './components/useReducer/ReducerTut';
import EffectTut from './components/useEffect/EffectTut';

function App() {
  return (
    <div className="app">
      {/* <StateTut /> */}
      {/* <ReducerTut /> */}
      <EffectTut />
    </div>
  );
}

export default App;
