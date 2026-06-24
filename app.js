'use strict';

const TEAMS = {
	MEX: { name: 'Mexico', ar: 'المكسيك', flag: '🇲🇽' },
	RSA: { name: 'South Africa', ar: 'جنوب أفريقيا', flag: '🇿🇦' },
	KOR: { name: 'South Korea', ar: 'كوريا الجنوبية', flag: '🇰🇷' },
	CZE: { name: 'Czechia', ar: 'التشيك', flag: '🇨🇿' },
	CAN: { name: 'Canada', ar: 'كندا', flag: '🇨🇦' },
	BIH: { name: 'Bosnia & Herzegovina', ar: 'البوسنة والهرسك', flag: '🇧🇦' },
	QAT: { name: 'Qatar', ar: 'قطر', flag: '🇶🇦' },
	SUI: { name: 'Switzerland', ar: 'سويسرا', flag: '🇨🇭' },
	BRA: { name: 'Brazil', ar: 'البرازيل', flag: '🇧🇷' },
	MAR: { name: 'Morocco', ar: 'المغرب', flag: '🇲🇦' },
	HTI: { name: 'Haiti', ar: 'هايتي', flag: '🇭🇹' },
	SCO: { name: 'Scotland', ar: 'اسكتلندا', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
	USA: { name: 'United States', ar: 'الولايات المتحدة', flag: '🇺🇸' },
	PAR: { name: 'Paraguay', ar: 'باراغواي', flag: '🇵🇾' },
	AUS: { name: 'Australia', ar: 'أستراليا', flag: '🇦🇺' },
	TUR: { name: 'Türkiye', ar: 'تركيا', flag: '🇹🇷' },
	GER: { name: 'Germany', ar: 'ألمانيا', flag: '🇩🇪' },
	CUW: { name: 'Curaçao', ar: 'كوراساو', flag: '🇨🇼' },
	CIV: { name: "Côte d'Ivoire", ar: 'ساحل العاج', flag: '🇨🇮' },
	ECU: { name: 'Ecuador', ar: 'الإكوادور', flag: '🇪🇨' },
	NED: { name: 'Netherlands', ar: 'هولندا', flag: '🇳🇱' },
	JPN: { name: 'Japan', ar: 'اليابان', flag: '🇯🇵' },
	SWE: { name: 'Sweden', ar: 'السويد', flag: '🇸🇪' },
	TUN: { name: 'Tunisia', ar: 'تونس', flag: '🇹🇳' },
	BEL: { name: 'Belgium', ar: 'بلجيكا', flag: '🇧🇪' },
	EGY: { name: 'Egypt', ar: 'مصر', flag: '🇪🇬' },
	IRI: { name: 'Iran', ar: 'إيران', flag: '🇮🇷' },
	NZL: { name: 'New Zealand', ar: 'نيوزيلندا', flag: '🇳🇿' },
	ESP: { name: 'Spain', ar: 'إسبانيا', flag: '🇪🇸' },
	CPV: { name: 'Cape Verde', ar: 'الرأس الأخضر', flag: '🇨🇻' },
	KSA: { name: 'Saudi Arabia', ar: 'السعودية', flag: '🇸🇦' },
	URU: { name: 'Uruguay', ar: 'أوروغواي', flag: '🇺🇾' },
	FRA: { name: 'France', ar: 'فرنسا', flag: '🇫🇷' },
	SEN: { name: 'Senegal', ar: 'السنغال', flag: '🇸🇳' },
	IRQ: { name: 'Iraq', ar: 'العراق', flag: '🇮🇶' },
	NOR: { name: 'Norway', ar: 'النرويج', flag: '🇳🇴' },
	ARG: { name: 'Argentina', ar: 'الأرجنتين', flag: '🇦🇷' },
	DZA: { name: 'Algeria', ar: 'الجزائر', flag: '🇩🇿' },
	AUT: { name: 'Austria', ar: 'النمسا', flag: '🇦🇹' },
	JOR: { name: 'Jordan', ar: 'الأردن', flag: '🇯🇴' },
	POR: { name: 'Portugal', ar: 'البرتغال', flag: '🇵🇹' },
	COD: { name: 'DR Congo', ar: 'الكونغو الديمقراطية', flag: '🇨🇩' },
	UZB: { name: 'Uzbekistan', ar: 'أوزبكستان', flag: '🇺🇿' },
	COL: { name: 'Colombia', ar: 'كولومبيا', flag: '🇨🇴' },
	ENG: { name: 'England', ar: 'إنجلترا', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
	CRO: { name: 'Croatia', ar: 'كرواتيا', flag: '🇭🇷' },
	GHA: { name: 'Ghana', ar: 'غانا', flag: '🇬🇭' },
	PAN: { name: 'Panama', ar: 'بنما', flag: '🇵🇦' },
};

const GROUPS = {
	A: ['MEX', 'RSA', 'KOR', 'CZE'],
	B: ['CAN', 'BIH', 'QAT', 'SUI'],
	C: ['BRA', 'MAR', 'HTI', 'SCO'],
	D: ['USA', 'PAR', 'AUS', 'TUR'],
	E: ['GER', 'CUW', 'CIV', 'ECU'],
	F: ['NED', 'JPN', 'SWE', 'TUN'],
	G: ['BEL', 'EGY', 'IRI', 'NZL'],
	H: ['ESP', 'CPV', 'KSA', 'URU'],
	I: ['FRA', 'SEN', 'IRQ', 'NOR'],
	J: ['ARG', 'DZA', 'AUT', 'JOR'],
	K: ['POR', 'COD', 'UZB', 'COL'],
	L: ['ENG', 'CRO', 'GHA', 'PAN'],
};

const BASE_MATCHES = [
	m('A', 'MEX', 'RSA', 2, 0, '2026-06-11T19:00:00Z', true),
	m('A', 'KOR', 'CZE', 2, 1, '2026-06-12T02:00:00Z', true),
	m('A', 'CZE', 'RSA', 1, 1, '2026-06-18T16:00:00Z', true),
	m('A', 'MEX', 'KOR', 1, 0, '2026-06-19T01:00:00Z', true),
	m('A', 'CZE', 'MEX', null, null, '2026-06-25T01:00:00Z'),
	m('A', 'RSA', 'KOR', null, null, '2026-06-25T01:00:00Z'),
	m('B', 'CAN', 'BIH', 1, 1, '2026-06-12T19:00:00Z', true),
	m('B', 'QAT', 'SUI', 1, 1, '2026-06-13T19:00:00Z', true),
	m('B', 'SUI', 'BIH', 4, 1, '2026-06-18T19:00:00Z', true),
	m('B', 'CAN', 'QAT', 6, 0, '2026-06-18T22:00:00Z', true),
	m('B', 'SUI', 'CAN', 2, 1, '2026-06-24T19:00:00Z', true),
	m('B', 'BIH', 'QAT', 3, 1, '2026-06-24T19:00:00Z', true),
	m('C', 'BRA', 'MAR', 1, 1, '2026-06-13T22:00:00Z', true),
	m('C', 'HTI', 'SCO', 0, 1, '2026-06-14T01:00:00Z', true),
	m('C', 'SCO', 'MAR', 0, 1, '2026-06-19T22:00:00Z', true),
	m('C', 'BRA', 'HTI', 3, 0, '2026-06-20T00:30:00Z', true),
	m('C', 'SCO', 'BRA', null, null, '2026-06-24T22:00:00Z'),
	m('C', 'MAR', 'HTI', null, null, '2026-06-24T22:00:00Z'),
	m('D', 'USA', 'PAR', 4, 1, '2026-06-13T01:00:00Z', true),
	m('D', 'AUS', 'TUR', 2, 0, '2026-06-14T04:00:00Z', true),
	m('D', 'USA', 'AUS', 2, 0, '2026-06-19T19:00:00Z', true),
	m('D', 'TUR', 'PAR', 0, 1, '2026-06-20T03:00:00Z', true),
	m('D', 'TUR', 'USA', null, null, '2026-06-26T02:00:00Z'),
	m('D', 'PAR', 'AUS', null, null, '2026-06-26T02:00:00Z'),
	m('E', 'GER', 'CUW', 7, 1, '2026-06-14T17:00:00Z', true),
	m('E', 'CIV', 'ECU', 1, 0, '2026-06-14T23:00:00Z', true),
	m('E', 'GER', 'CIV', 2, 1, '2026-06-20T20:00:00Z', true),
	m('E', 'ECU', 'CUW', 0, 0, '2026-06-21T00:00:00Z', true),
	m('E', 'ECU', 'GER', null, null, '2026-06-25T20:00:00Z'),
	m('E', 'CUW', 'CIV', null, null, '2026-06-25T20:00:00Z'),
	m('F', 'NED', 'JPN', 2, 2, '2026-06-14T20:00:00Z', true),
	m('F', 'SWE', 'TUN', 5, 1, '2026-06-15T02:00:00Z', true),
	m('F', 'NED', 'SWE', 5, 1, '2026-06-20T17:00:00Z', true),
	m('F', 'TUN', 'JPN', 0, 4, '2026-06-21T04:00:00Z', true),
	m('F', 'TUN', 'NED', null, null, '2026-06-25T23:00:00Z'),
	m('F', 'JPN', 'SWE', null, null, '2026-06-25T23:00:00Z'),
	m('G', 'BEL', 'EGY', 1, 1, '2026-06-15T19:00:00Z', true),
	m('G', 'IRI', 'NZL', 2, 2, '2026-06-16T01:00:00Z', true),
	m('G', 'BEL', 'IRI', 0, 0, '2026-06-21T19:00:00Z', true),
	m('G', 'NZL', 'EGY', 1, 3, '2026-06-22T01:00:00Z', true),
	m('G', 'NZL', 'BEL', null, null, '2026-06-27T03:00:00Z'),
	m('G', 'EGY', 'IRI', null, null, '2026-06-27T03:00:00Z'),
	m('H', 'ESP', 'CPV', 0, 0, '2026-06-15T16:00:00Z', true),
	m('H', 'KSA', 'URU', 1, 1, '2026-06-15T22:00:00Z', true),
	m('H', 'ESP', 'KSA', 4, 0, '2026-06-21T16:00:00Z', true),
	m('H', 'URU', 'CPV', 2, 2, '2026-06-21T22:00:00Z', true),
	m('H', 'URU', 'ESP', null, null, '2026-06-27T00:00:00Z'),
	m('H', 'CPV', 'KSA', null, null, '2026-06-27T00:00:00Z'),
	m('I', 'FRA', 'SEN', 3, 1, '2026-06-16T19:00:00Z', true),
	m('I', 'IRQ', 'NOR', 1, 4, '2026-06-16T22:00:00Z', true),
	m('I', 'FRA', 'IRQ', 3, 0, '2026-06-22T21:00:00Z', true),
	m('I', 'NOR', 'SEN', 3, 2, '2026-06-23T00:00:00Z', true),
	m('I', 'NOR', 'FRA', null, null, '2026-06-26T19:00:00Z'),
	m('I', 'SEN', 'IRQ', null, null, '2026-06-26T19:00:00Z'),
	m('J', 'ARG', 'DZA', 3, 0, '2026-06-17T01:00:00Z', true),
	m('J', 'AUT', 'JOR', 3, 1, '2026-06-17T04:00:00Z', true),
	m('J', 'ARG', 'AUT', 2, 0, '2026-06-22T17:00:00Z', true),
	m('J', 'JOR', 'DZA', 1, 2, '2026-06-23T03:00:00Z', true),
	m('J', 'JOR', 'ARG', null, null, '2026-06-28T02:00:00Z'),
	m('J', 'DZA', 'AUT', null, null, '2026-06-28T02:00:00Z'),
	m('K', 'POR', 'COD', 1, 1, '2026-06-17T17:00:00Z', true),
	m('K', 'UZB', 'COL', 1, 3, '2026-06-18T02:00:00Z', true),
	m('K', 'POR', 'UZB', 5, 0, '2026-06-23T17:00:00Z', true),
	m('K', 'COL', 'COD', 1, 0, '2026-06-24T02:00:00Z', true),
	m('K', 'COL', 'POR', null, null, '2026-06-27T23:30:00Z'),
	m('K', 'COD', 'UZB', null, null, '2026-06-27T23:30:00Z'),
	m('L', 'ENG', 'CRO', 4, 2, '2026-06-17T20:00:00Z', true),
	m('L', 'GHA', 'PAN', 1, 0, '2026-06-17T23:00:00Z', true),
	m('L', 'ENG', 'GHA', 0, 0, '2026-06-23T20:00:00Z', true),
	m('L', 'PAN', 'CRO', 0, 1, '2026-06-23T23:00:00Z', true),
	m('L', 'PAN', 'ENG', null, null, '2026-06-27T21:00:00Z'),
	m('L', 'CRO', 'GHA', null, null, '2026-06-27T21:00:00Z'),
];

function m(group, home, away, homeScore, awayScore, kickoff, played = false) {
	return {
		id: `${group}-${home}-${away}`,
		group,
		home,
		away,
		homeScore,
		awayScore,
		kickoff,
		played,
	};
}

const R32 = [
	{ no: 73, a: '2A', b: '2B' },
	{ no: 74, a: '1E', third: ['A', 'B', 'C', 'D', 'F'] },
	{ no: 75, a: '1F', b: '2C' },
	{ no: 76, a: '1C', b: '2F' },
	{ no: 77, a: '1I', third: ['C', 'D', 'F', 'G', 'H'] },
	{ no: 78, a: '2E', b: '2I' },
	{ no: 79, a: '1A', third: ['C', 'E', 'F', 'H', 'I'] },
	{ no: 80, a: '1L', third: ['E', 'H', 'I', 'J', 'K'] },
	{ no: 81, a: '1D', third: ['B', 'E', 'F', 'I', 'J'] },
	{ no: 82, a: '1G', third: ['A', 'E', 'H', 'I', 'J'] },
	{ no: 83, a: '2K', b: '2L' },
	{ no: 84, a: '1H', b: '2J' },
	{ no: 85, a: '1B', third: ['E', 'F', 'G', 'I', 'J'] },
	{ no: 86, a: '1J', b: '2H' },
	{ no: 87, a: '1K', third: ['D', 'E', 'I', 'J', 'L'] },
	{ no: 88, a: '2D', b: '2G' },
];

const R16 = [
	{ no: 89, home: 'W74', away: 'W77' },
	{ no: 90, home: 'W73', away: 'W75' },
	{ no: 91, home: 'W76', away: 'W78' },
	{ no: 92, home: 'W79', away: 'W80' },
	{ no: 93, home: 'W83', away: 'W84' },
	{ no: 94, home: 'W81', away: 'W82' },
	{ no: 95, home: 'W86', away: 'W88' },
	{ no: 96, home: 'W85', away: 'W87' },
];
const QF = [
	{ no: 97, home: 'W89', away: 'W90' },
	{ no: 98, home: 'W93', away: 'W94' },
	{ no: 99, home: 'W91', away: 'W92' },
	{ no: 100, home: 'W95', away: 'W96' },
];
const SF = [
	{ no: 101, home: 'W97', away: 'W98' },
	{ no: 102, home: 'W99', away: 'W100' },
];
const THIRD_PLACE = [{ no: 103, home: 'L101', away: 'L102' }];
const FINAL = [{ no: 104, home: 'W101', away: 'W102' }];
const KNOCKOUT_STAGE_DEFS = [
	{ key: 'r32', titleKey: 'round32', matches: R32 },
	{ key: 'r16', titleKey: 'roundOf16', matches: R16 },
	{ key: 'qf', titleKey: 'quarterfinal', matches: QF },
	{ key: 'sf', titleKey: 'semifinal', matches: SF },
	{ key: 'final', titleKey: 'final', matches: FINAL },
];

// FIFA World Cup 2026 Regulations, Annex C: all 495 possible combinations
// Value order: 1A, 1B, 1D, 1E, 1G, 1I, 1K, 1L.
const ANNEX_C = {
	EFGHIJKL: 'EJIFHGLK',
	DFGHIJKL: 'HGIDJFLK',
	DEGHIJKL: 'EJIDHGLK',
	DEFHIJKL: 'EJIDHFLK',
	DEFGIJKL: 'EGIDJFLK',
	DEFGHJKL: 'EGJDHFLK',
	DEFGHIKL: 'EGIDHFLK',
	DEFGHIJL: 'EGJDHFLI',
	DEFGHIJK: 'EGJDHFIK',
	CFGHIJKL: 'HGICJFLK',
	CEGHIJKL: 'EJICHGLK',
	CEFHIJKL: 'EJICHFLK',
	CEFGIJKL: 'EGICJFLK',
	CEFGHJKL: 'EGJCHFLK',
	CEFGHIKL: 'EGICHFLK',
	CEFGHIJL: 'EGJCHFLI',
	CEFGHIJK: 'EGJCHFIK',
	CDGHIJKL: 'HGICJDLK',
	CDFHIJKL: 'CJIDHFLK',
	CDFGIJKL: 'CGIDJFLK',
	CDFGHJKL: 'CGJDHFLK',
	CDFGHIKL: 'CGIDHFLK',
	CDFGHIJL: 'CGJDHFLI',
	CDFGHIJK: 'CGJDHFIK',
	CDEHIJKL: 'EJICHDLK',
	CDEGIJKL: 'EGICJDLK',
	CDEGHJKL: 'EGJCHDLK',
	CDEGHIKL: 'EGICHDLK',
	CDEGHIJL: 'EGJCHDLI',
	CDEGHIJK: 'EGJCHDIK',
	CDEFIJKL: 'CJEDIFLK',
	CDEFHJKL: 'CJEDHFLK',
	CDEFHIKL: 'CEIDHFLK',
	CDEFHIJL: 'CJEDHFLI',
	CDEFHIJK: 'CJEDHFIK',
	CDEFGJKL: 'CGEDJFLK',
	CDEFGIKL: 'CGEDIFLK',
	CDEFGIJL: 'CGEDJFLI',
	CDEFGIJK: 'CGEDJFIK',
	CDEFGHKL: 'CGEDHFLK',
	CDEFGHJL: 'CGJDHFLE',
	CDEFGHJK: 'CGJDHFEK',
	CDEFGHIL: 'CGEDHFLI',
	CDEFGHIK: 'CGEDHFIK',
	CDEFGHIJ: 'CGJDHFEI',
	BFGHIJKL: 'HJBFIGLK',
	BEGHIJKL: 'EJIBHGLK',
	BEFHIJKL: 'EJBFIHLK',
	BEFGIJKL: 'EJBFIGLK',
	BEFGHJKL: 'EJBFHGLK',
	BEFGHIKL: 'EGBFIHLK',
	BEFGHIJL: 'EJBFHGLI',
	BEFGHIJK: 'EJBFHGIK',
	BDGHIJKL: 'HJBDIGLK',
	BDFHIJKL: 'HJBDIFLK',
	BDFGIJKL: 'IGBDJFLK',
	BDFGHJKL: 'HGBDJFLK',
	BDFGHIKL: 'HGBDIFLK',
	BDFGHIJL: 'HGBDJFLI',
	BDFGHIJK: 'HGBDJFIK',
	BDEHIJKL: 'EJBDIHLK',
	BDEGIJKL: 'EJBDIGLK',
	BDEGHJKL: 'EJBDHGLK',
	BDEGHIKL: 'EGBDIHLK',
	BDEGHIJL: 'EJBDHGLI',
	BDEGHIJK: 'EJBDHGIK',
	BDEFIJKL: 'EJBDIFLK',
	BDEFHJKL: 'EJBDHFLK',
	BDEFHIKL: 'EIBDHFLK',
	BDEFHIJL: 'EJBDHFLI',
	BDEFHIJK: 'EJBDHFIK',
	BDEFGJKL: 'EGBDJFLK',
	BDEFGIKL: 'EGBDIFLK',
	BDEFGIJL: 'EGBDJFLI',
	BDEFGIJK: 'EGBDJFIK',
	BDEFGHKL: 'EGBDHFLK',
	BDEFGHJL: 'HGBDJFLE',
	BDEFGHJK: 'HGBDJFEK',
	BDEFGHIL: 'EGBDHFLI',
	BDEFGHIK: 'EGBDHFIK',
	BDEFGHIJ: 'HGBDJFEI',
	BCGHIJKL: 'HJBCIGLK',
	BCFHIJKL: 'HJBCIFLK',
	BCFGIJKL: 'IGBCJFLK',
	BCFGHJKL: 'HGBCJFLK',
	BCFGHIKL: 'HGBCIFLK',
	BCFGHIJL: 'HGBCJFLI',
	BCFGHIJK: 'HGBCJFIK',
	BCEHIJKL: 'EJBCIHLK',
	BCEGIJKL: 'EJBCIGLK',
	BCEGHJKL: 'EJBCHGLK',
	BCEGHIKL: 'EGBCIHLK',
	BCEGHIJL: 'EJBCHGLI',
	BCEGHIJK: 'EJBCHGIK',
	BCEFIJKL: 'EJBCIFLK',
	BCEFHJKL: 'EJBCHFLK',
	BCEFHIKL: 'EIBCHFLK',
	BCEFHIJL: 'EJBCHFLI',
	BCEFHIJK: 'EJBCHFIK',
	BCEFGJKL: 'EGBCJFLK',
	BCEFGIKL: 'EGBCIFLK',
	BCEFGIJL: 'EGBCJFLI',
	BCEFGIJK: 'EGBCJFIK',
	BCEFGHKL: 'EGBCHFLK',
	BCEFGHJL: 'HGBCJFLE',
	BCEFGHJK: 'HGBCJFEK',
	BCEFGHIL: 'EGBCHFLI',
	BCEFGHIK: 'EGBCHFIK',
	BCEFGHIJ: 'HGBCJFEI',
	BCDHIJKL: 'HJBCIDLK',
	BCDGIJKL: 'IGBCJDLK',
	BCDGHJKL: 'HGBCJDLK',
	BCDGHIKL: 'HGBCIDLK',
	BCDGHIJL: 'HGBCJDLI',
	BCDGHIJK: 'HGBCJDIK',
	BCDFIJKL: 'CJBDIFLK',
	BCDFHJKL: 'CJBDHFLK',
	BCDFHIKL: 'CIBDHFLK',
	BCDFHIJL: 'CJBDHFLI',
	BCDFHIJK: 'CJBDHFIK',
	BCDFGJKL: 'CGBDJFLK',
	BCDFGIKL: 'CGBDIFLK',
	BCDFGIJL: 'CGBDJFLI',
	BCDFGIJK: 'CGBDJFIK',
	BCDFGHKL: 'CGBDHFLK',
	BCDFGHJL: 'CGBDHFLJ',
	BCDFGHJK: 'HGBCJFDK',
	BCDFGHIL: 'CGBDHFLI',
	BCDFGHIK: 'CGBDHFIK',
	BCDFGHIJ: 'HGBCJFDI',
	BCDEIJKL: 'EJBCIDLK',
	BCDEHJKL: 'EJBCHDLK',
	BCDEHIKL: 'EIBCHDLK',
	BCDEHIJL: 'EJBCHDLI',
	BCDEHIJK: 'EJBCHDIK',
	BCDEGJKL: 'EGBCJDLK',
	BCDEGIKL: 'EGBCIDLK',
	BCDEGIJL: 'EGBCJDLI',
	BCDEGIJK: 'EGBCJDIK',
	BCDEGHKL: 'EGBCHDLK',
	BCDEGHJL: 'HGBCJDLE',
	BCDEGHJK: 'HGBCJDEK',
	BCDEGHIL: 'EGBCHDLI',
	BCDEGHIK: 'EGBCHDIK',
	BCDEGHIJ: 'HGBCJDEI',
	BCDEFJKL: 'CJBDEFLK',
	BCDEFIKL: 'CEBDIFLK',
	BCDEFIJL: 'CJBDEFLI',
	BCDEFIJK: 'CJBDEFIK',
	BCDEFHKL: 'CEBDHFLK',
	BCDEFHJL: 'CJBDHFLE',
	BCDEFHJK: 'CJBDHFEK',
	BCDEFHIL: 'CEBDHFLI',
	BCDEFHIK: 'CEBDHFIK',
	BCDEFHIJ: 'CJBDHFEI',
	BCDEFGKL: 'CGBDEFLK',
	BCDEFGJL: 'CGBDJFLE',
	BCDEFGJK: 'CGBDJFEK',
	BCDEFGIL: 'CGBDEFLI',
	BCDEFGIK: 'CGBDEFIK',
	BCDEFGIJ: 'CGBDJFEI',
	BCDEFGHL: 'CGBDHFLE',
	BCDEFGHK: 'CGBDHFEK',
	BCDEFGHJ: 'HGBCJFDE',
	BCDEFGHI: 'CGBDHFEI',
	AFGHIJKL: 'HJIFAGLK',
	AEGHIJKL: 'EJIAHGLK',
	AEFHIJKL: 'EJIFAHLK',
	AEFGIJKL: 'EJIFAGLK',
	AEFGHJKL: 'EGJFAHLK',
	AEFGHIKL: 'EGIFAHLK',
	AEFGHIJL: 'EGJFAHLI',
	AEFGHIJK: 'EGJFAHIK',
	ADGHIJKL: 'HJIDAGLK',
	ADFHIJKL: 'HJIDAFLK',
	ADFGIJKL: 'IGJDAFLK',
	ADFGHJKL: 'HGJDAFLK',
	ADFGHIKL: 'HGIDAFLK',
	ADFGHIJL: 'HGJDAFLI',
	ADFGHIJK: 'HGJDAFIK',
	ADEHIJKL: 'EJIDAHLK',
	ADEGIJKL: 'EJIDAGLK',
	ADEGHJKL: 'EGJDAHLK',
	ADEGHIKL: 'EGIDAHLK',
	ADEGHIJL: 'EGJDAHLI',
	ADEGHIJK: 'EGJDAHIK',
	ADEFIJKL: 'EJIDAFLK',
	ADEFHJKL: 'HJEDAFLK',
	ADEFHIKL: 'HEIDAFLK',
	ADEFHIJL: 'HJEDAFLI',
	ADEFHIJK: 'HJEDAFIK',
	ADEFGJKL: 'EGJDAFLK',
	ADEFGIKL: 'EGIDAFLK',
	ADEFGIJL: 'EGJDAFLI',
	ADEFGIJK: 'EGJDAFIK',
	ADEFGHKL: 'HGEDAFLK',
	ADEFGHJL: 'HGJDAFLE',
	ADEFGHJK: 'HGJDAFEK',
	ADEFGHIL: 'HGEDAFLI',
	ADEFGHIK: 'HGEDAFIK',
	ADEFGHIJ: 'HGJDAFEI',
	ACGHIJKL: 'HJICAGLK',
	ACFHIJKL: 'HJICAFLK',
	ACFGIJKL: 'IGJCAFLK',
	ACFGHJKL: 'HGJCAFLK',
	ACFGHIKL: 'HGICAFLK',
	ACFGHIJL: 'HGJCAFLI',
	ACFGHIJK: 'HGJCAFIK',
	ACEHIJKL: 'EJICAHLK',
	ACEGIJKL: 'EJICAGLK',
	ACEGHJKL: 'EGJCAHLK',
	ACEGHIKL: 'EGICAHLK',
	ACEGHIJL: 'EGJCAHLI',
	ACEGHIJK: 'EGJCAHIK',
	ACEFIJKL: 'EJICAFLK',
	ACEFHJKL: 'HJECAFLK',
	ACEFHIKL: 'HEICAFLK',
	ACEFHIJL: 'HJECAFLI',
	ACEFHIJK: 'HJECAFIK',
	ACEFGJKL: 'EGJCAFLK',
	ACEFGIKL: 'EGICAFLK',
	ACEFGIJL: 'EGJCAFLI',
	ACEFGIJK: 'EGJCAFIK',
	ACEFGHKL: 'HGECAFLK',
	ACEFGHJL: 'HGJCAFLE',
	ACEFGHJK: 'HGJCAFEK',
	ACEFGHIL: 'HGECAFLI',
	ACEFGHIK: 'HGECAFIK',
	ACEFGHIJ: 'HGJCAFEI',
	ACDHIJKL: 'HJICADLK',
	ACDGIJKL: 'IGJCADLK',
	ACDGHJKL: 'HGJCADLK',
	ACDGHIKL: 'HGICADLK',
	ACDGHIJL: 'HGJCADLI',
	ACDGHIJK: 'HGJCADIK',
	ACDFIJKL: 'CJIDAFLK',
	ACDFHJKL: 'HJFCADLK',
	ACDFHIKL: 'HFICADLK',
	ACDFHIJL: 'HJFCADLI',
	ACDFHIJK: 'HJFCADIK',
	ACDFGJKL: 'CGJDAFLK',
	ACDFGIKL: 'CGIDAFLK',
	ACDFGIJL: 'CGJDAFLI',
	ACDFGIJK: 'CGJDAFIK',
	ACDFGHKL: 'HGFCADLK',
	ACDFGHJL: 'CGJDAFLH',
	ACDFGHJK: 'HGJCAFDK',
	ACDFGHIL: 'HGFCADLI',
	ACDFGHIK: 'HGFCADIK',
	ACDFGHIJ: 'HGJCAFDI',
	ACDEIJKL: 'EJICADLK',
	ACDEHJKL: 'HJECADLK',
	ACDEHIKL: 'HEICADLK',
	ACDEHIJL: 'HJECADLI',
	ACDEHIJK: 'HJECADIK',
	ACDEGJKL: 'EGJCADLK',
	ACDEGIKL: 'EGICADLK',
	ACDEGIJL: 'EGJCADLI',
	ACDEGIJK: 'EGJCADIK',
	ACDEGHKL: 'HGECADLK',
	ACDEGHJL: 'HGJCADLE',
	ACDEGHJK: 'HGJCADEK',
	ACDEGHIL: 'HGECADLI',
	ACDEGHIK: 'HGECADIK',
	ACDEGHIJ: 'HGJCADEI',
	ACDEFJKL: 'CJEDAFLK',
	ACDEFIKL: 'CEIDAFLK',
	ACDEFIJL: 'CJEDAFLI',
	ACDEFIJK: 'CJEDAFIK',
	ACDEFHKL: 'HEFCADLK',
	ACDEFHJL: 'HJFCADLE',
	ACDEFHJK: 'HJECAFDK',
	ACDEFHIL: 'HEFCADLI',
	ACDEFHIK: 'HEFCADIK',
	ACDEFHIJ: 'HJECAFDI',
	ACDEFGKL: 'CGEDAFLK',
	ACDEFGJL: 'CGJDAFLE',
	ACDEFGJK: 'CGJDAFEK',
	ACDEFGIL: 'CGEDAFLI',
	ACDEFGIK: 'CGEDAFIK',
	ACDEFGIJ: 'CGJDAFEI',
	ACDEFGHL: 'HGFCADLE',
	ACDEFGHK: 'HGECAFDK',
	ACDEFGHJ: 'HGJCAFDE',
	ACDEFGHI: 'HGECAFDI',
	ABGHIJKL: 'HJBAIGLK',
	ABFHIJKL: 'HJBAIFLK',
	ABFGIJKL: 'IJBFAGLK',
	ABFGHJKL: 'HJBFAGLK',
	ABFGHIKL: 'HGBAIFLK',
	ABFGHIJL: 'HJBFAGLI',
	ABFGHIJK: 'HJBFAGIK',
	ABEHIJKL: 'EJBAIHLK',
	ABEGIJKL: 'EJBAIGLK',
	ABEGHJKL: 'EJBAHGLK',
	ABEGHIKL: 'EGBAIHLK',
	ABEGHIJL: 'EJBAHGLI',
	ABEGHIJK: 'EJBAHGIK',
	ABEFIJKL: 'EJBAIFLK',
	ABEFHJKL: 'EJBFAHLK',
	ABEFHIKL: 'EIBFAHLK',
	ABEFHIJL: 'EJBFAHLI',
	ABEFHIJK: 'EJBFAHIK',
	ABEFGJKL: 'EJBFAGLK',
	ABEFGIKL: 'EGBAIFLK',
	ABEFGIJL: 'EJBFAGLI',
	ABEFGIJK: 'EJBFAGIK',
	ABEFGHKL: 'EGBFAHLK',
	ABEFGHJL: 'HJBFAGLE',
	ABEFGHJK: 'HJBFAGEK',
	ABEFGHIL: 'EGBFAHLI',
	ABEFGHIK: 'EGBFAHIK',
	ABEFGHIJ: 'HJBFAGEI',
	ABDHIJKL: 'IJBDAHLK',
	ABDGIJKL: 'IJBDAGLK',
	ABDGHJKL: 'HJBDAGLK',
	ABDGHIKL: 'IGBDAHLK',
	ABDGHIJL: 'HJBDAGLI',
	ABDGHIJK: 'HJBDAGIK',
	ABDFIJKL: 'IJBDAFLK',
	ABDFHJKL: 'HJBDAFLK',
	ABDFHIKL: 'HIBDAFLK',
	ABDFHIJL: 'HJBDAFLI',
	ABDFHIJK: 'HJBDAFIK',
	ABDFGJKL: 'FJBDAGLK',
	ABDFGIKL: 'IGBDAFLK',
	ABDFGIJL: 'FJBDAGLI',
	ABDFGIJK: 'FJBDAGIK',
	ABDFGHKL: 'HGBDAFLK',
	ABDFGHJL: 'HGBDAFLJ',
	ABDFGHJK: 'HGBDAFJK',
	ABDFGHIL: 'HGBDAFLI',
	ABDFGHIK: 'HGBDAFIK',
	ABDFGHIJ: 'HGBDAFIJ',
	ABDEIJKL: 'EJBAIDLK',
	ABDEHJKL: 'EJBDAHLK',
	ABDEHIKL: 'EIBDAHLK',
	ABDEHIJL: 'EJBDAHLI',
	ABDEHIJK: 'EJBDAHIK',
	ABDEGJKL: 'EJBDAGLK',
	ABDEGIKL: 'EGBAIDLK',
	ABDEGIJL: 'EJBDAGLI',
	ABDEGIJK: 'EJBDAGIK',
	ABDEGHKL: 'EGBDAHLK',
	ABDEGHJL: 'HJBDAGLE',
	ABDEGHJK: 'HJBDAGEK',
	ABDEGHIL: 'EGBDAHLI',
	ABDEGHIK: 'EGBDAHIK',
	ABDEGHIJ: 'HJBDAGEI',
	ABDEFJKL: 'EJBDAFLK',
	ABDEFIKL: 'EIBDAFLK',
	ABDEFIJL: 'EJBDAFLI',
	ABDEFIJK: 'EJBDAFIK',
	ABDEFHKL: 'HEBDAFLK',
	ABDEFHJL: 'HJBDAFLE',
	ABDEFHJK: 'HJBDAFEK',
	ABDEFHIL: 'HEBDAFLI',
	ABDEFHIK: 'HEBDAFIK',
	ABDEFHIJ: 'HJBDAFEI',
	ABDEFGKL: 'EGBDAFLK',
	ABDEFGJL: 'EGBDAFLJ',
	ABDEFGJK: 'EGBDAFJK',
	ABDEFGIL: 'EGBDAFLI',
	ABDEFGIK: 'EGBDAFIK',
	ABDEFGIJ: 'EGBDAFIJ',
	ABDEFGHL: 'HGBDAFLE',
	ABDEFGHK: 'HGBDAFEK',
	ABDEFGHJ: 'HGBDAFEJ',
	ABDEFGHI: 'HGBDAFEI',
	ABCHIJKL: 'IJBCAHLK',
	ABCGIJKL: 'IJBCAGLK',
	ABCGHJKL: 'HJBCAGLK',
	ABCGHIKL: 'IGBCAHLK',
	ABCGHIJL: 'HJBCAGLI',
	ABCGHIJK: 'HJBCAGIK',
	ABCFIJKL: 'IJBCAFLK',
	ABCFHJKL: 'HJBCAFLK',
	ABCFHIKL: 'HIBCAFLK',
	ABCFHIJL: 'HJBCAFLI',
	ABCFHIJK: 'HJBCAFIK',
	ABCFGJKL: 'CJBFAGLK',
	ABCFGIKL: 'IGBCAFLK',
	ABCFGIJL: 'CJBFAGLI',
	ABCFGIJK: 'CJBFAGIK',
	ABCFGHKL: 'HGBCAFLK',
	ABCFGHJL: 'HGBCAFLJ',
	ABCFGHJK: 'HGBCAFJK',
	ABCFGHIL: 'HGBCAFLI',
	ABCFGHIK: 'HGBCAFIK',
	ABCFGHIJ: 'HGBCAFIJ',
	ABCEIJKL: 'EJBAICLK',
	ABCEHJKL: 'EJBCAHLK',
	ABCEHIKL: 'EIBCAHLK',
	ABCEHIJL: 'EJBCAHLI',
	ABCEHIJK: 'EJBCAHIK',
	ABCEGJKL: 'EJBCAGLK',
	ABCEGIKL: 'EGBAICLK',
	ABCEGIJL: 'EJBCAGLI',
	ABCEGIJK: 'EJBCAGIK',
	ABCEGHKL: 'EGBCAHLK',
	ABCEGHJL: 'HJBCAGLE',
	ABCEGHJK: 'HJBCAGEK',
	ABCEGHIL: 'EGBCAHLI',
	ABCEGHIK: 'EGBCAHIK',
	ABCEGHIJ: 'HJBCAGEI',
	ABCEFJKL: 'EJBCAFLK',
	ABCEFIKL: 'EIBCAFLK',
	ABCEFIJL: 'EJBCAFLI',
	ABCEFIJK: 'EJBCAFIK',
	ABCEFHKL: 'HEBCAFLK',
	ABCEFHJL: 'HJBCAFLE',
	ABCEFHJK: 'HJBCAFEK',
	ABCEFHIL: 'HEBCAFLI',
	ABCEFHIK: 'HEBCAFIK',
	ABCEFHIJ: 'HJBCAFEI',
	ABCEFGKL: 'EGBCAFLK',
	ABCEFGJL: 'EGBCAFLJ',
	ABCEFGJK: 'EGBCAFJK',
	ABCEFGIL: 'EGBCAFLI',
	ABCEFGIK: 'EGBCAFIK',
	ABCEFGIJ: 'EGBCAFIJ',
	ABCEFGHL: 'HGBCAFLE',
	ABCEFGHK: 'HGBCAFEK',
	ABCEFGHJ: 'HGBCAFEJ',
	ABCEFGHI: 'HGBCAFEI',
	ABCDIJKL: 'IJBCADLK',
	ABCDHJKL: 'HJBCADLK',
	ABCDHIKL: 'HIBCADLK',
	ABCDHIJL: 'HJBCADLI',
	ABCDHIJK: 'HJBCADIK',
	ABCDGJKL: 'CJBDAGLK',
	ABCDGIKL: 'IGBCADLK',
	ABCDGIJL: 'CJBDAGLI',
	ABCDGIJK: 'CJBDAGIK',
	ABCDGHKL: 'HGBCADLK',
	ABCDGHJL: 'HGBCADLJ',
	ABCDGHJK: 'HGBCADJK',
	ABCDGHIL: 'HGBCADLI',
	ABCDGHIK: 'HGBCADIK',
	ABCDGHIJ: 'HGBCADIJ',
	ABCDFJKL: 'CJBDAFLK',
	ABCDFIKL: 'CIBDAFLK',
	ABCDFIJL: 'CJBDAFLI',
	ABCDFIJK: 'CJBDAFIK',
	ABCDFHKL: 'HFBCADLK',
	ABCDFHJL: 'CJBDAFLH',
	ABCDFHJK: 'HJBCAFDK',
	ABCDFHIL: 'HFBCADLI',
	ABCDFHIK: 'HFBCADIK',
	ABCDFHIJ: 'HJBCAFDI',
	ABCDFGKL: 'CGBDAFLK',
	ABCDFGJL: 'CGBDAFLJ',
	ABCDFGJK: 'CGBDAFJK',
	ABCDFGIL: 'CGBDAFLI',
	ABCDFGIK: 'CGBDAFIK',
	ABCDFGIJ: 'CGBDAFIJ',
	ABCDFGHL: 'CGBDAFLH',
	ABCDFGHK: 'HGBCAFDK',
	ABCDFGHJ: 'HGBCAFDJ',
	ABCDFGHI: 'HGBCAFDI',
	ABCDEJKL: 'EJBCADLK',
	ABCDEIKL: 'EIBCADLK',
	ABCDEIJL: 'EJBCADLI',
	ABCDEIJK: 'EJBCADIK',
	ABCDEHKL: 'HEBCADLK',
	ABCDEHJL: 'HJBCADLE',
	ABCDEHJK: 'HJBCADEK',
	ABCDEHIL: 'HEBCADLI',
	ABCDEHIK: 'HEBCADIK',
	ABCDEHIJ: 'HJBCADEI',
	ABCDEGKL: 'EGBCADLK',
	ABCDEGJL: 'EGBCADLJ',
	ABCDEGJK: 'EGBCADJK',
	ABCDEGIL: 'EGBCADLI',
	ABCDEGIK: 'EGBCADIK',
	ABCDEGIJ: 'EGBCADIJ',
	ABCDEGHL: 'HGBCADLE',
	ABCDEGHK: 'HGBCADEK',
	ABCDEGHJ: 'HGBCADEJ',
	ABCDEGHI: 'HGBCADEI',
	ABCDEFKL: 'CEBDAFLK',
	ABCDEFJL: 'CJBDAFLE',
	ABCDEFJK: 'CJBDAFEK',
	ABCDEFIL: 'CEBDAFLI',
	ABCDEFIK: 'CEBDAFIK',
	ABCDEFIJ: 'CJBDAFEI',
	ABCDEFHL: 'HFBCADLE',
	ABCDEFHK: 'HEBCAFDK',
	ABCDEFHJ: 'HJBCAFDE',
	ABCDEFHI: 'HEBCAFDI',
	ABCDEFGL: 'CGBDAFLE',
	ABCDEFGK: 'CGBDAFEK',
	ABCDEFGJ: 'CGBDAFEJ',
	ABCDEFGI: 'CGBDAFEI',
	ABCDEFGH: 'HGBCAFDE',
};
const ANNEX_MATCH_ORDER = [79, 85, 81, 74, 82, 77, 87, 80];

const I18N = {
	en: {
		eyebrow: 'Scenario simulator',
		possibilities: 'Possibilities',
		dataThrough: 'Results through 23 Jun 2026',
		moroccoFocus: 'Morocco focus',
		setFinalMatch: 'Set Morocco–Haiti:',
		win: 'Win',
		draw: 'Draw',
		loss: 'Loss',
		clear: 'Clear',
		scenarioOverview: 'Scenario overview',
		scoresEntered: 'scores entered',
		groupsComplete: 'groups complete',
		projectedQualified: 'projected qualified',
		resetCurrent: 'Reset current results',
		clearRemaining: 'Clear remaining',
		randomize: 'Randomize remaining',
		saveScenario: 'Save scenario',
		export: 'Export',
		import: 'Import',
		saved: 'Saved',
		scenarios: 'Scenarios',
		groups: 'Groups',
		bestThird: 'Best third-place',
		round32: 'Round of 32',
		editScores: 'Edit any score',
		groupSimulator: 'Group simulator',
		team: 'Team',
		directQualification: 'Top two qualify',
		thirdPossibility: 'Third may qualify',
		matchesAndScores: 'Matches & scores',
		instantUpdate: 'Tables update instantly',
		allGroupsSnapshot: 'All groups snapshot',
		selectGroupHint: 'Select a card to edit its matches',
		cutlineTracker: 'Live cutline tracker',
		bestThirdTable: 'Best third-place table',
		topEightAdvance: 'Top 8 advance',
		group: 'Group',
		status: 'Status',
		thirdTieNote:
			'Scores calculate points, goal difference and goals scored. Exact ties can still depend on team conduct score and FIFA ranking.',
		routePreview: 'Route preview',
		projectedRound32: 'Projected Round of 32',
		projection: 'Projection',
		thirdAllocationTitle: 'Third-place allocation',
		thirdAllocationNote:
			"The eight qualifying third-place groups are assigned using FIFA's official 495-combination Annex C matrix.",
		moroccoRoute: 'Morocco route',
		inProgress: 'In progress',
		complete: 'Complete',
		played: 'Final',
		upcoming: 'Scenario',
		direct: 'Direct',
		thirdQualified: 'Best third',
		bubble: 'Outside cutline',
		eliminated: 'Eliminated',
		projected: 'Projected',
		position: 'Position',
		points: 'Points',
		goalDifference: 'Goal difference',
		nextOpponent: 'Next opponent',
		possibleOpponents: 'Possible opponents',
		winnerGroup: 'Winner Group',
		runnerGroup: 'Runner-up Group',
		thirdGroup: 'Third Group',
		match: 'Match',
		possible: 'Possible',
		scenarioSaved: 'Scenario saved',
		scenarioLoaded: 'Scenario loaded',
		scenarioDeleted: 'Scenario deleted',
		resetDone: 'Current results restored',
		remainingCleared: 'Remaining scores cleared',
		randomized: 'Remaining matches randomized',
		imported: 'Scenario imported',
		invalidFile: 'Invalid scenario file',
		exported: 'Scenario exported',
		scenarioName: 'Scenario name',
		noName: 'Scenario',
		updated: 'Updated just now',
		first: '1st',
		second: '2nd',
		third: '3rd',
		fourth: '4th',
		routeDirectFirst: 'Finish 1st in Group C',
		routeDirectSecond: 'Finish 2nd in Group C',
		routeThird: 'Qualify as a best third-place team',
		routeOut: 'Currently outside the knockout places',
		roundOf16: 'Round of 16',
		quarterfinal: 'Quarter-final',
		semifinal: 'Semi-final',
		needsScores: 'Enter the remaining scores to refine the route.',
		fullBracket: 'Full bracket',
		allTeams: 'All 48 teams',
		rankingEyebrow: 'Bracket-based standings',
		overallRanking: 'Overall ranking',
		rankingCount: '48 teams',
		groupPosition: 'Group pos.',
		overallRankingNote:
			'Ranking follows tournament progress: champion, runner-up, third, fourth, then elimination round. MP, W, D, L, GF, GA, GD and points include completed group and knockout matches; shootout draws remain draws in the statistics.',
		thirdPlaceFinish: 'Third place',
		fourthPlace: 'Fourth place',
		groupStage: 'Group stage',
		fullKnockoutBracket: 'Full knockout bracket',
		editKnockoutHint:
			'Enter knockout scores and winners will advance automatically.',
		clearKnockout: 'Clear knockout',
		randomizeKnockout: 'Randomize bracket',
		final: 'Final',
		thirdPlace: 'Third-place match',
		champion: 'World champion',
		selectPenaltyWinner: 'Select the penalty winner',
		penalties: 'Penalties',
		advances: 'Advances',
		knockoutCleared: 'Knockout scores cleared',
		knockoutRandomized: 'Knockout bracket randomized',
		waitingTeams: 'Waiting for teams',
		winnerMatch: 'Winner Match',
		loserMatch: 'Loser Match',
		runnerUp: 'Runner-up',
		tournamentWinner: 'Tournament winner',
	},
	ar: {
		eyebrow: 'محاكي السيناريوهات',
		possibilities: 'الاحتمالات',
		dataThrough: 'النتائج حتى 23 يونيو 2026',
		moroccoFocus: 'تركيز على المغرب',
		setFinalMatch: 'نتيجة المغرب–هايتي:',
		win: 'فوز',
		draw: 'تعادل',
		loss: 'خسارة',
		clear: 'مسح',
		scenarioOverview: 'نظرة على السيناريو',
		scoresEntered: 'نتيجة مدخلة',
		groupsComplete: 'مجموعة مكتملة',
		projectedQualified: 'متأهل متوقع',
		resetCurrent: 'استرجاع النتائج الحالية',
		clearRemaining: 'مسح المباريات المتبقية',
		randomize: 'نتائج عشوائية',
		saveScenario: 'حفظ السيناريو',
		export: 'تصدير',
		import: 'استيراد',
		saved: 'المحفوظة',
		scenarios: 'السيناريوهات',
		groups: 'المجموعات',
		bestThird: 'أفضل الثوالث',
		round32: 'دور الـ32',
		editScores: 'غيّر أي نتيجة',
		groupSimulator: 'محاكي المجموعات',
		team: 'المنتخب',
		directQualification: 'الأول والثاني يتأهلان',
		thirdPossibility: 'الثالث قد يتأهل',
		matchesAndScores: 'المباريات والنتائج',
		instantUpdate: 'الترتيب يتحدث فوراً',
		allGroupsSnapshot: 'ملخص جميع المجموعات',
		selectGroupHint: 'اختر بطاقة لتعديل مبارياتها',
		cutlineTracker: 'متابعة خط التأهل',
		bestThirdTable: 'ترتيب أفضل الثوالث',
		topEightAdvance: 'أفضل 8 يتأهلون',
		group: 'المجموعة',
		status: 'الحالة',
		thirdTieNote:
			'يتم الحساب بالنقاط وفارق الأهداف والأهداف المسجلة. التعادل الكامل قد يعتمد على اللعب النظيف وتصنيف FIFA.',
		routePreview: 'معاينة المسار',
		projectedRound32: 'دور الـ32 المتوقع',
		projection: 'توقع',
		thirdAllocationTitle: 'توزيع أصحاب المركز الثالث',
		thirdAllocationNote:
			'يتم توزيع أفضل ثمانية منتخبات تحتل المركز الثالث باستخدام مصفوفة FIFA الرسمية التي تضم 495 احتمالاً في الملحق C.',
		moroccoRoute: 'مسار المغرب',
		inProgress: 'جارية',
		complete: 'مكتملة',
		played: 'نهائية',
		upcoming: 'سيناريو',
		direct: 'تأهل مباشر',
		thirdQualified: 'من أفضل الثوالث',
		bubble: 'خارج خط التأهل',
		eliminated: 'خروج',
		projected: 'متوقع',
		position: 'المركز',
		points: 'النقاط',
		goalDifference: 'فارق الأهداف',
		nextOpponent: 'الخصم القادم',
		possibleOpponents: 'خصوم محتملون',
		winnerGroup: 'متصدر المجموعة',
		runnerGroup: 'وصيف المجموعة',
		thirdGroup: 'ثالث المجموعة',
		match: 'المباراة',
		possible: 'ممكن',
		scenarioSaved: 'تم حفظ السيناريو',
		scenarioLoaded: 'تم تحميل السيناريو',
		scenarioDeleted: 'تم حذف السيناريو',
		resetDone: 'تم استرجاع النتائج الحالية',
		remainingCleared: 'تم مسح النتائج المتبقية',
		randomized: 'تم إنشاء نتائج عشوائية',
		imported: 'تم استيراد السيناريو',
		invalidFile: 'ملف السيناريو غير صالح',
		exported: 'تم تصدير السيناريو',
		scenarioName: 'اسم السيناريو',
		noName: 'سيناريو',
		updated: 'تم التحديث الآن',
		first: 'الأول',
		second: 'الثاني',
		third: 'الثالث',
		fourth: 'الرابع',
		routeDirectFirst: 'إنهاء المجموعة C في المركز الأول',
		routeDirectSecond: 'إنهاء المجموعة C في المركز الثاني',
		routeThird: 'التأهل ضمن أفضل أصحاب المركز الثالث',
		routeOut: 'حالياً خارج مراكز التأهل',
		roundOf16: 'دور الـ16',
		quarterfinal: 'ربع النهائي',
		semifinal: 'نصف النهائي',
		needsScores: 'أدخل النتائج المتبقية لتحديد المسار بدقة أكبر.',
		fullBracket: 'الجدول الكامل',
		allTeams: 'جميع المنتخبات الـ48',
		rankingEyebrow: 'الترتيب حسب الأدوار الإقصائية',
		overallRanking: 'الترتيب العام',
		rankingCount: '48 منتخباً',
		groupPosition: 'مركز المجموعة',
		overallRankingNote:
			'يتبع الترتيب مسار البطولة: البطل ثم الوصيف ثم المركز الثالث والرابع، وبعدها حسب دور الإقصاء. تشمل الإحصاءات مباريات المجموعات والمباريات الإقصائية المكتملة، وتُحتسب المباريات التي حُسمت بركلات الترجيح كتعادل في الإحصاءات.',
		thirdPlaceFinish: 'المركز الثالث',
		fourthPlace: 'المركز الرابع',
		groupStage: 'دور المجموعات',
		fullKnockoutBracket: 'الجدول الكامل للأدوار الإقصائية',
		editKnockoutHint:
			'أدخل نتائج الأدوار الإقصائية وسيتأهل الفائز تلقائياً.',
		clearKnockout: 'مسح الأدوار الإقصائية',
		randomizeKnockout: 'نتائج عشوائية للجدول',
		final: 'النهائي',
		thirdPlace: 'مباراة المركز الثالث',
		champion: 'بطل العالم',
		selectPenaltyWinner: 'اختر الفائز بركلات الترجيح',
		penalties: 'ركلات الترجيح',
		advances: 'يتأهل على',
		knockoutCleared: 'تم مسح نتائج الأدوار الإقصائية',
		knockoutRandomized: 'تم إنشاء نتائج عشوائية للجدول',
		waitingTeams: 'بانتظار المنتخبات',
		winnerMatch: 'فائز المباراة',
		loserMatch: 'خاسر المباراة',
		runnerUp: 'الوصيف',
		tournamentWinner: 'بطل البطولة',
	},
};

const STORAGE_KEY = 'wc26-possibilities-state-v1';
const SAVED_KEY = 'wc26-possibilities-saved-v1';
let state = loadState();
let selectedGroup = state.selectedGroup || 'C';
let lang = state.lang || 'en';
let toastTimer;

function cloneBase() {
	return BASE_MATCHES.map(x => ({ ...x }));
}
function loadState() {
	try {
		const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
		if (
			parsed &&
			Array.isArray(parsed.matches) &&
			parsed.matches.length === BASE_MATCHES.length
		) {
			parsed.knockout =
				parsed.knockout && typeof parsed.knockout === 'object'
					? parsed.knockout
					: {};
			return parsed;
		}
	} catch (_) {}
	return {
		matches: cloneBase(),
		knockout: {},
		selectedGroup: 'C',
		lang: 'en',
		theme: 'dark',
	};
}
function persist() {
	state.selectedGroup = selectedGroup;
	state.lang = lang;
	state.knockout =
		state.knockout && typeof state.knockout === 'object'
			? state.knockout
			: {};
	localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function t(key) {
	return I18N[lang][key] || I18N.en[key] || key;
}
function teamName(code) {
	return lang === 'ar' ? TEAMS[code].ar : TEAMS[code].name;
}
function scoreSet(match) {
	return (
		Number.isInteger(match.homeScore) && Number.isInteger(match.awayScore)
	);
}
function ordinal(n) {
	return (
		[t('first'), t('second'), t('third'), t('fourth')][n - 1] || String(n)
	);
}

function getStandings(group) {
	const rows = GROUPS[group].map(code => ({
		code,
		mp: 0,
		w: 0,
		d: 0,
		l: 0,
		gf: 0,
		ga: 0,
		gd: 0,
		pts: 0,
		h2hPts: 0,
		h2hGd: 0,
		h2hGf: 0,
	}));
	const byCode = Object.fromEntries(rows.map(r => [r.code, r]));
	const matches = state.matches.filter(x => x.group === group && scoreSet(x));
	for (const match of matches) {
		const h = byCode[match.home],
			a = byCode[match.away];
		h.mp++;
		a.mp++;
		h.gf += match.homeScore;
		h.ga += match.awayScore;
		a.gf += match.awayScore;
		a.ga += match.homeScore;
		if (match.homeScore > match.awayScore) {
			h.w++;
			a.l++;
			h.pts += 3;
		} else if (match.homeScore < match.awayScore) {
			a.w++;
			h.l++;
			a.pts += 3;
		} else {
			h.d++;
			a.d++;
			h.pts++;
			a.pts++;
		}
	}
	rows.forEach(r => (r.gd = r.gf - r.ga));
	const pointBuckets = new Map();
	rows.forEach(r => {
		if (!pointBuckets.has(r.pts)) pointBuckets.set(r.pts, []);
		pointBuckets.get(r.pts).push(r);
	});
	const ordered = [];
	[...pointBuckets.keys()]
		.sort((a, b) => b - a)
		.forEach(points => {
			const bucket = pointBuckets.get(points);
			if (bucket.length === 1) {
				ordered.push(bucket[0]);
				return;
			}
			const tiedCodes = new Set(bucket.map(r => r.code));
			bucket.forEach(r => {
				r.h2hPts = 0;
				r.h2hGd = 0;
				r.h2hGf = 0;
			});
			matches
				.filter(x => tiedCodes.has(x.home) && tiedCodes.has(x.away))
				.forEach(match => {
					const h = byCode[match.home],
						a = byCode[match.away];
					h.h2hGf += match.homeScore;
					h.h2hGd += match.homeScore - match.awayScore;
					a.h2hGf += match.awayScore;
					a.h2hGd += match.awayScore - match.homeScore;
					if (match.homeScore > match.awayScore) h.h2hPts += 3;
					else if (match.homeScore < match.awayScore) a.h2hPts += 3;
					else {
						h.h2hPts++;
						a.h2hPts++;
					}
				});
			bucket.sort(
				(a, b) =>
					b.h2hPts - a.h2hPts ||
					b.h2hGd - a.h2hGd ||
					b.h2hGf - a.h2hGf ||
					b.gd - a.gd ||
					b.gf - a.gf ||
					a.code.localeCompare(b.code),
			);
			ordered.push(...bucket);
		});
	return ordered;
}

function getAllTables() {
	return Object.fromEntries(
		Object.keys(GROUPS).map(g => [g, getStandings(g)]),
	);
}
function getThirdTable(tables = getAllTables()) {
	return Object.entries(tables)
		.map(([group, rows]) => ({ ...rows[2], group }))
		.sort(
			(a, b) =>
				b.pts - a.pts ||
				b.gd - a.gd ||
				b.gf - a.gf ||
				a.group.localeCompare(b.group),
		);
}
function groupComplete(group) {
	return state.matches.filter(x => x.group === group).every(scoreSet);
}
function resolveSeed(seed, tables) {
	const pos = Number(seed[0]) - 1,
		group = seed[1];
	return tables[group]?.[pos]?.code || null;
}
function formatKickoff(iso) {
	return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-MA' : 'en-GB', {
		day: '2-digit',
		month: 'short',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		timeZone: 'Africa/Casablanca',
	}).format(new Date(iso));
}
function formatGd(value) {
	return value > 0 ? `+${value}` : String(value);
}

function getThirdAssignments(qualifyingGroups) {
	const key = [...qualifyingGroups].sort().join('');
	const officialRow = ANNEX_C[key];
	if (officialRow) {
		return Object.fromEntries(
			ANNEX_MATCH_ORDER.map((matchNo, index) => [
				matchNo,
				officialRow[index],
			]),
		);
	}
	return getThirdAssignmentsFallback(qualifyingGroups);
}

function getThirdAssignmentsFallback(qualifyingGroups) {
	const slots = R32.filter(x => x.third).map(x => ({
		no: x.no,
		allowed: x.third,
	}));
	const groupSet = new Set(qualifyingGroups);
	const candidates = slots.map(slot => ({
		...slot,
		options: slot.allowed.filter(g => groupSet.has(g)).sort(),
	}));
	const solutions = [];
	const used = new Set();
	function walk(index, current) {
		if (index === candidates.length) {
			solutions.push({ ...current });
			return;
		}
		const remaining = candidates
			.slice(index)
			.sort(
				(a, b) =>
					a.options.filter(x => !used.has(x)).length -
						b.options.filter(x => !used.has(x)).length ||
					a.no - b.no,
			);
		const slot = remaining[0];
		const originalIndex = candidates.findIndex(x => x.no === slot.no);
		const reordered = [
			slot,
			...candidates.filter((_, i) => i !== originalIndex).slice(index),
		];
		// The recursive solver below chooses the most constrained unassigned slot directly.
		const assignedNos = new Set(Object.keys(current).map(Number));
		const next = candidates
			.filter(s => !assignedNos.has(s.no))
			.sort(
				(a, b) =>
					a.options.filter(x => !used.has(x)).length -
						b.options.filter(x => !used.has(x)).length ||
					a.no - b.no,
			)[0];
		if (!next) return;
		for (const group of next.options) {
			if (used.has(group)) continue;
			used.add(group);
			current[next.no] = group;
			walk(index + 1, current);
			delete current[next.no];
			used.delete(group);
			if (solutions.length > 2000) return;
		}
	}
	walk(0, {});
	if (!solutions.length) return {};
	const order = slots.map(s => s.no).sort((a, b) => a - b);
	solutions.sort((a, b) =>
		order
			.map(no => a[no] || 'Z')
			.join('')
			.localeCompare(order.map(no => b[no] || 'Z').join('')),
	);
	return solutions[0];
}

function captureScoreFocus() {
	const active = document.activeElement;
	if (active?.classList.contains('score-input')) {
		return {
			kind: 'group',
			match: active.dataset.match,
			side: active.dataset.side,
		};
	}
	if (active?.classList.contains('knockout-score-input')) {
		return {
			kind: 'knockout',
			match: active.dataset.koMatch,
			side: active.dataset.koSide,
		};
	}
	return null;
}

function restoreScoreFocus(focus) {
	if (!focus) return;
	const selector =
		focus.kind === 'knockout'
			? `.knockout-score-input[data-ko-match="${focus.match}"][data-ko-side="${focus.side}"]`
			: `.score-input[data-match="${focus.match}"][data-side="${focus.side}"]`;
	document.querySelector(selector)?.focus({ preventScroll: true });
}

function render() {
	const scoreFocus = captureScoreFocus();
	applyLanguage();
	const tables = getAllTables();
	const third = getThirdTable(tables);
	renderSummary(tables, third);
	renderGroupSwitcher();
	renderSelectedGroup(tables, third);
	renderGroupCards(tables, third);
	renderThird(third);
	const knockoutModel = buildKnockoutModel(tables, third);
	renderOverallRanking(tables, third, knockoutModel);
	renderBracket(tables, third, knockoutModel);
	renderSaved();
	persist();
	restoreScoreFocus(scoreFocus);
}

function applyLanguage() {
	document.documentElement.lang = lang;
	document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
	document
		.querySelectorAll('[data-i18n]')
		.forEach(el => (el.textContent = t(el.dataset.i18n)));
	document
		.querySelectorAll('[data-team]')
		.forEach(el => (el.textContent = teamName(el.dataset.team)));
	document.getElementById('languageButton').textContent =
		lang === 'en' ? 'AR' : 'EN';
	document.body.classList.toggle('light', state.theme === 'light');
	document.getElementById('themeButton').textContent =
		state.theme === 'light' ? '☀' : '☾';
}

function renderSummary(tables, third) {
	const entered = state.matches.filter(scoreSet).length;
	const complete = Object.keys(GROUPS).filter(groupComplete).length;
	document.getElementById('matchesEntered').textContent = entered;
	document.getElementById('groupsComplete').textContent = complete;
	document.getElementById('qualifiedCount').textContent = 32;
	document.getElementById('tournamentProgress').style.width =
		`${(entered / 72) * 100}%`;
	document.getElementById('scenarioTimestamp').textContent =
		`${t('updated')} · ${entered}/72`;
	const marIndex = tables.C.findIndex(r => r.code === 'MAR');
	const mar = tables.C[marIndex];
	const thirdRank = third.findIndex(r => r.code === 'MAR');
	document.getElementById('moroccoPosition').textContent =
		`${ordinal(marIndex + 1)} C`;
	document.getElementById('moroccoSummary').innerHTML =
		[
			[mar.pts, t('points')],
			[mar.mp, 'MP'],
			[formatGd(mar.gd), t('goalDifference')],
			[mar.gf, 'GF'],
			[mar.ga, 'GA'],
		]
			.map(
				([v, l]) =>
					`<div class="metric-chip"><strong>${v}</strong><span>${l}</span></div>`,
			)
			.join('') +
		(marIndex === 2
			? `<div class="metric-chip"><strong>${thirdRank + 1}</strong><span>${t('bestThird')}</span></div>`
			: '');
}

function renderGroupSwitcher() {
	const wrap = document.getElementById('groupSwitcher');
	wrap.innerHTML = Object.keys(GROUPS)
		.map(
			g =>
				`<button class="group-button ${g === selectedGroup ? 'active' : ''}" data-group="${g}">${g}</button>`,
		)
		.join('');
	wrap.querySelectorAll('button').forEach(btn =>
		btn.addEventListener('click', () => {
			selectedGroup = btn.dataset.group;
			render();
		}),
	);
}

function renderSelectedGroup(tables, third) {
	const rows = tables[selectedGroup];
	const complete = groupComplete(selectedGroup);
	document.getElementById('groupTitle').textContent =
		`${t('group')} ${selectedGroup}`;
	document.getElementById('groupState').textContent = complete
		? t('complete')
		: t('inProgress');
	document.getElementById('groupStandings').innerHTML = rows
		.map((row, index) => standingRow(row, index, third))
		.join('');
	const matches = state.matches.filter(x => x.group === selectedGroup);
	document.getElementById('groupMatches').innerHTML = matches
		.map(match => matchCard(match))
		.join('');
	document
		.querySelectorAll('.score-input')
		.forEach(input => input.addEventListener('input', onScoreInput));
}

function standingRow(row, index, third) {
	const thirdRank = third.findIndex(x => x.code === row.code);
	const cls =
		index < 2
			? 'qualify-direct'
			: index === 2 && thirdRank < 8
				? 'qualify-third'
				: '';
	return `<tr class="${cls}"><td class="rank-number">${index + 1}</td><td><div class="team-cell"><span class="team-flag">${TEAMS[row.code].flag}</span><span class="team-name"><strong>${teamName(row.code)}</strong><span class="team-code">${row.code}</span></span></div></td><td>${row.mp}</td><td>${row.w}</td><td>${row.d}</td><td>${row.l}</td><td>${formatGd(row.gd)}</td><td class="points">${row.pts}</td></tr>`;
}

function matchCard(match) {
	const set = scoreSet(match);
	return `<div class="match-card">
    <div class="match-team"><span>${TEAMS[match.home].flag}</span><span class="team-long">${teamName(match.home)}</span><span class="team-code">${match.home}</span></div>
    <div class="score-box"><input class="score-input" inputmode="numeric" min="0" max="20" type="number" data-match="${match.id}" data-side="home" value="${match.homeScore ?? ''}" aria-label="${match.home} score"><span class="score-separator">–</span><input class="score-input" inputmode="numeric" min="0" max="20" type="number" data-match="${match.id}" data-side="away" value="${match.awayScore ?? ''}" aria-label="${match.away} score"></div>
    <div class="match-team away"><span class="team-code">${match.away}</span><span class="team-long">${teamName(match.away)}</span><span>${TEAMS[match.away].flag}</span></div>
    <div class="match-meta"><span>${formatKickoff(match.kickoff)}</span><span class="${match.played ? 'result-badge' : 'upcoming-badge'}">${match.played ? t('played') : t('upcoming')}</span></div>
  </div>`;
}

function onScoreInput(event) {
	const match = state.matches.find(x => x.id === event.target.dataset.match);
	if (!match) return;
	const raw = event.target.value;
	const value =
		raw === ''
			? null
			: Math.max(0, Math.min(20, Number.parseInt(raw, 10) || 0));
	if (event.target.dataset.side === 'home') match.homeScore = value;
	else match.awayScore = value;
	if (match.homeScore === null || match.awayScore === null) {
		if (raw === '') {
			if (event.target.dataset.side === 'home') match.homeScore = null;
			else match.awayScore = null;
		}
	}
	window.requestAnimationFrame(render);
}

function renderGroupCards(tables, third) {
	const wrap = document.getElementById('groupCards');
	wrap.innerHTML = Object.entries(tables)
		.map(([group, rows]) => {
			return `<article class="group-mini-card" data-group="${group}"><div class="group-mini-title"><span>${t('group')} ${group}</span><span class="muted">${groupComplete(group) ? '✓' : '…'}</span></div>${rows
				.map((row, index) => {
					const thirdRank = third.findIndex(x => x.code === row.code);
					const cls =
						index < 2
							? 'direct'
							: index === 2 && thirdRank < 8
								? 'third'
								: '';
					return `<div class="group-mini-row ${cls}"><strong class="group-mini-rank">${index + 1}</strong><span class="group-mini-team"><span class="group-mini-flag">${TEAMS[row.code].flag}</span><span class="group-mini-name">${teamName(row.code)}</span></span><b class="group-mini-points">${row.pts}</b></div>`;
				})
				.join('')}</article>`;
		})
		.join('');
	wrap.querySelectorAll('.group-mini-card').forEach(card =>
		card.addEventListener('click', () => {
			selectedGroup = card.dataset.group;
			switchView('groups');
			render();
			window.scrollTo({
				top: document.getElementById('groupsView').offsetTop - 85,
				behavior: 'smooth',
			});
		}),
	);
}

function renderThird(third) {
	document.getElementById('thirdStandings').innerHTML = third
		.map((row, index) => {
			const inTop = index < 8;
			const status = inTop ? t('thirdQualified') : t('bubble');
			return `<tr class="${inTop ? 'qualify-third' : ''} ${index === 7 ? 'cutline' : ''}"><td>${index + 1}</td><td><div class="team-cell"><span class="team-flag">${TEAMS[row.code].flag}</span><span class="team-name"><strong>${teamName(row.code)}</strong><span class="team-code">${row.code}</span></span></div></td><td>${row.group}</td><td>${row.mp}</td><td>${formatGd(row.gd)}</td><td>${row.gf}</td><td class="points">${row.pts}</td><td><span class="status-label ${inTop ? 'in' : 'out'}">${status}</span></td></tr>`;
		})
		.join('');
}

function renderOverallRanking(tables, third, knockoutModel) {
	const model = knockoutModel || buildKnockoutModel(tables, third);
	const ranking = Object.entries(tables).flatMap(([group, rows]) =>
		rows.map((row, index) => ({
			...row,
			group,
			groupPosition: index + 1,
		})),
	);

	const progress = new Map(
		ranking.map(row => [row.code, { score: 0, statusKey: 'groupStage' }]),
	);
	const cumulative = new Map(ranking.map(row => [row.code, row]));
	Object.values(model.results).forEach(match => {
		const home = cumulative.get(match.home);
		const away = cumulative.get(match.away);
		const homeScore = match.record?.home;
		const awayScore = match.record?.away;
		if (
			!home ||
			!away ||
			!Number.isInteger(homeScore) ||
			!Number.isInteger(awayScore)
		)
			return;
		home.mp++;
		away.mp++;
		home.gf += homeScore;
		home.ga += awayScore;
		away.gf += awayScore;
		away.ga += homeScore;
		if (homeScore > awayScore) {
			home.w++;
			away.l++;
			home.pts += 3;
		} else if (awayScore > homeScore) {
			away.w++;
			home.l++;
			away.pts += 3;
		} else {
			home.d++;
			away.d++;
			home.pts++;
			away.pts++;
		}
		home.gd = home.gf - home.ga;
		away.gd = away.gf - away.ga;
	});
	[
		['r32', 1, 'round32'],
		['r16', 2, 'roundOf16'],
		['qf', 3, 'quarterfinal'],
		['sf', 4, 'semifinal'],
		['third', 5, 'thirdPlace'],
		['final', 6, 'final'],
	].forEach(([stage, score, statusKey]) => {
		(model.stages[stage] || []).forEach(match => {
			[match.home, match.away].filter(Boolean).forEach(code => {
				if (score > progress.get(code).score)
					progress.set(code, { score, statusKey });
			});
		});
	});

	const placements = new Map();
	const finalMatch = model.results[104];
	const thirdMatch = model.results[103];
	if (finalMatch?.winner) {
		placements.set(finalMatch.winner, { place: 1, statusKey: 'champion' });
		placements.set(finalMatch.loser, { place: 2, statusKey: 'runnerUp' });
	}
	if (thirdMatch?.winner) {
		placements.set(thirdMatch.winner, {
			place: 3,
			statusKey: 'thirdPlaceFinish',
		});
		placements.set(thirdMatch.loser, {
			place: 4,
			statusKey: 'fourthPlace',
		});
	}

	const tournamentScore = code => {
		const placement = placements.get(code);
		if (placement?.place === 1) return 610;
		if (placement?.place === 2) return 609;
		if (placement?.place === 3) return 510;
		if (placement?.place === 4) return 509;
		return progress.get(code).score * 100;
	};

	ranking.sort(
		(a, b) =>
			tournamentScore(b.code) - tournamentScore(a.code) ||
			b.pts - a.pts ||
			b.gd - a.gd ||
			b.gf - a.gf ||
			b.w - a.w ||
			a.ga - b.ga ||
			a.groupPosition - b.groupPosition ||
			teamName(a.code).localeCompare(teamName(b.code), lang),
	);

	document.getElementById('overallStandings').innerHTML = ranking
		.map((row, index) => {
			const placement = placements.get(row.code);
			const stage = progress.get(row.code);
			const status = t(placement?.statusKey || stage.statusKey);
			const statusClass = stage.score > 0 || placement ? 'in' : 'out';
			const rowClass = placement
				? `ranking-place-${placement.place}`
				: stage.score > 0
					? 'qualify-direct'
					: '';
			const rank = ['🥇', '🥈', '🥉'][index] || index + 1;
			return `<tr class="${rowClass}"><td class="overall-rank">${rank}</td><td><div class="team-cell"><span class="team-flag">${TEAMS[row.code].flag}</span><span class="team-name"><strong>${teamName(row.code)}</strong><span class="team-code">${row.code}</span></span></div></td><td><span class="ranking-group">${row.group}</span></td><td>${row.groupPosition}</td><td>${row.mp}</td><td>${row.w}</td><td>${row.d}</td><td>${row.l}</td><td>${row.gf}</td><td>${row.ga}</td><td>${formatGd(row.gd)}</td><td class="points">${row.pts}</td><td><span class="status-label ${statusClass}">${status}</span></td></tr>`;
		})
		.join('');
}

function ensureKnockoutStore() {
	if (!state.knockout || typeof state.knockout !== 'object')
		state.knockout = {};
}

function knockoutSourceLabel(source) {
	if (!source) return 'TBD';
	if (/^W\d+$/.test(source)) return `${t('winnerMatch')} ${source.slice(1)}`;
	if (/^L\d+$/.test(source)) return `${t('loserMatch')} ${source.slice(1)}`;
	if (/^1[A-L]$/.test(source)) return `${t('winnerGroup')} ${source[1]}`;
	if (/^2[A-L]$/.test(source)) return `${t('runnerGroup')} ${source[1]}`;
	if (/^3[A-L]$/.test(source)) return `${t('thirdGroup')} ${source[1]}`;
	return source;
}

function resolveProgressionSource(source, results) {
	const matchNo = Number(source.slice(1));
	const match = results[matchNo];
	return source[0] === 'L' ? match?.loser || null : match?.winner || null;
}

function ensureKnockoutRecord(no, home, away, homeKey, awayKey) {
	ensureKnockoutStore();
	const key = String(no);
	const signature = `${home || homeKey || ''}|${away || awayKey || ''}`;
	let record = state.knockout[key];
	if (!record || record.signature !== signature) {
		record = { home: null, away: null, tiebreakWinner: null, signature };
		state.knockout[key] = record;
	}
	record.homeTeam = home || null;
	record.awayTeam = away || null;
	if (record.tiebreakWinner !== home && record.tiebreakWinner !== away)
		record.tiebreakWinner = null;
	return record;
}

function knockoutOutcome(home, away, record) {
	if (
		!home ||
		!away ||
		!Number.isInteger(record.home) ||
		!Number.isInteger(record.away)
	)
		return { winner: null, loser: null };
	if (record.home > record.away) return { winner: home, loser: away };
	if (record.away > record.home) return { winner: away, loser: home };
	if (record.tiebreakWinner === home) return { winner: home, loser: away };
	if (record.tiebreakWinner === away) return { winner: away, loser: home };
	return { winner: null, loser: null };
}

function createKnockoutMatch(
	def,
	stage,
	home,
	away,
	homeKey,
	awayKey,
	randomize = false,
	possibleGroups = [],
) {
	const record = ensureKnockoutRecord(def.no, home, away, homeKey, awayKey);
	if (randomize && home && away) {
		let homeScore = Math.floor(Math.random() * 5);
		let awayScore = Math.floor(Math.random() * 5);
		while (homeScore === awayScore)
			awayScore = Math.floor(Math.random() * 5);
		record.home = homeScore;
		record.away = awayScore;
		record.tiebreakWinner = null;
	}
	const outcome = knockoutOutcome(home, away, record);
	return {
		no: def.no,
		stage,
		home,
		away,
		homeKey,
		awayKey,
		record,
		possibleGroups,
		...outcome,
	};
}

function buildKnockoutModel(tables, third, { randomize = false } = {}) {
	const qualifyingGroups = third.slice(0, 8).map(x => x.group);
	const assignments = getThirdAssignments(qualifyingGroups);
	const results = {};
	const stages = { r32: [], r16: [], qf: [], sf: [], final: [], third: [] };

	for (const def of R32) {
		const home = resolveSeed(def.a, tables);
		const awayKey = def.b || `3${assignments[def.no] || '?'}`;
		const away = def.b
			? resolveSeed(def.b, tables)
			: assignments[def.no]
				? tables[assignments[def.no]][2].code
				: null;
		const match = createKnockoutMatch(
			def,
			'r32',
			home,
			away,
			def.a,
			awayKey,
			randomize,
			def.third || [],
		);
		results[def.no] = match;
		stages.r32.push(match);
	}

	for (const [stage, definitions] of [
		['r16', R16],
		['qf', QF],
		['sf', SF],
		['final', FINAL],
		['third', THIRD_PLACE],
	]) {
		for (const def of definitions) {
			const home = resolveProgressionSource(def.home, results);
			const away = resolveProgressionSource(def.away, results);
			const match = createKnockoutMatch(
				def,
				stage,
				home,
				away,
				def.home,
				def.away,
				randomize,
			);
			results[def.no] = match;
			stages[stage].push(match);
		}
	}

	return {
		qualifyingGroups,
		assignments,
		results,
		stages,
		completed: Object.values(results).filter(x => x.winner).length,
	};
}

function renderBracket(tables, third, providedModel = null) {
	const model = providedModel || buildKnockoutModel(tables, third);

	const pick = matchNumbers =>
		matchNumbers.map(no => model.results[no]).filter(Boolean);

	const leftColumns = [
		{
			key: 'r32',
			titleKey: 'round32',
			items: pick([74, 77, 73, 75, 83, 84, 81, 82]),
		},
		{
			key: 'r16',
			titleKey: 'roundOf16',
			items: pick([89, 90, 93, 94]),
		},
		{
			key: 'qf',
			titleKey: 'quarterfinal',
			items: pick([97, 98]),
		},
		{
			key: 'sf',
			titleKey: 'semifinal',
			items: pick([101]),
		},
	];

	const rightColumns = [
		{
			key: 'sf',
			titleKey: 'semifinal',
			items: pick([102]),
		},
		{
			key: 'qf',
			titleKey: 'quarterfinal',
			items: pick([99, 100]),
		},
		{
			key: 'r16',
			titleKey: 'roundOf16',
			items: pick([91, 92, 95, 96]),
		},
		{
			key: 'r32',
			titleKey: 'round32',
			items: pick([76, 78, 79, 80, 86, 88, 85, 87]),
		},
	];

	document.getElementById('tournamentBracket').innerHTML = `
    <div class="bracket-board">

      <div class="bracket-wing bracket-wing-left">
        ${leftColumns
			.map(column => renderBracketColumn(column, 'right'))
			.join('')}
      </div>

      <div class="bracket-center-column">
        <div class="bracket-stage-title bracket-final-title">
          <span>${t('final')}</span>
          <b>1</b>
        </div>

        <div class="bracket-final-grid">
          <div class="bracket-final-card">
            <div
              class="final-trophy"
              aria-hidden="true"
            >
              🏆
            </div>

            ${renderKnockoutCard(model.results[104])}
          </div>

          <div class="bracket-third-card">
            <div class="bracket-third-label">
              <span aria-hidden="true">🥉</span>
              <strong>${t('thirdPlace')}</strong>
            </div>
            ${renderKnockoutCard(model.results[103])}
          </div>
        </div>
      </div>

      <div class="bracket-wing bracket-wing-right">
        ${rightColumns
			.map(column => renderBracketColumn(column, 'left'))
			.join('')}
      </div>

    </div>
  `;

	document
		.querySelectorAll('.knockout-score-input')
		.forEach(input =>
			input.addEventListener('change', onKnockoutScoreInput),
		);

	document
		.querySelectorAll('[data-penalty-winner]')
		.forEach(button => button.addEventListener('click', onPenaltyWinner));

	document.getElementById('bracketState').textContent = model.results[104]
		?.winner
		? t('complete')
		: `${model.completed}/32`;

	renderChampionPanels(model);
	renderMoroccoRoute(tables, third, model);
}

function renderBracketColumn(column, connectorDirection) {
	const totalRows = 8;
	const count = column.items.length;
	const span = totalRows / count;

	const cards = column.items
		.map((match, index) => {
			const start = index * span + 1;

			const pairClass = index % 2 === 0 ? 'pair-upper' : 'pair-lower';

			return `
        <div
          class="bracket-match-slot ${pairClass}"
          style="grid-row:${start} / span ${span}"
        >
          <span
            class="bracket-connector"
            aria-hidden="true"
          ><i class="third-place-branch"></i></span>

          ${renderKnockoutCard(match)}
        </div>
      `;
		})
		.join('');

	return `
    <section
      class="
        bracket-column
        stage-${column.key}
        connector-${connectorDirection}
      "
    >
      <div class="bracket-stage-title">
        <span>${t(column.titleKey)}</span>
        <b>${count}</b>
      </div>

      <div class="bracket-column-grid">
        ${cards}
      </div>
    </section>
  `;
}

function renderKnockoutCard(match) {
	const tied =
		match.home &&
		match.away &&
		Number.isInteger(match.record.home) &&
		Number.isInteger(match.record.away) &&
		match.record.home === match.record.away;
	const footer = match.possibleGroups?.length
		? `<div class="possible-groups"><span class="projected-tag">${t('possible')}</span> ${match.possibleGroups.map(group => `3${group}`).join(' · ')}</div>`
		: '';
	const penaltyPicker = tied
		? `<div class="penalty-picker"><span>${t('selectPenaltyWinner')}</span><div><button class="${match.record.tiebreakWinner === match.home ? 'selected' : ''}" data-penalty-winner="${match.home}" data-ko-match="${match.no}">${match.home}</button><button class="${match.record.tiebreakWinner === match.away ? 'selected' : ''}" data-penalty-winner="${match.away}" data-ko-match="${match.no}">${match.away}</button></div></div>`
		: '';
	return `<article class="knockout-match ${match.winner ? 'decided' : ''} ${match.home === 'MAR' || match.away === 'MAR' ? 'morocco-match' : ''}">
    <div class="knockout-match-head"><span>${t('match')} ${match.no}</span>${match.winner ? `<b>${t('advances')}</b>` : ''}</div>
    ${renderKnockoutTeam(match, 'home')}
    ${renderKnockoutTeam(match, 'away')}
    ${penaltyPicker}${footer}
  </article>`;
}

function renderKnockoutTeam(match, side) {
	const team = match[side];
	const source = match[`${side}Key`];
	const winner = match.winner === team && team;
	const loser = match.loser === team && team;
	const value = match.record[side];
	const identity = team
		? `<span class="ko-flag">${TEAMS[team].flag}</span><span class="ko-team-copy"><strong>${teamName(team)}</strong><small>${team} · ${knockoutSourceLabel(source)}</small></span>`
		: `<span class="ko-flag placeholder">?</span><span class="ko-team-copy"><strong>${knockoutSourceLabel(source)}</strong><small>${t('waitingTeams')}</small></span>`;
	return `<div class="knockout-team ${winner ? 'winner' : ''} ${loser ? 'loser' : ''} ${team === 'MAR' ? 'morocco-team' : ''}"><div class="ko-identity">${identity}</div><div class="ko-score-wrap"><input class="knockout-score-input" type="number" min="0" max="20" inputmode="numeric" data-ko-match="${match.no}" data-ko-side="${side}" value="${Number.isInteger(value) ? value : ''}" ${team ? '' : 'disabled'} aria-label="${team || source} score">${winner ? '<span class="advance-check">✓</span>' : ''}</div></div>`;
}

function onKnockoutScoreInput(event) {
	const record = state.knockout?.[event.target.dataset.koMatch];
	if (!record) return;
	const raw = event.target.value;
	record[event.target.dataset.koSide] =
		raw === ''
			? null
			: Math.max(0, Math.min(20, Number.parseInt(raw, 10) || 0));
	if (record.home !== record.away) record.tiebreakWinner = null;
	window.requestAnimationFrame(render);
}

function onPenaltyWinner(event) {
	const record = state.knockout?.[event.currentTarget.dataset.koMatch];
	if (!record || record.home !== record.away) return;
	record.tiebreakWinner = event.currentTarget.dataset.penaltyWinner;
	render();
}

function renderChampionPanels(model) {
	const finalMatch = model.results[104];
	const champion = finalMatch?.winner;
	const runnerUp = finalMatch?.loser;
	document.getElementById('championPanel').innerHTML =
		`<div class="champion-icon">🏆</div><div><div class="eyebrow">${t('tournamentWinner')}</div><h3>${champion ? `${TEAMS[champion].flag} ${teamName(champion)}` : t('champion')}</h3>${runnerUp ? `<p class="muted">${t('runnerUp')}: ${TEAMS[runnerUp].flag} ${teamName(runnerUp)}</p>` : `<p class="muted">${t('waitingTeams')}</p>`}</div>`;
	const thirdMatch = model.results[103];
	const bronze = thirdMatch?.winner;
	document.getElementById('thirdPlacePanel').innerHTML =
		`<div class="champion-icon bronze">🥉</div><div><div class="eyebrow">${t('thirdPlace')}</div><h3>${bronze ? `${TEAMS[bronze].flag} ${teamName(bronze)}` : t('waitingTeams')}</h3><p class="muted">${t('match')} 103</p></div>`;
}

function renderMoroccoRoute(tables, third, model) {
	const pos = tables.C.findIndex(x => x.code === 'MAR') + 1;
	const thirdRank = third.findIndex(x => x.code === 'MAR') + 1;
	let headline;
	if (pos === 1) headline = t('routeDirectFirst');
	else if (pos === 2) headline = t('routeDirectSecond');
	else if (pos === 3 && thirdRank <= 8) headline = t('routeThird');
	else headline = t('routeOut');

	const qualified = pos <= 2 || (pos === 3 && thirdRank <= 8);
	const routeStages = [
		['r32', 'round32'],
		['r16', 'roundOf16'],
		['qf', 'quarterfinal'],
		['sf', 'semifinal'],
		['final', 'final'],
	];
	const steps = routeStages
		.map(([stage, key]) => {
			const match = model.stages[stage].find(
				item => item.home === 'MAR' || item.away === 'MAR',
			);
			if (!match)
				return `<div class="route-step"><span>${t(key)}</span><strong>${qualified ? 'TBD' : '—'}</strong></div>`;
			const opponent = match.home === 'MAR' ? match.away : match.home;
			const opponentText = opponent
				? `${TEAMS[opponent].flag} ${teamName(opponent)}`
				: t('waitingTeams');
			let status = `vs ${opponentText}`;
			if (match.winner === 'MAR')
				status = `✓ ${t('advances')} · ${opponentText}`;
			else if (match.loser === 'MAR')
				status = `✕ ${t('eliminated')} · ${opponentText}`;
			return `<div class="route-step ${match.winner === 'MAR' ? 'route-won' : ''} ${match.loser === 'MAR' ? 'route-lost' : ''}"><span>${t(key)} · ${t('match')} ${match.no}</span><strong>${status}</strong></div>`;
		})
		.join('');
	document.getElementById('moroccoRoute').innerHTML =
		`<p class="muted" style="margin:12px 0 0">${headline}</p><div class="route-steps">${steps}</div>`;
}

function switchView(name) {
	document
		.querySelectorAll('.view-tab')
		.forEach(btn =>
			btn.classList.toggle('active', btn.dataset.view === name),
		);
	document
		.querySelectorAll('.view-panel')
		.forEach(panel =>
			panel.classList.toggle('active', panel.id === `${name}View`),
		);
}

function showToast(message) {
	const toast = document.getElementById('toast');
	toast.textContent = message;
	toast.classList.add('show');
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function renderSaved() {
	const saved = getSaved();
	const wrap = document.getElementById('savedScenariosWrap');
	const list = document.getElementById('savedScenarios');
	wrap.hidden = !saved.length;
	list.innerHTML = saved
		.map(
			item =>
				`<div class="saved-item"><button class="load" data-id="${item.id}">${escapeHtml(item.name)}</button><button class="delete" data-delete="${item.id}" aria-label="Delete">×</button></div>`,
		)
		.join('');
	list.querySelectorAll('.load').forEach(btn =>
		btn.addEventListener('click', () => {
			const item = getSaved().find(x => x.id === btn.dataset.id);
			if (item) {
				state = {
					...item.state,
					knockout:
						item.state?.knockout &&
						typeof item.state.knockout === 'object'
							? item.state.knockout
							: {},
				};
				selectedGroup = state.selectedGroup || 'C';
				lang = state.lang || lang;
				render();
				showToast(t('scenarioLoaded'));
			}
		}),
	);
	list.querySelectorAll('.delete').forEach(btn =>
		btn.addEventListener('click', () => {
			setSaved(getSaved().filter(x => x.id !== btn.dataset.delete));
			renderSaved();
			showToast(t('scenarioDeleted'));
		}),
	);
}
function getSaved() {
	try {
		return JSON.parse(localStorage.getItem(SAVED_KEY)) || [];
	} catch (_) {
		return [];
	}
}
function setSaved(value) {
	localStorage.setItem(SAVED_KEY, JSON.stringify(value));
}
function escapeHtml(value) {
	return String(value).replace(
		/[&<>'"]/g,
		ch =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				"'": '&#39;',
				'"': '&quot;',
			})[ch],
	);
}

// Controls
document
	.querySelectorAll('.view-tab')
	.forEach(btn =>
		btn.addEventListener('click', () => switchView(btn.dataset.view)),
	);
document.querySelectorAll('[data-mar-score]').forEach(btn =>
	btn.addEventListener('click', () => {
		const match = state.matches.find(x => x.id === 'C-MAR-HTI');
		match.homeScore = Number(btn.dataset.marScore);
		match.awayScore = Number(btn.dataset.haiScore);
		render();
	}),
);
document.getElementById('clearMorocco').addEventListener('click', () => {
	const match = state.matches.find(x => x.id === 'C-MAR-HTI');
	match.homeScore = null;
	match.awayScore = null;
	render();
});
document.getElementById('languageButton').addEventListener('click', () => {
	lang = lang === 'en' ? 'ar' : 'en';
	render();
});
document.getElementById('themeButton').addEventListener('click', () => {
	state.theme = state.theme === 'light' ? 'dark' : 'light';
	render();
});
document.getElementById('resetCurrent').addEventListener('click', () => {
	state.matches = cloneBase();
	state.knockout = {};
	render();
	showToast(t('resetDone'));
});
document.getElementById('clearRemaining').addEventListener('click', () => {
	state.matches.forEach((match, i) => {
		if (!BASE_MATCHES[i].played) {
			match.homeScore = null;
			match.awayScore = null;
		}
	});
	render();
	showToast(t('remainingCleared'));
});
document.getElementById('randomizeRemaining').addEventListener('click', () => {
	state.matches.forEach((match, i) => {
		if (!BASE_MATCHES[i].played) {
			match.homeScore = Math.floor(Math.random() * 5);
			match.awayScore = Math.floor(Math.random() * 5);
		}
	});
	render();
	showToast(t('randomized'));
});
document.getElementById('clearKnockout').addEventListener('click', () => {
	state.knockout = {};
	render();
	showToast(t('knockoutCleared'));
});
document.getElementById('randomizeKnockout').addEventListener('click', () => {
	state.knockout = {};
	const tables = getAllTables();
	const third = getThirdTable(tables);
	buildKnockoutModel(tables, third, { randomize: true });
	render();
	showToast(t('knockoutRandomized'));
});
document.getElementById('saveScenario').addEventListener('click', () => {
	const name = window.prompt(
		t('scenarioName'),
		`${t('noName')} ${getSaved().length + 1}`,
	);
	if (!name) return;
	const saved = getSaved();
	saved.unshift({
		id: String(Date.now()),
		name,
		state: JSON.parse(JSON.stringify({ ...state, selectedGroup, lang })),
	});
	setSaved(saved.slice(0, 12));
	renderSaved();
	showToast(t('scenarioSaved'));
});
document.getElementById('exportScenario').addEventListener('click', () => {
	const blob = new Blob(
		[
			JSON.stringify(
				{
					...state,
					selectedGroup,
					lang,
					exportedAt: new Date().toISOString(),
				},
				null,
				2,
			),
		],
		{ type: 'application/json' },
	);
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = 'wc26-scenario.json';
	a.click();
	URL.revokeObjectURL(url);
	showToast(t('exported'));
});
document.getElementById('importScenario').addEventListener('change', event => {
	const file = event.target.files?.[0];
	if (!file) return;
	const reader = new FileReader();
	reader.onload = () => {
		try {
			const parsed = JSON.parse(reader.result);
			if (!Array.isArray(parsed.matches) || parsed.matches.length !== 72)
				throw new Error('invalid');
			state = {
				matches: parsed.matches,
				knockout:
					parsed.knockout && typeof parsed.knockout === 'object'
						? parsed.knockout
						: {},
				selectedGroup: parsed.selectedGroup || 'C',
				lang: parsed.lang || lang,
				theme: parsed.theme || state.theme,
			};
			selectedGroup = state.selectedGroup;
			lang = state.lang;
			render();
			showToast(t('imported'));
		} catch (_) {
			showToast(t('invalidFile'));
		}
	};
	reader.readAsText(file);
	event.target.value = '';
});

render();
