const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'sheraton_nola',
      name: 'Sheraton New Orleans',
      handle: 'www.starwoodhotels.com',
      date: '2018-05-02',
      avatarURL: config.origin + '/hotel6.jpg',
      description: "Amplify your New York City getaway with an invigorating stay at Sheraton New York Times Square Hotel. Situated in the heart of Midtown Manhattan, our hotel offers travelers a unique vantage point from which to experience the colorful culture and unrivaled energy of New York City."
    },
    {
      id: 'hiltonmidtown',
      name: 'Hilton Midtown',
      handle: 'www.hilton.com',
      date: '2018-05-04',
      avatarURL: config.origin + '/hotel7.jpg',
      description: "Access top attractions like Rockefeller Center, Central Park and Times Square during your stay at our hotel. If you're traveling with the kids, you'll appreciate our thoughtful family-friendly amenities and spacious accommodations; if you're in New York City on business, take advantage of our modern meeting facilities and on-site business center."
    },
    {
      id: 'wchicago',
      name: 'W Chicago',
      handle: 'www.marriott.com',
      date: '2018-04-29',
      avatarURL: config.origin + '/hotel9.jpg',
      description: "We’re here to wake up this industry and bring back the fun. As we always do. We’ve reimagined not only what a boutique hotel can look like, but what it can do. Combined with Virgin’s unrelenting dedication to the consumer we’re ushering in a new standard for hospitality and heartfelt service among the Chicago Loop hotels. And we’re just getting started."
    },
    {
      id: 'virginchicago',
      name: 'Ritz Carlton New Orleans',
      handle: 'www.wyndham.com',
      date: '2018-7-21',
      avatarURL: config.origin + '/hotel10.jpg',
      description: "Whether you’re planning a private party, nuptials, wedding shower, or dog’s first birthday, there are all sorts of check lists needed to make your way from great idea to great event. That’s where we come in—our people and spaces live to see your ideas shine. So think big or let loose. Go fanciful or go fun. Plan every little point or let us sweat the small stuff. Whatever you can dream, we can deliver."
    },
    {
      id: 'ritzcarltonnola',
      name: 'Ritz Carlton New Orleans',
      handle: 'www.wchicago.com',
      date: '2018-7-21',
      avatarURL: config.origin + '/hotel5.jpg',
      description: "Whether you’re planning a private party, nuptials, wedding shower, or dog’s first birthday, there are all sorts of check lists needed to make your way from great idea to great event. That’s where we come in—our people and spaces live to see your ideas shine. So think big or let loose. Go fanciful or go fun. Plan every little point or let us sweat the small stuff. Whatever you can dream, we can deliver."
    },
    {
      id: 'ritzcarltonnewyork',
      name: 'Ritz Carlton New Orleans',
      handle: 'www.ritznola.com',
      date: '2018-7-21',
      avatarURL: config.origin + '/hotel8.jpg',
      description: "Whether you’re planning a private party, nuptials, wedding shower, or dog’s first birthday, there are all sorts of check lists needed to make your way from great idea to great event. That’s where we come in—our people and spaces live to see your ideas shine. So think big or let loose. Go fanciful or go fun. Plan every little point or let us sweat the small stuff. Whatever you can dream, we can deliver."
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
