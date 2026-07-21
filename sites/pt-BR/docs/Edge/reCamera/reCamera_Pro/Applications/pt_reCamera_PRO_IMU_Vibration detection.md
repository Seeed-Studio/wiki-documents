---
title: Detecção de Inclinação e Agitação
description: Este artigo explica como usar o giroscópio ICM-42670-P integrado da reCamera Pro para coletar dados de velocidade angular, implementar detecção de inclinação e agitação do dispositivo e reproduzir avisos de voz pelo alto-falante quando acionados.
keywords:
  - reCamera
  - reCamera Pro
  - IMU
  - Gyroscope
  - ICM-42670-P
  - Tilt Detection
  - Shake Detection
  - ALSA
  - aplay
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif
slug: /recamera_pro_imu_tilt_shake_detection
sidebar_position: 1
last_update:
  date: 2026-06-11
  author: Sizhao zhou
createdAt: '2026-06-11'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_imu_tilt_shake_detection/
---

# Usando a IMU Integrada da reCamera Pro para Detecção de Inclinação e Agitação

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif" /></div>

## Introdução

Este artigo explica como usar a unidade de medição inercial (IMU) de seis eixos integrada da reCamera Pro — o giroscópio ICM-42670-P — para implementar detecção de inclinação e agitação do dispositivo. Quando o dispositivo é inclinado ou agitado, o sistema reproduz avisos de voz correspondentes pelo alto-falante integrado. Por meio deste tutorial, você aprenderá como ler dados brutos do giroscópio via driver IIO do Linux, reproduzir sons de aviso usando o driver de áudio ALSA e, por fim, integrar um programa completo de detecção e alerta.

## Preparação de Hardware
- uma reCamera Pro

<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>



## Princípio de Implementação

Coletando dados brutos de velocidade angular do giroscópio integrado (ICM-42670-P), o sistema determina se o dispositivo foi inclinado ou agitado. A implementação atual usa uma lógica simples baseada em limiar, que pode ser otimizada posteriormente de acordo com os requisitos reais.

### Detecção de Agitação

Quando o valor absoluto da velocidade angular em qualquer eixo excede um limiar predefinido, isso é determinado como uma agitação.

### Detecção de Inclinação

Quando o valor absoluto da velocidade angular em qualquer eixo excede um limiar predefinido, isso é determinado como uma inclinação.

## Aquisição de Dados do Giroscópio Integrado

O ambiente Linux da reCamera Pro usa o driver IIO (Industrial I/O), que expõe dados e configurações do sensor por meio da interface sysfs, permitindo que aplicações em espaço de usuário acessem essas informações. O caminho dos dados do sensor é:

```
/sys/bus/iio/devices/iio:device1
```

Os arquivos de dados brutos do giroscópio são expostos neste diretório, como mostrado na imagem abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_dir.png" /></div>

Para obter os dados brutos do giroscópio, basta ler o arquivo correspondente. Por exemplo, para obter os dados do eixo X do giroscópio, leia o arquivo `in_anglvel_x_raw`:

```bash
cat /sys/bus/iio/devices/iio:device1/in_anglvel_x_raw
```

O resultado da execução é mostrado abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_data.png" /></div>

## Uso do Alto-falante Integrado

O alto-falante integrado da reCamera Pro é controlado por meio do driver padrão ALSA do Linux. Você pode visualizar os dispositivos de placa de som atuais com o seguinte comando:

```bash
aplay -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_aplay_l.png" /></div>

Use o seguinte comando para reproduzir um arquivo de áudio:

```bash
aplay test.wav
```

:::note
`aplay` é um reprodutor ALSA PCM. Ele só pode reproduzir dados em formato PCM/WAV e não consegue decodificar MP3. Você pode usar o seguinte comando para converter MP3 para o formato WAV:

```bash
ffmpeg -i test.mp3 test.wav
```
:::

## Código de Implementação Básico

Agora que entendemos como ler dados brutos do giroscópio e reproduzir áudio, vamos escrever o código para implementar toda a funcionalidade.

### Aquisição de Dados do Giroscópio

Abaixo está um exemplo de função mínima demonstrando como coletar dados do giroscópio no eixo X. Você pode estender essa função para obter dados de outros eixos.

```python
#!/usr/bin/env python3

DEVICE = "/sys/bus/iio/devices/iio:device1"

with open(f"{DEVICE}/in_anglvel_scale", "r") as f:
    scale = float(f.read().strip())

with open(f"{DEVICE}/in_anglvel_x_raw", "r") as f:
    raw = int(f.read().strip())

gyro_x = raw * scale

print(f"Gyroscope X: {gyro_x:.6f} rad/s")
```

### Reprodução de Áudio

Quando o dispositivo aciona uma inclinação ou agitação, é necessário reproduzir um aviso de voz correspondente. O código a seguir demonstra como reproduzir áudio usando Python:

```python
#!/usr/bin/env python3

import subprocess

AUDIO = "test.wav"

subprocess.run([
    "aplay",
    AUDIO
])
```

### Código Final de Implementação

- Quando o dispositivo é agitado, ele reproduz **"Aviso: Não agite o dispositivo"**.
- Quando o dispositivo é inclinado, ele reproduz **"Aviso: O equipamento tombou. Verifique imediatamente o estado do equipamento para evitar qualquer acidente"**.

O código relevante pode ser baixado em [reCamera_PRO_IMU_Detect](https://drive.google.com/drive/folders/1-3RTc0urrzMJVWGHqnLKwSMuZavLV9O0?usp=drive_link).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_CODE.png" /></div>

## Implantação do Código

As etapas a seguir descrevem como implantar o código na reCamera Pro e executá-lo:

1. Envie a pasta inteira para a reCamera Pro via SSH:

```bash
scp -r ./icm42670_project root@deviceIP:/userdata
```

2. Execute o programa principal:

```bash
./main.py
```

:::note
1. O programa executará uma operação de calibração na primeira execução. Certifique-se de que o dispositivo esteja colocado de forma estável antes de executar `main.py`. Se for necessário recalibrar (a duração padrão da calibração é de 3 segundos), execute:

```bash
./main.py --force-calib
```

2. Ver visualização de ajuda de uso do código:

```bash
./main.py --help
```
:::

## Solução de Problemas

- **Não é possível ler dados do giroscópio**: Verifique se o caminho `/sys/bus/iio/devices/iio:device1` existe e se o arquivo `in_anglvel_x_raw` é legível. Se o caminho não existir, o driver IIO pode não estar carregado; verifique os módulos do kernel.
- **Falha na reprodução de áudio**: Confirme se o arquivo de áudio está em formato WAV e se o comando `aplay` está disponível. Se o alto-falante estiver sem som, verifique as configurações de volume do ALSA.
- **Falha na calibração**: Certifique-se de que o dispositivo esteja parado e nivelado durante a calibração. Se o tempo de calibração for insuficiente, use `--force-calib` para recalibrar.


## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>