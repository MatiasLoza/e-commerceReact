import React, { createContext} from "react";
import { getFirestore, getFireAuth } from "../firebase/firebase";
import firebase from "firebase/app";


export const LoginContext = createContext([]);

export const LoginProvider = ({ defaultValue = false, children }) => {
  const firebaseAuth = getFireAuth();

  const registrar = async ({ nombre,telefono,email },password) => {    
    let success = true;
    let mensaje = '';
    await firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result)=>{
        result.user.updateProfile({
          displayName:nombre,
          phoneNumber: telefono
        })      
        .catch((error) => {
          mensaje = error.message;
          return { success: false, mensaje: mensaje };
        });
      })
      .catch(function (error) {
        return { success: false, mensage: error.message };
      });
      const db = getFirestore();
      const buyers = db.collection("buyers");
      buyers.add({nombre:nombre,telefono:telefono,email:email}).then((response) => {
        mensaje = 'Usuario creado exitosamente';
        return { success: success, mensaje: mensaje };           
      })
      .catch((error) => {
        console.log(error);
        success = false;
        mensaje = error.message;
        return { success: success, mensaje: mensaje };
      });
    
  };
  
  const login = async (email, password) => {
    await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase.auth().signInWithEmailAndPassword(email, password)
        })
        .catch((error) => {
         throw error.message;
        });      
  };

  const usuarioActual = () => {
    return firebaseAuth.currentUser;
  }

  
  const logout = async () => {
    await firebaseAuth.signOut();

  };

  return (
    <LoginContext.Provider value={{ registrar, login, logout, usuarioActual }}>
      {children}
    </LoginContext.Provider>
  );
};
