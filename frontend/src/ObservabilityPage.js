// src/ObservabilityPage.js
import React from 'react';

const ObservabilityPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#007BFF' }}>🚀 Observability Dashboard</h1>
      <p style={{ textAlign: 'center' }}>
        Monitor the health and performance of your application.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
        
        {/* Prometheus */}
        <div style={{ textAlign: 'center' }}>
          <h2>📈 Prometheus</h2>
          <iframe
            src="http://localhost:9090"
            title="Prometheus"
            style={{ width: '600px', height: '450px', border: '1px solid #ddd' }}
          ></iframe>
        </div>

        {/* API Documentation */}
        <div style={{ textAlign: 'center' }}>
          <h2>📘 API Documentation</h2>
          <iframe
            src= "http://localhost:8002/swagger-ui/index.html"
            title="API Documentation"
            style={{ width: '600px', height: '450px', border: '1px solid #ddd' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ObservabilityPage;
