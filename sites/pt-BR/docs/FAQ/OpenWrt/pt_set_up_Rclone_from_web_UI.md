---
description: OpenWrt-FAQ
title: Como configurar o Rclone a partir da interface web
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /set_up_Rclone_from_web_UI
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-07-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/set_up_Rclone_from_web_UI/
---

<!-- Q3: I cannot successfully set up Rclone from web UI -->

Rclone é um programa para gerenciar arquivos em unidades de armazenamento em nuvem. Você pode usá‑lo para garantir que seus arquivos na nuvem estejam sempre sincronizados com o armazenamento local.

Embora exista uma interface gráfica para configurar o Rclone dentro da interface OpenWrt Luci, primeiro você precisa fazer todas as configurações na linha de comando. Somente depois disso você poderá visualizar seus arquivos usando a interface web.

Siga as etapas abaixo:

- **Passo 1.** Acesse a **interface web OpenWrt Luci** e navegue até `Services > Terminal`

- **Passo 2.** Faça login com suas credenciais do OpenWrt

- **Passo 3.** Inicie o **processo de configuração do rclone** digitando o seguinte

```sh
rclone config
```

- **Passo 4.** Pressione **n** e pressione **Enter** para criar um novo remote.

- **Passo 5.** Digite um nome de sua escolha para o novo remote

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-1.1.png" alt="pir" width="600" height="auto"/></p>

- **Passo 6.** Encontre o **tipo de armazenamento** para o qual você está criando uma conexão remota e insira o número correspondente da longa lista

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-2.png" alt="pir" width="450" height="auto"/></p>

**Observação:** Aqui o número **13** é escolhido para o **Google Drive** como exemplo

- **Passo 7.** Quando for solicitado um **Client ID**, pressione **Enter** para aceitar o padrão

- **Passo 8.** Quando for solicitado um **Client Secret**, pressione **Enter** para aceitar o padrão

- **Passo 9.** Escolha **1** como o escopo que o rclone deve usar ao solicitar acesso ao drive

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-3.png" alt="pir" width="550" height="auto"/></p>

**Observação:** Isso dará acesso total a todos os arquivos no drive

- **Passo 10.** Quando for solicitado o **root folder ID**, pressione **Enter** para aceitar o padrão

- **Passo 11.** Quando for solicitado o **service account credentials JSON file path**, pressione **Enter** para aceitar o padrão

- **Passo 12.** No prompt **Edit advanced config**, pressione **Enter**, o que seleciona **No** por padrão

- **Passo 13.** No menu **Use auto config**, pressione **n** e depois pressione **Enter**

- **Passo 14.** Copie e cole o link mostrado em um navegador web

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-4.png" alt="pir" width="500" height="auto"/></p>

- **Passo 15.** Entre na sua conta Google e **Allow** o acesso

- **Passo 16.** **Copie** o código mostrado na **página de login do Google** e **cole‑o** na **linha de comando** que usamos antes

- **Passo 17.** Em **Configure as a team drive** pressione **Enter** para aceitar o padrão

- **Passo 18.** Pressione **Enter** para confirmar a criação do remote

Você verá a saída a seguir:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-5.png" alt="pir" width="300" height="auto"/></p>

- **Passo 19.** Digite **q** para sair da configuração

- **Passo 20.** Navegue até `NAS > Rclone`, marque a caixa ao lado de **run Rclone as daemon** e clique em **SAVE & APPLY**

- **Passo 21.** Copie o **endereço do rclone**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-6.png" alt="pir" width="600" height="auto"/></p>

- **Passo 22.** Clique em **WEBUI REACT** e uma nova página web será aberta

- **Passo 23.** Cole o **endereço do rclone** copiado anteriormente na primeira coluna em branco

- **Passo 24.** Digite **admin** tanto para o nome de usuário quanto para a senha e pressione **Verify**

Você verá a seguinte saída se a conexão for verificada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-7.png" alt="pir" width="300" height="auto"/></p>

- **Passo 25.** Clique em **Login** e vá para **Explore** no menu lateral

- **Passo 26.** Digite o nome do remote que criamos antes e clique em **Open**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-8.png" alt="pir" width="1000" height="auto"/></p>

Agora você verá todos os seus arquivos disponíveis no seu drive