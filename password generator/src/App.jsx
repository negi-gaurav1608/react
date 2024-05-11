import { useCallback, useEffect, useRef, useState } from 'react';
import { AiFillAlert } from "react-icons/ai";
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [number,setnumber]=useState(false);
  const [char,setchar]=useState(false);
  const [password,setpassword]=useState("");

  //use ref hook
  const passwordref=useRef("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(number){
      str+="0123456789"
    }
    if(char){
      str+="!@#$%^&*()_-/+.?|"
    }

    for(let i=1;i<=length;i++){
      let ele=Math.floor(Math.random()*str.length+1)
      pass=pass+str.charAt(ele)
    }
    setpassword(pass);
  },[length,number,char,setpassword])


  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,setpassword])

  const copyToClipboard=useCallback(()=>{
    passwordref.current?.select();
    //passwordref.current?.setSelectionRange(0,3);            select values within the range
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-300 m-3 bg-gray-600">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <AiFillAlert/>
        <div className="flex shadow rounded-lg overflow mb-3">
        <input
          type="text"
          value={password}
          className='outline-none w-full py-2 px-3 rounded-lg'
          placeholder='password'
          readOnly
          ref={passwordref}
        />
        <button className='outlne-none bg-blue-700 text-white px-3 pu-0.5 shrink-0'
        onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            name="" id="" />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={number}
            onChange={()=>{
              setnumber((prev)=>!prev)
            }}
            name="" id="numberInput" />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={char}
            onChange={()=>{
              setchar((prev)=>!prev)
            }}
            name="" id="CharacterInput" />
            <label htmlFor='CharacterInput'>Characters</label>
          </div>
        </div>
        

      </div>
      
    </>
  )
}

export default App
