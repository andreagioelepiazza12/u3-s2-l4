import { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const CommentArea = ({ asin }) => {

  {/* 
    state = {
    comments: [],
    isLoading: false,
    isError: false,
  }
    */}

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState (false);
  
    
  

    useEffect(() => {
      const fetchComments = async () => {
         
        setIsLoading(true);
        try {
          let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/comments/' + asin,
            {
              headers: {
                Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkZDE1ZGM5MjI4ZDAwMTVmYWQzNTMiLCJpYXQiOjE3MzMyMzc3ODksImV4cCI6MTczNDQ0NzM4OX0.55v4grDd71hxVkuIIrbqStfvnxetJSkcnckTFGqtyFI',
              },
            }
          );
          if (response.ok) {
            let comments = await response.json();
            setComments(comments);
            setIsLoading(false);
            setIsError(false);
          } else {
            setIsLoading(false);
            setIsError(true);
          }
        } catch (error) {
          console.log(error);
          setIsLoading(false);
          setIsError(true);
        }
      };
  
      fetchComments();
    }, [asin]); 
  
    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={asin} />
        <CommentList commentsToShow={comments} />
      </div>
    );
  };
  
  export default CommentArea;