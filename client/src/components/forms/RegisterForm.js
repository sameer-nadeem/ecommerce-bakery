import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

const Register = () => {

    const [registerFields, setRegisterFields] = useState({
        firstName: '',
        logo: null,
        lastName: '',
        email: '',
        city: 'Lahore',
        phone: '',
        address: '',
        password: '',
        password2: '',
        title: '',
        endingHour: '',
        startingHour: '',
        description: ''
    })
    const [toggle, setToggle] = useState(false)
    const {
        firstName,
        lastName,
        title,
        endingHour,
        startingHour,
        description,
        email,
        city,
        phone,
        address,
        password,
        password2
    } = registerFields

    const [errors, setErrors] = useState({})

    const validateInputs = () => {
        setErrors({})

        function isNumeric(str) {
            if (typeof str != "string") return false // we only process strings!  
            return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
        }
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const errs = {}

        if (firstName === '' || lastName === '') {
            errs.name = 'First Name and Last Name cannot be empty'
        }
        if (city === '') {
            errs.city = 'City cannot be empty'
        }
        if (address === '') {
            errs.address = 'Address cannot be empty'
        }
        if (!isNumeric(phone) || phone === '') {
            errs.phone = 'Invalid phone number'
        }


        if (!emailRegex.test(email)) {
            errs.email = 'Invalid email entered'
        }
        if (password.length < 6) {
            errs.password = 'Password must contain atleast 6 characters'

        }
        if (password === '') {
            errs.password = 'Password cannot be empty'

        }



        if (password !== password2) {
            errs.password2 = "Passwords don't match"
        }

        if (toggle) {
            if (title === '') {
                errs.title = 'Title cannot be empty'
            }

            if (description === '') {
                errs.description = "Description cannot be empty"
            }
            if (startingHour === '' || endingHour === '') {
                errs.time = 'Start and End time cannot be empty'
            }


        }


        console.log(errs)

        if (Object.keys(errs).length === 0) {
            console.log('nn')
            return true;
        }

        setErrors({
            ...errs
        })


        return false


    }

    const onChange = (e) => {
        setRegisterFields({
            ...registerFields,
            [e.target.name]: e.target.value
        })

    }

    const onToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    const onSubmit = (e) => {
        e.preventDefault()

    }




    return (

        <form onSubmit={onSubmit} className="m-4">
            <div className="row justify-content-center align-items-center mb-3">
                <div className="col">
                    <span className="align-middel">Are you a Admin?
                    </span>
                </div>
                <div className="col text-end">
                    <label className="switch">
                        <input onChange={onToggle} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <h5 className="card-title text-center login-heading mt-3">Sign Up</h5>
            <div className="form-group row ">
                <div className="col m-1">
                    <label className="login-field-headings">First Name</label>
                    <input onChange={onChange} type="text" className="form-control login-fields" name='firstName' placeholder="etc. Sameer" />
                </div>
                <div className="col m-1">
                    <label className="login-field-headings">Last Name</label>
                    <input onChange={onChange} type="text" className="form-control login-fields" name='lastName'
                        placeholder="etc. Nadeem" />

                </div>
                <span className='text-danger ms-1'>{errors.name}</span>

            </div>

            <div className="form-group m-1">
                <label className="login-field-headings">Email</label>
                <input onChange={onChange} className="form-control login-fields" name='email'
                    placeholder="user@example.com" />
                <span className='text-danger'>{errors.email}</span>
            </div>
            <div className="form-group row">

                <div className="col m-1">
                    <label className="login-field-headings">Phone Number</label>

                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">+92</span>
                        <input onChange={onChange} type="text" className="form-control login-fields" name='phone'
                            placeholder="etc. 090078601" />
                    </div>
                    <span className='text-danger'>{errors.phone}</span>

                </div>
                <div className="col m-1">
                    <label className="login-field-headings">City</label>
                    <input disabled value='Lahore' onChange={onChange} type="text" className="form-control login-fields" name='city'
                        placeholder="etc. Lahore" />
                    <span className='text-danger'>{errors.city}</span>

                </div>
            </div>
            <div className="form-group m-1 mb-3">
                <label className="login-field-headings">Address</label>
                <input onChange={onChange} type="text" className="form-control login-fields" name='address'
                    placeholder="etc. LUMS, PHASE V, DHA" />
                <span className='text-danger'>{errors.address}</span>

            </div>
            <div className="form-group m-1 mb-3">
                <label className="login-field-headings">Password</label>
                <input onChange={onChange} type="password" className="form-control login-fields" name='password'
                    placeholder="Password" />
                <span className='text-danger'>{errors.password}</span>

            </div>
            <div className="form-group m-1 mb-3">
                <label className="login-field-headings">Confirm Password</label>
                <input onChange={onChange} type="password" className="form-control login-fields" name='password2'
                    placeholder="Password" />
                <span className='text-danger'>{errors.password2}</span>

            </div>


            <div className="row justify-content-center">
                <button type="submit" className="btn login-form-btn">Sign Up</button>
            </div>
            <div className="row text-center mt-4">
                <div className="">Don't have an account? <Link to='/login'>Sign In!</Link></div>
            </div>
        </form>

    )
}

export default Register
