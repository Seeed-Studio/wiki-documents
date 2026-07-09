---
description: Esta demonstração mostra como realizar reconhecimento de código QR em tempo real na reCamera e transmitir os quadros de vídeo junto com os resultados de reconhecimento para um PC via UDP para exibição.
title: Reconhecimento de Código QR em Tempo Real na reCamera
keywords:
  - reCamera
  - QR Code
  - QR Code Recognition
  - ZXing
  - UDP Streaming
  - Real-Time Recognition
image: https://files.seeedstudio.com/wiki/reCamera/recamera-qrcode-udp-show.gif
slug: /recamera_qrcode_udp
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 06/12/2026
  author: Xuanjun Zhu
createdAt: '2026-06-15'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_qrcode_udp/
---

# Reconhecimento de Código QR em Tempo Real na reCamera

## Introdução

Este exemplo demonstra como construir um **sistema de reconhecimento de código QR em tempo real** usando a reCamera. O sistema captura quadros de vídeo ao vivo pela câmera, decodifica códigos QR usando a biblioteca **ZXing** e envia os quadros de vídeo (JPEG) juntamente com os resultados de reconhecimento para um PC via **UDP** para exibição.

**Principais recursos**:
- Captura de câmera em tempo real e reconhecimento de código QR
- Suporta modo de transmissão de vídeo e modo de imagem única
- Envia quadros JPEG + resultados de reconhecimento para o PC via UDP
- Estatísticas de desempenho detalhadas (FPS de captura, FPS de decodificação, tempo médio de decodificação)
- Script receptor em Python no PC para exibição em tempo real de vídeo e resultados

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/testvideo.gif" /></div>

## Como Funciona

### Modo de Transmissão de Vídeo (Padrão)

O fluxo de reconhecimento em tempo real é o seguinte:

1. **Captura da Câmera**: Captura quadros RGB888 (padrão 640×480) através da interface de câmera `sscma-micro`
2. **Conversão para Tons de Cinza**: Converte a imagem RGB888 para tons de cinza (necessário para o reconhecimento de código QR)
4. **Decodificação ZXing**: Usa `MultiFormatReader` + `HybridBinarizer` para detecção e decodificação de código de barras (`TryHarder` é desativado por padrão para manter o desempenho em tempo real)
5. **Saída de Resultado**: Imprime o conteúdo decodificado no terminal quando um novo código QR é detectado
6. **Envio via UDP**: Envia o quadro JPEG + resultado de reconhecimento para o PC através do componente `SeSg stream_udp`

Em cenários de vídeo, o ZXing gera uma sobrecarga de busca significativa quando “nenhum código é encontrado”. Para garantir o desempenho em tempo real, o programa usa uma estratégia de limitação de decodificação de 150 ms — ele executa a decodificação uma vez a cada 150 ms em vez de em todos os quadros. Isso reduz drasticamente a carga da CPU sem comprometer a experiência de reconhecimento.

## Configuração da Demo

Para configurar esta demonstração, você precisa:

1. Fazer a compilação cruzada do programa C++ no seu PC
2. Executar o executável compilado na ReCamera
3. Executar o script receptor em Python no seu PC

### 1. Compilar o Programa C++

:::note
Antes de compilar esta solução, certifique-se de que você configurou o ambiente **ReCamera-OS** (versão 0.2.1 ou posterior) de acordo com a [documentação principal do projeto](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_c_cpp/), incluindo o caminho do SDK e a cadeia de ferramentas de compilação cruzada.
:::

Defina a variável de ambiente para a cadeia de ferramentas de compilação cruzada:

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Clone o repositório e navegue até o diretório da solução para compilar. Execute os seguintes comandos passo a passo no terminal do seu PC. Se você já baixou e configurou o ambiente de compilação cruzada seguindo a documentação [Developing with C/C++](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_c_cpp/), pode executar diretamente os comandos de compilação abaixo.

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
## compile cmd
rm -rf build && mkdir build && cd build 
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

Após a compilação, o executável estará localizado em `build/qrcode_udp`. Envie-o para a ReCamera em `/home/recamera/` usando o comando scp:

