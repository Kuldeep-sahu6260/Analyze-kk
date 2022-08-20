import React,{useState} from 'react'
const initialState = {fullName: "",email: "",password: "",confirmPassword:""};


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState(initialState);

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        
      };
    const handleSubmit = (e) => {
        e.preventDefault();
    
      };
      const handleChange = (e)=> {
        setForm({...form ,[e.target.name]: e.target.value});
      }
      
  return (
    <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="500">
    <form action="" method="post" className="form-box" onSubmit={handleSubmit} >
      <h3 className="h4 text-black mb-4">{ isSignup ? 'Sign up' : 'Sign in' }</h3>
      {isSignup && (
          <div className="form-group">
          <input name="fullName" className="form-control" handleChange={handleChange} placeholder="Enter the FullName"/>
        </div>
      )}
      <div className="form-group">
        <input name="email" type="email" className="form-control" handleChange={handleChange} placeholder="Email Addresss"/>
      </div>
      <div className="form-group">
        <input name="password" type="password" className="form-control" handleChange={handleChange} placeholder="Password"/>
      </div>
     {isSignup &&(
         <div className="form-group mb-4">
         <input name="confirmPassword" type =" password" handleChange={handleChange} className="form-control" placeholder="Re-type Password"/>
       </div>
     )}
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-pill" >   { isSignup ? 'Sign Up' : 'Sign In' } </button>
        
      </div>
      <div className="form-group" onClick={switchMode} >
             <button className="btn  btn-pill" > { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" } </button>
      </div>
    </form>

  </div>
  )
}

export default Auth