document.getElementById('audioPlayerContainer').addEventListener('click', function() {
    this.classList.toggle('expanded');
});

// Handle URL hash to show the appropriate chapter
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && !isNaN(hash) && hash > 0 && hash <= 114) {
        showChapter(hash);
    } else if (window.location.hostname === 'muslim1446.github.io') {
        window.location.replace('/sura.html');
    }
});

const chapters = {
 1: { "title": "Al-Fatiha", "verses": 7 },
    2: { "title": "Al-Baqarah", "verses": 286 },
    3: { "title": "Aal-E-Imran", "verses": 200 },
    4: { "title": "An-Nisa", "verses": 176 },
    5: { "title": "Al-Ma'idah", "verses": 120 },
    6: { "title": "Al-An'am", "verses": 165 },
    7: { "title": "Al-A'raf", "verses": 206 },
    8: { "title": "Al-Anfal", "verses": 75 },
    9: { "title": "At-Tawbah", "verses": 129 },
    10: { "title": "Yunus", "verses": 109 },
    11: { "title": "Hud", "verses": 123 },
    12: { "title": "Yusuf", "verses": 111 },
    13: { "title": "Ar-Ra'd", "verses": 43 },
    14: { "title": "Ibrahim", "verses": 52 },
    15: { "title": "Al-Hijr", "verses": 99 },
    16: { "title": "An-Nahl", "verses": 128 },
    17: { "title": "Al-Isra", "verses": 111 },
    18: { "title": "Al-Kahf", "verses": 110 },
    19: { "title": "Maryam", "verses": 98 },
    20: { "title": "Ta-Ha", "verses": 135 },
    21: { "title": "Al-Anbiya", "verses": 112 },
    22: { "title": "Al-Hajj", "verses": 78 },
    23: { "title": "Al-Mu'minun", "verses": 118 },
    24: { "title": "An-Nur", "verses": 64 },
    25: { "title": "Al-Furqan", "verses": 77 },
    26: { "title": "Ash-Shu'ara", "verses": 227 },
    27: { "title": "An-Naml", "verses": 93 },
    28: { "title": "Al-Qasas", "verses": 88 },
    29: { "title": "Al-Ankabut", "verses": 69 },
    30: { "title": "Ar-Rum", "verses": 60 },
    31: { "title": "Luqman", "verses": 34 },
    32: { "title": "As-Sajda", "verses": 30 },
    33: { "title": "Al-Ahzab", "verses": 73 },
    34: { "title": "Saba", "verses": 54 },
    35: { "title": "Fatir", "verses": 45 },
    36: { "title": "Ya-Sin", "verses": 83 },
    37: { "title": "As-Saffat", "verses": 182 },
    38: { "title": "Sad", "verses": 88 },
    39: { "title": "Az-Zumar", "verses": 75 },
    40: { "title": "Ghafir", "verses": 85 },
    41: { "title": "Fussilat", "verses": 54 },
    42: { "title": "Ash-Shura", "verses": 53 },
    43: { "title": "Az-Zukhruf", "verses": 89 },
    44: { "title": "Ad-Dukhan", "verses": 59 },
    45: { "title": "Al-Jathiya", "verses": 37 },
    46: { "title": "Al-Ahqaf", "verses": 35 },
    47: { "title": "Muhammad", "verses": 38 },
    48: { "title": "Al-Fath", "verses": 29 },
    49: { "title": "Al-Hujurat", "verses": 18 },
    50: { "title": "Qaf", "verses": 45 },
    51: { "title": "Adh-Dhariyat", "verses": 60 },
    52: { "title": "At-Tur", "verses": 49 },
    53: { "title": "An-Najm", "verses": 62 },
    54: { "title": "Al-Qamar", "verses": 55 },
    55: { "title": "Ar-Rahman", "verses": 78 },
    56: { "title": "Al-Waqia", "verses": 96 },
    57: { "title": "Al-Hadid", "verses": 29 },
    58: { "title": "Al-Mujadila", "verses": 22 },
    59: { "title": "Al-Hashr", "verses": 24 },
    60: { "title": "Al-Mumtahina", "verses": 13 },
    61: { "title": "As-Saff", "verses": 14 },
    62: { "title": "Al-Jumua", "verses": 11 },
    63: { "title": "Al-Munafiqun", "verses": 11 },
    64: { "title": "At-Taghabun", "verses": 18 },
    65: { "title": "At-Talaq", "verses": 12 },
    66: { "title": "At-Tahrim", "verses": 12 },
    67: { "title": "Al-Mulk", "verses": 30 },
    68: { "title": "Al-Qalam", "verses": 52 },
    69: { "title": "Al-Haaqqa", "verses": 52 },
    70: { "title": "Al-Maarij", "verses": 44 },
    71: { "title": "Nuh", "verses": 28 },
    72: { "title": "Al-Jinn", "verses": 28 },
    73: { "title": "Al-Muzzammil", "verses": 20 },
    74: { "title": "Al-Muddathir", "verses": 56 },
    75: { "title": "Al-Qiyama", "verses": 40 },
    76: { "title": "Al-Insan", "verses": 31 },
    77: { "title": "Al-Mursalat", "verses": 50 },
    78: { "title": "An-Naba", "verses": 40 },
    79: { "title": "An-Naziat", "verses": 46 },
    80: { "title": "Abasa", "verses": 42 },
    81: { "title": "At-Takwir", "verses": 29 },
    82: { "title": "Al-Infitar", "verses": 19 },
    83: { "title": "Al-Mutaffifin", "verses": 36 },
    84: { "title": "Al-Inshiqaq", "verses": 25 },
    85: { "title": "Al-Buruj", "verses": 22 },
    86: { "title": "At-Tariq", "verses": 17 },
    87: { "title": "Al-Ala", "verses": 19 },
    88: { "title": "Al-Ghashiya", "verses": 26 },
    89: { "title": "Al-Fajr", "verses": 30 },
    90: { "title": "Al-Balad", "verses": 20 },
    91: { "title": "Ash-Shams", "verses": 15 },
    92: { "title": "Al-Lail", "verses": 21 },
    93: { "title": "Ad-Duha", "verses": 11 },
    94: { "title": "Ash-Sharh", "verses": 8 },
    95: { "title": "At-Tin", "verses": 8 },
    96: { "title": "Al-Alaq", "verses": 19 },
    97: { "title": "Al-Qadr", "verses": 5 },
    98: { "title": "Al-Bayyina", "verses": 8 },
    99: { "title": "Az-Zalzala", "verses": 8 },
    100: { "title": "Al-Adiyat", "verses": 11 },
    101: { "title": "Al-Qaria", "verses": 11 },
    102: { "title": "At-Takathur", "verses": 8 },
    103: { "title": "Al-Asr", "verses": 3 },
    104: { "title": "Al-Humaza", "verses": 9 },
    105: { "title": "Al-Fil", "verses": 5 },
    106: { "title": "Quraish", "verses": 4 },
    107: { "title": "Al-Ma'un", "verses": 7 },
    108: { "title": "Al-Kawthar", "verses": 3 },
    109: { "title": "Al-Kafirun", "verses": 6 },
    110: { "title": "An-Nasr", "verses": 3 },
    111: { "title": "Al-Masad", "verses": 5 },
    112: { "title": "Al-Ikhlas", "verses": 4 },
    113: { "title": "Al-Falaq", "verses": 5 },
    114: { "title": "An-Nas", "verses": 6 }
    // Add other chapters as needed
};

