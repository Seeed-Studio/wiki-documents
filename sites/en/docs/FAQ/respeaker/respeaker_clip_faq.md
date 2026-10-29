---
title: reSpeaker Clip FAQ
description: Frequently asked questions about official documentation, live transcription prototyping and mechanical resources for the reSpeaker Clip.
slug: /respeaker_clip_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker Clip FAQ
  - reSpeaker Clip documentation
  - live transcription
  - mechanical drawing
createdAt: '2026-09-01'
url: https://wiki.seeedstudio.com/respeaker_clip_faq/
updatedAt: '2026-09-03'
---

<div class="respeaker-faq-page">

# reSpeaker Clip FAQ

This page contains verified answers for the reSpeaker Clip. Each answer states the product variant and firmware mode it applies to, together with the date it was last verified against current official sources.

## Before you begin

- Confirm the exact product variant and the firmware mode (USB or I2S) the device is running.
- Check the current firmware version before applying version-specific steps.
- Answers on this page were last verified on 2026-09-01; re-check the linked official sources if you are reading this later.

<!-- RESPEAKER_FAQ_AUTO_START -->
## Documentation & Usage {#documentation-and-usage}

### Where can I find the current official ReSpeaker Clip documentation? {#official-documentation}

**Applies to:** ReSpeaker Clip users and developers

**Last verified:** 2026-09-01

Start with the current ReSpeaker Clip Getting Started page. Use the Basic SDK guide for host-side control and recording transfer, and use the Firmware Development guide only when changing device-side firmware. The older `/respeaker_clip_getting_started/` URL is obsolete and should not be bookmarked.

**Prerequisites:**

- Identify whether the task is normal product use, host-side SDK integration, or device-firmware development

1. Open Getting Started for setup, app workflows, specifications, and the current resource list.
2. Open the Basic SDK guide to control recording, manage sessions, or transfer files over BLE or Wi-Fi.
3. Open the Firmware Development guide only for building, flashing, debugging, or changing device-side behavior.
4. If a saved link still fails, replace it with the corresponding current Wiki URL before reporting a documentation outage.

**Success criteria:**

- The selected current guide loads and covers the intended product, host-SDK, or firmware-development layer

**Notes:**

- Some resources on Getting Started are still explicitly marked `Coming soon`; a live guide does not imply that every mechanical or firmware artifact has been published.

**References:**

- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/respeaker_clip/)
- [ReSpeaker Clip Basic SDK guide](https://wiki.seeedstudio.com/respeaker_clip_basic_sdk_guide/)
- [ReSpeaker Clip Firmware Development guide](https://wiki.seeedstudio.com/respeaker_clip_firmware_development_guide/)

### Can ReSpeaker Clip be used to prototype live conversation transcription? {#live-conversation-transcription}

**Applies to:** ReSpeaker Clip prototypes that display live speech-to-text on a separate computer or browser

**Last verified:** 2026-09-01

Yes, as part of a host-and-cloud prototype. The official Live STT example streams microphone audio from RTC-capable Clip firmware over BLE, converts completed speech utterances to text through an external STT provider, and displays the transcript in a browser. This is not documented as standalone on-device transcription.

**Prerequisites:**

- ReSpeaker Clip firmware with RTC live-streaming support
- Python 3.10 or later and a working BLE adapter
- Network access and an API key for the STT provider used by the official example

1. Follow the official Live STT application guide and install its Python requirements.
2. Connect to the ReSpeaker Clip over BLE and enter the STT provider key in the application settings.
3. Select `Start Streaming`, speak, and wait for each completed utterance to appear in the browser transcript.
4. Measure latency and transcription accuracy in the intended acoustic environment before treating the prototype as an accessibility aid.

**Success criteria:**

- The RTC session starts over BLE and spoken utterances appear as live text in the browser
- The tested latency and accuracy are recorded for the intended environment and language

**Notes:**

- Live STT uses BLE for the RTC audio stream; the documented Wi-Fi path is for the record-and-process workflows, not Live STT.
- The public example depends on an external transcription service and has not been presented as a certified medical or assistive device. Review privacy, connectivity, latency, and failure behavior for the real deployment.

**References:**

- [ReSpeaker Clip Live STT application guide](https://wiki.seeedstudio.com/respeaker_clip_python_build_app/)
- [ReSpeaker Clip RTC streaming guide](https://wiki.seeedstudio.com/respeaker_clip_rtc_streaming/)
- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/respeaker_clip/)

### Where can I get official ReSpeaker Clip dimensions or a mechanical drawing? {#mechanical-drawing-status}

**Applies to:** ReSpeaker Clip enclosure, fixture, or wearable-accessory design

**Last verified:** 2026-09-01

A revision-labeled mechanical drawing is not currently published. The official Getting Started resource table still marks `Mechanical Drawing` as `Coming soon`, and its physical-parameters table does not provide complete enclosure dimensions.

**Prerequisites:**

- The exact production hardware revision that the mechanical design must fit

1. Check the Mechanical Drawing row in the current official resource table.
2. Do not derive production dimensions from photos, marketing renders, or an unlabeled prototype.
3. For immediate design work, measure the exact physical unit and request a revision-labeled official drawing before freezing tooling or clearances.

**Success criteria:**

- The mechanical design is based on either a revision-labeled official drawing or verified measurements of the exact production revision

**Notes:**

- This is a time-sensitive publication-status answer and must be rechecked when the resource table changes.
- The absence of a public drawing does not establish that no internal mechanical file exists.

**References:**

- [ReSpeaker Clip specifications and resources](https://wiki.seeedstudio.com/respeaker_clip/)

## Product & Business {#product-and-business}

### Does the reSpeaker Clip app require a monthly subscription, and can I use OpenAI or my own self-hosted STT and LLM models? {#app-subscription-and-custom-providers}

**Applies to:** reSpeaker Clip app users choosing between the reSpeaker AI subscription and their own STT/LLM provider, on the current app release

**Last verified:** 2026-10-26

No. A subscription is optional. You can run the app entirely on STT and LLM services that you configure yourself — including a self-hosted model exposed at a Base URL — and that path consumes no reSpeaker AI quota. The optional reSpeaker AI subscription is for users who would rather not manage provider credentials and billing.

In the app's AI CONFIG page, the STT service takes Provider, Base URL, API key, and Language; the LLM service takes an API key, Base URL, and Model Name. Both provide a Test Connection action, so an OpenAI-hosted service or a model you host yourself can be checked before use as long as it exposes a compatible API.

| Plan | China mainland | Overseas | AI minutes | Notes |
| --- | --- | --- | --- | --- |
| Device activation bonus | ¥0 | \$0 | 300 one-time | Once per account, device, and payment account; valid 180 days |
| Lite | ¥19/month or ¥179/year | \$4.99/month or \$49.99/year | 300/month | Lowest paid tier |
| Pro | ¥59/month or ¥649/year | \$12.99/month or \$129/year | 1,200/month | Main recommended tier |
| Max | ¥115/month or ¥1,249/year | \$23.99/month or \$249/year | 2,400/month | High-priority processing queue |
| Top-up pack | ¥9/100 min; ¥25/300 min | \$1.99/100 min; \$4.99/300 min | 100 or 300 | Active subscribers only; valid until the current monthly cycle ends |

One platform AI minute covers one transcription plus one basic summary of that recording.

**Prerequisites:**

- The reSpeaker Clip app with the AI CONFIG page, and a device recording to test with
- For the custom-provider path: the provider's Base URL and API key, or a self-hosted endpoint reachable from the phone
- For the subscription path: a reSpeaker account with a plan or the device activation bonus

1. Open AI CONFIG in the app and check the STT Service and LLM Service entries.
2. For STT, enter Provider, Base URL, API key, and Language, tap Test Connection, then Save Configuration.
3. For the LLM, enter the API key, Base URL, and Model Name, tap Test Connection, then Save Configuration.
4. Process one recording and confirm that both the transcript and the summary come from the configured provider.
5. To use the reSpeaker AI subscription instead, select the platform AI service in the app; transcription and summarization then consume the plan's AI minutes.

**Success criteria:**

- Test Connection passes for both the STT and LLM services
- A test recording is transcribed and summarized through the configured provider
- On the custom-provider path, no reSpeaker AI quota is consumed

**Notes:**

- Plans, quotas, and prices are as of 2026-10-26. The app shows the current price and any regional variation, and prices and quotas may change.
- Monthly subscription quota does not roll over. A top-up pack is valid only until the current monthly cycle ends and does not roll over either. Cancelling auto-renew keeps the plan usable until the end of the paid period.
- On the custom-provider path the platform does not meter usage; provider charges, rate limits, and availability are your responsibility.
- A self-hosted endpoint must be reachable from the phone and expose a compatible API; the Test Connection action must pass before the service can be used.
- A simpler self-deployed LLM option is planned for a later release. Until then, a self-hosted LLM can already be configured through the custom Base URL and Model Name fields.

**References:**

- [reSpeaker Clip Getting Started (AI CONFIG, STT and LLM provider settings)](https://wiki.seeedstudio.com/respeaker_clip/)
- [reSpeaker Clip Live STT application guide](https://wiki.seeedstudio.com/respeaker_clip_python_build_app/)

<!-- RESPEAKER_FAQ_AUTO_END -->

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
