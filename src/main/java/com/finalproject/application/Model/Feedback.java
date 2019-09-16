package com.finalproject.application.Model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "comment")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)



    private Integer id;

    @Column(name = "date")
    private Date date;

    @Column(name = "text")
    private String text;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
