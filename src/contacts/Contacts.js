import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import "./Contacts.css";

const contacts = [{
    id: 0,
    firstName: "Aleksandr",
    lastName: "Rybakov",
    phone: "+380956319521",
    gender: "male"
  }, {
    id: 1,
    firstName: "Maryna",
    lastName: " Humeniuk",
    phone: "+380931460123",
    gender: "female"
  }, {
    id: 2,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  }, {
    id: 3,
    firstName: "Iryna",
    lastName: "Trush",
    phone: "+380504691254",
    gender: "female"
  }, {
    id: 4,
    firstName: "Liubomyr",
    lastName: "Kapov",
    phone: "+380739432123",
    gender: "male"
  }];

export default function Contacts() {
        const [search, setSearch] = useState("")
        const [contactsFiltered, setContacts] = useState(contacts)
      
        
      useEffect(() => {
        const filteredContacts = contacts.filter((contact) => {
          return (
            contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
            contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
            contact.phone.includes(search)
          );
        });
        setContacts(filteredContacts);
      }, [search]);

      return (
  <div className="phone-book"> 
          <h1 className="phone-book__title">Контакти</h1>
          <p className="phone-book__desc">наших чудових сапортів</p>
          <div className="search">
        <input onChange={(e)=> setSearch(e.target.value)} type="search" className="input" placeholder="Search" value={search}></input>
      </div>     

      <div className="mainblock"> { 
            contactsFiltered.map(contact => 
            
            <Contact key = {contact.id}
            firstName = {contact.firstName}
            lastName = {contact.lastName}
            phone = {contact.phone}
            gender = {contact.gender}
            />)
          } </div> 
 
        </div>
      )
    }