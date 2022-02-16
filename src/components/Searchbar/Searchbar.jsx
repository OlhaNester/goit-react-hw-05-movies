import { useState } from 'react';
import toast from 'react-hot-toast';
import { Form } from './Searchbar.styled';

export const Searchbar = ({ propSubmit }) => {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        const { value } = event.currentTarget;
        setValue(value.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value.trim() === "") {
            toast.error("Enter query!");
            return;
        }
        propSubmit(value);
        setValue('');
    };


    return (
        <>
             <Form onSubmit={handleSubmit}>
             <button type="submit">Search</button>
                <input
                    onChange={handleChange}
                 type="text"
                 autoComplete = "off"
                    autoFocus
                    placeholder ="Search movie"
                    value={value}
                    
                />
            </Form>
        </>
    )
};