const arabic = {
    "1": { "title": "الفاتِحة" },
    "2": { "title": "البَقَرَة" },
    "3": { "title": "آل عِمْرَان" },
  "4": { "title": "النِّسَاء" },
  "5": { "title": "المَائِدَة" },
  "6": { "title": "الأَنْعَام" },
  "7": { "title": "الأعْرَاف" },
  "8": { "title": "الأنْفَال" },
  "9": { "title": "التَّوْبَة" },
  "10": { "title": "يُونُس" },
  "11": { "title": "هُود" },
  "12": { "title": "يُوسُف" },
  "13": { "title": "الرَّعْد" },
  "14": { "title": "إِبْرَاهِيم" },
  "15": { "title": "الحِجْر" },
  "16": { "title": "النَّحْل" },
  "17": { "title": "الإِسْرَاء" },
  "18": { "title": "الكَهْف" },
  "19": { "title": "مَرْيَم" },
  "20": { "title": "طَه" },
  "21": { "title": "الأنْبِيَاء" },
  "22": { "title": "الحَجّ" },
  "23": { "title": "المُؤْمِنُون" },
  "24": { "title": "النُّور" },
  "25": { "title": "الفرْقَان" },
  "26": { "title": "الشُّعَرَاء" },
  "27": { "title": "النَّمْل" },
  "28": { "title": "القصَص" },
  "29": { "title": "العَنْكَبُوت" },
  "30": { "title": "الرُّوم" },
  "31": { "title": "لقْمَان" },
  "32": { "title": "السَّجْدَة" },
  "33": { "title": "الأحْزَاب" },
  "34": { "title": "سبَإ" },
  "35": { "title": "فَاطِر" },
  "36": { "title": "يَس" },
  "37": { "title": "الصَّافَّات" },
  "38": { "title": "ص" },
  "39": { "title": "الزُّمر" },
  "40": { "title": "غَافِر" },
  "41": { "title": "فُصِّلَت" },
  "42": { "title": "الشُّورَى" },
  "43": { "title": "الزُّخْرُف" },
  "44": { "title": "الدُّخَان" },
  "45": { "title": "الجَاثِيَة" },
  "46": { "title": "الأحْقَاف" },
  "47": { "title": "مُحَمَّد" },
  "48": { "title": "الفتح" },
  "49": { "title": "الحُجُرات" },
  "50": { "title": "ق" },
  "51": { "title": "الذَّارِيَات" },
  "52": { "title": "الطُّور" },
  "53": { "title": "النَّجْم" },
  "54": { "title": "القَمَر" },
  "55": { "title": "الرحْمَـن" },
  "56": { "title": "الواقِعَة" },
  "57": { "title": "الْحَدِيد" },
  "58": { "title": "المُجَادَلَة" },
  "59": { "title": "الحَشْر" },
  "60": { "title": "المُمْتَحَنَة" },
  "61": { "title": "الصَّفّ" },
  "62": { "title": "الْجُمُعَة" },
  "63": { "title": "المُنَافِقُون" },
  "64": { "title": "التَّغَابُن" },
  "65": { "title": "الطَّلاق" },
  "66": { "title": "التحْرِيم" },
  "67": { "title": "الْمُلْك" },
  "68": { "title": "الْقَلَم" },
  "69": { "title": "الْحَاقَّة" },
  "70": { "title": "المَعَارِج" },
  "71": { "title": "نُوح" },
  "72": { "title": "الْجِنّ" },
  "73": { "title": "المُزَّمِّل" },
  "74": { "title": "الْمُدَّثِّر" },
  "75": { "title": "الْقِيَامَة" },
  "76": { "title": "الإنْسَان" },
  "77": { "title": "الْمُرْسَلَات" },
  "78": { "title": "النَبَإ" },
  "79": { "title": "النَّازِعَات" },
  "80": { "title": "عَبَس" },
  "81": { "title": "التَّكْوِير" },
  "82": { "title": "الإنْفِطَار" },
  "83": { "title": "المُطَفِّفِين" },
  "84": { "title": "الإنْشِقَاق" },
  "85": { "title": "البُرُوج" },
  "86": { "title": "الطَّارِق" },
  "87": { "title": "الأعلى" },
  "88": { "title": "الْغَاشِيَة" },
  "89": { "title": "الفَجْر" },
  "90": { "title": "الْبَلَد" },
  "91": { "title": "الشَّمْس" },
  "92": { "title": "الليل" },
  "93": { "title": "الضُّحَى" },
  "94": { "title": "الشَّرْح" },
  "95": { "title": "التِّين" },
  "96": { "title": "الْعَلَق" },
  "97": { "title": "الْقَدْر" },
  "98": { "title": "الْبَيِّنَة" },
  "99": { "title": "الزلزَلَة" },
  "100": { "title": "العَادِيَات" },
  "101": { "title": "الْقَارِعَة" },
  "102": { "title": "التَّكَاثُر" },
  "103": { "title": "الْعَصْر" },
  "104": { "title": "الْهُمَزَة" },
  "105": { "title": "الفِيل" },
  "106": { "title": "قُرَيْش" },
  "107": { "title": "الْمَاعُون" },
  "108": { "title": "الْكَوْثَر" },
  "109": { "title": "الْكَافِرُون" },
  "110": { "title": "النَّصْر" },
  "111": { "title": "الْمَسَد" },
  "112": { "title": "الإِخْلَاص" },
  "113": { "title": "الفَلَق" },
  "114": { "title": "النَّاس" }
    // Add other chapters as needed
};

