import PropTypes from 'prop-types'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'

import { Buttons } from '../../components/buttons'
import { ContainerDivs, DivTwo, DivOne } from './style'

export function AddUserForm(props) {
  const [user, setUser] = useState(props.FormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <ContainerDivs>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (!user.name || !user.email) return props.addUser(user)

          props.addUser(user)
          setUser(props.FormState)
        }}
      >
        <DivOne>
          <h3>Adicionar Usuário</h3>

          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          ></input>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          ></input>

          <button type="submit">Enviar</button>
        </DivOne>
      </form>

      <DivTwo>
        <h3>Resultados dos usuários</h3>

        <Table striped bordered hover className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {props?.users?.length > 0 ? (
              props.users.map(users => (
                <tr key={users.id}>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>
                    <div>
                      <Buttons
                        className="button muted-button"
                        onClick={() => {
                          props.edit(users)
                        }}
                      >
                        Editar
                      </Buttons>
                      <Buttons
                        className="button muted-button"
                        onClick={() => {
                          props.deleteUser(users.id)
                        }}
                      >
                        Deletar
                      </Buttons>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Sem usuários</td>
              </tr>
            )}
          </tbody>
        </Table>
      </DivTwo>
    </ContainerDivs>
  )
}

AddUserForm.propTypes = {
  FormState: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}
