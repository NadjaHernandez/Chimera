import './Lobby.css';
import {useRef} from "react";
import Polling from './Polling'
import { Link } from 'react-router-dom'
let stream;
function Lobby() {
    const videoRef = useRef()
    const shareScreen = async () => {
        if(navigator.mediaDevices.getDisplayMedia){
            stream=await navigator.mediaDevices.getDisplayMedia({
                audio:true,
                video:{
                    cursor:"always"
                }
            })
            console.log('stream',stream)
            videoRef.current.srcObject=stream
        }
    }


  return (
      <>

    <div className="Lobby">
        <header className="Lobby-header">
            <video className="video" width={800} ref={videoRef} autoPlay controls/>
        </header>
        <body>
        <Link to='/'>

<button className="button">Create</button>
</Link>
            <button className="button" onClick={()=>{
                shareScreen()
            }}>Share Screen</button>
            <button className="button" onClick={()=>{
                let tracks=videoRef.current.srcObject.getTracks()
                videoRef.current.srcObject=null
                console.log(tracks)
            }}>Stop Screen</button>
        </body>
        

        
    </div>
    </>
  )
}

export default Lobby
