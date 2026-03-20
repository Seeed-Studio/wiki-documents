---
description: O Guia de Instalação do ThingsBoard para reComputer fornece instruções passo a passo para configurar o ThingsBoard v3.8 e o PostgreSQL em um dispositivo reComputer. Ele abrange a instalação do Java 17, configuração do serviço ThingsBoard, configuração do PostgreSQL e dicas de solução de problemas para um gerenciamento perfeito de dados de IoT.
title: Primeiros Passos com ThingsBoard no reComputer R1000
keywords:
  - reComputer-R1000
  - Primeiros passos
  - IIoT
  - Industrial
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_thingsboard_ce
last_update:
  date: 10/14/2024
  author: Kasun Thushara
createdAt: '2024-10-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_thingsboard_ce/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:600}}/></div>

## Introdução

[ThingsBoard](https://thingsboard.io/) é uma plataforma IoT de código aberto projetada para o desenvolvimento rápido, gerenciamento e escalonamento de projetos de IoT. Ela oferece uma solução pronta para uso tanto para infraestrutura IoT em nuvem quanto local, permitindo que você provisionar dispositivos, gerencie ativos, colete e visualize dados e analise telemetria com facilidade. Neste guia, vamos percorrer a instalação do ThingsBoard Community Edition em um reComputer, fornecendo uma base robusta para suas aplicações de IoT.

## Pré-requisitos

### Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

:::note
Os requisitos de hardware dependem do banco de dados escolhido e do número de dispositivos conectados ao sistema. Para executar o ThingsBoard com PostgreSQL, você precisará de **pelo menos 4GB de RAM**.
:::

## Etapa 1: Instalar Java 17 (OpenJDK)

ThingsBoard requer Java 17 para ser executado. Abra o Terminal.

1. Atualize o índice de pacotes:

   ```bash
   sudo apt update
   ```

2. Instale o OpenJDK 17:

   ```bash
   sudo apt install openjdk-17-jdk
   ```

3. Configure o sistema para usar o OpenJDK 17 como padrão:

   ```bash
   sudo update-alternatives --config java
   ```

4. Verifique a instalação:

   ```bash
   java -version
   ```

## Etapa 2: Instalar o Serviço ThingsBoard

1. Baixe o pacote `.deb` do ThingsBoard:

   ```bash
   wget https://github.com/thingsboard/thingsboard/releases/download/v3.8/thingsboard-3.8.deb
   ```

2. Instale o ThingsBoard como um serviço:

   ```bash
   sudo dpkg -i thingsboard-3.8.deb
   ```

## Etapa 3: Instalar o Banco de Dados PostgreSQL

1. Instale o **wget** se ainda não estiver instalado:

   ```bash
   sudo apt install -y wget
   ```

2. Adicione o repositório do PostgreSQL e instale o serviço:

   ```bash
   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
   echo "deb https://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
   sudo apt update
   sudo apt -y install postgresql
   sudo service postgresql start
   ```

3. Defina a senha para o usuário `postgres`:

   ```bash
   sudo -u postgres psql
   \password
   ```

4. Crie o banco de dados do ThingsBoard:

   ```bash
   psql -U postgres -d postgres -h 127.0.0.1 -W
   CREATE DATABASE thingsboard;
   ```

## Etapa 4: Configurar o ThingsBoard

1. Abra o arquivo de configuração do ThingsBoard:

   ```bash
   sudo nano /etc/thingsboard/conf/thingsboard.conf
   ```

2. Adicione a seguinte configuração de banco de dados (substitua `PUT_YOUR_POSTGRESQL_PASSWORD_HERE` pela senha definida para o usuário `postgres`):

   ```bash
   # DB Configuration 
   export DATABASE_TS_TYPE=sql
   export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
   export SPRING_DATASOURCE_USERNAME=postgres
   export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
   export SQL_POSTGRES_TS_KV_PARTITIONING=MONTHS
   ```

3. (Opcional) Atualize as configurações de memória para máquinas com 4GB de RAM:

   ```bash
   export JAVA_OPTS="$JAVA_OPTS -Xms2G -Xmx2G"
   ```

## Etapa 5: Executar o Script de Instalação

1. Execute o script de instalação do ThingsBoard:

   ```bash
   sudo /usr/share/thingsboard/bin/install/install.sh --loadDemo
   ```

   A opção `--loadDemo` irá carregar dados de demonstração como usuários, dispositivos, ativos e muito mais.

## Etapa 6: Iniciar o Serviço ThingsBoard

Inicie o serviço ThingsBoard:

```bash
sudo service thingsboard start
```

Depois de iniciado, você pode acessar a interface Web do ThingsBoard usando o seguinte link:

- **URL:** [http://localhost:8080](http://localhost:8080)

#### Credenciais Padrão

- **Administrador do Sistema:** sysadmin@thingsboard.org / sysadmin
- **Administrador do Locatário (Tenant):** tenant@thingsboard.org / tenant
- **Usuário do Cliente:** customer@thingsboard.org / customer

## Solução de Problemas

Se você encontrar qualquer problema, verifique os logs do ThingsBoard em busca de erros:

```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

Para arquivos de log adicionais:

```bash
/var/log/thingsboard
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/openingwindow.PNG" style={{width:600}}/></div>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
