import './App.css'

export default function App() {
  const createDigits = () => {
    const buttonArray = [];
    for (let i = 1; i < 10; i++) {
      buttonArray.push(<button key={i}>{i}</button>);
    }
    return buttonArray;
  };
  return (
    <main>
      <div className="calculator">
        <div className="display">
          <span>0</span>
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="btnsDiv">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </main>
  )
}
