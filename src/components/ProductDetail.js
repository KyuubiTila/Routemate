import { useParams } from 'react-router-dom';
export const ProductDetail = () => {
  // useParams is used when we only need to get the id
  const params = useParams();
  console.log(params.id);
  return <div className="component">Product {params.id}</div>;
};
