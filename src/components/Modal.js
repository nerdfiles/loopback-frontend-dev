import React, {Component} from 'react';

class Modal extends Component {
  render() {
    return (
        <div className="portfolio-modal modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">{this.props.projectName}</h2>
                                    <p className="item-intro text-muted">{this.props.projectIntroText}</p>
                                    <img className="img-fluid d-block mx-auto" src={this.props.imgBlock} alt="" />
                                    <p>{this.props.projectDescription}</p>
                                    {
                                      this.props.listInline()
                                    }
                                    <button className="btn btn-primary" data-dismiss="modal" type="button"><i className="fas fa-times mr-1"></i>Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default Modal
