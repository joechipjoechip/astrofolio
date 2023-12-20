export const stepsWording = {
	
	"formation": {
		title: "Education",
		catcher: "hey, ici cest la formation",
		stepStyle: "squared",
		color: "orange",
		placeholder: "Ruby, HTML, ..",
		slots: [
			{
				title: "Self learning",
				body: "web<br>& creative",
				location: "Online",
				date: {
					year: "2021 - 2022",
				},
				description: [
					"Figma, Blender, ..",
					"ThreeJS (webgl), Shaders (glsl), TroisJS, ..",
					"Vue3, vueUse, Nuxt3, Strapi v4, graphQL, .."
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
					"Ruby + Rails, Javascript, API Twitter,",
					"Unit tests Mocha, Scrapping, Algo Cardio, .."
				]
			},
			{
				title: "FreeCodeCamp.org",
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
				title: "30 days of JS by Wes Bos",
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
				title: "OpenClassrooms.com",
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
		title: "Bio",
		catcher: "hey, ici cest la bio",
		stepStyle: "line",
		color: "#FF4E4E",
	},

	"experience": {
		title: "Experiences",
		catcher: "hey, ici cest la experience",
		stepStyle: "line",
		color: "#4E6AFF",
		placeholder: "Vue, GSAP, Three, ..",
		slots: [
			{
				title: "Zadig & Voltaire",
				body: "Front-end dev.",
				location: "Full remote",
				date: {
					year: "2022",
					duration: "Freelance : 4 months mission"
				},
				description: [
					"Vue2, Nuxt2, VueStorefront, SSR,",
					"graphQL, ElasticSearch, TypeScript.."
				],
				expand: {
					technos: [
						{
							name: "Vue 2",
							logoSrc: "./images/logos/vue.jpg"
						},
						{
							name: "Vue Storefront",
							logoSrc: "./images/logos/vuestorefront.jpg"
						},
						{
							name: "Nuxt 2",
							logoSrc: "./images/logos/nuxt.jpg"
						},
						{
							name: "Tailwind CSS",
							logoSrc: "./images/logos/tailwind.jpg"
						},
						{
							name: "Typescript",
							logoSrc: "./images/logos/typescript.jpg"
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
							name: "JS ES2021",
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
						}
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									'<a href="https://www.zadig-et-voltaire.com" target="Blank">www.zadig-et-voltaire.com</a>',
									"Site eCommerce i18n à fort traffic"
								]
							},
							{
								title: "Interventions",
								lines: [
									"TMA :",
									"Corrective : Correction de bugs",
									"&nbsp;",
									"Evolutive : Réharmonisation / refactorisation du système de sidebars (panier, recherche, mon compte, etc)"
								]
							}
						]
					]
				}
			},
			{
				title: "Danone",
				body: "Front-end dev.<br>UI Consultant",
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
					asymetric: true,
					technos: [
						{
							name: "AEM",
							logoSrc: "./images/logos/aem.jpg"
						},
						// {
						// 	name: "Confluence",
						// 	logoSrc: "./images/logos/confluence.jpg"
						// },
						{
							name: "HTML5",
							logoSrc: "./images/logos/html.jpg"
						},
						{
							name: "CSS3",
							logoSrc: "./images/logos/css.jpg"
						},
						{
							name: "JS ES2021",
							logoSrc: "./images/logos/javascript.jpg"
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
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"DAM (Digital Asset Management) sur archi AEM (Adobe Experience Manager)"
								]
							},
							{
								title: "Missions",
								lines: [
									"- intra : \"Medical Portal\" : Implémentation custom du Front-end pour le DAM de la division Nutrition Médicale",
									"&nbsp;",
									"- intra : \"DAM One Portal\" : Implémentation custom du Front-end pour le portail unifié des DAM de toutes les divisions",
									"&nbsp;",
									"- extra : Prototypage/Refonte (POC) de la section Newsroom du futur Danone.com (en GlassMorphism)"
								]
							},
							{
								title: "Livrables",
								lines: [
									"- Développements et intégrations customs des Client-Side-Librairies nécessaires",
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
				title: "Mazarine agency",
				body: "Front-end dev.<br>createch",
				location: "Paris",
				date: {
					year: "2017 - 2021",
					duration: "CDI : 3 years and 7 months (of ❤)"
				},
				description: [
					"Vanilla Javascript, Vue, React, Node, PHP,",
					"Twig, Blade, Drupal, Wordpress, Laravel, .."
				],
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
							name: "JS ES5 to ES2021",
							logoSrc: "./images/logos/javascript.jpg"
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
							name: "SASS",
							logoSrc: "./images/logos/sass.jpg"
						},
						{
							name: "BEM",
							logoSrc: "./images/logos/bem.jpg"
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
						}
						// rajouter : nodeJS / dialogFlow / googleMap api / canvas / GTM / webpack / gulp / npm / composer / jira / redmine / confluence
					],
					asymetric: true,
					anchorLinks: [
						{
							label: "Chanel",
							anchor: "chanel"
						},
						{
							label: "Dior",
							anchor: "dior"
						},
						{
							label: "Balmain",
							anchor: "balmain"
						},
						{
							label: "Opéra de Paris",
							anchor: "opera"
						},
						{
							label: "Van Cleef & Arpels",
							anchor: "vancleef"
						},
						{
							label: "Breitling",
							anchor: "breitling"
						},
						{
							label: "Paco Rabanne",
							anchor: "paco"
						},
						{
							label: "Prada",
							anchor: "prada"
						},
						{
							label: "Offwhite",
							anchor: "offwhite"
						},
						{
							label: "Victor & Rolf",
							anchor: "victor"
						},
						{
							label: "Ritz",
							anchor: "ritz"
						},
						{
							label: "Mugler",
							anchor: "mugler"
						},
						{
							label: "SmartPlayer",
							anchor: "smart"
						},
					],
					texts: [
						[
							{
								id: "chanel",
								title: "Client",
								lines: [
									'<a href="https://www.chanel.com" target="Blank">www.chanel.com</a>',
									"Site corporate / eCommerce i18n à fort traffic"
								]
							},
							{
								title: "Interventions",
								lines: [
									"Intégrations minutées pendant les défilés de la marque.",
									"Pixel perfect mandatory avec scope ultra large",
									"&nbsp;",
									"TMA",
									"&nbsp;",

									"Correction de bugs sur le Storelocator",
									"-> HTML5 / CSS3 / JS ES6 / Google Map API",
									"&nbsp;",

									"Correction de bugs sur la Wishlist",
									"-> React / Redux",
									"&nbsp;",

									"Correction de bugs sur les services coporates :",
									"FAQ, Newsletters subscriptions, Careers Legals, etc ..",
									"Validations de formulaires avec règles métiers i18n complexes",
									"-> HTML5 / CSS3 / PHP / JS ES5",
									
									"&nbsp;",
									
									"Correction de templates pour langues arabes (right to left)",
									"-> HTML5 / CSS3 / JS ES5",
									"&nbsp;",
									"Implémentations de plans de tracking, GTM Google Tag Manager, Datalayer",
									
								]
							},
						],
						[
							{
								id: "dior",
								title: "Client",
								lines: [
									'<a href="https://www.dior.com" target="Blank">www.dior.com</a>',
									"Site corporate i18n à fort traffic"
								]
							},
							{
								title: "Interventions",
								lines: [
									"TMA",
									"Correction de bugs sur les services coporates",
									"Newsletters subscriptions, Careers, Legals, etc ..",
									"-> HTML5 / CSS3 / PHP / JS ES5",
								]
							},
						],
						[
							{
								id:"balmain",
								title: "Client",
								lines: [
									'<a href="https://www.balmain.com" target="Blank">www.balmain.com</a>',
									"Site eCommerce à fort traffic"
								]
							},
							{
								title: "Interventions",
								lines: [
									"Accessibility (A11y)",
									"Implémentation intégrale de la couche a11y sur l'ensemble du site, en autonomie (audit de 90pages fournit)",
								]
							},
						],
						[
							{
								id:"opera",
								title: "Client",
								lines: [
									'<a href="https://www.operadeparis.fr" target="Blank">www.operadeparis.fr</a>',
									"Site institutionnel / eCommerce à fort traffic"
								]
							},
							{
								title: "Projets / Rôles",
								lines: [
									"TMA :",
									"&nbsp;",
									"Correction de bugs + refactorisations",
									"&nbsp;",
									"&nbsp;",
									"REFONTE TUNNEL ABONNEMENTS :",
									"&nbsp;",
									"Developement d’une serie de pages et de modules",
									"&nbsp;",
									"Login, mon compte, recherche (avec filtres)",
									"&nbsp;",
									"Page spectacle : calendrier dynamique des représentations, placement dans les salles (svg + vanilla js), etc ..)",
									"&nbsp;",
									"Construction à la volée des modules fronts après réception d’XHR (manipulations massives du DOM via JS à base d’injections de template strings d'ES6)",
									"&nbsp;",
									"Assurer la viabilité de l’asynchonicité des données de la page (y compris pour le tracking)",
									"&nbsp;",
									"Sliders dynamiques pure vanilla",
									"&nbsp;",
									"Force de propositions UX/UI",
									"&nbsp;",
									"Implémenter intégralement les plans de tracking des pages et des modules dynamiques en assurant la cohérence des données remontées",
									"&nbsp;",
									"Assurer le pixel perfect partout",
									"&nbsp;",
									"&nbsp;",
									"&nbsp;",
									"REFONTE OCTAVE MAGAZINE :",
									"&nbsp;",
									"Autonome sur l’intégralité du front de la refonte",
									"&nbsp;",
									"Architecture des différents modules avec le backend",
									"&nbsp;",
									"Développement front des différents templates",
									"&nbsp;",
									"Développement front pure vanilla des différents modules (slider vidéos youtube, card swipers, animations, lightbox, load mores, etc..)",
									"&nbsp;",
									"Rendre la lightBox et les sliders vidéos compatibles avec les players : Youtube (youtube player API), Vimeo (iframe), Arte (iframe), et natifs (HTML5 API)",
									"&nbsp;",
									"Implémentation intégrale du plan de tracking",
									"&nbsp;",
									"Responsive propre, pixel perfect",
									"&nbsp;",
									"Force de proposition UX/UI",

								]
							}
						]
					]
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
					asymetric: true,
					technos: [
						{
							name: "GoodBarber",
							logoSrc: "./images/logos/goodbarber.jpg"
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
						{
							name: "Angular 1",
							logoSrc: "./images/logos/angular.jpg"
						}
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
					asymetric: true,
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
							name: "Angular 1",
							logoSrc: "./images/logos/angular.jpg"
						}
						// rajouter : photoshop
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
									
									'La société a depuis refondu le site pour en faire un Wordpress, mais voici un backup de mon travail : <a href="http://gfgf.surge.sh/" target="_blank">ici</a>'
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
							name: "Joomla",
							logoSrc: "./images/logos/joomla.jpg"
						}
						// rajouter : photoshop, prestashop
					],
					texts: [
						[
							{
								title: "Contexte",
								lines: [
									"Web agency"
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
				title: "Freelance Designer",
				body: "Graphic<br>Designer",
				location: "Marseille - Aix-en-Provence",
				date: {
					year: "2008 - 2015",
					duration: "while studying & working"
				},
				description: [
					"Various printed communication supports",
					"Fondation Vasarely, Friche Belle de Mai, .."
				]
			},
			{
				title: "ArtKom Agency",
				body: "Designer<br>(stage)",
				location: "Marseille",
				date: {
					year: "2006",
					duration: "1 month"
				},
				description: [
					"Various communication supports",
					"Roughman & infographist"
				]
			},
			{
				title: "Atos",
				body: "Designer<br>(stage)",
				location: "Paris",
				date: {
					year: "2005",
					duration: "3 weeks"
				},
				description: [
					"Intern communication supports",
					"Infographist"
				]
			},
			
		]
	}

} 