---
description: Este exemplo demonstra como realizar reconhecimento de código QR em tempo real na reCamera e enviar quadros de vídeo e resultados de reconhecimento para um PC via UDP para exibição.
title: Reconhecimento de Código QR em Tempo Real na reCamera
keywords:
  - reCamera
  - QR Code
  - QR Code Recognition
  - Real-Time Recognition
image: https://files.seeedstudio.com/wiki/reCamera/recamera-qrcode-udp-show.gif
slug: /recamera_qrcode_udp
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 07/08/2026
  author: QiYao Lin
createdAt: '2026-06-15'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/pt-br/recamera_qrcode_udp/
---

# Reconhecimento de Código QR em Tempo Real na reCamera

## Introdução

Este exemplo demonstra como configurar um **sistema de reconhecimento de código QR em tempo real** usando a reCamera. O sistema captura quadros de vídeo em tempo real com a câmera, decodifica códigos QR usando a biblioteca **Quirc** e envia os quadros de vídeo e os resultados de reconhecimento para um PC para exibição via protocolos **RTSP** e HTTP.

**Principais recursos**:
- Captura de câmera em tempo real e reconhecimento de código QR
- Suporta modo de fluxo de vídeo e modo de imagem única
- Envia quadros JPEG + resultados de reconhecimento para o PC via RTSP
- Script Python no PC para exibição em tempo real de vídeo e resultados

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/1.gif" /></div>

## Como Funciona

### Modo de Separação entre Fluxo de Vídeo + Resultado de Detecção de Código QR

Este exemplo adota uma arquitetura que separa a "transmissão de vídeo em tempo real" e a "consulta assíncrona de resultados de detecção de código QR". O lado da reCamera é responsável por capturar imagens da câmera, enviar o fluxo de vídeo RTSP e executar uma thread separada de detecção de código QR dentro do dispositivo. O lado do PC obtém o vídeo em tempo real via RTSP e, simultaneamente, acessa os resultados mais recentes de detecção de código QR por meio de uma interface HTTP.

O processo de reconhecimento em tempo real é o seguinte:

- Captura da Câmera: a reCamera captura imagens da câmera via interface de vídeo SG2002 e configura dois canais de vídeo simultaneamente.
- Transmissão de Vídeo RTSP: um canal de vídeo é codificado como H.264 e transmitido em tempo real via RTSP para dispositivos no mesmo segmento de rede. O PC pode puxar e exibir diretamente o fluxo de vídeo em tempo real usando o endereço RTSP.
- Aquisição de Quadros para Detecção de Código QR: o outro canal de vídeo gera quadros de imagem NV21 de baixa resolução para detecção de código QR. O programa usa apenas o plano Y do NV21 como imagem em escala de cinza de entrada para o detector de código QR, evitando a sobrecarga adicional de conversão para RGB.
- Cache em Fila do Quadro Mais Recente: a thread de detecção de código QR é desacoplada do callback de captura de vídeo. O callback de captura não executa diretamente a detecção de código QR, mas coloca o quadro em escala de cinza mais recente em uma fila de comprimento 1. Quando a velocidade de processamento da thread de detecção é mais lenta, novos quadros sobrescrevem os antigos, garantindo que apenas o quadro mais recente seja sempre mantido na fila, evitando aumento de latência devido ao acúmulo de tarefas de detecção.
- Detecção Assíncrona de Código QR: a thread de detecção de código QR obtém uma imagem da fila do quadro mais recente e usa a biblioteca de reconhecimento de código QR quirc para detecção e decodificação. Como o processo de detecção é executado em uma thread separada, ele não bloqueia a transmissão de vídeo RTSP.
- Cache de Resultados: após cada detecção, o programa atualiza os resultados mais recentes de detecção de código QR, incluindo se um código QR foi detectado, o conteúdo do código QR, duração da detecção, frame_id, PTS, horário de captura, horário de conclusão da detecção e coordenadas da caixa delimitadora do código QR.
- Consulta de Resultados via HTTP: dispositivos no mesmo segmento de rede podem obter o resultado mais recente de detecção de código QR fazendo um GET em `/api/qr/latest`. Essa interface retorna apenas o status da detecção mais recente e não bloqueia o fluxo de vídeo nem transmite ativamente filas históricas de detecção.
- Exibição no PC: o cliente Windows exibe o fluxo de vídeo em tempo real no lado esquerdo via RTSP e, periodicamente, consulta `/api/qr/latest` no lado direito via HTTP para exibir os resultados mais recentes de detecção de código QR e o tempo de detecção. Se os resultados retornados incluírem coordenadas da caixa delimitadora do código QR, o cliente irá redimensionar e sobrepor as caixas de detecção sobre o fluxo de vídeo RTSP.

