import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';



function CreateContact({onCreateContact}) {
    let navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        const values = serializeForm(e.target, { hash: true })
        console.log(values)
            onCreateContact(values)
            navigate('/')    
    }

          
        return (
            <div>
                <Link className='close-create-contact' to='/'>Close</Link>
                <form onSubmit={handleSubmit} className='create-contact-form'>
                    <ImageInput
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxHeight={64}
                    />
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='Name'/>
                        <input type='text' name='email' placeholder='Email'/>
                            <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }

export default CreateContact
