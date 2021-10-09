import React from 'react';
import { Contacts } from "common/constants/Contacts";

interface IProps {
  mobileMenu?: boolean;
}

const ContactMenu = ({mobileMenu}: IProps) => {
  return (
    <>
      {Contacts.map((contact, i) => (
        <a className="w-10 mx-1" key={i} href={contact.href} target="_blank">
          <img src={mobileMenu ? contact.mobileSrc : contact.simpleSrc} />
        </a>
      ))}
    </>
  )
}

export default ContactMenu;