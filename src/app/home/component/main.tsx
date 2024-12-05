export default function Main(){
    return(
        <div className="grid grid-cols-2 min-h-screen">
            <div className="bg-white">
                <div className="p-20 flex flex-col justify-center">
                    <h1 className="text-4xl text-black font-light font-mono">Peeranat Phaophom</h1>
                    <h1 className="text-7xl text-black font-bold font-mono mt-5">Software Engineer</h1>
                    <p className="text-2xl text-black mt-5">เขียนโค้ด สร้างอนาคต เปลี่ยนโลกด้วยไอเดีย</p>
                </div>
                <div className="flex justify-center">
                    <button className="btn font-mono text-white">Contact</button>
                </div>
            </div>
            <div>
                <div className="flex justify-center flex-col">
                    <img src="/img/Code Logo.png" alt="" />
                </div>
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold font-mono">Frame The Dev</h1>
                </div>
            </div>
        </div>
    );
}