
describe('tests in simple application CRUD operations', () => {
    beforeEach(() => {
        cy.visit('https://code-leap-network.vercel.app/')
    })

    it('login and create post', () => {
        cy.login('TestsUser')
        cy.wait(2000)
        cy.createPost('Test title', 'Test content')
    })

    
})