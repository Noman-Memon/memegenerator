import React from 'react'

export default function Card() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: true,
  })

  let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png'
  let lastName = contact.isFavorite ? contact.lastName : ''

  function toggleFavorite() {
    setContact((contact) => {
      return {
        ...contact,
        isFavorite: !contact.isFavorite,
      }
    })
    console.log('Toggle Favorite')
  }

  return (
    <main>
      <article className="card">
        <img src="./image/user.png" className="card--image" alt="imgCard" />
        <div className="card--info">
          <img
            src={`../image/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
            alt="star"
          />
          <h2 className="card--name">
            {contact.firstName} {lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  )
}
