---
description: Conecte a série reCamera 2002 ao Frigate
title: Conectar ao Frigate
keywords:
  - Edge AI
  - reCamera
  - Frigate
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_firgate
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/18/2026
  author: yylin
createdAt: 2026-10-18
updatedAt: 2026-10-18
url: https://wiki.seeedstudio.com/pt-br/recamera_firgate/
---

# Integrar a reCamera ao Frigate

Frigate é uma plataforma de NVR e análise de vídeo de código aberto que pode puxar fluxos de vídeo RTSP padrão para detecção de objetos, gravação e alertas. A série reCamera 2002 pode publicar um fluxo RTSP estável, então integrá-la ao Frigate exige apenas duas etapas: fazer a reCamera publicar um fluxo RTSP e depois adicionar esse fluxo como uma câmera no Frigate.

:::tip
Este guia se aplica apenas à **série reCamera 2002**. A reCamera Pro usa um método de conexão diferente; consulte a documentação de conexão da Pro.
:::

Toda a integração consiste em duas etapas:

1. Ativar o streaming RTSP na reCamera (escolha qualquer um dos três métodos);
2. Adicionar esse fluxo RTSP como uma câmera na interface web do Frigate.

## Pré-requisitos

- Um dispositivo da série reCamera 2002, ligado e conectado à sua LAN via Ethernet / Wi-Fi, com o endereço IP conhecido (este guia usa `192.168.4.82` como exemplo).
- Um host na mesma LAN com o Frigate instalado (uma implantação em Docker é suficiente) e com a interface web acessível.
- Um computador com `ffprobe` / `ffplay` ou VLC instalado, usado para verificar o fluxo (opcional).

## Configurar a saída de fluxo de vídeo da reCamera

A série reCamera 2002 oferece suporte às três formas a seguir de publicar um fluxo RTSP. **Escolha qualquer uma** delas. A URL RTSP resultante é usada exatamente da mesma forma na configuração do Frigate abaixo; basta substituir pelo seu próprio endereço.

| Método | URL do fluxo (parâmetros padrão) | Destaques |
| --- | --- | --- |
| Método 1: Node-RED | `rtsp://admin:admin@<device-ip>:554/live` | Configuração gráfica, sem compilação, incluído no firmware |
| Método 2: publicador em C++ | `rtsp://<device-ip>:8554/live0` | 1080p@30fps, sem autenticação, instalação com um único comando |
| Método 3: Gravar o app ONVIF | `rtsp://<username>:<password>@<device-ip>:8554/onvif` | Detectável por NVR / VMS via ONVIF |

:::note
Todos os três métodos assumem controle exclusivo do pipeline da câmera, portanto apenas um deles pode ser executado por vez. Pare o método em execução antes de alternar para outro.
:::

### Método 1: Ativar o fluxo RTSP com Node-RED

O firmware da reCamera vem com Node-RED e os nós SSCMA (`node-red-contrib-sscma`). O **nó stream** publica o feed da câmera como RTSP. Para o tutorial completo de desenvolvimento com Node-RED (referência de nós, importação de fluxos, implantação etc.) consulte:

[Tutorial de desenvolvimento com Node-RED](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_node-red/)

Passos rápidos:

1. Abra o editor do Node-RED em um navegador: `http://<device-ip>:1880`.
2. Arraste um nó **camera** e um nó **stream** da paleta à esquerda (ambos na categoria `Vision AI`) e conecte a saída da câmera à entrada do stream.
3. Clique duas vezes em cada nó e, no campo `Client`, clique no botão de adicionar para criar um nó de configuração **sscma** (os padrões `host=localhost`, `mqttport=1883`, `apiport=80` são suficientes). Depois de salvar, o triângulo vermelho nos nós desaparece.
4. No nó stream confirme que o protocolo é `RTSP` e ajuste porta, nome da sessão e credenciais conforme necessário (os padrões são porta `554`, sessão `live`, usuário `admin`, senha `admin`).
5. Clique em **Deploy** no canto superior direito.