const arabicmean = {
    1: { "title": "The Opening" },
    2: { "title": "The Cow" },
     3: { "title": "The Family of Imran" },
      4: { "title": "The Women" },
5: { "title": "The Table Spread" },
6: { "title": "The Cattle" },
7: { "title": "The Heights" },
8: { "title": "The Spoils of War" },
9: { "title": "The Repentance" },
10: { "title": "Jonah" },
11: { "title": "Hud" },
12: { "title": "Joseph" },
13: { "title": "The Thunder" },
14: { "title": "Abraham" },
15: { "title": "The Rocky Tract" },
16: { "title": "The Bee" },
17: { "title": "The Night Journey" },
18: { "title": "The Cave" },
19: { "title": "Mary" },
20: { "title": "Ta-Ha" },
21: { "title": "The Prophets" },
22: { "title": "The Pilgrimage" },
23: { "title": "The Believers" },
24: { "title": "The Light" },
25: { "title": "The Criterion" },
26: { "title": "The Poets" },
27: { "title": "The Ant" },
28: { "title": "The Stories" },
29: { "title": "The Spider" },
30: { "title": "The Romans" },
31: { "title": "Luqman" },
32: { "title": "The Prostration" },
33: { "title": "The Combined Forces" },
34: { "title": "Sheba" },
35: { "title": "The Originator" },
36: { "title": "Ya-Sin" },
37: { "title": "Those who set the Ranks" },
38: { "title": "Sad" },
39: { "title": "The Groups" },
40: { "title": "The Forgiver" },
41: { "title": "Explained in Detail" },
42: { "title": "The Consultation" },
43: { "title": "The Gold Adornments" },
44: { "title": "The Smoke" },
45: { "title": "The Crouching" },
46: { "title": "The Wind-Curved Sandhills" },
47: { "title": "Muhammad" },
48: { "title": "The Victory" },
49: { "title": "The Rooms" },
50: { "title": "Qaf" },
51: { "title": "The Winnowing Winds" },
52: { "title": "The Mount" },
53: { "title": "The Star" },
54: { "title": "The Moon" },
55: { "title": "The Beneficent" },
56: { "title": "The Inevitable" },
57: { "title": "The Iron" },
58: { "title": "The Pleading Woman" },
59: { "title": "The Exile" },
60: { "title": "She that is to be Examined" },
61: { "title": "The Ranks" },
62: { "title": "The Congregation" },
63: { "title": "The Hypocrites" },
64: { "title": "The Mutual Disillusion" },
65: { "title": "The Divorce" },
66: { "title": "The Prohibition" },
67: { "title": "The Sovereignty" },
68: { "title": "The Pen" },
69: { "title": "The Reality" },
70: { "title": "The Ascending Stairways" },
71: { "title": "Noah" },
72: { "title": "The Jinn" },
73: { "title": "The Enshrouded One" },
74: { "title": "The Cloaked One" },
75: { "title": "The Resurrection" },
76: { "title": "Man" },
77: { "title": "The Emissaries" },
78: { "title": "The Tidings" },
79: { "title": "Those who Drag Forth" },
80: { "title": "He Frowned" },
81: { "title": "The Overthrowing" },
82: { "title": "The Cleaving" },
83: { "title": "Defrauding" },
84: { "title": "The Splitting Open" },
85: { "title": "The Mansions of the Stars" },
86: { "title": "The Morning Star" },
87: { "title": "The Most High" },
88: { "title": "The Overwhelming" },
89: { "title": "The Dawn" },
90: { "title": "The City" },
91: { "title": "The Sun" },
92: { "title": "The Night" },
93: { "title": "The Morning Hours" },
94: { "title": "The Relief" },
95: { "title": "The Fig" },
96: { "title": "The Clot" },
97: { "title": "The Power" },
98: { "title": "The Clear Proof" },
99: { "title": "The Earthquake" },
100: { "title": "The Courser" },
101: { "title": "The Calamity" },
102: { "title": "The Rivalry in Worldly Increase" },
103: { "title": "The Declining Day" },
104: { "title": "The Traducer" },
105: { "title": "The Elephant" },
106: { "title": "Quraysh" },
107: { "title": "The Small Kindnesses" },
108: { "title": "The Abundance" },
109: { "title": "The Disbelievers" },
110: { "title": "The Divine Support" },
111: { "title": "The Palm Fiber" },
112: { "title": "The Sincerity" },
113: { "title": "The Daybreak" },
114: { "title": "The Mankind" }
    // Add other chapters as needed
};

