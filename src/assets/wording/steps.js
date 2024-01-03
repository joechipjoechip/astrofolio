export const stepsWording = {
	
	"formation": {
		id: "formation",
		title: "Education",
		catcher: "hey, ici cest la formation",
		stepStyle: "squared",
		color: "orange",
		placeholder: "Ruby, HTML, ..",
		slots: [
			{
				title: "Self - Continuous learnings",
				body: "web<br>Front-End",
				location: "Online",
				date: {
					year: "2022 - 2023",
				},
				description: [
					"Astro, React, React-Three-Fiber, TroisJS",
					"Vue3, vueUse, Nuxt3, Strapi v4, graphQL, .."
				]
			},
			{
				title: "Self - ThreejsJourney",
				body: "web<br>& creative",
				location: "Online",
				date: {
					year: "2021 - 2022",
				},
				description: [
					"ThreeJS (3D in browser), Shaders (glsl)",
					"Figma, Blender 3",
				]
			},
			{
				title: "The Hacking Project",
				body: "web<br>full-stack",
				location: "Paris",
				date: {
					year: "2017",
					duration: "4 intensive months"
				},
				description: [
					"Ruby, Rails, Javascript, API Twitter,",
					"Unit tests, Scrapping, Algo Cardio, .."
				]
			},
			{
				title: "Self - FreeCodeCamp.org",
				body: "Pure<br>Algorythm",
				location: "Online",
				date: {
					year: "2017",
					duration: "5 months - 5/7 - 8/24"
				},
				description: [
					"100% of Javascript exercices of the plateform"
				]
			},
			{
				title: "Self - 30 days of JS by Wes Bos",
				body: "Web<br>Front-end",
				location: "Online",
				date: {
					year: "2017",
					duration: "1 month"
				},
				description: [
					"Front-End javascript exercices",
					"JS ES6, HTML5 APIs, Algo cardio, .."
				]
			},
			{
				title: "Self - OpenClassrooms.com",
				body: "web<br>back-end",
				location: "online",
				date: {
					year: "2015",
					duration: "3 weeks",
				},
				description: [
					"Certification developpement Ruby"
				]
			},
			{
				title: "3W Academy",
				body: "web<br>full-stack",
				location: "Marseille",
				date: {
					year: "2015",
					duration: "3 intensive months",
				},
				description: [
					"POO, MVC, PHP5, MySQL,",
					"HTML5, CSS3, Javascript, jQuery"
				]
			},
			{
				title: "INFA Crear",
				body: "Designer<br>Multimedia",
				location: "Marseille",
				date: {
					year: "2014",
					duration: "4 months"
				},
				description: [
					"HTML5, CSS3, Bootstrap,",
					"Wordpress, Joomla"
				]
			},
			{
				title: "Fine Arts studies",
				body: "Hypermedia<br>Graphism",
				location: "Aix-en-Provence (Beaux-Arts)",
				date: {
					year: "2010 - 2013"
				},
				description: [
					"Historical, theorical and critical arts studies",
					"Pictural Design, Generative drawing, .."
				]
			},
			{
				title: "Graphic Design school",
				body: "graphic<br>design",
				location: "Marseille (Condé School, old AxeSud)",
				date: {
					year: "2004 - 2006"
				},
				description: [
					"Photoshop, Illustrator, Graphic theory,",
					"Composition, illustration, logo, ad, .."
				]
			},
			{
				title: "CPU Secondary Degree",
				body: "BTS Info<br>Sys@dmin",
				location: "Marseille",
				date: {
					year: "2002 - 2004",
				},
				description: [
					"Computing theorical and pratical degree",
					"Network, Admin, SQL requests crafting"
				]
			},
			{
				title: "French Baccalauréat",
				body: "BAC STT",
				location: "Luynes",
				date: {
					year: 2002
				},
				description: [
					"Sciences et Techniques du Tertiaire"
				]
			}
		]
	},

	"bio": {
		id: "bio",
		title: "Bio",
		catcher: "hey, ici cest la bio",
		stepStyle: "line",
		color: "#FF4E4E",
		slots: []
	},

	"experience": {
		id: "experience",
		title: "Experiences",
		catcher: "hey, ici cest la experience",
		stepStyle: "line",
		color: "#4E6AFF",
		placeholder: "Vue, GSAP, Three, ..",
		slots: [
			{
				title: "This CV / Portfolio (WIP)",
				body: "Front-End Dev.<br>CreaTech",
				location: "Marseille",
				date: {
					year: "2023-2024",
					duration: "On my freetime"
				},
				description: [
					"Astro4, Vue3, Nuxt3, React-Three-Fiber (R3f)",
					"VueUse, V-Motion"
				],
				expand: {
					technos: [
						{
							name: "Astro4",
							logoSrc: "./images/logos/astro.jpg"
						},
						{
							name: "Vue3",
							logoSrc: "./images/logos/vue.jpg"
						},
						{
							name: "R3F",
							logoSrc: "./images/logos/react.jpg"
						},
						{
							name: "Nanostore",
							logoSrc: "./images/logos/nanostore.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES6",
							logoSrc: "./images/logos/javascript.jpg"
						},
						{
							name: "GSAP",
							logoSrc: "./images/logos/gsap.jpg"
						},
						{
							name: "SASS",
							logoSrc: "./images/logos/sass.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
						},
						{
							name: "Git",
							logoSrc: "./images/logos/git.jpg"
						},
						{
							name: "Netlifly",
							logoSrc: "./images/logos/netlifly.jpg"
						},
					],
					links: [
						{
							href: "https://github.com/joechipjoechip/astrofolio",
							text: "See the git repo"
						}
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"CV / Portfolio que je dev sur mon temps libre",
									"Le but est de mettre à disposition des RH et recruteurs l'exhaustivité de mon parcours de manière visuellement digeste",
								]
							},
							{
								title: "Précision",
								lines: [
									"Ce site est WIP (Work in Progress) et en déploiement continue (pipe : Github -> Netlifly)",
									"Pour l'instant il manque encore beaucoup de choses (NAV, Accueil, Traductions, Détails de certaines expériences, etc..)",
									"Mais il est déjà consultable et relativement exhaustif, la recherche est fonctionnelle également",
								]
							},
							{
								title: "Note pour les DEVs",
								lines: [
									"Je travaille solo sur ce projet, donc ne pas prêter attention à la propreté/consistence des commits"
								]
							}
						]
					]
				}
			},
			{
				title: "Carré Basset Agency",
				body: "Front-End Dev.<br>CreaTech",
				location: "Full remote",
				date: {
					year: "2023",
					duration: "Freelance : 1 week mission"
				},
				description: [
					"Vue3, Nuxt3, Canvas"
				],
				expand: {
					technos: [
						{
							name: "Vue3",
							logoSrc: "./images/logos/vue.jpg"
						},
						{
							name: "Nuxt3",
							logoSrc: "./images/logos/nuxt.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES6",
							logoSrc: "./images/logos/javascript.jpg"
						},
						{
							name: "GSAP",
							logoSrc: "./images/logos/gsap.jpg"
						},
						{
							name: "SASS",
							logoSrc: "./images/logos/sass.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
						},
						{
							name: "Git",
							logoSrc: "./images/logos/git.jpg"
						},
					],
					links: [
						{
							href: "https://www.carrebasset2024.com",
							text: "www.carrebasset2024.com"
						}
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"Pour la nouvelle année (2024) le besoin de l'agence était une carte de voeux digitale avec un mini jeu à envoyer à ses clients"
								]
							},
							{
								title: "Interventions",
								lines: [
									"Développement Canvas",
									"Développement Front-end",
									"Mise en ligne",
								]
							}
						]
					]
				}
			},
			{
				title: "Omakase Recordings",
				body: "Director, CreaTech<br>Front-End Dev.",
				location: "Marseille",
				date: {
					year: "2023",
					duration: "Freelance : 9 months mission"
				},
				description: [
					"Vue2, Nuxt2, ThreeJS",
					"Blender 3, Mixamo"
				],
				special: {
					videoSrc: "./videos/onyi/teaser.mp4"
				},
				expand: {
					technos: [
						{
							name: "Blender 3",
							logoSrc: "./images/logos/blender.jpg"
						},
						{
							name: "ThreeJS",
							logoSrc: "./images/logos/threejs.jpg"
						},
						{
							name: "Vue2",
							logoSrc: "./images/logos/vue.jpg"
						},
						{
							name: "Nuxt2",
							logoSrc: "./images/logos/nuxt.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES6",
							logoSrc: "./images/logos/javascript.jpg"
						},
						{
							name: "GSAP",
							logoSrc: "./images/logos/gsap.jpg"
						},
						{
							name: "SASS",
							logoSrc: "./images/logos/sass.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
						},
						{
							name: "Git",
							logoSrc: "./images/logos/git.jpg"
						},
					],
					// texts: [
					// 	[
					// 		{
					// 			title: "Contexte",
					// 			lines: [
					// 				'<a href="https://www.onyi.fr" target="Blank">www.onyi.fr</a>',
					// 				"Pour la promotion d'une sortie d'album, le besoin du label était de mettre en ligne un objet créatif, expérienciel et innovant.",
					// 				"C'est dans ce contexte que j'ai été sollicité en tant que Creative Dev et Dev Front-End."
					// 			]
					// 		},
					// 		{
					// 			title: "Interventions",
					// 			lines: [
					// 				"Concept, Direction Artistique, Scénographie",
					// 				"Prototypage",
					// 				"&nbsp;",
					// 				"Conceptualisation, maquettage et développement de l'expérience web interactive en 3D et du site écrin",
					// 				"&nbsp;",
					// 				"Developpement ThreeJS",
					// 				"Ecriture de shaders Glsl",
					// 				"&nbsp;",
					// 				"Mise en ligne"
					// 			]
					// 		}
					// 	]
					// ],

				}
			},
			{
				title: "Zadig & Voltaire",
				body: "Front-end dev.",
				location: "Full remote",
				date: {
					year: "2022",
					duration: "Freelance : 6 months mission"
				},
				description: [
					"Vue2, Nuxt2, VueStorefront, SSR,",
					"graphQL, ElasticSearch, TypeScript.."
				],
				expand: {
					technos: [
						{
							name: "Vue2",
							logoSrc: "./images/logos/vue.jpg"
						},
						{
							name: "Vue Storefront",
							logoSrc: "./images/logos/vuestorefront.jpg"
						},
						{
							name: "Nuxt2",
							logoSrc: "./images/logos/nuxt.jpg"
						},
						{
							name: "Tailwind CSS",
							logoSrc: "./images/logos/tailwind.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES6",
							logoSrc: "./images/logos/javascript.jpg"
						},
						{
							name: "Typescript",
							logoSrc: "./images/logos/typescript.jpg"
						},
						{
							name: "SASS",
							logoSrc: "./images/logos/sass.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
						},
						{
							name: "Storybook",
							logoSrc: "./images/logos/storybook.jpg"
						},
						{
							name: "GraphQL",
							logoSrc: "./images/logos/graphql.jpg"
						},
						{
							name: "Apollo",
							logoSrc: "./images/logos/apollo.jpg"
						},
						{
							name: "Elastic Search",
							logoSrc: "./images/logos/elasticsearch.jpg"
						},
						{
							name: "Git",
							logoSrc: "./images/logos/git.jpg"
						},
						{
							name: "GitLab",
							logoSrc: "./images/logos/gitlab.jpg"
						},
						{
							name: "Jira",
							logoSrc: "./images/logos/jira.jpg"
						},
					],
					links: [
						{
							href: "https://www.zadig-et-voltaire.com",
							text: "www.zadig-et-voltaire.com"
						}
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"Site eCommerce i18n à fort traffic"
								]
							},
							{
								title: "Interventions",
								lines: [
									"TMA : Maintenance Corrective et Evolutive",
									"&nbsp;",
									"Réharmonisation / Refactorisation des sidebars du site (panier, recherche, mon compte, etc)",
									"&nbsp;",
									"Code review",
									"Correction de bugs : ticketing"
								]
							}
						]
					]
				}
			},
			{
				title: "Danone",
				body: "Front-end dev.",
				location: "Full remote",
				date: {
					year: "2021 - 2022",
					duration: "Freelance : 6 months mission"
				},
				description: [
					"DAM on AEM architecture",
					"Vanilla Javascript, LESS CSS (BEM), ..",
				],
				expand: {
					technos: [
						{
							name: "AEM",
							logoSrc: "./images/logos/aem.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES6",
							logoSrc: "./images/logos/javascript.jpg"
						},
						{
							name: "Webpack",
							logoSrc: "./images/logos/webpack.jpg"
						},
						{
							name: "LESS",
							logoSrc: "./images/logos/less.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
						},
						{
							name: "Git",
							logoSrc: "./images/logos/git.jpg"
						},
						{
							name: "Confluence",
							logoSrc: "./images/logos/confluence.jpg"
						},
						{
							name: "Jira",
							logoSrc: "./images/logos/jira.jpg"
						},
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"Danone compte près de 100 000 collaborateurs dans le monde. La société avait un fort besoin de centralisation de ses assets commerciaux (documentations techniques des produits distribués).",
									"C'est dans ce contexte que j'ai été sollicité afin de développer le front-end de ces outils de centralisations : DAM (Digital Assets Manager) sur leur architecture AEM (Adobe Experience Manager)"
								]
							},
							{
								title: "Missions",
								lines: [
									"\"Medical Portal\" : Implémentation custom du Front-end pour le DAM de la division Nutrition Médicale",
									"&nbsp;",
									"\"DAM One Portal\" : Implémentation custom du Front-end pour le portail unifié des DAM de toutes les divisions",
									"&nbsp;"
								]
							},
							{
								title: "Livrables",
								lines: [
									"- Développements et intégrations customs des Client-Side-Librairies nécessaires (CSS et JS from scratch)",
									"&nbsp;",
									"- Mises en place des conditions propices à leurs évolutivités et maintenabilités dans le temps (clean code, BEM conventions, doc)",
									"&nbsp;",
									"- Rédactions des documentations idoines (Confluence)"
								]
							}
						]
					]
				}
			},
			{
				title: "Judith Creative Agency",
				body: "Fullstack dev.",
				location: "Marseille",
				date: {
					year: "2021",
					duration: "Freelance : 2 months mission"
				},
				description: [
					"Fullstack dev : CMS custom",
					"Vue2, Nuxt2, Strapi4, Heroku, AWS",
				],
				expand: {
					technos: [
						{
							name: "Vue2",
							logoSrc: "./images/logos/vue.jpg"
						},
						{
							name: "Nuxt2",
							logoSrc: "./images/logos/nuxt.jpg"
						},
						{
							name: "Strapi4",
							logoSrc: "./images/logos/strapi.jpg"
						},
						{
							name: "PostgreSQL",
							logoSrc: "./images/logos/postgresql.jpg"
						},
						{
							name: "GraphQL",
							logoSrc: "./images/logos/graphql.jpg"
						},
						{
							name: "Apollo",
							logoSrc: "./images/logos/apollo.jpg"
						},
						{
							name: "Heroku",
							logoSrc: "./images/logos/heroku.jpg"
						},
						{
							name: "AWS",
							logoSrc: "./images/logos/aws.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES6",
							logoSrc: "./images/logos/javascript.jpg"
						},
						{
							name: "SASS",
							logoSrc: "./images/logos/sass.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
						},
						{
							name: "Git",
							logoSrc: "./images/logos/git.jpg"
						},
					],
					links: [
						{
							href: "http://www.judithcreativeagency.fr",
							text: "www.judithcreativeagency.fr"
						}
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"Création d'un CMS custom pour une agence de social content"
								]
							},
							{
								title: "Bilan",
								lines: [
									"Le site a été livré, dans les temps et 100% fonctionnel, malheureusement l'agence n'a toujours pas pris en main la contribution de son contenu"
								]
							},
							
						]
					]
				}
			},
			{
				title: "Services Généraux Agency",
				body: "Front-end Dev.<br>CreaTech",
				location: "Paris",
				date: {
					year: "2021",
					duration: "Freelance : 1 months mission"
				},
				description: [
					"Mini-site évenementiel pour une expo",
					"Vue2, Nuxt2"
				],
				expand: {
					technos: [
						{
							name: "Vue2",
							logoSrc: "./images/logos/vue.jpg"
						},
						{
							name: "Nuxt2",
							logoSrc: "./images/logos/nuxt.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES6",
							logoSrc: "./images/logos/javascript.jpg"
						},
						{
							name: "GSAP",
							logoSrc: "./images/logos/gsap.jpg"
						},
						{
							name: "SASS",
							logoSrc: "./images/logos/sass.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
						},
						{
							name: "Git",
							logoSrc: "./images/logos/git.jpg"
						},
					],
					links: [
						{
							href: "http://www.oasis.paris",
							text: "www.oasis.paris"
						}
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"(offline nowaday)",
									"Création d'un site événementiel pour accompagner le vernissage d'une exposition organisée par l'agence.",
								]
							},
							{
								title: "Brief",
								lines: [
									"Le concept était d'avoir un site qui se navigue comme Google Map"
								]
							},
							{
								title: "Interventions",
								lines: [
									"Développement du front-end du site",
									"Développement de toute la partie interaction sur la map (grab / drag / zoom-dezoom / autoplay de vidéos) en vanilla JS"
								]
							},
							
						]
					]
				}
			},
			{
				title: "Mazarine Agency",
				body: "Front-end dev.<br>Createch",
				location: "Paris",
				pinable: true,
				date: {
					year: "2017 - 2021",
					duration: "CDI : 3 years and 6 months (of <span class='color-love-font'>❤</span>)"
				},
				description: [
					"Vanilla Javascript, Vue, React, NodeJS, PHP,",
					"Twig, Blade, Drupal, Wordpress, Laravel, .."
				],
				special: {
					videoSrc: "./videos/mazarine/cartier.mp4"
				},
				expand: {
					technos: [
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES5 / ES6",
							logoSrc: "./images/logos/javascript.jpg"
						},
						{
							name: "Webpack",
							logoSrc: "./images/logos/webpack.jpg"
						},
						{
							name: "Vue",
							logoSrc: "./images/logos/vue.jpg"
						},
						{
							name: "React",
							logoSrc: "./images/logos/react.jpg"
						},
						{
							name: "GSAP",
							logoSrc: "./images/logos/gsap.jpg"
						},
						{
							name: "GTM",
							logoSrc: "./images/logos/gtm.jpg"
						},
						{
							name: "DialogFlow",
							logoSrc: "./images/logos/dialogflow.jpg"
						},
						{
							name: "SASS",
							logoSrc: "./images/logos/sass.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
						},
						{
							name: "Jira",
							logoSrc: "./images/logos/jira.jpg"
						},
						{
							name: "NodeJS",
							logoSrc: "./images/logos/nodejs.jpg"
						},
						{
							name: "PHP",
							logoSrc: "./images/logos/php.jpg"
						},
						{
							name: "Laravel",
							logoSrc: "./images/logos/laravel.jpg"
						},
						{
							name: "Symfony",
							logoSrc: "./images/logos/symfony.jpg"
						},
						{
							name: "Drupal",
							logoSrc: "./images/logos/drupal.jpg"
						},
						{
							name: "Blade",
							logoSrc: "./images/logos/blade.jpg"
						},
						{
							name: "Twig",
							logoSrc: "./images/logos/twig.jpg"
						},
						{
							name: "Git",
							logoSrc: "./images/logos/git.jpg"
						},
						{
							name: "GitLab",
							logoSrc: "./images/logos/gitlab.jpg"
						},
						
						// rajouter : dialogFlow / googleMap api / canvas / GTM / webpack / gulp / npm / composer / jira / redmine / confluence
					],
					// texts: [
					// 	[
					// 		{
					// 			id: "chanel",
					// 			title: "Client",
					// 			lines: [
					// 				'<a href="https://www.chanel.com" target="Blank">www.chanel.com</a>',
					// 				"Site corporate / eCommerce i18n à fort traffic"
					// 			]
					// 		},
					// 		{
					// 			title: "Interventions",
					// 			lines: [
					// 				"Intégrations minutées pendant les défilés de la marque.",
					// 				"Pixel perfect mandatory avec scope ultra large",
					// 				"&nbsp;",
					// 				"TMA",
					// 				"&nbsp;",

					// 				"Correction de bugs sur le Storelocator",
					// 				"-> HTML5 / CSS3 / JS ES6 / Google Map API",
					// 				"&nbsp;",

					// 				"Correction de bugs sur la Wishlist",
					// 				"-> React / Redux",
					// 				"&nbsp;",

					// 				"Correction de bugs sur les services coporates :",
					// 				"FAQ, Newsletters subscriptions, Careers Legals, etc ..",
					// 				"Validations de formulaires avec règles métiers i18n complexes",
					// 				"-> HTML5 / CSS3 / PHP / JS ES5",
									
					// 				"&nbsp;",
									
					// 				"Correction de templates pour langues arabes (right to left)",
					// 				"-> HTML5 / CSS3 / JS ES5",
					// 				"&nbsp;",
					// 				"Implémentations de plans de tracking, GTM Google Tag Manager, Datalayer",
									
					// 			]
					// 		},
					// 	],
					// 	[
					// 		{
					// 			id: "dior",
					// 			title: "Client",
					// 			lines: [
					// 				'<a href="https://www.dior.com" target="Blank">www.dior.com</a>',
					// 				"Site corporate i18n à fort traffic"
					// 			]
					// 		},
					// 		{
					// 			title: "Interventions",
					// 			lines: [
					// 				"TMA",
					// 				"Correction de bugs sur les services coporates",
					// 				"Newsletters subscriptions, Careers, Legals, etc ..",
					// 				"-> HTML5 / CSS3 / PHP / JS ES5",
					// 			]
					// 		},
					// 	],
					// 	[
					// 		{
					// 			id:"balmain",
					// 			title: "Client",
					// 			lines: [
					// 				'<a href="https://www.balmain.com" target="Blank">www.balmain.com</a>',
					// 				"Site eCommerce à fort traffic"
					// 			]
					// 		},
					// 		{
					// 			title: "Interventions",
					// 			lines: [
					// 				"Accessibility (A11y)",
					// 				"Implémentation intégrale de la couche a11y sur l'ensemble du site, en autonomie (audit de 90pages fournit)",
					// 			]
					// 		},
					// 	],
					// 	[
					// 		{
					// 			id:"opera",
					// 			title: "Client",
					// 			lines: [
					// 				'<a href="https://www.operadeparis.fr" target="Blank">www.operadeparis.fr</a>',
					// 				"Site institutionnel / eCommerce à fort traffic"
					// 			]
					// 		},
					// 		{
					// 			title: "Projets / Rôles",
					// 			lines: [
					// 				"TMA :",
					// 				"&nbsp;",
					// 				"Correction de bugs + refactorisations",
					// 				"&nbsp;",
					// 				"&nbsp;",
					// 				"REFONTE TUNNEL ABONNEMENTS :",
					// 				"&nbsp;",
					// 				"Developement d’une serie de pages et de modules",
					// 				"&nbsp;",
					// 				"Login, mon compte, recherche (avec filtres)",
					// 				"&nbsp;",
					// 				"Page spectacle : calendrier dynamique des représentations, placement dans les salles (svg + vanilla js), etc ..)",
					// 				"&nbsp;",
					// 				"Construction à la volée des modules fronts après réception d’XHR (manipulations massives du DOM via JS à base d’injections de template strings d'ES6)",
					// 				"&nbsp;",
					// 				"Assurer la viabilité de l’asynchonicité des données de la page (y compris pour le tracking)",
					// 				"&nbsp;",
					// 				"Sliders dynamiques pure vanilla",
					// 				"&nbsp;",
					// 				"Force de propositions UX/UI",
					// 				"&nbsp;",
					// 				"Implémenter intégralement les plans de tracking des pages et des modules dynamiques en assurant la cohérence des données remontées",
					// 				"&nbsp;",
					// 				"Assurer le pixel perfect partout",
					// 				"&nbsp;",
					// 				"&nbsp;",
					// 				"&nbsp;",
					// 				"REFONTE OCTAVE MAGAZINE :",
					// 				"&nbsp;",
					// 				"Autonome sur l’intégralité du front de la refonte",
					// 				"&nbsp;",
					// 				"Architecture des différents modules avec le backend",
					// 				"&nbsp;",
					// 				"Développement front des différents templates",
					// 				"&nbsp;",
					// 				"Développement front pure vanilla des différents modules (slider vidéos youtube, card swipers, animations, lightbox, load mores, etc..)",
					// 				"&nbsp;",
					// 				"Rendre la lightBox et les sliders vidéos compatibles avec les players : Youtube (youtube player API), Vimeo (iframe), Arte (iframe), et natifs (HTML5 API)",
					// 				"&nbsp;",
					// 				"Implémentation intégrale du plan de tracking",
					// 				"&nbsp;",
					// 				"Responsive propre, pixel perfect",
					// 				"&nbsp;",
					// 				"Force de proposition UX/UI",

					// 			]
					// 		}
					// 	]
					// ]
				}
			},
			{
				title: "Applyface",
				body: "designer / dev.<br>Project manager",
				location: "Paris",
				date: {
					year: "2016 - 2017",
					duration: "CDI : 1 year and 2 months"
				},
				description: [
					"Setting up a code/no-code production line",
					"for the app agency."
				],
				expand: {
					technos: [
						{
							name: "Photoshop",
							logoSrc: "./images/logos/photoshop.jpg"
						},
						{
							name: "Illustrator",
							logoSrc: "./images/logos/illustrator.jpg"
						},
						{
							name: "AppStore",
							logoSrc: "./images/logos/appstore.jpg"
						},
						{
							name: "Google Play",
							logoSrc: "./images/logos/googleplay.jpg"
						},
						{
							name: "GoodBarber",
							logoSrc: "./images/logos/goodbarber.jpg"
						},
						{
							name: "Angular 1",
							logoSrc: "./images/logos/angular.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES5",
							logoSrc: "./images/logos/javascript.jpg"
						},
						
						
						// rajouter : photoshop / appStore / google Play / jQuery
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"App agency"
								]
							},
							{
								title: "Missions",
								lines: [
									"Mettre en place toute la ligne de production via des solutions code/no-code",
									"Aller à l'efficacité pour produire rapidement",
									"Créer et péréniser les process",
								]
							},
							{
								title: "Rôles",
								lines: [
									"Project Manager :",
									"Définition des specs, Relation client, Planning",
									"Soumissions et suivis AppStore et GooglePlay",
									"&nbsp;",
									"Dev. Front-End :",
									"Création d'un bootstrap itératif maison",
									"-> HTML5 / CSS3 / Angular 1",
									"Mise en adéquation avec le SaaS GoodBarber",
									"&nbsp;",
									"Graphic Designer :",
									"Créations de chartes graphiques à la volée",
									"Sérialisation des assets via scripts Photoshop",
									"&nbsp;",
									"&nbsp;",
									"Rendement obtenu au bout de 3 mois :",
									"-> 25 applications/mois",
								]
							}
						]
					]
				}
			},
			{
				title: "Gellé & Frères",
				body: "Front-end dev.<br>Designer",
				location: "Paris",
				date: {
					year: "2016",
					duration: "Freelance : 1 month mission"
				},
				description: [
					"Freelance oneshot for",
					"Parfum & SkinCare brand launch"
				],
				expand: {
					technos: [
						{
							name: "Photoshop",
							logoSrc: "./images/logos/photoshop.jpg"
						},
						{
							name: "Illustrator",
							logoSrc: "./images/logos/illustrator.jpg"
						},
						{
							name: "Angular 1",
							logoSrc: "./images/logos/angular.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES5",
							logoSrc: "./images/logos/javascript.jpg"
						},
						
						// rajouter : photoshop
					],
					links: [
						{
							href: "http://gfgf.surge.sh",
							text: "Backup host"
						}
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"Parfum & SkinCare Brand launch"
								]
							},
							{
								title: "Missions",
								lines: [
									"Maquettage + Développement intégral du site pour le lancement de la marque.",
									"&nbsp;",
									"Structuration des données (json)",
									"Gestion du multi-langue sans rechargement de page",
									"Gestion d'un lecteur audio dynamique",
									"Routage pure front vanilla",
									"Responsive ready",
									"Animations CSS3",
									"Création d'un diagnostic stylé ainsi que sa version standalone pour pouvoir tourner sans connexion sur des ipads lors des salons cosmétiques",
									"&nbsp;",
									"&nbsp;",
									
									'La société a depuis refondu le site, mais vous trouverez un backup de mon travail ci-dessus'
								]
							}
						]
					]
				}
				
			},
			{
				title: "La Maison des Sushis",
				body: "Front-end Dev.<br>Designer",
				location: "Marseille",
				date: {
					year: "2015",
					duration: "Freelance : 2 months mission"
				},
				description: [
					"Angular 1 SPA website"
				],
				expand: {
					technos: [
						{
							name: "Photoshop",
							logoSrc: "./images/logos/photoshop.jpg"
						},
						{
							name: "Illustrator",
							logoSrc: "./images/logos/illustrator.jpg"
						},
						{
							name: "Angular 1",
							logoSrc: "./images/logos/angular.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES5",
							logoSrc: "./images/logos/javascript.jpg"
						},
						
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"Site vitrine pour un restaurant de sushis"
								]
							},
							{
								title: "Missions",
								lines: [
									"Maquettage de la carte print",
									"Maquettage du site",
									"Intégration from scratch",
									"Développement d'un outil de recherche par ingrédient",
								]
							}
						]
					]
				}
			},
			{
				title: "RG Design Agency",
				body: "Integrator<br>Designer",
				location: "Marseille",
				date: {
					year: "2015",
					duration: "Freelance : 3 months mission"
				},
				description: [
					"Wordpress, Prestashop & Joomla",
					"Custom templates integrations, design, .."
				],
				expand: {
					technos: [
						{
							name: "Photoshop",
							logoSrc: "./images/logos/photoshop.jpg"
						},
						{
							name: "Illustrator",
							logoSrc: "./images/logos/illustrator.jpg"
						},
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "Wordpress",
							logoSrc: "./images/logos/wordpress.jpg"
						},
						{
							name: "Prestashop",
							logoSrc: "./images/logos/prestashop.jpg"
						},
						{
							name: "Joomla",
							logoSrc: "./images/logos/joomla.jpg"
						},
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"Agence web qui personnalise des CMS"
								]
							},
							{
								title: "Missions",
								lines: [
									"Intégrations des maquettes :",
									"-> HTML5, CSS3",
									"&nbsp;",
									
									"Personnalisations de thèmes CMS :",
									"-> Wordpress, Prestashop, Joomla",
									"&nbsp;",

									"Créations de maquettes UI",
									"Créations d'identités graphiques",
									"-> Photoshop, Illustrator",
								]
							}
						]
					]
				}
			},
			{
				title: "Art & Graphic design",
				body: "Graphic<br>Designer",
				location: "Marseille - Aix-en-Provence",
				date: {
					year: "2008 - 2015",
					duration: "Freelancing while studying"
				},
				description: [
					"Various printed communication supports",
					"Fondation Vasarely, Friche Belle de Mai, .."
				]
			},
			{
				title: "ArtKom Agency",
				body: "Graphic<br>Designer",
				location: "Marseille",
				date: {
					year: "2006",
					duration: "Stage : 1 month"
				},
				description: [
					"Various communication supports",
					"Roughman & infographist"
				]
			},
			{
				title: "Atos",
				body: "Graphic<br>Designer",
				location: "Paris",
				date: {
					year: "2005",
					duration: "Stage : 1 month"
				},
				description: [
					"Intern communication supports",
					"Infographist"
				]
			},
			
		]
	}

} 