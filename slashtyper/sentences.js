// Statically defined high-quality offline lessons
const sentences = [
  {
    "id": "speech-lincoln",
    "title": "ゲティスバーグ演説 (Abraham Lincoln) 【フル全文】",
    "english": "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.",
    "chunks": [
      {
        "en": "Four score and seven years ago",
        "ja": "87年前、"
      },
      {
        "en": "our fathers brought forth on this continent, a new nation,",
        "ja": "私たちの父祖たちはこの大陸の上に新しい国家を生み出した。"
      },
      {
        "en": "conceived in Liberty,",
        "ja": "それは自由という理念の中で育まれ、"
      },
      {
        "en": "and dedicated to the proposition that all men are created equal.",
        "ja": "すべての人間は平等に造られているという信条に捧げられたものだった。"
      },
      {
        "en": "Now we are engaged in a great civil war,",
        "ja": "今、私たちは大きな内戦の最中にあり、"
      },
      {
        "en": "testing whether that nation,",
        "ja": "その国家が、"
      },
      {
        "en": "or any nation so conceived and so dedicated, can long endure.",
        "ja": "あるいはそのように育まれ捧げられた国家が、長く存続できるかを試されている。"
      },
      {
        "en": "We are met on a great battle-field of that war.",
        "ja": "私たちはその戦争の偉大な戦場で一堂に会している。"
      },
      {
        "en": "We have come to dedicate a portion of that field,",
        "ja": "私たちはその戦場の一部を捧げるためにやってきた。"
      },
      {
        "en": "as a final resting place for those who here gave their lives",
        "ja": "国家が生きながらえるためにここで命を捧げた人々の、最後の安息の地として。"
      },
      {
        "en": "that that nation might live.",
        "ja": "その国家が生き残るために。"
      },
      {
        "en": "It is altogether fitting and proper that we should do this.",
        "ja": "私たちがこれを行うことは、まったく適切であり、ふさわしいことである。"
      },
      {
        "en": "But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground.",
        "ja": "しかし、より広い意味では、私たちはこの土地を捧げ、清め、神聖なものにすることはできない。"
      },
      {
        "en": "The brave men, living and dead, who struggled here, have consecrated it,",
        "ja": "ここで戦った、生きている者、そして亡くなった勇敢な人々が、すでにここを清めている。"
      },
      {
        "en": "far above our poor power to add or detract.",
        "ja": "私たちの微力な力で何かを付け加えたり差し引いたりできるものを、遥かに超えて。"
      },
      {
        "en": "The world will little note, nor long remember what we say here,",
        "ja": "世界は私たちがここで語ることにほとんど注意を払わず、長く記憶することもないだろう。"
      },
      {
        "en": "but it can never forget what they did here.",
        "ja": "しかし、彼らがここで成し遂げたことを決して忘れることはできない。"
      },
      {
        "en": "It is for us the living, rather, to be dedicated here to the unfinished work",
        "ja": "むしろ生きている私たちこそが、未完の仕事に身を捧げるべきなのだ。"
      },
      {
        "en": "which they who fought here have thus far so nobly advanced.",
        "ja": "ここで戦った人々がこれまでこれほど気高く推し進めてきた仕事を。"
      },
      {
        "en": "It is rather for us to be here dedicated to the great task remaining before us --",
        "ja": "むしろ、私たちの前に残された偉大な任務に身を捧げるべきである。"
      },
      {
        "en": "that from these honored dead we take increased devotion",
        "ja": "これらの名誉ある死者たちから、より深い献身を受け継ぎ、"
      },
      {
        "en": "to that cause for which they gave the last full measure of devotion --",
        "ja": "彼らが最後の全力を尽くして捧げたその大義のために。"
      },
      {
        "en": "that we here highly resolve that these dead shall not have died in vain --",
        "ja": "彼らの死を決して無駄にはしないと、私たちがここで固く決意するために。"
      },
      {
        "en": "that this nation, under God, shall have a new birth of freedom --",
        "ja": "この国が、神の下で、新しい自由の誕生を迎えるために。"
      },
      {
        "en": "and that government of the people, by the people, for the people, shall not perish from the earth.",
        "ja": "接着人民の、人民による、人民のための政治を、地上から絶滅させないために。"
      }
    ],
    "wordTranslations": {
      "four score and seven": "87（score＝20、4×20+7）",
      "score": "20",
      "fathers": "祖先たち / 先祖",
      "brought forth": "生み出した / 誕生させた",
      "continent": "大陸",
      "conceived": "育まれた / 構想された",
      "liberty": "自由",
      "dedicated": "捧げられた / 献身した",
      "proposition": "主張 / 信条",
      "created equal": "平等に造られている",
      "engaged in": "従事している / 直面している",
      "civil war": "内戦",
      "testing": "試す / 試練を与える",
      "so conceived": "そのように育まれた",
      "so dedicated": "そのように捧げられた",
      "endure": "耐える / 存続する",
      "met on": "〜で一堂に会する",
      "battle-field": "戦場",
      "dedicate": "捧げる / 献じる",
      "portion": "一部 / 一区画",
      "final resting place": "最後の安息の地 (墓地)",
      "gave their lives": "彼らの命を捧げた",
      "lives": "命 (lifeの複数形)",
      "might live": "生きながらえるために",
      "altogether": "まったく / 完全に",
      "fitting and proper": "適切であり、ふさわしい",
      "larger sense": "広い意味では",
      "consecrate": "清める / 神聖にする",
      "hallow": "神聖にする",
      "ground": "土地 / 地面",
      "brave men": "勇敢な人々",
      "living and dead": "生きている者も亡くなった者も",
      "struggled": "奮闘した / 戦った",
      "poor power": "微力な力",
      "add or detract": "付け加えたり差し引いたりする",
      "little note": "ほとんど注意を払わない",
      "long remember": "長く記憶する",
      "never forget": "決して忘れない",
      "unfinished work": "未完の仕事",
      "nobly advanced": "気高く推し進めた",
      "remaining before us": "私たちの前に残された",
      "honored dead": "名誉ある死者たち",
      "increased devotion": "より深い献身 / さらなる忠誠",
      "cause": "大義 / 原因",
      "full measure": "すべての尺度 / 全力",
      "highly resolve": "固く決意する",
      "died in vain": "無駄に死ぬ",
      "under God": "神の下で",
      "new birth": "新しい誕生",
      "freedom": "自由",
      "government of the people": "人民の政治",
      "by the people": "人民による",
      "for the people": "人民のための",
      "perish": "滅びる / 地上から消え去る"
    }
  },
  {
    "id": "myth-pandora",
    "title": "ギリシャ神話: パンドラの箱 (Pandora's Box) 【フル全文】",
    "english": "Long ago, the Titan Prometheus stole fire from heaven and gave it to humans. This made Zeus, the king of the gods, very angry. To punish mankind, Zeus ordered the creation of the first woman, Pandora. She was beautiful, curious, and gifted by all the gods. Before sending her to Earth, Zeus gave Pandora a beautiful box, but warned her never to open it. Pandora lived happily on Earth with her husband, Epimetheus. However, she could not stop thinking about the mysterious box. Every day, her curiosity grew stronger. Finally, unable to resist any longer, she lifted the lid. In an instant, a swarm of terrible evils flew out: sickness, anger, sadness, and all the troubles of the world. Pandora realized her mistake and quickly shut the lid, but it was too late. All the troubles had escaped to plague mankind. Only one tiny thing remained at the very bottom of the box: Hope. Because of Hope, humans are able to endure all the hardships of life.",
    "chunks": [
      {
        "en": "Long ago, the Titan Prometheus stole fire from heaven",
        "ja": "大昔、タイタンのプロメテウスは天から火を盗み、"
      },
      {
        "en": "and gave it to humans.",
        "ja": "それを人間に与えた。"
      },
      {
        "en": "This made Zeus, the king of the gods, very angry.",
        "ja": "これが神々の王ゼウスを非常に怒らせた。"
      },
      {
        "en": "To punish mankind, Zeus ordered the creation of the first woman, Pandora.",
        "ja": "人類を罰するために、ゼウスは最初の女性パンドラの創造を命じた。"
      },
      {
        "en": "She was beautiful, curious, and gifted by all the gods.",
        "ja": "彼女は美しく、好奇心が強く、すべての神々から才能を授けられていた。"
      },
      {
        "en": "Before sending her to Earth,",
        "ja": "彼女を地球に送る前に、"
      },
      {
        "en": "Zeus gave Pandora a beautiful box,",
        "ja": "ゼウスはパンドラに美しい箱を与えたが、"
      },
      {
        "en": "but warned her never to open it.",
        "ja": "それを決して開けないようにと警告した。"
      },
      {
        "en": "Pandora lived happily on Earth with her husband, Epimetheus.",
        "ja": "パンドラは夫のエピメテウスと共に地球で幸せに暮らした。"
      },
      {
        "en": "However, she could not stop thinking about the mysterious box.",
        "ja": "しかし、彼女はその不思議な箱のことが頭から離れなかった。"
      },
      {
        "en": "Every day, her curiosity grew stronger.",
        "ja": "毎日、彼女の好奇心は強くなっていった。"
      },
      {
        "en": "Finally, unable to resist any longer, she lifted the lid.",
        "ja": "ついに、これ以上我慢できなくなり、彼女は蓋を持ち上げた。"
      },
      {
        "en": "In an instant, a swarm of terrible evils flew out:",
        "ja": "瞬く間に、恐ろしい災いの群れが飛び出してきた。"
      },
      {
        "en": "sickness, anger, sadness, and all the troubles of the world.",
        "ja": "病気、怒り、悲しみ、および世界のすべてのトラブルである。"
      },
      {
        "en": "Pandora realized her mistake and quickly shut the lid, but it was too late.",
        "ja": "パンドラは自分の過ちに気づき、急いで蓋を閉めたが、手遅れだった。"
      },
      {
        "en": "All the troubles had escaped to plague mankind.",
        "ja": "すべての災いは逃げ出し、人類を苦しめることとなった。"
      },
      {
        "en": "Only one tiny thing remained at the very bottom of the box: Hope.",
        "ja": "箱の一番底に、たった一つの小さなものだけが残っていた。それが「希望」である。"
      },
      {
        "en": "Because of Hope, humans are able to endure all the hardships of life.",
        "ja": "希望があるからこそ、人間は人生のすべての困難に耐えることができるのだ。"
      }
    ],
    "wordTranslations": {
      "long ago": "大昔に",
      "Titan": "巨神タイタン",
      "stole": "盗んだ (stealの過去形)",
      "heaven": "天 / 天国",
      "punish": "罰する",
      "mankind": "人類 / 人間",
      "ordered": "命じた",
      "creation": "創造 / 創作",
      "beautiful": "美しい",
      "curious": "好奇心が強い",
      "gifted": "才能を授けられた",
      "sending": "送ること",
      "warned": "警告した",
      "never to open": "決して開けないようにと",
      "lived happily": "幸せに暮らした",
      "husband": "夫",
      "could not stop thinking": "考えるのをやめられなかった",
      "mysterious": "神秘的な / 不思議な",
      "curiosity": "好奇心",
      "grew stronger": "だんだん強くなった",
      "unable to resist": "抵抗することができず / 我慢できず",
      "lifted the lid": "蓋を持ち上げた",
      "in an instant": "瞬く間に / 一瞬で",
      "swarm": "大群 / 群れ",
      "terrible evils": "恐ろしい悪 / 災い",
      "flew out": "飛び出した",
      "sickness": "病気",
      "sadness": "悲しみ",
      "troubles": "災い / 悩み",
      "realized": "悟った / 気づいた",
      "mistake": "誤り / 過ち",
      "shut the lid": "蓋を閉めた",
      "too late": "手遅れ",
      "escaped": "逃げ出した",
      "plague": "苦しめる / 疫病にかける",
      "tiny thing": "小さなもの",
      "remained": "残った",
      "bottom": "底",
      "hope": "希望",
      "endure": "耐える / 生き抜く",
      "hardships": "困難 / 苦難"
    }
  },
  {
    "id": "myth-icarus",
    "title": "ギリシャ神話: イカロスの翼 (The Flight of Icarus) 【フル全文】",
    "english": "Daedalus was a master craftsman imprisoned on the island of Crete by King Minos. Desperate to escape with his young son, Icarus, Daedalus gathered bird feathers and used wax to build two pairs of wings. Before they took flight, Daedalus warned his son: 'Do not fly too low, or the sea damp will heavy your wings. Do not fly too high, or the sun's heat will melt the wax.' They leaped into the air and flew like birds. Icarus felt the thrill of flight. The freedom made him wild. He ignored his father's advice and flew higher and higher into the bright sky. As he got closer to the sun, the wax melted, and his feathers floated away. Icarus fell into the sea and drowned. Daedalus wept for his son and named the waters the Icarian Sea.",
    "chunks": [
      {
        "en": "Daedalus was a master craftsman",
        "ja": "ダイダロスは優れた職人であったが、"
      },
      {
        "en": "imprisoned on the island of Crete by King Minos.",
        "ja": "ミノス王によってクレタ島に投獄されていた。"
      },
      {
        "en": "Desperate to escape with his young son, Icarus,",
        "ja": "幼い息子イカロスと共に必死に脱出しようとして、"
      },
      {
        "en": "Daedalus gathered bird feathers and used wax to build two pairs of wings.",
        "ja": "ダイダロスは鳥の羽を集め、蝋を使って二対の翼を作った。"
      },
      {
        "en": "Before they took flight, Daedalus warned his son:",
        "ja": "彼らが飛び立つ前に、ダイダロスは息子に警告した。"
      },
      {
        "en": "'Do not fly too low, or the sea damp will heavy your wings.",
        "ja": "「低く飛びすぎてはいけない。海の湿気が翼を重くしてしまうから。"
      },
      {
        "en": "Do not fly too high, or the sun's heat will melt the wax.'",
        "ja": "高く飛びすぎてもいけない。太陽の熱が蝋を溶かしてしまうから。」"
      },
      {
        "en": "They leaped into the air and flew like birds.",
        "ja": "彼らは空中に跳びだし、鳥のように飛んだ。"
      },
      {
        "en": "Icarus felt the thrill of flight.",
        "ja": "イカロスは空を飛ぶ興奮を感じた。"
      },
      {
        "en": "The freedom made him wild.",
        "ja": "その自由さが彼を夢中にさせた。"
      },
      {
        "en": "He ignored his father's advice",
        "ja": "彼は父親の忠告を無視し、"
      },
      {
        "en": "and flew higher and higher into the bright sky.",
        "ja": "輝く空へと高く高く飛んでいった。"
      },
      {
        "en": "As he got closer to the sun, the wax melted, and his feathers floated away.",
        "ja": "太陽に近づくにつれて蝋が溶け、羽が散り散りになって浮いていった。"
      },
      {
        "en": "Icarus fell into the sea and drowned.",
        "ja": "イカロスは海に落下して溺れ死んだ。"
      },
      {
        "en": "Daedalus wept for his son and named the waters the Icarian Sea.",
        "ja": "ダイダロスは息子を悼んで泣き、その海域をイカリア海と名付けた。"
      }
    ],
    "wordTranslations": {
      "craftsman": "職人 / 工芸家",
      "imprisoned": "投獄された",
      "island": "島",
      "desperate": "必死の / 絶望的な",
      "escape": "脱出する / 逃れる",
      "gathered": "集めた",
      "feathers": "羽 / 羽毛",
      "wax": "蝋（ワックス）",
      "build": "作る / 組み立てる",
      "pairs of wings": "両翼 / 翼のペア",
      "took flight": "飛び立った",
      "warned": "警告した",
      "too low": "低すぎる",
      "sea damp": "海の湿気 / 水蒸気",
      "heavy": "重くする",
      "too high": "高すぎる",
      "melt": "溶かす",
      "leaped": "跳びだした / 跳躍した",
      "air": "空中 / 空気",
      "thrill": "興奮 / スリル",
      "flight": "飛行 / 飛ぶこと",
      "freedom": "自由",
      "wild": "我を忘れた / 夢中になった",
      "ignored": "無視した",
      "advice": "忠告 / アドバイス",
      "closer": "より近くに",
      "floated away": "散り散りになって浮いていった",
      "fell into": "落下した",
      "drowned": "溺死した / おぼれた",
      "wept": "涙を流した / 嘆き悲しんだ (weepの過去形)",
      "waters": "水面 / 海域"
    }
  },
  {
    "id": "genesis-ch1-part1",
    "title": "聖書: 創世記 第1章 (Part 1/2) 【第1日〜第3日】",
    "english": "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. And God saw the light, that it was good: and God divided the light from the darkness. And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day. And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters. And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so. And God called the firmament Heaven. And the evening and the morning were the second day. And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so. And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good. And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so. And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good. And the evening and the morning were the third day.",
    "chunks": [
      {
        "en": "In the beginning God created the heaven and the earth.",
        "ja": "初めに、神は天地を創造された。"
      },
      {
        "en": "And the earth was without form, and void;",
        "ja": "地は混沌であって、空虚であった。"
      },
      {
        "en": "and darkness was upon the face of the deep.",
        "ja": "闇が深淵の面にあり、"
      },
      {
        "en": "And the Spirit of God moved upon the face of the waters.",
        "ja": "神の霊が水の面を動いていた。"
      },
      {
        "en": "And God said, Let there be light: and there was light.",
        "ja": "神は言われた。「光あれ。」こうして光があった。"
      },
      {
        "en": "And God saw the light, that it was good:",
        "ja": "神はその光を見て、良しとされた。"
      },
      {
        "en": "and God divided the light from the darkness.",
        "ja": "神は光と闇を分けられた。"
      },
      {
        "en": "And God called the light Day, and the darkness he called Night.",
        "ja": "神は光を「昼」と呼び、闇を「夜」と呼ばれた。"
      },
      {
        "en": "And the evening and the morning were the first day.",
        "ja": "夕があり、朝があった。第一日である。"
      },
      {
        "en": "And God said, Let there be a firmament in the midst of the waters,",
        "ja": "神は言われた。「水の中に大空あれ。"
      },
      {
        "en": "and let it divide the waters from the waters.",
        "ja": "水と水との間に分けよ。」"
      },
      {
        "en": "And God made the firmament,",
        "ja": "神は大空を造り、"
      },
      {
        "en": "and divided the waters which were under the firmament",
        "ja": "大空の下にある水と、"
      },
      {
        "en": "from the waters which were above the firmament: and it was so.",
        "ja": "大空の上にある水とを分けられた。そのようになった。"
      },
      {
        "en": "And God called the firmament Heaven.",
        "ja": "神は大空を「天」と呼ばれた。"
      },
      {
        "en": "And the evening and the morning were the second day.",
        "ja": "夕があり、朝があった。第二日である。"
      },
      {
        "en": "And God said, Let the waters under the heaven be gathered together unto one place,",
        "ja": "神は言われた。「天の下の水は一所に集まれ。"
      },
      {
        "en": "and let the dry land appear: and it was so.",
        "ja": "乾いた地が現れよ。」そのようになった。"
      },
      {
        "en": "And God called the dry land Earth;",
        "ja": "神は乾いた地を「地」と呼ばれ、"
      },
      {
        "en": "and the gathering together of the waters called he Seas: and God saw that it was good.",
        "ja": "水の集まった所を「海」と呼ばれた。神はこれを見て良しとされた。"
      },
      {
        "en": "And God said, Let the earth bring forth grass, the herb yielding seed,",
        "ja": "神は言われた。「地は青草と、種をもつ草と、"
      },
      {
        "en": "and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
        "ja": "それぞれの種類にしたがって、地の上に種をもつ実を結ぶ果樹を芽生えさせよ。」そのようになった。"
      },
      {
        "en": "And the earth brought forth grass, and herb yielding seed after his kind,",
        "ja": "地は青草と、それぞれの種類にしたがって種をもつ草と、"
      },
      {
        "en": "and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.",
        "ja": "それぞれの種類にしたがって種をもつ実を結ぶ木を芽生えさせた。神はこれを見て良しとされた。"
      },
      {
        "en": "And the evening and the morning were the third day.",
        "ja": "夕があり、朝があった。第三日である。"
      }
    ],
    "wordTranslations": {
      "in the beginning": "初めに / 冒頭に",
      "created": "創造した",
      "heaven": "天 / 天空",
      "earth": "地 / 地球",
      "without form": "形のない / 混沌とした",
      "void": "空虚な / 何もない",
      "darkness": "闇",
      "face": "表面 / 面",
      "deep": "深淵",
      "Spirit": "霊 / 聖霊",
      "moved": "動いていた / 覆っていた",
      "waters": "水 / 水面",
      "let there be": "あれ / 生じよ",
      "light": "光",
      "saw the light": "光を見た",
      "good": "良し / 良い",
      "divided": "分けた / 区切った",
      "from the darkness": "闇から",
      "called": "名付けた / 呼んだ",
      "evening": "夕べ",
      "morning": "朝",
      "first day": "第一日",
      "firmament": "大空 / 天空",
      "midst": "真ん中 / 中央",
      "divide the waters": "水を分ける",
      "heaven": "天",
      "second day": "第二日",
      "gathered together": "一所に集まる",
      "dry land": "乾いた土地 / 陸地",
      "appear": "現れる",
      "seas": "海",
      "bring forth": "生み出す / 芽生えさせる",
      "grass": "青草 / 草",
      "herb": "草 / ハーブ",
      "yielding": "生み出す / 実らせる",
      "seed": "種",
      "fruit tree": "果樹",
      "after his kind": "その種類に従って",
      "itself": "それ自身",
      "third day": "第三日"
    }
  },
  {
    "id": "genesis-ch1-part2",
    "title": "聖書: 創世記 第1章 (Part 2/2) 【第4日〜第6日】",
    "english": "And God said, Let there be lights in the firmament of the heaven to divide the day from the night. And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also. And the evening and the morning were the fourth day. And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven. And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good. And the evening and the morning were the fifth day. And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so. And God said, Let us make man in our image, after our likeness. So God created man in his own image, in the image of God created he him; male and female created he them. And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.",
    "chunks": [
      {
        "en": "And God said, Let there be lights in the firmament of the heaven",
        "ja": "神は言われた。「天の大空に光る物があって、"
      },
      {
        "en": "to divide the day from the night.",
        "ja": "昼と夜とを分けよ。」"
      },
      {
        "en": "And God made two great lights; the greater light to rule the day,",
        "ja": "神は二つの大きな光る物を造られた。大きい方の光る物には昼を治めさせ、"
      },
      {
        "en": "and the lesser light to rule the night: he made the stars also.",
        "ja": "小さい方の光る物には夜を治めさせた。また星をも造られた。"
      },
      {
        "en": "And the evening and the morning were the fourth day.",
        "ja": "夕があり、朝があった。第四日である。"
      },
      {
        "en": "And God said, Let the waters bring forth abundantly the moving creature that hath life,",
        "ja": "神は言われた。「水は命ある這うものを豊かに生み出せ。"
      },
      {
        "en": "and fowl that may fly above the earth in the open firmament of heaven.",
        "ja": "また鳥は地の上、天の大空を飛べ。」"
      },
      {
        "en": "And God created great whales, and every living creature that moveth,",
        "ja": "神は大きなクジラと、水が豊かに生み出したすべての動く生き物を、"
      },
      {
        "en": "which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.",
        "ja": "それぞれの種類にしたがって創造し、またすべての翼ある鳥をそれぞれの種類にしたがって創造された。神はこれを見て良しとされた。"
      },
      {
        "en": "And the evening and the morning were the fifth day.",
        "ja": "夕があり、朝があった。第五日である。"
      },
      {
        "en": "And God said, Let the earth bring forth the living creature after his kind, cattle,",
        "ja": "神は言われた。「地は生き物をそれぞれの種類にしたがって生み出せ。家畜と、"
      },
      {
        "en": "and creeping thing, and beast of the earth after his kind: and it was so.",
        "ja": "這うもの、地の獣をそれぞれの種類にしたがって生み出せ。」そのようになった。"
      },
      {
        "en": "And God said, Let us make man in our image, after our likeness.",
        "ja": "神は言われた。「我々のかたちに、我々に似せて人を造ろう。」"
      },
      {
        "en": "So God created man in his own image, in the image of God created he him;",
        "ja": "神は人をご自身のかたちに創造された。すなわち神のかたちに創造された。"
      },
      {
        "en": "male and female created he them.",
        "ja": "男と女に彼らを創造された。"
      },
      {
        "en": "And God saw every thing that he had made, and, behold, it was very good.",
        "ja": "神はお造りになったすべてのものを見られた。見よ、それは極めて良かった。"
      },
      {
        "en": "And the evening and the morning were the sixth day.",
        "ja": "夕があり、朝があった。第六日である。"
      }
    ],
    "wordTranslations": {
      "lights": "光る物 / 天体",
      "divide the day": "昼を分ける",
      "two great lights": "二つの大きな光体 (太陽と月)",
      "greater light": "大きい方の光体 (太陽)",
      "rule": "支配する / 治める",
      "lesser light": "小さい方の光体 (月)",
      "stars": "星",
      "fourth day": "第四日",
      "bring forth abundantly": "豊かに / 夥しく生み出す",
      "moving creature": "動く生き物",
      "hath": "持っている (hasの古語)",
      "life": "命 / 生命",
      "fowl": "鳥 / 鳥類",
      "fly above": "上空を飛ぶ",
      "open firmament": "広大な大空",
      "whales": "クジラ",
      "moveth": "動く (movesの古語)",
      "winged": "翼のある",
      "fifth day": "第五日",
      "cattle": "家畜 / 牛など",
      "creeping thing": "這うもの (昆虫や爬虫類)",
      "beast": "野獣 / 動物",
      "let us make": "〜を造ろう",
      "man": "人 / 人類",
      "our image": "我々のかたち (神の似姿)",
      "likeness": "肖像 / 似姿",
      "created he him": "神は彼を創造された",
      "male and female": "男と女",
      "behold": "見よ",
      "sixth day": "第六日"
    }
  },
  {
    "id": "alice-ch1-part1",
    "title": "不思議の国のアリス 第1章 (Part 1/4) 【兎の穴へ】",
    "english": "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do. Once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice, 'without pictures or conversations?' So she was considering in her own mind whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' When the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it. Burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge. In another moment down went Alice after it, never once considering how in the world she was to get out again. The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.",
    "chunks": [
      {
        "en": "Alice was beginning to get very tired of sitting by her sister on the bank,",
        "ja": "アリスは土手でお姉さんの横に座って、"
      },
      {
        "en": "and of having nothing to do.",
        "ja": "何もすることがなくて、とても退屈し始めていた。"
      },
      {
        "en": "Once or twice she had peeped into the book her sister was reading,",
        "ja": "一、二度はお姉さんが読んでいる本をのぞき込んでみたが、"
      },
      {
        "en": "but it had no pictures or conversations in it,",
        "ja": "そこには挿絵も会話も載っていなかった。"
      },
      {
        "en": "'and what is the use of a book,' thought Alice, 'without pictures or conversations?'",
        "ja": "「挿絵も会話もない本なんて、何の役に立つのかしら」とアリスは思った。"
      },
      {
        "en": "So she was considering in her own mind",
        "ja": "そこで彼女は、頭の中で考えていた。"
      },
      {
        "en": "whether the pleasure of making a daisy-chain",
        "ja": "ヒナギクの冠を作る楽しさが、"
      },
      {
        "en": "would be worth the trouble of getting up and picking the daisies,",
        "ja": "立ち上がってヒナギクを摘む面倒に見合うだけのものかどうかを。"
      },
      {
        "en": "when suddenly a White Rabbit with pink eyes ran close by her.",
        "ja": "その時突然、ピンクの目をした白ウサギが彼女のすぐそばを走り抜けた。"
      },
      {
        "en": "There was nothing so very remarkable in that;",
        "ja": "それ自体はそれほど珍しいことではなかった。"
      },
      {
        "en": "nor did Alice think it so very much out of the way",
        "ja": "アリスにとっても、それが極めて異常だとは思わなかった。"
      },
      {
        "en": "to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!'",
        "ja": "ウサギが「おやまあ！遅刻しちゃう！」と独り言を言うのを聞いた時も。"
      },
      {
        "en": "When the Rabbit actually took a watch out of its waistcoat-pocket,",
        "ja": "しかし、ウサギが本当にチョッキのポケットから懐中時計を取り出し、"
      },
      {
        "en": "and looked at it, and then hurried on,",
        "ja": "それを見てから急いで先を急いだ時、"
      },
      {
        "en": "Alice started to her feet,",
        "ja": "アリスは思わず立ち上がった。"
      },
      {
        "en": "for it flashed across her mind that she had never before seen a rabbit",
        "ja": "これまで一度もウサギを見たことがなかったということが、ふと頭にひらめいたからである。"
      },
      {
        "en": "with either a waistcoat-pocket, or a watch to take out of it.",
        "ja": "チョッキのポケットを持っていたり、そこから取り出す時計を持っていたりするようなウサギなど、"
      },
      {
        "en": "Burning with curiosity, she ran across the field after it,",
        "ja": "好奇心に燃えて、彼女は野原を横切ってその後を追いかけ、"
      },
      {
        "en": "and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.",
        "ja": "幸いにも、それが生け垣の下の大きなウサギの穴へポンと飛び込むのをちょうど見届けることができた。"
      },
      {
        "en": "In another moment down went Alice after it,",
        "ja": "次の瞬間にはアリスもその穴へ飛び込んでおり、"
      },
      {
        "en": "never once considering how in the world she was to get out again.",
        "ja": "一体どうやってそこから抜け出すのかなど、ただの一度も考えなかった。"
      },
      {
        "en": "The rabbit-hole went straight on like a tunnel for some way,",
        "ja": "ウサギの穴はしばらくの間、トンネルのようにまっすぐ続いていたが、"
      },
      {
        "en": "and then dipped suddenly down,",
        "ja": "それから突然下へと急降下した。"
      },
      {
        "en": "so suddenly that Alice had not a moment to think about stopping herself",
        "ja": "あまりに突然だったため、アリスは立ち止まることを考える暇もなく、"
      },
      {
        "en": "before she found herself falling down a very deep well.",
        "ja": "気がついた時には非常に深い井戸の中を落ちていっていた。"
      }
    ],
    "wordTranslations": {
      "beginning to": "〜し始めていた",
      "get very tired of": "〜にひどく退屈する / 飽きる",
      "sitting by": "〜のそばに座る",
      "bank": "土手 / 堤防",
      "having nothing to do": "何もすることがない",
      "once or twice": "一、二度",
      "peeped into": "のぞき見た",
      "reading": "読んでいる",
      "pictures": "挿絵 / 写真",
      "conversations": "会話",
      "use of": "〜の使い道 / 役に立つこと",
      "without": "〜なしで",
      "considering": "考えていた / 検討していた",
      "own mind": "心の中で",
      "pleasure": "楽しさ / 喜び",
      "making": "作ること",
      "daisy-chain": "ヒナギクの花冠",
      "worth the trouble": "苦労する価値がある",
      "getting up": "起き上がること",
      "picking": "摘むこと",
      "pink eyes": "ピンク色の目",
      "ran close by": "すぐ近くを走り抜けた",
      "remarkable": "珍しい / 注目に値する",
      "out of the way": "異常な / 風変わりな",
      "say to itself": "独り言を言う",
      "oh dear": "おやまあ！ / 大変だ！",
      "shall be late": "遅刻してしまう",
      "thought it over": "よく考えてみる",
      "afterwards": "あとになって",
      "occurred to": "心に浮かんだ / 思いついた",
      "ought to": "すべきだった",
      "wondered": "不思議に思う",
      "quite natural": "まったく自然なこと",
      "actually": "実際に / 本当に",
      "took a watch": "時計を取り出した",
      "waistcoat-pocket": "チョッキのポケット",
      "looked at": "〜を見た",
      "hurried on": "急ぎ足で進んだ",
      "started to her feet": "思わず立ち上がった",
      "flashed across": "頭をよぎった / ひらめいた",
      "never before seen": "これまで一度も見たことがない",
      "burning with curiosity": "好奇心に燃えて",
      "ran across": "走って横切った",
      "field": "野原",
      "fortunately": "幸運にも / 幸いにも",
      "just in time to": "ちょうど〜するのに間に合って",
      "pop down": "ポンと飛び込む / 急に下に入る",
      "rabbit-hole": "ウサギの穴",
      "hedge": "生け垣",
      "another moment": "次の瞬間 / もう一瞬",
      "went after": "〜の後を追った",
      "never once": "ただの一度も〜ない",
      "how in the world": "一体どうやって",
      "get out again": "再び抜け出す",
      "straight on": "まっすぐ進む",
      "tunnel": "トンネル",
      "some way": "しばらくの間 / ある程度の距離",
      "dipped suddenly": "急降下した / 急に傾いた",
      "stopping herself": "立ち止まること",
      "found herself": "気がつくと〜していた",
      "falling down": "落下している",
      "deep well": "深い井戸"
    }
  },
  {
    "id": "alice-ch1-part2",
    "title": "不思議の国のアリス 第1章 (Part 2/4) 【深い井戸の落下】",
    "english": "Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labeled 'ORANGE MARMALADE', but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it. 'Well!' thought Alice to herself, 'after such a fall as this, I shall think nothing of tumbling down stairs! How brave they'll all think me at home! Why, I wouldn't say anything about it, even if I fell off the top of the house!' (which was very likely true.) Down, down, down. Would the fall never come to an end? 'I wonder how many miles I've fallen by this time?' she said aloud. 'I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think.'",
    "chunks": [
      {
        "en": "Either the well was very deep, or she fell very slowly,",
        "ja": "井戸が非常に深かったのか、それとも彼女がとてもゆっくり落ちたのか、"
      },
      {
        "en": "for she had plenty of time as she went down",
        "ja": "落ちていく間にたっぷりと時間があったので、"
      },
      {
        "en": "to look about her and to wonder what was going to happen next.",
        "ja": "周りを見回したり、次に何が起こるのだろうと考えたりすることができた。"
      },
      {
        "en": "First, she tried to look down and make out what she was coming to,",
        "ja": "最初は下を見て、自分がどこに向かっているのか確かめようとしたが、"
      },
      {
        "en": "but it was too dark to see anything;",
        "ja": "暗すぎて何も見えなかった。"
      },
      {
        "en": "then she looked at the sides of the well,",
        "ja": "それから彼女は井戸の側面を見つめ、"
      },
      {
        "en": "and noticed that they were filled with cupboards and book-shelves;",
        "ja": "そこが食器棚や本棚でいっぱいであることに気づいた。"
      },
      {
        "en": "here and there she saw maps and pictures hung upon pegs.",
        "ja": "あちこちに、ペグ（掛け釘）に掛けられた地図や絵が見えた。"
      },
      {
        "en": "She took down a jar from one of the shelves as she passed;",
        "ja": "通り過ぎざまに、彼女はある棚から瓶を一つ取り下ろした。"
      },
      {
        "en": "it was labeled 'ORANGE MARMALADE',",
        "ja": "そこには「オレンジマーマレード」というラベルが貼られていたが、"
      },
      {
        "en": "but to her great disappointment it was empty:",
        "ja": "非常にがっかりしたことに、それは空っぽだった。"
      },
      {
        "en": "she did not like to drop the jar for fear of killing somebody,",
        "ja": "誰かを殺してしまうのを恐れて、彼女はその瓶を落としたくなかったので、"
      },
      {
        "en": "so managed to put it into one of the cupboards as she fell past it.",
        "ja": "落ちながらなんとかそれを食器棚の一つに収めることができた。"
      },
      {
        "en": "'Well!' thought Alice to herself,",
        "ja": "「まあ！」とアリスは心の中で思った。"
      },
      {
        "en": "'after such a fall as this, I shall think nothing of tumbling down stairs!",
        "ja": "「これほど落ちた後なら、階段から転げ落ちるなんて何とも思わないわ！"
      },
      {
        "en": "How brave they'll all think me at home!",
        "ja": "うちのみんなは私のことをなんて勇敢だと思うかしら！"
      },
      {
        "en": "Why, I wouldn't say anything about it, even if I fell off the top of the house!'",
        "ja": "そうよ、家の屋根から落ちたって、そのことについて何も言わないわ！」"
      },
      {
        "en": "(which was very likely true.)",
        "ja": "（それはおそらく本当のことであっただろう。）"
      },
      {
        "en": "Down, down, down. Would the fall never come to an end?",
        "ja": "下へ、下へ、下へ。この落下は永遠に終わらないのだろうか？"
      },
      {
        "en": "'I wonder how many miles I've fallen by this time?' she said aloud.",
        "ja": "「今頃、何マイルくらい落ちたのかしら？」と彼女は声に出して言った。"
      },
      {
        "en": "'I must be getting somewhere near the centre of the earth.",
        "ja": "「地球の中心の近くのどこかに到達しているに違いないわ。"
      },
      {
        "en": "Let me see: that would be four thousand miles down, I think.'",
        "ja": "ええと、たしか4000マイルほど下だったかしら。」"
      }
    ],
    "wordTranslations": {
      "either": "どちらか一方の / または",
      "very deep": "非常に深い",
      "fell very slowly": "とてもゆっくり落ちた",
      "plenty of time": "たっぷりと時間がある",
      "went down": "落ちていった / 下りていった",
      "look about": "周りを見回す",
      "wonder": "疑問に思う / 考える",
      "going to happen next": "次に何が起こるか",
      "tried to": "〜しようと試みる",
      "look down": "下を見る",
      "make out": "確かめる / 見分ける",
      "coming to": "向かっている先",
      "too dark": "暗すぎる",
      "sides": "側面",
      "noticed": "気づいた",
      "filled with": "〜でいっぱいである",
      "cupboards": "食器棚 / 戸棚",
      "book-shelves": "本棚",
      "here and there": "あちこちに / いたるところに",
      "hung upon": "〜に掛けられた",
      "pegs": "掛け釘 / ペグ",
      "took down": "取り下ろした",
      "jar": "瓶 / 広口瓶",
      "passed": "通り過ぎた",
      "labeled": "ラベルが貼られた",
      "orange marmalade": "オレンジマーマレード",
      "disappointment": "がっかりすること / 落胆",
      "empty": "空っぽの",
      "drop": "落とす",
      "for fear of": "〜するのを恐れて / 避けるために",
      "killing somebody": "誰かを殺してしまうこと",
      "managed to": "なんとか〜した",
      "put it into": "それの中に収める / 入れる",
      "fell past": "落下しながら通り過ぎる",
      "after such a fall": "これほど落ちた後なら",
      "think nothing of": "何とも思わない / 軽んじる",
      "tumbling down": "転げ落ちること",
      "stairs": "階段",
      "brave": "勇敢な",
      "at home": "家で",
      "wouldn't say anything": "何も言わないだろう",
      "fell off": "落ちた",
      "top": "頂上 / 屋根",
      "very likely": "おそらく本当の / 可能性が高い",
      "come to an end": "終わりを迎える",
      "how many miles": "何マイル",
      "fallen by this time": "今頃落ちてしまった",
      "said aloud": "声に出して言った",
      "getting somewhere near": "近くのどこかに到達している",
      "centre": "中心",
      "let me see": "ええと / そうですね",
      "four thousand": "4000"
    }
  },
  {
    "id": "alice-ch1-part3",
    "title": "不思議の国のアリス 第1章 (Part 3/4) 【広間と不思議な小瓶】",
    "english": "Alice was not a bit hurt, and she jumped up on to her feet in a moment: she looked up, but it was all dark overhead; before her was another long passage, and the White Rabbit was still in sight, hurrying down it. There was not a moment to be lost: away went Alice like the wind, and was just in time to hear it say, as it turned a corner, 'Oh my ears and whiskers, how late it's getting!' She was close behind it when she turned the corner, but the Rabbit was no longer to be seen. She found herself in a long, low hall, which was lit up by a row of lamps hanging from the roof. There were doors all round the hall, but they were all locked; and when Alice had been all the way down one side and up the other, trying every door, she walked sadly down the middle, wondering how she was ever to get out again. Suddenly she came upon a low three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice's first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them.",
    "chunks": [
      {
        "en": "Alice was not a bit hurt, and she jumped up on to her feet in a moment:",
        "ja": "アリスは少しも怪我をしておらず、すぐに飛び起きて立ち上がった。"
      },
      {
        "en": "she looked up, but it was all dark overhead;",
        "ja": "彼女は見上げたが、頭上は真っ暗だった。"
      },
      {
        "en": "before her was another long passage,",
        "ja": "目の前には別の長い通路があり、"
      },
      {
        "en": "and the White Rabbit was still in sight, hurrying down it.",
        "ja": "白ウサギがまだ見えていて、そこを急いで下っていた。"
      },
      {
        "en": "There was not a moment to be lost: away went Alice like the wind,",
        "ja": "一刻の猶予もない。アリスは風のように走り去り、"
      },
      {
        "en": "and was just in time to hear it say, as it turned a corner,",
        "ja": "ウサギが角を曲がりながら言うのを、ギリギリで聞き取ることができた。"
      },
      {
        "en": "'Oh my ears and whiskers, how late it's getting!'",
        "ja": "「おやおや、耳とヒゲにかけて、なんて遅くなっていくんだ！」"
      },
      {
        "en": "She was close behind it when she turned the corner,",
        "ja": "彼女が角を曲がったとき、ウサギのすぐ後ろにいたが、"
      },
      {
        "en": "but the Rabbit was no longer to be seen.",
        "ja": "ウサギはもう見えなくなっていた。"
      },
      {
        "en": "She found herself in a long, low hall,",
        "ja": "気がつくと彼女は、天井の低い長い広間に立っていた。"
      },
      {
        "en": "which was lit up by a row of lamps hanging from the roof.",
        "ja": "そこは屋根から吊り下げられた一列のランプで照らされていた。"
      },
      {
        "en": "There were doors all round the hall, but they were all locked;",
        "ja": "広間の周りにはいたるところにドアがあったが、すべて鍵がかかっていた。"
      },
      {
        "en": "and when Alice had been all the way down one side and up the other, trying every door,",
        "ja": "アリスが片側からもう片側へと一通り移動し、すべてのドアを試してみたあと、"
      },
      {
        "en": "she walked sadly down the middle, wondering how she was ever to get out again.",
        "ja": "どうやってここから抜け出せばいいのか途方に暮れながら、悲しそうに真ん中を歩いた。"
      },
      {
        "en": "Suddenly she came upon a low three-legged table, all made of solid glass;",
        "ja": "突然、彼女は頑丈なガラスで作られた低い三本脚のテーブルに出くわした。"
      },
      {
        "en": "there was nothing on it except a tiny golden key,",
        "ja": "その上には小さな金色の鍵以外には何も乗っていなかった。"
      },
      {
        "en": "and Alice's first thought was that it might belong to one of the doors of the hall;",
        "ja": "アリスが最初に思ったのは、それが広間のドアのどれかのものかもしれないということだった。"
      },
      {
        "en": "but, alas! either the locks were too large, or the key was too small,",
        "ja": "しかし、ああ！錠が大きすぎるか、鍵が小さすぎるかのどちらかで、"
      },
      {
        "en": "but at any rate it would not open any of them.",
        "ja": "とにかくどのドアも開けることができなかった。"
      }
    ],
    "wordTranslations": {
      "not a bit": "少しも〜ない",
      "hurt": "痛んだ / 怪我をした",
      "jumped up": "跳び起きた",
      "on to her feet": "立ち上がって / 自分の足で",
      "in a moment": "すぐに / 一瞬で",
      "looked up": "見上げた",
      "overhead": "頭上に / 頭上で",
      "before her": "彼女の前に",
      "passage": "通路",
      "in sight": "見えて / 視界の中に",
      "hurrying down": "急いで下っていく",
      "to be lost": "失われるべき (一刻の猶予もない)",
      "away went": "走り去った",
      "like the wind": "風のように",
      "just in time to": "ギリギリ間に合って",
      "turned a corner": "角を曲がった",
      "ears and whiskers": "耳とヒゲにかけて (ウサギの口癖)",
      "how late it's getting": "なんて遅くなっていくんだ",
      "close behind": "すぐ後ろに",
      "no longer to be seen": "もう見えなくなっていた",
      "found herself": "気がつくと〜にいた",
      "low hall": "天井の低い広間",
      "lit up": "ライトアップされた / 照らされた",
      "row of lamps": "一列のランプ",
      "hanging from": "〜から吊り下がっている",
      "roof": "屋根 / 天井",
      "all round": "〜のいたるところに / 周り全部",
      "locked": "鍵がかかった",
      "all the way down": "ずっと下りて / 隅から隅まで",
      "trying every door": "すべてのドアを試す",
      "sadly": "悲しそうに",
      "wondering": "疑問に思いながら / 悩む",
      "ever to get out": "いつか抜け出すこと",
      "came upon": "偶然出くわした / 見つけた",
      "three-legged": "三本脚の",
      "solid glass": "頑丈なガラス",
      "except": "〜を除いて",
      "tiny": "ちっぽけな / とても小さい",
      "golden key": "金色の鍵",
      "first thought": "最初に思ったこと",
      "belong to": "〜のものである",
      "alas": "ああ / 悲しいかな",
      "locks": "錠前 / 鍵穴",
      "too large": "大きすぎる",
      "too small": "小さすぎる",
      "at any rate": "とにかく / いずれにせよ"
    }
  },
  {
    "id": "alice-ch1-part4",
    "title": "不思議の国のアリス 第1章 (Part 4/4) 【不思議な飲み物とケーキ】",
    "english": "However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high: she tried the little golden key in the lock, and to her great delight it fitted! Alice opened the door and found that it led into a small passage, not much larger than a rat-hole: she knelt down and looked along the passage into the loveliest garden you ever saw. How she longed to get out of that dark hall, and wander about among those beds of bright flowers and those cool fountains, but she could not even get her head through the doorway. She went back to the table, half hoping she might find another key on it, or at any rate a book of rules for shutting people up like telescopes: this time she found a little bottle on it, with the words 'DRINK ME' beautifully printed on it in large letters. Alice drank it, and felt a curious feeling. 'What a curious feeling!' said Alice; 'I must be shutting up like a telescope.' And so it was indeed: she was now only ten inches high, and her face brightened up at the thought that she was now the right size for going through the little door into that lovely garden.",
    "chunks": [
      {
        "en": "However, on the second time round,",
        "ja": "しかし、二周目に回ったとき、"
      },
      {
        "en": "she came upon a low curtain she had not noticed before,",
        "ja": "以前は気づかなかった低いカーテンに出くわした。"
      },
      {
        "en": "and behind it was a little door about fifteen inches high:",
        "ja": "そしてその背後には、高さ15インチほどの小さなドアがあった。"
      },
      {
        "en": "she tried the little golden key in the lock, and to her great delight it fitted!",
        "ja": "彼女は小さな金色の鍵を鍵穴に試してみたところ、とても嬉しいことにぴったりと合った！"
      },
      {
        "en": "Alice opened the door and found that it led into a small passage,",
        "ja": "アリスがそのドアを開けると、それが小さな通路に通じていることがわかった。"
      },
      {
        "en": "not much larger than a rat-hole:",
        "ja": "それはネズミの穴と大差ない大きさだった。"
      },
      {
        "en": "she knelt down and looked along the passage",
        "ja": "彼女はひざまずき、その通路に沿って覗き込んだ。"
      },
      {
        "en": "into the loveliest garden you ever saw.",
        "ja": "これまでに見たこともないほど愛らしい庭園を。"
      },
      {
        "en": "How she longed to get out of that dark hall,",
        "ja": "あの暗い広間を抜け出して、"
      },
      {
        "en": "and wander about among those beds of bright flowers and those cool fountains,",
        "ja": "色鮮やかな花壇や涼しげな噴水の間を歩き回りたいと、彼女はどれほど切望したことだろう。"
      },
      {
        "en": "but she could not even get her head through the doorway.",
        "ja": "しかし、彼女は頭をその出入り口に通すことすらできなかった。"
      },
      {
        "en": "She went back to the table, half hoping she might find another key on it,",
        "ja": "彼女はテーブルに戻り、その上に別の鍵があるかもしれないと淡い期待を抱いた。"
      },
      {
        "en": "or at any rate a book of rules for shutting people up like telescopes:",
        "ja": "あるいは、せめて人間を望遠鏡のように縮めるための規則の本がないかと。"
      },
      {
        "en": "this time she found a little bottle on it,",
        "ja": "今回、彼女はその上に小さなボトルを見つけた。"
      },
      {
        "en": "with the words 'DRINK ME' beautifully printed on it in large letters.",
        "ja": "そこには「私を飲んで」という言葉が、大きな文字で美しく印刷されていた。"
      },
      {
        "en": "Alice drank it, and felt a curious feeling.",
        "ja": "アリスはそれを飲み干し、奇妙な感覚を覚えた。"
      },
      {
        "en": "'What a curious feeling!' said Alice; 'I must be shutting up like a telescope.'",
        "ja": "「なんて奇妙な感覚かしら！」とアリスは言った。「まるで望遠鏡のように縮んでいるみたい。」"
      },
      {
        "en": "And so it was indeed: she was now only ten inches high,",
        "ja": "そして本当にそうなった。彼女は今やわずか10インチの高さになっていた。"
      },
      {
        "en": "and her face brightened up at the thought that she was now the right size",
        "ja": "彼女の顔は、ちょうど良い大きさになったという考えにパッと明るくなった。"
      },
      {
        "en": "for going through the little door into that lovely garden.",
        "ja": "あの愛らしい庭園へと続く小さなドアを通るのに。"
      }
    ],
    "wordTranslations": {
      "second time round": "二周目に回ったとき",
      "came upon": "出くわした / 見つけた",
      "curtain": "カーテン / 幕",
      "not noticed before": "以前気づかなかった",
      "behind it": "その裏に / その後ろに",
      "inches": "インチ (1インチ＝約2.54cm)",
      "tried the key": "鍵を試した",
      "lock": "錠 / 鍵穴",
      "great delight": "この上ない喜び",
      "fitted": "ぴったり合った",
      "led into": "〜に通じていた",
      "not much larger than": "〜と大差ない大きさ",
      "rat-hole": "ネズミの穴",
      "knelt down": "ひざまずいた (kneelの過去形)",
      "looked along": "〜に沿って覗き込んだ",
      "loveliest": "最も愛らしい (lovelyの最上級)",
      "longed to": "〜したいと切望した",
      "get out of": "〜から抜け出す",
      "wander about": "歩き回る / 散策する",
      "beds of flowers": "花壇",
      "cool fountains": "涼しげな噴水",
      "get her head through": "彼女の頭を通す",
      "doorway": "出入り口",
      "went back": "戻った",
      "half hoping": "淡い期待を抱いて",
      "find another": "別のものを見つける",
      "at any rate": "とにかく / せめて",
      "shutting people up": "人間を縮める / 閉じ込める",
      "like telescopes": "望遠鏡のように",
      "bottle": "ボトル / 瓶",
      "drink me": "私を飲んで",
      "beautifully printed": "美しく印刷された",
      "large letters": "大きな文字",
      "curious feeling": "奇妙な感覚",
      "must be": "〜に違いない / 〜しているはずだ",
      "indeed": "本当に / 確かに",
      "ten inches high": "高さ10インチ (約25cm)",
      "face brightened up": "顔が明るくなった",
      "at the thought": "〜という考えに",
      "right size": "ちょうど良い大きさ",
      "going through": "通り抜けること"
    }
  },
  {
    "id": "quote-jobs-1",
    "title": "スティーブ・ジョブズの名言 1 (Steve Jobs)",
    "english": "Your time is limited, so don't waste it living someone else's life.",
    "chunks": [
      { "en": "Your time is limited,", "ja": "あなたの時間は限られている、" },
      { "en": "so don't waste it living someone else's life.", "ja": "だから他人の人生を生きて無駄にしてはいけない。" }
    ],
    "wordTranslations": {
      "limited": "限られている",
      "waste": "無駄にする",
      "someone else's": "他の誰かの"
    }
  },
  {
    "id": "quote-jobs-2",
    "title": "スティーブ・ジョブズの名言 2 (Steve Jobs)",
    "english": "The only way to do great work is to love what you do.",
    "chunks": [
      { "en": "The only way to do great work", "ja": "素晴らしい仕事をする唯一の方法は、" },
      { "en": "is to love what you do.", "ja": "自分がしていることを愛することだ。" }
    ],
    "wordTranslations": {
      "only way": "唯一の方法",
      "great work": "素晴らしい仕事",
      "love what you do": "自分の仕事を愛する"
    }
  },
  {
    "id": "quote-jobs-3",
    "title": "スティーブ・ジョブズの名言 3 (Steve Jobs)",
    "english": "Stay hungry. Stay foolish.",
    "chunks": [
      { "en": "Stay hungry.", "ja": "ハングリーであれ。" },
      { "en": "Stay foolish.", "ja": "愚かであれ。" }
    ],
    "wordTranslations": {
      "stay hungry": "ハングリーであり続ける",
      "stay foolish": "愚かであり続ける"
    }
  },
  {
    "id": "quote-einstein-1",
    "title": "アルベルト・アインシュタインの名言 1 (Albert Einstein)",
    "english": "Imagination is more important than knowledge.",
    "chunks": [
      { "en": "Imagination is more important", "ja": "想像力はより重要である、" },
      { "en": "than knowledge.", "ja": "知識よりも。" }
    ],
    "wordTranslations": {
      "imagination": "想像力",
      "important": "重要",
      "knowledge": "知識"
    }
  },
  {
    "id": "quote-einstein-2",
    "title": "アルベルト・アインシュタインの名言 2 (Albert Einstein)",
    "english": "A person who never made a mistake never tried anything new.",
    "chunks": [
      { "en": "A person who never made a mistake", "ja": "一度も過ちを犯したことのない人は、" },
      { "en": "never tried anything new.", "ja": "一度も新しいことに挑戦したことがない。" }
    ],
    "wordTranslations": {
      "mistake": "間違い / 過ち",
      "tried": "挑戦した",
      "anything new": "何か新しいこと"
    }
  },
  {
    "id": "quote-einstein-3",
    "title": "アルベルト・アインシュタインの名言 3 (Albert Einstein)",
    "english": "In the middle of difficulty lies opportunity.",
    "chunks": [
      { "en": "In the middle of difficulty", "ja": "困難の真ん中にこそ、" },
      { "en": "lies opportunity.", "ja": "機会（チャンス）が存在する。" }
    ],
    "wordTranslations": {
      "middle": "真ん中 / 中央",
      "difficulty": "困難",
      "lies": "存在する / 横たわる",
      "opportunity": "機会 / チャンス"
    }
  },
  {
    "id": "quote-teresa-1",
    "title": "マザー・テレサの名言 1 (Mother Teresa)",
    "english": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "chunks": [
      { "en": "Spread love everywhere you go.", "ja": "行く先々で愛を広げなさい。" },
      { "en": "Let no one ever come to you without leaving happier.", "ja": "出会った人が誰一人として、出会う前より幸せにならずに去ることのないように。" }
    ],
    "wordTranslations": {
      "spread": "広げる",
      "everywhere": "どこへでも",
      "without leaving": "去ることなしに",
      "happier": "より幸せな"
    }
  },
  {
    "id": "quote-teresa-2",
    "title": "マザー・テレサの名言 2 (Mother Teresa)",
    "english": "Peace begins with a smile.",
    "chunks": [
      { "en": "Peace begins", "ja": "平和は始まる、" },
      { "en": "with a smile.", "ja": "笑顔から。" }
    ],
    "wordTranslations": {
      "peace": "平和",
      "begins": "始まる",
      "smile": "笑顔"
    }
  },
  {
    "id": "quote-teresa-3",
    "title": "マザー・テレサの名言 3 (Mother Teresa)",
    "english": "If you judge people, you have no time to love them.",
    "chunks": [
      { "en": "If you judge people,", "ja": "他人を批判（ジャッジ）していると、" },
      { "en": "you have no time to love them.", "ja": "彼らを愛する時間がなくなってしまう。" }
    ],
    "wordTranslations": {
      "judge": "判断する / 批判する",
      "have no time": "時間がない"
    }
  },
  {
    "id": "quote-keller-1",
    "title": "ヘレン・ケラーの名言 1 (Helen Keller)",
    "english": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "chunks": [
      { "en": "The best and most beautiful things in the world", "ja": "世界で最も素晴らしく、最も美しいものは、" },
      { "en": "cannot be seen or even touched -", "ja": "目で見たり、触れたりすることはできない。" },
      { "en": "they must be felt with the heart.", "ja": "それらは心で感じなければならないのだ。" }
    ],
    "wordTranslations": {
      "beautiful": "美しい",
      "cannot be seen": "見ることができない",
      "touched": "触れられた",
      "felt": "感じられた"
    }
  },
  {
    "id": "quote-keller-2",
    "title": "ヘレン・ケラーの名言 2 (Helen Keller)",
    "english": "Keep your face to the sunshine and you cannot see a shadow.",
    "chunks": [
      { "en": "Keep your face to the sunshine", "ja": "常に顔を太陽に向けていなさい、" },
      { "en": "and you cannot see a shadow.", "ja": "そうすれば影を見ることはない。" }
    ],
    "wordTranslations": {
      "sunshine": "太陽の光 / 日差し",
      "shadow": "影"
    }
  },
  {
    "id": "quote-disney-1",
    "title": "ウォルト・ディズニーの名言 1 (Walt Disney)",
    "english": "All our dreams can come true, if we have the courage to pursue them.",
    "chunks": [
      { "en": "All our dreams can come true,", "ja": "私たちの夢はすべて叶う、" },
      { "en": "if we have the courage to pursue them.", "ja": "もし追い求める勇気があるならば。" }
    ],
    "wordTranslations": {
      "dreams": "夢",
      "come true": "実現する",
      "courage": "勇気",
      "pursue": "追い求める"
    }
  },
  {
    "id": "quote-disney-2",
    "title": "ウォルト・ディズニーの名言 2 (Walt Disney)",
    "english": "The way to get started is to quit talking and begin doing.",
    "chunks": [
      { "en": "The way to get started", "ja": "物事を始める方法は、" },
      { "en": "is to quit talking and begin doing.", "ja": "話すのをやめてとにかく始めることだ。" }
    ],
    "wordTranslations": {
      "get started": "始める",
      "quit": "やめる",
      "talking": "話すこと",
      "begin doing": "行動し始める"
    }
  },
  {
    "id": "quote-disney-3",
    "title": "ウォルト・ディズニーの名言 3 (Walt Disney)",
    "english": "If you can dream it, you can do it.",
    "chunks": [
      { "en": "If you can dream it,", "ja": "夢見ることができれば、" },
      { "en": "you can do it.", "ja": "それは実現できる。" }
    ],
    "wordTranslations": {
      "dream": "夢見る",
      "do it": "実行する"
    }
  },
  {
    "id": "quote-churchill-1",
    "title": "ウィンストン・チャーチルの名言 1 (Winston Churchill)",
    "english": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "chunks": [
      { "en": "Success is not final,", "ja": "成功は決定的なものではなく、" },
      { "en": "failure is not fatal:", "ja": "失敗は致命的なものではない。" },
      { "en": "it is the courage to continue that counts.", "ja": "大切なのは、挑戦を続ける勇気である。" }
    ],
    "wordTranslations": {
      "success": "成功",
      "final": "最終的な / 決定的な",
      "failure": "失敗",
      "fatal": "致命的な",
      "courage": "勇気",
      "continue": "続ける",
      "counts": "重要である / 価値がある"
    }
  },
  {
    "id": "quote-churchill-2",
    "title": "ウィンストン・チャーチルの名言 2 (Winston Churchill)",
    "english": "If you are going through hell, keep going.",
    "chunks": [
      { "en": "If you are going through hell,", "ja": "もし地獄のような辛い日々を通っているなら、" },
      { "en": "keep going.", "ja": "とにかく進み続けなさい。" }
    ],
    "wordTranslations": {
      "going through": "経験している / 通り抜けている",
      "hell": "地獄",
      "keep going": "進み続ける"
    }
  },
  {
    "id": "quote-edison-1",
    "title": "トーマス・エジソンの名言 1 (Thomas Edison)",
    "english": "I have not failed. I've just found 10,000 ways that won't work.",
    "chunks": [
      { "en": "I have not failed.", "ja": "私は失敗したのではない。" },
      { "en": "I've just found 10,000 ways that won't work.", "ja": "ただ、うまくいかない方法を1万通り見つけただけだ。" }
    ],
    "wordTranslations": {
      "failed": "失敗した",
      "just": "ただ〜だけ",
      "found": "見つけた",
      "won't work": "機能しない / うまくいかない"
    }
  },
  {
    "id": "quote-edison-2",
    "title": "トーマス・エジソンの名言 2 (Thomas Edison)",
    "english": "Genius is one percent inspiration, ninety-nine percent perspiration.",
    "chunks": [
      { "en": "Genius is one percent inspiration,", "ja": "天才とは1パーセントのひらめきと、" },
      { "en": "ninety-nine percent perspiration.", "ja": "99パーセントの努力（汗）である。" }
    ],
    "wordTranslations": {
      "genius": "天才",
      "inspiration": "ひらめき / インスピレーション",
      "perspiration": "努力 / 発汗"
    }
  },
  {
    "id": "quote-hepburn-1",
    "title": "オードリー・ヘプバーンの名言 1 (Audrey Hepburn)",
    "english": "Nothing is impossible, the word itself says 'I'm possible'!",
    "chunks": [
      { "en": "Nothing is impossible,", "ja": "不可能なことなど何もない、" },
      { "en": "the word itself says 'I'm possible'!", "ja": "言葉そのものが「私は可能（I'm possible）」と言っているのだから！" }
    ],
    "wordTranslations": {
      "nothing": "何もない",
      "impossible": "不可能",
      "itself": "それ自体",
      "possible": "可能"
    }
  },
  {
    "id": "quote-hepburn-2",
    "title": "オードリー・ヘプバーンの名言 2 (Audrey Hepburn)",
    "english": "The most important thing is to enjoy your life - to be happy - it's all that matters.",
    "chunks": [
      { "en": "The most important thing is to enjoy your life -", "ja": "最も重要なのは、人生を楽しむこと、" },
      { "en": "to be happy - it's all that matters.", "ja": "幸せになること。それだけがすべてだ。" }
    ],
    "wordTranslations": {
      "important": "重要な",
      "enjoy": "楽しむ",
      "matters": "重要である / 問題である"
    }
  },
  {
    "id": "quote-winfrey-1",
    "title": "オプラ・ウィンフリーの名言 1 (Oprah Winfrey)",
    "english": "The biggest adventure you can take is to live the life of your dreams.",
    "chunks": [
      { "en": "The biggest adventure you can take", "ja": "あなたができる最大の冒険は、" },
      { "en": "is to live the life of your dreams.", "ja": "夢に描いた人生を生きることだ。" }
    ],
    "wordTranslations": {
      "biggest": "最大の",
      "adventure": "冒険",
      "live the life": "人生を生きる",
      "dreams": "夢"
    }
  },
  {
    "id": "quote-winfrey-2",
    "title": "オプラ・ウィンフリーの名言 2 (Oprah Winfrey)",
    "english": "Turn your wounds into wisdom.",
    "chunks": [
      { "en": "Turn your wounds", "ja": "あなたの傷を、" },
      { "en": "into wisdom.", "ja": "知恵へと変えなさい。" }
    ],
    "wordTranslations": {
      "turn A into B": "AをBに変える",
      "wounds": "傷 / 負傷",
      "wisdom": "知恵"
    }
  },
  {
    "id": "quote-jordan-1",
    "title": "マイケル・ジョーダンの名言 1 (Michael Jordan)",
    "english": "I can accept failure, everyone fails at something. But I can't accept not trying.",
    "chunks": [
      { "en": "I can accept failure,", "ja": "失敗を受け入れることはできる、" },
      { "en": "everyone fails at something.", "ja": "誰でも何かに失敗する。" },
      { "en": "But I can't accept not trying.", "ja": "しかし、挑戦すらしないことは受け入れられない。" }
    ],
    "wordTranslations": {
      "accept": "受け入れる",
      "failure": "失敗",
      "fails": "失敗する",
      "trying": "挑戦すること"
    }
  },
  {
    "id": "quote-jordan-2",
    "title": "マイケル・ジョーダンの名言 2 (Michael Jordan)",
    "english": "I've failed over and over and over again in my life. And that is why I succeed.",
    "chunks": [
      { "en": "I've failed over and over and over again in my life.", "ja": "私は人生で何度も何度も何度も失敗してきた。" },
      { "en": "And that is why I succeed.", "ja": "そして、それこそが私が成功する理由なのだ。" }
    ],
    "wordTranslations": {
      "failed": "失敗した",
      "over and over again": "何度も何度も繰り返し",
      "succeed": "成功する"
    }
  },
  {
    "id": "quote-mandela-1",
    "title": "ネルソン・マンデラの名言 1 (Nelson Mandela)",
    "english": "It always seems impossible until it's done.",
    "chunks": [
      { "en": "It always seems impossible", "ja": "それは常に不可能に思える、" },
      { "en": "until it's done.", "ja": "成し遂げられるまでは。" }
    ],
    "wordTranslations": {
      "seems": "思える",
      "impossible": "不可能",
      "until": "〜まで",
      "done": "行われる"
    }
  },
  {
    "id": "quote-mandela-2",
    "title": "ネルソン・マンデラの名言 2 (Nelson Mandela)",
    "english": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "chunks": [
      { "en": "The greatest glory in living", "ja": "生きる上での最大の栄光は、" },
      { "en": "lies not in never falling,", "ja": "一度も転ばないことではなく、" },
      { "en": "but in rising every time we fall.", "ja": "転ぶたびに起き上がることにある。" }
    ],
    "wordTranslations": {
      "greatest": "最大の",
      "glory": "栄光",
      "falling": "転ぶこと",
      "rising": "起き上がること"
    }
  },
  {
    "id": "quote-socrates-1",
    "title": "ソクラテスの名言 1 (Socrates)",
    "english": "The only true wisdom is in knowing you know nothing.",
    "chunks": [
      { "en": "The only true wisdom", "ja": "唯一の真の知恵とは、" },
      { "en": "is in knowing you know nothing.", "ja": "自分が何も知らないと知ることである（無知の知）。" }
    ],
    "wordTranslations": {
      "true": "真実の",
      "wisdom": "知恵",
      "knowing": "知ること"
    }
  },
  {
    "id": "quote-socrates-2",
    "title": "ソクラテスの名言 2 (Socrates)",
    "english": "An unexamined life is not worth living.",
    "chunks": [
      { "en": "An unexamined life", "ja": "吟味されない（深く考えない）人生は、" },
      { "en": "is not worth living.", "ja": "生きるに値しない。" }
    ],
    "wordTranslations": {
      "unexamined": "吟味されていない",
      "worth living": "生きる価値がある"
    }
  },
  {
    "id": "quote-shakespeare-1",
    "title": "ウィリアム・シェイクスピアの名言 1 (William Shakespeare)",
    "english": "To be, or not to be, that is the question.",
    "chunks": [
      { "en": "To be, or not to be,", "ja": "生きるべきか、死ぬべきか、" },
      { "en": "that is the question.", "ja": "それが問題だ。" }
    ],
    "wordTranslations": {
      "question": "問題 / 疑問"
    }
  },
  {
    "id": "quote-shakespeare-2",
    "title": "ウィリアム・シェイクスピアの名言 2 (William Shakespeare)",
    "english": "All the world's a stage, and all the men and women merely players.",
    "chunks": [
      { "en": "All the world's a stage,", "ja": "この世はすべて一つの舞台であり、" },
      { "en": "and all the men and women merely players.", "ja": "すべての男も女も、単なる役者にすぎない。" }
    ],
    "wordTranslations": {
      "world": "世界 / この世",
      "stage": "舞台",
      "merely": "単に / ただの",
      "players": "役者 / 演者"
    }
  }
];

if (typeof window !== 'undefined') {
  window.defaultSentences = sentences;
} else if (typeof module !== 'undefined') {
  module.exports = sentences;
}
