import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação
import api from './api';

function EventList({ onEdit, onCreate }) {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); // Hook do react-router-dom para redirecionamento

  useEffect(() => {
    loadEvents();
  }, []);

  // Carrega os eventos
  const loadEvents = () => {
    api.get('/events')
      .then(response => setEvents(response.data))
      .catch(err => console.error(err));
  };

  // Deleta um evento específico
  const handleDelete = (id) => {
    api.delete(`/events/${id}`)
      .then(() => setEvents(events.filter(e => e.id !== id)))
      .catch(err => alert(err.response.data));
  };

  // Redireciona para a página de Observability
  const handleObservability = () => {
    navigate('/observability');
  };

  return (
    <div className="container mt-4">
      <h2>Events</h2>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={onCreate}>
          Create New Event
        </button>
        <button className="btn btn-warning text-dark fw-bold" onClick={handleObservability}>
          🌐 Go to Observability
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.startDate}</td>
              <td>{event.endDate}</td>
              <td>{event.price}</td>
              <td>{event.status}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(event)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(event.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventList;
