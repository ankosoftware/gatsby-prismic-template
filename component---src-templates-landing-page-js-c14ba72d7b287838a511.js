(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/7DV":function(n,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return u}));var t=a("q1tI"),l=a.n(t),r=a("1ypU"),i=a("oCA+"),g=a("vsEW"),o=a("2M6a"),m=a("sJyi"),c=a("wIbq"),d=a("wG+1"),s=a("BL8g"),p=a("BAVA"),y=a("ATzf"),b=function(n){var e=n.page;if(e){var a=e._meta,t=e.title,b=e.text,k=e.bgImage,u=e.bgColor,I=e.formScript,x=e.formUri,f=e.pageTitle,P=e.pageDescription,v=e.pageKeywords,E=e.pagePreviewImage,C=e.body,S=Object(i.b)(u,k);return l.a.createElement(g.a,null,l.a.createElement(o.a,{title:f||t,description:P||b,keywords:v,image:E||k,lang:a.lang}),l.a.createElement(m.a,{backgroundImage:k,backgroundColor:u},l.a.createElement(c.a,{theme:S?"dark":"light"}),l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement(d.RichText,{render:t,linkResolver:r.linkResolver})),l.a.createElement("div",{className:"row landing-page-body"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"landing-page-text"},l.a.createElement(d.RichText,{render:b,linkResolver:r.linkResolver}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"card form-content"},l.a.createElement("div",{className:"card-body text-dark"},l.a.createElement(s.a,{html:I}),l.a.createElement(p.a,{scriptUrl:x}))))),l.a.createElement(y.a,{body:C})))}return null},k=function(n){var e=n.data.prismic.landingPage;return l.a.createElement(b,{page:e})};k.fragments=[r.linkFragment];e.default=k;var u={id:"1181425413",source:"\n  query landingQuery($lang: String!, $uid: String!) {\n    prismic {\n      landingPage(uid: $uid, lang: $lang) {\n        title\n        text\n        formUri\n        formScript\n        bgColor\n        bgImage\n        _meta {\n          uid\n          type\n          lang\n        }\n        body {\n          ... on PRISMIC_LandingPageBodyPricingPlans {\n            type\n            label\n            fields {\n              priceUnits\n              planPrice\n              planName\n              planDetails\n              linkText\n              linkStyle\n              link {\n                ...link\n              }\n              isFreePlan\n            }\n            primary {\n              bgImage\n              bgColor\n              title\n              text\n            }\n          }\n          ... on PRISMIC_LandingPageBodyItemsCollection {\n            label\n            type\n            primary {\n              bgColor\n              bgImage\n              text\n              title\n              linkStyle\n              linkText\n            }\n            fields {\n              tag\n            }\n          }\n          ... on PRISMIC_LandingPageBodyText {\n            type\n            label\n            primary {\n              text\n              bgColor\n              bgImage\n            }\n          }\n          ... on PRISMIC_LandingPageBodyFeature {\n            type\n            label\n            primary {\n              bgColor\n              bgImage\n              text\n            }\n            fields {\n              image\n              linkStyle\n              linkText\n              text\n              title\n              link {\n                ...link\n              }\n            }\n          }\n          ... on PRISMIC_LandingPageBodyBlockWithTextAndImage {\n            label\n            type\n            primary {\n              bgColor\n              bgImage\n              minHeight\n              title\n              text\n              image\n              link {\n                ...link\n              }\n              linkStyle\n              linkText\n            }\n          }\n          ... on PRISMIC_LandingPageBodyForm {\n            type\n            label\n            primary {\n              bgColor\n              bgImage\n              formScript\n              formUrl\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n",toString:function(){return this.id}}}}]);
//# sourceMappingURL=component---src-templates-landing-page-js-c14ba72d7b287838a511.js.map