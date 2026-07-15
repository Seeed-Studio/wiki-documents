---
title: Transmissão de Vídeo em Tempo Real de RTSP para WebRTC com reCamera
description: Este documento apresenta como usar a reCamera para transmitir vídeo para um PC via protocolo RTSP e converter o stream RTSP para o formato WebRTC no PC, permitindo a reprodução de vídeo em tempo real e baixa latência em um navegador.
keywords:
  - reCamera
  - RTSP
  - WebRTC
slug: /rtsp_to_webrtc_with_recamera
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 15
last_update:
  date: 06/10/2026
  author: Xuanjun Zhu
createdAt: '2026-06-10'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/pt-br/rtsp_to_webrtc_with_recamera/
---

# Transmissão de Vídeo em Tempo Real de RTSP para WebRTC com reCamera

## Introdução

Quando você quiser **integrar o stream de vídeo da reCamera à sua própria aplicação Web** ou **visualizar remotamente** o feed da câmera com baixa latência por meio de um navegador, você pode usar este demo como referência.
Este projeto transmite o vídeo da reCamera por meio do **protocolo RTSP**, envia os resultados de inferência para o PC via nó **mqtt out**, depois mescla o stream RTSP com os resultados de inferência no PC e o converte para o formato **WebRTC**, permitindo que qualquer navegador reproduza o stream de vídeo com inferência em tempo real sem plugins. Ele oferece uma forma de **“libertar” o stream de vídeo da reCamera** — uma vez que o stream de vídeo possa ser enviado via RTSP, você pode facilmente:

- **Integrar à sua própria aplicação Web ou plataforma de gerenciamento**: Incorporar o vídeo ao vivo em dashboards existentes, sistemas de monitoramento ou plataformas de IoT.

- **Agregação de vídeo de múltiplos dispositivos**: Visualizar múltiplos feeds de reCamera simultaneamente na mesma página web para construir um videowall de vigilância multicanal.

- **Acesso remoto e travessia de redes diferentes**: Por meio da capacidade de travessia de NAT do WebRTC, você pode visualizar o feed ao vivo da reCamera com baixa latência mesmo em ambientes de rede diferentes.

- **Fornecer um canal de transporte para visualização de resultados de inferência de IA**: Após a reCamera realizar inferência de IA na borda, envie os resultados de inferência junto com o vídeo, e o PC poderá exibir em tempo real, no navegador, os resultados da análise de IA, adequado para construir aplicações de inspeção remota, segurança inteligente e outras.

Este demo demonstra uma abordagem para **transformar a reCamera de um dispositivo visual independente em uma fonte de vídeo que pode ser integrada por qualquer sistema Web**. Esperamos que este projeto inspire você a explorar mais possibilidades de combinar a reCamera com tecnologias Web.
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.gif" />
</div>
### Arquitetura do Sistema

Todo o sistema é concluído de forma colaborativa por duas partes: **lado reCamera** e **lado servidor PC**. A arquitetura é a seguinte:

| Etapa | Local de Execução | Tecnologia/Protocolo Utilizado | Descrição |
|------|----------|-----------------|------|
| Captura e Codificação de Vídeo | reCamera | Câmera + Codificação H.264 | Captura o vídeo e o codifica |
| Inferência de IA | reCamera | Modelo YOLO11n | Executa inferência de detecção de objetos de IA nos frames de vídeo |
| Streaming RTSP | reCamera | Protocolo RTSP (Porta 554) | Transmite o vídeo via protocolo RTSP para a rede |
| Transmissão de Resultados de Inferência via MQTT | reCamera → Servidor PC | Protocolo MQTT (Porta 1883) | Transmite resultados de inferência (caixas delimitadoras, rótulos) para o PC via MQTT |
| Recepção e Decodificação de Vídeo | Servidor PC | OpenCV + FFmpeg | Recebe o stream RTSP e o decodifica em frames brutos |
| Fusão de Resultados de Inferência e Vídeo | Servidor PC | detection_store + OpenCV | Sobrepõe caixas de detecção de IA e rótulos sobre os frames de vídeo |
| Codificação e Transmissão WebRTC | Servidor PC | aiortc | Codifica os frames de vídeo fundidos para o formato WebRTC e os transmite |
| Reprodução em Tempo Real | Navegador no PC | WebRTC | Reproduz o vídeo com resultados de inferência no navegador com baixa latência |

## Preparação de Hardware

Para executar este demo, você precisa do seguinte hardware:

- **Um dispositivo reCamera** (suporta todas as variantes de reCamera)
- **Um computador PC** (para executar o serviço de ponte WebRTC, deve estar na mesma LAN que a reCamera)

Você pode escolher **qualquer versão da reCamera** com base nas suas necessidades de implantação:

- reCamera 2002 Series (Wi-Fi)
- reCamera Gimbal
- reCamera HQ PoE (Ethernet + PoE)

> **Observação:**
> A versão PoE não suporta Wi-Fi e deve ser conectada à mesma rede local por meio de um switch compatível com PoE.

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## Configurando o Demo

