import './App.css';
import {useDispatch, useSelector} from "react-redux";
import 'flowbite';

function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }
   const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    return (
        <div className="app">
            <div style={{fontSize: "2rem"}}>{cash}</div>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))} className="btnOne">
                    Пополнить счет
                </button>
                <button onClick={() => getCash(Number(prompt()))} className="btnTwo">
                    Снять со счета
                </button>
            </div>
        </div>
    );
}

export default App;
