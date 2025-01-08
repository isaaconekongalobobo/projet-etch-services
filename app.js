const express = require ('express')
const app = express ()
const path = require ('path');
const { title } = require('process');
const port = 3000

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.set ('view engine', 'ejs')

// Route par défaut
app.get('/', (req, res) => {
    const services = [
        {
            name: 'Installation photovoltaïque ( solaire)',
            image: '/images/section-services/solar.jpg',
        },
        {
            name: 'Installation électrique',
            image: '/images/section-services/electricity2.jpg',
        },
        {
            name: 'Décoration intérieure',
            image: '/images/section-services/deco-interieur.jpg',
        },
    ]
    const ourServices = [
        {
            title: 'Expertise locale et internationale',
            content: 'Forts de notre connaissance approfondie du marché congolais, nous comprenons les défis uniques auxquels sont confrontées les entreprises et les foyers à Kinshasa et au-delà. Nous combinons cette expertise locale avec des standards internationaux pour offrir des solutions de haute qualité.'
        }, 
        {
            title: 'Des solutions écologiques et économiques',
            content: "L'énergie solaire représente une alternative propre et durable face aux coupures fréquentes d'électricité. Nos installations solaires permettent non seulement de réduire votre empreinte écologique, mais également de réaliser des économies sur le long terme. C’est un investissement rentable pour vous et pour l’environnement."
        },        
        {
            title: 'Qualité et fiabilité',
            content: "Nous n’avons qu’un seul objectif : votre satisfaction. C’est pourquoi nous travaillons uniquement avec des équipements de haute qualité, garantissant une performance optimale et une durabilité à long terme. Nos équipes d'experts sont formées pour réaliser des installations fiables et sécurisées."
        },
    ]
    const objectifs = [
        {
            title: "Promouvoir l'accès à l'énergie durable",
            content: "Notre priorité est de rendre l’énergie solaire accessible à un large public, qu’il s’agisse des foyers, des entreprises ou des institutions publiques. En développant des solutions solaires efficaces et abordables, nous contribuons à améliorer l’accès à l’énergie dans les zones urbaines et rurales, tout en réduisant la dépendance aux sources d’énergie polluantes et coûteuses."
        },        
        {
            title: "Offrir des installations électriques fiables et sécurisées",
            content: "Nous visons à fournir des installations électriques fiables, modernes et conformes aux normes de sécurité les plus strictes. Notre objectif est de garantir à nos clients un réseau électrique durable, minimisant les risques de pannes et de dysfonctionnements, tout en optimisant la consommation d’énergie."
        },        
        {
            title: "Soutenir l'innovation et les technologies vertes",
            content: "Nous nous engageons à être à la pointe de l'innovation en matière de solutions énergétiques. En intégrant les dernières avancées technologiques dans le domaine de l’énergie solaire et des installations électriques, nous assurons à nos clients des produits performants, durables et respectueux de l’environnement."
        },
    ]
    const equipe = [
        { 
          name: 'Jhon Doe', 
          role: 'Directeur technique', 
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        { 
          name: 'Jhon Doe', 
          role: 'Directeur technique', 
          image: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        { 
          name: 'Jhon Doe', 
          role: 'Directeur technique', 
          image: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        }
    ]
    const temoignages = [
        {
            name: "Marie Laurent",
            role: "Directrice Marketing",
            image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            text: "Une expérience exceptionnelle ! L'équipe a su répondre parfaitement à nos besoins."
        },
        {
            name: "Thomas Dubois",
            role: "Chef d'entreprise",
            image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            text: "Professionnalisme et efficacité sont les maîtres mots. Je recommande vivement."
        },
        {
            name: "Sophie Martin",
            role: "Responsable RH",
            image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            text: "Un accompagnement personnalisé qui a dépassé nos attentes."
        }
    ]
    res.render ('acceuil',{services, ourServices, objectifs, equipe, temoignages})
});


app.get ('/commandes', (req, res) => {
    res.render ('command')
})
  
  app.listen(port, () => {
    console.log(`Serveur écoute sur http://localhost:${port}`);
  });