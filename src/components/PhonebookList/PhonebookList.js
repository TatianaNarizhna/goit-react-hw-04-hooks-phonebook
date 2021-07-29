import React from "react";
import PhoneBookItem from "../PhonebookItem/PhoneBookItem";
import PropTypes from "prop-types";
// import s from "./PhonebookList.module.css";

const PhonebookList = ({ contacts, title, onDeleteList }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <PhoneBookItem
            key={id}
            name={name}
            number={number}
            onDeleteList={() => onDeleteList(id)}
          />
        ))}
      </ul>
    </div>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired,
};

export default PhonebookList;
