# 🎵 API de Músicas

---

## 🛠️ Pré-requisitos

- [Node.js (16+)](https://nodejs.org/pt)
- [Git](https://git-scm.com/downloads)
- [Vagrant](https://developer.hashicorp.com/vagrant/install)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (se for usar a VM)
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-and-upgrading-ansible) (para provisionar via playbook)

## ▶️ Como executar localmente

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

## ⚙️ Provisionamento com Vagrant e Ansible

Este projeto também pode ser executado dentro de um ambiente virtualizado com Vagrant e provisionado automaticamente com Ansible.

📁 Estrutura da Infraestrutura

- Ansible (192.168.56.10): Nó de controle Ansible
- VM2 (192.168.56.101): Máquina gerenciada onde a aplicação será instalada

🛠️ Etapas para executar com Ansible
```
cd /vagrant                                       # acessa a pasta dentro do projeto
vagrant up                                        # levanta as VMs
vagrant ssh ansible                               # acessa o nó de controle
cd /vagrant/data                                  # acessa a pasta do playbook
ansible-playbook -i inventory configura-node.yaml # executa os comando na VMs através do playbook
```

✅ Teste da aplicação via Ansible
Para verificar se a aplicação está rodando corretamente após o playbook, execute na VM1 (ansible):

```
curl http://192.168.56.101:8080/api/musicas
```

## 🚀 CI/CD com GitHub Actions

Este projeto contém dois workflows:

- **Push Workflow**: Executado a cada push nas branches `main` ou `feat/*`.
- **Pull Request Workflow**: Executado a cada novo Pull Request direcionado à `main`.

## 🔄 Workflow utilizado: GitHub Flow

Foi optado pelo **GitHub Flow** por ser um fluxo simples, ideal para projetos pequenos com poucos desenvolvedores. Ele nos permite:

* Criar branches a partir da *main* para cada nova funcionalidade.
* Fazer pull requests para revisão e integração à *main*.
* Garantir versionamento claro e seguro.
