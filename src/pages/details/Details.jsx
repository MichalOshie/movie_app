import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import useFetch from '../../hooks/useFetch';

const Details = () => {
  const { mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}`)
  
  return (
    <div>Details</div>
  )
}

export default Details