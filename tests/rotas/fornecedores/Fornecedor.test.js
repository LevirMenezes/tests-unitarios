jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor.js')

const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('classe Fornecedor', () => {
  test('o método validar() retorna true', () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    expect(fornecedor.validar()).toBe(true)
  })

  test('o método criar() foi executado com sucesso', async () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    await fornecedor.criar()

    expect(fornecedor.id).toBe(500)
    expect(fornecedor.dataCriacao).toBe('10/12/3420')
    expect(fornecedor.dataAtualizacao).toBe('10/12/3420')
    expect(fornecedor.versao).toBe(90)
  })
})
