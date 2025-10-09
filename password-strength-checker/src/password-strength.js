import React,{useState} from 'react';
export default function PasswordStrengthChecker(){
    const[password,setPassword]=useState('');
    const[strength,setStrength]=useState({level:'',score:0,color:''});
    const checkStrength=(pwd)=>{
        let score=0;
        if(pwd.length>=8) score+=25;
        if(/[A-Z]/.test(pwd)) score+=25;
         if(/[0-9]/.test(pwd)) score+=25;
         if(/[^A-Za-z0-9]/.test(pwd)) score+=25;
         let level='';
         let color='';
         if(score<=25){
            level='weak';
            color='red';
         }
         else if(score<=50){
            level='fair';
            color='orange';
         } else if(score<=75){
             level='Good';
            color='blue';
         }
         else{
            level='Strong';
            color='green';
         }
         setStrength({level,score,color});
    };
    const handleChange=(e)=>{
        const pwd=e.target.value;
        setPassword(pwd);
        checkStrength(pwd);
    };
    return (
        <div style={{fontFamily:'Arial',maxWidth:'400px',margin:'auto',padding:'20px'}}>
            <h2>Password Strength Checker</h2>
            <input type="password" value={password} onChange={handleChange} placeholder="Enter your password" style={{width:'100%',padding:'10px',fontSize:'16px',marginBottom:'10px'}}/>
            {password && (
                <div>
                    <div style={{height:'10px',width:`${strength.score}%`,backgroundColor:strength.color,transition:'width 0.3s'}}></div>
                    <p style={{color:strength.color,fontWeight:'bold'}}>Strength: {strength.level}</p>
                </div>
            )}
        </div>
    );
}