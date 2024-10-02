// import React, { useEffect, useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import './Dashboard.css'; 

// const Dashboard = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();
//   const [productData, setProductData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (isAuthenticated && user) {
//       const fetchProductData = async () => {
//         try {
//           const response = await fetch(`https://aayu22102.pythonanywhere.com/submit/${user.nickname}/product`);
//           if (!response.ok) throw new Error('Failed to fetch product data');
//           const data = await response.json();
//           setProductData(data.products);
//           setLoading(false);
//         } catch (err) {
//           setError(err.message);
//           setLoading(false);
//         }
//       };
//       fetchProductData();
//     }
//   }, [isAuthenticated, user]);

//   if (isLoading) return <div>Loading Auth...</div>;
//   if (loading) return <div>Loading product data...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     isAuthenticated && (
//         <div className="dashboard-main">
//         <div className="dashboard-container">
//         <h1>{user.nickname}</h1>
//         <h2>Product Details for {productData?.Name}</h2>
//         <div className="dashboard-grid">
//           <div className="dashboard-item">
//             <h3>Product Name</h3>
//             <p>{productData?.Name}</p>
//           </div>
//           <div className="dashboard-item">
//             <h3>Cost</h3>
//             <p>{productData?.Cost}</p>
//           </div>
//           <div className="dashboard-item">
//             <h3>EMI</h3>
//             <p>{productData?.Emi}</p>
//           </div>
//           <div className="dashboard-item">
//             <h3>Insurance</h3>
//             <p>{productData?.Insurance}</p>
//           </div>
//           <div className="dashboard-item">
//             <h3>Purchase Date</h3>
//             <p>{productData["Purchase Date"]}</p>
//           </div>
//           <div className="dashboard-item">
//             <h3>Warranty</h3>
//             <p>{productData?.Warrenty}</p>
//           </div>
//         </div>
//       </div>
//         </div>
//     )
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Dashboard.css'; 

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      const fetchProductData = async () => {
        try {
          const response = await fetch(`https://aayu22102.pythonanywhere.com/submit/${user.nickname}/product`);
          if (!response.ok) throw new Error('Failed to fetch product data');
          const data = await response.json();
          setProductData(data.products); // Assuming the structure remains the same
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchProductData();
    }
  }, [isAuthenticated, user]);

  if (isLoading) return <div>Loading Auth...</div>;
  if (loading) return <div>Loading product data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    isAuthenticated && productData && (
      <div className="dashboard-main">
        <div className="dashboard-container">
          <h1>{user.nickname}</h1>
          <h2>Product Details</h2>
          <div className="dashboard-grid">
            {/* Dynamically render all product details */}
            {Object.keys(productData).map((key, index) => (
              <div key={index} className="dashboard-item">
                <h3>{key}</h3>
                <p>{productData[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
