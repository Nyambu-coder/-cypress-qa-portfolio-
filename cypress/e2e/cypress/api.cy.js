// cypress/e2e/api.cy.js

describe('API Testing with cy.request()', () => {
  it('gets a single user and checks the response', () => {
    cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
      // Status code check
      expect(response.status).to.eq(200)

      // Structure/data checks
      expect(response.body.data).to.have.property('id', 2)
      expect(response.body.data).to.have.property('email')
      expect(response.body.data.email).to.include('@')
    })
  })

  it('returns 404 for a user that does not exist', () => {
    cy.request({
      url: 'https://reqres.in/api/users/999',
      failOnStatusCode: false // needed so Cypress doesn't fail the test on a 404
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('creates a new user via POST', () => {
    cy.request('POST', 'https://reqres.in/api/users', {
      name: 'Joyce',
      job: 'QA Tester'
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq('Joyce')
      expect(response.body).to.have.property('id')
    })
  })
})