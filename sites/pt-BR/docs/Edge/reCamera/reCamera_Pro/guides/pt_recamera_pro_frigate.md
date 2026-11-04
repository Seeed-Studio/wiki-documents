---
description: Conectar a reCamera Pro ao Frigate
title: Conectar reCamera Pro ao Frigate
keywords:
  - Edge AI
  - reCamera
  - Frigate
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_pro_frigate
sidebar_position: 1
last_update:
  date: 10/22/2026
  author: yylin
createdAt: 2026-10-22
updatedAt: 2026-10-22
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_frigate/
---

# Integrar a reCamera Pro ao Frigate

Frigate é uma plataforma de NVR e análise de vídeo de código aberto que pode puxar fluxos de vídeo RTSP padrão para detecção de objetos, gravação e alertas. A reCamera Pro pode publicar um fluxo RTSP diretamente pela sua interface web, então integrá-la ao Frigate exige apenas duas etapas: habilitar o streaming RTSP na reCamera Pro e depois adicionar esse fluxo como uma câmera no Frigate.

:::tip
Este guia se aplica à **reCamera Pro**. A série reCamera 2002 usa um método de conexão diferente; consulte a documentação de conexão da reCamera 2002.
:::

Toda a integração consiste em duas etapas:

1. Habilitar o fluxo RTSP na interface web da reCamera Pro;
2. Adicionar esse fluxo RTSP como uma câmera na interface web do Frigate.

## Pré-requisitos

- Um dispositivo reCamera Pro, ligado e conectado à sua LAN, com o endereço IP conhecido (este guia usa `192.168.3.207` como exemplo).
- O login da interface web do dispositivo (nome de usuário padrão `admin`; a senha é a definida no dispositivo, `recamera.1` neste guia).
- Um host na mesma LAN com o Frigate instalado (uma implantação em Docker é suficiente) e com a interface web acessível.
- Um computador com `ffprobe` / `ffplay` ou VLC instalado, usado para verificar o fluxo (opcional).

## Habilitar o streaming RTSP na reCamera Pro

1. Abra a interface web da reCamera Pro em um navegador, por exemplo `https://192.168.42.1/`, e faça login com o nome de usuário e a senha do dispositivo.
2. Abra **Live View** na navegação à esquerda.
3. No painel de configurações à direita, selecione a aba **Stream Settings**.
4. Ative o interruptor **Streaming Settings**. O painel então mostra o protocolo de streaming (**RTSP**), a **Stream URL** e as credenciais de **Authentication**. Mantenha os padrões ou ajuste-os e clique em **Apply Settings**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/pro_stream_settings.png" alt="reCamera Pro Development Skill workflow" /></div>

5. Copie a **Stream URL** exibida no painel; este é o endereço que o Frigate irá puxar. Com as configurações padrão, ele é:

```
rtsp://admin:admin@<device-ip>:554/main
```

:::note
O nome de usuário / senha RTSP no painel Stream Settings são independentes do login da interface web. Neste guia, a interface web usa `admin` / `recamera.1`, enquanto o fluxo RTSP usa `admin` / `admin`. Se você alterar as credenciais RTSP aqui, use os novos valores no Frigate.
:::

A reCamera Pro expõe dois fluxos:

| Fluxo | URL | Formato padrão |
| --- | --- | --- |
| Principal | `rtsp://<user>:<password>@<device-ip>:554/main` | 3840x2160 (4K) @ 30fps, H.264, áudio G.711A |
| Secundário | `rtsp://<user>:<password>@<device-ip>:554/sub` | 640x480, H.265 |

Para o Frigate, o fluxo principal é a escolha certa: use-o tanto para detecção quanto para gravação. Verifique-o a partir de um computador antes de configurar o Frigate:

```bash
# Inspect codec / resolution / frame rate
ffprobe -rtsp_transport tcp "rtsp://admin:admin@192.168.3.207:554/main"

# Play it directly
ffplay  -rtsp_transport tcp "rtsp://admin:admin@192.168.3.207:554/main"
```

Você deverá ver um fluxo de vídeo `h264`, `3840x2160`, 30fps, além de uma trilha de áudio `pcm_alaw`.

