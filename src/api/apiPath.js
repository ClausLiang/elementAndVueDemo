const domain = process.env.NODE_ENV === 'production' ? 'https://www.easy-mock.com' : ''
module.exports = {
  TEST: `${domain}/mock/5a011f399d3ceb4a35438b68/example/proxy`
}
