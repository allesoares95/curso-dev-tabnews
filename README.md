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

## NEXT.JS e React

**Next Descrição**: Next.js é um framework de React que permite renderização do lado do servidor (SSR) e geração de sites estáticos. Ele é uma ferramenta poderosa para criar aplicações web modernas e escaláveis.

**React Descrição**: React é amplamente utilizado para criar interfaces de usuário interativas e responsivas. Ele é uma escolha popular para desenvolvedores que desejam criar aplicativos web modernos e escaláveis.

## PACKAGE.JSON

**Descrição**: O arquivo package.json é um arquivo de manifesto para projetos Node.js. Ele contém informações sobre o projeto, como nome, versão, scripts, dependências e muito mais.

```bash
npm init
```

**Descrição**: O comando npm init é usado para criar um novo arquivo package.json para um projeto Node.js.

```bash
npm install next@13.1.6
```

**Descrição**: O comando npm install é usado para instalar pacotes Node.js no projeto. O comando npm install next@13.1.6 instala a versão 13.1.6 do pacote Next.js no projeto.

```bash
npm install react@18.2.0
```

**Descrição**: O comando npm install react@18.2.0 instala a versão 18.2.0 do pacote React no projeto.

```bash
npm install react-dom@18.2.0
```

**Descrição**: O comando npm install react-dom@18.2.0 instala a versão 18.2.0 do pacote ReactDOM no projeto.
