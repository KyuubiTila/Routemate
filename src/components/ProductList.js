import { useSearchParams, useLocation } from 'react-router-dom';
export const ProductList = () => {
  // useSearchParams is used when we need to get the search details
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('keyword'));

  // useLocation is used when we need to get everthing that could have been queried
  const location = useLocation();
  // console.log(searchParams.get('instock'));
  // console.log(searchParams.get('rating'));
  console.log(location);
  return <div className="component">ProductList</div>;
};
