package com.example.events;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EventService {
    private final EventRepository repository;

    public EventService(EventRepository repository) {
        this.repository = repository;
    }

    public Event createEvent(EventDTO dto) {
        validateDates(dto);
        Event event = new Event();
        event.setTitle(dto.getTitle());
        event.setStartDate(dto.getStartDate());
        event.setEndDate(dto.getEndDate());
        event.setPrice(dto.getPrice());
        event.setStatus(dto.getStatus());
        return repository.save(event);
    }

    public List<Event> getAllEvents() {
        return repository.findAll();
    }

    public Event getEventById(Long id) {
        return repository.findById(id).orElseThrow(() -> new EventNotFoundException("Event not found with id " + id));
    }

    public Event updateEvent(Long id, EventDTO dto) {
        validateDates(dto);
        Event event = getEventById(id);
        event.setTitle(dto.getTitle());
        event.setStartDate(dto.getStartDate());
        event.setEndDate(dto.getEndDate());
        event.setPrice(dto.getPrice());
        event.setStatus(dto.getStatus());
        return repository.save(event);
    }

    public void deleteEvent(Long id) {
        if (!repository.existsById(id)) {
            throw new EventNotFoundException("Event not found with id " + id);
        }
        repository.deleteById(id);
    }

    private void validateDates(EventDTO dto) {
        if (dto.getEndDate().isBefore(dto.getStartDate())) {
            throw new IllegalArgumentException("End date cannot be before start date");
        }
    }
}
