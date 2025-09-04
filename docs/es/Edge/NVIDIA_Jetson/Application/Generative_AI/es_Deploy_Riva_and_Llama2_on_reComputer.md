---
description: Desplegar Riva y Llama2 en reComputer
title: Chatbot de Voz Local
keywords:
- reComputer
- LLM
- Chatbot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Local_Voice_Chatbot
last_update:
  date: 01/14/2024
  author: Youjiang
---


# Chatbot de Voz Local : Desplegar Riva y Llama2 en reComputer

## Introducción

A medida que la tecnología de inteligencia artificial evoluciona rápidamente, la interacción por voz se ha convertido en un modo cada vez más importante de interacción humano-computadora. Especialmente en campos como hogares inteligentes, asistentes personales y soporte de atención al cliente, la demanda de chatbots de voz está creciendo significativamente. Sin embargo, la mayoría de los chatbots de voz existentes dependen de servicios de computación en la nube, lo que genera preocupaciones sobre la privacidad de los datos y la latencia de red hasta cierto punto.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/workflow.png" />
</div>

Este proyecto tiene como objetivo abordar estos problemas construyendo un chatbot de voz que opera localmente. Utilizando [Nvidia Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/quick-start-guide.html) y [Meta Llama2](https://huggingface.co/meta-llama), hemos desarrollado un sistema de interacción por voz seguro, privado y de respuesta rápida.

## Prerrequisitos

- Dispositivo Jetson con más de 16GB de memoria.
- El dispositivo de hardware necesita tener preinstalado el sistema operativo jetpack [5.1.1](https://wiki.seeedstudio.com/es/reComputer_Intro/).
- [Altavoz y Micrófono](https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html?queryID=dd9c8d91c63781d66776771a7ee5ec01&objectID=4247&indexName=bazaar_retailer_products).

**Nota:** Completé todos los experimentos usando [Jetson AGX Orin 32GB H01 Kit](https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=012e528073e90bf80afd3880f3fc2b13&objectID=5569&indexName=bazaar_retailer_products), pero puedes intentar cargar modelos más pequeños con un dispositivo que tenga menos memoria.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/jetson_agx_orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Comenzando

### Conexión de Hardware

- Conecta el dispositivo de entrada/salida de audio al reComputer.
- Enciende el reComputer y asegúrate de que tenga acceso normal a la red.

### Instalar Servidor Riva

Por favor consulta [aquí](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/quick-start-guide.html#embedded) para información más detallada.

**Paso1.**  Accede e inicia sesión en [NVIDIA NGC](https://catalog.ngc.nvidia.com/?filters=&orderBy=weightPopularDESC&query=).

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_1.png" />
</div>

**Paso2.** Obtén la Clave API de NGC.

`Cuenta(esquina superior derecha)` --> `Configuración` --> `Obtener Clave API` --> `Generar Clave API` --> `Confirmar`

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_2.png" />
</div>

:::info
Por favor registra la Clave API generada.
:::

**Paso3.** Configurar NGC en reComputer

Abre la terminal de reComputer (Puedes abrir rápidamente una terminal en el escritorio de reComputer usando las teclas de acceso directo `Ctrl+Alt+T`, o puedes acceder remotamente a la terminal de reComputer usando otra computadora.) e ingresa los siguientes comandos uno por uno.

```sh
cd ~ && mkdir ngc_setup && cd ngc_setup
wget --content-disposition https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/3.36.0/files/ngccli_arm64.zip && unzip ngccli_arm64.zip 
chmod u+x ngc-cli/ngc
echo "export PATH=\"\$PATH:$(pwd)/ngc-cli\"" >> ~/.bash_profile && source ~/.bash_profile
ngc config set
```

Ingresa la información relevante en la interfaz interactiva del terminal.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_3.png" />
</div>

**Paso 4.** Instala y ejecuta el servidor Riva en reComputer.

En el terminal de reComputer, ingresa los siguientes comandos.

```sh
cd ~ && mkdir riva_setup && cd riva_setup
ngc registry resource download-version nvidia/riva/riva_quickstart_arm64:2.13.1
cd riva_quickstart_v2.13.1
```

Usa `Vim` para modificar el archivo de configuración.

```sh
vim config.sh

# Press the `A` key on the keyboard to enter edit mode.
# Edit lines 18 and 20 following the instructions below.

# service_enabled_nlp=true --> service_enabled_nlp=false
# service_enabled_nmt=true --> service_enabled_nmt=false

# Press the `ESC` on the keyboard to exit edit mode, then use the shortcut `Shift+Z Z` to save the edited content and close the editor.
```

El archivo de configuración después de la edición:

<details>

<summary> config.sh </summary>

```sh
# Copyright (c) 2022, NVIDIA CORPORATION.  All rights reserved.
#
# NVIDIA CORPORATION and its licensors retain all intellectual property
# and proprietary rights in and to this software, related documentation
# and any modifications thereto.  Any use, reproduction, disclosure or
# distribution of this software and related documentation without an express
# license agreement from NVIDIA CORPORATION is strictly prohibited.

# GPU family of target platform. Supported values: tegra, non-tegra
riva_target_gpu_family="non-tegra"

# Name of tegra platform that is being used. Supported tegra platforms: orin, xavier
riva_tegra_platform="orin"

# Enable or Disable Riva Services
# For any language other than en-US: service_enabled_nlp must be set to false
service_enabled_asr=true
service_enabled_nlp=false
service_enabled_tts=true
service_enabled_nmt=false

# Configure translation services
# Text-to-Text translation (T2T):
# - service_enabled_nmt must be set to true
# - Uncomment desired model for source and target languages in models_nmt field
# Speech-to-Text translation (S2T):
# - service_enabled_asr, service_enabled_nmt must be set to true
# - Set language code of input speech in the asr_language_code field
# - Uncomment desired model for source and target languages in models_nmt field
# Speech-to-Speech translation (S2S):
# - service_enabled_asr, service_enabled_nmt, service_enabled_tts must be set to true
# - Set language code of input speech in the asr_language_code field
# - Uncomment desired model for source and target languages in models_nmt field
# - Set language code of output speech in the tts_language_code field

# Enable Riva Enterprise
# If enrolled in Enterprise, enable Riva Enterprise by setting configuration
# here. You must explicitly acknowledge you have read and agree to the EULA.
# RIVA_API_KEY=<ngc api key>
# RIVA_API_NGC_ORG=<ngc organization>
# RIVA_EULA=accept

# Language code to fetch ASR models of a specific language
# Supported language codes: ar-AR, en-US, en-GB, de-DE, es-ES, es-US, fr-FR, hi-IN, it-IT, ja-JP, ru-RU, ko-KR, pt-BR, zh-CN, es-en-US, ja-en-JP
# For multiple languages enter space separated language codes.
asr_language_code=("en-US")

# ASR acoustic model architecture
# Supported values are: conformer, conformer_xl (en-US + amd64 only), citrinet_1024, citrinet_256 (en-US + arm64 only), jasper (en-US + amd64 only), quartznet (en-US + amd64 only)
asr_acoustic_model=("conformer")

# ASR acoustic model architecture variant
# Supported values for the architecture are:
# conformer: unified(de-DE, ja-JP and zh-CN only), ml_cs(es-en-US only), unified_ml_cs(ja-en-JP only)
# For the default model, keep the field empty
asr_acoustic_model_variant=("")

# ASR decoder type to be used
# If you'd like to use greedy decoder for ASR instead of flashlight/os2s decoder then set the below $use_asr_greedy_decoder to true
use_asr_greedy_decoder=false

# Language code to fetch TTS models of a specific language
# Supported language codes: en-US, es-ES, it-IT, de-DE, zh-CN
# For multiple languages enter space separated language codes
tts_language_code=("en-US")

# Specify one or more GPUs to use
# specifying more than one GPU is currently an experimental feature, and may result in undefined behaviours.
gpus_to_use="device=0"

# Specify the encryption key to use to deploy models
MODEL_DEPLOY_KEY="tlt_encode"

# Locations to use for storing models artifacts
#
# If an absolute path is specified, the data will be written to that location
# Otherwise, a Docker volume will be used (default).
#
# riva_init.sh will create a `rmir` and `models` directory in the volume or
# path specified.
#
# RMIR ($riva_model_loc/rmir)
# Riva uses an intermediate representation (RMIR) for models
# that are ready to deploy but not yet fully optimized for deployment. Pretrained
# versions can be obtained from NGC (by specifying NGC models below) and will be
# downloaded to $riva_model_loc/rmir by `riva_init.sh`
#
# Custom models produced by NeMo or TLT and prepared using riva-build
# may also be copied manually to this location $(riva_model_loc/rmir).
#
# Models ($riva_model_loc/models)
# During the riva_init process, the RMIR files in $riva_model_loc/rmir
# are inspected and optimized for deployment. The optimized versions are
# stored in $riva_model_loc/models. The riva server exclusively uses these
# optimized versions.
riva_model_loc="riva-model-repo"

if [[ $riva_target_gpu_family == "tegra" ]]; then
    riva_model_loc="`pwd`/model_repository"
fi

# The default RMIRs are downloaded from NGC by default in the above $riva_rmir_loc directory
# If you'd like to skip the download from NGC and use the existing RMIRs in the $riva_rmir_loc
# then set the below $use_existing_rmirs flag to true. You can also deploy your set of custom
# RMIRs by keeping them in the riva_rmir_loc dir and use this quickstart script with the
# below flag to deploy them all together.
use_existing_rmirs=false

# Ports to expose for Riva services
riva_speech_api_port="50051"

# NGC orgs
riva_ngc_org="nvidia"
riva_ngc_team="riva"
riva_ngc_image_version="2.13.1"
riva_ngc_model_version="2.13.0"

# Pre-built models listed below will be downloaded from NGC. If models already exist in $riva-rmir
# then models can be commented out to skip download from NGC

########## ASR MODELS ##########

models_asr=()

for lang_code in ${asr_language_code[@]}; do
    modified_lang_code="${lang_code//-/_}"
    modified_lang_code=${modified_lang_code,,}

    decoder=""
    if [ "$use_asr_greedy_decoder" = true ]; then
      decoder="_gre"
    fi

    if [[ ${asr_acoustic_model_variant} != "" ]]; then
      if [[ ${asr_acoustic_model} == "conformer" && ${asr_acoustic_model_variant} != "unified" && ${asr_acoustic_model_variant} != "ml_cs" && ${asr_acoustic_model_variant} != "unified_ml_cs" ]]; then
        echo "Valid variants for Conformer are: unified, ml_cs and unified_ml_cs."
        exit 1
      elif [[ ${asr_acoustic_model} != "conformer" ]]; then
        echo "Invalid variant for ${asr_acoustic_model}."
        exit 1
      fi
      asr_acoustic_model_variant="_${asr_acoustic_model_variant}"
    fi

    if [[ ${asr_acoustic_model} == "conformer_xl" && ${lang_code} != "en-US" ]]; then
      echo "Conformer-XL acoustic model is only available for language code en-US."
      exit 1
    fi

    if [[ ${asr_acoustic_model_variant} == "_unified" && ${lang_code} != "de-DE" && ${lang_code} != "ja-JP" && ${lang_code} != "zh-CN" ]]; then
      echo "Unified Conformer acoustic model is only available for language code de-DE, ja-JP and zh-CN."
      exit 1
    fi

    if [[ ${asr_acoustic_model_variant} == "_ml_cs" && ${lang_code} != "es-en-US" ]]; then
      echo "Multilingual Code Switch Conformer acoustic model is only available for language code es-en-US."
      exit 1
    fi

    if [[ ${asr_acoustic_model_variant} == "_unified_ml_cs" && ${lang_code} != "ja-en-JP" ]]; then
      echo "Unified Multilingual Code Switch Conformer acoustic model is only available for language code ja-en-JP."
      exit 1
    fi

    if [[ $riva_target_gpu_family  == "tegra" ]]; then

      if [[ ${asr_acoustic_model} == "jasper" || \
            ${asr_acoustic_model} == "quartznet" || \
            ${asr_acoustic_model} == "conformer_xl" ]]; then
          echo "Conformer-XL, Jasper and Quartznet models are not available for arm64 architecture"
          exit 1
      fi

      if [[ ${asr_acoustic_model} == "citrinet_256" && ${lang_code} != "en-US" ]]; then
        echo "For arm64 architecture, citrinet_256 acoustic model is only available for language code en-US."
        exit 1
      fi

      models_asr+=(
      ### Streaming w/ CPU decoder, best latency configuration
          "${riva_ngc_org}/${riva_ngc_team}/models_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"

      ### Offline w/ CPU decoder
      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_ofl${decoder}:${riva_ngc_model_version}"
      )
    else

      if [[ ${asr_acoustic_model} != "conformer" && \
            ${asr_acoustic_model} != "conformer_xl" && \
            ${asr_acoustic_model} != "citrinet_1024" && \
            ${asr_acoustic_model} != "jasper" && \
            ${asr_acoustic_model} != "quartznet" ]]; then
        echo "For amd64 architecture, valid acoustic models are conformer, conformer_xl, citrinet_1024, jasper and quartznet."
        exit 1
      fi

      if [[ (${asr_acoustic_model} == "jasper" || \
            ${asr_acoustic_model} == "quartznet") && \
            ${lang_code} != "en-US" ]]; then
        echo "jasper and quartznet acoustic models are only available for language code en-US."
        exit 1
      fi

      models_asr+=(
      ### Streaming w/ CPU decoder, best latency configuration
          "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str${decoder}:${riva_ngc_model_version}"

      ### Streaming w/ CPU decoder, best throughput configuration
      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_str_thr${decoder}:${riva_ngc_model_version}"

      ### Offline w/ CPU decoder
          "${riva_ngc_org}/${riva_ngc_team}/rmir_asr_${asr_acoustic_model}${asr_acoustic_model_variant}_${modified_lang_code}_ofl${decoder}:${riva_ngc_model_version}"
      )
    fi

    ### Punctuation model
    if [[ ${asr_acoustic_model_variant} != "_unified" && ${asr_acoustic_model_variant} != "_unified_ml_cs" ]]; then
      pnc_lang=$(echo $modified_lang_code | cut -d "_" -f 1)
      pnc_region=${modified_lang_code##*_}
      modified_lang_code=${pnc_lang}_${pnc_region}
      if [[ $riva_target_gpu_family == "tegra" ]]; then
        models_asr+=(
            "${riva_ngc_org}/${riva_ngc_team}/models_nlp_punctuation_bert_base_${modified_lang_code}:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
        )
      else
        models_asr+=(
            "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_punctuation_bert_base_${modified_lang_code}:${riva_ngc_model_version}"
        )
      fi
    fi
done

### Speaker diarization model
models_asr+=(
#    "${riva_ngc_org}/${riva_ngc_team}/rmir_diarizer_offline:${riva_ngc_model_version}"
)

########## NLP MODELS ##########

if [[ $riva_target_gpu_family == "tegra" ]]; then
  models_nlp=(
  ### Bert base Punctuation model
      "${riva_ngc_org}/${riva_ngc_team}/models_nlp_punctuation_bert_base_en_us:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"

  ### BERT Base Intent Slot model for misty domain fine-tuned on weather, smalltalk/personality, poi/map datasets.
  #    "${riva_ngc_org}/${riva_ngc_team}/models_nlp_intent_slot_misty_bert_base:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"

  ### DistilBERT Intent Slot model for misty domain fine-tuned on weather, smalltalk/personality, poi/map datasets.
  #    "${riva_ngc_org}/${riva_ngc_team}/models_nlp_intent_slot_misty_distilbert:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
  )
else
  models_nlp=(
  ### Bert base Punctuation model
      "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_punctuation_bert_base_en_us:${riva_ngc_model_version}"

  ### BERT base Named Entity Recognition model fine-tuned on GMB dataset with class labels LOC, PER, ORG etc.
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_named_entity_recognition_bert_base:${riva_ngc_model_version}"

  ### BERT Base Intent Slot model fine-tuned on weather dataset.
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_intent_slot_bert_base:${riva_ngc_model_version}"

  ### BERT Base Question Answering model fine-tuned on Squad v2.
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_question_answering_bert_base:${riva_ngc_model_version}"

  ### Megatron345M Question Answering model fine-tuned on Squad v2.
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_question_answering_megatron:${riva_ngc_model_version}"

  ### Bert base Text Classification model fine-tuned on 4class (weather, meteorology, personality, nomatch) domain model.
  #    "${riva_ngc_org}/${riva_ngc_team}/rmir_nlp_text_classification_bert_base:${riva_ngc_model_version}"
  )
fi

########## TTS MODELS ##########

models_tts=()

for lang_code in ${tts_language_code[@]}; do
  modified_lang_code="${lang_code//-/_}"
  modified_lang_code=${modified_lang_code,,}

  if [[ $riva_target_gpu_family == "tegra" ]]; then
    if [[ ${lang_code} == "en-US" ]]; then
      models_tts+=(
      ### These models have been trained with energy conditioning and use the International Phonetic Alphabet (IPA) for inference and training.
          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_en_us_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
      #    "${riva_ngc_org}/${riva_ngc_team}/models_tts_radtts_hifigan_en_us_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"

      ### This model uses the ARPABET for inference and training.
      #    "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_en_us:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
      )
    elif [[ ${lang_code} == "zh-CN" ]]; then
      models_tts+=(
      ### This model is multi-speaker with emotion and and use the International Phonetic Alphabet (IPA) for inference and training.
          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_zh_cn_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
      )
    else
      ### These models are single-speaker and use the International Phonetic Alphabet (IPA) for inference and training.
      if [[ ${lang_code} != "de-DE" ]]; then
        models_tts+=(
            "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_${modified_lang_code}_f_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
        )
      fi
      models_tts+=(
          "${riva_ngc_org}/${riva_ngc_team}/models_tts_fastpitch_hifigan_${modified_lang_code}_m_ipa:${riva_ngc_model_version}-${riva_target_gpu_family}-${riva_tegra_platform}"
      )
    fi
  else
    if [[ ${lang_code} == "en-US" ]]; then
      models_tts+=(
      ### These models have been trained with energy conditioning and use the International Phonetic Alphabet (IPA) for inference and training.
          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_en_us_ipa:${riva_ngc_model_version}"
      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_radtts_hifigan_en_us_ipa:${riva_ngc_model_version}"

      ### This model uses the ARPABET for inference and training.
      #    "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_en_us:${riva_ngc_model_version}"
      )
    elif [[ ${lang_code} == "zh-CN" ]]; then
      models_tts+=(
      ### This model is multi-speaker with emotion and and use the International Phonetic Alphabet (IPA) for inference and training.
          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_zh_cn_ipa:${riva_ngc_model_version}"
      )
    else
      ### These models are single-speaker and use the International Phonetic Alphabet (IPA) for inference and training.
      if [[ ${lang_code} != "de-DE" ]]; then
        models_tts+=(
            "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_${modified_lang_code}_f_ipa:${riva_ngc_model_version}"
        )
      fi
      models_tts+=(
          "${riva_ngc_org}/${riva_ngc_team}/rmir_tts_fastpitch_hifigan_${modified_lang_code}_m_ipa:${riva_ngc_model_version}"
      )
    fi
  fi
done

######### NMT models ###############

# Models follow Source language _ One or more target languages model architecture
# Source or target language "any" means the model supports 32 languages mentioned in docs.
# e.g., rmir_nmt_de_en_24x6 is a German to English 24x6 bilingual model
# and rmir_megatronnmt_en_any_500m is a English to 32 languages megatron model

models_nmt=(
  ###### Bilingual models
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_de_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_es_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_zh_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_ru_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_fr_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_de_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_es_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_ru_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_zh_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_fr_en_24x6:${riva_ngc_model_version}"

  ###### Multilingual models
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_deesfr_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_en_deesfr_12x2:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_deesfr_en_24x6:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_nmt_deesfr_en_12x2:${riva_ngc_model_version}"

  ###### Megatron models
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_megatronnmt_any_en_500m:${riva_ngc_model_version}"
  #"${riva_ngc_org}/${riva_ngc_team}/rmir_megatronnmt_en_any_500m:${riva_ngc_model_version}"
)

NGC_TARGET=${riva_ngc_org}
if [[ ! -z ${riva_ngc_team} ]]; then
  NGC_TARGET="${NGC_TARGET}/${riva_ngc_team}"
else
  team="\"\""
fi

# Specify paths to SSL Key and Certificate files to use TLS/SSL Credentials for a secured connection.
# If either are empty, an insecure connection will be used.
# Stored within container at /ssl/servert.crt and /ssl/server.key
# Optional, one can also specify a root certificate, stored within container at /ssl/root_server.crt
ssl_server_cert=""
ssl_server_key=""
ssl_root_cert=""

# define Docker images required to run Riva
image_speech_api="nvcr.io/${NGC_TARGET}/riva-speech:${riva_ngc_image_version}"

# define Docker images required to setup Riva
image_init_speech="nvcr.io/${NGC_TARGET}/riva-speech:${riva_ngc_image_version}-servicemaker"

# daemon names
riva_daemon_speech="riva-speech"
if [[ $riva_target_gpu_family != "tegra" ]]; then
    riva_daemon_client="riva-client"
fi
```

</details>

Usa un método similar para modificar `/etc/docker/daemon.json`.

```sh
sudo vim /etc/docker/daemon.json
# Add this line >> "default-runtime": "nvidia"

# Press the `ESC` on the keyboard to exit edit mode, then use the shortcut `Shift+Z Z` to save the edited content and close the editor.

sudo systemctl restart docker
```

El archivo de configuración después de editarlo queda así:

<details>

<summary> /etc/docker/daemon.json </summary>

```json
{   
    "default-runtime": "nvidia",
        "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

</details>

Usa el siguiente comando para inicializar e iniciar Riva:

```sh
sudo bash riva_init.sh
sudo bash riva_start.sh
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/setup_riva_4.png" />
</div>

:::info
Por favor, ten en cuenta que necesitas mantener esta terminal activa.
:::

### Instalar y ejecutar LLM

Para simplificar el proceso de instalación, podemos referirnos al proyecto [jetson-containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/text-generation-inference) de Dusty para instalar [text generation inference](https://github.com/huggingface/text-generation-inference), y usar text generation inference para cargar el modelo de lenguaje grande [Llama2 7B](https://huggingface.co/meta-llama/Llama-2-7b-chat-hf). Abre una nueva terminal y ejecuta el siguiente comando.

```sh
cd ~
git clone https://github.com/dusty-nv/jetson-containers.git
cd jetson-containers
pip install -r requirements.txt
./run.sh $(./autotag text-generation-inference)
export HUGGING_FACE_HUB_TOKEN=<your hugging face token>
text-generation-launcher --model-id meta-llama/Llama-2-7b-chat-hf --port 8899
```

:::info
Puedes obtener el token de hugging face [aquí](https://huggingface.co/docs/hub/security-tokens).
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/install_run_llm.png" />
</div>

:::info
Ten en cuenta que necesitas mantener esta terminal activa.
:::

### Clona la demo del chatbot local e intenta ejecutarla

Ahora, deberías tener al menos dos terminales abiertas, una ejecutando el servidor Riva y la otra ejecutando el servidor de inferencia de generación de texto. A continuación, necesitamos abrir una nueva terminal para ejecutar nuestra demo.

```sh
cd ~
git clone https://github.com/yuyoujiang/Deploy-Riva-LLama-on-Jetson.git
cd Deploy-Riva-LLama-on-Jetson

# Query audio input/output devices.
python3 local_chatbot.py --list-input-devices
python3 local_chatbot.py --list-output-devices

python3 local_chatbot.py --input-device <your device id> --output-device <your device id>
# For example: python3 local_chatbot.py --input-device 25 --output-device 30
```

## Demostración del Efecto

<div align="center">
<iframe  width={560} height={315} src="https://www.youtube.com/embed/Nc3D-qITDoU?si=aWI7Z5IEprRKfuKE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
</div>

## Referencias

- [build-an-ai-chatbot-using-riva-and-openai](https://www.hackster.io/wxxniubi8/build-an-ai-chatbot-using-riva-and-openai-13dc41)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- https://github.com/huggingface/text-generation-inference
- https://huggingface.co/meta-llama

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
