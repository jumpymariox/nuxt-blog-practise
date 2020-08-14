const faker = require('faker')

const db = { blogs: [] }

let i = 0
while (i++ < 8) {
  db.blogs.push({
    id: faker.random.uuid(),
    title: faker.lorem.words(),
    author: faker.name.findName(),
    createTime: faker.date.past(),
    content:
      faker.lorem.paragraphs() +
      '\n' +
      faker.lorem.paragraphs() +
      '\n' +
      faker.lorem.paragraphs(),
  })
}

console.log(JSON.stringify(db))
