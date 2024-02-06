import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VanData = () => {
  const { id } = useParams();
  const [vanData, setVanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/vans/${id}`);
        setVanData(response.data);
      } catch (error) {
        console.error('Error fetching van data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!vanData) {
    return <div>Van not found</div>;
  }

  return (
    <div>
      <h1>Van Details</h1>
      <p>ID: {vanData.id}</p>
      <p>Name: {vanData.name}</p>
      {/* Display other van details as needed */}
    </div>
  );
};

export default VanData;
