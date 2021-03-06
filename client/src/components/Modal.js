import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader
} from "mdbreact";

class Modal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    if (this.state.modal) {
      this.props.modalClose();
    }
  };

  renderHeader = name => (name ? `Welcome ${name}!` : "Welcome!");

  render() {
    return (
      <MDBContainer>
        <MDBBtn
          className="btn-rounded btn blue-gradient btn-outline-info waves-effect cyan-text"
          onClick={this.toggle}
        >
          {this.props.btnName}
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modalZ"
        >
          <MDBModalHeader
            toggle={this.toggle}
            className="
            elegant-color
            cyan-text"
          >
            {this.renderHeader(this.props.currentName)}
          </MDBModalHeader>
          <MDBModalBody className="elegant-color cyan-text">
            {this.props.children}
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;
