import { useNavigate } from "react-router-dom";

export default function SignGoogle(){
    const navigate =  useNavigate();
    return (
        <>
        <div className="relative h-screen w-screen overflow-hidden "><img src="error.png" className="h-[100%] w-[100%]" alt="" />
        <div className="absolute inset-0 "><button className="px-3 py-2 bg-slate-600 text-white rounded-lg mt-1 ml-1 font-bold hover:bg-slate-500 hover:scale-105 active:scale-95" onClick={()=>navigate('/form')}>Go Back</button></div>
        </div>
        </>
    )
}
