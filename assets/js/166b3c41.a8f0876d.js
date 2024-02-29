"use strict";(self.webpackChunkfwu_bmi_docs=self.webpackChunkfwu_bmi_docs||[]).push([[385],{7744:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const r={sidebar_position:2},a="Angebots API",o={id:"vidis/angebots-api",title:"Angebots API",description:"Die Angebots-Schnittstelle soll Portalbetreibern (zun\xe4chst prim\xe4r von Landesportalen) die M\xf6glichkeit",source:"@site/docs/vidis/angebots-api.md",sourceDirName:"vidis",slug:"/vidis/angebots-api",permalink:"/docs/vidis/angebots-api",draft:!1,unlisted:!1,editUrl:"https://github.com/fwu-de/bmi-docs/tree/main/packages/create-docusaurus/templates/shared/docs/vidis/angebots-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"fwuSidebar",previous:{title:"Was ist VIDIS",permalink:"/docs/vidis/intro"}},c={},d=[{value:"Funktionen f\xfcr IDM Betreiber",id:"funktionen-f\xfcr-idm-betreiber",level:2},{value:"Funktionen f\xfcr Diensteanbieter",id:"funktionen-f\xfcr-diensteanbieter",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"angebots-api",children:"Angebots API"}),"\n",(0,t.jsx)(n.p,{children:"Die Angebots-Schnittstelle soll Portalbetreibern (zun\xe4chst prim\xe4r von Landesportalen) die M\xf6glichkeit\ngeben, digitale Bildungsangebote automatisiert in VIDIS abzufragen und damit verschiedene PortalAnwendungsf\xe4lle zu unterst\xfctzen.\nEs wird m\xf6glich sein, verf\xfcgbare digitale Bildungsangebote abzufragen und die zugeh\xf6rigen Daten wie\nLink, Beschreibung, Logo, Icon etc. automatisiert abzufragen und anzuzeigen. Au\xdferdem zun\xe4chst\nschulbasiert die M\xf6glichkeit, die Zuordnung digitaler Bildungsangebote zu Schulen abzufragen, um nur\nNutzer/innen digitale Bildungsangebote anzuzeigen, die zuvor auch f\xfcr die Schule aktiviert wurden.\nZun\xe4chst wurden zwei Aufrufe umgesetzt"}),"\n",(0,t.jsxs)(n.p,{children:["Die API steht sowohl Portalbetreibern als auch Anbietern zur Verf\xfcgung. F\xfcr den Zugriff auf die\nDokumentation bzw. die API aufzurufen ist ein Login im Serviceportal mit der Rolle Schulleitung oder der\nRolle Anbieter auf ",(0,t.jsx)(n.a,{href:"https://service.vidis.schule",children:"https://service.vidis.schule"})," rforderlich.\nF\xfcr die Einrichtung von Testzug\xe4ngen oder bei Fragen wenden Sie sich gerne an ",(0,t.jsx)(n.a,{href:"mailto:vidis-support@fwu.de",children:"vidis-support@fwu.de"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"funktionen-f\xfcr-idm-betreiber",children:"Funktionen f\xfcr IDM Betreiber"}),"\n",(0,t.jsx)(n.h2,{id:"funktionen-f\xfcr-diensteanbieter",children:"Funktionen f\xfcr Diensteanbieter"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Liste aller eigenen Angebote, die von einer Schule aktiviert wurden"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="getOffers"',children:"curl -X 'GET' \\\n 'https://service-stage.vidis.schule/o/vidis-rest/v1.0/activation/offers?\npage=1&pageSize=1' \\\n -H 'accept: application/json' \\\n -H 'x-csrf-token: YNCWKaVz'\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Liste aller Schulen, die das ausgew\xe4hlte eigene Angebot aktiviert haben"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="getSchoolsByOffer"',children:"curl -X 'GET' \\\n 'https://service-stage.vidis.schule/o/vidis-rest/v1.0/activation/offers/123/\nschools?page=1&pageSize=1' \\\n -H 'accept: application/json' \\\n -H 'x-csrf-token: YNCWKaVz'\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Liste der Aktivierungsdetails f\xfcr ein ausgew\xe4hltes eigenes Angebot auf, das von der ausgew\xe4hlten\nSchule aktiviert wurde"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="getActivationByOfferAndSchool"',children:"curl -X 'GET' \\\n 'https://service-stage.vidis.schule/o/vidis-rest/v1.0/activation/offers/12/\nschools/12/details' \\\n -H 'accept: application/json' \\\n -H 'x-csrf-token: YNCWKaVz'\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Liste der Aktivierungsdetails f\xfcr alle eigenen Angebote auf."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="getActivations"',children:"curl -X 'GET' \\\n 'https://service-stage.vidis.schule/o/vidis-rest/v1.0/activation/details?\npage=1&pageSize=1' \\\n -H 'accept: application/json' \\\n -H 'x-csrf-token: YNCWKaVz'\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Eine Dokumentation befindet sich unter folgendem Link zur Swagger/OPenAPI-Dokumentation:\n",(0,t.jsx)(n.a,{href:"https://service.vidis.schule/o/api",children:"https://service.vidis.schule/o/api"}),' (Login mit\nSchulaccount oder Angebotsaccount auf service.vidis.schule erforderlich). Dort bekommt man auch einen\nEinblick in die verwendeten Schemas, dies w\xfcrd hier zu weit f\xfchren.\nDie hier verwendeten Werte sind nur Dummy-Werte und stellen keine "rechten" Organisations- oder Angebots-IDs dar.']})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);