Você também pode colar o fluxo JSON mínimo abaixo na caixa de diálogo `Import` do Node-RED para criar a ligação em uma única etapa:

```json
[
    {"id":"tab-recamera-rtsp","type":"tab","label":"reCamera RTSP","disabled":false,"info":""},
    {"id":"cfg-sscma","type":"sscma","host":"localhost","mqttport":"1883","apiport":"80","clientid":"recamera","username":"","password":""},
    {"id":"node-camera","type":"camera","z":"tab-recamera-rtsp","name":"camera","client":"cfg-sscma","audio":false,"volume":80,"option":0,"fps":15,"mirror":false,"flip":false,"x":220,"y":200,"wires":[["node-stream"]]},
    {"id":"node-stream","type":"stream","z":"tab-recamera-rtsp","name":"stream","protocol":0,"port":554,"session":"live","username":"admin","password":"admin","onvif":false,"client":"cfg-sscma","x":460,"y":200,"wires":[]}
]
```

Após implantar, verifique o fluxo a partir de um computador (a saída é 1080p; o limite recomendado para streaming via Node-RED é 1080p@15fps):

```bash
ffplay rtsp://admin:admin@192.168.4.82:554/live
```

A URL a ser usada no Frigate é: `rtsp://admin:admin@<device-ip>:554/live`.

### Método 2: Implantar o publicador RTSP em C++

A comunidade fornece um publicador pronto para a reCamera 2002 (SG2002 / CV181X, riscv64) que corrige a limitação de 10 fps do `video_demo` padrão e gera um fluxo RTSP **1920x1080 H.264 30fps**. Não requer compilação e é instalado com um único comando. Repositório do projeto:

