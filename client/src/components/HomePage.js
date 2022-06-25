

export default function HomePage(){
      return(
        <div>
        <h3>LET'S ENJOY THIS VAST READ AND WRITE UNIVERSE</h3> <br></br>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={require('../assets/landing.png')} className="landing-image"/><br></br>
        </div>     

        <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{backgroundColor:"#F2CB8A", borderRadius:"50%", margin:"50px" , width:"100px", height:"50px"}}>LOG IN</button>
        <button style={{backgroundColor:"#F2CB8A", borderRadius:"50%", margin:"50px",  width:"100px", height:"50px"}}>REGISTER</button>
        </div> 
        </div>
      )
}