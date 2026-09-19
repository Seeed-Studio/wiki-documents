---
description: Implantar ONVIF na reCamera
title: Implantar ONVIF na reCamera
keywords:
  - reCamera
  - onvif
slug: /recamera_onvif
sku: 102991896, 108990119, 100029708
sidebar_position: 6
last_update:
  date: 9/14/2026
  author: yylin
createdAt: '2026-09-14'
updatedAt: '2026-09-14'
url: https://wiki.seeedstudio.com/pt-br/recamera_onvif/
---

# Implantar ONVIF na reCamera

## Introdução

ONVIF é um padrão de interoperabilidade amplamente utilizado para dispositivos de segurança. Depois de implantar esta solução, clientes compatíveis com ONVIF na rede local — como Home Assistant, Frigate, um NVR ou um VMS — podem descobrir automaticamente a reCamera e obter suas informações de dispositivo, endereço do fluxo de vídeo e credenciais de login.

O próprio vídeo ainda é entregue via RTSP: o cliente usa ONVIF para encontrar a reCamera e, em seguida, usa o endereço RTSP retornado para reproduzir ou gravar o fluxo. Todo o processo é executado na sua rede local e não requer um serviço de nuvem adicional.

Este guia orienta você pelos seguintes passos:

1. Implantar o serviço ONVIF na reCamera.
2. Confirmar que o fluxo de vídeo RTSP é reproduzido corretamente.
3. Adicionar a reCamera ao Home Assistant, a um NVR ou a um VMS por meio de ONVIF.

## O que você precisa

Antes de começar, prepare os seguintes dispositivos e certifique-se de que estejam conectados à mesma rede local.

| Dispositivo | Finalidade |
| --- | --- |
| Uma reCamera | Executa os serviços ONVIF e RTSP. São compatíveis os modelos reCamera 2002 series, Gimbal e HQ PoE. |
| Um computador Linux | Instala e executa o SenseCraft Solution para implantar a solução. O exemplo abaixo usa Ubuntu 24.04 x86_64. |
| Home Assistant, um NVR ou um VMS (opcional) | Descobre a reCamera e exibe ou grava seu vídeo. |

> **Observação sobre rede:** O modelo HQ PoE não oferece suporte a Wi‑Fi. Conecte-o a um switch compatível com PoE para alimentação e acesso à rede. Independentemente do modelo utilizado, garanta que a reCamera e o cliente que a descobre estejam na mesma rede local. A descoberta entre sub-redes geralmente exige configuração adicional de rede.

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div>
  </td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
    </div>
  </td>
 </tr>
</table>


## Instalar SenseCraft Solution