[Repositório do publicador RTSP em C++](https://github.com/yyling0101-a11y/recamera-rtsp30.git)

Como a reCamera não consegue acessar o GitHub diretamente, execute o script de instalação a partir de um computador que tenha acesso ao GitHub e consiga alcançar o dispositivo pela rede. O script solicita o IP do dispositivo, o nome de usuário e a senha de SSH, depois envia o binário para o dispositivo, interrompe os serviços que ocupam a câmera (Node-RED / sscma), configura a inicialização automática e inicia o fluxo:

```bash
# Linux
curl -fLO https://raw.githubusercontent.com/yyling0101-a11y/recamera-rtsp30/main/scripts/install-linux.sh
chmod +x install-linux.sh
./install-linux.sh
```

```bash
# Windows PowerShell
Invoke-WebRequest https://raw.githubusercontent.com/yyling0101-a11y/recamera-rtsp30/main/scripts/install-windows.ps1 -OutFile install-windows.ps1
powershell -ExecutionPolicy Bypass -File .\install-windows.ps1
```

Depois de instalado, o fluxo fica disponível em `rtsp://<device-ip>:8554/live0` (sem autenticação). Verifique-o a partir de um computador:

```bash
ffplay rtsp://192.168.4.82:8554/live0
```

No dispositivo você pode gerenciar o serviço e inspecionar seu estado com:

```bash
/etc/init.d/S99rtsp30 start|stop|restart   # service control (stop uses SIGTERM; never kill -9)
sh /root/rtsp30-status.sh                  # process / pipeline / port / measured fps
tail -f /tmp/rtsp30.log                    # runtime log
```

:::caution
Este publicador é mutuamente exclusivo com os métodos Node-RED e ONVIF: instalá-lo desativa os serviços Node-RED e sscma e assume controle exclusivo da porta 8554 e do pipeline da câmera. Para desinstalar, execute `sh /root/uninstall-rtsp30.sh`; o comportamento padrão retorna após uma reinicialização.
:::

### Método 3: Gravar o app ONVIF no dispositivo

Usando o software SenseCraft Solution da Seeed você pode gravar um app ONVIF na reCamera, de modo que o dispositivo forneça um fluxo RTSP e possa ser descoberto automaticamente por plataformas NVR / VMS compatíveis com ONVIF. Para as etapas de gravação e configuração, consulte:

[Guia de gravação e configuração ONVIF](https://wiki.seeedstudio.com/pt-br/recamera_onvif/)

Após a gravação, a URL do fluxo é `rtsp://<username>:<password>@<device-ip>:8554/onvif`, em que o nome de usuário e a senha são as credenciais definidas durante a gravação.

### Verificar o fluxo

Independentemente do método escolhido, confirme que o fluxo funciona a partir de um computador antes de configurar o Frigate. Diferentes métodos de configuração correspondem a diferentes URLs de fluxo de vídeo.

```bash
# Inspect codec / resolution / frame rate
ffprobe -rtsp_transport tcp rtsp://192.168.4.82:8554/live0

# Play it directly
ffplay  -rtsp_transport tcp rtsp://192.168.4.82:8554/live0
```

Você deve ver um fluxo de vídeo `h264`, `1920x1080` (15fps para o Método 1, 30fps para os Métodos 2 e 3).

## Adicionar a câmera na interface do Frigate

O passo a passo abaixo usa como exemplo o endereço do Método 2 `rtsp://192.168.4.82:8554/live0`. Se você usou o Método 1 ou o Método 3, substitua pela URL correspondente da tabela acima (inclua o nome de usuário e a senha na URL quando necessário).

1. Abra a interface web do Frigate e faça login. Se nenhuma câmera estiver configurada ainda, o painel exibirá "No Cameras Configured"; clique em **Add Camera** para abrir o assistente. Você também pode acessá-lo em **Settings → Global configuration → Camera management** e clicar em **Add New Camera**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_no_camera.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_management.png" /></div>

2. No assistente "Add Camera", insira um nome para a câmera e o IP do dispositivo. Em **Stream Detection Method** escolha **Manual selection**, defina **Camera Brand** como **Other** e então cole a URL RTSP da reCamera em **Custom Stream URL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_add_camera_rtsp.png" /></div>

:::tip
Se você usou o Método 3 (ONVIF), pode em vez disso manter o padrão **Probe camera**, preencher o nome de usuário / senha e a porta ONVIF e deixar o Frigate descobrir as URLs de fluxo via ONVIF. Inserir a URL RTSP manualmente funciona para todos os três métodos.
:::

3. Clique em **Continue**. O Frigate se conecta ao endereço e testa o fluxo. Em caso de sucesso, ele mostra um quadro junto com a resolução, taxa de quadros e codec; confirme e clique em **Continue** novamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_test_ok.png" /></div>

4. Na página de configuração do fluxo, ative os papéis de que você precisa para esse fluxo: ligue **detect** (detecção de objetos) e **record** (gravação). Em seguida clique em **Next**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_roles.png" /></div>

5. A etapa final valida o fluxo antes de salvar e informa a largura de banda estimada, além de observações sobre codec / áudio. Quando o status indicar **Connected**, clique em **Save New Camera**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_validate.png" /></div>

6. Depois de salvar, a câmera aparece na lista de gerenciamento de câmeras com seu estado definido como **On**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_saved.png" /></div>


7. Volte ao painel para ver o feed ao vivo da reCamera; o Frigate agora executa detecção de objetos e gravação nesse stream.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_live_view.png" /></div>

### Opcional: ajuste os parâmetros de detecção

Em **Settings → Camera configuration → `camera name` → Object detection** você pode ajustar a resolução de detecção e a taxa de quadros. A reCamera gera saída em 1080p, mas a detecção não precisa da resolução completa: manter os padrões de 1280x720 a 5 fps oferece detecção estável na maioria das cenas, mantendo o uso de CPU / GPU do host baixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_detect_settings.png" /></div>

As etapas de interface acima são equivalentes a escrever o seguinte em `config.yaml`, que usuários familiarizados com o arquivo de configuração podem editar diretamente:

```yaml
go2rtc:
  streams:
    recamera2002:
      - rtsp://192.168.4.82:8554/live0

cameras:
  recamera2002:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://192.168.4.82:8554/live0
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
