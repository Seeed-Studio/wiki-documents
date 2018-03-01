---
title: Raspberry Pi Introduction
nointro:
---

---
Raspberry Pi is originally designed and created by a non-profit organization in UK, the intension of creating this single-board it to promote the teaching of basic computer science in schools and developing countries. It is a credit-card size computer that preinstalls Linux, despite the small size, it can handle most of the same tasks as your desktop PC.

Several generations of Raspberry Pis have been released. The first generation (Pi 1) was released in February 2012 in basic model A and a higher specification model B. A+ and B+ models were released a year later. Raspberry Pi 2 model B was released in February 2015 and Raspberry Pi 3 model B in February 2016.

At Seeed Studio, we provide not only different raspberry pi boards that mentioned above , but also provide different accessories and starter kits that can help you creating raspberry pi project. What’s more, we have created numbers of tutorials in Seeed’s raspberry pi community where you can easily building circuits of raspberry pi.


## Product List
---

Here is the list of the Raspberry Pi Boards you can find in the Seeed WiKi. The list will be constantly updated.

{{ range .Data.Pages.ByTitle }}{{ $cat1 := trim (index (split .Params.category ",") 0) " "}}{{ $cat2 := trim (index (split .Params.category ",") 1) " "}}{{if or (eq $cat1 "Raspberry Pi") (eq $cat2 "Raspberry Pi") }}- [{{.Title}}](/{{.File.BaseFileName}}/){{"\n"}}{{ end }}{{ end }}

