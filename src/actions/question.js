import * as api from '../api/index'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: "POST_QUESTION", payload: data})
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllQuestions = () => async (disptach) => {
    try {
        const { data } = await api.getAllQuestions()
        disptach({ type: 'FETCH_ALL_QUESTIONS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        await api.deleteQuestion(id)
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const voteQuestion = (id, value) => async (dispatch) => {
    try {
        await api.voteQuestion(id, value)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, noOfAnswers, answerBody, userAnswered } = answerData;
        const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered )
        dispatch({ type: 'POST_ANSWER', payload: data})
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
    try {
        await api.deleteAnswer(id, answerId, noOfAnswers)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
} 

export const postqComment = (qcommentData) => async (dispatch) =>{
    try {
        const {id, commentBody, userCommented} = qcommentData;
        const { data } = await api.postqComment(id, commentBody, userCommented)
        dispatch({type: 'POST_QCOMMENT', payload: data })
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

export const deleteqComment = (id,commentId) => async(dispatch) => {
    try {
        await api.deleteqComment(id,commentId)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

export const postaComment = (acommentData) => async(dispatch) => {
    try {
        const {id, answerId, commentBody,userCommented} = acommentData;
        const {data} = await api.postaComment(id,answerId,commentBody,userCommented)
        dispatch({type: 'POST_ACOMMENT',payload: data})
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

export const deleteaComment = (id,answerId,commentId) => async(dispatch) => {
    try {
        await api.deleteaComment(id,answerId,commentId)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}
