---
title: ReSpeaker Introduction
nointro:
---

---
ReSpeaker is an open modular voice interface to hack things around you. Let you interact with your home appliances, your plant, your office, your internet-equipped devices or any other things in your daily life, all by your voice.


## Product  List
---
Here is the list of the ReSpeaker Boards you can find in the Seeed WiKi. The list will be constantly updated.

{{ range .Data.Pages.ByTitle }}{{ $cat1 := trim (index (split .Params.category ",") 0) " "}}{{ $cat2 := trim (index (split .Params.category ",") 1) " "}}{{if or (eq $cat1 "ReSpeaker") (eq $cat2 "ReSpeaker") }}- [{{.Title}}](/{{.File.BaseFileName}}/){{"\n"}}{{ end }}{{ end }}
