import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { Button } from '../../components/buttons/style'
import { FormEdit } from './style'

export function EditUsers(props) {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <FormEdit>
      <form
        onSubmit={event => {
          event.preventDefault()

          props.updateUser(user.id, user)
        }}
      >
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />

          <Button>Atualização do Usuário</Button>

          <Button
            type="submit"
            onClick={() => props.setEditing(false)}
            className="button muted-button"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </FormEdit>
  )
}

EditUsers.propTypes = {
  currentUser: PropTypes.array.isRequired,
  updateUser: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired
}
