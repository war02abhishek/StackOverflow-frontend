import axios from 'axios'

const API = axios.create({ baseURL: 'https://stackoverflow-backend-va6y.onrender.com'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/api/user/login', authData);
export const signUp = (authData) => API.post('/api/user/signup', authData);

export const postQuestion = (questionData) => API.post('/api/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/api/questions/get');
export const deleteQuestion = (id) => API.delete(`/api/questions/delete/${id}`) 
export const voteQuestion = (id, value ) => API.patch(`/api/questions/vote/${id}`, { value })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered ) => API.patch(`/api/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/api/answer/delete/${id}`, { answerId, noOfAnswers})

export const getAllUsers = () => API.get('/api/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/api/user/update/${id}`, updateData)

export const postqComment = (id,commentBody,userCommented) => API.patch(`/api/qcomment/addcomment/${id}`,{commentBody,userCommented})
export const deleteqComment = (id,commentId) => API.patch(`/api/qcomment/deletecomment/${id}`,{commentId})

export const postaComment = (id, answerId, commentBody, userCommented) => API.patch(`/api/acomment/addcomment/${id}`,{answerId,commentBody,userCommented})
export const deleteaComment = (id,answerId,commentId) => API.patch(`/api/acomment/deleteacomment/${id}`,{answerId,commentId})
