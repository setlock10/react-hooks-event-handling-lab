// Code Keypad Component Here



function Keypad (){
    function usingKeypad(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={usingKeypad} type="password"></input>
        </div>
    )
}

export default Keypad;