```bash
sudo scp qrcode_udp recamera@192.168.4.53:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
Digite a senha para a plataforma correspondente quando solicitado para concluir a transferência de `qrcode_udp`.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/cppbuildlog.png" /></div>


### 2. Configurar a ReCamera

:::warning
Antes de executar o programa C++, você deve parar os serviços padrão do Node-RED, pois eles ocupam os recursos da câmera. Execute os seguintes comandos via SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. Executar o Executável na ReCamera

Em seguida, execute o seguinte comando para conceder permissão de execução:

```bash
chmod +x qrcode_udp
```

#### Parâmetros

| Parâmetro | Descrição | Padrão |
|-----------|-------------|---------|
| `udp_ip` | Endereço IP do PC (habilita transmissão UDP) | `192.168.4.48` |
| `udp_port` | Número da porta UDP | `5001` |

#### Comandos de Exemplo

**Modo de transmissão de vídeo (sem transmissão UDP, apenas reconhecimento local)**:
```bash
sudo ./qrcode_udp
```

**Modo de transmissão de vídeo + transmissão UDP**:
```bash
sudo ./qrcode_udp 192.168.4.48 5001
```

:::note
Substitua `192.168.4.48` pelo endereço IP real do seu PC na mesma rede da ReCamera.
:::
### No Terminal da ReCamera

**Modo de transmissão de vídeo** — O programa exibirá estatísticas de desempenho uma vez por segundo:

```
[Performance] CaptureFPS=2.60 | DecodeFPS=2.60 | AvgDecodeTime=323.0ms | DecodeSuccess=0 | NewCode=0
[Performance] CaptureFPS=1.94 | DecodeFPS=1.94 | AvgDecodeTime=434.0ms | DecodeSuccess=0 | NewCode=0
[QRCode] https://wiki.seeedstudio.com/recamera_software_docs/
[Performance] CaptureFPS=4.45 | DecodeFPS=4.45 | AvgDecodeTime=174.8ms | DecodeSuccess=3 | NewCode=1
[Performance] CaptureFPS=4.62 | DecodeFPS=4.62 | AvgDecodeTime=163.6ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=4.86 | DecodeFPS=4.86 | AvgDecodeTime=165.4ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=4.60 | DecodeFPS=4.60 | AvgDecodeTime=169.8ms | DecodeSuccess=4 | NewCode=0
[Performance] CaptureFPS=4.33 | DecodeFPS=4.33 | AvgDecodeTime=184.4ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=2.78 | DecodeFPS=2.78 | AvgDecodeTime=305.8ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=1.96 | DecodeFPS=1.96 | AvgDecodeTime=404.0ms | DecodeSuccess=2 | NewCode=0
[Performance] CaptureFPS=4.72 | DecodeFPS=4.72 | AvgDecodeTime=166.0ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.56 | DecodeFPS=4.56 | AvgDecodeTime=178.5ms | DecodeSuccess=6 | NewCode=0
[QRCode] zxj
[Performance] CaptureFPS=5.32 | DecodeFPS=5.32 | AvgDecodeTime=145.3ms | DecodeSuccess=7 | NewCode=1
[Performance] CaptureFPS=5.30 | DecodeFPS=5.30 | AvgDecodeTime=149.1ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.70 | DecodeFPS=4.70 | AvgDecodeTime=170.8ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=1.85 | DecodeFPS=1.85 | AvgDecodeTime=455.0ms | DecodeSuccess=1 | NewCode=0
```

- **CaptureFPS**: Taxa de quadros de captura da câmera
- **DecodeFPS**: Taxa de quadros real em que a decodificação é executada (limitada pela restrição de 150 ms)
- **AvgDecodeTime**: Tempo médio gasto para uma única decodificação ZXing
- **DecodeSuccess**: Número de vezes que um código QR foi reconhecido com sucesso
- **NewCode**: Número de vezes que o texto do código QR mudou


### 4. Executar o Receptor em Python no PC

No seu PC, certifique-se de que o Python com as bibliotecas necessárias esteja instalado:

```bash
pip install opencv-python numpy
```

Navegue até o diretório da solução e execute:

```bash
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
python tools/udp_receiver.py --port 5001 --show --print-dets
```

#### Parâmetros do Receptor em Python

| Parâmetro | Descrição | Padrão |
|-----------|-------------|---------|
| `--ip` | Endereço IP de escuta | `0.0.0.0` |
| `--port` | Porta de escuta | `5001` |
| `--show` | Exibir a janela de vídeo | off |
| `--print-dets` | Imprimir o texto do código QR reconhecido | off |



### Na Janela do Receptor em Python

O PC exibirá uma janela de vídeo ao vivo que inclui:
- O fluxo de vídeo JPEG
- Quando um código QR é reconhecido, o texto decodificado é sobreposto no canto superior esquerdo do quadro (fonte amarela)
- O número do quadro (fonte verde)
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/pcpicture.png" /></div>


## Dependências

| Dependência | Descrição | Fonte |
|------------|-------------|--------|
| **sscma-micro** | Acesso à câmera (interfaces Device, Camera) | Componente do repositório `components/sscma-micro` |
| **stream_udp** | Transmissão UDP (JPEG + resultados de detecção) | Componente do repositório `components/SeSg/stream_udp` |
| **OpenCV** (core, imgproc, imgcodecs) | Processamento de imagem, conversão para tons de cinza, redução de amostragem | Sysroot do SDK SG200X |
| **ZXing** (libzxing) | Decodificação de código de barras/código QR multi-formato | Sysroot do SDK SG200X |
| **ReCameraOS ≥ 0.2.1** | Ambiente de execução | Firmware do dispositivo |

## Solução de Problemas

### Erro de Acesso à Câmera

Se você vir um erro "No camera device found":
- Certifique-se de que os serviços Node-RED estejam parados (veja a Etapa 2 acima)
- Verifique a conexão da câmera

### Falha na Conexão UDP

Se o PC não receber dados:
- Verifique se o PC e a ReCamera estão na mesma rede
- Verifique as configurações de firewall no PC
- Confirme se a porta UDP 5001 não está bloqueada
- Use `ping` para testar a conectividade entre os dispositivos

### Falha no Reconhecimento de Código QR

Se a visualização da câmera contiver um código QR, mas ele não for reconhecido:
- Certifique-se de que o código QR seja grande o suficiente e esteja nítido no quadro
- Evite desfoque excessivo, rotação ou iluminação desigual
- Observe que o modo `TryHarder` é desativado por padrão para priorizar o desempenho em tempo real

### Erro de Compilação

Se você encontrar erros de compilação relacionados ao ZXing ou sscma-micro:
- Confirme se a variável de ambiente `SG200X_SDK_PATH` está configurada corretamente
- Certifique-se de que o caminho da cadeia de ferramentas foi adicionado à variável de ambiente `PATH`
- Verifique se os submódulos do repositório foram totalmente baixados (`git submodule update --init --recursive`)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>