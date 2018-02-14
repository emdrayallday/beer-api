require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const slugIt = require('slugify')
const db = new PouchDB(process.env.CLOUD)

db
  .createIndex({ index: { fields: ['name'] } })
  .then(() => console.log('beer name index created.'))
  .catch(err => console.log('error', err))

// db
//   .createIndex({ index: { fields: ['type'] } })
//   .then(() => console.log('beer type index created.'))
//   .catch(err => console.log('error', err))
// db
//   .createIndex({ index: { fields: ['abvPCT'] } })
//   .then(() => console.log('alcohol per volume index created'))
//   .catch(err => console.log('error', err))
// db
//   .createIndex({ index: { fields: ['stars'] } })
//   .then(() => console.log('stars index created'))
//   .catch(err => console.log('error', err))
// db
//   .createIndex({ index: { fields: ['style'] } })
//   .then(() => console.log('style index created'))
//   .catch(err => console.log('error', err))
// db
//   .createIndex({ index: { fields: ['city'] } })
//   .then(() => console.log('city index created'))
//   .catch(err => console.log('error', err))
db
  .createIndex({ index: { fields: ['color'] } })
  .then(result => db.find({ selector: { color: 'cyan' } }))
  .then(result => console.log('db.find color query', result.docs))
  .catch(err => console.log('error', err))
