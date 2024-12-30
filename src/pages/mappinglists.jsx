const Heels = ()=>{
    const heels = ["gucci","chanel","bata"];
    return(<>
    <ul>{heels.map((heel,index)=>(

        <li key={index}>{heel}</li>
    
    ))}
    </ul>
    </>)
}
export default Heels;





