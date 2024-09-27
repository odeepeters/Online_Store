import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Product } from '../../backend/models/productModel';

const Admin = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    axios
      .get('http://localhost:5000/product')
      .then((response) => {
        setProduct(response.data.data);

        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);
  return (
    <div className="px-4 py-8 max-w-7xl bg-grey-500 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <Link
                  to="/admin/product/create"
                  className="bg-green-600 hover:bg-green-900 text-white py-2 px-4 font-medium rounded-lg shadow-md"
                >
                  Add Item +
                </Link>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {Product.map((product, index) => (
              <tr key={product._id} className="bg-white hover:bg-gray-300">
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} alt={product.title} />
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5">{product.name}</td>
                <td className="py-3 px-5">{product.priceInCents}</td>
                <td className="py-3 px-5">{product.description}</td>
                <td className="py-3 px-5">{product.category}</td>
                <td className="py-3 px-5">
                  <div className="flex justify-center gap-x-1">
                    <Link to={`/admin/product/edit/${product._id}`} className="bg-orange-500 hover:bg-orange-900 text-white py-2 px-4 font-medium rounded-l-lg text-sm">Edit</Link>

                    <Link to={`/admin/product/edit/${product._id}`} className="bg-orange-500 hover:bg-orange-900 text-white py-2 px-4 font-medium rounded-l-lg text-sm">Delete</Link>
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
