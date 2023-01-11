import { createContext, useEffect, useReducer } from "react";
import Cookies from 'js-cookie';
import { useState } from "react";
import {jwtVerify} from "jose";

// const INITIAL_STATE = {
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   loading: false,
//   error: null,
// };



export const AuthContext = createContext();

// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         loading: true,
//         error: null,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload,
//         loading: false,
//         error: null,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         user: null,
//         loading: false,
//         error: action.payload,
//       };
//     case "LOGOUT":
//       return {
//         user: null,
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

async function verify(token, secret){
  try {
      const decode = await jwtVerify(token, new TextEncoder().encode(secret));
      return decode;
  } catch (error) {
      return false;
  }
}

export const AuthContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [user,setUser] = useState(null)
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.user));
  // }, [state.user]);

  useEffect(()=>{
    const token = Cookies.get('jwt')
    const myfn = async()=>{
      const {payload} = await verify(token,'CampKey')
      setUser(payload['user'])
      console.log(payload['user']);
    }
    if (token !== undefined) myfn()
    else {
      setUser(null)
    }
  },[])

  return (
    <AuthContext.Provider value={user}
      // value={{
      //   user: state.user,
      //   loading: state.loading,
      //   error: state.error,
      //   dispatch,
      // }}
    >
      {children}
    </AuthContext.Provider>
  );
};
