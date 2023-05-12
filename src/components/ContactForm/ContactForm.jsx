import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormField, Label, FieldFormik, ErrorMessage, SubmitButton } from './ContactForm.styled';


const schema = yup.object().shape({
    name: yup.string().trim().matches( / ^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$ /,'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan' ).required(),
    number: yup.string().trim().matches( /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +' ).required(),
});

export const ContactForm = ({ onAddContact }) => {
    return (
        <Formik
            initialValue={{
                name: '',
                number: '',
            }}
            onSubmit={(values, { resetForm }) => {
                onAddContact({ id: nanoid(), ...values});
                resetForm();
            }}
            validationSchema={schema}>
                <Form autoComplete = "off">
                    <FormField htmlFor="name">
                        <Label>
                        Name
                        </Label>
                        <FieldFormik 
                         type="text"
                         name="name"
                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                         required/>
                         <ErrorMessage name="name" component="span"/>
                    </FormField>
                    <FormField htmlFor="number">
                        <Label>
                           Number
                        </Label>
                        <FieldFormik 
                         type="tel"
                         name="number"
                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                         required/>
                         <ErrorMessage name="umber" component="span"/>
                    </FormField>
<SubmitButton type="submit">Add contact</SubmitButton>
                </Form>
        </Formik>
    );
};

ContactForm.propType = {
    onSubmit: PropTypes.func.isRequired,
}