### Etapa 1: Configurar a reCamera

Primeiro, siga o guia oficial de primeiros passos para concluir a configuração básica da reCamera: [Introdução à reCamera](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/)

Após concluir a configuração inicial, certifique-se de que o dispositivo esteja ligado e devidamente conectado à rede.
Em seguida, acesse o endereço 192.168.42.1 por meio de um navegador para fazer login na reCamera e entrar no workspace do **Node-RED**.

Se você conseguir acessar com sucesso a interface de fluxo de trabalho do Node-RED como mostrado abaixo, a configuração estará concluída.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### Etapa 2: Configurar o Streaming RTSP

A reCamera possui funcionalidade de streaming RTSP integrada que pode ser facilmente configurada por meio do fluxo de trabalho do Node-RED. Você só precisa implantar dois nós no fluxo de trabalho. Para tutoriais do SenseCraft AI, consulte o link [Access SenseCraft AI reCamera Dashboard](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#access-recamera-preview-dashboard).


#### 2.1 Importar e Configurar o Nó da Câmera

Arraste o **Camera Node** do lado esquerdo para o workspace e clique duas vezes para entrar na interface de configuração. Você pode definir parâmetros como resolução e taxa de quadros conforme necessário. Importe e configure o nó da câmera de acordo com o fluxo de trabalho mostrado abaixo.
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/nodeimport1sum1.png" />
</div>
<p align="center">Configuração de Parâmetros da Câmera</p>

#### 2.2 Importar e Configurar o Nó de Stream

Arraste o **Stream Node** do lado esquerdo para o workspace, selecione o protocolo RTSP e configure o endereço e a porta do stream. O endereço padrão do stream RTSP da reCamera é:

```
rtsp://admin:admin@192.168.42.1:554/live
```

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/streamset.png" />
</div>
<p align="center">Configuração de Parâmetros de Streaming RTSP</p>

#### 2.3 Importar o Nó de Modelo

Arraste o **Model Node** do lado esquerdo para o workspace, clique em Device e selecione o modelo YOLO11n Detection.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/modelimport.png" />
</div>
#### 2.4 Importar o Nó MQTT Out

Arraste o **MQTT Out Node** do lado esquerdo para o workspace e siga o diagrama abaixo para definir o endereço do broker MQTT e o tópico para comunicação com o servidor.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/mqttimportsum.png" />
</div>



Após concluir a configuração, clique em **Deploy** no canto superior direito para implantar o fluxo de trabalho, e a reCamera começará a transmitir via protocolo RTSP.

### Etapa 3: Implantar o Serviço de Conversão WebRTC no PC

O serviço de ponte WebRTC é executado no PC e é responsável por receber o stream RTSP e as mensagens MQTT, mesclar os resultados de inferência com o stream de vídeo e convertê-lo para o formato WebRTC para reprodução em tempo real no navegador.

#### 3.1 Pré-requisitos

Certifique-se de que o seguinte ambiente esteja instalado no seu PC:

- **Python 3.8+**
- Gerenciador de pacotes **pip**

> **Observação:** A instalação de `aiortc` no Windows pode exigir que o Microsoft C++ Build Tools seja instalado primeiro. Você pode baixá-lo e instalá-lo a partir de [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/).

#### 3.2 Obter o Código e Instalar Dependências

Obtenha o código do projeto Python de RTSP para WebRTC a partir do [repositório](https://github.com/hunter5299/Node-Red-project/tree/main/rtsp_to_webrtc). Após baixar o código do projeto para o seu PC, entre no diretório do projeto e instale as dependências Python:

```bash
cd rtsp_to_webrtc
pip install -r requirements.txt
```

#### 3.3 Descrição dos Arquivos do Projeto

O projeto contém os seguintes arquivos centrais:

| Arquivo | Descrição |
|------|------|
| `server.py` | Servidor de sinalização WebRTC, inicia o MQTT Broker embutido, lida com solicitações de conexão do navegador e estabelece sessões WebRTC |
| `mqtt_broker.py` | MQTT 3.1.1 Broker embutido (implementação pura em asyncio) e cliente de assinatura, recebe resultados de inferência YOLO enviados a partir do Node-RED da reCamera |
| `detection_store.py` | Módulo de armazenamento de resultados de inferência, armazena em cache os dados mais recentes de caixas de detecção e rótulos para renderização sobre o frame de vídeo |
| `video_sources.py` | Camada de abstração de protocolo de vídeo |
| `index.html` | Página de player frontend, fornece seleção de protocolo e funcionalidade de reprodução de vídeo WebRTC |
| `requirements.txt` | Lista de dependências Python |

#### 3.4 Iniciar o serviço

Inicie o serviço com a configuração padrão:

```bash
python server.py
```

Após o serviço iniciar, você verá o seguinte log de saída:

```
INFO:webrtc-server:Starting server on http://0.0.0.0:8080
INFO:webrtc-server:Default source: rtsp://admin:admin@192.168.42.1:554/live
INFO:webrtc-server:Supported protocols: rtsp, onvif, gb28181, rtmp, hls
INFO:webrtc-server:MQTT Broker: 0.0.0.0:1883, topic: yolo11n_result
INFO:webrtc-server:Open http://localhost:8080 in your browser
```

Você também pode personalizar a configuração por meio de argumentos de linha de comando:

```bash
# Specify the default video source address
python server.py --source rtsp://admin:admin@192.168.42.1:554/live

# Specify the service port
python server.py --port 9090

# Specify both address and port
python server.py --source rtsp://admin:admin@192.168.42.1:554/live --port 8080
```

**Descrição dos argumentos de linha de comando:**

| Argumento | Valor padrão | Descrição |
|------|--------|------|
| `--host` | `0.0.0.0` | Endereço de vinculação do servidor |
| `--port` | `8080` | Porta de escuta do servidor |
| `--source` | `rtsp://admin:admin@192.168.42.1:554/live` | Endereço padrão da fonte de vídeo |

> **Observação:** Certifique-se de que o firewall do PC permita conexões de entrada na porta 8080 (ou na porta especificada) e que o PC e a reCamera estejam na mesma LAN.

### Etapa 4: Executar a demonstração

1. Certifique-se de que a reCamera foi configurada para streaming RTSP e que o fluxo de trabalho foi implantado
2. Certifique-se de que `server.py` no PC foi iniciado e está em execução
3. Acesse `http://localhost:8080` no navegador do PC
4. Selecione o protocolo (RTSP) na página e insira o endereço do stream RTSP da reCamera (preenchido por padrão)
5. Clique no botão **"Start Playing"**

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.png" />
</div>
<p align="center">Reprodução em tempo real do vídeo da reCamera no navegador</p>

Após uma conexão bem-sucedida, a página exibirá as seguintes informações:

- **Fluxo de vídeo**: Exibição em tempo real do vídeo da reCamera
- **Status da conexão**: Indicador de status de conexão verde no canto superior esquerdo da página
- **Informações do stream**: Exibe o endereço do stream de vídeo, status da conexão, status da conexão ICE e resolução de vídeo
- **Log de operação**: Logs de conexão detalhados exibidos na parte inferior da página

## Como funciona

O fluxo de trabalho de alto nível de todo o sistema é o seguinte:

1. **Captura de vídeo e inferência de IA**
   A reCamera captura continuamente vídeo pela câmera, usa o modelo YOLO11n para inferência de detecção de objetos e obtém resultados de caixas delimitadoras e rótulos.

2. **Streaming RTSP e transmissão de resultados via MQTT**
   A reCamera transmite vídeo codificado via protocolo RTSP para a rede, enquanto publica simultaneamente os resultados de inferência via protocolo MQTT (tópico: `yolo11n_result`) para o MQTT Broker embarcado no PC.

3. **Recepção de vídeo e fusão dos resultados de inferência**
   O serviço no PC usa uma thread em segundo plano OpenCV + FFmpeg para ler continuamente os quadros de vídeo mais recentes do stream RTSP, recupera os resultados de inferência mais recentes de detection_store e sobrepõe caixas delimitadoras e rótulos nos quadros de vídeo.

4. **Codificação e transmissão via WebRTC**
   Quando o navegador inicia uma solicitação de conexão, o PC codifica os quadros de vídeo fundidos em formato WebRTC por meio da biblioteca aiortc, estabelecendo uma PeerConnection WebRTC para transmissão.

5. **Reprodução em tempo real no navegador**
   O navegador recebe o fluxo de vídeo via WebRTC e reproduz o vídeo com anotações de inferência de IA em tempo real, sem instalar nenhum plugin.

## Notas

- O stream RTSP da reCamera suporta apenas **1-2 conexões simultâneas** por padrão. Se outros programas (como VLC) já tiverem ocupado a conexão RTSP, o serviço WebRTC pode não conseguir receber o fluxo de vídeo. Feche outros programas conectados ao stream RTSP antes de usar.
- Se você encontrar falhas na instalação do `aiortc`, certifique-se de que o **Microsoft C++ Build Tools** (Windows) ou as ferramentas `gcc`/`make` (Linux) estejam instaladas.
- Se erros `non-existing PPS` aparecerem no log do servidor, isso ocorre porque um quadro-chave ainda não foi recebido, o que é normal. A recuperação será automática após a chegada do quadro-chave (aproximadamente 1 segundo).
- Para alterar a porta do serviço, use `python server.py --port <port_number>` para especificar uma porta diferente.
- Se você estiver enfrentando alta latência de vídeo, verifique se a largura de banda da rede é suficiente e garanta uma conexão de rede estável entre o PC e a reCamera.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Se você precisar de orientação sobre objetivos específicos de personalização ou quiser estender ainda mais o fluxo de trabalho, sinta-se à vontade para entrar em contato conosco. Estamos aqui para fornecer diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
