---
description: Mender Server no ODYSSEY - X86
title: Mender Server no ODYSSEY - X86
keywords:
  - Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Mender-Server-ODYSSEY-X86
last_update:
  date: 03/16/2023
  author: Lakshantha
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Mender-Server-ODYSSEY-X86/
---

# Instalação do Mender Server Self-Hosted no ODYSSEY - X86

Podemos configurar o Mender Server Self-Hosted em uma placa ODYSSEY - X86 e então enviar atualizações OTA para outros dispositivos cliente executando como clientes Mender.

Este guia se concentra em usar a placa ODYSSEY - X86 executando o sistema OpenWrt da Seeed. Em seguida, executamos o Mender Server Self-Hosted como um contêiner Docker no OpenWrt.

## Pré-requisitos

- [OpenWrt System by Seeed](https://wiki.seeedstudio.com/pt-br/OpenWrt-Getting-Started) instalado na [placa ODYSSEY - X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- Se você quiser que este Mender Server Self-Hosted esteja disponível publicamente, você precisa de um endereço IP público com a porta 443 acessível publicamente
- Se estiver usando IP público como acima, você precisa vincular o IP público a um nome de DNS para o Mender Server

## Instalação

Observe que o guia abaixo é baseado no [guia oficial do Mender](https://docs.mender.io/3.1/server-installation/installation-with-docker-compose) para instalação com Docker. Há algumas pequenas alterações em relação ao guia oficial nesta versão e, portanto, siga este guia passo a passo para configurar com sucesso o Mender Server Self-Hosted na placa ODYSSEY - X86.

### Preparação Básica

- **Passo 1.** Depois de ligar a placa ODYSSEY - X86 com o sistema OpenWrt em execução, conecte uma porta Ethernet à internet e a outra porta Ethernet a um PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 2.** Abra a interface web Luci do OpenWrt acessando **192.168.2.1**

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2021/10/openwrt-webui-1030x723.png" alt="pir" width="1000" height="auto"/></p>

Por padrão, o Mender Server é configurado na porta **443 para https** e na porta **80 para http**. Mas o OpenWrt usa a porta 443 para acessar a interface web Luci via https e a porta 80 para acessar a interface web Luci via http. Portanto, precisamos mudar primeiro a porta da interface web Luci.

- **Passo 3.** Navegue até `Services > Terminal` e faça login com suas credenciais

- **Passo 4.** Digite o seguinte para acessar o **arquivo de configuração uhttpd**

```sh
vi /etc/config/uhttpd
```

- **Passo 5.** Altere **80** e **443** para valores diferentes. Aqui 80 é alterado para 85 e 443 é alterado para 446

```sh
config uhttpd 'main'
        list listen_http '0.0.0.0:85'
        list listen_http '[::]:85'
        list listen_https '0.0.0.0:446'
        list listen_https '[::]:446'
```

**Nota:** Pressione "i" no editor de texto Vi para entrar no modo de inserção

- **Passo 6.** Salve e saia do editor de texto pressionando "ESC" e digitando ":wq"

- **Passo 7.** No terminal, digite o seguinte para reiniciar o serviço uhttpd

```sh
service uhttpd restart
```

- **Passo 8.** Acesse novamente a interface web Luci usando a porta recém-definida

```sh
example:
192.168.2.1:85
```

- **Passo 9.** Abra o terminal novamente e digite o seguinte para atualizar a lista de pacotes do OpenWrt

```sh
opkg update
```

- **Passo 10.** Instale o Git

```sh
opkg install git-http
```

- **Passo 11.** Clone o repositório a seguir

```sh
git clone -b 3.1.0 https://github.com/mendersoftware/integration mender-server
```

- **Passo 12.** Entre no seguinte diretório:

```sh
cd mender-server/production
```

- **Passo 13.** Copie o template de produção para o seu próprio arquivo

```sh
cp config/prod.yml.template config/prod.yml
```

- **Passo 14.** Liste os arquivos no diretório

```sh
ls -l *
```

```
-rwxr-xr-x    1 root     root          1489 Nov  8 18:35 run

config:
-rw-r--r--    1 root     root           660 Nov  8 18:35 enterprise.yml.template
-rw-r--r--    1 root     root          5298 Nov  8 18:36 prod.yml
-rw-r--r--    1 root     root          5298 Nov  8 18:35 prod.yml.template
```

- **Passo 15.** Aqui excluímos o arquivo **enterprise.yml.template** porque vamos executar a edição Open Source do Mender Server

```sh
rm config/enterprise.yml.template
```

No entanto, se você for executar a edição Enterprise do Mender Server, mantenha o arquivo **enterprise.yml.template** e por favor [siga aqui](https://docs.mender.io/3.1/server-installation/installation-with-docker-compose#enterprise).

- **Passo 16.** Enquanto o diretório de trabalho atual ainda for **production**, baixe as imagens Docker necessárias

```sh
./run pull
```

```
Pulling mender-mongo                  ... done
Pulling mender-deviceconfig           ... done
Pulling mender-useradm                ... done
Pulling mender-workflows-worker       ... done
Pulling mender-create-artifact-worker ... done
Pulling mender-workflows-server       ... done
Pulling mender-device-auth            ... done
Pulling mender-gui                    ... done
Pulling mender-inventory              ... done
Pulling mender-api-gateway            ... done
Pulling minio                         ... done
Pulling mender-deployments            ... done
Pulling mender-nats                   ... done
Pulling mender-deviceconnect          ... done
Pulling mender-mongo (mongo:4.4)...
```

**Nota:** Observe que o Docker Hub impôs limites em pulls originados de usuários anônimos para 100 a cada 6 horas (veja: [Docker pricing](https://www.docker.com/pricing)). Isso significa que, por motivos completamente independentes do Mender, a etapa acima pode falhar e você talvez tenha que tentar novamente após algum tempo.

### Certificados e Chaves

- **Passo 1.** Defina o nome de domínio público do seu servidor

```sh
API_GATEWAY_DOMAIN_NAME="mender.example.com"  # replace with your server's public domain name
STORAGE_PROXY_DOMAIN_NAME="${API_GATEWAY_DOMAIN_NAME}"
```

**Nota:** Se você quiser que este Mender Server Self-Hoster esteja disponível apenas localmente, você pode escolher um nome de domínio que já tenha e anexar um subdomínio aleatório de sua preferência. Por exemplo: **mender.seeedstudio.com**. Certifique-se de não usar diretamente o endereço IP do servidor Mender aqui porque não vai funcionar.

- **Passo 2.** Prepare certificados usando o script auxiliar keygen

```sh
CERT_CN=$API_GATEWAY_DOMAIN_NAME \
CERT_SAN="DNS:${API_GATEWAY_DOMAIN_NAME},DNS:*.${STORAGE_PROXY_DOMAIN_NAME}" \
../keygen
```

```
Generating an EC private key
writing new private key to 'private.key'
-----
................................................................................++++
...........................................................................................++++
writing RSA key
................................................................................................++++
...........................++++
writing RSA key
All Mender Server keys and certificates have been generated in directory /root/mender-server/production/keys-generated.
Please include them in your docker compose and device builds.
For more information, please refer to https://docs.mender.io/

```

Sua árvore de diretórios local agora deve se parecer com isto:

```
├── keys-generated
│   ├── cert
│   │   ├── cert.crt
│   │   └── private.key
│   └── keys
│       ├── deviceauth
│       │   └── private.key
│       └── useradm
│           └── private.key
├── config/enterprise.yml.template
├── config/prod.yml
├── config/prod.yml.template
└── run
```

Os certificados de API Gateway e Storage Proxy gerados aqui precisam ser disponibilizados para o cliente Mender. Consulte a seção sobre [compilação para produção](https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production) para uma descrição de como incluir os certificados nas compilações do cliente.

### Armazenamento Persistente

O armazenamento persistente dos dados dos serviços de backend é implementado usando volumes nomeados do Docker. O template está configurado para montar os seguintes volumes:

- mender-artifacts - armazenamento de objetos de artefatos
- mender-db - dados dos bancos de dados dos serviços mender

Crie os volumes:

```sh
docker volume create --name=mender-artifacts
docker volume create --name=mender-db
```

A configuração de implantação em **config/prod.yml** agora precisa ser atualizada. Vamos percorrer as etapas abaixo.

### Minio

As chaves **MINIO_ACCESS_KEY** e **MINIO_SECRET_KEY** controlam credenciais para upload de artefatos no armazenamento de objetos. Como o Minio é um serviço compatível com a API S3, essas configurações correspondem ao AWS Access Key ID e ao Secret Access Key da Amazon, respectivamente

- **Passo 1.** Precisamos gerar uma chave secreta com comprimento 16. Há 2 maneiras de fazer isso

**Método 1:**

1. Se você tiver acesso a uma máquina Linux, instale primeiro o utilitário pwgen

```sh
sudo apt install pwgen
```

2. Depois disso, gere uma chave secreta aleatória de comprimento 16

```sh
pwgen 16 1
```

**Método 2:**

Digite você mesmo uma chave secreta aleatória de 16 caracteres. Ela precisa ter **números, caracteres maiúsculos e minúsculos**

- **Passo 2.** Substitua a chave secreta acima com este comando

```sh
MINIO_SECRET_KEY_GENERATED=<secret key-generated>
```

- **Passo 3.** Insira as chaves de acesso e secretas em **config/prod.yml** com os seguintes comandos

```sh
sed -i.bak "s/MINIO_ACCESS_KEY:.*/MINIO_ACCESS_KEY: mender-deployments/g" config/prod.yml
sed -i.bak "s/MINIO_SECRET_KEY:.*/MINIO_SECRET_KEY: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml
```

### Serviço Deployments

O serviço deployments fará upload de objetos de artefatos para o armazenamento minio via storage-proxy, veja a [visão geral de administração](https://docs.mender.io/3.1/server-installation/overview) para mais detalhes. Por esse motivo, as credenciais de acesso **DEPLOYMENTS_AWS_AUTH_KEY** e **DEPLOYMENTS_AWS_AUTH_SECRET** precisam ser atualizadas e **DEPLOYMENTS_AWS_URI** deve apontar para o nome de domínio do seu Storage proxy.

- **Passo 1.** Execute os seguintes comandos para definir **DEPLOYMENTS_AWS_AUTH_KEY** e **DEPLOYMENTS_AWS_AUTH_SECRET** para os valores de **MINIO_ACCESS_KEY** e **MINIO_SECRET_KEY**, respectivamente

```sh
sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_KEY:.*/DEPLOYMENTS_AWS_AUTH_KEY: mender-deployments/g" config/prod.yml
sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_SECRET:.*/DEPLOYMENTS_AWS_AUTH_SECRET: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml
```

- **Passo 2.** Execute o seguinte comando para que **DEPLOYMENTS_AWS_URI** aponte para o seu proxy de Storage

```sh
sed -i.bak "s/https:\/\/set-my-alias-here.com/https:\/\/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml
```

### Proxy de Storage

Na configuração padrão não há um processo separado atuando como proxy para o serviço de armazenamento. Para este fim você pode usar o Mender API Gateway, mas com um nome de domínio adicional. Altere o valor reservado set-my-alias-here para um nome de domínio válido para usar o Mender API Gateway como um proxy para o serviço de armazenamento, executando o seguinte comando

```sh
sed -i.bak "s/set-my-alias-here.com/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml
```

### API Gateway

Por motivos de segurança, o API Gateway deve saber exatamente o nome DNS que lhe foi atribuído, o que você irá configurar através da variável de ambiente ALLOWED_HOSTS.

Altere o valor reservado my-gateway-dns-name para um hostname válido, executando o seguinte comando

```sh
sed -i.bak "s/my-gateway-dns-name/$API_GATEWAY_DOMAIN_NAME/g" config/prod.yml
```

## Executar o Servidor

- **Passo 1.** Inicie todos os serviços em modo desacoplado (detached) com o seguinte comando

```sh
./run up -d
```

```
Creating network "menderproduction_mender" with the default driver
Creating menderproduction_mender-nats_1                   ... done
Creating menderproduction_mender-mongo_1 ... done
Creating menderproduction_minio_1        ... done
Creating menderproduction_mender-gui_1   ... done
Creating menderproduction_mender-workflows-worker_1       ... done
Creating menderproduction_mender-create-artifact-worker_1 ... done
Creating menderproduction_mender-useradm_1                ... done
Creating menderproduction_mender-workflows-server_1       ... done
Creating menderproduction_mender-deviceconfig_1           ... done
Creating menderproduction_mender-inventory_1              ... done
Creating menderproduction_mender-deviceconnect_1          ... done
Creating menderproduction_mender-device-auth_1            ... done
Creating menderproduction_mender-api-gateway_1            ... done
Creating menderproduction_mender-deployments_1            ... done
```

- **Passo 2.** Para verificar se os serviços estão em execução, execute o seguinte comando e verifique se o estado de todos os serviços está como "Up"

```sh
./run ps
```

```
                      Name                                    Command                  State                  Ports            
-------------------------------------------------------------------------------------------------------------------------------
menderproduction_mender-api-gateway_1              /entrypoint.sh --accesslog ...   Up             0.0.0.0:443->443/tcp, 80/tcp
menderproduction_mender-auditlogs_1                /usr/bin/auditlogs --confi ...   Up             8080/tcp                    
menderproduction_mender-create-artifact-worker_1   /usr/bin/workflows --confi ...   Up             8080/tcp                    
menderproduction_mender-deployments_1              /entrypoint.sh --config /e ...   Up             8080/tcp                    
menderproduction_mender-device-auth_1              /usr/bin/deviceauth --conf ...   Up             8080/tcp                    
menderproduction_mender-deviceconfig_1             /usr/bin/deviceconfig --co ...   Up             8080/tcp                    
menderproduction_mender-deviceconnect_1            /usr/bin/deviceconnect --c ...   Up             8080/tcp                    
menderproduction_mender-gui_1                      /entrypoint.sh nginx             Up (healthy)   80/tcp, 8080/tcp            
menderproduction_mender-inventory_1                /usr/bin/inventory-enterpr ...   Up             8080/tcp                    
menderproduction_mender-mongo_1                    docker-entrypoint.sh mongod      Up             27017/tcp                   
menderproduction_mender-nats_1                     docker-entrypoint.sh nats- ...   Up             4222/tcp, 6222/tcp, 8222/tcp
menderproduction_mender-tenantadm_1                /usr/bin/tenantadm --confi ...   Up             8080/tcp                    
menderproduction_mender-useradm_1                  /usr/bin/useradm-enterpris ...   Up             8080/tcp                    
menderproduction_mender-workflows-server_1         /usr/bin/workflows-enterpr ...   Up             8080/tcp                    
menderproduction_mender-workflows-worker_1         /entrypoint.sh worker --au ...   Up                                         
menderproduction_minio_1                           /usr/bin/docker-entrypoint ...   Up (healthy)   9000/tcp
```

- **Passo 3.** Como esta é uma instalação totalmente nova, precisamos criar o usuário inicial via CLI fornecida pelo User Administration Service. O binário do serviço está incorporado em um contêiner Docker, então para executá‑lo você usará o subcomando exec do docker-compose

```sh
./run exec mender-useradm /usr/bin/useradm create-user --username=myname@host.com --password=mypassword
```

## Acessar o Servidor

### Servidor Público

Agora você pode acessar o servidor público Mender com o nome de domínio especificado nas etapas anteriores. Depois disso, você pode inserir as credenciais acima para o primeiro usuário e fazer login no servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/server/login.png" alt="pir" width="400" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/server/after-login.jpg" alt="pir" width="1000" height="auto"/></p>

### Servidor Local

No entanto, se você estiver executando o Mender Server localmente, há alguns passos adicionais.

- **Passo 1.** Entre na interface Web OpenWrt Luci

```sh
example:
192.168.2.1:85
```

- **Passo 2.** Navegue até `Network > DHCP and DNS`

- **Passo 3.** Em **Server Settings** clique em **General Settings**

- **Passo 4.** No espaço ao lado de **Addresses**, digite o subdomínio criado anteriormente com o nome de domínio e, em seguida, insira o endereço IP do X86 como segue

```sh
/mender.seeedstudio.com/192.168.2.1
```

- **Passo 5.** Clique em **SAVE & APPLY**

- **Passo 6.** Agora você pode acessar o servidor local Mender digitando o subdomínio e o nome de domínio no navegador

```sh
example:
https://mender.seeedstudio.com
```

**Nota:** Lembre‑se de adicionar **`https://`** no início

Agora você pode enviar atualizações OTA para os clientes que estão conectados a este Mender Server auto-hospedado!

**Nota:** Se você encontrar quaisquer problemas ao iniciar ou executar o seu Mender Server, você pode dar uma olhada na seção de [solução de problemas do Mender Server](https://docs.mender.io/3.1/troubleshoot/mender-server).
