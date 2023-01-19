import { useState } from "react";

const Buton = () => {
    const [buton, setButon] = useState('');
    const [buttn, setButtn] = useState('');
    const [bot, setBot] = useState('');
        const Click = () => {
            setBot(parseInt(buton) + parseInt(buttn) );
        }
    return (
        <div>
            <input onChange={(e) => { setButon(e.target.value) }}></input> <input onChange={(e) => { setButtn(e.target.value) }}></input>
            {bot} <br></br>
            <button onClick={Click} className="btn btn-primary p-2">Click</button>
        </div>
    )
}
export default Buton;