const englishXMLUrl = 'https://blue-carlina-25.tiiny.site/quran_xml/en-sahih.xml';
const indonesianXMLUrl = 'https://blue-carlina-25.tiiny.site/quran_xml/id-indonesian.xml';

// Generate Chapter List
function generateChapterList() {
    const chaptersList = document.getElementById('chapters-list');
    Object.keys(chapters).forEach(chapNum => {
        const chapter = chapters[chapNum];
        const chapterDiv = document.createElement('div');
        chapterDiv.classList.add('chapter');
        chapterDiv.innerText = `${chapNum}. ${chapter.title} (${chapter.verses} ayahs)`;
        chapterDiv.onclick = () => showChapter(chapNum);

        // Apply styles
        chapterDiv.style.fontFamily = "'Young Serif', serif";
        chapterDiv.style.borderRadius = '10px';
        chapterDiv.style.color = '#ffffff';
        chapterDiv.style.padding = '10px';
        chapterDiv.style.margin = '5px 0';

        chaptersList.appendChild(chapterDiv);
    });
}

async function fetchXML(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const text = await response.text();
        console.log(`Fetched XML from ${url}`);
        const parser = new DOMParser();
        return parser.parseFromString(text, 'text/xml');
    } catch (error) {
        console.error(`Error fetching XML from ${url}:`, error);
        return null;
    }
}

function parseXML(xml) {
    const translations = {};
    if (!xml) return translations;
    const suras = xml.getElementsByTagName('sura');
    for (let sura of suras) {
        const index = sura.getAttribute('index');
        translations[index] = {};
        const ayas = sura.getElementsByTagName('aya');
        for (let aya of ayas) {
            const verseIndex = aya.getAttribute('index');
            const text = aya.getAttribute('text');
            translations[index][verseIndex] = text;
        }
    }
    return translations;
}

