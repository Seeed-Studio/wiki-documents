---
description: Use reCamera Pro to recognize QR codes and barcodes, and view live video directly or through a Windows/Linux proxy.
title: Reconhecimento de QR Code e código de barras com reCamera Pro
keywords:
  - Edge AI
  - reCamera Pro
  - QR Code
  - Barcode Recognition
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_qr_code_barcode
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/16/2026
  author: yylin
createdAt: 2026-10-16
updatedAt: 2026-10-16
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_qr_code_barcode/
---

# Reconhecimento de QR Code e código de barras com reCamera Pro

Este guia explica como obter o código-fonte, compilar e instalar o aplicativo de reconhecimento de QR code e código de barras na reCamera Pro, e escolher como visualizar o vídeo ao vivo: diretamente do dispositivo ou por meio de um proxy Windows/Linux. Ele segue a estrutura orientada a tarefas usada no Wiki da Seeed para a reCamera Pro. Referências: [Guia de início rápido da reCamera Pro](https://wiki.seeedstudio.com/pt-br/recamera_pro_getting_started/) e [SDK e aplicativo mínimo](https://wiki.seeedstudio.com/pt-br/recamera_pro_sdk_setup/).

## Antes de começar

- Conecte a reCamera Pro a uma rede acessível pelo seu computador. Siga o [guia de acesso Wi‑Fi](https://wiki.seeedstudio.com/pt-br/recamera_pro_wifi_access/) se necessário e anote o endereço IP do dispositivo.
- Use um computador Linux ou WSL em um host Linux 64 bits para compilação cruzada. A configuração do SDK faz o download de vários gigabytes de arquivos de build de destino, portanto é necessária conexão com a Internet e espaço livre em disco suficiente.
- O acesso direto ao vídeo requer um navegador que consiga se conectar ao dispositivo pela rede.
- Para um proxy Windows ou Linux, instale Nginx e FFmpeg no computador proxy. O proxy Linux também requer uma compilação do FFmpeg com o codificador `libx264`. O executável go2rtc para Windows está incluído neste repositório.
- Conclua a configuração inicial do dispositivo na interface Web. Ative o SSH em **Device Info → Connection Settings** antes de usar os comandos de implantação abaixo. O [Guia de início rápido](https://wiki.seeedstudio.com/pt-br/recamera_pro_getting_started/) da Seeed cobre o login inicial e a configuração de rede.

## Implantar o aplicativo na reCamera Pro

Instale e execute o aplicativo de reconhecimento na reCamera Pro antes de abrir sua página web. Este projeto tem como alvo RV1126B/aarch64; um programa x86 comum compilado para um computador Windows ou Linux não pode ser executado no dispositivo.

### 1. Obter o código-fonte e instalar o SDK de compilação cruzada

O código-fonte do aplicativo está hospedado em [yyling0101-a11y/recamera_pro_qr_code](https://github.com/yyling0101-a11y/recamera_pro_qr_code). Instale as ferramentas de host e, em seguida, clone o código-fonte do aplicativo e o [SDK de compilação cruzada da reCamera Pro](https://github.com/Seeed-Projects/recamera_pro_toolchain) separado da Seeed, que fornece o compilador RV1126B e o sysroot de destino.

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
mkdir -p ~/recamera_pro_workspace
cd ~/recamera_pro_workspace
git clone https://github.com/yyling0101-a11y/recamera_pro_qr_code.git
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` faz o download da toolchain do SDK e do sysroot a partir do release da Seeed. Mantenha o SDK no sistema de arquivos Linux ao usar o WSL; não o extraia em `/mnt/c`.

### 2. Compilar o aplicativo

O aplicativo faz link com as bibliotecas de destino GStreamer, OpenCV, ZBar e Mosquitto. Use o sysroot do SDK; bibliotecas x86 do host não podem ser usadas para o binário do dispositivo.

```bash
cd ~/recamera_pro_workspace/recamera_pro_qr_code
export RECAMERA_SDK_ROOT="$(cd ../recamera_pro_toolchain && pwd)"
source "$RECAMERA_SDK_ROOT/scripts/env.sh"
cmake -S cpp -B cpp/build -G Ninja \
  -DCMAKE_TOOLCHAIN_FILE="$RECAMERA_SDK_ROOT/cmake/recamera-pro-toolchain.cmake" \
  -DCMAKE_BUILD_TYPE=Release
cmake --build cpp/build -j4
file cpp/build/qr_pro
```

O último comando deve informar `ARM aarch64`. Se o CMake ou o linker informar que os cabeçalhos/bibliotecas GStreamer, OpenCV, ZBar ou Mosquitto estão ausentes, verifique se a configuração do SDK foi concluída e se essas bibliotecas de destino estão presentes no sysroot. Não instale versões x86 do host para resolver um erro de compilação cruzada.

### 3. Preparar o dispositivo e copiar o aplicativo

Conecte o dispositivo ao host com um cabo de dados USB e ligue-o, ou coloque-o na mesma LAN que o host. O endereço USB padrão é `192.168.42.1`; use o endereço mostrado pela sua rede se for diferente. Faça login via SSH como `root` usando a senha do dispositivo configurada durante a configuração inicial. Na primeira conexão SSH, verifique a impressão digital do host. Crie o diretório do aplicativo e copie o executável, a página web, a configuração do go2rtc no lado do dispositivo e os scripts de inicialização:

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/qr_rec'
scp cpp/build/qr_pro web/index.html web/go2rtc-recamerapro.yaml \
  scripts/S97qr_go2rtc scripts/S98qr_pro root@192.168.42.1:/userdata/qr_rec/
```

### 4. Instalar e iniciar os serviços

Faça login no dispositivo e execute:

```bash
ssh root@192.168.42.1
cd /userdata/qr_rec
cp go2rtc-recamerapro.yaml go2rtc.yaml
mkdir -p www
mv index.html www/index.html
chmod 755 qr_pro S97qr_go2rtc S98qr_pro
cp S97qr_go2rtc S98qr_pro /etc/init.d/
/etc/init.d/S97qr_go2rtc start
/etc/init.d/S98qr_pro start
```

`S97qr_go2rtc` usa o executável go2rtc já instalado no dispositivo para ler o stream principal H.264 produzido por `rkipc`. `S98qr_pro` inicia o aplicativo de QR code. Os scripts de inicialização em `/etc/init.d/` são executados automaticamente quando o dispositivo é ligado. Se as credenciais MQTT estiverem configuradas em `/userdata/qr_mqtt.env`, o script de inicialização do aplicativo as carrega. O vídeo e os resultados via WebSocket continuam disponíveis mesmo se o MQTT não tiver sido configurado.

### 5. Verificar os serviços do dispositivo

Abra `http://192.168.42.1:8766/` em um navegador. Confirme que a página é carregada, o status muda para “Results connected” e o vídeo ao vivo aparece. Você também pode verificar os processos e logs no dispositivo:

```bash
ldd /userdata/qr_rec/qr_pro
ps | grep -E 'qr_pro|go2rtc'
tail -n 50 /userdata/qr_rec/qr_pro.log
tail -n 50 /userdata/qr_rec/qr_go2rtc.log
```

Verifique se o `ldd` não informa `not found`. A imagem do dispositivo deve fornecer as bibliotecas de runtime GStreamer, OpenCV, ZBar e Mosquitto usadas pelo binário.

O acesso direto ao vídeo requer que a porta TCP 1986 e a porta TCP/UDP 8557 sejam acessíveis a partir da rede do navegador. Se a página não carregar, verifique primeiro `/userdata/qr_rec/qr_pro.log`. Se a página e os resultados de leitura funcionarem, mas o vídeo estiver preto, verifique o log do go2rtc e essas portas.

### 6. Atualizar uma instalação existente

Após recompilar, repita a etapa de cópia e, em seguida, reinicie os serviços no dispositivo:

```bash
/etc/init.d/S97qr_go2rtc restart
/etc/init.d/S98qr_pro restart
```

O aplicativo está pronto para uso no modo direto após a implantação. O proxy Nginx em Windows/Linux é uma forma opcional de encaminhar o vídeo; consulte as seções abaixo para instruções de configuração. Depois de finalizar os comandos no dispositivo, digite `exit` para voltar ao host Linux/WSL. As instruções de proxy no host abaixo assumem que o diretório atual é o repositório do aplicativo clonado.

> Os exemplos abaixo usam `192.168.42.1` para a reCamera Pro e `192.168.3.151` para o computador proxy. Substitua esses endereços pelos endereços da sua própria rede.

## Escolher um método de conexão de vídeo

| Método | URL | Usar quando |
| --- | --- | --- |
| Direto do dispositivo (padrão) | `http://DEVICE_IP:8766/` | O computador consegue acessar as portas TCP 1986 e UDP 8557 na reCamera Pro |
| Proxy Windows | `http://WINDOWS_HOST_IP:18888/?video=proxy` | Você quer que o Nginx e o go2rtc no Windows encaminhem o vídeo |
| Proxy Linux | `http://LINUX_HOST_IP:18888/?video=proxy` | Você quer que o Nginx e o go2rtc no Linux encaminhem o vídeo |

Os resultados de leitura aparecem no lado direito da página. O Nginx encaminha os resultados WebSocket para o dispositivo. No modo proxy, o FFmpeg no computador proxy lê o stream MJPEG do dispositivo e o converte em vídeo WebRTC para o navegador.

## Opção 1: conectar-se diretamente ao dispositivo

1. Confirme que o aplicativo e o serviço go2rtc no lado do dispositivo estão em execução.
2. Abra `http://DEVICE_IP:8766/` em um navegador.
3. Aguarde até que o status no canto superior direito mostre “Results connected” e confirme que o vídeo ao vivo aparece.

O acesso direto usa a porta TCP 8766 para a página web e o WebSocket de resultados de leitura, a porta TCP 1986 para a sinalização do go2rtc e a porta TCP/UDP 8557 para a mídia WebRTC. Se a página e os resultados funcionarem, mas o vídeo estiver preto, verifique a conectividade com as portas 1986 e 8557 entre o navegador e o dispositivo.

## Opção 2: usar um computador Windows como proxy

1. Instale o Nginx e o FFmpeg no Windows. Adicione o diretório `bin` do FFmpeg ao `PATH`. O executável go2rtc está incluído em `web/bin/windows/go2rtc.exe`.
2. Em `web/go2rtc-windows.yaml`, defina `webrtc.candidates` para o endereço IP da LAN do computador Windows e confirme que a URL do stream usa o IP do dispositivo.
3. Em `web/nginx.conf`, substitua `D:/path/to/recamera_pro_qr_code/web` pelo caminho absoluto para o diretório `web` deste repositório. Confirme que o destino do proxy `/ws` usa o IP do dispositivo.
4. A partir da raiz do repositório, inicie o go2rtc no PowerShell e mantenha o terminal aberto:

   ```powershell
   .\web\bin\windows\go2rtc.exe -config .\web\go2rtc-windows.yaml
   ```

5. Inicie o Nginx com o caminho para o diretório extraído e a configuração do repositório. Por exemplo, se o Nginx estiver instalado em `C:\nginx` e o repositório em `D:\recamera_pro_qr_code`:

   ```powershell
   cd C:\nginx
   .\nginx.exe -p C:/nginx/ -c D:/recamera_pro_qr_code/web/nginx.conf
   ```

   As portas TCP 18888, TCP 8557 e UDP 8557 de entrada devem ser permitidas pelo Firewall do Windows. A configuração do Nginx usa seus diretórios `mime.types` e `logs` relativos ao prefixo `-p`.

6. Abra `http://WINDOWS_HOST_IP:18888/?video=proxy` em um navegador.

A API do go2rtc escuta apenas em `127.0.0.1:1986`; o Nginx encaminha as requisições de sinalização para ela. Não exponha a porta da API diretamente para a LAN.

## Opção 3: usar um computador Linux como proxy

As etapas a seguir usam Debian/Ubuntu como exemplo. Em outras distribuições, instale Nginx e FFmpeg com o gerenciador de pacotes apropriado.

1. A partir da raiz do projeto clonado, instale o Nginx e uma compilação do FFmpeg que inclua `libx264`:

   ```bash
   sudo apt update
   sudo apt install nginx ffmpeg
   ffmpeg -hide_banner -encoders | grep libx264
   ```

   O comando `grep` deve listar `libx264`. Se isso não acontecer, instale um pacote FFmpeg completo da sua distribuição ou compile o FFmpeg com x264 habilitado.

2. Baixe o executável do go2rtc para Linux e coloque-o no seu PATH, por exemplo em `/usr/local/bin/go2rtc`. Escolha uma versão que corresponda à arquitetura de CPU do host Linux em [go2rtc Releases](https://github.com/AlexxIT/go2rtc/releases).
3. Instale a página da web:

   ```bash
   sudo install -d /var/www/qr-pro
   sudo install -m 644 web/index.html /var/www/qr-pro/index.html
   ```

4. Edite `web/go2rtc-linux.yaml`: defina `webrtc.candidates` para o IP LAN do computador proxy Linux e substitua o IP do dispositivo em `streams.qr` pelo endereço da reCamera Pro. Essa configuração lê o fluxo MJPEG do dispositivo e o codifica com `libx264` na CPU do computador proxy.
5. Inicie o go2rtc em um terminal:

   ```bash
   go2rtc -config web/go2rtc-linux.yaml
   ```

   Mantenha o terminal aberto e confirme que não há erros de configuração ou do FFmpeg. Para uso de longo prazo, configure o mesmo comando como um serviço systemd.

6. Instale `web/nginx-site.conf` como um site Nginx. Confirme que `root` aponta para `/var/www/qr-pro` e que o alvo do proxy `/ws` usa o IP do dispositivo, depois habilite o site e recarregue o Nginx. Por exemplo:

   ```bash
   sudo cp web/nginx-site.conf /etc/nginx/sites-available/qr-pro
   sudo ln -s /etc/nginx/sites-available/qr-pro /etc/nginx/sites-enabled/qr-pro
   sudo nginx -t
   sudo systemctl reload nginx
   ```

   Se já existir um link de site com o mesmo nome, inspecione e reutilize a configuração existente.

7. Permita a porta TCP de entrada 18888, a porta TCP 8557 e a porta UDP 8557 no computador proxy. Abra `http://LINUX_HOST_IP:18888/?video=proxy` em um navegador.

Os modos de proxy Windows e Linux usam a mesma página da web e o mesmo fluxo de proxy reverso Nginx. Suas configurações do go2rtc diferem no caminho do executável FFmpeg e no diretório raiz da web do Nginx. A codificação por proxy usa recursos de CPU no host; use o modo direto se o host não tiver capacidade de CPU suficiente.

## Usar os resultados da varredura

- Os resultados da varredura aparecem no lado direito da página. Quando o navegador se reconecta, ele pode receber resultados da janela de desduplicação atual.
- O dispositivo publica resultados no tópico MQTT `recamera/qr/result` usando QoS 1. O MQTT requer credenciais no dispositivo e uma conexão com um broker MQTT.
- Um código de barras que permanece em exibição é relatado uma vez. Ele pode ser relatado novamente depois de ficar fora de exibição por mais de 60 segundos.

## Solução de problemas

| Sintoma | O que verificar |
| --- | --- |
| A página não abre | Verifique o Nginx, a porta TCP de entrada 18888 e o endereço IP do computador proxy |
| A página abre, mas os resultados da varredura não se conectam | Verifique o IP do dispositivo no alvo `/ws` do Nginx e confirme que o aplicativo está escutando na porta TCP 8766 |
| O vídeo está preto no modo proxy | Confirme que o go2rtc está em execução, que o FFmpeg consegue ler `http://DEVICE_IP:8766/video.mjpg` e que o IP candidato é o endereço do computador proxy |
| O vídeo está preto no modo direto | Verifique o serviço go2rtc no lado do dispositivo e a conectividade com TCP 1986 e TCP/UDP 8557 |
| `qr_pro` encerra imediatamente | Execute `ldd /userdata/qr_rec/qr_pro` e verifique se há `not found`; reconstrua com base no sysroot do SDK da reCamera Pro e garanta que suas bibliotecas de tempo de execução correspondam ao firmware instalado |
| O Nginx não consegue encontrar a página | Verifique o caminho `root` do Windows/Linux e confirme que `index.html` existe lá |
| O FFmpeg no Linux informa que o codificador não está disponível | Execute `ffmpeg -hide_banner -encoders` e verifique se `libx264` está listado |

## Saiba mais

- [Guia de início rápido da reCamera Pro](https://wiki.seeedstudio.com/pt-br/recamera_pro_getting_started/)
- [SDK da reCamera Pro e aplicativo mínimo](https://wiki.seeedstudio.com/pt-br/recamera_pro_sdk_setup/)
- [Documentação WebRTC do go2rtc](https://github.com/AlexxIT/go2rtc/blob/master/internal/webrtc/README.md)

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
