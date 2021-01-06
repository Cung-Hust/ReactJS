import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className="bg-light">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header">
                                                <h3 className="text-center font-weight-light my-4">Đăng nhập</h3>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label className="mb-1" htmlFor="inputEmailAddress">Tên đăng nhập</label>
                                                        <input className="form-control py-4" id="inputEmailAddress" type="email" placeholder/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="mb-1" htmlFor="inputPassword">Mật khẩu</label>
                                                        <input className="form-control py-4" id="inputPassword" type="password" placeholder/>
                                                    </div>
                                                    {/* <div class="form-group">
                                          <div class="custom-control custom-checkbox">
                                              <input class="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                              <label class="custom-control-label" for="rememberPasswordCheck">Nhớ mật khẩu</label>
                                          </div>
                                      </div> */}
                                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        {/* <a class="small" href="password.html">Quên mật khẩu?</a> */}
                                                        <a className="btn btn-primary" href="index.html">Đăng nhập</a>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* <div class="card-footer text-center">
                                  <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                              </div> */} </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
