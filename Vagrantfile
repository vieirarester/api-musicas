# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  # Box base compatível com Node.js 16
  config.vm.box = "ubuntu/focal64"

  # VM1 - Cliente/teste
  config.vm.define "vm1" do |vm1|
    vm1.vm.network "private_network", ip: "192.168.56.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end
  end

  # VM2 - Backend
  config.vm.define "vm2" do |vm2|
    vm2.vm.network "private_network", ip: "192.168.56.20"
    vm2.vm.synced_folder ".", "/home/vagrant/vagrant_data"

    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = 2048
    end

    # Provisionamento
    vm2.vm.provision "shell", inline: <<-SHELL
      # Atualiza pacotes e instala Node.js 16
      sudo apt-get update
      sudo apt-get install -y curl gnupg
      curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
      sudo apt-get install -y nodejs

      # Entra na pasta do projeto
      cd /home/vagrant/vagrant_data

      # Instala dependências sem tentar criar links simbólicos (evita erro no Windows)
      npm install --no-bin-links

      # Inicia a aplicação em segundo plano
      nohup npm run dev > app.log 2>&1 &
    SHELL
  end
end




  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
