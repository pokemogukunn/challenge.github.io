function generateKanjiQuestion(grade) {
    var kanjiData = {
        1: [
            { kanji: "日", yomis: ["ひ", "にち", "じつ"] },
            { kanji: "月", yomis: ["つき", "げつ", "がつ"] },
            { kanji: "火", yomis: ["ひ", "か"] },
            { kanji: "水", yomis: ["みず", "すい"] },
            { kanji: "木", yomis: ["き", "もく", "ぼく"] },
            { kanji: "金", yomis: ["かね", "きん"] },
            { kanji: "土", yomis: ["つち", "ど"] },
            { kanji: "山", yomis: ["やま", "さん"] },
            { kanji: "川", yomis: ["かわ", "せん"] }
            // 他の小1の漢字も追加
        ],
        2: [
            { kanji: "光", yomis: ["ひかり", "こう"] },
            { kanji: "田", yomis: ["た", "でん"] },
            { kanji: "町", yomis: ["まち", "ちょう"] },
            { kanji: "空", yomis: ["そら", "くう"] },
            { kanji: "花", yomis: ["はな", "か"] },
            { kanji: "虫", yomis: ["むし", "ちゅう"] },
            { kanji: "鳥", yomis: ["とり", "ちょう"] },
            { kanji: "魚", yomis: ["さかな", "ぎょ"] }
            // 他の小2の漢字も追加
        ],
        3: [
            { kanji: "時", yomis: ["とき", "じ"] },
            { kanji: "間", yomis: ["あいだ", "かん", "けん"] },
            { kanji: "秒", yomis: ["びょう"] },
            { kanji: "分", yomis: ["ふん", "ぶん", "ぷん"] },
            { kanji: "円", yomis: ["えん"] },
            { kanji: "円周", yomis: ["えんしゅう"] },
            { kanji: "記録", yomis: ["きろく"] },
            { kanji: "時計", yomis: ["とけい"] }
            // 他の小3の漢字も追加
        ],
        // 以下、他の学年の漢字データを追加
        4: [
            { kanji: "学", yomis: ["まなぶ", "がく"] },
            { kanji: "校", yomis: ["こう"] },
            { kanji: "数", yomis: ["かず", "すう"] },
            { kanji: "点", yomis: ["てん"] }
            // 他の小4の漢字も追加
        ],
        5: [
            { kanji: "海", yomis: ["うみ", "かい"] },
            { kanji: "動", yomis: ["うごく", "どう"] },
            { kanji: "物", yomis: ["もの", "ぶつ", "もつ"] },
            { kanji: "理", yomis: ["ことわり", "り"] }
            // 他の小5の漢字も追加
        ],
        6: [
            { kanji: "国", yomis: ["くに", "こく"] },
            { kanji: "語", yomis: ["かたる", "ご"] },
            { kanji: "教", yomis: ["おしえる", "きょう"] },
            { kanji: "育", yomis: ["そだてる", "いく"] }
            // 他の小6の漢字も追加
        ],
        7: [
            { kanji: "大", yomis: ["おおきい", "だい", "たい"] },
            { kanji: "小", yomis: ["ちいさい", "しょう"] },
            { kanji: "高", yomis: ["たかい", "こう"] },
            { kanji: "安", yomis: ["やすい", "あん"] }
            // 他の中1の漢字も追加
        ],
        8: [
            { kanji: "新", yomis: ["あたらしい", "しん"] },
            { kanji: "古", yomis: ["ふるい", "こ"] },
            { kanji: "長", yomis: ["ながい", "ちょう"] },
            { kanji: "短", yomis: ["みじかい", "たん"] }
            // 他の中2の漢字も追加
        ],
        9: [
            { kanji: "明", yomis: ["あかるい", "めい"] },
            { kanji: "暗", yomis: ["くらい", "あん"] },
            { kanji: "楽", yomis: ["たのしい", "がく", "らく"] },
            { kanji: "苦", yomis: ["にがい", "くるしい", "く"] }
            // 他の中3の漢字も追加
        ],
        10: [
            { kanji: "理", yomis: ["ことわり", "り"] },
            { kanji: "知", yomis: ["しる", "ち"] },
            { kanji: "意", yomis: ["い"] },
            { kanji: "思", yomis: ["おもう", "し"] }
            // 他の高1の漢字も追加
        ],
        11: [
            { kanji: "愛", yomis: ["あい"] },
            { kanji: "知", yomis: ["しる", "ち"] },
            { kanji: "信", yomis: ["しんじる", "しん"] },
            { kanji: "念", yomis: ["ねん"] }
            // 他の高2の漢字も追加
        ],
        12: [
            { kanji: "学", yomis: ["まなぶ", "がく"] },
            { kanji: "問", yomis: ["とい", "もん"] },
            { kanji: "考", yomis: ["かんがえる", "こう"] },
            { kanji: "察", yomis: ["さっする", "さつ"] }
            // 他の高3の漢字も追加
        ]
    };

    var kanjiList = kanjiData[grade] || [{ kanji: "漢字", yomis: ["かんじ"] }];
    var randomKanji = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    return { question: `${randomKanji.kanji} の読みは？`, yomis: randomKanji.yomis };
}
