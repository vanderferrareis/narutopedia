let dados = [
    {
        titulo: "Obito Uchiha",
        descricao: "Obito Uchiha foi um membro do clã Uchiha e um dos principais antagonistas da série Naruto. Manipulado por Madara Uchiha e com seu coração endurecido após a perda de Rin, Obito assumiu a identidade de Tobi e se tornou um dos líderes da Akatsuki, planejando lançar o Tsukuyomi Infinito para criar um mundo ilusório de paz. No entanto, ele eventualmente encontra redenção durante a Quarta Grande Guerra Ninja.",
        link: "https://naruto.fandom.com/pt-br/wiki/Obito_Uchiha",
        dataNascimento: "10 de fevereiro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/obitouchiha.png"
    },
    {
        titulo: "Uchiha Madara",
        descricao: "Madara Uchiha é um dos fundadores de Konohagakure e líder do clã Uchiha. Ele desempenhou um papel importante na criação da Vila Oculta da Folha ao lado de Hashirama Senju, mas acabou traindo a vila devido a diferenças filosóficas. Madara foi um dos shinobi mais poderosos da história e seu retorno durante a Quarta Grande Guerra Ninja causou caos no mundo ninja.",
        link: "https://naruto.fandom.com/pt-br/wiki/Madara_Uchiha",
        dataNascimento: "24 de dezembro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/uchihamadara.png"
    },
    {
        titulo: "Naruto Uzumaki",
        descricao: "Naruto Uzumaki é o protagonista da série e o Sétimo Hokage de Konohagakure. Desde jovem, ele sonhava em ser reconhecido pela vila, superando inúmeras dificuldades, como ser o jinchūriki da Kyuubi. Com determinação e ajuda de seus amigos, Naruto se torna um dos shinobi mais poderosos do mundo e traz paz ao mundo ninja.",
        link: "https://naruto.fandom.com/pt-br/wiki/Naruto_Uzumaki",
        dataNascimento: "10 de outubro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/narutouzumaki.png"
    },
    {
        titulo: "Sakura Haruno",
        descricao: "Sakura Haruno é uma das kunoichis mais talentosas de Konohagakure, conhecida por suas habilidades médicas e força bruta. Inicialmente parte do Time 7, ao lado de Naruto e Sasuke, Sakura se torna uma das principais médicas da vila e é essencial para salvar vidas durante a Quarta Grande Guerra Ninja.",
        link: "https://naruto.fandom.com/pt-br/wiki/Sakura_Haruno",
        dataNascimento: "28 de março",
        aldeia: "Konohagakure",
        imagem: "img/avatar/sakuraharuno.png"
    },
    {
        titulo: "Tobirama Senju",
        descricao: "Tobirama Senju foi o Segundo Hokage de Konohagakure, irmão mais novo de Hashirama Senju. Tobirama é conhecido por seu intelecto e pela criação de diversas técnicas ninjas, incluindo o Edo Tensei. Ele desempenhou um papel fundamental na organização da vila após a morte de seu irmão.",
        link: "https://naruto.fandom.com/pt-br/wiki/Tobirama_Senju",
        dataNascimento: "19 de fevereiro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/tobiramasenju.png"
    },
    {
        titulo: "Hashirama Senju",
        descricao: "Hashirama Senju foi o Primeiro Hokage de Konohagakure e um dos ninjas mais poderosos de todos os tempos, sendo conhecido como o 'Deus Shinobi'. Ele é o fundador de Konohagakure, junto com Madara Uchiha, e buscava a paz entre os clãs ninjas.",
        link: "https://naruto.fandom.com/pt-br/wiki/Hashirama_Senju",
        dataNascimento: "23 de outubro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/hashiramasenju.png"
    },
    {
        titulo: "Orochimaru",
        descricao: "Orochimaru é um dos lendários Sannin de Konohagakure e um dos maiores antagonistas da série. Ele buscava a imortalidade e o conhecimento sobre todas as técnicas ninjas, o que o levou a realizar experimentos proibidos. Orochimaru foi responsável por muitos dos eventos mais importantes da série.",
        link: "https://naruto.fandom.com/pt-br/wiki/Orochimaru",
        dataNascimento: "27 de outubro",
        aldeia: "Konohagakure/Vila Oculta do Som",
        imagem: "img/avatar/orochimaru.png"
    },
    {
        titulo: "Minato Namikaze",
        descricao: "Minato Namikaze, o Quarto Hokage de Konohagakure, era conhecido como o 'Relâmpago Amarelo de Konoha' por sua incrível velocidade e ninjutsu. Um gênio tático, Minato desenvolveu diversas técnicas inovadoras e sacrificou sua vida para salvar a vila do ataque da Kyuubi.",
        link: "https://naruto.fandom.com/pt-br/wiki/Minato_Namikaze",
        dataNascimento: "25 de janeiro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/minatonamikaze.png"
    },
    {
        titulo: "Kakashi Hatake",
        descricao: "Kakashi Hatake é o Sexto Hokage de Konohagakure e um dos shinobi mais habilidosos da vila. Conhecido como o 'Ninja Copiador', Kakashi tem uma vasta gama de habilidades, sendo mentor de Naruto, Sasuke e Sakura no Time 7. Ele desempenha um papel crucial em várias batalhas importantes ao longo da série.",
        link: "https://naruto.fandom.com/pt-br/wiki/Kakashi_Hatake",
        dataNascimento: "15 de setembro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/kakashihatake.png"
    },
    {
        titulo: "Maito Guy",
        descricao: "Maito Guy é um jōnin de Konohagakure conhecido por sua grande força física e maestria no Taijutsu. Ele é o eterno rival de Kakashi Hatake e demonstrou habilidades sobre-humanas durante a Quarta Guerra Ninja, quando lutou contra Madara Uchiha utilizando as Oito Portas Internas.",
        link: "https://naruto.fandom.com/pt-br/wiki/Maito_Guy",
        dataNascimento: "1 de janeiro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/maitoguy.png"
    },
    {
        titulo: "Rock Lee",
        descricao: "Rock Lee é um shinobi de Konohagakure e um dos pupilos de Maito Guy. Assim como seu mestre, Lee é especialista em Taijutsu e treina incansavelmente para superar seus limites. Ele é conhecido por sua determinação e espírito de luta, apesar de não ter habilidades naturais em ninjutsu ou genjutsu.",
        link: "https://naruto.fandom.com/pt-br/wiki/Rock_Lee",
        dataNascimento: "27 de novembro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/rocklee.png"
    },
    {
        titulo: "Itachi Uchiha",
        descricao: "Itachi Uchiha é um dos personagens mais complexos e controversos de Naruto. Gênio desde jovem, Itachi tomou a difícil decisão de massacrar seu clã para evitar uma guerra civil. Ele amava profundamente seu irmão Sasuke e planejou tudo para que ele pudesse se vingar e se tornar mais forte.",
        link: "https://naruto.fandom.com/pt-br/wiki/Itachi_Uchiha",
        dataNascimento: "9 de junho",
        aldeia: "Konohagakure",
        imagem: "img/avatar/itachiuchiha.png"
    },
    {
        titulo: "Nagato Uzumaki",
        descricao: "Nagato Uzumaki, é uma figura complexa e trágica no universo de Naruto. Órfão da Guerra, ele cresceu em Amegakure junto a seus amigos Yahiko e Konan, formando a Akatsuki com o ideal de trazer a paz ao mundo. No entanto, a morte de Yahiko o levou por um caminho sombrio como Pain.",
        link: "https://naruto.fandom.com/pt-br/wiki/Nagato",
        dataNascimento: "19 de setembro",
        aldeia: "Amegakure",
        imagem: "img/avatar/nagatouzu.png"
    },
    {
        titulo: "Shikamaru Nara",
        descricao: "Shikamaru Nara é um dos shinobi mais inteligentes de Konohagakure. Ele é conhecido por sua preguiça, mas também por sua habilidade estratégica. Shikamaru assume um papel de liderança durante e após a Quarta Grande Guerra Ninja e se torna um dos conselheiros de Naruto Uzumaki.",
        link: "https://naruto.fandom.com/pt-br/wiki/Shikamaru_Nara",
        dataNascimento: "22 de setembro",
        aldeia: "Konohagakure",
        imagem: "img/avatar/shikamarunara.png"
    },
    {
        titulo: "Sasuke Uchiha",
        descricao: "Sasuke Uchiha é um dos últimos sobreviventes do clã Uchiha, tendo perdido sua família durante o massacre liderado por seu irmão Itachi. Ao longo da série, ele busca vingança contra seu irmão e, mais tarde, contra o sistema shinobi. Ele é um dos personagens mais complexos de Naruto, alternando entre herói e anti-herói. No final, Sasuke encontra seu caminho e se torna um defensor da paz ao lado de Naruto.",
        link: "https://naruto.fandom.com/pt-br/wiki/Sasuke_Uchiha",
        dataNascimento: "23 de julho",
        aldeia: "Konohagakure",
        imagem: "img/avatar/sasukeuchiha.png"
    },
    
];

    



    
