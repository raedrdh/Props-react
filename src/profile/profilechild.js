import React from "react";
import  PropTypes  from "prop-types";

const childprofile = (props) =>{
    const {
        handleName,
        fullName,
        bio,
        profession,
        children
    } = props
const styleBox ={ paddingLeft :'50px' , paddingTop :'20px' } 
const styleTitle ={ color :'red' , textAlign :'center'}
    return(
        <div style={styleBox}>
            {handleName(fullName)}
        <h1 style={styleTitle}>{fullName}</h1>
        <div>
            <h4 style={styleTitle}> bio </h4>
            <lu>
           {bio.map((el,i)=>(
               <li key={i}>{el}</li>
           ))} 
           </lu>
        </div>
        <p style={styleTitle}>{profession}</p>
        {children }
        </div>
)
}

childprofile.defaultProps = {  
    fullName :"user name",
    bio :["details of user"],
    profession : "profession of user"  
}

childprofile.prototype = {
    fullName : PropTypes.string.isRequired,
    handleName : PropTypes.func,
    bio : PropTypes.arrayOf(PropTypes.string),
    profession : PropTypes.string
}


export default childprofile;