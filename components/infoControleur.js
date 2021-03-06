import React from "react";
import Head from "next/head";
import { Dropdown } from "react-bootstrap";
import CustomToggle from "./customToggle";
import CustomModalC from "./customModalC";
import Link from "next/link";
import ModalCModif from "../components/ModalCModif";

const infoControleur = ({ dataSurveillant }) => {
  const {
    last_name,
    first_name,
    email,
    phone,
    matricule,
    role,
    id,
  } = dataSurveillant;

  return (
    <>
      {role == null ? null : role.id === 2 ? (
        <tr>
          <td>{`${last_name.toUpperCase()} ${first_name.toUpperCase()}`}</td>
          <td>{matricule}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td className="contextual-menu survDropdown">
            <Link href={`/control/${id}`} key={id}>
              <a>Afficher</a>
            </Link>
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle}>
                <i className="bi bi-three-dots-vertical options-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="options">
                {/* <Dropdown.Item href="modif/edite">Edit</Dropdown.Item> */}
                <ModalCModif controleur={dataSurveillant} />
                <Dropdown.Divider />
                <CustomModalC id={id} titre={`users`} />
              </Dropdown.Menu>
            </Dropdown>
          </td>
        </tr>
      ) : null}
    </>
  );
};

export default infoControleur;
