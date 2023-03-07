import { useState } from "react"
import { CardComponent } from "../Card/CardComponent"
import { ModalComponent } from "../Modal/ModalComponent"
import { ContentFormComponent, ContentFormComponentProps } from "../ContentForm/ContentFormComponent"

const data = [
  {
    "UpdatedAt": "",
    "Longitude": 137.723579,
    "Latitude": 34.715141,
    "Capacity": "70人　先着順",
    "Place": "浜松市茶室(松韻亭)",
    "EventNameKana": "ヒナマツリチャカイ",
    "StartedAtNote": "",
    "StartedAt": "10:00",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-11-15",
    "Contact": "茶室「松韻亭」",
    "PriceDetail": "800円茶席一席/2,000円茶席お凌ぎ付",
    "ImportedAt": "2022-12-29 15:12:17",
    "FacilityNo": "001852_00",
    "EndedAt": "15:00",
    "Price": 800,
    "Tel": "053-473-4310",
    "Formula": "",
    "EventName": "雛祭り茶会",
    "Key": "20230226-3637876838971b48f9626a7e8f18b16f",
    "Code": 221309,
    "Note": "",
    "No": 20221108065,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-02-26",
    "EventNameEn": "",
    "Description": "【内容】桃の節句を祝う茶会 【講師】松月流",
    "EndedOn": "",
    "Url": "http://www.shouintei.jp/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込必要 【方法】窓口／電話((053)473-4310)／FAX((053)473-4310)／郵送(432-8014　浜松市鹿谷町11-4　茶室「松韻亭」)／ホームページ／E-mail(info@shouintei.jp)",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "茶室「松韻亭」",
    "PlaceAddress": "浜松市中区鹿谷町11-4",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.731572,
    "Latitude": 34.731949,
    "Capacity": "抽選　8組程度",
    "Place": "浜松市青少年の家",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "9:30",
    "ChildInformation": "○",
    "ClosingOn": "2022-04-08",
    "OpenedAt": "2023-01-23",
    "Contact": "青少年の家",
    "PriceDetail": "中学生以上1,200円小学生以下1,000円",
    "ImportedAt": "2023-02-14 15:50:55",
    "FacilityNo": "001613_00",
    "EndedAt": "15:00",
    "Price": "",
    "Tel": "053-471-4725",
    "Formula": "",
    "EventName": "家族Day Camp in 春",
    "Key": "20230429-831a38bf6f6cd583a17b5d8dc6204bbf",
    "Code": 221309,
    "Note": "",
    "No": 20230118341,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-04-29",
    "EventNameEn": "",
    "Description": "【内容】季節にあった野外料理やクラフトづくりで、家族のふれあいの時間を共有します。 【対象】中学3年生までの子供を含む家族",
    "EndedOn": "",
    "Url": "https://h-seisyounen-ie.entetsuassist-dms.com/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込必要 【締切】締切 【方法】ホームページ 青少年の家のホームページ申し込みフォームから申し込み",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区住吉四丁目23-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.738256,
    "Latitude": 34.706816,
    "Capacity": "",
    "Place": "浜松市楽器博物館",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "14:00",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "浜松市楽器博物館",
    "PriceDetail": "入館料のみ",
    "ImportedAt": "2022-11-19 19:26:31",
    "FacilityNo": "000017_00",
    "EndedAt": "14:30",
    "Price": "",
    "Tel": "053-451-1128",
    "Formula": "館内　天空ホール",
    "EventName": "サロンコンサート「天翔ける鳳凰と龍の鳴き声鳳笙と龍笛の響き」",
    "Key": "20221113-7b9f7430fab32f25f13ab82a16ddb363",
    "Code": 221309,
    "Note": "",
    "No": 20220817146,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-11-13",
    "EventNameEn": "",
    "Description": "",
    "EndedOn": "",
    "Url": "https://www.gakkihaku.jp/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "公益財団法人浜松市文化振興財団",
    "PlaceAddress": "浜松市中区中央三丁目9-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.726132,
    "Latitude": 34.711085,
    "Capacity": "",
    "Place": "浜松市役所",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "8:30",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-10-26",
    "Contact": "UD・男女共同参画課",
    "PriceDetail": "",
    "ImportedAt": "2022-11-29 15:05:31",
    "FacilityNo": "002666_00",
    "EndedAt": "17:15",
    "Price": "",
    "Tel": "053-457-2364",
    "Formula": "",
    "EventName": "UD週間パネル展",
    "Key": "20221102-0932ac66d9bb7f543bd9b3b938aba06c",
    "Code": 221309,
    "Note": "",
    "No": 20221019124,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-11-02",
    "EventNameEn": "",
    "Description": "",
    "EndedOn": "",
    "Url": "",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区元城町103-2",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.723557,
    "Latitude": 34.711967,
    "Capacity": "",
    "Place": "浜松市美術館",
    "EventNameKana": "",
    "StartedAtNote": "(最終入館は16:30) 第1期【幼稚園・小学校】2023-1-5～2023-1-11 ※11日は16:30まで、10日は休館日",
    "StartedAt": "9:30",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "",
    "Contact": "学校教育部指導課",
    "PriceDetail": "無料",
    "ImportedAt": "2023-01-29 15:08:02",
    "FacilityNo": "002341_00",
    "EndedAt": "17:00",
    "Price": "",
    "Tel": "053-457-2411",
    "Formula": "",
    "EventName": "第54回　浜松市子どもの市展",
    "Key": "20230105-1e9261945086eaca2983d3ab0a8c1aeb",
    "Code": 221309,
    "Note": "",
    "No": 20221019462,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-01-05",
    "EventNameEn": "",
    "Description": "【内容】市立幼稚園・小学校・中学校の幼児・児童・生徒の美術作品の展示(静岡大学教育学部附属浜松小中学校を含む)",
    "EndedOn": "2023-01-11",
    "Url": "https://www.city.hamamatsu.shizuoka.jp/shido/en-gakkounotorikumi/kodomonoshiten.html",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区松城町100-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.731572,
    "Latitude": 34.731949,
    "Capacity": "25人　抽選",
    "Place": "浜松市青少年の家",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "9:30",
    "ChildInformation": "○",
    "ClosingOn": "2023-01-03",
    "OpenedAt": "",
    "Contact": "青少年の家",
    "PriceDetail": "1,000円",
    "ImportedAt": "2023-02-14 15:41:07",
    "FacilityNo": "001613_00",
    "EndedAt": "15:00",
    "Price": "",
    "Tel": "053-471-4725",
    "Formula": "",
    "EventName": "集まれ元気な3・4年生～冬～",
    "Key": "20230121-b5f088a3f0e2ee49837fc801bcc8a7bf",
    "Code": 221309,
    "Note": "",
    "No": 20221019383,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-01-21",
    "EventNameEn": "",
    "Description": "【内容】野外炊飯やクラフトなどの自然体験を通して、元気な心と体を養います。 【対象】小学3・4年生",
    "EndedOn": "",
    "Url": "https://h-seisyounen-ie.entetsuassist-dms.com/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込必要 【締切】締切 【方法】ホームページ 青少年の家のホームページ申し込みフォームから申し込み※1人1通でお申し込みください。",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区住吉四丁目23-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "150人",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "土日祝・長期休暇期間のみ",
    "StartedAt": "10:30",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "【常設展入場料+プラネタリウム1回分観覧料】\n大人1,100円　中人550円　中学生以下無料",
    "ImportedAt": "2022-11-19 19:26:51",
    "FacilityNo": "005123_00",
    "EndedAt": "11:10",
    "Price": "",
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "キッズプラネタリウム「こんやのお星さまとおたんじょうびの星座(さそり座)」",
    "Key": "20221023-b1fe691863b5fa6bcd6a71bfdeeec6ce",
    "Code": 221309,
    "Note": "",
    "No": 20220817157,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-10-23",
    "EventNameEn": "",
    "Description": "【内容】その時期の誕生日星座にまつわるストーリーを、解説員がやさしくお話しいたします。\n【対象】どなたでも",
    "EndedOn": "2022-11-21",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.724776,
    "Latitude": 34.704653,
    "Capacity": "80人　先着順",
    "Place": "浜松市旧浜松銀行協会(木下恵介記念館)",
    "EventNameKana": "キノシタケイスケサクヒンジョウエイカイ『タイヨウトバラ』",
    "StartedAtNote": "午前10時～／午後2時～(開場は上映30分前より)",
    "StartedAt": "",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2023-01-23",
    "Contact": "木下惠介記念館(旧浜松銀行協会)",
    "PriceDetail": "",
    "ImportedAt": "2023-02-14 15:45:03",
    "FacilityNo": "004327_00",
    "EndedAt": "",
    "Price": 100,
    "Tel": "053-457-3450",
    "Formula": "",
    "EventName": "木下惠介作品上映会『太陽とバラ』",
    "Key": "20230416-0cce9fa86946ea9ecdeb25c2ae322e83",
    "Code": 221309,
    "Note": "",
    "No": 20230118130,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-04-16",
    "EventNameEn": "",
    "Description": "【対象】小学生以上",
    "EndedOn": "",
    "Url": "https://keisukemuseum.org/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要 当日、直接会場へ。",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "木下惠介記念館(旧浜松銀行協会)",
    "PlaceAddress": "浜松市中区栄町3-1",
    "Category": "イベント"
  },
    {
    "UpdatedAt": "",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "13:00",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2022-12-22",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "別途常設展入場料が必要",
    "ImportedAt": "2023-01-29 15:14:24",
    "FacilityNo": "005123_00",
    "EndedAt": "15:30",
    "Price": 100,
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "ミニワーク「はじめてのプログラミング体験」",
    "Key": "20230221-e8c5e537a9a14b1f1ed43d70c1e72c6c",
    "Code": 221309,
    "Note": "",
    "No": 20221215231,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-02-21",
    "EventNameEn": "",
    "Description": "【内容】さまざまなアニメーションをプログラミングで作ってみよう！ 【対象】どなたでも",
    "EndedOn": "2023-03-05",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "各回5組",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "(1)10:30　(2)11:00　(3)11:30　(4)12:00\n各回15分",
    "StartedAt": "",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "別途常設展入場料が必要",
    "ImportedAt": "2022-11-19 19:33:28",
    "FacilityNo": "005123_00",
    "EndedAt": "",
    "Price": 100,
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "15分で展示実験～砂鉄でお絵描き～「磁石で浮かび上がる形」",
    "Key": "20221123-32a2f33889b59e53ebeafae6bfd070a9",
    "Code": 221309,
    "Note": "",
    "No": 20220916213,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-11-23",
    "EventNameEn": "",
    "Description": "【内容】展示を使って、磁石が作る模様を観察しよう。オリジナルの磁石カードも作れます。\n【対象】どなたでも",
    "EndedOn": "",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "17:01",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-12-22",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "【常設展入場料】大人600円　中人300円　 ※プラネタリウムは別途",
    "ImportedAt": "2023-01-29 15:14:17",
    "FacilityNo": "005123_00",
    "EndedAt": "19:30",
    "Price": "",
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "みらいーら 夜の科学館　～オトナが楽しむサイエンスな夜～",
    "Key": "20230217-98ae4d126c43a07b5547d940a78332f9",
    "Code": 221309,
    "Note": "",
    "No": 20221215227,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-02-17",
    "EventNameEn": "",
    "Description": "【内容】月に一度のナイトミュージアムでは、常設展に加え、夜の科学館限定のサイエンスショーなどをじっくり楽しめます。特別プラネタリウム「STAR FLIGHT seasonⅡ」も行います。 【対象】高校生以上",
    "EndedOn": "",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "2022-10-26",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "17:01",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "【常設展入場料】大人600円　中人300円　\n※プラネタリウムは別途",
    "ImportedAt": "2022-11-19 19:33:27",
    "FacilityNo": "005123_00",
    "EndedAt": "19:30",
    "Price": "",
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "みらいーら夜の科学館　～オトナが楽しむサイエンスな夜～",
    "Key": "20221118-60f5eb498add9f5e0b2a47ad109aa24c",
    "Code": 221309,
    "Note": "",
    "No": 20220916209,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-11-18",
    "EventNameEn": "",
    "Description": "【内容】月に一度のナイトミュージアムでは、常設展に加え、夜の科学館限定のサイエンスショーなどをじっくり楽しめます。特別プラネタリウム「STAR FLIGHT seasonⅡ」も行います。\n【対象】高校生以上",
    "EndedOn": "",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.738256,
    "Latitude": 34.706816,
    "Capacity": "",
    "Place": "浜松市楽器博物館",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "15:30",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2023-01-23",
    "Contact": "",
    "PriceDetail": "入館料のみ",
    "ImportedAt": "2023-02-14 15:45:00",
    "FacilityNo": "000017_00",
    "EndedAt": "16:00",
    "Price": "",
    "Tel": "",
    "Formula": "",
    "EventName": "世界の楽器ミニコンサート",
    "Key": "20230325-f4d232bf9cab29dea35dc20551dcebff",
    "Code": 221309,
    "Note": "",
    "No": 20230118126,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-03-25",
    "EventNameEn": "",
    "Description": "",
    "EndedOn": "",
    "Url": "https://www.gakkihaku.jp/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区中央三丁目9-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.726455,
    "Latitude": 34.741648,
    "Capacity": "160人　先着順　会場参加 80人、オンライン80人",
    "Place": "浜松市男女共同参画・文化芸術活動推進センター(あいホール)",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "14:00",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-11-15",
    "Contact": "あいホール男女共同参画推進事業担当",
    "PriceDetail": "",
    "ImportedAt": "2022-12-29 15:11:19",
    "FacilityNo": "004617_00",
    "EndedAt": "15:30",
    "Price": "",
    "Tel": "053-412-0351",
    "Formula": "",
    "EventName": "令和4年度あいホールフォーラム長野智子講演会「教えて！長野さん　女性議員が増えると何がいいの？今、私たちにできるアクションとは」",
    "Key": "20230312-25fa25bc795cc23e984ce544fb575e5d",
    "Code": 221309,
    "Note": "",
    "No": 20221108015,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-03-12",
    "EventNameEn": "",
    "Description": "【内容】国会において女性議員が少ない日本。女性議員を増やすにはどうしたらよいのか、また女性議員が増えたら、何がかわるのか。クオーター制実現に向けて活動する講師から話をうかがう。 【対象】浜松市在住、在勤の方 【講師】長野智子さん(ジャーナリスト、国連UNHCR協会報道ディレクター)",
    "EndedOn": "",
    "Url": "https://ai-hall.com/events/foru平方メートル0230312/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込必要 【方法】電話((053)412-0351)／ホームページ 講座名、氏名、電話番号、託児の有無(託児:6カ月以上就学前まで。無料、定員あり、3月3日(金)締切)",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区幸三丁目3-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "※コンテストは12/24～1/9のみ 　(1)11:30～ (2)13:30～ (3)14:30～ (4)15:30～ 　各回30分程度 ※12/29～1/3は年末年始休館 ※12/22は閉場",
    "StartedAt": "9:30",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2022-11-15",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "コンテスト参加費は別途100円",
    "ImportedAt": "2022-12-29 15:13:03",
    "FacilityNo": "005123_00",
    "EndedAt": "17:00",
    "Price": "",
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "冬の企画展「みんなで熱中！ものづくり」",
    "Key": "20221220-0b17bd96f76f0d8a33bd4aff885ec873",
    "Code": 221309,
    "Note": "",
    "No": 20221108097,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-12-20",
    "EventNameEn": "",
    "Description": "【内容】工作コンテストや展示を通して、ものづくりの面白さを発見しよう！ 【対象】どなたでも",
    "EndedOn": "2023-01-09",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.735724,
    "Latitude": 34.705528,
    "Capacity": "1200人　先着順",
    "Place": "アクトシティ浜松",
    "EventNameKana": "ダイゴカイテイキエンソウカイ「スズメノガッコウスイソウガクブ」～シンンリョクノカゼニノッテリフレッシュ～",
    "StartedAtNote": "18:15開場",
    "StartedAt": "19:00",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2023-01-23",
    "Contact": "あいホール",
    "PriceDetail": "一般500円(未就学児無料)全席自由",
    "ImportedAt": "2023-02-14 15:45:03",
    "FacilityNo": "000015_00",
    "EndedAt": "21:00",
    "Price": "",
    "Tel": "053-412-0350",
    "Formula": "",
    "EventName": "第5回定期演奏会「すずめの学校??吹奏楽部」～新緑の風にのってリフレッシュ～",
    "Key": "20230530-db6709d281e8ba4779529070ee232b83",
    "Code": 221309,
    "Note": "",
    "No": 20230118129,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-05-30",
    "EventNameEn": "",
    "Description": "【内容】吹奏楽演奏 【対象】入場はどなたでも 【出演・演目など】すずめの学校吹奏楽部",
    "EndedOn": "",
    "Url": "https://ai-hall.com/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込必要 【方法】窓口",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "あいホールすずめの学校吹奏楽部 あいホール共催",
    "PlaceAddress": "浜松市中区板屋町111-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.738256,
    "Latitude": 34.706816,
    "Capacity": "",
    "Place": "浜松市楽器博物館",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "15:30",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2023-01-23",
    "Contact": "",
    "PriceDetail": "入館料のみ",
    "ImportedAt": "2023-02-14 15:44:56",
    "FacilityNo": "000017_00",
    "EndedAt": "16:00",
    "Price": "",
    "Tel": "",
    "Formula": "",
    "EventName": "世界の楽器ミニコンサート",
    "Key": "20230319-f4d232bf9cab29dea35dc20551dcebff",
    "Code": 221309,
    "Note": "",
    "No": 20230118124,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-03-19",
    "EventNameEn": "",
    "Description": "",
    "EndedOn": "",
    "Url": "https://www.gakkihaku.jp/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区中央三丁目9-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.724776,
    "Latitude": 34.704653,
    "Capacity": "",
    "Place": "浜松市旧浜松銀行協会(木下恵介記念館)",
    "EventNameKana": "トクベツテンジ「キノシタケイスケトセンジョウノカタキヤクソク」　カモエメグルデイズ　カモエアートセンター・キノシタケイスケキネンカン　ゴウドウカイサイ",
    "StartedAtNote": "＊10月3日、4日は両施設とも休館",
    "StartedAt": "9:00",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-08-31",
    "Contact": "木下惠介記念館(旧浜松銀行協会)",
    "PriceDetail": "無料(常設展観覧料100円内でご参加いただけます)",
    "ImportedAt": "2022-11-19 19:21:48",
    "FacilityNo": "004327_00",
    "EndedAt": "17:00",
    "Price": "",
    "Tel": "053-457-3450",
    "Formula": "",
    "EventName": "KAMOEめぐるDAYS　特別展示「木下惠介と戦場の固き約束」　KAMOE めくる DAYS(鴨江アートセンター・木下惠介記念館　合同開催)",
    "Key": "20220917-399d826f5b608becf15d40d7f9688c7b",
    "Code": 221309,
    "Note": "",
    "No": 20220720086,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-09-17",
    "EventNameEn": "",
    "Description": "【対象】どなたでも",
    "EndedOn": "2023-02-19",
    "Url": "https://keisukemuseum.org/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要\n当日、直接会場へ。",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "木下惠介記念館(旧浜松銀行協会)",
    "PlaceAddress": "浜松市中区栄町3-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.738256,
    "Latitude": 34.706816,
    "Capacity": "",
    "Place": "浜松市楽器博物館",
    "EventNameKana": "ゼツメツキグガッキバンドネオンミニコンサート",
    "StartedAtNote": "",
    "StartedAt": "15:30",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-11-15",
    "Contact": "浜松市楽器博物館",
    "PriceDetail": "入館料のみ",
    "ImportedAt": "2022-12-29 15:12:12",
    "FacilityNo": "000017_00",
    "EndedAt": "16:00",
    "Price": "",
    "Tel": "053-451-1128",
    "Formula": "",
    "EventName": "絶滅危惧楽器！？バンドネオンminiコンサート",
    "Key": "20230121-cc3c234b77f96cae4f3021d2d8847914",
    "Code": 221309,
    "Note": "",
    "No": 20221108059,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-01-21",
    "EventNameEn": "",
    "Description": "【出演・演目など】早川純",
    "EndedOn": "",
    "Url": "https://www.gakkihaku.jp/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "浜松市文化振興財団",
    "PlaceAddress": "浜松市中区中央三丁目9-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "17:01",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-11-15",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "【常設展入場料】大人600円　中人300円　 ※プラネタリウムは別途",
    "ImportedAt": "2022-12-29 15:12:55",
    "FacilityNo": "005123_00",
    "EndedAt": "19:30",
    "Price": "",
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "みらいーら 夜の科学館　～オトナが楽しむサイエンスな夜～",
    "Key": "20230120-98ae4d126c43a07b5547d940a78332f9",
    "Code": 221309,
    "Note": "",
    "No": 20221108092,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-01-20",
    "EventNameEn": "",
    "Description": "【内容】月に一度のナイトミュージアムでは、常設展に加え、夜の科学館限定のサイエンスショーなどをじっくり楽しめます。特別プラネタリウム「STAR FLIGHT seasonⅡ」も行います。 【対象】高校生以上",
    "EndedOn": "",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "2022-10-26",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "",
    "StartedAt": "13:00",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "別途常設展入場料が必要",
    "ImportedAt": "2022-11-19 19:33:28",
    "FacilityNo": "005123_00",
    "EndedAt": "15:30",
    "Price": 200,
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "今月のミニワーク「宇宙センサリーボトル」",
    "Key": "20221122-4b6d4e35b3ec658192a48833e5c31286",
    "Code": 221309,
    "Note": "",
    "No": 20220916211,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-11-22",
    "EventNameEn": "",
    "Description": "【内容】洗濯のりでセンサリーボトルを作ろう。宇宙をイメージした小物を入れて、ゆったりと漂う様子をながめてみよう。\n【対象】どなたでも",
    "EndedOn": "2022-12-04",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "150人",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "※土日祝日は11:40～12:35も投映",
    "StartedAt": "14:30",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2022-08-31",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "【常設展入場料+プラネタリウム1回分観覧料】\n大人1,100円　中人550円　中学生以下無料",
    "ImportedAt": "2022-11-19 19:21:54",
    "FacilityNo": "005123_00",
    "EndedAt": "15:25",
    "Price": "",
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "生解説プラネタリウム「幻のうなぎ座」",
    "Key": "20221001-ac15de23b027749be308dbabd5a5c7cc",
    "Code": 221309,
    "Note": "",
    "No": 20220720094,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-10-01",
    "EventNameEn": "",
    "Description": "【内容】浜松名物「うなぎ」の星座があったことを知っていますか？昔は今よりももっと多くの星座が考えられていました。88星座制定100周年の今年、その歴史や幻となった星座たちについてご紹介します。\n【対象】どなたでも",
    "EndedOn": "2022-11-30",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.724658,
    "Latitude": 34.704995,
    "Capacity": "40人　先着順",
    "Place": "浜松市鴨江アートセンター",
    "EventNameKana": "【スパックカケケーエーシー】スパックシュッチョウゲキジョウ『グッド・バイ』",
    "StartedAtNote": "開場13:45／開演14:00",
    "StartedAt": "14:00",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "浜松市鴨江アートセンター",
    "PriceDetail": "",
    "ImportedAt": "2022-11-19 19:26:43",
    "FacilityNo": "004601_00",
    "EndedAt": "15:00",
    "Price": 500,
    "Tel": "053-458-5360",
    "Formula": "",
    "EventName": "【SPAC×KAC】SPAC出張劇場『グッド・バイ』",
    "Key": "20221211-af370a7e79c8a906a7081f361a9d44c6",
    "Code": 221309,
    "Note": "",
    "No": 20220817152,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-12-11",
    "EventNameEn": "",
    "Description": "【対象】小学生以上\n【条件】※他の方の鑑賞の妨げになる場合はご退出をお願いすることがあります。",
    "EndedOn": "",
    "Url": "https://kamoeartcenter.org/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込必要\n【方法】窓口／電話((053)-458-5360)／E-mail(k.a.c@kamoeartcenter.org)",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "浜松市鴨江アートセンター(指定管理者:一般社団法人浜松創造都市協議会・東海ビル管理グループ)",
    "PlaceAddress": "浜松市中区鴨江町1番地",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "2022-10-26",
    "Longitude": 137.724776,
    "Latitude": 34.704653,
    "Capacity": "80人　先着順",
    "Place": "浜松市旧浜松銀行協会(木下恵介記念館)",
    "EventNameKana": "キノシタケイスケサクヒンジョウエイカイ『リクグン』",
    "StartedAtNote": "午前10時～／午後2時～(開場は上映30分前より)",
    "StartedAt": "",
    "ChildInformation": "○",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "木下惠介記念館(旧浜松銀行協会)",
    "PriceDetail": "",
    "ImportedAt": "2022-11-19 19:33:25",
    "FacilityNo": "004327_00",
    "EndedAt": "",
    "Price": 100,
    "Tel": "053-457-3450",
    "Formula": "",
    "EventName": "木下惠介作品上映会『陸軍』",
    "Key": "20221218-77eaa0619798ee16ce63824e5c48f5c8",
    "Code": 221309,
    "Note": "",
    "No": 20220916202,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-12-18",
    "EventNameEn": "",
    "Description": "【対象】小学生以上",
    "EndedOn": "",
    "Url": "https://keisukemuseum.org/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要\n当日、直接会場へ。",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "木下惠介記念館(旧浜松銀行協会)",
    "PlaceAddress": "浜松市中区栄町3-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.723557,
    "Latitude": 34.711967,
    "Capacity": "",
    "Place": "浜松市美術館",
    "EventNameKana": "ハジメテノキカクテン「メイトウタイヘイヲキリヒラクーセンゴクカラエドヘーテン」　ハジメテノニホントウコウザ",
    "StartedAtNote": "入館は16:30まで",
    "StartedAt": "9:30",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "浜松市美術館",
    "PriceDetail": "観覧料:一般1400円、高大専門学生800円、小・中学生無料、70歳以上700円",
    "ImportedAt": "2022-11-19 19:26:54",
    "FacilityNo": "002341_00",
    "EndedAt": "17:00",
    "Price": "",
    "Tel": "053-454-6801",
    "Formula": "",
    "EventName": "企画展「名刀　泰平を切り開くー戦国から江戸へー」展",
    "Key": "20221015-e0fa3e8d1449db7ca4743431949867a6",
    "Code": 221309,
    "Note": "",
    "No": 20220817163,
    "City": "浜松市",
    "Parking": "浜松城公園駐車場",
    "StartedOn": "2022-10-15",
    "EventNameEn": "",
    "Description": "【内容】芸術の域にまで達した名刀の数々と、泰平の世を迎えた江戸の絵画や茶道具を紹介\n【対象】全員",
    "EndedOn": "2022-12-04",
    "Url": "https://www.city.hamamatsu.shizuoka.jp/artmuse/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "浜松市",
    "PlaceAddress": "浜松市中区松城町100-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.733836,
    "Latitude": 34.710326,
    "Capacity": "20人　抽選",
    "Place": "クリエート浜松",
    "EventNameKana": "カゾクデタノシモウ！マンドリンコンサート",
    "StartedAtNote": "",
    "StartedAt": "14:00",
    "ChildInformation": "",
    "ClosingOn": "2022-12-20",
    "OpenedAt": "",
    "Contact": "クリエート浜松",
    "PriceDetail": "",
    "ImportedAt": "2023-01-14 15:08:53",
    "FacilityNo": "004149_00",
    "EndedAt": "15:30",
    "Price": 0,
    "Tel": "053-453-5311",
    "Formula": "5階スタジオ",
    "EventName": "家族で楽しもう！マンドリンコンサート",
    "Key": "20221225-ee3e88c8715f10013232264c55b5ce49",
    "Code": 221309,
    "Note": "※チラシはクリエート他市内各協働センター等で配布",
    "No": 20221019469,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-12-25",
    "EventNameEn": "",
    "Description": "【内容】ビバ・マンドリーノ天竜の皆さまによるマンドリンコンサートです。 【対象】幅広い世代",
    "EndedOn": "",
    "Url": "https://req.qubo.jp/hcf-request/form/crehamaconcert",
    "Prefecture": "静岡県",
    "HowToJoin": "申込必要 【締切】締切 【方法】窓口／ホームページ 申込フォームまたはチラシ内申込書より申込",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区早馬町2-1",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.739694,
    "Latitude": 34.705034,
    "Capacity": "",
    "Place": "浜松科学館",
    "EventNameKana": "",
    "StartedAtNote": "(1)10:30～ (2)11:00～ (3)11:30～ (4)12:00～　各回15分",
    "StartedAt": "",
    "ChildInformation": "○",
    "ClosingOn": "2023-01-07",
    "OpenedAt": "2022-11-15",
    "Contact": "浜松科学館みらいーら",
    "PriceDetail": "",
    "ImportedAt": "2022-12-29 15:13:00",
    "FacilityNo": "005123_00",
    "EndedAt": "",
    "Price": 200,
    "Tel": "053-454-0178",
    "Formula": "",
    "EventName": "15分で科学実験「冬にぴったり！ほかほかカイロを作ろう！」",
    "Key": "20230121-02a0867edd5b685a6e958754dd19a2f3",
    "Code": 221309,
    "Note": "",
    "No": 20221108094,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2023-01-21",
    "EventNameEn": "",
    "Description": "【内容】冬にぴったりな暖かいカイロを手作りしよう 【対象】どなたでも",
    "EndedOn": "",
    "Url": "https://www.mirai-ra.jp",
    "Prefecture": "静岡県",
    "HowToJoin": "申込必要 【締切】締切 【方法】ホームページ",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "",
    "PlaceAddress": "浜松市中区北寺島町256-3",
    "Category": "イベント"
  },
  {
    "UpdatedAt": "",
    "Longitude": 137.724658,
    "Latitude": 34.704995,
    "Capacity": "",
    "Place": "浜松市鴨江アートセンター",
    "EventNameKana": "セイサクバショテイキョウジギョウアーティスト・イン・レジデンスコウキヨンクミノセイサクスタート",
    "StartedAtNote": "",
    "StartedAt": "",
    "ChildInformation": "",
    "ClosingOn": "",
    "OpenedAt": "2022-09-30",
    "Contact": "浜松市鴨江アートセンター",
    "PriceDetail": "",
    "ImportedAt": "2022-11-19 19:26:38",
    "FacilityNo": "004601_00",
    "EndedAt": "",
    "Price": "",
    "Tel": "053-458-5360",
    "Formula": "",
    "EventName": "制作場所提供事業アーティスト・イン・レジデンス後期4組の制作スタート",
    "Key": "20221101-e74666a8db77ddda811742dc3b87d587",
    "Code": 221309,
    "Note": "",
    "No": 20220817149,
    "City": "浜松市",
    "Parking": "",
    "StartedOn": "2022-11-01",
    "EventNameEn": "",
    "Description": "【その他】※制作の様子を見学したい場合は事前に問い合わせ",
    "EndedOn": "2023-02-28",
    "Url": "https://kamoeartcenter.org/",
    "Prefecture": "静岡県",
    "HowToJoin": "申込不要",
    "Access": "",
    "TelExtension": "",
    "District": "中区",
    "ClosingAt": "",
    "Organizer": "浜松市鴨江アートセンター(指定管理者:一般社団法人浜松創造都市協議会・東海ビル管理グループ)",
    "PlaceAddress": "浜松市中区鴨江町1番地",
    "Category": "イベント"
  }
]

