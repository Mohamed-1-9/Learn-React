export default function Header(){
    const date = new Date().getHours()
    const open = 12;
    const close = 22;


    return <>
        <h1>HI from Pizza.co</h1>
        {date > close && open > date  ? <p>we're not open {date} </p> : <p>we're open {date}</p>}
    
    </>
        
} 