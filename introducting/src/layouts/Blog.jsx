import React, { useEffect } from 'react';
import {
  useParams,
  useLocation,
  useHistory,
} from 'react-router-dom';

const Blog = () => {
  const { id, category } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(history);

  useEffect(
    () => {
      console.log(location)
    },
    [id]
  );

  return (
    <div>
      {id}
      {category}
    </div>
  );
};

export default Blog;
