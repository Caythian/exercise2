import React from 'react';
import './App.css';
import Title from './components/Title'; 
import Menu from './components/Format';
import { Image,ImageSe,Video} from './components/Image';
import {Subt,Intro,Body} from './components/Text';
import {Footer} from './components/Format';
import Im1 from './Images/Ocho.jpeg';
import Im2 from './Images/Tsutsumi-no Ki.png';
import Im3 from './Images/Grave.jpeg';
import Im4 from './Images/Image1.jpg';
import Im5 from './Images/Akira.jpg';
import Im6 from './Images/Microbots.jpeg';
import Im7 from './Images/Solar.jpeg';
import Im8 from './Images/Modular.jpeg';



function Culture(){
    return(
    <div>
    <Title />
    <Menu />
    <Intro intro= "Many individuals commonly perceive origami primarily as a craft and art form rather than an embodiment of culture. However, origami holds profound cultural significance, tracing back to venerable ceremonial practices in both China and Japan. Its variant, recreational origami, has garnered global acclaim in the contemporary era. Furthermore, the convergence of origami with science and mathematics is evident as researchers increasingly incorporate its principles across various disciplines."
     />
    <Subt subt="Origami and Its Ceremonial Uses"
    />
    <Body> body="Indeed, while the invention of paper can be credited to China, the genesis of origami is often linked to Japan, particularly within the context of Shintoism. Initially, paper in Japan was primarily utilized for official documentation and the transcription of Buddhist scriptures. However, the advent of *washi*, a delicate yet resilient type of paper, revolutionized its usage. Within the Shinto faith, *washi* played an integral role in religious observances. It became a tradition to encase offerings to deities in this paper, a practice reflecting the deep reverence and sanctity associated with these rituals. Here's an example of how to fold a Shinde for a Shinto ritual:</Body>
    <Video videoLink="https://www.youtube.com/embed/6qVf5TP5KtU?si=cujiBO0irTbEc9DS"/>
    <Body>Also, in classical Shinto matrimonial ceremonies, sake bottles, representing Japanese wine, were embellished with paper-crafted butterflies. Termed as <span className="emph">"Mecho"</span> for the female and <span className="emph">"Ocho"</span> for the male, these intricately designed butterflies stand as potential antecedents in the lineage of representational origami. Notably, these emblematic butterflies historically predate the paper crane, a symbol now quintessentially associated with modern origami.</Body>
    <Image src1={Im1} alt1="Ocho and Mecho" description1="Ocho and Mecho Decorating the Sake Bottles" src2={Im2} alt2="Paper Tutorial from Tsutsumi-no-Ki" description2="Paper Tutorial from Tsutsumi-no-Ki" />
    <Body> The book <span className="emph">“Tsutsumi-no Ki”</span> by Sadatake Ise(1764), the first origami book, shows 13 ceremonial origami folds.</Body>
    <Body>In contemporary times, the ceremonial significance of origami might be overshadowed by its recreational and artistic facets. However, vestiges of its ritualistic roots persist. Drawing a parallel, in Chinese traditions during the <span className="emph">Qingming Festival</span>, individuals honor their forebears by visiting ancestral graves. During these visits, they offer <span className="emph">"paper money"</span> and <span className="emph">"paper ingots" (纸元宝)</span> by burning them, underscoring the enduring link between paper-folding practices and cultural ceremonies.
    </Body>
    <Video videoLink="https://www.youtube.com/embed/gelPgPAmQJ4?si=BWxx-uaazcUDQl2g"/>
    <Body>
    <span className="emph">"Grave paper" (坟飘纸)</span> is also a ceremonial decoration put on the graves of ancestors on Qingming festival. It incorporates both paper-folding and paper-cutting. Regrettably, in the age of industrialization, the majority of "grave paper" is now machine-produced, causing the once revered manual crafting techniques to fade into obscurity.
    </Body>
    <Image src1={Im3} alt1="Grave paper" description1="Machine-made Grave Paper"/>
    <Subt subt="Origami and Its Recreational Uses"/>
    <Body> In the beginning, the scarcity of paper rendered it a luxury, confining the art of origami predominantly to ceremonial purposes. However, with advancements in paper-making techniques, the cost of paper reduced, paving the way for origami's proliferation amongst the general populace. A significant milestone in this democratization of origami was the publication of <span className="emph">"Senbazuru Orikata" (Thousand Crane Folding)</span> in the 18th century. 
    </Body>
    <Image src1={Im4} alt1="paper crane tutorial from Senbazuru Orikata" description1="Paper Crane Tutorial from Senbazuru Orikata" src2={Im5} alt2="Akira Yoshizawa's book" description2="Akira Yoshizawa's book"/>
    <Body>
        Today, representational origami is the most popular form of origami embraced world-wide.  Often called the grandmaster of origami, <span className="emph">Akira Yoshizawa</span> is credited with elevating the art to its modern form in the 20th century. He developed a system of symbols, arrows, and diagrams to teach paper folding, which is widely used today.
    </Body>
    <Body>
    While origami has often been perceived as a communal or casual endeavor rather than a solemn artistic discipline, it cannot be denied that there's a burgeoning community ardently devoted to it. Thousands of organizations across the world are dedicated to origami practice. You can find more on "Virtual Archive".
    </Body>
    <Subt subt="Origami, Science, and Mathematics"/>
    <Body>
        Beyond the artistic realm, origami techniques have been applied in various fields such as space exploration and medical devices.
    </Body>
    <ImageSe src1={Im6} alt1="microbots with origami-inspired design" Link1="https://zhaolab.stanford.edu/publications/untethered-control-functional-origami-microrobots-distributed-actuation"description1="Origami Microbots (more)" src2={Im7} alt2="Solar panel designed using origami"Link2="https://www.youtube.com/watch?v=3E12uju1vgQ"description2="Nasa's Origami Solar Panel (more)"/>
    <Body>Origami is also interesting in terms of its incredible visual demonstration of mathematics. Here’s an example of how you can use origami to divide a paper into three equal parts: 
    </Body>
    <Video videoLink="https://www.youtube.com/embed/V7UJxeMlowQ?si=AFfOg4LxLY4dj6im"/>
    <Body> Indeed, <span className="emph">modular origami</span> serves as a compelling testament to the intricate intersection of art and mathematics within the realm of origami. This subfield, where multiple sheets of paper are folded into individual units and then assembled without the use of glue or tape, is a confluence of geometry, symmetry, and topology. 
    </Body>
    <Image src1={Im8} alt1="Modular origami" description1="one of the most basic type of modular origami"/>
    <Footer />
    </div>
)}
export default Culture;