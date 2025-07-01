---
sidebar_position: 1
title: "Für Lizenznutzer"
---

## Für Lizenznutzende Systeme

Lizenzinformationen aus Licence Connect können über VIDIS abgerufen werden.
Aktuell ist das mit der erforderlichen Konfiguration im Staging-System möglich.

### Lizenzen Abrufen

Lizenzen können im VIDIS-Staging-System unter

```
https://aai-test.vidis.schule/auth/realms/vidis/licences/<pseudonym>
```

abgerufen werden.
Zur Authentifizierung ist der Access Token von VIDIS notwendig.
Das Pseudonym ist die User ID in VIDIS (`sub`-Value im Token).

Ein valider cURL Request sieht wie folgt aus:

```
ACCESS_TOKEN="<access_token>"
SUB="<sub>"

curl -v "https://aai-test.vidis.schule/auth/realms/vidis/licences/$SUB" \
     -H "Authorization: Bearer $ACCESS_TOKEN"
```

### Antwortformat

Die Lizenzdaten werden im ODRL-Format übertragen.
Eine detaillierte Beschreibung findet sich in der OpenAPI Spezifikation unter https://api.licenceconnect.schule/swagger-ui/index.html#/licences-controller/request_1
