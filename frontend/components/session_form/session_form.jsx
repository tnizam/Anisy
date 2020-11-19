import React from 'react';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleDemoSubmit() {
        const user = {
            email: 'demoUser@gmail.com',
            password: 'password'
        }
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const signUp = () => (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <br/>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}  
                            onChange={this.update('email')}  
                        />
                    </label>
                    <label>First Name:
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                        />
                    </label>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                    <br/>
                </form>
            </div>
        )

        const logIn = () => (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <br />
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log In</button>
                    <br/>
                </form>
                <button onClick={this.handleDemoSubmit}>Demo Signin</button>
            </div>
        )
    
        return this.props.formType === 'login' ? logIn() : signUp();
    }

}

export default SessionForm;