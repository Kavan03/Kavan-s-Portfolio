import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/portfolio_img_1.jpg';
import UTrackerImg from '../images/lawyer_img_2.png';
import GreenCtgImg from '../images/flip_img_3.png';
import CoinTrackerImg from '../images/notes_img_4.jpg';
import CavinImg from '../images/blog_img_5.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'My Portfolio',
    duration: 'Aug-2021 to Sept-2021',
    desc:
      'Technologies Used - React. The main aim to create my portfolio was to give accurate and precise information regarding my profile and my work. It consists of four pages :- Home, About, Projects and Contact, which covers all the data regarding my experience, my study background, my appreciations, achievements, and certifications.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Lawyer Client Meet-Up',
    duration: 'July-2018 to Dec-2018',
    desc:
      ' Technologies Used - Angular and Laravel. The main motto of Lawyer Client Meet-Up is advocate hiring. The website helps you to connect with qualified lawyer in best possible manner. It also provides a feature were advocate can maintain their profile were the clients can add reviews and ratings which makes it easier for other clients to decide which lawyer is best for his/her case. There is categorical bifurcation according to types of cases.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Flip Game',
    duration: 'Sept-2017 to Jan-2018',
    desc:
      'Technologies Used - HTML5, CSS3, JavaScript. Two participants can compete by flipping cards to attain a fixed score which has certain rules and restrictions. The one who achieves it first wins the game.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Notes App',
    duration: 'Aug-2020 to Sept-2020',
    desc:
      'Technologies Used - React and React Hooks. It is a website were one can make notes for each specific day by adding tasks and can delete the notes once he/she complete their tasks they decided. The positive side of this site is that all the notes are visible at same place at same time.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Blogs',
    duration: 'June-2020 to July-2020',
    desc:
      'Technologies Used: Embedded JavaScript and MongoDB with Mongoose. It is a website were one can log in or sign up and can add blogs as per their choice. Moreover, can view the blogs added by other bloggers.',
    img: CavinImg,
  },
];

export default projects;