O enlace de dados é o seguinte:

```text
reCamera
├── RTSP Video Stream
│   └── Address:
│       rtsp://<device-ip>:8554/live0
│
└── QR Code Detection Result HTTP API
    └── Address:
        http://<device-ip>:8080/api/qr/latest
```

Esse design desacopla a transmissão de vídeo de alta taxa em tempo real da detecção de código QR, que é relativamente demorada. O fluxo de vídeo RTSP pode manter saída contínua, enquanto a thread de detecção de código QR processa apenas o quadro mais recente. Mesmo que a detecção de código QR leve muito tempo, isso não causará travamentos no vídeo nem acúmulo na fila de detecção.

## Configuração da Demo

Para configurar esta demo, você precisará:

1. Fazer a cross-compilação do programa em C++ no seu PC.
2. Executar o executável compilado na reCamera.
3. Executar o script Python de recepção no seu PC.

### 1. Compilar o Programa em C++

Antes de compilar esta solução, você precisa configurar o ambiente da reCamera. Você pode baixar diretamente as bibliotecas pré-compiladas correspondentes em:

```text
https://codeload.github.com/Seeed-Studio/sscma-example-sg200x/tar.gz/refs/tags/0.2.4
````
Descompacte e defina as variáveis de ambiente:
```bash
export SG200X_SDK_PATH=<PATH_TO_RECAMERA-OS>/output/sg2002_recamera_emmc/
export PATH=<PATH_TO_RECAMERA-OS>/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Clone o repositório de reconhecimento de código QR e navegue até o diretório da solução correspondente para compilação. Execute os seguintes comandos sequencialmente no terminal do seu PC.

```bash
git clone https://github.com/yyling0101-a11y/qrcode_rec.git
cd /qrcode_rec/
```

O diretório do repositório após o clone será semelhante a isto:
```text
(base) yylin@LAPTOP-TI348HL9:~/qrcode_rec$ tree -L 2 -I "build"
.
├── CMakeLists.txt
├── main
│   ├── CMakeLists.txt
│   ├── frame_sei.cpp
│   ├── frame_sei.hpp
│   ├── frame_sync.cpp
│   ├── frame_sync.hpp
│   ├── http_server.cpp
│   ├── http_server.hpp
│   ├── latest_frame_queue.hpp
│   ├── main.cpp
│   ├── placeholder
│   ├── qr_detector.cpp
│   ├── qr_detector.hpp
│   ├── qr_result_store.cpp
│   ├── qr_result_store.hpp
│   ├── qr_worker.cpp
│   ├── qr_worker.hpp
│   ├── rtsp_demo.cpp
│   ├── rtsp_demo.h
│   └── third_party
└── recamera_qr_win_client
    ├── README.md
    ├── recamera_qr_viewer.py
    └── requirements.txt
```

O diretório `main` contém o código-fonte para rodar na reCamera, e `recamera_qr_win_client` contém o código-fonte para visualização de resultados a ser executado em dispositivos x86. Antes de compilar, você precisa modificar o diretório especificado no arquivo `CMakeLists.txt` no diretório principal para apontar para o diretório onde você descompactou o pacote pré-compilado baixado na etapa anterior.

Inicie a compilação:
```bash
mkdir build && cd build
cmake ..
make
```

Após a compilação bem-sucedida, o arquivo executável estará localizado em `build/qrcode_rec`. Use o comando `scp` para enviá-lo para o diretório `/home/recamera/` na sua reCamera:

