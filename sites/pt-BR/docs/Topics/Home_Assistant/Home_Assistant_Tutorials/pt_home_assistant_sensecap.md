---
description: Integração do Home Assistant para sensores LoRaWAN SenseCAP
title: Integração SenseCAP para Home Assistant
keywords:
  - SenseCAP M2 Multi-Platform
  - Home Assistant
  - LoRaWAN Sensors
slug: /home_assistant_sensecap
last_update:
  date: 10/19/2023
  author: JoJang
createdAt: '2023-10-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/home_assistant_sensecap/
---

# Integre automaticamente todos os seus sensores SenseCAP ao Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/overview.jpg" alt="pir" width={800} height="auto" /></p>

## 1. Configuração do SenseCAP M2 Multi-Platform

### 1.1 Configuração da rede LoRa

**Passo 1.** Clique em **LoRa** e escolha **LoRa Network**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lora_network.png"/></div>

**Passo 2.** Escolha o modo Local Network Server e preencha as informações do seu host MQTT **(incluindo host, nome de usuário, senha e porta).** Depois clique em **Save&&Apply**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lns.png"/></div>

Neste ponto concluímos a configuração do modo servidor e iremos configurar o ChirpStack mais tarde.

### 1.2 Configuração do ChirpStack

**Passo 1.** Abra a página de configuração do ChirpStack e então **clique em Device profiles**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles.png"/></div>

**Passo 2.** Clique em **Add device profile**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles_2.png"/></div>

**Passo 3.** Primeiro, preencha o perfil do dispositivo de acordo com a sua configuração SenseCAP: **Name, Region, MAC version** e **Regional parameters revision**, em que o **Expected uplink interval** precisa ser alterado para **120**, podendo ser ajustado conforme suas próprias necessidades. No segundo passo, clicamos em **Codec** na parte superior
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_general.png"/></div>

