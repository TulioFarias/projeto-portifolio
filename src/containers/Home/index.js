import React, { useState } from 'react'

import { AddUserForm } from './addUserForm'
import { EditUsers } from './editForm'
import { ContainerForms } from './style'

function Home() {
  const userData = [{ id: 1, name: 'Tulio', email: 'tulio@teste.com' }]

  const FormState = { id: null, name: '', email: '' }

  const [users, setUsers] = useState(userData)

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState(FormState)

  const addUser = user => {
    user.id = users.length + 1

    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const edit = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, email: user.email })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <ContainerForms>
      {editing ? (
        <EditUsers
          currentUser={currentUser}
          updateUser={updateUser}
          setEditing={setEditing}
        />
      ) : (
        <AddUserForm
          FormState={FormState}
          addUser={addUser}
          edit={edit}
          deleteUser={deleteUser}
          users={users}
        />
      )}
    </ContainerForms>
  )
}

export default Home
