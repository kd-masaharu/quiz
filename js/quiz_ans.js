// todo
// ・ジャンルごとの正答数をgetで送る
const data = [
	{
		"questionId":"1",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"2",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"3",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"4",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"5",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"6",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"7",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"8",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"9",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"10",
		"genreId":"1",
		"question":"社会人１年目の社会人にかからない税金は以下のうちどれ",
		"answers":[
			"1.住民税",
			"2.所得税",
			"3.健康保険料",
			"4.厚生年金保険料"
		],
		"correct":"1",
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。"
	},
	{
		"questionId":"12",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"13",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"15",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"16",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"17",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"18",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"19",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"20",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"21",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"22",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"23",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"24",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。"
	},
	{
		"questionId":"25",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"26",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"27",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"28",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"29",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"30",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"31",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"32",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"33",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる"
	},
	{
		"questionId":"38",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"39",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"40",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"41",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"42",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"43",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"44",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"45",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	},
	{
		"questionId":"46",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。"
	}
]



// GETメソッドからジャンルIDを抽出
let queryString = window.location.search;
let queryObject = new Object();
const genre = []
if (queryString) {
  queryString = queryString.substring(1);
  let parameters = queryString.split("&");

  for (let i = 0; i < parameters.length; i++) {
    let element = parameters[i].split("=");

    let paramName = decodeURIComponent(element[0]);
    let paramValue = decodeURIComponent(element[1]);

    if(paramName == "genre"){
        genre.push(paramValue);
    }
  }
}

console.log(genre);

// クイズの候補を格納
const quiz_candidate = [];
for(let i = 0 ; i < data.length ; i++){
    if(genre.includes(data[i]["genreId"])){
		console.log(data[i]["genreId"])
        quiz_candidate.push(data[i]);
    } 
}

console.log(data.length);

console.log(quiz_candidate.length);

// クイズの問題をランダムに決定
const quiz = [];
const choise_index = [];
let i = 0
while(i < 10){
    idx = Math.floor(Math.random() * quiz_candidate.length)
    if ( ! (idx in choise_index)){
        i++;
        choise_index.push(idx)
        quiz.push(quiz_candidate[idx])
    } 
}

console.log(quiz);

let quizCount = 0;
const quizLength = quiz.length;
let score = 0;

const $button = document.querySelectorAll('.quiz-button')
const buttonLength = $button.length
const explanation_div = document.querySelector(".explanation");

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizCount].question
    document.getElementById('js-number').textContent = "第"+(quizCount+1)+"問"

	explanation_div.style.display = "none";

    let buttonCount = 0;

    while (buttonCount < buttonLength) {
        $button[buttonCount].textContent = quiz[quizCount].answers[buttonCount]
		$button[buttonCount].style.display = "block";
        buttonCount++;
    }
}
setupQuiz();

const setupExplanation = () => {
	document.getElementById('js-explanation').innerHTML = "<b>正解:"+quiz[quizCount].answers[quiz[quizCount].correct-1]+"</b><br>"+quiz[quizCount].explanation

	explanation_div.style.display = "block";

	let buttonCount = 0;

    while (buttonCount < buttonLength) {
        $button[buttonCount].style.display = "none";
        buttonCount++;
    }
}

let clickedCount = 0;
let pre = Date.now()-1000;
let is_s_click = true;
const scores = [0,0,0,0,0,0]
const quizzes = [0,0,0,0,0,0]

while (clickedCount < buttonLength) {
    $button[clickedCount].addEventListener("click", function () {
        const clickedAnswer = event.currentTarget
        const answerCorrect = document.querySelector('.answer_correct')
        const answerIncorrect = document.querySelector('.answer_incorrect')
        // const answerResult = document.querySelector('.answer_result');
        // const answerResultText = document.querySelector('.answer_result_text')

        if (Date.now() > pre+1000){
            console.log("single")
            is_s_click = true;
            pre = Date.now();
        }else{
            console.log("double")
            is_s_click = false;
        }
        
        if (is_s_click){
			quizzes[quiz[quizCount].genreId-1]++;
            if (quiz[quizCount].correct === clickedAnswer.textContent[0]) {
                answerCorrect.classList.add("active_answer")
                setTimeout(function () {
                    answerCorrect.classList.remove("active_answer")
                }, 1000);
                console.log("OK!")
                score++;
				scores[quiz[quizCount].genreId-1]++;
            }
            else {
                answerIncorrect.classList.add("active_answer")
                setTimeout(function () {
                    answerIncorrect.classList.remove("active_answer")
                }, 1000);
                console.log("NOT OK!")
            }
			setupExplanation();
        }
    });
    if (is_s_click){
        clickedCount++;
    }
}

function expClick(){
	quizCount++;
	if (quizCount < quizLength) {
		setupQuiz();
	}
	else {
		// answerResult.classList.add("active_result")
		// answerResultText.textContent = '終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
		console.log("終わりだよー^^")
		
		// リザルト画面に遷移
		url = 'lastpage.html?'
		for(let i = 0 ; i < scores.length;i++){
			url += 'genre-sum' + (i+1) + '=' + quizzes[i] + '&'
			if(i==scores.length-1){
				url += 'genre-score' + (i+1) + '=' + scores[i]
			}else{
				url += 'genre-score' + (i+1) + '=' + scores[i] + '&'
			}
		}
		window.location.href = url;
	}
}