async function fetchTafseerData(chapNum) {
    try {
        const response = await fetch(`https://equran.id/api/v2/tafsir/${chapNum}`);
        const data = await response.json();

        if (data.code === 200) {
            const tafseerData = data.data.tafsir;
            tafseerData.forEach(tafsir => {
                const tafseerTextDiv = document.getElementById(`tafseer-text-${tafsir.ayat}`);
                if (tafseerTextDiv) {
                    tafseerTextDiv.innerHTML = `<p>${tafsir.teks} <a href="https://muslim1446.github.io/tafseer/main/?sura=${chapNum}">Other Tafseer (Indonesia/English)</a></p>`;
                }
            });
        } else {
            console.error('Tafseer data not available.');
        }
    } catch (error) {
        console.error('Error fetching tafseer data:', error);
    }
}

function toggleTafseerText(ayatNumber) {
    const tafseerText = document.getElementById(`tafseer-text-${ayatNumber}`);
    if (tafseerText) {
        tafseerText.style.display = tafseerText.style.display === 'none' || tafseerText.style.display === '' ? 'block' : 'none';
    }
}

function adjustImageSize() {
    const images = document.querySelectorAll('.arabic-image');
    images.forEach(img => {
        img.style.width = window.innerWidth < 768 ? '100%' : 'auto';
        img.style.height = 'auto'; // Maintain aspect ratio
    });
}

async function showChapter(chapNum) {
    const chapterTitleElement = document.getElementById('chapter-title');
    const verseContainer = document.getElementById('verse-container');
    const loadingElement = document.getElementById('loading');

    if (!chapters[chapNum]) {
        console.warn('Invalid chapter number:', chapNum);
        return;
    }

    // Update the page title and chapter title
    document.title = `Surah ${chapters[chapNum].title} - The Noble Qur'an`;
    chapterTitleElement.innerHTML = `
        Surah ${chapNum}: ${chapters[chapNum].title} <a class="cback" href="/sura" target="_self">Back</a>
        <div id="title-container">
            <a class="cback" href="tafseer/?sura=${chapNum}" target="_self">See Tafseer</a>
            <div id="title-container">
                <span style="font-family: 'Reem Kufi', sans-serif; font-size: 60px;">${arabic[chapNum].title}</span>
                <div>
                    <span style="font-style: italic; font-size: 0.8em;">${arabicmean[chapNum].title}</span>
                    <div id="bismillah-container" class="${chapNum === '9' || chapNum === '1' ? 'hidden' : ''}">
                        <hr>
                        <div class="iarabic">أعوذ بالله من الشيطان الرجيم</div>
                        <div class="iarabic0 ${chapNum === '9' || chapNum === '1' ? 'hidden' : ''}">
                            <div>بسم الله الرحمن الرحيم</div>
                        </div>
                        <div class="ienglish">I seek refuge in Allāh from Satan being expelled from His mercy</div>
                        <div class="ienglish0 ${chapNum === '9' || chapNum === '1' ? 'hidden' : ''}">
                            <div>In the name of Allāh, the Entirely Merciful, the Especially Merciful</div>
                        </div>
                        <div class="iindonesian">Aku berlindung kepada Allah dari godaan <i>syaitan</i> yang terkutuk</div>
                        <div class="iindonesian0 ${chapNum === '9' || chapNum === '1' ? 'hidden' : ''}">
                            <div>Dengan nama Allah, Yang Maha Pengasih, Maha Penyayang</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Display loading indicator
    loadingElement.style.display = 'block';

    try {
        // Fetch and parse translations
        const [englishXML, indonesianXML] = await Promise.all([
            fetchXML(englishXMLUrl),
            fetchXML(indonesianXMLUrl)
        ]);

        const englishTranslations = parseXML(englishXML);
        const indonesianTranslations = parseXML(indonesianXML);

        verseContainer.innerHTML = '';

        // Display verses
        for (let verseNum = 1; verseNum <= chapters[chapNum].verses; verseNum++) {
            const verseDiv = document.createElement('div');
            verseDiv.classList.add('verse');
            verseDiv.id = `verse-${verseNum}`;

            // Arabic PNG
            const arabicImg = document.createElement('img');
            arabicImg.src = `https://everyayah.com/data/quranpngs/${chapNum}_${verseNum}.png`;
            arabicImg.alt = `Arabic Verse ${verseNum}`;
            arabicImg.classList.add('arabic-image');
            verseDiv.appendChild(arabicImg);

            // English Translation
            const englishText = englishTranslations[chapNum]?.[verseNum] || 'Translation not available';
            const englishDiv = document.createElement('div');
            englishDiv.classList.add('translation', 'english');
            englishDiv.innerText = englishText;
            verseDiv.appendChild(englishDiv);

            // Indonesian Translation
            const indonesianText = indonesianTranslations[chapNum]?.[verseNum] || 'Translation not available';
            const indonesianDiv = document.createElement('div');
            indonesianDiv.classList.add('translation', 'indonesian');
            indonesianDiv.innerText = indonesianText;
            verseDiv.appendChild(indonesianDiv);

            // Create a paragraph element with a link to toggle Tafseer text
            const toggleLink = document.createElement('p');
            toggleLink.innerHTML = `<a href="#" onclick="toggleTafseerText(${verseNum})">See Tafseer</a>`;
            verseDiv.appendChild(toggleLink);

            // Create a div for the Tafseer text
            const tafseerDiv = document.createElement('div');
            tafseerDiv.id = `tafseer-text-${verseNum}`;
            tafseerDiv.classList.add('tafseer-text');
            tafseerDiv.style.display = 'none'; // Initially hidden

            // Append the Tafseer text div to the verseDiv
            verseDiv.appendChild(tafseerDiv);

            verseContainer.appendChild(verseDiv);
        }

        // Fetch Tafseer data
        await fetchTafseerData(chapNum);

        // Set and play audio for the chapter
        setAudioSource(chapNum);

    } catch (error) {
        console.error('Error loading translations:', error);
    } finally {
        // Hide loading indicator
        loadingElement.style.display = 'none';
        // Adjust image sizes after loading
        adjustImageSize();
    }
}

