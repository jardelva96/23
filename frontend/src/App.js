import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import EventList from './EventList';
import EventForm from './EventForm';
import ObservabilityPage from './ObservabilityPage'; // Página adicionada

function App() {
  const [editingEvent, setEditingEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingEvent(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingEvent(null);
  };

  const handleSave = () => {
    setShowForm(false);
    setEditingEvent(null);
  };

  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header />
        <div className="container-fluid flex-grow-1">
          <div className="row h-100">
            <div className="col-2 p-0">
              <Sidebar />
            </div>
            <div className="col-9">
              {/* Configuração de Rotas */}
              <Routes>
                <Route
                  path="/"
                  element={
                    !showForm ? (
                      <EventList onEdit={handleEdit} onCreate={handleCreate} />
                    ) : (
                      <EventForm
                        eventToEdit={editingEvent}
                        onCancel={handleCancel}
                        onSave={handleSave}
                      />
                    )
                  }
                />
                <Route path="/observability" element={<ObservabilityPage />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
