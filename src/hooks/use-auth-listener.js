import {useState, useEffect,useContext} from 'react';
import {FirebaseContext} from '../context/firebase';


export default function useAuthListener(){
    //Check if user is in local storage
    //Which means we have to store the user stateon any particular action whether they login or logout in the local storage
    // 
    const [user,setUser] = useState(
        JSOn.parse(localStorage.getItem('authUser'))
    );

    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if(authUser){
                localStorage.setItem('authUser',JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    },[]);

    return {user};
}