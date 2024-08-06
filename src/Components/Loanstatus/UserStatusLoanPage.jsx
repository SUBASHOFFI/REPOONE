import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Loanstatus/UserStatusLoanPage.css';  // Import your CSS file

const UserViewStatusPage = () => {
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const response = await axios.get('http://localhost:3006/get-loan-data');
        setLoanData(response.data);
      } catch (error) {
        console.error('Error fetching loan data:', error);
      }
    };

    fetchLoanData();
  }, []);

  return (
    <div className='user-view-loan-page'>
      <h1>Your Loan Applications</h1>
      <div className='display-data'>
        {loanData.length === 0 ? (
          <p>No loan applications found</p>
        ) : (
          <table className='loan-data-table'>
            <thead>
              <tr>
                {loanData[0] && Object.keys(loanData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loanData.map((row, index) => (
                <tr key={index} className={row.status === 'Approved' ? 'approved' : row.status === 'Rejected' ? 'rejected' : ''}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserViewStatusPage;
