## Documentação da Galeria de Imagens (README)

### Descrição

Este projeto implementa uma galeria de imagens interativa com abas, funcionalidade de busca e navegação por setas dentro de um modal. 

### Funcionalidades

- **Galeria com abas:** Organiza as imagens em abas para facilitar a navegação, dividindo-as em grupos.
- **Modal para visualização ampliada:** Ao clicar em uma imagem, ela é aberta em um modal, permitindo uma visualização maior e exibindo sua descrição.
- **Navegação por setas no modal:** Botões de seta dentro do modal permitem navegar pelas imagens sem precisar fechar o modal.
- **Campo de busca:** Permite buscar imagens por palavras-chave presentes nas suas descrições, filtrando os resultados dinamicamente.
- **Descrição das imagens:** Cada imagem possui uma descrição (texto alternativo) que é exibida no modal, melhorando a acessibilidade e SEO.

### Como usar

1. **Faça o download ou clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/sua-galeria-de-imagens.git
   ```

2. **Adicione suas imagens:**
   - Coloque suas imagens na pasta do projeto (ou em um subdiretório).
   - **Importante:** Nomeie suas imagens sequencialmente, começando por `Imagem1.jpeg`, `Imagem2.jpeg`, e assim por diante.

3. **Edite o arquivo `app.js`:**
   - **Atualize o array `imagens`:**
     - Insira o caminho (`src`) e a descrição (`alt`) de cada imagem no array `imagens`, seguindo o formato existente.
     - **Exemplo:**

     ```javascript
     const imagens = [
       {
         src: `Imagem1.jpeg`,
         alt: `Descrição da Imagem 1.`
       },
       {
         src: `Imagem2.jpeg`,
         alt: `Descrição da Imagem 2.`
       },
       // ... adicione suas outras imagens aqui ...
     ];
     ```

4. **Ajuste (opcional) a configuração da galeria:**
   - **Número de imagens por aba:** Modifique a variável `imagensPorAba` nas funções `carregarImagens` e `atualizarGaleria` para definir quantas imagens devem ser exibidas por aba. 

5. **Abra o arquivo `index.html` no seu navegador:**
   - Acesse o arquivo `index.html` no seu navegador para visualizar a galeria.

### Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

### Estrutura do Projeto

- **`index.html`:** Contém a estrutura HTML da página.
- **`style.css`:** Define os estilos visuais da galeria.
- **`app.js`:** Implementa a lógica e a interatividade da galeria usando JavaScript.
- **Pasta de imagens:** Contém as imagens da galeria.

### Próximos Passos (Opcional)

- Implementar um sistema de paginação para as abas, caso o número de imagens seja muito grande.
- Permitir que o usuário adicione novas imagens à galeria dinamicamente.
- Integrar a galeria com uma API para buscar imagens de fontes externas.
- Adicionar animações e transições para melhorar a experiência do usuário.
- Tornar a galeria responsiva para diferentes tamanhos de tela.

 **Observação:** Este arquivo README está formatado em Markdown. Você pode visualizá-lo corretamente em editores de texto compatíveis com Markdown ou em plataformas como o GitHub.

