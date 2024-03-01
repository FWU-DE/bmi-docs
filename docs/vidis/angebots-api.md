---
sidebar_position: 2
title: "Angebots-API"
---

# Angebots API

Die Angebots-Schnittstelle gibt Portalbetreibern (zunächst primär von Landesportalen) die Möglichkeit 
, digitale Bildungsangebote automatisiert aus VIDIS abzufragen und damit verschiedene Portal-Anwendungsfälle zu unterstützen.
Es ist möglich, verfügbare digitale Bildungsangebote abzufragen und die zugehörigen Daten wie 
Link, Beschreibung, Logo, Icon etc. automatisiert anzuzeigen. 
Außerdem besteht zunächst die Möglichkeit, die Zuordnung digitaler Bildungsangebote zu Schulen abzufragen, um nur 
Nutzer/innen jene digitale Bildungsangebote anzuzeigen, die zuvor auch für die Schule aktiviert wurden.

Die API steht sowohl Portalbetreibern als auch Anbietern zur Verfügung. Für den Zugriff  ist ein Login im Serviceportal (https://service.vidis.schule) mit der Rolle Schulleitung oder der 
Rolle Anbieter erforderlich.
Für die Einrichtung von Testzugängen oder bei Fragen wenden Sie sich gerne an support@vidis.schule.

## Funktionen für IDM Betreiber

## Funktionen für Diensteanbieter

1. Liste aller eigenen Angebote, die von einer Schule aktiviert wurden

```jsx title="getOffers"
curl -X 'GET' \
 'https://service-stage.vidis.schule/o/vidis-rest/v1.0/activation/offers?
page=1&pageSize=1' \
 -H 'accept: application/json' \
 -H 'x-csrf-token: YNCWKaVz'
```

2. Liste aller Schulen, die das ausgewählte eigene Angebot aktiviert haben

```jsx title="getSchoolsByOffer"
curl -X 'GET' \
 'https://service-stage.vidis.schule/o/vidis-rest/v1.0/activation/offers/123/
schools?page=1&pageSize=1' \
 -H 'accept: application/json' \
 -H 'x-csrf-token: YNCWKaVz'
```

3. Liste der Aktivierungsdetails für ein ausgewähltes eigenes Angebot auf, das von der ausgewählten 
Schule aktiviert wurde 

```jsx title="getActivationByOfferAndSchool"
curl -X 'GET' \
 'https://service-stage.vidis.schule/o/vidis-rest/v1.0/activation/offers/12/
schools/12/details' \
 -H 'accept: application/json' \
 -H 'x-csrf-token: YNCWKaVz'
```

4. Liste der Aktivierungsdetails für alle eigenen Angebote auf. 

```jsx title="getActivations"
curl -X 'GET' \
 'https://service-stage.vidis.schule/o/vidis-rest/v1.0/activation/details?
page=1&pageSize=1' \
 -H 'accept: application/json' \
 -H 'x-csrf-token: YNCWKaVz'

```


Eine Dokumentation befindet sich unter folgendem Link zur Swagger/OPenAPI-Dokumentation: 
https://service.vidis.schule/o/api (Login mit 
Schulaccount oder Angebotsaccount auf service.vidis.schule erforderlich). Dort bekommt man auch einen 
Einblick in die verwendeten Schemas, dies würd hier zu weit führen.
Die hier verwendeten Werte sind nur Dummy-Werte und stellen keine "rechten" Organisations- oder Angebots-IDs dar.
  
| Name | Default | Description |
| --- | --- | --- |
| `--test` | `3000` | Nur ne testtabelle |

