package com.example.events;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public class EventDTO {
    @NotBlank
    private String title;
    @NotNull
    private LocalDateTime startDate;
    @NotNull
    private LocalDateTime endDate;
    @NotNull
    @DecimalMin("0.0")
    private BigDecimal price;
    @NotNull
    private Status status;

    // Getters e setters
    public String getTitle() {return title;}
    public void setTitle(String title) {this.title = title;}

    public LocalDateTime getStartDate() {return startDate;}
    public void setStartDate(LocalDateTime startDate) {this.startDate = startDate;}

    public LocalDateTime getEndDate() {return endDate;}
    public void setEndDate(LocalDateTime endDate) {this.endDate = endDate;}

    public BigDecimal getPrice() {return price;}
    public void setPrice(BigDecimal price) {this.price = price;}

    public Status getStatus() {return status;}
    public void setStatus(Status status) {this.status = status;}
}
