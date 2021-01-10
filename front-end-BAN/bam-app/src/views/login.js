import React from 'react';

import Card from '../components/card';

import FormGroup from '../components/form-group';

class Login extends React.Component{

    state = {
        email: '',
        senha: ''
    }
    
    success = () => {
        console.log('Email: ', this.state.email);
        console.log('Email: ', this.state.senha);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style = { {position : 'relative', left : '300px'} }>
                        <div className="bs-docs-section">
                            <Card title ="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlfor="exampleInputEmail1">
                                                <input type="email"
                                                    value={this.state.email}
                                                    onChange= {e => this.setState({email: e.target.value})}
                                                    className='form-control' 
                                                    id="exampleInputEmail1"
                                                    placeholder="Digite o seu Email" />
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlfor="exampleInputPassword1">
                                                <input type="password" 
                                                    value={this.state.senha}
                                                    onChange= {e => this.setState({senha: e.target.value})}
                                                    className='form-control' 
                                                    id="exampleInputPassword1"
                                                    placeholder="Digite a sua Senha" />
                                                </FormGroup>
                                                <button onClick = {this.success} className="btn btn-success">Entrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;