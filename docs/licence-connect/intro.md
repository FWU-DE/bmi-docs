---
sidebar_position: 1
title: "Licence Connect"
---

# Licence Connect

Licence Connect ermöglicht es Schulen, Schulträgern und Ländern, digitale Bildungsangebote einfach zu beschaffen, zuzuordnen und den Nutzern bereitzustellen. 
Ziel des Projekts ist es, bestehende Systeme stärker und länderübergreifend zu vernetzen, indem Lizenzen aus verschiedenen regionalen Systemen gesammelt und über die VIDIS-Infrastruktur verarbeitet werden. 
Dadurch wird die Autorisierung von Nutzern in Drittsystemen erleichtert.

Ein dienstbasierter Ansatz, der sich auf Schnittstellen konzentriert, ermöglicht die Verwaltung aktueller und zukünftiger Lizenz- und Abrechnungsmodelle sowohl regional als auch überregional. 
Auf diese Weise können Medienangebote rechtssicher und spezifisch für Lernende und Lehrende bereitgestellt werden. 
Diese Vereinfachung kommt nicht nur Schulen und Schulträgern zugute, sondern entlastet auch Anbieter digitaler Bildungsangebote durch die Standardisierung der Schnittstellen.

Um die Einheitlichkeit zu gewährleisten, sind funktionierende Lizenzmanagementsysteme in Ländern, bei Schulträgern oder Medienzentren erforderlich. 
Diese Systeme müssen die Fähigkeit bieten, Lizenzinformationen abzurufen und über eine standardisierte Schnittstelle zur Verfügung zu stellen, damit das gesamte Netzwerk optimal miteinander arbeiten kann.

## Github Repository

Das Github Repository ist zu finden unter: https://github.com/FWU-DE/licence-connect .

## Swagger Documentation

Die Live-Version der Swagger UI kann gefunden werden unter: https://api.licenceconnect.schule/swagger-ui/index.html

```yaml
openapi: 3.1.0
info:
  title: OpenAPI definition
  version: v0
servers:
  - url: https://api.licenceconnect.schule
security:
  - apiKey: []
paths:
  /admin/client-licence-holder-mapping/{clientName}:
    get:
      tags:
        - client-licence-holder-filter-controller
      operationId: getLicenceHolders
      parameters:
        - name: clientName
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  type: string
                  enum:
                    - ARIX
                    - BILO_V1
                    - BILO_V2
    put:
      tags:
        - client-licence-holder-filter-controller
      operationId: updateLicenceHolder
      parameters:
        - name: clientName
          in: path
          required: true
          schema:
            type: string
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ClientLicenceHolderMappingDto'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: object
  /v1/ucs/request:
    get:
      tags:
        - bilo-v-1-controller
      operationId: request
      parameters:
        - name: userId
          in: query
          required: true
          schema:
            type: string
        - name: clientId
          in: query
          required: true
          schema:
            type: string
        - name: schulkennung
          in: query
          required: false
          schema:
            type: string
        - name: bundesland
          in: query
          required: true
          schema:
            type: string
            enum:
              - MV
              - RP
              - BW
              - BY
              - BE
              - BB
              - HB
              - HH
              - HE
              - NI
              - NW
              - SL
              - SN
              - ST
              - SH
              - TH
              - DE_MV
              - DE_RP
              - DE_BW
              - DE_BY
              - DE_BE
              - DE_BB
              - DE_HB
              - DE_HH
              - DE_HE
              - DE_NI
              - DE_NW
              - DE_SL
              - DE_SN
              - DE_ST
              - DE_SH
              - DE_TH
              - STK
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/UcsLicenceeDto'
  /v1/licences/request:
    get:
      tags:
        - licences-controller
      operationId: request_1
      parameters:
        - name: bundesland
          in: query
          required: true
          schema:
            type: string
            enum:
              - MV
              - RP
              - BW
              - BY
              - BE
              - BB
              - HB
              - HH
              - HE
              - NI
              - NW
              - SL
              - SN
              - ST
              - SH
              - TH
              - DE_MV
              - DE_RP
              - DE_BW
              - DE_BY
              - DE_BE
              - DE_BB
              - DE_HB
              - DE_HH
              - DE_HE
              - DE_NI
              - DE_NW
              - DE_SL
              - DE_SN
              - DE_ST
              - DE_SH
              - DE_TH
              - STK
        - name: standortnummer
          in: query
          required: false
          schema:
            type: string
        - name: schulnummer
          in: query
          required: false
          schema:
            type: string
        - name: userId
          in: query
          required: false
          schema:
            type: string
        - name: clientName
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Licence'
  /v1/healthcheck:
    get:
      tags:
        - health-check-controller
      operationId: healthcheck
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: string
  /v1/bilo/request/{userId}:
    get:
      tags:
        - bilo-v-2-controller
      operationId: request_2
      parameters:
        - name: userId
          in: path
          required: true
          schema:
            type: string
        - name: clientName
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: string
components:
  schemas:
    ClientLicenceHolderMappingDto:
      type: object
      properties:
        availableLicenceHolders:
          type: array
          items:
            type: string
            enum:
              - ARIX
              - BILO_V1
              - BILO_V2
      required:
        - availableLicenceHolders
    Context:
      type: object
      properties:
        licenses:
          type: array
          items:
            type: string
        classes:
          type: array
          items:
            $ref: '#/components/schemas/UcsClassDto'
        workgroups:
          type: array
          items:
            $ref: '#/components/schemas/UcsWorkgroupDto'
        school_authority:
          type: string
        school_identifier:
          type: string
        school_name:
          type: string
        roles:
          type: array
          items:
            type: string
    UcsClassDto:
      type: object
      properties:
        name:
          type: string
        id:
          type: string
        licenses:
          type: array
          items:
            type: string
    UcsLicenceeDto:
      type: object
      properties:
        id:
          type: string
        first_name:
          type: string
        last_name:
          type: string
        licenses:
          type: array
          items:
            type: string
        context:
          type: object
          additionalProperties:
            $ref: '#/components/schemas/Context'
    UcsWorkgroupDto:
      type: object
      properties:
        name:
          type: string
        id:
          type: string
        licenses:
          type: array
          items:
            type: string
    Licence:
      type: object
      properties:
        licenceCode:
          type: string
  securitySchemes:
    apiKey:
      type: apiKey
      name: X-API-KEY
      in: header
```
