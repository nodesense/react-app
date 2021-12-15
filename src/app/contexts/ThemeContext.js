import React, {createContext } from 'react';

// blue is a default value for the context
// the value blue shall be used when we use the 
// context without any provider
const Theme = createContext("blue")

export default Theme