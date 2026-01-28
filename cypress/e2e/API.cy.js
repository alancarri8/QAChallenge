describe('Prueba de API MercadoLibre', () => {
  it('Validar que el cuerpo de la respuesta contenga el campo "departments"', () => {
    cy.request({
      method: 'GET',
      url: 'https://www.mercadolibre.com.ar/menu/departments'
    }).then((response) => {
      expect(response.body).to.have.property('departments')
    })
  })
})

