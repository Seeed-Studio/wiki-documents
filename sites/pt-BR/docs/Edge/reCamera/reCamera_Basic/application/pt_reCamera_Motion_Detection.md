---
description: Esta é uma detecção de movimento para uma área selecionada baseada em recamera2002
title: Detecção de movimento para uma área selecionada baseada em recamera2002
keywords:
  - reCamera
  - Detecção de Movimento
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155236.png
slug: /recamera_motion_detection
sku: 102991897, 100029708, 108990120
sidebar_position: 13
last_update:
  date: 07/03/2026
  author: Qiyao Lin
createdAt: '2026-07-03'
updatedAt: '2026-07-06'
url: https://wiki.seeedstudio.com/pt-br/reCamera/reCamera_Basic/application/recamera_motion_detection/
---

## I. Introdução ao Projeto

Esta é uma detecção de movimento para uma área selecionada baseada em recamera2002. Todo o poder computacional para essa detecção é realizado dentro da reCamera, sem depender de computação externa. O sistema externo só precisa renderizar a imagem e selecionar a área de detecção.
Você pode clonar o demo a partir do seguinte repositório GitHub:

[reCamera Motion Detection Demo](https://github.com/yyling0101-a11y/recamera_motion_detection)

## II. Guia de Configuração da reCamera

Depois de compilar o programa executável motion_detection em um sistema Linux, envie-o para a reCamera via SCP. Em seguida, após acessar remotamente o terminal SSH da reCamera, execute o programa diretamente usando o seguinte comando:

```bash
./motion_detection
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155625.png" /></div>

## III. Configuração da Interface de Renderização no Windows

No mesmo diretório, há um diretório `windows_ui`. Este é o projeto de renderização da interface do Windows. Recomenda-se configurar o ambiente usando um ambiente virtual conda.

```bash
conda create -n motion_detection python=3.10

conda activate motion_detection

# Download corresponding environment dependencies
cd ./windows_ui
pip install -r requirements.txt
```

Quando o ambiente estiver pronto, execute diretamente o arquivo `app.py`:

```bash
python app.py --rtsp=rtsp://192.168.42.1:8554/live0 --api=http://192.168.42.1:8080
```

A interface após a inicialização é:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703153920.png" /></div>
Depois de inserir a URL correta, você pode clicar em "Connect RTSP" para obter o fluxo de vídeo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703154419.png" /></div>

### 1. Definir Área de Detecção

Em "Area Editing" à esquerda, selecione o tipo de área. Existem dois tipos: um é o tipo "Detection Area", usado para definir a região de detecção, e o outro é "Whitelist", usado para definir áreas dentro da região de detecção onde a detecção não deve ocorrer, filtrando itens que possam se mover naturalmente dentro da área de detecção, como galhos de árvores balançando, fontes, etc.
Após selecionar o tipo e inserir o nome da área, você pode clicar na imagem para selecionar pontos. Clique com o botão direito para desfazer um ponto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703154948.png" /></div>

Depois de selecionar os pontos, clique em "Complete Current Polygon".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155033.png" /></div>

### 2. Ativar Caixa de Detecção

Em seguida, selecione "Upload to Device" para salvar as configurações da interface.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155107.png" /></div>

Se for detectado movimento na imagem, uma mensagem de alerta aparecerá no canto inferior esquerdo e uma caixa de movimento será desenhada na imagem.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155236.png" /></div>

Após reiniciar a interface do Windows, as caixas selecionadas existentes podem ser perdidas. Você precisa clicar em "Read from Device" para recuperar as caixas de detecção existentes. Se a câmera atual se mover ou a cena mudar, e você não precisar modificar a área de detecção, pode clicar em "Reconstruct Background" para redefinir a imagem estática.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
