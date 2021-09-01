const DATA = [
  {
    name: "Արման Հովհաննեսի Ղուլյան",
    dateOfDeath: "զոհվել է հոկտեմբերի 28-ին",
    description:
      "2002 թ-ին ծնված Ղուլյանի աճյունը որոնողական աշխատանքների ժամանակ Սղնախից հայտնաբերել են 2021 թ-ի մարտի 29-ին։ Նա Լոռու մարզի Ալավերդի քաղաքից է։ Նա որպես ժամկետային ծառայել է Ասկերանի զորամասում։",
    link: "",
    photo: "assets/img/Արման Ղուլյան ա.jpg", 
  },
  {
    name: "Հակոբջանյան Սպարտակ Նիկոլայի",
    dateOfDeath: "զոհվել է հոկտեմբերի 28-ին",
    description:
      "Սպարտակ Հակոբջանյանը զոհվել է հոկտեմբերի 28-ին Սղնախի պաշտպանական մարտի ժամանակ։ Մինչև զոհվելը, վիրավորվել է։ Նրա մարմինը հայտնաբերվել է պատերազմի ավարտից հետո՝ նոյեմբերի 18-ին, որոնողական աշխատանքների արդյունքում։",
    link: "https://hetq.am/hy/article/133909",
    photo: "assets/img/ՍպարտակՀակոբջանյան.jpg",
  },
  {
    name: "Հայրիյան Համլետ Էդիկի",
    dateOfDeath: "զոհվել է հոկտեմբերի 28-ին",
    description:
      "Համլետ Հայրիյանը զոհվել է հոկտեմբերի 28-ին Սղնախի պաշտպանական մարտերի ժամանակ։ Մինչ զոհվելը, վիրավորվել է, որոշակի տարածություն հաղթահարել, բայց չի կարողացել դուրս գալ շրջափակումից։ Համլետի մարմինը հայտնաբերվել է նոյեմբերի 17-ին։",
    link: "https://hetq.am/hy/article/133600",
    photo: "assets/img/Համլետ Հայրիյան.jpg",
  },

  {
    name: "Սարգսյան Գառնիկ Ռուբենի",
    dateOfDeath: "զոհվել է հոկտեմբերի 28-ին",
    description:
      "Գառնիկ Սարգսյանը զոհվել է հոկտեմբերի 28-ին Սղնախի պաշտպանական մարտերի ժամանակ։ Մինչ զոհվելը նա վիրավորվել է, մնացել շրջափակման մեջ։ Գառնիկի մարմինը հայտնաբերել են պատերազմի ավարտից հետո՝ նոյեմբերի 19-ին, որոնողական աշխատանքների ժամանակ։",
    link: "https://hetq.am/hy/article/133763",
    photo: "assets/img/Գառնիկ Սարգսյան.jpg",

  },
  {
    name: "Լալայան Արմեն Սերգեյի",
    dateOfDeath: "զոհվել է հոկտեմբերի 29-ին",
    description:
      "Արմեն Լալայանը զոհվել է հոկտեմբերի 29-ին Սղնախ և Շոշ գյուղերի միջնամասում։ Արմեն Լալայանն այլ գյուղացիների հետ Սղնախի գրավումից հետո փորձել են դիրքավորվել Շոշ գյուղին հարող հատվածում։ Հենց այդ ժամանակ զոհվել է։",
    link: "https://hetq.am/hy/article/134371",
    photo: "assets/img/Արմեն Լալայան.jpg",
  },
  {
    name: "Առստամյան Վարուժան Սերգեյի",
    dateOfDeath: "վիրավորվել է հոկտեմբերի 29-ին, մահացել՝ հոկտեմբերի 31-ին",
    description:
      "Վարուժան Առստամյանն Արմեն Լալայանի հետ հոկտեմբերի 29-ին փորձել են դիրքավորվել Սղնախ և Շոշ գյուղերի միջնամասում։ Հակառակորդի ռմբակոծությունից վիրավորվել է և հոկտեմբերի 31-ին Ստեփանակերտից Երևան տեղափոխվելու ժամանակ, գիտակցության չգալով, մահացել է։",
    link: "https://hetq.am/hy/article/134475",
    photo: "assets/img/Վարուժան Ասռամյան.jpeg",
  },
  {
    name: "Վոլոդյա Կարապետի Աղաբեկյան",
    dateOfDeath: "զոհվել է հոկտեմբերի 28-ին ",
    description:
      "Վոլոդյա Աղաբեկյանը զոհվել է Սղնախ գյուղում հոկտեմբերի 28-ին։ 1938 թ.-ին ծնված Աղաբեկյանը գյուղը չի լքել։ Նրա մարմինը հայտնաբերել են պատերազմից հետո։",
    link: "",
    photo: "assets/img/Վոլոդյա Աղաբեկյան.jpg",
  },
  {
    name: "Գագիկ Պետրոսյան",
    dateOfDeath: "զոհվել է հոկտեմբերի 28-ին",
    description:
      "",
    link: "https://www.facebook.com/ArtsakhPolice/photos/a.601688323531049/1264199163946625/?type=3",
    photo: "assets/img/Գագիկ Պետրոսյան .jpeg",
  },
  {
    name: "Ղահրամանյան Գրիգոր Եղիշեյի",
    dateOfDeath: "վիրավորվել է հոկտեմբերի 29-ին, մահացել՝ նոյեմբերի 7-ին",
    description:
      "Գրիգոր Ղահրամանյանը հոկտեմբերի 29-ին ծանր վիրավորում է ստացել Սղնախ և Շոշ գյուղերի միջնամասում։ Նոյեմբերի 7-ին ստացած վիրավորումից մահացել է։ ",
    link: "",
    photo: "assets/img/Գրիգոր Ղահրամանյան.jpg",
  },
  {
    name: "Հարություն Յուրիի Աթաջյան",
    dateOfDeath: "զոհվել է հոկտեմբերի 29-ին",
    description:
      "Հարություն Աթաջյանը զոհվել է Սղնախի մատույցներում։ Մինչ զոհվելը նա փրկարարական աշխատանք էր կատարում։ 2009 թ-ից աշխատել է Արցախի Արտակարգ իրավիճակների ծառայությունում։ Հետմահու պարգևատրվել է «Արիություն» մեդալով:",
    link: "http://www.rs-nkr.am/content.php?contid=3290",
    photo: "assets/img/Հարություն Աթաջյան.jpg",
  }
];
