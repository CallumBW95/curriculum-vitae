export interface EventInterface {
  type: string;
  role: string;
  title: string;
  description: string;
  date: {
    to: string;
    from: string;
  };
}

export const EventsData: EventInterface[] = [
  {
    title: "Eleven Miles",
    type: "Full Time",
    role: "Full Stack Developer",
    description:
      "<p>During my time at Eleven Miles I have enjoyed having the opportunity to work on larger projects as well as more interactive work than the average cookie cutter website I have primarily worked on in past agencies. This has given me the opportunity to work on projects that require high quality front end work with dependable back end functionality.</p><p>I have also spent time at the company improving my soft skills, for example I still take a lot of the undertakings on a day to day basis that I have done in previous roles, but they are now completed to a much higher standard in a more efficient and timely manner. I have really ustilised my time well in perfecting my approach to work and web development whilst working for the company.</p><p>I have also helped the team on the whole in the creation of CLI tools to help automate various tasks, for example the updating of plugins on our WordPress based websites. I have also been looking in my spare time at creating a headless version of wordpress that utilises react whilst utilising gutenberg functionality. For this I created an alternative to ACF which has the majority of the same functionality but instead is also built in react.</p>",
    date: {
      from: "January 2022",
      to: "Current",
    },
  },
  {
    title: "Appeal Digital",
    type: "Full Time",
    role: "Lead Developer",
    description:
      "<p>Whilst working for Appeal Digital I maintained the base WordPress boilerplate which is used as a starting point for all new projects and website builds. This included the utilisation of Guternberg, ACF, WooCommerce, WPML, and any other plugins/technologies that may be required for the project.</p><p>I also supported the Development team, training them on various technologies and frameworks, as well as introducing scalable solutions to repeat issues via the use of utility functions, etc. This improved my ability to multitask as I was able to support the other developers on my team whilst I was working on my own assigned work, completing it consistently to a high standard and within the set deadlines.</p><p>Upon completion of a build I was also responsible for the deployment of my own work to staging and production servers, and ran through my own checks to confirm that deployment completed successfully.</p>",
    date: {
      from: "August 2019",
      to: "December 2021",
    },
  },
  {
    title: "Teapot Creative",
    type: "Full Time",
    role: "Support Developer",
    description: "<p>I have a deep understanding of PrestaShop front end and back office. Whilst working on the Support Desk I managed tickets varying from requests to bug fixes. I had to resolve issues regarding security, general front end and checkout functionality. When extending existing and creating new functionality I had to understand the clients needs, and consider the feasibility of achieving this within their budget. I also had to undertake client meetings in and outside of the office. I also attend weekly team meetings to plan the week ahead, and discuss any points from the previous week. I have attended various team building exercises that taught us to extrapolate data from situations and analyse situations quickly and efficiently.</p><p>This has taught me the following:</p><ul><li>Understanding of MVC; PrestaShop - Symfony.</li><li>Understanding of Template based views; Smarty, Twig.</li><li>jQuery, which was later swapped for ECMAScript 6.</li><li>Integration of various Payment Gateways.</li></ul>",
    date: {
      from: "July 2015",
      to: "July 2019",
    },
  },
  {
    title: "Web Choice UK",
    type: "Full Time",
    role: "Junior Developer",
    description: "<p>Whilst at WebChoice UK I was utilised in a range of roles:</p><ul><li>Project Management</li><li>Assisting the Lead Salesman as the Technical Advisor in the procuring of one of the companies largest clients; UBL Banks</li><li>Updating the Company Website.</li></ul>",
    date: {
      from: "June 2014",
      to: "April 2015",
    },
  },
  {
    type: "Education",
    role: "BTEC Level 3 - ICT",
    title: "City of Bath College",
    description:"",
    date: {
      from: "",
      to: "",
    },
  },
  {
    type: "Education",
    role: "10 GCSE's - Level C & above",
    title: "The Corsham School",
    description:"",
    date: {
      from: "",
      to: "",
    },
  },
];