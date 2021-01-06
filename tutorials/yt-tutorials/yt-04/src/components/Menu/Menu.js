import React, {Component} from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    

    render() {
        return (
            <div>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu" style={{fontSize:"13px"}}>
                                <div className="nav">
                                <div>

                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" aria-expanded="false">
                                        <div className="sb-nav-link-icon"><i className="fas fa-home"/></div>
                                            Trang chủ
                                    </a>

                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts1">
                                        <div className="sb-nav-link-icon"><i className="fas fa-eye"/></div>
                                            Giám sát
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"/></div>
                                    </a>
                                    </div>
                                    <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="#" onClick={()=> window.open("http://localhost:3000/Layout", "_blank")}> 
                                                Màn hình lớn
                                            </a>

                                            <a className="nav-link" href="layout-sidenav-light.html">Giám sát hoạt động</a>
                                        </nav>
                                    </div>

                                    <div>
                                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                            <div className="sb-nav-link-icon"><i className="fas fa-chart-bar"/></div>
                                                Báo cáo
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"/></div>
                                        </a>
                                    </div>
                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">                                            
                                            <a className="nav-link" href="">Biểu đồ hiệu suất</a>
                                            <a className="nav-link" href="">Biểu đồ chạy máy</a>
                                            <a className="nav-link" href="">Báo cáo chạy máy theo loại</a>
                                            <a className="nav-link" href="">Báo cáo chạy máy chi tiết</a>
                                        </nav>
                                    </div>

                                    <div>
                                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                            <div className="sb-nav-link-icon"><i className="fas fa-cogs"/></div>
                                                Cấu hình hệ thống
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"/></div>
                                        </a>
                                    </div>
                                        
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                Ca làm việc
                                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"/></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="login.html">Login</a>
                                                    <a className="nav-link" href="register.html">Register</a>
                                                    <a className="nav-link" href="password.html">Forgot Password</a>
                                                </nav>
                                            </div>
                                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Kế hoạch chạy máy
                                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"/></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="401.html">401 Page</a>
                                                    <a className="nav-link" href="404.html">404 Page</a>
                                                    <a className="nav-link" href="500.html">500 Page</a>
                                                </nav>
                                            </div>
                                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Kế hoạch dừng máy
                                            </a>
                                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Thời gian dừng cho phép
                                            </a>
                                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Cấu hình chung
                                            </a>
                                        </nav>
                                    </div>

                                    <div>
                                        <a className="nav-link" href="charts.html">
                                            <div className="sb-nav-link-icon"><i className="fas fa-users"/></div>
                                                Người dùng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="sb-sidenav-footer">
                                <div className="small">Copyright</div>
                                internet
                            </div> */}

                        </nav>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;