**Passo 4.** Nesta etapa, precisamos escolher o decodificador de acordo com o nosso modelo de sensor; o código pode ser encontrado [Here](https://github.com/Seeed-Solution/SenseCAP-Decoder.git). Precisamos selecionar o código na pasta **TTN** como nosso decodificador.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_decoder.png"/></div>

**Passo 5.** No próximo passo, vamos adicionar dispositivos. Clique em **Applications**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_applications.png"/></div>

**Passo 6.** Clique em **Add applications**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_2.png"/></div>

**Passo 7.** Preencha as informações da aplicação e clique em **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_3.png"/></div>

**Passo 8.** Use o **SenseCAP Mate APP** para configurar o sensor, defina a **Platform** como **Other Platform**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/SenseCAP_Mate.jpg"/></div>

**Passo 9.** Clique em **Add device**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice.png"/></div>

**Passo 10.** Preencha as informações do seu dispositivo e clique em **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_2.png"/></div>

**Passo 11.** Clique no **DevEUI** dos seus dispositivos para mudar de página
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_3.png"/></div>

**Passo 12.** Clique em **OTAA keys** e insira sua **Application key** do sensor SenseCAP. Depois clique em **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_appkey.png"/></div>

**Passo 13.** Ative o seu sensor SenseCAP e aguarde até que ele se conecte automaticamente ao LoRaWAN. Em seguida, você poderá ver os dados enviados pelo sensor em **Events** e **LoRaWAN frames**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_data.png"/></div>

**Passo 14.** Neste ponto, concluímos todas as configurações do gateway M2.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_updata.png"/></div>

:::tip
Ao adicionar um dispositivo ao gateway M2 pela **primeira vez**, aguarde pelo menos **2-5** minutos até que os dados reportados por **up** possam ser vistos em **Events**. Em seguida, a inicialização da adição do dispositivo estará concluída. Depois disso, podemos configurar o plug-in do Home Assistant.
:::

## 2. Configuração do Home Assistant

### 2.1 Instalação

**1.HACS**

- Primeira instalação
  - 1.HACS > Integrations >
  - 2.Clique no canto superior direito > Custom repositories ：

    ```
      Repository: https://github.com/Seeed-Solution/home-assistant-SenseCAP.git
      Category: Intergration
    ```

  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_2.png"/></div>  

  - 3.Clique em ADD
  - 4.HACS > Integrations > ➕ EXPLORE & DOWNLOAD REPOSITORIES > Seeed Studio-SenseCAP > DOWNLOAD THIS REPOSITORY

  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_3.png"/></div>  

- Atualizar componente
    > HACS > Integrations > [`Seeed Studio-SenseCAP`](https://my.home-assistant.io/redirect/hacs_repository/?owner=Seeed-Solution&repository=https%3A%2F%2Fgithub.com%2FSeeed-Solution%2Fhome-assistant-SenseCAP.git) > UPDATE / Redownload

**2.Instalar via complemento SSH & Web Terminal**

1. Abra o terminal SSH e insira o seguinte comando:

```
cd ~/config/custom_components && git clone https://github.com/Seeed-Solution/home-assistant-SenseCAP.git && cd home-assistant-SenseCAP/custom_components && mv sensecap ../../ && cd ../../ && rm -r home-assistant-SenseCAP
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/Install.jpg"/></div>

2. Reinicie o núcleo do HA
3. Adicione a integração

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/add_intergration.png"/></div>

### 2.2 Configuração

1. Insira suas informações de MQTT e clique em **SUBMIT**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_1.png"/></div>

2. Aguarde alguns minutos (**o tempo de uplink depende da sua configuração no M2 Chirpstack e no SenseCAP Mate APP**) e clique em **Notifications** na barra lateral esquerda. Em seguida, podemos ver que os sensores SenseCAP foram adicionados automaticamente ao HA. Clique em **Check it out** e vá para a integração

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_2.png"/></div>

3. Clique em um dos dispositivos e podemos ver que todas as entidades foram criadas automaticamente e adicionadas ao dispositivo. Clique em **ADD TO DASHBOARD** para adicionar diretamente todas as entidades de todo o dispositivo ao painel na forma de cartões

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_3.png"/></div>

4. Vá para **Overview** e podemos encontrar o cartão que acabamos de adicionar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_4.png"/></div>

5. Clique em **Edit dashboard**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_5.png"/></div>

6. Clique em **EDIT** para editar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_6.png"/></div>

7. Podemos adicionar uma imagem de cabeçalho para decorar o cartão

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_7.png"/></div>

8. Substitua a URL pela sua para exibir sua imagem favorita

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_8.png"/></div>

9. Escolha a entidade a ser modificada

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_9.png"/></div>

10. Altere o ícone para um que seja semelhante ao tipo de entidade do sensor

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_10.png"/></div>

11. Agora concluímos aqui todo o processo de configuração do plug-in. Posteriormente, você pode realizar otimizações personalizadas de acordo com suas próprias necessidades

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_11.png"/></div>

12. Abaixo estão as representações visuais dos efeitos na página "Overview" após adicionar vários modelos de sensores SenseCAP.

O que foi mencionado acima constitui o tutorial completo passo a passo para integrar o SenseCAP à plataforma Home Assistant. O Home Assistant tem a capacidade de integrar perfeitamente diferentes tipos de dispositivos de várias plataformas em um único ecossistema, facilitando a interoperabilidade entre plataformas. Isso tem um profundo significado para a abrangência do ecossistema de casa inteligente. Atualmente, a Seeed também se tornou parte da grande comunidade do Home Assistant, possibilitando a integração de nossos dispositivos SenseCAP à plataforma. Acreditamos que esse esforço contribuirá ainda mais para o fortalecimento e o crescimento do ecossistema da Internet das Coisas!

:::tip
**A integração SenseCAP para Home Assistant é completamente open source, e você pode baixar o código-fonte do projeto aqui**: [https://github.com/Seeed-Solution/home-assistant-SenseCAP.git](https://github.com/Seeed-Solution/home-assistant-SenseCAP.git).
:::

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
