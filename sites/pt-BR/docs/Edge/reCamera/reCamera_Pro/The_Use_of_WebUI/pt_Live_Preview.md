---
description: recamera_pro_live_preview
title: Pré-visualização ao vivo
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_preview
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_live_preview/
---

## Introdução à Web UI
A reCamera Pro possui uma interface de gerenciamento Web UI integrada, eliminando a necessidade de os usuários instalarem software cliente adicional. Desde que o computador esteja na mesma rede local que a reCamera Pro, você pode acessar diretamente o endereço IP da câmera por meio de um navegador para entrar na página de gerenciamento do dispositivo. O acesso é o seguinte:
```text
http://<reCamera_IP>
```

Após entrar na Web UI, você precisará inserir uma senha no primeiro login. A senha inicial (senha antiga) é `recamera`. Insira a nova senha conforme necessário.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />
Faça login usando a nova senha definida. O nome de usuário é `admin`.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />Após fazer login com a nova senha, os usuários podem realizar pré-visualização em tempo real, tirar fotos, gravar vídeos, alternar fluxos, visualizar informações do dispositivo, definir parâmetros de imagem e configurar definições relacionadas à inferência de IA, facilitando a depuração rápida do dispositivo e a verificação de funções.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />
## Funções principais
### Pré-visualização em tempo real
Os usuários podem visualizar diretamente o vídeo em tempo real da reCamera Pro em seu navegador, o que é conveniente para instalação do dispositivo, ajuste da lente e confirmação da imagem. Clique em "Start" para iniciar a reprodução e visualizar o fluxo ao vivo da câmera.

### Tirar foto
Suporta salvar o quadro atual como uma imagem, adequado para registro de cena, arquivos de depuração ou coleta de dados. Em seguida, os dados da imagem serão baixados automaticamente para o caminho de download padrão do seu navegador.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

### Gravar vídeo
Suporta iniciar ou parar a função de gravação por meio da Web UI. Os vídeos podem ser salvos no armazenamento local do dispositivo para visualização e análise posteriores.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />
Após iniciar a gravação, o botão "Start Recording" mudará para "End Recording". Depois de clicar nele novamente, aguarde um momento para que a reCamera empacote os dados de imagem. O navegador fará automaticamente o download dos dados do fluxo de vídeo em formato MP4 correspondente, que podem ser encontrados no caminho de download padrão do seu navegador.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

### Alternância de fluxo
Suporta alternância entre o fluxo principal e o subfluxo. Os usuários podem selecionar o fluxo apropriado com base na largura de banda da rede, nos requisitos de qualidade de imagem ou nos cenários de pré-visualização.

Por meio da Web UI integrada, a reCamera Pro pode ser acessada e configurada sem software adicional, sendo adequada para implantação rápida, verificação de funções e desenvolvimento de aplicações de câmera de IA de borda.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
