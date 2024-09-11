# curso-dev-tabnews
Implementação do [TabNews](https://www.tabnews.com.br/) feito no curso [curso.dev](https://curso.dev)

## Comandos NVM e Node.js
Antes de utilizar os comandos listados abaixo, certifique-se de que o NVM (Node Version Manager) está instalado no seu sistema. Se você ainda não o tem instalado, siga as instruções no [repositório oficial do NVM](https://github.com/nvm-sh/nvm#installing-and-updating).

### Verificar a versão do Node.js
```bash
node -v
```
- **Descrição**: Verifica a versão atual instalada do Node.js no sistema.
- **Utilidade**: Útil para confirmar qual versão do Node.js está em uso.

### Listar as versões do Node.js instaladas
```bash
nvm ls
```
- **Descrição**: Lista todas as versões do Node.js instaladas no seu sistema.
- **Utilidade**: Verifique quais versões do Node.js estão disponíveis e qual está sendo usada no momento.

### Instalar a versão LTS do Node.js (Hydrogen)
```bash
nvm install lts/hydrogen
```
- **Descrição**: Instala a versão LTS (Long Term Support) mais recente do Node.js chamada "Hydrogen".
- **Utilidade**: Esse comando é usado para garantir que você está utilizando uma versão estável e com suporte de longo prazo do Node.js.

### Obter ajuda sobre os comandos do NVM
```bash
nvm --help
```
- **Descrição**: Mostra uma lista de comandos disponíveis no NVM e uma breve descrição de como utilizá-los.
- **Utilidade**: Útil para obter uma referência rápida sobre quais comandos estão disponíveis no NVM.

### Definir uma versão padrão do Node.js
```bash
nvm alias default <versão>
```
- **Descrição**: Define uma versão padrão do Node.js que será utilizada automaticamente ao iniciar um novo terminal.
- **Utilidade**: Garante que uma versão específica do Node.js seja usada por padrão sem a necessidade de selecioná-la manualmente.

Exemplo:
```bash
nvm alias default lts/hydrogen
```