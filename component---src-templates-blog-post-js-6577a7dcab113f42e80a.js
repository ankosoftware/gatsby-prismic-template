(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yZlL:function(n,e,t){"use strict";t.r(e),t.d(e,"query",(function(){return I}));var l=t("q1tI"),a=t.n(l),i=t("1ypU"),o=t("vsEW"),r=t("2M6a"),g=t("sJyi"),m=t("wIbq"),s=t("wG+1"),p=t("q0iU"),c=t("ATzf"),y=t("oCA+"),b=function(n){var e=n.post;if(e){var t=e.text,l=e.title,b=e.image,d=e.bgColor,I=e.pageTitle,u=e.pageDescription,P=e.pageKeywords,x=e.pagePreviewImage,k=e.body,C=e._meta;Object(y.b)(d,b);return a.a.createElement(o.a,null,a.a.createElement(r.a,{title:I||l,description:u||t,keywords:P,image:x||b,lang:C.lang}),a.a.createElement(g.a,null,a.a.createElement(m.a,{theme:"light"}),a.a.createElement("div",{className:"container py-5 text-center"},a.a.createElement(s.RichText,{render:l})),a.a.createElement("article",null,a.a.createElement(p.a,{className:"mb-5 blog-post-image",image:b}),a.a.createElement("div",{className:"mw-690 blog-post-content mx-auto"},a.a.createElement(s.RichText,{render:t,linkResolver:i.linkResolver}))),a.a.createElement(c.a,{body:k})))}return null},d=function(n){var e=n.data.prismic.blogPost;return a.a.createElement(b,{post:e})};d.fragments=[i.linkFragment];e.default=d;var I={id:"2163273567",source:"\n  query postQuery($lang: String!, $uid: String!) {\n    prismic {\n      blogPost(uid: $uid, lang: $lang) {\n        _meta {\n          type\n          uid\n          lang\n          lastPublicationDate\n        }\n        title\n        text\n        image\n        isFeaturedArticle\n        bgColor\n        pageDescription\n        pageKeywords {\n          keyword\n        }\n        pagePreviewImage\n        pageTitle\n        body {\n          ... on PRISMIC_BlogPostBodyGallery {\n            type\n            label\n            primary {\n              anchor\n              bgColor\n              bgImage\n              text\n              title\n            }\n            fields {\n              image\n              text\n              title\n            }\n          }\n          ... on PRISMIC_BlogPostBodyPricingPlans {\n            type\n            label\n            fields {\n              priceUnits\n              planPrice\n              planName\n              planDetails\n              linkText\n              linkStyle\n              link {\n                ...link\n              }\n              isFreePlan\n            }\n            primary {\n              bgImage\n              bgColor\n              title\n              text\n            }\n          }\n          ... on PRISMIC_BlogPostBodyItemsCollection {\n            label\n            type\n            primary {\n              bgColor\n              bgImage\n              text\n              title\n              linkStyle\n              linkText\n            }\n            fields {\n              tag\n            }\n          }\n          ... on PRISMIC_BlogPostBodyText {\n            type\n            label\n            primary {\n              text\n              bgColor\n              bgImage\n            }\n          }\n          ... on PRISMIC_BlogPostBodyFeature {\n            type\n            label\n            primary {\n              bgColor\n              bgImage\n              text\n            }\n            fields {\n              image\n              linkStyle\n              linkText\n              text\n              title\n              link {\n                ...link\n              }\n            }\n          }\n          ... on PRISMIC_BlogPostBodyBlockWithTextAndImage {\n            label\n            type\n            primary {\n              bgColor\n              bgImage\n              minHeight\n              title\n              text\n              image\n              link {\n                ...link\n              }\n              linkStyle\n              linkText\n            }\n          }\n          ... on PRISMIC_BlogPostBodyForm {\n            type\n            label\n            primary {\n              bgColor\n              bgImage\n              formScript\n              formUrl\n              text\n            }\n          }\n          ... on PRISMIC_BlogPostBodyText {\n            type\n            label\n            primary {\n              title\n              text\n              bgColor\n              bgImage\n            }\n          }\n        }\n      }\n    }\n  }\n",toString:function(){return this.id}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6577a7dcab113f42e80a.js.map