## Adicionar a câmera na interface do Frigate

1. Abra a interface web do Frigate e faça login. Se nenhuma câmera estiver configurada ainda, o painel exibirá "No Cameras Configured"; clique em **Add Camera** para abrir o assistente. Você também pode acessá-lo em **Settings → Global configuration → Camera management** e clicar em **Add New Camera**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_no_camera.png" alt="reCamera Pro Development Skill workflow" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_management.png" alt="reCamera Pro Development Skill workflow" /></div>

2. No assistente "Add Camera", insira um nome para a câmera e o IP do dispositivo. Para **Stream Detection Method**, escolha **Manual selection**, defina **Camera Brand** como **Other** e então cole a URL do fluxo principal da reCamera Pro (incluindo as credenciais RTSP) em **Custom Stream URL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_add_camera_rtsp.png" alt="reCamera Pro Development Skill workflow" /></div>

3. Clique em **Continue**. O Frigate se conecta ao endereço e testa o fluxo. Em caso de sucesso, ele mostra um quadro junto com a resolução, taxa de quadros, codec e áudio (3840x2160, 30 FPS, h264, pcm_alaw); confirme e clique em **Continue** novamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_test_ok.png" alt="reCamera Pro Development Skill workflow" /></div>

4. Na página de configuração do fluxo, habilite os papéis de que você precisa para esse fluxo: ative **detect** (detecção de objetos) e **record** (gravação). Deixe **audio** desativado (veja a observação abaixo). Em seguida, clique em **Next**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_roles.png" alt="reCamera Pro Development Skill workflow" /></div>

5. A etapa final valida o fluxo antes de salvar. Ela informa a largura de banda estimada (cerca de 3,4 GB por hora para o fluxo principal 4K) e duas dicas que você pode simplesmente reconhecer:
   - *The AAC audio codec is required to support audio in recordings*: o fluxo principal da Pro carrega áudio G.711A (`pcm_alaw`), que o Frigate não consegue armazenar em gravações. Como o papel **audio** está desativado, as gravações simplesmente não contêm som; nada mais é afetado.
   - *A resolution of 3840x2160 may cause increased resource usage*: esperado para um fluxo 4K. A detecção é executada em um quadro reduzido para 1280x720 (veja abaixo), e a decodificação com aceleração de hardware mantém a carga do host moderada.

   Quando o status indicar **Connected**, clique em **Save New Camera**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_validate.png" alt="reCamera Pro Development Skill workflow" /></div>

6. Depois de salvar, a câmera aparece na lista de gerenciamento de câmeras com seu estado definido como **On**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_saved.png" alt="reCamera Pro Development Skill workflow" /></div>

7. Volte ao painel para ver o feed ao vivo da reCamera Pro; o Frigate agora executa detecção de objetos e gravação nesse fluxo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_live_view.png" alt="reCamera Pro Development Skill workflow" /></div>

### Opcional: ajustar os parâmetros de detecção

Em **Settings → Camera configuration → `<camera name>` → Object detection** você pode ajustar a resolução e a taxa de quadros de detecção. A Pro gera saída em 4K, mas a detecção não precisa da resolução completa: manter os padrões de 1280x720 a 5 fps oferece detecção estável na maioria dos cenários, mantendo o uso de CPU / GPU do host baixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_detect_settings.png" alt="reCamera Pro Development Skill workflow" /></div>

:::tip
Se o seu host estiver com dificuldade para decodificar o fluxo 4K, reduza a resolução do fluxo principal na interface web da reCamera Pro (Live View → Basic Settings) ou adicione o fluxo secundário (`rtsp://<user>:<password>@<device-ip>:554/sub`) como uma segunda entrada dedicada ao papel **detect**, mantendo o fluxo principal para **record**.
:::

As etapas na interface acima são equivalentes a escrever o seguinte em `config.yaml`, que usuários familiarizados com o arquivo de configuração podem editar diretamente:

```yaml
go2rtc:
  streams:
    recamera_pro:
      - rtsp://admin:admin@192.168.3.207:554/main

cameras:
  recamera_pro:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://admin:admin@192.168.3.207:554/main
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
```

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
