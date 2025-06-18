# 🎵 API de Músicas

---

## 🚀 CI/CD com GitHub Actions

Este projeto contém dois workflows:

- **Push Workflow**: Executado a cada push nas branches `main` ou `feat/*`.
- **Pull Request Workflow**: Executado a cada novo Pull Request direcionado à `main`.

## ▶️ Como executar

### 1. Clonar o repositório

```
git clone https://github.com/vieirarester/api-musicas.git
cd api-musicas
```

### 2. Instalar dependências
```
npm install
```


### 3. Executar a aplicação
```
node index.js
```

A API pode ser acessada em: <http://localhost:8080/api/musicas>

Use ferramentas como [Postman](https://www.postman.com/) para testar.

## 🔄 Workflow utilizado: GitHub Flow

Foi optado pelo **GitHub Flow** por ser um fluxo simples, ideal para projetos pequenos com poucos desenvolvedores. Ele nos permite:

* Criar branches a partir da *main* para cada nova funcionalidade.
* Fazer pull requests para revisão e integração à *main*.
* Garantir versionamento claro e seguro.