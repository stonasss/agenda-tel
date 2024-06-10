import { createContext, useState } from 'react';

const ContactContext = createContext();
export default ContactContext;

export const ContactProvider = ({ children }) => {
    const [contactName, setContactName] = useState('');
    const [contactImage, setContactImage] = useState('');
    const [contactPhone, setContactPhone] = useState(0);
    const [contactEmail, setContactEmail] = useState('');

    return (
        <ContactContext.Provider value={{ 
            contactName, 
            setContactName, 
            contactImage, 
            setContactImage,
            contactPhone,
            setContactPhone,
            contactEmail,
            setContactEmail
        }}>
            {children}
        </ContactContext.Provider>
    );
};