const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'sheraton_nola',
      name: 'Sheraton New Orleans',
      handle: 'spg@starwood.com',
      avatarURL: config.origin + '/hotel1.jpg',
      description: "Description"
    },
    {
      id: 'hiltonmidtown',
      name: 'Hilton Midtown',
      handle: 'hilton@hilton.com',
      avatarURL: config.origin + '/hotel2.jpg',
      description: "PLEASE Description"
    },
    {
      id: 'wchicago',
      name: 'W Chicago',
      handle: 'wchicagospg@starwood.com',
      avatarURL: config.origin + '/hotel3.jpg',
      description: "TESTING ONE TWO Description"
    },
    {
      id: 'ritzcarltonnola',
      name: 'Ritz Carlton New Orleans',
      handle: 'ritznola@starwood.com',
      avatarURL: config.origin + '/hotel4.jpg',
      description: "PLEASE"
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
