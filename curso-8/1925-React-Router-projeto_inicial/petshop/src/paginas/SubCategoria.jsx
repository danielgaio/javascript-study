import React from 'react';
import { useParams } from 'react-router-dom';
import ListaPost from "../components/ListaPost";

const SubCategorias = () => {
  const {subcategoria} = useParams
  return <ListaPost url={`/posts?subcategoria=${subcategoria}`} />;
}

export default SubCategorias