```bash
sudo scp qrcode_rec recamera@192.168.42.1:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
Digite a senha para a plataforma correspondente quando solicitado para concluir a transferência de `qrcode_rec`.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/make.png" /></div>


### 2. Configurar a reCamera

:::warning
Antes de executar o programa em C++, você deve parar os serviços padrão do Node-RED, pois eles ocuparão os recursos da câmera. Execute os seguintes comandos via SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. Executar o Arquivo Executável na reCamera

Em seguida, execute o seguinte comando para conceder permissões de execução:

```bash
chmod +x qrcode_udp
```

#### Comando de Exemplo

Você pode iniciar o programa executando este comando diretamente no terminal da reCamera.
```bash
sudo ./qrcode_rec
```

Os logs de inicialização bem-sucedida serão semelhantes a isto:

```
[recamera@reCamera]~$ sudo  ./qrcode_rec
Password:
prio:0
rtsp://192.168.4.5:8554/live0
[rtsp] session name=live0 channel=2 codec=1 result=0 session=0x3fe0c53210
ISP Vipipe(0) Allocate pa(0x8cf31000) va(0x0x3fe072f000) size(311584)
awbInit ver 6.9@2021500
0 R:1400 B:3100 CT:2850
1 R:1500 B:2500 CT:3900
2 R:2300 B:1600 CT:6500
Golden 1024 1024 1024
WB Quadratic:0
isWdr:0
ViPipe:0,===OV5647 1080P 30fps 10bit LINE Init OK!
********************************************************************************
cvi_bin_isp message
gerritId:      NULL           commitId:      6dbbbb8
md5:           8d8b7036404e92754f3fbabc9525a173
sensorNum      1
sensorName0    22087

PQBIN message
gerritId:      NULL           commitId:      6dbbbb8
md5:           8d8b7036404e92754f3fbabc9525a173
sensorNum      1
sensorName0    22087

author:        hongtai.liu    desc:          Seeed OV5647
createTime:    2025-08-14 14:37:24version:       V1.1
tool Version:       v3.0.8.6            mode: M
********************************************************************************
20260708 03:45:31.704 2248 E isp AF_SetAttr:558 pstFocusMpiAttr is NULL

reCamera QR scanner is running
RTSP      : rtsp://192.168.4.5:8554/onvif
QR latest : http://192.168.4.5:8080/api/qr/latest
Health    : http://192.168.4.5:8080/api/health

[http] listening on 0.0.0.0:8080
0 R:1008 B:2206 CT:2777
1 R:1313 B:1866 CT:3894
2 R:1609 B:1206 CT:7164
Golden 1313 1024 1866
wdrLEOnly:1

```


### 4. Executar o Receptor Python no PC

No seu PC, você precisa instalar as dependências de ambiente correspondentes para a ferramenta de visualização.

```bash
cd qrcode_rec/recamera_qr_win_client
pip install -r ./requirements.txt
```

Em seguida, execute diretamente o programa Python com o seguinte comando. Você precisa alterar o endereço IP correspondente para o endereço IP da sua reCamera.

```bash
# in powershell
python recamera_qr_pyqt_viewer.py --rtsp rtsp://192.168.4.5:8554/live0 --qr-url http://192.168.4.5:8080/api/qr/latest

# in linux
python3 recamera_qr_pyqt_viewer.py --rtsp rtsp://192.168.4.5:8554/live0 --qr-url http://192.168.4.5:8080/api/qr/latest
```

#### Parâmetros do Receptor Python

| Parâmetro | Descrição | Padrão |
|-----------|-------------|---------|
| `--rtsp` | Endereço RTSP | `192.168.4.5` |
| `--qr-url` | URL para obter resultados de reconhecimento | `http://192.168.4.5:8080/api/qr/latest` |


### Na janela do receptor em Python

O PC exibirá uma janela de vídeo em tempo real, que inclui:
- Fluxo de vídeo JPEG
- Resultados de reconhecimento
- O JSON bruto retornado por HTTP
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Qrcode_rec/1.png" /></div>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nosso produto! Estamos comprometidos em fornecer a você várias formas de suporte para garantir que sua experiência seja a mais tranquila possível. Oferecemos múltiplos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>