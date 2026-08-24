---
title: Implantação local do Picoclaw na reCamera
description: Este caso de aplicação demonstra o processo e o uso da implantação local do Picoclaw na reCamera.
keywords:
  - reCamera
  - Edge AI
slug: /recamera_picoclaw
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif
sidebar_position: 11
last_update:
  date: 2026-06-24
  author: Sizhao zhou
createdAt: '2026-06-24'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/pt-br/recamera_picoclaw/
---


## 1. Introdução
Acreditamos que muitas pessoas querem implementar suas próprias ideias na reCamera, mas não conseguem devido à falta de habilidades de programação. Embora forneçamos o node-red, que é muito amigável para iniciantes, suas funções são relativamente simples e não conseguem atender a requisitos complexos. Para suprir essas necessidades, oferecemos um caso de implantação local do Picoclaw na reCamera. Com o Picoclaw, você pode deixá-lo escrever código e depurar dispositivos para você—sem precisar fazer isso por conta própria. Claro, ele não só pode ajudar você a escrever código, como também controlar diretamente os módulos de hardware onboard. Há muito mais formas de uso esperando para você explorar!!

## 2. Preparação de Hardware

- Um reCamera Gimbal
- Um computador

<table align="center">
 <tr>
  <th>reCamera Gimbal</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 3. Demonstração de Efeitos
### 3.1 Fazer o Gimbal Olhar ao Redor do Ambiente 
![look around](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_lookaround.gif)
### 3.2 Controlar o Hardware Onboard por Linguagem Natural - Controlar a Luz LED
![led](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif)
### 3.3 Deixar o Agente Escrever e Executar Scripts Automaticamente
![script](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_write_code.gif)

## 4. Tutorial de Implantação
Como o ***openclaw*** requer uma grande quantidade de memória (>=2GB) para ser executado, optamos por implantar uma versão leve do Claw, chamada ***picoclaw***, que precisa de apenas 10MB de memória para rodar e, portanto, é muito adequada para este projeto.
### 4.1 Baixar o Código-Fonte do picoclaw
Clique no link para baixar o pacote compactado do código-fonte do picoclaw (suporta reCamera com arquitetura riscv64): [picoclaw source code compressed package](https://github.com/sipeed/picoclaw/releases/download/nightly/picoclaw_Linux_riscv64.tar.gz)


### 4.2 Conectar à reCamera via SSH
Após conectar à reCamera, insira os seguintes comandos para acessar o diretório ***userdata*** e criar uma pasta para armazenar o código-fonte do picoclaw.

  ```
  ssh recamera@[IP address of reCamera]
  cd /userdata
  mkdir picoclaw
  ```

### 4.3 Enviar o Pacote Compactado do Código-Fonte para a reCamera
Envie o pacote compactado do código-fonte do picoclaw para a pasta ***/userdata/picoclaw/*** da reCamera.

  ```
  scp picoclaw_Linux_riscv64.tar.gz recamera@[IP address of reCamera]:/userdata/picoclaw
  ```

### 4.4 Descompactar o Pacote Compactado do Código-Fonte
Insira o seguinte comando na reCamera para descompactar o pacote compactado do código-fonte do picoclaw.

  ```
  tar -axvf picoclaw_Linux_riscv64.tar.gz
  ```

### 4.5 Iniciar a Interface Web do picoclaw
Insira o seguinte comando na reCamera para iniciar a interface web do picoclaw.

  ```
  ./picoclaw-launcher -no-browser -public
  ```
Após o serviço iniciar, abra um navegador e acesse ***http://[endereço IP da reCamera]:18800***, como mostrado na figura abaixo.
![ip_login](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_login.png)


## 5. Configurar o Modelo Grande do picoclaw
Após definir a senha na interface web, configure o modelo grande do picoclaw seguindo os passos abaixo.

### 5.1  Encontre a opção ***Model*** na barra lateral esquerda e clique para entrar.

### 5.2 Role para baixo até encontrar o modelo ***deepseek-chat*** e clique no botão ***Edit***, como mostrado na figura abaixo.
![model_edit](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_model_edit.png)

### 5.3 Insira sua API Key na caixa de entrada API-KEY e clique no botão ***Save*** para salvar a configuração.

### 5.4 Após a configuração bem-sucedida, clique no botão ***Start Service*** no canto superior direito para iniciar o modelo.
![start_service](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_server_start.png)

### 5.5 Clique na opção ***Chat*** à esquerda para iniciar uma conversa com o modelo.

## 6. Conectar ao Robô do QQ
Após definir a senha na interface web, conecte-se ao robô do QQ seguindo os passos abaixo.
### 6.1 Primeiro, acesse a [QQ Open Platform](https://q.qq.com/#/) e faça login na sua conta QQ.

### 6.2  Clique na opção ***Robot*** à esquerda e clique no botão ***Create Robot***, como mostrado na figura abaixo.
![create_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_creat_qq_bot.png)

### 6.3 Após criar o robô, configure-o de acordo com o tutorial e obtenha o respectivo Robot ID e Secret Key. Em seguida, volte para a interface web, encontre a opção ***Channel*** à esquerda, role para baixo até encontrar ***QQ***, clique para conectar, preencha o ID e a Secret Key e clique em Save.
![qq_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_config_qq.png)



## 7. Crie Sua Própria Skill
No diretório /home/recamera, você pode encontrar a pasta ***.picoclaw***. Após entrar na pasta, você encontrará ***workspace*** e, dentro dela, uma pasta ***skill***—é aqui que você cria suas próprias skills.

### 7.1 Formato de Criação de Skill
```
skill-name/
├── SKILL.md            # Required - Main skill file
├── scripts/            # Optional - Executable scripts
├── references/         # Optional - Reference documents (loaded on demand)
└── assets/             # Optional - Resource files for output (templates, images, etc.)
```


## 8. Importar Skills da reCamera
Criamos algumas skills simples especificamente adaptadas para a reCamera--->[Skill Link](https://drive.google.com/drive/folders/1bh-GXnF8QEMQW8UpO1aNcdOcblAF6B5H)
Você verá os três arquivos mostrados na figura abaixo:
![skill_files](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_skill.png)

- ***recamera_read_manual***
Lê os recursos de hardware da reCamera, semelhante a uma base de conhecimento para a reCamera—basta colocá-lo na pasta ***skill***.

- ***recamera_video_record***
Uma skill para gravar vídeos e tirar fotos (implementada com base em node-red)—basta colocá-la na pasta ***skill***.

- ***SKILL.md***
Arquivo principal que descreve os recursos gerais de hardware da reCamera Gimbal—coloque-o em ***/skill/hardware*** para sobrescrever o arquivo original.


## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Fornecemos vários métodos de suporte para garantir que sua experiência ao usar nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>