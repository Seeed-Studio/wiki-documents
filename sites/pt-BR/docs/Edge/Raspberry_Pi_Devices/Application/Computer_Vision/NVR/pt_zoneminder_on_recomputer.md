---
description: Este wiki demonstra como implantar o sistema de vigilância por vídeo Zoneminder no reComputer.
title: Zoneminder no reComputer
keywords:
  - reComputer
  - NVR
  - Zoneminder
  - sistema de vigilância por vídeo
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.webp
slug: /zoneminder_on_recomputer
last_update:
  date: 09/05/2025
  author: Jiahao
no_comments: false
createdAt: '2025-09-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/zoneminder_on_recomputer/
---

# Use Zoneminder no reComputer

## Introdução

[Zoneminder](https://github.com/ZoneMinder/zoneminder) é um software de vigilância por vídeo de código aberto que permite monitorar e gerenciar câmeras de segurança. Ele oferece suporte a vários tipos de câmeras, incluindo câmeras IP, webcams USB e câmeras analógicas. O ZoneMinder oferece recursos como detecção de movimento, gravação de vídeo, notificações de alarme e visualização remota por meio de uma interface web. É altamente personalizável, o que o torna adequado tanto para necessidades de vigilância pessoais quanto profissionais. Além disso, por ser de código aberto, é gratuito e pode ser adaptado a diferentes configurações.

## Pré-requisitos

### Requisitos de hardware

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Baixar Zoneminder

### Atualizar o sistema

Execute os seguintes comandos.

```bash
sudo apt update
sudo apt upgrade -y
```

### Instalar MariaDB e fazer a configuração inicial do banco de dados

Execute os seguintes comandos.

```bash
sudo apt install apache2 mariadb-server
```

Altere para o usuário root e crie o banco de dados e o usuário do banco de dados.

```bash
sudo su
mariadb
CREATE DATABASE zm;
CREATE USER zmuser@localhost IDENTIFIED BY 'zmpass';
GRANT ALL ON zm.* TO zmuser@localhost;
FLUSH PRIVILEGES;
exit;
exit
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_1.png" alt="pir" width="1000" height="auto"/></p>

Por padrão o MariaDB usa [unix socket authentication](https://mariadb.com/kb/en/authentication-plugin-unix-socket/), portanto nenhuma senha de usuário root é necessária (o acesso do usuário root do MariaDB só está disponível para o usuário root local do Linux). Se desejar, você pode definir uma senha root do MariaDB (e aplicar outros ajustes de segurança) executando [mariadb-secure-installation](https://mariadb.com/kb/en/mysql_secure_installation/).

### Instalar Zoneminder

Por padrão, o Debian instalará a versão publicada no Debian (stable). No entanto, pode haver versões mais recentes usando backports. No momento em que este texto foi escrito, o bookworm (stable) vem com a v.1.36.33.

Para instalar a versão no bookworm stable, basta executar o seguinte comando.

```bash
sudo apt install zoneminder
```

Se, em vez disso, você preferir instalar a versão mais recente usando backports, execute os seguintes comandos. A primeira linha adicionará esse repositório bookworm-backports. O repositório de backports é desativado por padrão, então com a segunda linha declaramos explicitamente que queremos a versão backportada do zoneminder.

```bash
sudo bash -c "echo 'deb http://deb.debian.org/debian bookworm-backports main contrib' >> /etc/apt/sources.list"
sudo apt update
sudo apt -t bookworm-backports install zoneminder
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_2.png" alt="pir" width="1000" height="auto"/></p>

## Configurar Zoneminder

### Configurar banco de dados

Execute os seguintes comandos. Use `zmpass` como senha.

```bash
mariadb -u zmuser -p zm < /usr/share/zoneminder/db/zm_create.sql
```

### Configurar permissões para zm.conf

Para garantir que o zoneminder possa ler o arquivo de configuração, execute o seguinte comando.

```bash
sudo chgrp -c www-data /etc/zm/zm.conf
```

### Ajustar a configuração do Apache

```bash
sudo a2enconf zoneminder
sudo a2enmod cgi
sudo systemctl reload apache2.service
sudo systemctl restart zoneminder.service
sudo systemctl status zoneminder.service
sudo systemctl enable zoneminder.service   
```

Se o serviço zoneminder.service estiver ativo e sem erros, você deverá conseguir acessar o zoneminder em `http://yourhostname/zm`

### Configurar Zoneminder

Adicione a fonte de vídeo ao zoneminder.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_3.png" alt="pir" width="1000" height="auto"/></p>

## Resultado

Depois de termos configurado tudo, podemos visualizar o vídeo em tempo real da câmera atual e, quando um movimento for detectado, ele será gravado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.gif" alt="pir" width="1000" height="auto"/></p>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
