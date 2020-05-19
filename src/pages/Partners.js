import React, {Component} from 'react';

class Partners extends Component {
  render() {
    return (

        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 my-3">
                      <a href="http://example.com">
                        <img 
                          className="img-fluid d-block mx-auto"
                          src="assets/img/logos/envato.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                      <a href="http://example.com">
                        <img
                          className="img-fluid d-block mx-auto"
                          src="assets/img/logos/designmodo.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                      <a href="http://example.com">
                        <img
                          className="img-fluid d-block mx-auto"
                          src="assets/img/logos/themeforest.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                      <a href="http://example.com">
                        <img
                          className="img-fluid d-block mx-auto"
                          src="assets/img/logos/creative-market.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                </div>
            </div>
        </section>

    );
  }
}

export default Partners;
