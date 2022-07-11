import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "@services/api";

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState({
    prenom: "",
    nom: "",
    role: "",
  });

  useEffect(() => {
    api
      .get(`/api/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  /**
   * La fonction submitUserHandler, permet de de mettre à jour les données de l'utilisateur.
   */
  const submitUserHandler = (e) => {
    e.preventDefault();
    api
      .put(`/api/users/update/${id}`, user, { withCredentials: true })

      .catch((err) => console.error(err));
  };

  /**
   * La fonction inputTextHandler, permet de récupérer le texte introduit dans l'input.
   */
  const inputTextHandler = (e) => {
    console.warn(e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contentTable">
      <h2>Mise à jour de l'utilisateur : </h2>

      <form id="updateUserForm" onSubmit={submitUserHandler}>
        <label htmlFor="prenom">
          Prénom
          <input
            value={user.prenom}
            onChange={inputTextHandler}
            type="text"
            name="prenom"
          />
        </label>
        <label htmlFor="nom">
          Nom
          <input
            value={user.nom}
            onChange={inputTextHandler}
            type="text"
            name="nom"
          />
        </label>

        <label htmlFor="role">
          Rôle
          <select htmlFor="role" onChange={inputTextHandler}>
            <option value="">--Please choose an option--</option>
            <option value="user" name="role">
              user
            </option>
            <option value="admin" name="role">
              admin
            </option>
          </select>
        </label>

        <button className="buttonStyle" type="submit">
          Mettre à jour
        </button>
        <Link to="/admin/users">Retour à la liste des utilisateurs</Link>
      </form>
    </div>
  );
}

export default Edit;
