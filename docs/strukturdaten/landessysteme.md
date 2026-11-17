# Für Landessysteme

Um ein weiteres Landessystem anbinden zu können, muss ein `Adapter` implementiert werden, der die Daten aus dem Landessystem in das Format der API übersetzt.
Bestehende Adapter beruhen auf der [Dienste-API von Schulconnex](https://schulconnex.de/docs/generated/openapi/dienste/schulconnex). Weitere Landessysteme auf Schulconnexbasis können daher einfach durch die Implementierung eines neuen Adapters angebunden werden.

Die Endpunkte `organisationen-info` und `personen-info` sind für die Anbindung relevant. `person-info` wird nicht aufgerufen, sondern über `personen-info` abgebildet.

## Authentifizierung

Die Authentifizierung basiert bisher auf dem `client_credentials` Grant via OAuth.
Es wird außerdem die Client-ID des anfragenden Angebots im Header `X-VIDIS-CLIENT-ID` übertragen.

### Beispielanfrage

#### Authentifizierung

```
POST /openid-connect/token HTTP/1.1
Host: landessystem.test
Content-Type: application/x-www-form-urlencoded

client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&grant_type=client_credentials
```

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

```json
{
  "access_token": "$TOKEN",
  "expires_in": 300,
  "token_type": "Bearer",
  "scope": ""
}
```

#### Datenanfrage

```
GET /schulconnex/v1/personen-info?vollstaendig=organisationen,personenkontexte,personen,gruppen&organisation.id=12f0cff0-4db8-4ce1-9dbf-a95938b6537e HTTP/1.1
Host: landessystem.test
Authorization: Bearer $TOKEN
X-VIDIS-CLIENT-ID: anbieter-o
```

```
HTTP/1.1 200 OK
ETag: W/"1.h5vj8mcu3g"
Content-Type: application/json; charset=utf-8
```

```json
[
  {
    "pid": "7afc424f-d5ff-4deb-a33e-d093baf81be8", // identisch mit ID, die an VIDIS für das SSO übertragen wird
    "person": {
      "name": { "vorname": "Maximilian", "familienname": "Mustermann" },
      "stammorganisation": {
        "id": "020b12f6-e4d3-4f54-86a8-b66a3978b110",
        "kennung": "BY-12345", // identisch mit ID, die an VIDIS für das SSO übertragen wird
        "name": "Test-Schule",
        "anschrift": {
          "postleitzahl": null,
          "ort": null,
          "verwaltungspolitischekodierung": { "bundesland": "09" }
        },
        "typ": "Schule"
      }
    },
    "personenkontexte": [
      {
        "id": "7afc424f-d5ff-4deb-a33e-d093baf81be8",
        "rolle": "Lehr",
        "organisation": {
          "id": "020b12f6-e4d3-4f54-86a8-b66a3978b110",
          "kennung": "BY-12345",
          "name": "Test-Schule",
          "anschrift": {
            "postleitzahl": null,
            "ort": null,
            "verwaltungspolitischekodierung": { "bundesland": "09" }
          },
          "typ": "Schule"
        },
        "gruppen": [
          {
            "gruppe": {
              "id": "60d38af6-f768-46c4-8394-8371c4924632",
              "orgid": "020b12f6-e4d3-4f54-86a8-b66a3978b110",
              "bezeichnung": "1 Klasse",
              "typ": "Klasse",
              "jahrgangsstufen": ["01"],
              "faecher": [
                {
                  "bezeichnung": "Mathematik"
                }
              ],
              "laufzeit": {
                "von": "2026-08-01",
                "bis": "2027-07-31"
              }
            }
          }
        ]
      },
      ...
    ]
  },
  ...
]
```