Abra a [página de download do SenseCraft Solution](https://www.seeed.cc/category/reference-designs), clique em **Deploy** e escolha o instalador que corresponde ao sistema operacional e à arquitetura de processador do seu computador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-2.png" /></div>

O exemplo a seguir usa Ubuntu 24.04 x86_64. Abra um terminal e, em seguida, baixe e instale o aplicativo:

```bash
wget https://appcenter.seeed.xyz/SenseCraft.Solution/SenseCraft.Solution_amd64.deb

sudo dpkg -i ./SenseCraft.Solution_amd64.deb
```

Após a instalação, execute o seguinte comando para iniciar o SenseCraft Solution:

```bash
sensecraft-solution
```

A tela inicial do SenseCraft Solution aparece quando o aplicativo é iniciado:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-11.png" /></div>

## Implantar o serviço ONVIF na reCamera

### Atualizar o SenseCraft Solution

Para garantir que a versão mais recente da solução ONVIF esteja disponível, atualize primeiro sua lista local de soluções. Selecione **System Settings** na barra lateral, encontre a opção de atualização e conclua a atualização antes de continuar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-12.png" /></div>
### Implantar a solução ONVIF

1. Selecione **Technical Demos** na barra lateral.
2. Selecione **reCamera** no filtro de dispositivos.
3. Encontre e abra a solução **reCamera ONVIF Gateway**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-13.png" /></div>

Abra a solução, selecione a reCamera de destino e conclua a configuração de conexão conforme as instruções.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-14.png" /></div>

Confirme que os detalhes do dispositivo estão corretos e clique em **Deploy**. Aguarde até que a tarefa de implantação indique sucesso. A reCamera agora tem o serviço ONVIF ativado e fornece um fluxo de vídeo RTSP autenticado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-15.png" /></div>

### Verificar o fluxo de vídeo

Após uma implantação bem-sucedida, reproduza o fluxo de vídeo RTSP antes de adicionar o dispositivo ao Home Assistant, Frigate, a um NVR ou a um VMS. Isso ajuda a descartar primeiro problemas de rede ou do fluxo de vídeo.

Você pode testar o fluxo com o VLC ou com `ffplay` no Ubuntu. Se `ffplay` não estiver instalado, instale primeiro o FFmpeg:

```bash
sudo apt install -y ffmpeg

ffplay rtsp://admin:recamera.1@<reCamera_IP>:8554/onvif
```

Substitua `<reCamera_IP>` pelo endereço IP real da reCamera na sua rede local. Por exemplo, se o endereço IP for `192.168.42.1`, execute:

```bash
ffplay rtsp://admin:recamera.1@192.168.42.1:8554/onvif
```

Se você conseguir ver o vídeo ao vivo, tanto o serviço ONVIF quanto o fluxo RTSP estão funcionando corretamente. Em seguida, você pode adicionar uma câmera ONVIF no seu cliente. Normalmente, selecione **Auto Discover** ou **Add ONVIF Device** e, depois, insira o endereço IP, o nome de usuário e a senha da reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-9.png" /></div>


## Credenciais padrão e segurança

A autenticação vem ativada por padrão. As credenciais padrão são:

| Item | Valor padrão |
| --- | --- |
| Nome de usuário | `admin` |
| Senha | `recamera.1` |
| Caminho RTSP | `/onvif` |

> **Importante:** A senha padrão se destina apenas à verificação inicial. Se outras pessoas puderem acessar a rede da reCamera, altere a senha antes do uso em produção para evitar acesso não autorizado ao fluxo de vídeo.

Para alterar o nome de usuário ou a senha, clone o [reCamera SDK](https://github.com/yyling0101-a11y/reCamera_2002w_sdk) do GitHub e localize a configuração relevante em `examples/camera_onvif_rtsp`:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-10.png" /></div>

Atualize a configuração e reconstrua o projeto. Para instruções detalhadas de compilação, consulte o [README](https://github.com/yyling0101-a11y/reCamera_2002w_sdk/blob/main/README.md) do repositório. Transfira o executável compilado para a reCamera, torne-o executável e execute-o para usar as novas credenciais.

## Solução de problemas

| Problema | Solução |
| --- | --- |
| O cliente não consegue encontrar a reCamera | Certifique-se de que a reCamera e o Home Assistant, Frigate, o NVR ou o VMS estejam na mesma rede local. Confirme também que a implantação foi concluída com sucesso. |
| O fluxo RTSP não é reproduzido | Verifique se o comando usa o endereço IP real da reCamera. Confirme o nome de usuário, a senha e o caminho: `admin`, `recamera.1` e `/onvif`. |
| O modelo HQ PoE não consegue se conectar à rede | Confirme se o switch é compatível com PoE e se o cabo Ethernet fornece tanto alimentação quanto conectividade de rede. |
| A solução ONVIF ainda não está disponível após uma atualização | Reinicie o SenseCraft Solution, confirme que a atualização da lista de soluções foi concluída e, em seguida, selecione **Technical Demos > reCamera**. |

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nosso produto. Oferecemos vários canais de suporte para tornar sua experiência o mais tranquila possível.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
