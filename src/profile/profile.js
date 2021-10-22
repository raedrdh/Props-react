import React from "react";
import Childprofile from "./profilechild";
import Mypic from "./mypic.jpg";
import Avatar from '@mui/material/Avatar';

const profile = () => {
  const handleName = (fullName) => alert(` hello ,this is the profile of ${fullName}`);

  return (
    <>
      <Childprofile 
        fullName="Raed Rdhaounia"
        bio={[
          "Hello",
          "I have 27 years old",
          "I am a student",
          "I got diplome",
        ]}
        profession="Profession" 
        handleName={handleName}
      >
        <div>
        <Avatar
        alt="my picture"
        src={Mypic}
        sx={{ width: 56, height: 56 }}
      />
        </div>
      </Childprofile>
    </>
  );
};

export default profile;
