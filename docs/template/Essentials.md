---
title: Essentials Introduction
nointro:
---

---
This section includes essentials boards that created by Seeed.

## Product  List
---

Here is the list of the Seeeduino Boards you can find in the Seeed WiKi. The list will constantly updated.

{{ range .Data.Pages.ByTitle }}{{ $cat1 := trim (index (split .Params.category ",") 0) " "}}{{ $cat2 := trim (index (split .Params.category ",") 1) " "}}{{if or (eq $cat1 "Essentials") (eq $cat2 "Essentials") }}- [{{.Title}}](/{{.File.BaseFileName}}/){{"\n"}}{{ end }}{{ end }}