const initialCardContent: ContentFormComponentProps = {
  index: 0,
  no: 0,
  category: '',
  organizer: ''
}

export const CardListComponent = (): JSX.Element => {
  const [contentModalOpen, setContentModalOpen] = useState(false)
  const [selectedCardContent, setSelectedCardContent] = useState(initialCardContent)

  // NOTE: カードがクリックされたときに、選択されたカードのindexより表示対象のデータを抽出して
  //  selectedCardContentにセットする。
  const openContentModal = (index: number) => {
    console.info(index)

    const row = data[index]
    setSelectedCardContent({
      index: index,
      no: row.No,
      category: row.Category,
      organizer: row.Organizer
    })
    setContentModalOpen(true)
  }
  const closeContentModal = () => { setContentModalOpen(false) }

  const cards = data.map((v, i) => {
    return <CardComponent key={i}
      category={v.Category}
      eventName={v.EventName || v.OpenedAt}
      description={v.Description}
      startedOn={v.StartedOn}
      url={v.Url}
      onClick={ () => { openContentModal(i) } }></CardComponent>
  })

  return (<>
    {/* コンテンツモーダル */}
    <ModalComponent
      modalOpen={ contentModalOpen }
      onClose={ closeContentModal }>
      <ContentFormComponent {...selectedCardContent} />
    </ModalComponent>
    
    {/* カード */}
    { cards }
  </>)
}