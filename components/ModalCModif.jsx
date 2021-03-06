import axios from "axios";
import React from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";

export default class ModalCModif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      first_name: this.props.controleur.first_name,
      last_name: this.props.controleur.last_name,
      phone: this.props.controleur.phone,
      matricule: this.props.controleur.matricule,
      email: this.props.controleur.email,
      password: "admin",
      role: 2,
    };
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleModif = async (event) => {
    event.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      matricule: this.state.matricule,
      email: this.state.email,
      role: this.state.role,
      password: this.state.password,
    };
    axios
      .put(`users/users/${this.props.controleur.id}`, data)
      .then(() => {
        toast.success(
          "Information du controleur modifie avec succès Veuillez recharchez la page"
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erreur lors de la modification du controleur");
      });
    this.setState({ show: false });
    console.log(data);
  };

  render() {
    return (
      <>
        <Dropdown.Item onClick={this.handleShow}>Edit</Dropdown.Item>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          className="modalSuppression"
        >
          <Modal.Header closeButton className="color-titre-ajout">
            <Modal.Title className="colorTitre">{`Modification d'un Controleur`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-form">
              <form>
                <div>
                  <label>Nom</label>
                  <input
                    type="text"
                    value={this.state.first_name}
                    className="form-control"
                    placeholder=""
                    onChange={(e) =>
                      this.setState({ first_name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Prénom</label>
                  <input
                    type="text"
                    value={this.state.last_name}
                    className="form-control"
                    placeholder=""
                    onChange={(e) =>
                      this.setState({ last_name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value={this.state.email}
                    className="form-control"
                    placeholder=""
                    onChange={(e) => this.setState({ email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label>Matricule</label>
                  <input
                    type="text"
                    value={this.state.matricule}
                    className="form-control"
                    placeholder=""
                    onChange={(e) =>
                      this.setState({ matricule: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Numéro de téléphone</label>
                  <input
                    type="text"
                    value={this.state.phone}
                    className="form-control"
                    placeholder=""
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Fermer
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleModif}
              className="color-titre-ajout"
            >
              Valider
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
