import firebase,{database} from '../../firebase';
export const actionUserName = () => (dispatch) => {
    
    setTimeout(() => {
        return dispatch({type :'CHANGE_USER', value : 'wahid hidayat'})
    }, 2000)

}
export const registerUserAPI = (data) => (dispatch) =>{
    return new Promise((resolve, reject) => {
    dispatch({type : 'CHANGE_LOADING', value : true})
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    .then(res => {
        console.log('succes: ', res);
        dispatch({type : 'CHANGE_LOADING', value:false})
        resolve(true)
    })        
    .catch(function(error){
        var errorCode = error.code;
        var errorMassage = error.massage;
        console.log(error.code, error.massage)
        dispatch({type : 'CHANGE_LOADING', value:false})
        reject(false)
    })
})
}
export const loginUserAPI = (data) => (dispatch) =>{
return new Promise((resolve, reject) => {
    dispatch({type : 'CHANGE_LOADING', value : true})
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then(res => {
        console.log('succes: ', res);
        const dataUser = {
            email : res.user.email,
            uid : res.user.uid,
            emailVerified : res.user.emailVerified
        } 
        dispatch({type : 'CHANGE_LOADING', value:false})
        dispatch({type : 'CHANGE_ISLOGIN', value:true})
        dispatch({type : 'CHANGE_USER', value: dataUser})
        resolve(dataUser)
    })        
    .catch(function(error){
        var errorCode = error.code;
        var errorMassage = error.massage;
        console.log(error.code, error.massage)
        dispatch({type : 'CHANGE_LOADING', value:false})
        dispatch({type : 'CHANGE_ISLOGIN', value:false})
        reject(false)
    })
})
}
export const addDataToAPI = (data) => (dispatch) =>{
database.ref('CerPen/' ).push({
    title : data.title,
    content : data.content,
     date : data.date
})
}

export const getDataFromAPI = (userId) => (dispatch)=> {
    const urlNotes = database.ref('CerPen/' );
    return  new Promise((resolve, reject)=>{
    urlNotes.on('value', function(snapshot) {
        console.log('get data : ',snapshot.val());
        const data = [];
        Object.keys(snapshot.val()).map(key => {
            data.push({
                id: key,
                data : snapshot.val()[key]
            })
        });
        dispatch({type : 'SET_NOTES', value: data})
        resolve(snapshot.val())
    });
    })
}