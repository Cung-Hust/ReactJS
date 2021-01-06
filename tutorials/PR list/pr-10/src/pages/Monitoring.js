import React from 'react';
import ReactDOM from 'react-dom';


class Monitoring extends Component {
  render() {
    return (
      <div>
        <title>Bootstrap Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <body>
        <div className="container-fluid">
          <h1>Hello World!</h1>
          <p>Resize the browser window to see the effect.</p>
          <div className="row">
            <div className="col-sm-8" style={{backgroundColor: 'lavender'}}>.col-sm-8
              <div className="row">
                <div className="col-sm-6" style={{backgroundColor: 'lightcyan'}}>.col-sm-6</div>
                <div className="col-sm-6" style={{backgroundColor: 'lightgray'}}>.col-sm-6</div>
              </div>
            </div>
            <div className="col-sm-4" style={{backgroundColor: 'lavenderblush'}}>.col-sm-4</div>
          </div>
        </div>

         <button type="button" onclick="dieu_huong()">Điều hướng sang trang khác</button>

          <script>
              function dieu_huong() {
                  location.replace("http://webcoban.vn");
              }
          </script>
        </body>
      </div>

    );
  }
}
  