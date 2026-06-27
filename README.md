# 🔐 Gerenciador de Senhas

O **Gerenciador de Senhas** é uma aplicação interativa desenvolvida em React utilizando TypeScript. O objetivo principal do projeto é permitir que a pessoa usuária armazene, visualize e gerencie suas credenciais de acesso de diversos serviços da internet de forma centralizada e segura. 

A aplicação foca fortemente na manipulação de estados do React para controlar a renderização condicional de formulários, validação rigorosa de campos em tempo real e gerenciamento dinâmico de listas de dados (CRUD).

---

## 🚀 O que foi desenvolvido

A aplicação engloba todas as etapas necessárias para gerenciar dados localmente através de estados reativos. As principais funcionalidades desenvolvidas foram:

*   **Renderização Condicional do Formulário:** A tela inicial exibe apenas o botão "Cadastrar nova senha". Ao clicar nele, o botão desaparece e o componente `<Form />` é renderizado. Caso a pessoa usuária clique em "Cancelar", o formulário some e o botão inicial retorna.
*   **Validação em Tempo Real de Senhas:** Implementação de um display visual que monitora os critérios de segurança da senha digitada:
    *   Possuir entre 8 e 16 caracteres.
    *   Possuir letras e números.
    *   Possuir algum caractere especial.
    *   O componente alterna dinamicamente as classes CSS entre `valid-password-check` e `invalid-password-check` conforme os critérios são atendidos.
*   **Controle do Botão Cadastrar:** O botão de submissão do formulário permanece estritamente desabilitado até que todos os campos (Nome do serviço, Login, Senha, URL) estejam preenchidos e a senha atenda a todos os requisitos de segurança.
*   **Listagem Dinâmica e Manipulação (CRUD):** Exibição de mensagens condicionais (como "Nenhuma senha cadastrada") quando a lista está vazia. Ao salvar, as credenciais são renderizadas no final da lista, transformando o nome do serviço em um link externo para a URL cadastrada.
*   **Visibilidade Global das Senhas:** Implementação de um checkbox geral ("Esconder senhas") que, quando marcado, mascara instantaneamente todas as senhas cadastradas na lista para o formato `******`.
*   **Recursos Avançados e Bônus:**
    *   Botão interno no formulário (`data-testid="show-hide-form-password"`) para alternar o tipo do input entre `password` e `text`, permitindo espiar a senha digitada.
    *   Integração com a biblioteca externa **SweetAlert2** para disparar um alerta temporizado de 1.5 segundo com a mensagem *"Serviço cadastrado com sucesso"* assim que o formulário é submetido corretamente.

---

## 🛠️ Tecnologias e Habilidades Utilizadas

*   **React (com Vite e TypeScript):** Base para construção de componentes modulares, fortemente tipados e reutilizáveis.
*   **React Hooks (`useState`):** Gerenciamento de estados locais para inputs de formulários, controle de visibilidade das senhas e controle de exibição de componentes.
*   **Comunicação entre Componentes:** Fluxo de dados eficiente via *props* e envio de informações de componentes-filhos para componentes-pais através de funções de *callback*.
*   **SweetAlert2:** Biblioteca utilizada para criação de alertas estilizados e assíncronos na interface.
*   **React Testing Library (RTL):** Validação e testes de comportamento de interface baseados nos seletores semânticos (`getByRole`) e atributos específicos de teste (`data-testid`).
*   **Linters (ESLint & Stylelint):** Ferramentas para manutenção de código limpo, consistente e alinhado com as boas práticas de mercado.

---

## 🔧 Como Instalar e Rodar o Projeto

1. Clone o repositório localmente:
   ```bash
   git clone git@github.com:tryber/sd-040-project-password-manager.git
