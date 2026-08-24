---
description: Instalar o Ubuntu no SenseCAP M4 via USB
title: Instalar o Ubuntu no SenseCAP M4 via USB
keywords:
  - SenseCAP Network
  - SenseCAP M4
  - Ubuntu
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_ubuntu_on_sensecap_m4
sku: E23010412, 110991885, 110991865
last_update:
  date: 08/18/2026
  author: Zhai Chenyang
createdAt: '2026-08-18'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/pt-br/install_ubuntu_on_sensecap_m4/
---

# Instalar o Ubuntu no SenseCAP M4 via USB

Este guia explica como instalar o Ubuntu 24.04 no SenseCAP M4 usando uma unidade USB.

## Requisitos de instalação

1. Um pendrive USB com pelo menos 4 GB de armazenamento
2. Um computador executando Microsoft Windows XP ou posterior
3. Rufus, uma ferramenta gratuita e de código aberto para criação de USB
4. Um arquivo de imagem ISO do Ubuntu

## 1. Baixar a imagem ISO do Ubuntu

Clique [aqui](https://releases.ubuntu.com/24.04/) para baixar.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-01.png" /></div>

## 2. Baixar o Rufus

Clique [aqui](https://rufus.ie/en/#download) para baixar.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-02.png" /></div>

## 3. Criar um pendrive USB inicializável

Consulte este [link](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview).

### 3.1 Abra o Rufus e selecione o pendrive USB

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-03.png" /></div>

### 3.2 Selecione a imagem ISO

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-04.png" /></div>

### 3.3 Inicie a gravação da imagem ISO

Após selecionar a imagem ISO, clique em **START**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-05.png" /></div>

### 3.4 Selecione o modo de gravação da imagem ISO

Quando a seguinte janela pop-up aparecer, selecione **Write in ISO Image mode (Recommended)**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-06.png" /></div>

Você pode ser avisado de que o Rufus precisa baixar arquivos adicionais para concluir a gravação da imagem ISO. Se esta caixa de diálogo aparecer, clique em **Yes** para continuar.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-07.png" /></div>

Quando for solicitado para apagar o pendrive USB, clique em **Yes** para continuar.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-08.png" /></div>

Quando o status mostrar **READY**, você pode fechar o Rufus.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-09.png" /></div>

## 4. Instalar o Ubuntu

Clique [aqui](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview) para referência.

Insira o pendrive USB no SenseCAP M4, conecte um teclado e um monitor pela porta HDMI, depois ligue o dispositivo e pressione a tecla **Delete**.

### 4.1 Digite a senha do BIOS

Digite a senha: `QbCuNBAz`

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-10.png" /></div>

### 4.2 Inicialize a partir do pendrive USB

Na tela **Save & Exit**, selecione o pendrive USB em **Boot Override** e pressione **Enter** para inicializar a partir dele.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-11.png" /></div>

### 4.3 Inicie a instalação do Ubuntu

Selecione a primeira opção para começar a instalar o Ubuntu.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-12.png" /></div>

### 4.4 Selecione o idioma

Após entrar na interface de instalação, selecione o idioma de sua preferência.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-13.png" /></div>

### 4.5 Selecione o layout do teclado

Selecione o layout do teclado. As configurações padrão podem ser usadas.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-14.png" /></div>

### 4.6 Selecione a opção de instalação

Selecione a opção para instalar o Ubuntu.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-15.png" /></div>

### 4.7 Configure a rede

Você pode pular a etapa de conexão de rede por enquanto.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-16.png" /></div>

### 4.8 Configure o proxy

Você também pode pular a etapa de configuração de proxy.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-17.png" /></div>

### 4.9 Configure o espelho de arquivos do Ubuntu

Para a configuração do espelho de arquivos do Ubuntu, mantenha as configurações padrão e prossiga para a próxima etapa.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-18.png" /></div>

### 4.10 Configure o armazenamento

Configure o armazenamento e selecione **Custom storage layout**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-19.png" /></div>

### 4.11 Formate o disco

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-20.png" /></div>

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-21.png" /></div>

### 4.12 Crie as partições

Você pode personalizar o layout das partições conforme necessário. Neste exemplo, são criadas partições separadas para raiz e dados.

Defina o tamanho da partição raiz para **50 GB**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-22.png" /></div>

### 4.13 Aloque o espaço restante

Aloque o espaço restante para a partição de dados. Deixar este campo em branco atribui todo o espaço restante a `/data`.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-23.png" /></div>

### 4.14 Confirme o layout das partições

Depois que as partições forem criadas, clique em **Next**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-24.png" /></div>

### 4.15 Configure a conta de usuário

Digite o hostname, o nome de usuário e a senha.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-25.png" /></div>

### 4.16 Pule o Ubuntu Pro

Você pode pular a atualização para o Ubuntu Pro por enquanto.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-26.png" /></div>

### 4.17 Instale o OpenSSH

Instale o OpenSSH aqui para habilitar conexões SSH.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-27.png" /></div>

### 4.18 Reinicie o sistema

Quando a instalação estiver concluída, selecione **Reboot Now**. Você pode remover o pendrive USB enquanto o sistema estiver reiniciando.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-28.png" /></div>

### 4.19 Conclua a instalação

Instalação concluída com sucesso.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-29.png" /></div>

