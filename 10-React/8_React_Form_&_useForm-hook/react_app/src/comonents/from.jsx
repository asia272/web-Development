import { useState } from "react"

export default function From(){
let [formData, setFromData] = useState({userName:"",fullName:"",pwd:""});

let handleInputChange = (event) => {
    const { name, value } = event.target; 
    setFromData({ ...formData, [name]: value }); 
};
let handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formData);
    setFromData({
        userName:"",
        fullName:"",
        pwd:"",
    })
}

 
    return(<>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name:</label>
        <input type="text"
         placeholder="userName"
         name="userName"
         id="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
          <br /><br /><br />
          <label htmlFor="fullName">Full Name:</label>
        <input type="text"
         placeholder="fullName"
         name="fullName"
         id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          />
             <br /><br /><br />
          <label htmlFor="pwd">Password:</label>
        <input type="text"
         placeholder="password"
         name="pwd"
         id="pwd"
          value={formData.pwd}
          onChange={handleInputChange}
        />
        
        
        <button>Submit</button>
    </form>
    </>)
}