import React, { useState, useEffect } from 'react';
import api from './api';

function EventForm({ eventToEdit, onCancel, onSave }) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('STARTED');

  useEffect(() => {
    if (eventToEdit) {
      setTitle(eventToEdit.title);
      setStartDate(eventToEdit.startDate?.replace('Z', ''));
      setEndDate(eventToEdit.endDate?.replace('Z', ''));
      setPrice(eventToEdit.price);
      setStatus(eventToEdit.status);
    }
  }, [eventToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, startDate, endDate, price, status };

    if (eventToEdit) {
      api.put(`/events/${eventToEdit.id}`, data)
        .then(() => onSave())
        .catch(err => {
          console.error(err); // para depuração
          const message = err.response?.data || "Ocorreu um erro desconhecido.";
          alert(message);
        });
    } else {
      api.post('/events', data)
        .then(() => onSave())
        .catch(err => {
          console.error(err); // para depuração
          const message = err.response?.data || "Ocorreu um erro desconhecido.";
          alert(message);
        });
    }
  };

  return (
    <div className="container mt-4">
      <h2>{eventToEdit ? 'Edit Event' : 'Create Event'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input 
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required 
          />
        </div>
        <div className="mb-3">
          <label>Start Date</label>
          <input 
            className="form-control" 
            type="datetime-local"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            required 
          />
        </div>
        <div className="mb-3">
          <label>End Date</label>
          <input 
            className="form-control" 
            type="datetime-local"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            required 
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input 
            className="form-control" 
            type="number"
            step="0.01"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required 
          />
        </div>
        <div className="mb-3">
          <label>Status</label>
          <select 
            className="form-control"
            value={status}
            onChange={e => setStatus(e.target.value)}
            required
          >
            <option value="STARTED">Started</option>
            <option value="COMPLETED">Completed</option>
            <option value="PAUSED">Paused</option>
          </select>
        </div>
        <button className="btn btn-primary me-2" type="submit">Save</button>
        <button className="btn btn-secondary" type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EventForm;
