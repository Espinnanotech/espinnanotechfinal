"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Publication {
  id: number;
  year: number;
  title: string;
  authors: string[];
  link: string;
}

const PUBLICATIONS: Publication[] = [

  {
    "id": 1,
    "year": 2025,
    "title": "Designing and Development of Innovative N95 Respirator Using Nanofibres Produced by Air-Assisted Electrospinning",
    "authors": [
      "Suresh Kumar",
      "Ankit Singh",
      "N. K. Palaniswamy"
    ],
    "link": "https://onlinelibrary.wiley.com/doi/abs/10.1002/app.56978"
  },
  {
    "id": 2,
    "year": 2025,
    "title": "High-fidelity single-spin shuttling in silicon",
    "authors": [
      "Maxim De Smet",
      "Yuta Matsumoto",
      "Anne-Marije J. Zwerver",
      "Larysa Tryputen",
      "Sander L. de Snoo",
      "Sergey V. Amitonov",
      "Sam R. Katiraee-Far",
      "Amir Sammak",
      "Nodar Samkharadze",
      "Önder Gül",
      "Rick N. M. Wasserman",
      "Eliška Greplová",
      "Maximilian Rimbach-Russ",
      "Giordano Scappucci & Lieven M. K. Vandersypen"
    ],
    "link": "https://www.nature.com/articles/s41565-025-01920-5"
  },
  {
    "id": 3,
    "year": 2025,
    "title": "Ferrimagnetic Heusler tunnel junctions with fast spin-transfer torque switching enabled by low magnetization",
    "authors": [
      "Chirag Garg",
      "Panagiotis Ch. Filippou",
      "Ikhtiar",
      "Yari Ferrante",
      "See-Hun Yang",
      "Brian Hughes",
      "Charles T. Rettner",
      "Timothy Phung",
      "Sergey Faleev",
      "Teya Topuria",
      "Mahesh G. Samant",
      "Jaewoo Jeong & Stuart S. P. Parkin"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01827-7"
  },
  {
    "id": 4,
    "year": 2025,
    "title": "Anomalous Hall spin current drives self-generated spin–orbit torque in a ferromagnet",
    "authors": [
      "Eric Arturo Montoya",
      "Xinyao Pei & Ilya N. Krivorotov"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01819-7"
  },
  {
    "id": 5,
    "year": 2025,
    "title": "Spin–valley protected Kramers pair in bilayer graphene",
    "authors": [
      "Artem O. Denisov",
      "Veronika Reckova",
      "Solenn Cances",
      "Max J. Ruckriegel",
      "Michele Masseroni",
      "Christoph Adam",
      "Chuyao Tong",
      "Jonas D. Gerber",
      "Wei Wister Huang",
      "Kenji Watanabe",
      "Takashi Taniguchi",
      "Thomas Ihn",
      "Klaus Ensslin & Hadrien Duprez"
    ],
    "link": "https://www.nature.com/articles/s41565-025-01858-8"
  },
  {
    "id": 6,
    "year": 2025,
    "title": "Nanotechnology and Its Role in Building a Sustainable Economy",
    "authors": [
      "Upendra Kumar Mishra",
      "Satyendra Pratap Singh",
      "S. Gaurav",
      "Vishal Singh Chandel"
    ],
    "link": "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003632498-15/nanotechnology-role-building-sustainable-economy-upendra-kumar-mishra-satyendra-pratap-singh-gaurav-vishal-singh-chandel"
  },
  {
    "id": 7,
    "year": 2025,
    "title": "Antiferromagnetic spin-torque diode effect in a kagome Weyl semimetal",
    "authors": [
      "Shoya Sakamoto",
      "Takuya Nomoto",
      "Tomoya Higo",
      "Yuki Hibino",
      "Tatsuya Yamamoto",
      "Shingo Tamaru",
      "Yoshinori Kotani",
      "Hidetoshi Kosaki",
      "Masanobu Shiga",
      "Daisuke Nishio-Hamane",
      "Tetsuya Nakamura",
      "Takayuki Nozaki",
      "Kay Yakushiji",
      "Ryotaro Arita",
      "Satoru Nakatsuji & Shinji Miwa"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01820-0"
  },
  {
    "id": 8,
    "year": 2025,
    "title": "Energy-efficient picosecond spin–orbit torque magnetization switching in ferro- and ferrimagnetic films",
    "authors": [
      "Eva Díaz",
      "Alberto Anadón",
      "Pablo Olleros-Rodríguez",
      "Harjinder Singh",
      "Héloïse Damas",
      "Paolo Perna",
      "Martina Morassi",
      "Aristide Lemaître",
      "Michel Hehn & Jon Gorchon"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01788-x"
  },
  {
    "id": 9,
    "year": 2025,
    "title": "Spin-torque-driven gigahertz magnetization dynamics in the non-collinear antiferromagnet Mn3Sn",
    "authors": [
      "Won-Bin Lee",
      "Seongmun Hwang",
      "Hye-Won Ko",
      "Byong-Guk Park",
      "Kyung-Jin Lee & Gyung-Min Choi"
    ],
    "link": "https://www.nature.com/articles/s41565-025-01859-7"
  },
  {
    "id": 10,
    "year": 2025,
    "title": "Grover’s algorithm in a four-qubit silicon processor above the fault-tolerant threshold",
    "authors": [
      "I. Thorvaldson",
      "D. Poulos",
      "C. M. Moehle",
      "S. H. Misha",
      "H. Edlbauer",
      "J. Reiner",
      "H. Geng",
      "B. Voisin",
      "M. T. Jones",
      "M. B. Donnelly",
      "L. F. Peña",
      "C. D. Hill",
      "C. R. Myers",
      "J. G. Keizer",
      "Y. Chung",
      "S. K. Gorman",
      "L. Kranz & M. Y. Simmons"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01853-5"
  },
  {
    "id": 11,
    "year": 2025,
    "title": "Switching on and off the spin polarization of the conduction band in antiferromagnetic bilayer transistors",
    "authors": [
      "Fengrui Yao",
      "Menghan Liao",
      "Marco Gibertini",
      "Cheol-Yeon Cheon",
      "Xiaohanwen Lin",
      "Fan Wu",
      "Kenji Watanabe",
      "Takashi Taniguchi",
      "Ignacio Gutiérrez-Lezama & Alberto F. Morpurgo"
    ],
    "link": "https://www.nature.com/articles/s41565-025-01872-w"
  },
  {
    "id": 12,
    "year": 2025,
    "title": "Universal control of four singlet–triplet qubits",
    "authors": [
      "Xin Zhang",
      "Elizaveta Morozova",
      "Maximilian Rimbach-Russ",
      "Daniel Jirovec",
      "Tzu-Kan Hsiao",
      "Pablo Cova Fariña",
      "Chien-An Wang",
      "Stefan D. Oosterhout",
      "Amir Sammak",
      "Giordano Scappucci",
      "Menno Veldhorst & Lieven M. K. Vandersypen"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01817-9"
  },
  {
    "id": 13,
    "year": 2025,
    "title": "Exciton dressing by extreme nonlinear magnons in a layered semiconductor",
    "authors": [
      "Geoffrey M. Diederich",
      "Mai Nguyen",
      "John Cenker",
      "Jordan Fonseca",
      "Sinabu Pumulo",
      "Youn Jue Bae",
      "Daniel G. Chica",
      "Xavier Roy",
      "Xiaoyang Zhu",
      "Di Xiao",
      "Yafei Ren & Xiaodong Xu"
    ],
    "link": "https://www.nature.com/articles/s41565-025-01890-8"
  },
  {
    "id": 14,
    "year": 2025,
    "title": "Dipolar wavevector interference induces a polar skyrmion lattice in strained BiFeO3 films",
    "authors": [
      "W. R. Geng",
      "Y. L. Zhu",
      "M. X. Zhu",
      "Y. L. Tang",
      "H. J. Zhao",
      "C. H. Lei",
      "Y. J. Wang",
      "J. H. Wang",
      "R. J. Jiang",
      "S. Z. Liu",
      "X. Y. San",
      "Y. P. Feng",
      "M. J. Zou & X. L. Ma"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01845-5"
  },
  {
    "id": 15,
    "year": 2025,
    "title": "Exciton dressing by extreme nonlinear magnons in a layered semiconductor",
    "authors": [
      "Geoffrey M. Diederich",
      "Mai Nguyen",
      "John Cenker",
      "Jordan Fonseca",
      "Sinabu Pumulo",
      "Youn Jue Bae",
      "Daniel G. Chica",
      "Xavier Roy",
      "Xiaoyang Zhu",
      "Di Xiao",
      "Yafei Ren & Xiaodong Xu"
    ],
    "link": "https://www.nature.com/articles/s41565-025-01890-8"
  },
  {
    "id": 16,
    "year": 2025,
    "title": "Dipolar wavevector interference induces a polar skyrmion lattice in strained BiFeO3 films",
    "authors": [
      "W. R. Geng",
      "Y. L. Zhu",
      "M. X. Zhu",
      "Y. L. Tang",
      "H. J. Zhao",
      "C. H. Lei",
      "Y. J. Wang",
      "J. H. Wang",
      "R. J. Jiang",
      "S. Z. Liu",
      "X. Y. San",
      "Y. P. Feng",
      "M. J. Zou & X. L. Ma"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01845-5"
  },
  {
    "id": 17,
    "year": 2025,
    "title": "Chemical reactions with the Casson nanofluid flow by the bioconvective behavior of microorganisms over a spinning disc",
    "authors": [
      "Prabhakar Sagadevan",
      "Umadevi Raju",
      "Meganathan Murugesan",
      "Unai Fernandez-Gamiz",
      "Samad Noeiaghdam"
    ],
    "link": "https://www.cell.com/heliyon/fulltext/S2405-8440(24)17269-6"
  },
  {
    "id": 18,
    "year": 2025,
    "title": "Effects of the UNE 166.002 standards on the incremental and radical product innovation and organizational performance ",
    "authors": [
      "Juan Antonio Giménez Espín",
      "Micaela Martínez-Costa",
      "Daniel Jiménez Jiménez"
    ],
    "link": "https://www.emerald.com/ejim/article-abstract/28/3/948/1241171/Effects-of-the-UNE-166-002-standards-on-the?redirectedFrom=fulltext"
  },
  {
    "id": 19,
    "year": 2025,
    "title": "Nanotechnologies past, present and future applications in enhancing functionality of medical textiles: a review",
    "authors": [
      "Dehenenet Flatie TasswORCID Icon",
      "Bantamlak BirlieORCID Icon &Tekalign Mamaye"
    ],
    "link": "https://www.tandfonline.com/doi/abs/10.1080/00405000.2024.2356327"
  },
  {
    "id": 20,
    "year": 2025,
    "title": "Balancing Electronic Spin State via Atomically-Dispersed Heteronuclear Fe–Co Pairs for High-Performance Sodium–Sulfur Batteries",
    "authors": [
      "Canhuang LiJing YuDawei Yang*Hao LiYapeng ChengYuchuan RenXiaoyu BiJiachen MaRuirui ZhaoYingtang Zhou*Jian WangChen HuangJunshan LiIvan Pinto-HuguetJordi ArbiolHaining Zhang*Sen Xin*Andreu Cabot"
    ],
    "link": "https://pubs.acs.org/doi/abs/10.1021/jacs.4c15408"
  },
  {
    "id": 21,
    "year": 2025,
    "title": "Engineering a Spin-Orbit Bandgap in Graphene-Tellurium Heterostructures",
    "authors": [
      "Beatriz Muñiz Cano",
      "Fabián Calleja",
      "Daniela Pacilè",
      "Marc G. Cuxart",
      "Michele Pisarra",
      "Antonello Sindona",
      "Fernando Martín",
      "Elena Salagre",
      "Pilar Segovia",
      "Enrique G. Michel",
      "Amadeo. L. Vázquez de Parga",
      "Rodolfo Miranda",
      "Julio Camarero",
      "Manuela Garnica",
      "Miguel Angel Valbuena"
    ],
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adfm.202425154"
  },
  {
    "id": 22,
    "year": 2025,
    "title": "Engineering a Spin-Orbit Bandgap in Graphene-Tellurium Heterostructures",
    "authors": [
      "Beatriz Muñiz Cano",
      "Fabián Calleja",
      "Daniela Pacilè",
      "Marc G. Cuxart",
      "Michele Pisarra",
      "Antonello Sindona",
      "Fernando Martín",
      "Elena Salagre",
      "Pilar Segovia",
      "Enrique G. Michel",
      "Amadeo. L. Vázquez de Parga",
      "Rodolfo Miranda",
      "Julio Camarero",
      "Manuela Garnica",
      "Miguel Angel Valbuena"
    ],
    "link": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adfm.202425154"
  },
  {
    "id": 23,
    "year": 2025,
    "title": "Subvolt high-speed free-space modulator with electro-optic metasurface",
    "authors": [
      "Go Soma",
      "Koto Ariu",
      "Seidai Karakida",
      "Yusuke Tsubai & Takuo Tanemura"
    ],
    "link": "https://www.nature.com/articles/s41565-025-02000-4"
  },
  {
    "id": 24,
    "year": 2025,
    "title": "Quantum thermalization and Floquet engineering in a spin ensemble with a clock transition",
    "authors": [
      "Mi Lei",
      "Rikuto Fukumor",
      "Chun-Ju Wu",
      "Edwin Barnes",
      "Sophia E. Economou",
      "Joonhee Choi & Andrei Faraon"
    ],
    "link": "https://www.nature.com/articles/s41567-025-02943-4"
  },
  {
    "id": 25,
    "year": 2025,
    "title": "Numerical tackling for MHD Darcy-Forchheimer flow of water-based CNTs in a rotating frame with homogeneous-heterogeneous reactions: An artificial neural network approach",
    "authors": [
      "K. Senthilvadivu",
      "S. Eswaramoorthi",
      "K Lognathan",
      "H. Thameem Basha"
    ],
    "link": "https://www.tandfonline.com/doi/abs/10.1080/10407790.2024.2373382"
  },
  {
    "id": 26,
    "year": 2025,
    "title": "Interfacing with the Brain: How Nanotechnology Can Contribute",
    "authors": [
      "Abdullah A. A. Ahmed",
      "Nuria AlegretBethany AlmeidaRamón Alvarez-PueblaAnne M. AndrewsLaura BalleriniJuan J. Barrios-CapuchinoCharline BeckerRobert H. BlickShahin BonakdarIndranath ChakrabortyXiaodong ChenJinwoo CheonGerwin ChillaAndre Luiz Coelho ConceicaoJames DelehantyMartin DulleAlexander L. EfrosMatthias EppleMark FedykNeus FeliuMiao FengRafael Fernández-ChacónIrene Fernandez-CuestaNiels"
    ],
    "link": "https://pubs.acs.org/doi/full/10.1021/acsnano.4c10525"
  },
  {
    "id": 27,
    "year": 2025,
    "title": "The impact of Soret Dufour and radiation on the laminar flow of a rotating liquid past a porous plate via chemical reaction",
    "authors": [
      "M. Anil Kumar",
      "F. Mebarek-Oudina",
      "P. Mangathai",
      "N. A. Shah",
      "Ch. Vijayabhaskar",
      "N. Venkatesh",
      "and Y. Fouad"
    ],
    "link": "https://www.worldscientific.com/doi/abs/10.1142/S021798492450458X"
  },
  {
    "id": 28,
    "year": 2025,
    "title": "Spin excitations in nanographene-based antiferromagnetic spin-1/2 Heisenberg chains",
    "authors": [
      "Chenxiao Zhao",
      "Lin Yang",
      "João C. G. Henriques",
      "Mar Ferri-Cortés",
      "Gonçalo Catarina",
      "Carlo A. Pignedoli",
      "Ji Ma",
      "Xinliang Feng",
      "Pascal Ruffieux",
      "Joaquín Fernández-Rossier & Roman Fasel"
    ],
    "link": "https://www.nature.com/articles/s41563-025-02166-1"
  },
  {
    "id": 29,
    "year": 2025,
    "title": "Bose–Einstein condensation of a two-magnon bound state in a spin-1 triangular lattice",
    "authors": [
      "Jieming Sheng",
      "Jia-Wei Mei",
      "Le Wang",
      "Xiaoyu Xu",
      "Wenrui Jiang",
      "Lei Xu",
      "Han Ge",
      "Nan Zhao",
      "Tiantian Li",
      "Andrea Candini",
      "Bin Xi",
      "Jize Zhao",
      "Ying Fu",
      "Jiong Yang",
      "Yuanzhu Zhang",
      "Giorgio Biasiol",
      "Shanmin Wang",
      "Jinlong Zhu",
      "Ping Miao",
      "Xin Tong",
      "Dapeng Yu",
      "Richard Mole",
      "Yi Cui",
      "Long Ma",
      "…Zhentao Wang"
    ],
    "link": "https://www.nature.com/articles/s41563-024-02071-z"
  },
  {
    "id": 30,
    "year": 2025,
    "title": "Linearly programmable two-dimensional halide perovskite memristor arrays for neuromorphic computing",
    "authors": [
      "Seung Ju Kim",
      "In Hyuk Im",
      "Ji Hyun Baek",
      "Sungkyun Choi",
      "Sung Hyuk Park",
      "Da Eun Lee",
      "Jae Young Kim",
      "Soo Young Kim",
      "Nam-Gyu Park",
      "Donghwa Lee",
      "J. Joshua Yang & Ho Won Jang"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01790-3"
  },
  {
    "id": 31,
    "year": 2025,
    "title": "Strain-induced crumpling of graphene oxide lamellas to achieve fast and selective transport of H2 and CO2",
    "authors": [
      "Pengxiang Zhang",
      "Qian Wang",
      "Yixin Zhang",
      "Mo Lin",
      "Xin Zhou",
      "Ashish David",
      "Andrey Ustyuzhanin",
      "Musen Chen",
      "Mikhail I. Katsnelson",
      "Maxim Trubyanov",
      "Kostya S. Novoselov & Daria V. Andreeva"
    ],
    "link": "https://www.nature.com/articles/s41565-025-01971-8"
  },
  {
    "id": 32,
    "year": 2025,
    "title": "",
    "authors": [],
    "link": ""
  },

  {
    "id": 33,
    "year": 2024,
    "title": "Materials for Electronic, Magnetic, and Spintronic Technologies",
    "authors": [
      "Amodini Mishra",
      "Virat Dixit",
      "Divya Somvanshi",
      "Anu Singh",
      "Anju Mishra"
    ],
    "link": "https://link.springer.com/book/10.1007/978-3-031-64542-6"
  },
  {
    "id": 34,
    "year": 2024,
    "title": "Roadmap for unconventional computing with nanotechnology",
    "authors": [
      "Giovanni Finocchio",
      "Jean Anne C Incorvia",
      "Joseph S Friedman",
      "Qu Yang",
      "Anna Giordano",
      "Julie Grollier",
      "Hyunsoo Yang",
      "Florin Ciubotaru",
      "Andrii V Chumak",
      "Azad J Naeemi",
      "Sorin D Cotofana",
      "Riccardo Tomasello",
      "Christos Panagopoulos",
      "Mario Carpentieri",
      "Peng Lin",
      "Gang Pan",
      "J Joshua Yang",
      "Aida Todri-Sanial",
      "Gabriele Boschetto",
      "Kremena Makasheva",
      "Vinod K Sangwan",
      "Amit Ranjan Trivedi",
      "Mark C Hersam",
      "Kerem Y Camsari",
      "Peter L McMahon",
      "Supriyo Datta",
      "Belita Koiller",
      "Gabriel H Aguilar",
      "Guilherme P Temporão",
      "Davi R Rodrigues",
      "Satoshi Sunada",
      "Karin Everschor-Sitte",
      "Kosuke Tatsumura",
      "Hayato Goto",
      "Vito Puliafito",
      "Johan Åkerman",
      "Hiroki Takesue",
      "Massimiliano Di Ventra",
      "Yuriy V Pershin",
      "Saibal Mukhopadhyay",
      "Kaushik Roy",
      "I- Ting Wang",
      "Wang Kang",
      "Yao Zhu",
      "Brajesh Kumar Kaushik",
      "Jennifer Hasler",
      "Samiran Ganguly",
      "Avik W Ghosh",
      "William Levy",
      "Vwani Roychowdhury and Supriyo Bandyopadhyay"
    ],
    "link": "https://iopscience.iop.org/article/10.1088/2399-1984/ad299a/meta"
  },
  {
    "id": 35,
    "year": 2024,
    "title": "Multidiscipline Modeling in Materials and Structures",
    "authors": [
      "Neha Vijay",
      "Faisal Z Duraihem",
      "Renu Jindal"
    ],
    "link": "https://www.emerald.com/mmms/article-abstract/20/5/784/1221461/Flow-analysis-of-water-conveying-nanomaterials?redirectedFrom=fulltext"
  },
  {
    "id": 36,
    "year": 2024,
    "title": "Dynamics of non-Newtonian methanol conveying aluminium alloy over a rotating disc: consideration of variable nanoparticle radius and inter-particle spacing",
    "authors": [
      "E Ragupathi",
      "D Prakash",
      "M Muthamilselvan",
      "Qasem M AI-Mdallal"
    ],
    "link": "https://iopscience.iop.org/article/10.1088/1361-6528/ad3c46/meta"
  },
  {
    "id": 37,
    "year": 2024,
    "title": "Regulation of quantum spin conversions in a single molecular radical",
    "authors": [
      "Caiyao Yang",
      "Zhongxin Chen",
      "Cuiju Yu",
      "Jiawen Cao",
      "Guojun Ke",
      "Weiya Zhu",
      "Weixuan Liang",
      "Jiaxing Huang",
      "Wanqing Cai",
      "Chinmoy Saha",
      "Md Abdus Sabuj",
      "Neeraj Rai",
      "Xingxing Li",
      "Jinlong Yang",
      "Yuan Li",
      "Fei Huang & Xuefeng Guo"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01632-2"
  },
  {
    "id": 38,
    "year": 2024,
    "title": "Electrospun nanofibrous membranes with functionalized 2D nanofillers for efficient micropollutant removal from water",
    "authors": [
      "Bhavesh Borban",
      "Diksha Yadav",
      "Moucham Borpatra Gohain",
      "Sachin Karki",
      "Ashmita Mukherjee",
      "Paulomi Ghosh e",
      "Pravin G. Ingole a c"
    ],
    "link": "https://www.sciencedirect.com/science/article/abs/pii/S0011916424007288"
  },
  {
    "id": 39,
    "year": 2024,
    "title": "Multifunctional electrospun membranes incorporated with metal oxide nanoparticles, cellulose acetate, and polyvinylpyrrolidone for wastewater treatment: Oil/water separation, dye adsorption, and dye degradation",
    "authors": [
      "Chaithra K P",
      "Arun Varghese",
      "Vinod T. P.",
      "Sunaja Devi K. R."
    ],
    "link": "https://www.sciencedirect.com/science/article/abs/pii/S1385894724075405"
  },
  {
    "id": 40,
    "year": 2024,
    "title": "Spin coating epitaxial heterodimensional tin perovskites for light-emitting diodes",
    "authors": [
      "Hao Min",
      "Nana Wang",
      "Nana Chen",
      "Yunfang Tong",
      "Yujiao Wang",
      "Jiaqi Wang",
      "Jinglong Liu",
      "Saixue Wang",
      "Xiao Wu",
      "Pinghui Yang",
      "Haokun Shi",
      "Chunxue Zhuo",
      "Qi Chen",
      "Jingwei Li",
      "Daliang Zhang",
      "Xinhui Lu",
      "Chao Zhu",
      "Qiming Peng",
      "Lin Zhu",
      "Jin Chang",
      "Wei Huang & Jianpu Wang"
    ],
    "link": "https://www.nature.com/articles/s41565-023-01588-9"
  },
  {
    "id": 41,
    "year": 2024,
    "title": "High-fidelity initialization and control of electron and nuclear spins in a four-qubit register",
    "authors": [
      "J. Reiner",
      "Y. Chung",
      "S. H. Misha",
      "C. Lehner",
      "C. Moehle",
      "D. Poulos",
      "S. Monir",
      "K. J. Charde",
      "P. Macha",
      "L. Kranz",
      "I. Thorvaldson",
      "B. Thorgrimsson",
      "D. Keith",
      "Y. L. Hsueh",
      "R. Rahman",
      "S. K. Gorman",
      "J. G. Keizer & M. Y. Simmons"
    ],
    "link": "https://www.nature.com/articles/s41565-023-01596-9"
  },
  {
    "id": 41,
    "year": 2024,
    "title": "A quantum sensor for atomic-scale electric and magnetic fields",
    "authors": [
      "Taner Esat",
      "Dmitriy Borodin",
      "Jeongmin Oh",
      "Andreas J. Heinrich",
      "F. Stefan Tautz",
      "Yujeong Bae & Ruslan Temirov"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01724-z"
  },
  {
    "id": 42,
    "year": 2024,
    "title": "Tunable topological phases in nanographene-based spin-1/2 alternating-exchange Heisenberg chains",
    "authors": [
      "Chenxiao Zhao",
      "Gonçalo Catarina",
      "Jin-Jiang Zhang",
      "João C. G. Henriques",
      "Lin Yang",
      "Ji Ma",
      "Xinliang Feng",
      "Oliver Gröning",
      "Pascal Ruffieux",
      "Joaquín Fernández-Rossier & Roman Fasel"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01805-z"
  },
  {
    "id": 43,
    "year": 2024,
    "title": "Third-order exceptional line in a nitrogen-vacancy spin system",
    "authors": [
      "Yang Wu",
      "Yunhan Wang",
      "Xiangyu Ye",
      "Wenquan Liu",
      "Zhibo Niu",
      "Chang-Kui Duan",
      "Ya Wang",
      "Xing Rong & Jiangfeng DuRuffieux",
      "Joaquín Fernández-Rossier & Roman Fasel"
    ],
    "link": "https://www.nature.com/articles/s41565-023-01583-0"
  },
  {
    "id": 44,
    "year": 2024,
    "title": "Enhanced Oxygen Evolution and Zinc-Air Battery Performance via Electronic Spin Modulation in Heterostructured Catalysts",
    "authors": [
      "Linlin Yang",
      "Ren He",
      "Marc Botifoll",
      "Yongcai Zhang",
      "Yang Ding",
      "Chong Di",
      "Chuansheng He",
      "Ying Xu",
      "Lluís Balcells",
      "Jordi Arbiol",
      "Yingtang Zhou",
      "Andreu Cabot"
    ],
    "link": "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202400572"
  },
  {
    "id": 45,
    "year": 2024,
    "title": "Seed Quality Enhancement Through Analyte-Infused Electrospun Microcapsules in Maize",
    "authors": [
      "Kethineni Udaya Bhaskar",
      "Kudekallu Vasudeva Sripathy",
      "Samudrala Prashant Jeevan Kumar",
      "Channanamchery Radhika",
      "Keshava Bhojaraja Naik & Sanjay Kumar"
    ],
    "link": "https://link.springer.com/article/10.1007/s00344-024-11244-8"
  },
  {
    "id": 46,
    "year": 2024,
    "title": "Local control of polarization and geometric phase in thermal metasurfaces",
    "authors": [
      "J. Ryan Nolen",
      "Adam C. Overvig",
      "Michelle Michele Cotrufo & Andrea Alù Nature Nanotechnology volume"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01763-6"
  },
  {
    "id": 47,
    "year": 2024,
    "title": "Construction of topological quantum magnets from atomic spins on surfaces",
    "authors": [
      "Hao Wang",
      "Peng Fan",
      "Jing Chen",
      "Lili Jiang",
      "Hong-Jun Gao",
      "Jose L. Lado & Kai Yang"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01775-2"
  },
  {
    "id": 48,
    "year": 2024,
    "title": "Toroidic phase transitions in a direct-kagome artificial spin ice",
    "authors": [
      "Wen-Cheng Yue",
      "Zixiong Yuan",
      "Peiyuan Huang",
      "Yizhe Sun",
      "Tan Gao",
      "Yang-Yang Lyu",
      "Xuecou Tu",
      "Sining Dong",
      "Liang He",
      "Ying Dong",
      "Xun Cao",
      "Lin Kang",
      "Huabing Wang"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01666-6"
  },
  {
    "id": 49,
    "year": 2024,
    "title": "Giant spin Hall effect in AB-stacked MoTe2/WSe2 bilayers",
    "authors": [
      "Zui Tao",
      "Bowen Shen",
      "Wenjin Zhao",
      "Nai Chao Hu",
      "Tingxin Li",
      "Shengwei Jiang",
      "Lizhong Li",
      "Kenji Watanabe",
      "Takashi Taniguchi",
      "Allan H. MacDonald",
      "Jie Shan & Kin Fai Mak"
    ],
    "link": "https://www.nature.com/articles/s41565-023-01492-2"
  },
  {
    "id": 50,
    "year": 2024,
    "title": "Deterministic switching of perpendicular magnetization by out-of-plane anti-damping magnon torques",
    "authors": [
      "Fei Wang",
      "Guoyi Shi",
      "Dongsheng Yang",
      "Hui Ru Tan",
      "Chenhui Zhang",
      "Jiayu Lei",
      "Yuchen Pu",
      "Shuhan Yang",
      "Anjan Soumyanarayanan",
      "Mehrdad Elyasi & Hyunsoo Yang"
    ],
    "link": "https://www.nature.com/articles/s41565-024-01741-y"
  },
  {
    "id": 51,
    "year": 2024,
    "title": "Shared control of a 16 semiconductor quantum dot crossbar array",
    "authors": [
      "Francesco Borsoi",
      "Nico W. Hendrickx",
      "Valentin John",
      "Marcel Meyer",
      "Sayr Motz",
      "Floor van",
      "Riggelen",
      "Amir Sammak",
      "Sander L. de Snoo",
      "Giordano Scappucci & Menno Veldhorst"
    ],
    "link": "https://www.nature.com/articles/s41565-023-01491-3"
  },
  {
    "id": 52,
    "year": 2024,
    "title": "Spontaneous broken-symmetry insulator and metals in tetralayer rhombohedral graphene",
    "authors": [
      "Kai Liu",
      "Jian Zheng",
      "Yating Sha",
      "Bosai Lyu",
      "Fengping Li",
      "Youngju Park",
      "Yulu Ren",
      "Kenji Watanabe",
      "Takashi Taniguchi",
      "Jinfeng Jia",
      "Weidong Luo",
      "Zhiwen Shi",
      "Jeil Jung & Guorui Chen"
    ],
    "link": "https://www.nature.com/articles/s41565-023-01558-1"
  },
  {
    "id": 53,
    "year": 2024,
    "title": "Reversible optical data storage below the diffraction limit",
    "authors": [
      "Richard Monge",
      "Tom Delord & Carlos A. Meriles"
    ],
    "link": "https://www.nature.com/articles/s41565-023-01542-9"
  },
  
  {
    id: 54,
    year: 2023,
    title: "Structurally stable polyvinyl alcohol/sodium alginate-based optimally designed electrospun mats as mechanistically robust controlled-urea-release systems",
    authors: [
      "Krishna Priyadarshini Das",
      "Deepika Sharma",
      "Bhabani K. Satapathy"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0926669022017034"
  },
  {
    id: 55,
    year: 2023,
    title: "Facile synthesis of electrospun antibacterial bioactive glass based micronanofibre (ABGmnf) for exalted wound healing: In vitro and in vivo studies",
    authors: [
      "Payal Roy",
      "Rupam Saha",
      "Suman Saha",
      "Debolina Dattaray",
      "T.K. Mandal",
      "Noha ElShazly",
      "Mona K. Marei",
      "Jui Chakraborty"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0254058423005825"
  },
  {
    id: 56,
    year: 2023,
    title: "A combinatorial approach to the elastic response of electrospun mats: Architectural framework and single fiber properties",
    authors: [
      "Danvendra Singh",
      "Apurv Sibal",
      "Deepika Sharma",
      "Sumit Sharma",
      "Dániel Sebok",
      "Bhabani K. Satapathy",
      "Parikshit Goswami",
      "Akos KukoveczAmit",
      "Rawal"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167663622002484"
  },
  {
    id: 57,
    year: 2023,
    title: "Thermally crosslinked electrospun nanofibrous mat from chrome-tanned solid wastes for cationic dye adsorption in wastewater treatment",
    authors: [
      "Abrar A. Sitab",
      "Fatema Tujjohra",
      "Taslim Ur Rashid",
      "Mohammed Mizanur",
      "Rahman"
      
    ],
    link: "https://www.sciencedirect.com/science/article/pii/S2666790823000265"
  },
  {
    id: 58,
    year: 2023,
    title: "Structurally stable and surface-textured polylactic acid/copolymer/poly (?-caprolactone) blend-based electrospun constructs with tunable hydroxyapatite responsiveness",
    authors: [
      "Deepika Sharma",
      "Ahana Banerjee",
      "Jayanta Bhattacharyya",
      "Bhabani K. Satapathy"
      
      
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0927776522006531"
  },
  {
    id: 59,
    year: 2023,
    title: "Immobilization and Release of Platelet-Rich Plasma from Modified Nanofibers Studied by Advanced X-ray Photoelectron Spectroscopy Analyses",
    authors: [
      "Anton Manakhov",
      "Elizaveta Permyakova",
      "Anastasiya O. Solovieva",
      "Natalya A SitnikovaPh.",
      "V.Kiryukhantsev-Korneev",
      "Anton Konopatsky",
      "Dmitry Shtansky"
      
      
      
    ],
    link: "https://www.researchgate.net/publication/369235399_Immobilization_and_Release_of_Platelet-Rich_Plasma_from_Modified_Nanofibers_Studied_by_Advanced_X-ray_Photoelectron_Spectroscopy_Analyses"
  },
  {
    id: 60,
    year: 2023,
    title: "PRP of T2DM Patient Immobilized on PCL Nanofibers Stimulate Endothelial Cells Proliferation",
    authors: [
      "Anastasiya O. Solovieva",
      "Natalya A Sitnikova",
      "Vadim V Nimaev",
      "Elena A Korolev",
      "Anton M Manakhov"
    ],
    link: "https://www.mdpi.com/1422-0067/24/9/8262"
  },
  {
    id: 61,
    year: 2023,
    title: "Evaluation of cashew gum-polyvinyl alcohol (CG-PVA) electrospun nanofiber mat for scarless wound healing in a murine model",
    authors: [
      "Aditya Dev Rajora",
      "Trishna Bal"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0141813023013119"
  },
  {
    id: 62,
    year: 2022,
    title: "Investigation of the performance of dual-layered omniphobic electrospun nanofibrous membranes for direct contact membrane distillation",
    authors: [
      "Vivekanandan",
      "Sangeetha",
      "Noel Jacob Kaleekkal"
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2213343722015342"
  },
  {
    id: 63,
    year: 2022,
    title: "Fabrication and evaluation of multifunctional agarose based electrospun scaffolds for cutaneous wound repairs",
    authors: [
      "Sachin Latiyan",
      "T. S. Sampath Kumar",
      "Mukesh Doble"
    ],
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/term.3308"
  },
  {
    id: 64,
    year: 2022,
    title: "Polycaprolactone assisted electrospinning of honey/betel with chitosan for tissue engineering",
    authors: [
      "Jaideep Adhikari",
      "Manojit Ghosh",
      "Pratik Das",
      "Piyali Basak",
      "Prosenjit Saha",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785322014109"
  },
  {
    id: 65,
    year: 2022,
    title: "Intermittent scavenging of storage lesion from stored red blood cells by electrospun nanofibrous sheets enhances their quality and shelf-life",
    authors: [
      "Subhashini Pandey",
      "Manohar Mahato",
      "Preethem Srinath",
      "Utkarsh Bhutani",
      "Tanu Jain Goap",
      "Priusha Ravipati",
      "Praveen Kumar Vemula",
    ],
    link: "https://www.nature.com/articles/s41467-022-35269-3"
  },
  {
    id: 66,
    year: 2022,
    title: "Electrospinning of poly(?-caprolactone) (PCL) and poly ethylene glycol (PEG) composite nanofiber membranes using methyl ethyl ketone (MEK) and N N’-dimethyl acetamide (DMAc) solvent mixture for anti-adhesion applications",
    authors: [
      "B. Sowmya",
      "P.K. Panda",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2352492822015598"
  },
  {
    id: 67,
    year: 2022,
    title: "Development of the Next-Generation Biomimetic Lower Extremity Bypass Graft for the Treatment of Peripheral Artery Disease",
    authors: [
      "Keiser",
      "Courtney K",
    ],
    link: "https://www.proquest.com/openview/e2a181c773a8e1bbeb8cf44abef14eec/1?pq-origsite=gscholar&cbl=18750&diss=y"
  },
  {
    id: 68,
    year: 2022,
    title: "Ibuprofen loaded electrospun polymeric nanofibers: A strategy to improve oral absorption",
    authors: [
      "Dibya Sundar Panda",
      "Nabil K Alruwaili",
      "Satyanarayan Pattnaik",
      "Kalpana Swain",
    ],
    link: "https://www.researchgate.net/publication/362187429_Ibuprofen_Loaded_Electrospun_Polymeric_Nanofibers_A_Strategy_to_Improve_Oral_Absorption"
  },
  {
    id: 69,
    year: 2022,
    title: "Designing suture-proof cell-attachable copolymer-mediated and curcumin- ?-cyclodextrin inclusion complex loaded aliphatic polyester-based electrospun antibacterial constructs",
    authors: [
      "Deepika Sharma",
      "Shaifali Dhingra",
      "Ahana Banerjee",
      "Sampa Saha",
      "Jayanta Bhattacharyya",
      "Bhabani K. Satapathy",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0141813022014179"
  },
  {
    id: 70,
    year: 2022,
    title: "P(VDF-TrFE)/ZnO nanocomposite synthesized by electrospinning: effect of ZnO nanofiller on physical, mechanical, thermal, rheological and piezoelectric properties",
    authors: [
      "Mukesh Kumar",
      "Poonam Kumari",
    ],
    link: "https://www.researchgate.net/publication/361021666_PVDF-TrFEZnO_nanocomposite_synthesized_by_electrospinning_effect_of_ZnO_nanofiller_on_physical_mechanical_thermal_rheological_and_piezoelectric_properties"
  },
  {
    id: 71,
    year: 2022,
    title: "Synthesis and Characterization of Novel Poly(Vinylidene Fluoride)-Melamine Electrospun Nanofibers: An Extensive Analysis on Mechanical and Thermal Behavior",
    authors: [
      "Priyanka Chahal",
      "Bavatharani Chokkiah",
      "Vishnu Sankar",
      "Sivasankarapillai",
      "Asha Raveendran",
      "Masoom Raza SiddiquiSaikh",
      "Mohammad WabaidurSoo",
      "Chool LeeRagupathy",
      "Dhanusuraman",
    ],
    link: "https://link.springer.com/article/10.1007/s11665-022-07067-x"
  },
  {
    id: 72,
    year: 2022,
    title: "Thin-film nanofibers for treatment of age-related macular degeneration",
    authors: [
      "Atul Garkal",
      "Priyanka Bangar",
      "Tejal Mehta",
    ],
    link: "https://www.sciencedirect.com/science/article/pii/S2352952022000603"
  },
  {
    id: 73,
    year: 2022,
    title: "Easy fabrication of a novel electro-spun PVDF-g-C3N4-Pd nanocomposite material as improved anode electrocatalyst for direct alcohol fuel cell",
    authors: [
      "Bavatharani Chokkiah",
      "Saikh Mohammad Wabaidur",
      "Masoom Raza Siddiqui",
      "Md Ataul Islam",
      "Ragupathy Dhanusuraman",
      "Vinoth Kumar Ponnusamy d",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S001623612201345X"
  },
  {
    id: 74,
    year: 2022,
    title: "Coaxial Electrospun Nanofibrous Membranes for Enhanced Water Recovery by Direct Contact Membrane Distillation",
    authors: [
      "V Sangeetha",
      "NJ Kaleekkal",
      "S Vigneswaran",
    ],
    link: "https://www.mdpi.com/2073-4360/14/24/5350"
  },
  {
    id: 75,
    year: 2022,
    title: "Utilizing Strain-Engineered Stable Halide Perovskite for Interfacial Interaction with Molecular Dipoles To Enhance Ferroelectric Switching and Piezoresponse in Polymer Composite Nanofibers",
    authors: [
      "Zinnia Mallick",
      "Varun Gupta",
      "Ayushi Jain",
      "Chandan Bera",
      "Dipankar Mandal",
    ],
    link: "https://pubs.acs.org/doi/abs/10.1021/acs.langmuir.2c02556"
  },
  {
    id: 76,
    year: 2022,
    title: "Copper and cobalt doped bioactive glass-fish dermal collagen electrospun mat triggers key events of diabetic wound healing in full-thickness skin defect model",
    authors: [
      "Sonali Jana",
      "Pradyot Datta",
      "Himanka Das",
      "Satish Jaiswal",
      "Prabal Ranjan Ghosh",
      "Debrupa Lahiri",
      "Biswanath Kundu",
      "Samit Kumar Nandi",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1751616122003204"
  },
  {
    id: 77,
    year: 2022,
    title: "Polycaprolactone assisted electrospinning of honey/betel with chitosan for tissue engineering",
    authors: [
      "Jaideep Adhikari",
      "Manojit Ghosh",
      "Pratik Das",
      "Piyali Basak",
      "Prosenjit Saha",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785322014109"
  },
  {
    id: 78,
    year: 2022,
    title: "Synthesis and characterizations of sugar-glass nanoparticles mediated protein delivery system for tissue engineering application",
    authors: [
      "Aniruddha PalRathina VelSk",
      "Hasanur",
      "RahamanSomoshree",
      "SenguptaSubhadip Bodhak",
    ],
    link: "https://iopscience.iop.org/article/10.1088/2399-1984/ac7832/meta"
  },
  {
    id: 79,
    year: 2022,
    title: "Hesperetin-loaded polymeric nanofibers: assessment of bioavailability and neuroprotective effect",
    authors: [
      "Yogesh Chand Yadav",
      "Satyanarayan Pattnaik",
    ],
    link: "https://www.tandfonline.com/doi/abs/10.1080/03639045.2023.2201625"
  },
  {
    id: 80,
    year: 2022,
    title: "An integrated Nanofiltration-Membrane Distillation (NF-MD) process for the treatment of emulsified wastewater",
    authors: [
      "Juliana John",
      "Jenny Nambikattu",
      "Noel Jacob Kaleekkal",
    ],
    link: "https://www.tandfonline.com/doi/abs/10.1080/01496395.2022.2131578"
  },
  {
    id: 81,
    year: 2022,
    title: "Engineering Vascularizing Electrospun Dermal Grafts by Integrating Fish Collagen and Ion-Doped Bioactive Glass",
    authors: [
      "Sonali Jana",
      "Pradyot Datta",
      "Himanka Das",
      "Prabal Ranjan Ghosh",
      "Biswanath Kundu",
      "Samit Kumar Nandi",
    ],
    link: "https://pubs.acs.org/doi/abs/10.1021/acsbiomaterials.1c01098"
  },
  {
    id: 82,
    year: 2021,
    title: "BiVO4 nanofiber-based field-effect transistors for detection of epinephrine/adrenaline hormones",
    authors: [
      "Sushmitha Veeralingam",
      "Sushmee Badhulika",
    ],
    link: "/"
  },
  {
    id: 83,
    year: 2021,
    title: "Metal oxide heterostructure decorated carbon nanofiber as a novel redox catalyst for high performance Lithium-Sulfur batteries",
    authors: [
      "Avinash Raulo",
      "Sajan SinghAmit Gupta",
      "Rajiv Srivastava",
      "Bhanu Nandan",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0169433221021115"
  },
  {
    id: 84,
    year: 2021,
    title: "Excellent electrochemical performance of Lithium-sulfur batteries via self-standing cathode from interwoven ?-Fe2O3 integrated carbon nanofiber networks",
    authors: [
      "Avinash Raulo",
      "Sajan Singh",
      "Amit Gupta",
      "Rajiv Srivastava",
      "Bhanu Nandan",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1572665720310584"
  },
  {
    id: 85,
    year: 2021,
    title: "Nanotechnology-Assisted, Single-Chromophore-Based White-Light-Emitting Organic Materials with Bioimaging Properties",
    authors: [
      "Arif Hassan Dar",
      "Vijayendran Gowri",
      "Rakesh Kumar Mishra",
      "Rehan Khan",
      "Govindasamy Jayamurugan",
    ],
    link: "https://pubs.acs.org/doi/abs/10.1021/acs.langmuir.1c02797"
  },
  {
    id: 86,
    year: 2021,
    title: "An efficient amperometric sensor for chloride ion detection through electroactive e-spun PVA-PANi-g-C3N4 nanofiber",
    authors: [
      "Bavatharani Chokkiah",
      "Muthusankar Eswaran",
      "Saikh Mohammad Wabaidur",
      "Zeid A Alothman",
      "Soo Chool LeeRagupathy",
      "Dhanusuraman",
    ],
    link: "https://www.researchgate.net/publication/356429573_An_efficient_amperometric_sensor_for_chloride_ion_detection_through_electroactive_e-spun_PVA-PANi-g-C3N4_nanofiber"
  },
  {
    id: 87,
    year: 2021,
    title: "An efficient amperometric sensor for chloride ion detection through electroactive e-spun PVA-PANi-g-C3N4 nanofiber",
    authors: [
      "Bavatharani Chokkiah",
      "Muthusankar Eswaran",
      "Saikh Mohammad Wabaidur",
      "Zeid A Alothman",
      "Soo Chool LeeRagupathy",
      "Dhanusuraman",
    ],
    link: "https://www.researchgate.net/publication/356429573_An_efficient_amperometric_sensor_for_chloride_ion_detection_through_electroactive_e-spun_PVA-PANi-g-C3N4_nanofiber"
  },
  {
    id: 88,
    year: 2021,
    title: "Understanding release kinetics and collapse proof suture retention response of curcumin loaded electrospun mats based on aliphatic polyesters and their blends",
    authors: [
      "Deepika Sharma",
      "Bhabani K. Satapathy",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1751616121002393"
  },
  {
    id: 89,
    year: 2021,
    title: "Fabrication and characterization of electrospun psyllium husk-based nanofibers for tissue regeneration",
    authors: [
      "Suruchi PoddarPiyush Sunil",
      "Agarwal",
      "Ajay Kumar Sahi",
      "Neelima Varshney",
      "Kiran Yellappa Vajanthri",
      "Sanjeev Kumar Mahto",
    ],
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/app.50569"
  },
  {
    id: 90,
    year: 2021,
    title: "Physicomechanical performance and encapsulation efficiency of ?-cyclodextrin loaded functional electrospun mats based on aliphatic polyesters and their blends",
    authors: [
      "Deepika Sharma",
      "Bhabani K. Satapathy",
    ],
    link: "https://www.tandfonline.com/doi/abs/10.1080/09205063.2021.1925393"
  },
  {
    id: 91,
    year: 2021,
    title: "Electrospun chitosan/polycaprolactone-hyaluronic acid bilayered scaffold for potential wound healing applications",
    authors: [
      "Amit Chanda",
      "Jaideep Adhikari",
      "Aritri Ghosh",
      "Sougata Roy Chowdhury",
      "Sabu Thomas",
      "Pallab Datta",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0141813018304008"
  },
  {
    id: 92,
    year: 2021,
    title: "Bone tissue engineering construct fabricated using a cell electrospinning technique with polyglutamic acid biopolymer",
    authors: [
      "Pratyusa DasAnkita Hore",
      "Aritri Ghosh",
      "Pallab Datta",
    ],
    link: "https://link.springer.com/article/10.1007/s10965-021-02612-z"
  },
  {
    id: 93,
    year: 2020,
    title: "Fabrication and invitro evaluation of electrospun gum ghatti-polyvinyl alcohol polymeric blend green nanofibre mat (GG-PVA NFM) as a novel material for polymeric scaffolds in wound healing",
    authors: [
      "Pramit Dey",
      "Trishna Bal",
      "Roop Narayan Gupta",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0142941820320559"
  },
  {
    id: 94,
    year: 2020,
    title: "A high energy density and high rate capability flexible supercapacitor based on electro-spun highly porous SnO2@carbon nanofibers",
    authors: [
      "Rasmita Barik",
      "Vaishali Tanwar",
      "Rajat Kumar",
      "Pravin P. Ingole",
    ],
    link: "https://pubs.rsc.org/en/content/articlelanding/2020/TA/D0TA04355A"
  },
  {
    id: 95,
    year: 2020,
    title: "Flexible lead-free PVDF/SM-KNN electrospun nanocomposite based piezoelectric materials: Significant enhancement of energy harvesting efficiency of the nanogenerator",
    authors: [
      "Satyaranjan Bairagi",
      "S. Wazed Ali",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0360544220304928"
  },
  {
    id: 96,
    year: 2020,
    title: "Polymer-Derived Electrospun Co3O4@C Porous Nanofiber Network for Flexible, High-Performance, and Stable Supercapacitors",
    authors: [
      "Rasmita Barik",
      "Avinash Raulo",
      "Shwetambara Jha",
      "Bhanu Nandan",
      "Pravin P. Ingole",
    ],
    link: "https://pubs.acs.org/doi/abs/10.1021/acsaem.0c01955"
  },
  {
    id: 97,
    year: 2020,
    title: "On 3D Printing of Architected PLA-PLA Nanofiber-Based Biomedical Scaffolds",
    authors: [
      "Ranvijay Kumar",
      "Rupinder Singh",
    ],
    link: "https://link.springer.com/article/10.1007/s40009-023-01261-8"
  },
  {
    id: 98,
    year: 2020,
    title: "Honey-incorporated nanofibre reduces replicative senescence of umbilical cord-derived mesenchymal stem cells",
    authors: [
      "Ankita Das",
      "Pallab Datta",
      "Amit Roy Chowdhury",
      "Ananya Barui",
    ],
    link: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/iet-nbt.2019.0288"
  },
  {
    id: 99,
    year: 2019,
    title: "Dielectric and conductivity investigation of polycarbonate-copper phthalocyanine electrospun nonwoven fibres for electrical and electronic application",
    authors: [
      "Ankit Malik",
      "RaviPrakash Magisetty",
      "Viresh KumarAnuj Shukla",
      "Balasubramanian",
      "Kandasubramanian",
    ],
    link: "https://www.researchgate.net/publication/333693492_Dielectric_and_conductivity_investigation_of_polycarbonate-copper_phthalocyanine_electrospun_nonwoven_fibres_for_electrical_and_electronic_application"
  },
  {
    id: 100,
    year: 2019,
    title: "Bio-inspired superhydrophobic and superoleophilic nanofibrous membranes for non-aqueous solvent and oil separation from water",
    authors: [
      "Seyed Mahdi Seyed",
      "Shahabadi",
      "Jonathan A. Brant",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1383586618321361"
  },
  {
    id: 101,
    year: 2019,
    title: "Mechanical Properties of Aliphatic Polyester-Based Structurally Engineered Composite Patches",
    authors: [
      "Deepika Sharma",
      "Bhabani K. Satapathy",
    ],
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/masy.201800153"
  },
  {
    id: 102,
    year: 2019,
    title: "Morphological and Electrical Characterization ofPolyacrylonitrile Nanofibers Synthesized UsingElectrospinning Method for Electrical Application",
    authors: [
      "Divyanka Sontakke",
      "Arpit Thakre",
      "D. K Shinde",
      "Sujata Parmeshwaran",
    ],
    link: "https://www.researchgate.net/publication/333867675_Morphological-and-Electrical-Characterization-of-Polyacrylonitrile-Nanofibers-Synthesized-Using-Electrospinning-Method-for-Electrical-Application"
  },
  {
    id: 103,
    year: 2019,
    title: "Injectable PLCL/gelatin core-shell nanofibers support noninvasive 3D delivery of stem cells",
    authors: [
      "Jordi Amagat Molas",
      "Menglin Chen",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0378517319306106"
  },
  {
    id: 104,
    year: 2019,
    title: "Selective Cell Adhesion on Peptide–Polymer Electrospun Fiber Mats",
    authors: [
      "Gagandeep Kaur",
      "Savita Kumari",
      "Piyali Saha",
      "Rafat Ali",
      "Sandip Patil",
      "Subramaniam Ganesh",
      "Sandeep Verma",
    ],
    link: "https://pubs.acs.org/doi/full/10.1021/acsomega.8b03494"
  },
  {
    id: 105,
    year: 2019,
    title: "Adhesion strength and viscoelastic properties of polydimethylsiloxane (PDMS) based elastomeric nanocomposites with embedded electrospun nanofibers",
    authors: [
      "Tushar D. Deshpande",
      "Yogesh R. G. Singh",
      "Sandip Patil",
      "Yogesh M. Joshi",
      "Ashutosh Sharma",
    ],
    link: "https://pubs.rsc.org/en/content/articlelanding/2019/sm/c9sm00533a/unauth"
  },
  {
    id: 106,
    year: 2019,
    title: "Fabrication of Electrospun Polycaprolactone/GelatinComposite Nanofibrous Scaffolds with Cellular Responses",
    authors: [
      "Jaianand Kannaiyan",
      "Saurabh Khare",
      "Suriya Narayanan",
      "Firdosh Mahuvawalla",
    ],
    link: "https://www.researchgate.net/publication/338394136_Fabrication_of_Electrospun_PolycaprolactoneGelatin_Composite_Nanofibrous_Scaffolds_with_Cellular_Responses"
  },
  {
    id: 107,
    year: 2011,
    title: "Cellular interactions with biodegradable polyurethanes formulated from L-tyrosine",
    authors: [
      "Parth N ShahYang H Yun",
    ],
    link: "https://journals.sagepub.com/doi/10.1177/0885328211432325?icid=int.sj-abstract.similar-articles.1"
  },
  {
    id: 108,
    year: 2010,
    title: "Biomimetic algal polysaccharide coated 3D nanofibrous scaffolds promote skin extracellular matrix formation",
    authors: [
      "Prerana Singh",
      "Auhin Kumar Maparu",
      "Savita Shah",
      "Beena RaiSri Sivakumar",
    ],
    link: "https://www.sciencedirect.com/science/article/pii/S0928493120334986"
  },
  {
    id: 109,
    year: 2010,
    title: "Microfibers of fish waste-derived collagen and ion-doped bioactive glass in stimulating the healing sequences in full-thickness cutaneous burn injury",
    authors: [
      "Pallabi Kayal",
      "Sonali Jana",
      "Pradyot Datta",
      "Himanka Das",
      "Biswanath Kundu",
      "Samit Kumar Nandi",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1773224723002812"
  },
  {
    id: 110,
    year: 2010,
    title: "Enhanced carrier separation assisted high-performance piezo-phototronic self-powered photodetector based on core-shell ZnSnO3 @In2O3 heterojunction",
    authors: [
      "Sushmitha Veeralingam",
      "Sushmee Badhulika",
    ],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2211285522004323"
  },
  


  // Add more publications as needed
];

export function PublicationTable() {
  return (
    <div className="overflow-x-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-w-full"
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Authors</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {PUBLICATIONS.map((pub, index) => (
              <motion.tr
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pub.year}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{pub.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {pub.authors.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}