function setAudioSource(chapNum) {
    const audioSources = {
        1: "https://archive.org/download/Quran-English-Bahasa/001%20Al-Fatiha.mp3",
        2: "https://archive.org/download/Quran-English-Bahasa/002%20Al-Baqara.mp3",
            3: "https://archive.org/download/Quran-English-Bahasa/003%20Aal-E-Imran.mp3",
    4: "https://archive.org/download/Quran-English-Bahasa/004%20An-Nisa.mp3",
    5: "https://archive.org/download/Quran-English-Bahasa/005%20Al-Ma-idah.mp3",
    6: "https://archive.org/download/Quran-English-Bahasa/006%20Al-Anaam.mp3",
    7: "https://archive.org/download/Quran-English-Bahasa/007%20Al-Araf.mp3",
    8: "https://archive.org/download/Quran-English-Bahasa/008%20Al-Anfal.mp3",
    9: "https://archive.org/download/Quran-English-Bahasa/009%20At-Tawba.mp3",
    10: "https://archive.org/download/Quran-English-Bahasa/010%20Yunus.mp3",
    11: "https://archive.org/download/Quran-English-Bahasa/011%20Hud.mp3",
    12: "https://archive.org/download/Quran-English-Bahasa/012%20Yusuf.mp3",
    13: "https://archive.org/download/Quran-English-Bahasa/013%20Ar-Rad.mp.mp3",
    14: "https://archive.org/download/Quran-English-Bahasa/014%20Ibrahim.mp3",
    15: "https://archive.org/download/Quran-English-Bahasa/015%20Al-Hijr.mp3",
    16: "https://archive.org/download/Quran-English-Bahasa/016%20An-Nahl.mp3",
    17: "https://archive.org/download/Quran-English-Bahasa/017%20Al-Isra.mp3",
    18: "https://archive.org/download/Quran-English-Bahasa/018%20Al-Kahf.mp3",
    19: "https://archive.org/download/Quran-English-Bahasa/019%20Maryam.mp3",
    20: "https://archive.org/download/Quran-English-Bahasa/020%20Ta-Ha.mp3",
    21: "https://archive.org/download/Quran-English-Bahasa/021%20Al-Anbiya.mp3",
    22: "https://archive.org/download/Quran-English-Bahasa/022%20Al-Hajj.mp3",
    23: "https://archive.org/download/Quran-English-Bahasa/023%20Al-Muminoon.mp3",
    24: "https://archive.org/download/Quran-English-Bahasa/024%20An-Noor.mp3",
    25: "https://archive.org/download/Quran-English-Bahasa/025%20Al-Furqan.mp3",
    26: "https://archive.org/download/Quran-English-Bahasa/026%20Ash-Shuara.mp3",
    27: "https://archive.org/download/Quran-English-Bahasa/027%20An-Naml.mp3",
    28: "https://archive.org/download/Quran-English-Bahasa/028%20Al-Qasas.mp3",
    29: "https://archive.org/download/Quran-English-Bahasa/029%20Al-Ankabut.mp3",
    30: "https://archive.org/download/Quran-English-Bahasa/030%20Ar-Room.mp3",
    31: "https://archive.org/download/Quran-English-Bahasa/031%20Luqman.mp3",
    32: "https://archive.org/download/Quran-English-Bahasa/032%20As-Sajda.mp3",
    33: "https://archive.org/download/Quran-English-Bahasa/033%20Al-Ahzab.mp3",
    34: "https://archive.org/download/Quran-English-Bahasa/034%20Saba.mp3",
    35: "https://archive.org/download/Quran-English-Bahasa/035%20Fatir.mp3",
    36: "https://archive.org/download/Quran-English-Bahasa/036%20Ya-Seen.mp3",
    37: "https://archive.org/download/Quran-English-Bahasa/037%20As-Saaffat.mp3",
    38: "https://archive.org/download/Quran-English-Bahasa/038%20Sad.mp3",
    39: "https://archive.org/download/Quran-English-Bahasa/039%20Az-Zumar.mp3",
    40: "https://archive.org/download/Quran-English-Bahasa/040%20Ghafir.mp3",
    41: "https://archive.org/download/Quran-English-Bahasa/041%20Fussilat.mp3",
    42: "https://archive.org/download/Quran-English-Bahasa/042%20Ash-Shura.mp3",
    43: "https://archive.org/download/Quran-English-Bahasa/043%20Az-Zukhruf.mp3",
    44: "https://archive.org/download/Quran-English-Bahasa/044%20Ad-Dukhan.mp3",
    45: "https://archive.org/download/Quran-English-Bahasa/045%20Al-Jathiya.mp3",
    46: "https://archive.org/download/Quran-English-Bahasa/046%20Al-Ahqaf.mp3",
    47: "https://archive.org/download/Quran-English-Bahasa/047%20Muhammad.mp3",
    48: "https://archive.org/download/Quran-English-Bahasa/048%20Al-Fath.mp3",
    49: "https://archive.org/download/Quran-English-Bahasa/049%20Al-Hujurat.mp3",
    50: "https://archive.org/download/Quran-English-Bahasa/050%20Qaf.mp3",
    51: "https://archive.org/download/Quran-English-Bahasa/051%20Adh-Dhariyat.mp3",
    52: "https://archive.org/download/Quran-English-Bahasa/052%20At-Tur.mp3",
    53: "https://archive.org/download/Quran-English-Bahasa/053%20An-Najm.mp3",
    54: "https://archive.org/download/Quran-English-Bahasa/054%20Al-Qamar.mp3",
    55: "https://archive.org/download/Quran-English-Bahasa/055%20Ar-Rahman.mp3",
    56: "https://archive.org/download/Quran-English-Bahasa/056%20Al-Waqia.mp3",
    57: "https://archive.org/download/Quran-English-Bahasa/057%20Al-Hadid.mp3",
    58: "https://archive.org/download/Quran-English-Bahasa/058%20Al-Mujadila.mp3",
    59: "https://archive.org/download/Quran-English-Bahasa/059%20Al-Hashr.mp3",
    60: "https://archive.org/download/Quran-English-Bahasa/060%20Al-Mumtahina.mp3",
    61: "https://archive.org/download/Quran-English-Bahasa/061%20As-Saff.mp3",
    62: "https://archive.org/download/Quran-English-Bahasa/062%20Al-Jumu%27a.mp3",
    63: "https://archive.org/download/Quran-English-Bahasa/063%20Al-Munafiqoon.mp3",
    64: "https://archive.org/download/Quran-English-Bahasa/064%20At-Taghabun.mp3",
    65: "https://archive.org/download/Quran-English-Bahasa/065%20At-Talaq.mp3",
    66: "https://archive.org/download/Quran-English-Bahasa/066%20At-Tahrim.mp3",
    67: "https://archive.org/download/Quran-English-Bahasa/067%20Al-Mulk.mp3",
    68: "https://archive.org/download/Quran-English-Bahasa/068%20Al-Qalam.mp3",
    69: "https://archive.org/download/Quran-English-Bahasa/069%20Al-Haaqqa.mp3",
    70: "https://archive.org/download/Quran-English-Bahasa/070%20Al-Maa%27arij.mp3",
    71: "https://archive.org/download/Quran-English-Bahasa/071%20Nooh.mp3",
    72: "https://archive.org/download/Quran-English-Bahasa/072%20Al-Jinn.mp3",
    73: "https://archive.org/download/Quran-English-Bahasa/073%20Al-Muzammil.mp3",
    74: "https://archive.org/download/Quran-English-Bahasa/074%20Al-Muddathir.mp3",
    75: "https://archive.org/download/Quran-English-Bahasa/075%20Al-Qiyama.mp3",
    76: "https://archive.org/download/Quran-English-Bahasa/076%20Al-Insan.mp3",
    77: "https://archive.org/download/Quran-English-Bahasa/077%20Al-Mursalat.mp3",
    78: "https://archive.org/download/Quran-English-Bahasa/078%20An-Naba.mp3",
    79: "https://archive.org/download/Quran-English-Bahasa/079%20An-Nazi%27at.mp3",
    80: "https://archive.org/download/Quran-English-Bahasa/080%20%27Abasa.mp3",
    81: "https://archive.org/download/Quran-English-Bahasa/081%20At-Takwir.mp3",
    82: "https://archive.org/download/Quran-English-Bahasa/082%20Al-Infitar.mp3",
    83: "https://archive.org/download/Quran-English-Bahasa/083%20Al-Mutaffifin.mp3",
    84: "https://archive.org/download/Quran-English-Bahasa/084%20Al-Inshiqaq.mp3",
    85: "https://archive.org/download/Quran-English-Bahasa/085%20Al-Buruj.mp3",
    86: "https://archive.org/download/Quran-English-Bahasa/086%20At-Tariq.mp3",
    87: "https://archive.org/download/Quran-English-Bahasa/087%20Al-A%27la.mp3",
    88: "https://archive.org/download/Quran-English-Bahasa/088%20Al-Ghashiya.mp3",
    89: "https://archive.org/download/Quran-English-Bahasa/089%20Al-Fajr.mp3",
    90: "https://archive.org/download/Quran-English-Bahasa/090%20Al-Balad.mp3",
    91: "https://archive.org/download/Quran-English-Bahasa/091%20Ash-Shams.mp3",
    92: "https://archive.org/download/Quran-English-Bahasa/092%20Al-Lail.mp3",
    93: "https://archive.org/download/Quran-English-Bahasa/093%20Ad-Dhuhaa.mp3",
    94: "https://archive.org/download/Quran-English-Bahasa/094%20Ash-Sharh.mp3",
    95: "https://archive.org/download/Quran-English-Bahasa/095%20At-Tiin.mp3",
    96: "https://archive.org/download/Quran-English-Bahasa/096%20Al-%27Alaq.mp3",
    97: "https://archive.org/download/Quran-English-Bahasa/097%20Al-Qadr.mp3",
    98: "https://archive.org/download/Quran-English-Bahasa/098%20Al-Bayyina.mp3",
    99: "https://archive.org/download/Quran-English-Bahasa/099%20Az-Zalzala.mp3",
    100: "https://archive.org/download/Quran-English-Bahasa/100%20Al-%27Adiyat.mp3",
    101: "https://archive.org/download/Quran-English-Bahasa/101%20Al-Qari%27a.mp3",
    102: "https://archive.org/download/Quran-English-Bahasa/102%20At-Takathur.mp3",
    103: "https://archive.org/download/Quran-English-Bahasa/103%20Al-%27Asr.mp3",
    104: "https://archive.org/download/Quran-English-Bahasa/104%20Al-Humaza.mp3",
    105: "https://archive.org/download/Quran-English-Bahasa/105%20Al-Fiil.mp3",
    106: "https://archive.org/download/Quran-English-Bahasa/106%20Quraish.mp3",
    107: "https://archive.org/download/Quran-English-Bahasa/107%20Al-Ma%27un.mp3",
    108: "https://archive.org/download/Quran-English-Bahasa/108%20Al-Kauther.mp3",
    109: "https://archive.org/download/Quran-English-Bahasa/109%20Al-Kaafiroon.mp3",
    110: "https://archive.org/download/Quran-English-Bahasa/110%20An-Nase.mp3",
    111: "https://archive.org/download/Quran-English-Bahasa/111%20Al-Masadd.mp3",
    112: "https://archive.org/download/Quran-English-Bahasa/112%20Al-Ikhlas.mp3",
    113: "https://archive.org/download/Quran-English-Bahasa/113%20Al-Falaq.mp3",
    114: "https://archive.org/download/Quran-English-Bahasa/114%20An-Nas.mp3",
        // Add more audio sources here as needed
    };
    
    const audioSource = document.getElementById('audioSource');
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioSources[chapNum]) {
        audioSource.src = audioSources[chapNum];
        audioPlayer.load(); // Load the new source
        audioPlayer.play(); // Optionally play the audio immediately

        // Save audio path to localStorage
        localStorage.setItem('audio-path', audioSource.src);

        // Save audio progress and playing status to localStorage
        audioPlayer.addEventListener('pause', saveAudioProgress);
        audioPlayer.addEventListener('ended', saveAudioProgress);

        // Save audio progress and playing status when the page is unloaded
        window.addEventListener('beforeunload', saveAudioProgress);

        function saveAudioProgress() {
            localStorage.setItem('audio-time', audioPlayer.currentTime);
            localStorage.setItem('audio-playing', audioPlayer.paused ? 'false' : 'true');
        }
    } else {
        console.warn('Audio source not found for chapter', chapNum);
    }
}

document.addEventListener('DOMContentLoaded', generateChapterList);
document.addEventListener('resize', adjustImageSize);

// Sidebar visibility management based on screen size and user preference
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarVisible = localStorage.getItem('sidebar-visible') !== 'false';

    if (window.innerWidth >= 992) {
        sidebar.style.display = sidebarVisible ? 'block' : 'none';
    }

    document.getElementById('toggleSidebar').addEventListener('click', () => {
        sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
        localStorage.setItem('sidebar-visible', sidebar.style.display === 'block');
    });
});