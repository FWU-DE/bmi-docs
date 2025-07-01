---
sidebar_position: 2
title: "Für Lizenzhalter"
---

## Für Lizenzhaltende Systeme

Um als lizenzhaltendes System Lizenzinformationen über Licence Connect zur Verfügung zu stellen, ist eine Anbindung an Licence Connect erforderlich.

Lizenzinformationen werden abhängig von:

* userId des Users im Ländersystem
* Bundesland
* Standortnummer
* Schulnummer

abgerufen.

Zur Weiterleitung an Lizenznutzer müssen die Lizenzinformationen in das ODRL-Format übersetzt werden.
Das Mapping kann Teil von Licence Connect sein und im Rahmen der Anbindung durchgeführt werden.

### Referenz

Als Referenz-Implementierung wurde "LC Halt" implementiert.
Unter https://halt.licenceconnect.schule/docs sind die API-Schnittstellen von "LC Halt" dokumentiert.

Für die Anbindung an Licence Connect ist insbesondere der Endpunkt "/licenced-media" relevant.

