import React,{useState} from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './Questions.css'
import { deleteaComment } from '../../actions/question'

const Acomments = ({parameterrr}) => {
  
    const User = useSelector((state) => (state.currentUserReducer))
            ///////////////////////       
     const dispatch = useDispatch()
     const { id } = useParams() 
    const handleDelete = (answerId, commentId) => {
        dispatch(deleteaComment(id,answerId, commentId))   
    } 

  return (
    <div>
        
        {
            parameterrr.Comment.length !== 0 && (
                <section>
                                                       
                {parameterrr.Comment.map((comm) =>(
                <div className="display-comment" key={comm._id} >
                    <p>{comm.commentBody} &nbsp; --  </p>
                    <div className='comment-actions-user'>
                                
                        <p style={{display:"flex"}}className='display-time'><Link to={`/Users/${comm.userId}`} className='user-link' style={{color:'#0086d8'}}>
                            { comm.userCommented }  </Link> &nbsp;   {moment(comm.commentedOn).fromNow()}</p>
                               
                            <div className="question-actions-user redcolor" >
                            {
                                User?.result?._id === comm?.userId && (
                                    <button type='button' onClick={() => handleDelete(parameterrr._id,comm._id)} >Delete</button>
                                )
                            }
                            </div>                           
                    </div>
                </div>
                ))}
                                                 
                </section>
            )
            
        }
        
       
    </div>
  )
};

export default Acomments;
