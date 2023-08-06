import React from 'react'
import "./usestate.css"

const UseStateObject = () => {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    const Handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value;
        // console.log(name, value);
        // setFormData(e.target.value)
        setFormData((prev) => {
            return { ...prev, [name]: value };
          });
    }
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <h2>Register</h2>
                    <div>
                        <form action="">
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="username"
                                    placeholder="Name"
                                    autoComplete="off"
                                    value={formData.username}
                                    onChange={Handleinput}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    autoComplete="off"
                                    value={formData.email}
                                    onChange={Handleinput}

                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    autoComplete="off"
                                    value={formData.password}
                                    onChange={Handleinput}

                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirm-password"
                                    name="confirm_password"
                                    placeholder="confirm-password"
                                    autoComplete="off"
                                    value={formData.confirm_password}
                                    onChange={Handleinput}
                                />
                            </div>
                            <div>
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                        <div>
                            <p>{`My name is ${formData.username} and email is ${formData.email}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseStateObject
