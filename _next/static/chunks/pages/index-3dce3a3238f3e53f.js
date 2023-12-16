(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8351:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});a(7294);var n=a(5893),s=function(){return(0,n.jsxs)("div",{className:"text-center","data-testid":"container",children:[(0,n.jsx)("h1",{title:"Tojourn in Elder Futhark runic alphabet",className:"text-white text-xl mt-5 mb-10",children:"\u16cf\u16df\u16c3\u16df\u16a2\u16b1\u16be"}),(0,n.jsx)("div",{className:"flex justify-center mb-5",children:(0,n.jsx)(g,{})})]})},i={mwLogo:{maxWidth:"200px",marginBottom:"20px",margin:"auto"}},r=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-center font-light py-5 bg-purple mb-8",children:(0,n.jsxs)("div",{className:"bg-white p-5 mx-auto flex flex-col justify-center items-center",children:[(0,n.jsx)("h3",{"data-test":"main-heading",className:"text-lg mb-8 max-w-xs font-bold",children:"Currently employed at 10x Banking Senior Software Engineer"}),(0,n.jsxs)("a",{href:"https://www.10xbanking.com/community/10x-spotlight-matt-watson-software-engineer",className:"mb-8",target:"_blank",children:[" ",(0,n.jsx)("img",{src:"/img/tenx.svg",style:i.mwLogo}),"Read my article featured on 10x's website!"]}),(0,n.jsx)("p",{className:"text-m text-justify mb-3 max-w-xs",children:"Part of a SCA (Strong Customer Authentication) and Oauth Token management feature team. Providing high risk login flows and JWT manament to over 2 million customers with 99.9999% (four nines) availability. We used Java 17 Springboot microservices with Postgres (Aurora), Kafka and Redis (Elasticache) on AWS EKS for Kubernetes. CI/CD using Jenkins and Bitbucket."})]})}),(0,n.jsx)("div",{className:"bg-black py-5 mb-8",children:(0,n.jsxs)("div",{className:"bg-white py-8 flex flex-col justify-center items-center",children:[(0,n.jsx)("h3",{"data-test":"main-heading",className:"text-3xl text-center mb-4 font-bold",children:"Education"}),(0,n.jsxs)("a",{target:"_blank",className:"pb-1 items-center justify-center flex flex-col text-m ",href:"https://eps.leeds.ac.uk/computing",children:[(0,n.jsx)("img",{src:"/img/uol.png",style:i.mwLogo}),(0,n.jsxs)("p",{className:"text-lg mb-3 max-w-xs text-center",children:["Bachelor of Science Honours Class 1 ",(0,n.jsx)("br",{}),"in"," ",(0,n.jsx)("br",{})," Information Technology"]})]})]})})]})};var o=JSON.parse('{"name":"tojourn-app","info":[{"name":"10x Banking","subtitle":"Senior Software Engineer - Identity & Oauth","sub2":"/ October 2022 - Present","list":["Part of a SCA (Strong Customer Authentication) and Oauth Token management feature team. Providing high risk login flows and JWT manament to over 2 million customers with 99.9999% (four nines) availability. We used Java 17 Springboot microservices with Postgres (Aurora), Kafka and Redis (Elasticache) on AWS EKS for Kubernetes. CI / CD using Jenkins and Bitbucket.","Created new team tooling by creating local setup scripts with docker compose to improve team productivity. Apps could be started locally with mocked dependencies for local testing reducing the feedback cycle time by a large margin","Migrated a extremely high throughput token management service from a shared elasticache redis to a dedicated clustered redis cluster provisioning with terraform. Taking the load off other services as well as improving performance of our own. Also implemented secondary indexing and clearing of such indexes via keyspace notifications on the cluster to ensure the memory useage was effcient as possible, reducing the need for larger clusters and saving money as we now needed a much smaller machine to run the cache.","Created a new way of templating runbooks for the company using backstage which I demonstrated to the business and helped the devops team set up. We also integrated the jenkins and score cards plugin to increase the productivity of the developer portal","Worked directly with Clients such as Chase Bank UK (JP Morgan) for new feature requests and support for issues when it came from migration existing mobile devices from another third party security platform. Working with them directly made sure we got the requirements exactly right and improved the relationship with the client","Part of the intial team upgrading internal libraries in preparatation for the Spring Boot 3.1 upgrade (from 2.7) which involved lots of cross team coordination and a solid review process. This created a streamlined upgrade process sharing the knowledge with other teams with the problems we faced during the upgrade","Introduced on call processes such as a captains log where previous incidents are logged in an easy to find place to help solve future issues if they happen again in the future and sharing knowledge of incident processes with other engineers on call improving productivity of handovers and reducing repeat incidents","Built on my knowledge, from skybet, of observabilty / dashboards / metrics / alerting to improve the overall ability to spot and support issues faster and before they cause a problem. Using such tools as new relic custom parameters, custom dashboards and alerts. This helped reduce the engineer toil of trying figure out what caused particular errors and get an answer back to client as fast as possible as well as diagnosing and fixing issues. Many of the ideas we used at skybet I have since shared here and are being used by many teams such as graph club where we look at our dashboard each week to look for errors and odd patterens to improve our dashboards along with catching any issues before they become a potential problem, providing a much better experience for the customer."]},{"name":"Sky Betting & Gaming","subtitle":"Software Engineer - Transactions / Senior Software Engineer - Gaming","sub2":"/ Sept 2021 - October 2022","list":["Implemented Kotlin based gaming recommendation engine similar to the front page of netflix. We were dubbed the \'Notflix\' team, we improved the customer retention of players in the gaming side of skybet with the new feature","Lead the way in rewriting older legacy chef provisioned typescript applications on node 10 to kubernetes provisioned containerised applications in Kotlin. These applications used Kafka and Redis technologies for message queuing and in memory data storage. Increased preformance during the rewrite from 5k messages per second to 35k messages per second.","Developed many of the features for the Build a Bet product on Skybet. This involved a backend Typescript API as well as changes to React components on the front end of bet slip. Assisted other teams in integrating with our APIs providing support and documentation","Management of the deployments of applications to in-house Kubernetes cluster and chef provisioned virual machines.","Actively \'On Call\' providing support for the Tranactions application stack in and out of office hours. Managing metrics / alerts of these applications using Alertmanager / Pagerduty / Grafana / Prometheus / Elastic(Kibana)"]},{"name":"The Stars Group","subtitle":"Software Engineer","sub2":"/ Feb 2020 - Sep 2021","list":["Been in multiple teams from Kotlin feature development squads to platform and delivery engineering","Use of Kotlin and Spring Boot for development of a GraphQL API utilising technologies such as Kafka and Postgres in the Sports catalogue squad","Management of the deployments of applications to in-house Kubernetes cluster, this involved deep understanding of K8s and the supporting tooling around it such as Helm and the CLI (kubectl)","Adapted to deploying a foreign tech stack from a sister company using Chef / Ansible and AWS CDK with Jenkins and GoCD CI pipelines. This involves analysis of a lot of existing code bases configuring it in a way to use our frameworks and redeploying them into AWS","Use AWS daily on Centos VMs in EC2, setting up networking with VPCs and transit gateways and transitioning some minor applications to Lambdas behind API Gateway"]},{"name":"Morrisons PLC","subtitle":"Technoloy Specialist","sub2":"/ Oct 2018 - Feb 2020","list":["Developed a Dropwizard Microservice to Route XML swipes from the Clocking in machines in Morrisons stores to a new third party service and to an existing legacy Oracle system. Deployed on a legacy in house server using a Freestyle Jenkins Job and internal Sonarqube quality gate analysing code quality","Contributed greatly to improving developers on the Storepick project at Morrisons to help improve code quality and delivery velocity. My involvement included reviewing many third party pull requests, developing tools in Python to assist with use of Ocado APIs","Development of an AWS lambda to notify staff customers arriving in store to click and collect which was created using Python. I also created the Multibranch Pipeline using Jenkins which runs through various environments with various tasks such as Nose2 Unit testing, Pytest BDD End to End testing Scenarios, Artillery performance tests and infrastructure creation using Terraform","Developed a frontend boilerplate with Vuejs, Webpack, Jest, Jenkins multibranch Pipeline and Terraform to create the CloudFront S3 Origin infrastructure","Given detailed talks / presentations to many new and existing contractors, on the use of GitFlow and Jenkins at Morrisons"]},{"name":"Amina Technologies Ltd","subtitle":"Software Developer","sub2":"/ Mar 2016 - Oct 2018","list":["Replaced original static HTML site with self made theme and advanced custom fields CMS. Each country Amina has a distributor has its own site that can be maintained and changed by themselves with an easy to use interface. Since joining and implementing this project Amina has seen its highest ever revenues (PHP / Wordpress / Jquery / Sass / Gulp)","Automated warehouse product barcoding by creating a plugin that integrated directly into the website. Previously it was done manually with excel. Now all barcodes are created automatically and labels printed via the website by any operative with valid access rights, which requires very little training (Python / Django / PHP / Wordpress / Jquery / Sass / Gulp / ZPL / CUPS)","Researched new technology and introduced the automation of tasks wherever possible. Such as using Vagrant to create reusable virtual environments to avoid repetitive configuration and Gulp to automate some scss / js tasks"]},{"name":"ExecSoftware","subtitle":"Technical Support Assistant","sub2":"/ Jul 2015 - Mar 2016","list":["QA and Technical support","Assisted in creating the software manual"]},{"name":"University Of Leeds","subtitle":"Subwarden","sub2":"/ Sep 2013 - May 2014","list":["Caring for students and providing information","Supervising events","Being on call and responding to issues in the middle of the night","Standing as an authoritative symbol as well as being a point of reassurance"]}],"skills":[{"name":"Kotlin","percentage":70},{"name":"Java","percentage":85},{"name":"Python","percentage":55},{"name":"Typescript","percentage":65},{"name":"Git","percentage":90},{"name":"Jenkins","percentage":87},{"name":"Docker","percentage":85},{"name":"AWS","percentage":75},{"name":"Kafka","percentage":70}]}'),l=function(){var e;return(0,n.jsx)("div",{className:"bg-gray-900 py-5 mb-8",children:(0,n.jsxs)("div",{className:"bg-white pt-8",children:[(0,n.jsxs)("h3",{className:"text-3xl text-center font-bold text-gray-900",children:[" ","Work Experience"]}),(0,n.jsx)("div",{className:"flex-1  max-w-screen-lg mx-auto p-5 text-white",children:(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:(null!==(e=null===o||void 0===o?void 0:o.info)&&void 0!==e?e:[]).map((function(e){var t;return(0,n.jsxs)("div",{className:"col-span-1 rounded-md border border-gray-300 p-5 bg-gray-900","data-testid":"container",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold p-0 m-0 ",children:e.name}),(0,n.jsxs)("p",{className:"mb-2 text-xs font-bold mb-5",children:[e.subtitle," ",e.sub2]}),(0,n.jsx)("ul",{children:null===(t=e.list)||void 0===t?void 0:t.map((function(e,t){return(0,n.jsx)("li",{className:"mb-2 text-sm",children:e},t)}))})]},e.name)}))})})]})})},c=a(2814),d=a(1417),h=function(){return(0,n.jsxs)("div",{className:"text-center py-2",children:[(0,n.jsxs)("ul",{className:"flex justify-center list-none p-0 m-0 pb-8","data-testid":"icons-container",children:[(0,n.jsx)("li",{className:"mx-3 text-white",children:(0,n.jsx)("a",{href:"https://github.com/sc12msw",children:(0,n.jsx)(c.G,{icon:d.zhw,className:"fa-2x"})})}),(0,n.jsx)("li",{className:"mx-3 text-white",children:(0,n.jsx)("a",{href:"https://twitter.com/mattchupichuw",children:(0,n.jsx)(c.G,{icon:d.mdU,className:"fa-2x"})})}),(0,n.jsx)("li",{className:"mx-3 text-white",children:(0,n.jsx)("a",{href:"https://instagram.com/mattchupichuw",children:(0,n.jsx)(c.G,{icon:d.Zzi,className:"fa-2x"})})}),(0,n.jsx)("li",{className:"mx-3 text-white",children:(0,n.jsx)("a",{href:"https://www.linkedin.com/in/matthew-watson-686a1a86/",children:(0,n.jsx)(c.G,{icon:d.D9H,className:"fa-2x"})})})]}),(0,n.jsx)("div",{className:"text-xs",children:(0,n.jsxs)("p",{className:"text-white flex-col flex",children:[(0,n.jsx)("a",{className:"mb-2",href:"https://www.instagram.com/tobias.bjorkli/",children:"Image credit: Tobias Bjorkli"}),(0,n.jsx)("a",{href:"https://www.pexels.com/search/norway/",children:"Via: Pexels"})]})})]})},m=a(4730),u=["children"],p=function(e){var t=e.children,a=(0,m.Z)(e,u);return(0,n.jsx)("div",{className:"".concat(a.backgroundClass?a.backgroundClass:""," min-h-screen flex flex-col"),children:t})},g=function(){return(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center text-white py-5",children:[(0,n.jsx)("img",{src:"/img/profile.jpg",className:"rounded-full h-40 w-40 items-center justify-center object-cover mb-10"}),(0,n.jsx)("h3",{children:"Matt Watson"}),(0,n.jsx)("p",{className:"pb-5",children:"Handles: @Tojourn @mattchupichu"}),(0,n.jsxs)("p",{className:"text-justify p-8 bg-black",children:[" Hi I'm Matt, I'm a generalist software engineer who has a range of skills and knowledge in various domains of software development, with a soft spot for devops and tooling. I can advance a software project from requirements to release and understand all of the phases within the software development lifecycle. During my career I have mainly coded in Java using Springboot and have used Kafka, Redis, AWS, and Postgres to build scalable and reliable applications. I am bit of a polyglot however and have done other projects in different languages like JS/TS and Python! This website for example is NextJs and Tailwind using Github pages :D. Some of my hobbies are bbqing, skatebording, gaming and wood work. I'm looking for a team that shares my passion for quality and innovation, and that doesn't mind my occasional puns and jokes. ",(0,n.jsx)("b",{children:" How do librarians connect to remote computers? SSH!"})," I was born in South Africa, but I moved to the UK a when I was 10. I love to travel, learn about different cultures and try lots of different food."]})]})},f=function(){var e;return(0,n.jsxs)("div",{className:"container mb-5 px-5 text-white",children:[(0,n.jsx)("h3",{className:"mb-4 center",children:" Skills "}),(0,n.jsx)("div",{className:"container mb-5",children:(null!==(e=null===o||void 0===o?void 0:o.skills)&&void 0!==e?e:[]).map((function(e){return(0,n.jsxs)("div",{className:"shadow bg-gray-800 my-1 text-xs max-w-2xl grid-flow-col grid grid-cols-4",children:[(0,n.jsx)("div",{className:"col-span-1",children:(0,n.jsx)("p",{className:"text-left pl-3",children:e.name})}),(0,n.jsx)("div",{className:"col-span-3",children:(0,n.jsx)("div",{className:"bg-blue-800 text-left text-white pl-3",style:{width:"".concat(e.percentage,"%")},children:e.percentage})})]},e.name)}))}),(0,n.jsx)("h3",{className:"mb-2",children:"Scale"}),(0,n.jsxs)("ul",{className:"text-left text-xs p-2",children:[(0,n.jsx)("li",{children:"(0-30) Basic, used a few times"}),(0,n.jsx)("li",{children:"(31-60) Good understanding, have developed actively with them commercially, but knowledge off the top my head is thin"}),(0,n.jsx)("li",{children:"(61-80) Experienced, understand most concepts can teach others, but still learning myself"}),(0,n.jsx)("li",{children:"(81-100) Mastered, have mastered most aspects of it"})]})]})},b=function(){return(0,n.jsx)(p,{backgroundClass:"bg-nordic bg-fixed bg-cover ",children:(0,n.jsxs)(p,{backgroundClass:"bg-black bg-opacity-50",children:[(0,n.jsx)(s,{}),(0,n.jsx)(r,{}),(0,n.jsx)(l,{}),(0,n.jsx)(f,{}),(0,n.jsx)(h,{})]})})}},5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8351)}])}},function(e){e.O(0,[112,534,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);