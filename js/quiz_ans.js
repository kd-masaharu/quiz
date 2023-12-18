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
		"explanation":"住民税は前年の所得をもとにして納める税金のため、前年の所得のない社会人１年目の場合は通常かかりません。ただし、就職前に課税所得がある場合や、合計所得が45万ある場合は税金がかかることがあります。",
		"url":""
	},
	{
		"questionId":"2",
		"genreId":"2",
		"question":"サプライヤーへ送るメールの件名に最も適切なものを選んでください。",
		"answers":[
			"1.お願い申し上げます",
			"2.次回の取引について",
			"3.緊急の対応について",
			"4.来週の打ち合わせについて"
		],
		"correct":"2",
		"explanation":"ビジネス文書としてのメールは、「件名」が簡潔で分かりやすいことが大切です。日本において、ビジネスメールの受信数は、1日平均34.30通と非常に多く、その中で1つ1つのメールの内容を全て読み込むことは非常に難しい状況です。相手がメールを開かなくても分かるよう、件名は本文の内容を簡潔に分かりやすく書きましょう。",
		"url":""
	},
	{
		"questionId":"3",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、即座に解決するための手順を提供する。",
		"url":""
	},
	{
		"questionId":"4",
		"genreId":"4",
		"question":"「16時に行く」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.16時に伺います。",
			"2.16時に行きます。",
			"3.16時に到着いたします。",
			"4.16時にいらっしゃる。"
		],
		"correct":"1",
		"explanation":"「行きます」は丁寧語、「到着いたします」は到着するかなので行くではない、「いらっしゃる」は尊敬語になるので答えは1になる",
		"url":""
	},
	{
		"questionId":"5",
		"genreId":"4",
		"question":"「17時に社長がいる」を丁寧語",
		"answers":[
			"1.17時に社長がいらっしゃる",
			"2.17時に社長がおいでになる",
			"3.17時に社長がおります",
			"4.17時に社長がおられます"
		],
		"correct":"3",
		"explanation":"「いらっしゃる」は尊敬語、「おいでになる」は尊敬語、「おられます」謙譲語なので答えは3になる。",
		"url":"https://x.gd/vbLnM"
	},
	{
		"questionId":"6",
		"genreId":"4",
		"question":"「この資料を読む」を謙譲語に変えると4つの内どれ？",
		"answers":[
			"1.この資料をお読みになる",
			"2.この資料を読みます",
			"3.この資料を拝読する",
			"4.この資料を読まれています。"
		],
		"correct":"3",
		"explanation":"「お読みになる」は尊敬語、「読みます」は丁寧語「読まれています」は尊敬語、なので答えは3になる。",
		"url":""
	},
	{
		"questionId":"7",
		"genreId":"4",
		"question":"「この資料を考える」を尊敬語に変えると4つの内どれ？",
		"answers":[
			"1.この資料をお考えになる",
			"2.この資料を拝察する",
			"3.この資料を検討いたします",
			"4.この資料を考えます"
		],
		"correct":"1",
		"explanation":"「拝察する」は謙譲語、「検討いたします」は謙譲語「考えます」は丁寧語、なので答えは1になる",
		"url":""
	},
	{
		"questionId":"8",
		"genreId":"4",
		"question":"「会社」を尊敬語に変えると4つの内どれ？",
		"answers":[
			"1.貴社",
			"2.お会社",
			"3.株式会社",
			"4.合同会社"
		],
		"correct":"1",
		"explanation":"「お会社」はそもそも存在しない単語、「株式会社」は別称、「合同会社」は、日本における会社形態の1つ",
		"url":""
	},
	{
		"questionId":"9",
		"genreId":"4",
		"question":"「こちらを食べてください」を尊敬語に変えると4つの内どれ？",
		"answers":[
			"1.こちらを頂いてください。",
			"2.こちらを頂戴してください。",
			"3.こちらを食べてください。",
			"4.こちらを召し上がってください。"
		],
		"correct":"4",
		"explanation":"「こちらを頂いてください。」は謙譲語、「こちらを頂戴してください。」は謙譲語、「こちらを食べてください。」は丁寧語、なので答えは4になる。",
		"url":""
	},
	{
		"questionId":"10",
		"genreId":"4",
		"question":"「こちらに座ってください」はこの中からだと何語でしょうか？",
		"answers":[
			"1.謙譲語",
			"2.尊敬語",
			"3.丁寧語",
			"4.私語"
		],
		"correct":"3",
		"explanation":"「謙譲語」は「謙」にはへりくだる、「譲」には相手に譲るという意味例「こちらにお掛けになってください。」「尊敬語」尊敬語の「尊」は身分が高い、「敬」は相手をうやまうという意味「私語」黙っているべき情況の中で（それにもかかわらず、小声やささやき声で）話をすること。例：「こちらにお掛けください。」",
		"url":""
	},
	{
		"questionId":"11",
		"genreId":"4",
		"question":"部長への返答で間違っている敬語の使い方が一つあります。どれでしょうか？",
		"answers":[
			"1.部長、了解しました。",
			"2.部長、かしこまりました。",
			"3.部長、承知しました。",
			"4.部長、わかりました。"
		],
		"correct":"1",
		"explanation":"かしこまりました、承知しました、わかりました。は正しい敬語となります。",
		"url":"https://x.gd/2HwGA"
	},
	{
		"questionId":"12",
		"genreId":"4",
		"question":"課長に対する敬語の使い方として正しいものはどれでしょうか？",
		"answers":[
			"1.課長、本日はご苦労さまでした。",
			"2.課長、本日はお疲れさま。",
			"3.課長、本日はお疲れさまです。",
			"4.課長、本日はご苦労さまです。"
		],
		"correct":"3",
		"explanation":"1,4は「ご苦労さま」は目上の人が目下の人に対して使う言葉として一般的に考えられているため不適切です。2は「お疲れさま」は体言止めのめ、ぶっきら棒な言い方になり適切ではありません。 ",
		"url":"https://x.gd/2HwGA"
	},
	{
		"questionId":"13",
		"genreId":"4",
		"question":"4つの内間違ている敬語はどれ？",
		"answers":[
			"1.お名前を伺ってもよろしいですか",
			"2.○○様でございますね",
			"3.おっしゃる通りだと思います",
			"4.かしこまりました"
		],
		"correct":"2",
		"explanation":"問1,3,4は正しい敬語であり、間違っている答えは問2だけになります。",
		"url":"https://x.gd/q412J"
	},
	{
		"questionId":"14",
		"genreId":"3",
		"question":"取引先からの電話に対する受け答えとして適切なのはどれでしょうか？",
		"answers":[
			"1.○○は、本日休みです。",
			"2.○○は、本日お休みをいただいております。",
			"3.○○は、本日休みをとっております。",
			"4.○○は、本日休みをしています。"
		],
		"correct":"3",
		"explanation":"○○に休みを取らせているのは会社なので、電話口で聞かれたときに自社に敬意を示す必要はありません。したがって、「休みをいただく」は不切です。またＡ「休みです」はぶっきらぼうな言い方のため、不適切な言い方になります。",
		"url":"https://x.gd/NXAyP"
	},
	{
		"questionId":"15",
		"genreId":"3",
		"question":"あなたの会社の求人ページを見て、電話をしてきた人と話しています。面接の日時を設定し、当日の持ち物の指示をしました。「当日は、筆記用具を（　　　）ください」（　　　）に入る敬語表現として4つの内どれでしょうか？",
		"answers":[
			"1.ご持参",
			"2.ご持参して",
			"3.持ってきて",
			"4.持参"
		],
		"correct":"2",
		"explanation":"ご持参だけだと正しい日本語ではなく、持ってきてと持参だと正しい敬語ではなくなるため答えは2",
		"url":"https://x.gd/cUaVe"
	},
	{
		"questionId":"16",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で受けた問い合わせに対して、次のうちどれが最も適切な対応でしょうか？",
		"answers":[
			"1.問題解決のために、顧客に数日後に再度連絡する。",
			"2.顧客の問題を理解し、即座に解決するための手順を提供する。",
			"3.顧客に他社への移行を提案し、問題解決を放棄する。",
			"4.問題を無視し、顧客を別の部署に転送する。"
		],
		"correct":"2",
		"explanation":"顧客の問題を理解し、できる限り即座に解決策や手順を提供することは、効果的な顧客サービスの提供方法です。",
		"url":"https://x.gd/SzyIS "
	},
	{
		"questionId":"17",
		"genreId":"3",
		"question":"仕事での電話で、クレームを受けました。顧客は商品の不具合を訴えています。次の選択肢のうち、最も適切な対応はどれでしょうか？",
		"answers":[
			"1.すぐに返品手続きを開始し、商品を交換する。",
			"2.顧客に問題を自己解決するように指示し、サポートを拒否する。",
			"3.顧客の不快な気持ちを和らげるために謝罪し、問題解決のために詳細を聞く。",
			"4.他の顧客と同様の問題がないかを確認し、同じ不具合が他にもあるか調査する。"
		],
		"correct":"3",
		"explanation":"顧客の不快な気持ちを和らげるために謝罪し、問題解決のために詳細を聞くことが重要です。顧客の不満や問題を真剣に受け止め、解決に向けてサポートする姿勢を示すことが重要です。",
		"url":"https://x.gd/YjRGa "
	},
	{
		"questionId":"18",
		"genreId":"3",
		"question":"あなたは営業担当者です。新規顧客からの電話で、競合他社のサービスと比較した際の弊社のメリットについて尋ねられました。最も適切な対応は次のうちどれでしょうか？",
		"answers":[
			"1.弊社のサービスのメリットを具体的な例やデータを用いて説明する。",
			"2.弊社のサービスは競合よりも優れている点を説明する。",
			"3.競合他社の短所を強調して、弊社の利点を強調する。",
			"4.顧客に競合他社の詳細情報を提供する。"
		],
		"correct":"1",
		"explanation":"顧客からの問いに対し、弊社のサービスのメリットを具体的な例やデータを用いて説明することが重要です。抽象的な主張よりも、具体的な事例やデータを提示することで、顧客により詳細で信憑性のある情報を提供することができます。",
		"url":"https://x.gd/X41XN "
	},
	{
		"questionId":"19",
		"genreId":"3",
		"question":"あなたはカスタマーサポート担当者です。顧客からの電話で、商品の返品に関する要求がありました。適切な対応として最も適しているのは次のうちどれでしょうか？",
		"answers":[
			"1.返品ポリシーに基づいて返品を受け付ける。",
			"2.顧客に返品手続きの詳細を説明し、返品の可能性を示す。",
			"3.返品を拒否し、返品ポリシーに関する規定を説明する。",
			"4.返品の代わりに、商品の修理や交換を提案する。"
		],
		"correct":"2",
		"explanation":"顧客の返品に対して具体的な手続きや詳細を説明し、返品の可能性について示すことが重要です。顧客が返品を希望する理由や状況を理解し、適切な手順を案内することで、円滑な返品プロセスをサポートできます。",
		"url":"https://x.gd/Exenl"
	},
	{
		"questionId":"20",
		"genreId":"3",
		"question":"あなたはカスタマーサポート担当者です。顧客からの電話で、商品の配送に遅れが生じたことを報告されました。適切な対応として最も適しているのは次のうちどれでしょうか？",
		"answers":[
			"1.速やかに謝罪し、遅延の原因を調査して詳細を提供する。",
			"2.顧客に責任を押し付け、遅延の原因が彼らにあると伝える。",
			"3.遅延についてはっきりとした説明を避け、別の話題に逸らす。",
			"4.遅延の代わりに、顧客に製品の無料提供を提案する。"
		],
		"correct":"1",
		"explanation":"顧客からの報告に対し速やかに謝罪し、遅延の原因を調査して詳細を提供することが重要です。",
		"url":"https://x.gd/GtDb9"
	},
	{
		"questionId":"21",
		"genreId":"3",
		"question":"あなたはカスタマーサポート担当者です。電話で顧客からの苦情がありました。商品が破損して届いたとの報告です。",
		"answers":[
			"1.顧客に新しい商品を即座に発送する。",
			"2.破損の補償として割引クーポンを提供する。",
			"3.破損した商品に関する責任を顧客に押し付ける。",
			"4.破損の写真を要求し、事態を調査するために詳細を求める。"
		],
		"correct":"4",
		"explanation":"破損した商品に関する詳細や証拠として写真を要求し、事態を調査することが重要です。顧客の報告を真摯に受け止め、問題の原因を明らかにすることで、適切な解決策を見つけることができます。",
		"url":"https://x.gd/0skzL "
	},
	{
		"questionId":"22",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。顧客からの電話で、購入した商品が不良品であると報告されました。",
		"answers":[
			"1.顧客に直ちに返品手続きを開始するよう指示する。",
			"2.顧客の主張を無視し、商品の不良性を否定する。",
			"3.謝罪し、詳細を確認するために顧客に追加情報を求める。",
			"4.顧客に商品を修理するための手順を提供する。"
		],
		"correct":"3",
		"explanation":"顧客の主張に謝罪し、不良品に関する詳細を確認するために顧客から追加情報を求めることが重要です",
		"url":"https://x.gd/jZqei "
	},
	{
		"questionId":"23",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。顧客からの電話で、直近の注文に含まれていない商品が届いたと報告されました。",
		"answers":[
			"1.顧客に商品の不足を否定し、注文内容を確認するよう伝える。",
			"2.謝罪し、顧客の報告を確認し、不足している商品についての詳細を求める。",
			"3.顧客の報告を無視し、他の商品の特典を提供する。",
			"4.顧客に代替商品を提供する。"
		],
		"correct":"2",
		"explanation":"顧客の報告に対して謝罪し、報告内容を確認し、不足している商品に関する詳細を求めることが重要です。",
		"url":"https://x.gd/598OZ"
	},
	{
		"questionId":"24",
		"genreId":"3",
		"question":"あなたは顧客サポート担当者です。電話で、顧客が最近購入した商品がサイズが合わず返品したいと要求してきましたが、返品ポリシーでは期限を過ぎている場合には返品ができません。次のうち、最も適切な対応はどれでしょうか？",
		"answers":[
			"1.顧客の要求を拒否し、ポリシーに基づいて返品を受け付けられないことを説明する。",
			"2.顧客に別の同等品の交換を提案する。",
			"3.返品期限を延長し、顧客の要求を受け入れる。",
			"4.顧客に返品手続きを進めるよう指示するが、後で返品を拒否する。"
		],
		"correct":"1",
		"explanation":"顧客の要求を拒否し、ポリシーに基づいて返品を受け付けられないことを説明することが重要です。ポリシーに基づいて公平かつ一貫した対応を行うことが、顧客との信頼を保つ上で重要です。",
		"url":"https://x.gd/C8Zi3"
	},
	{
		"questionId":"25",
		"genreId":"2",
		"question":"ビジネスメールで「TO」を使用した際の適切な送り方はどれでしょうか？",
		"answers":[
			"1.TO: [受信者のメールアドレス]",
			"2.TO: [受信者の名前]",
			"3.TO: [送信者のメールアドレス]",
			"4.TO: [送信者の名前]"
		],
		"correct":"1",
		"explanation":"「TO」とは、宛先の意味があります。メインでメールを送りたい相手のアドレスを入力します。「記載している内容の作業をして欲しい」などの用件を伝えたい、送ったメールに返信がほしい、などのメール内容を、「あなた宛のメールです」と伝える役割があります。",
		"url":"https://x.gd/4nFB"
	},
	{
		"questionId":"26",
		"genreId":"2",
		"question":"次の中で、ビジネスのメールで上司に対する丁寧なお断りの表現として適切なものはどれでしょうか？",
		"answers":[
			"1.了解しましたが、それは難しい課題です。",
			"2.かしこまりましたが、私はそのプロジェクトに参加することができません。",
			"3.承知いたしましたが、私のスケジュール上、先約があり難しい状況です。",
			"4.分かりましたが、それには参加できません。"
		],
		"correct":"3",
		"explanation":"(了解しましたが、それは難しい課題です)了解の表現は良いですが、少し否定的なニュアンスが含まれています。(かしこまりましたが、私はそのプロジェクトに参加することができません)かしこまりましたは丁寧ですが、(参加することができませんという表現がやや直接的です(承知いたしましたが、私のスケジュール上、難しい状況です) 承知いたしましたは謙譲語で、理由も丁寧に説明しています。(分かりましたが、それには参加できません)分かりましたも適切ですが、理由を追加することでより丁寧になります。",
		"url":"https://x.gd/eYTyX"
	},
	{
		"questionId":"27",
		"genreId":"2",
		"question":"文章を作成するとき、見出しにも気を配る必要があります。次のうち、見出し作成のポイントに当てはまらないものを選んでください",
		"answers":[
			"1.本文の内容を明確に示す",
			"2.階層は2階層までにする",
			"3.内容の粒度を揃える",
			"4.独立して意味が通る文章にする"
		],
		"correct":"4",
		"explanation":"見出しは独立した意味を持つべきですが、それが文章全体の完全な意味を伝える必要はありません。見出しは本文の要約や焦点を示すものであり、本文の内容を明確に示し、適切な階層構造を保ちつつ、読者が本文を理解しやすくすることが重要です。",
		"url":"https://blog.qbist.co.jp/?p=4596"
	},
	{
		"questionId":"28",
		"genreId":"2",
		"question":"「わかりやすく簡潔に文章を書くためのポイント」に当てはまらないものを選んでください。",
		"answers":[
			"1.1文1メッセージにする",
			"2.1文の長さは100文字程度を目安にする",
			"3.接続詞を多用しない",
			"4.文章中で使用する用語は統一する"
		],
		"correct":"3",
		"explanation":"接続詞は文章をつなげる役割を果たし、読み手が文の流れを理解しやすくします。ただし、過剰な接続詞の使用は文を複雑にし、理解を難しくすることもあります。そのため、必要な場面で適切に接続詞を使うことが重要です。",
		"url":"https://x.gd/cNjcQ"
	},
	{
		"questionId":"29",
		"genreId":"2",
		"question":"わかりやすく文章を書くには、接続詞の使い方が重要です。次の接続詞のうち、[順接]接続詞ではないものを選んでください。",
		"answers":[
			"1.したがって",
			"2.また",
			"3.それで",
			"4.そこで"
		],
		"correct":"2",
		"explanation":"逆接や順接どちらも含む接続詞で、「さらに」「その上」という意味で使われますが、単独で順接を示すのではなく、文脈によって意味が変わります。",
		"url":"https://x.gd/5toqe"
	},
	{
		"questionId":"30",
		"genreId":"2",
		"question":"ビジネスメールでは、「頂く」という言葉を使う機会が少なくありません。「頂く」は、ひらがなの「いただく」と使い方に違いがあります。「頂く」の使い方で適切なものを選択してください。",
		"answers":[
			"1.お越し頂いてよろしいでしょうか",
			"2.お客さまからお土産を頂いた",
			"3.本日はお休みとさせて頂きます",
			"4.詳細な状況をご説明頂いた"
		],
		"correct":"2",
		"explanation":"「頂く」という言葉は、謙譲の意味を持ち、相手に対する敬意を示すために使われます。この言葉は、受身形で自分が何かを受け取る際に使用されます。例えば、「お客さまからお土産を頂いた」という文は、自分がお客さまから何かを受け取ったことを謙虚に表現しています。",
		"url":"https://x.gd/nnIF8"
	},
	{
		"questionId":"31",
		"genreId":"1",
		"question":"雇用保険料という税金はどのような目的で集められているのか。以下の選択肢から違うものはどれ。",
		"answers":[
			"1.労働者の新しい知識やスキルなどを習得するために、職業訓練や職業教育を実施して再就職の促進をはかる",
			"2.労働者が失業した際の生活を守るために支給される失業給付や、育児休暇中の育児休業給付などを行う",
			"3.被保険者・被扶養者が病気や怪我をはじめとする出産や高齢、介護、失業、労働災害などのリスクに対して、生活を保障する。",
			"4.労働者が失業しないよう予防したり、雇用状態を是正して離職防止と雇用機会の増大をはかる"
		],
		"correct":"3",
		"explanation":"1,2,4番は雇用保険の目的ですが、3番は社会保険の目的です。",
		"url":"https://x.gd/ggfU2"
	},
	{
		"questionId":"32",
		"genreId":"1",
		"question":"初任給で差し引かれるのは以下のうちどれ",
		"answers":[
			"1.健康保険料",
			"2.雇用保険料",
			"3.厚生年金保険料",
			"4.住民税"
		],
		"correct":"2",
		"explanation":"社会保険料のうち、「雇用保険料」は当月から差し引きされますが、「健康保険料」と「厚生年金保険料」は、通常前月の支払い分を翌月の給料から差し引かれます。住民税は住民税は前年の所得をもとにして納める税金のため、前年度の所得によって変わります。",
		"url":"https://x.gd/h7DJC"
	},
	{
		"questionId":"33",
		"genreId":"1",
		"question":"課税所得金額が330万以上の場合の所得税の税率は以下のうちどれ",
		"answers":[
			"1.5%",
			"2.10%",
			"3.20%",
			"4.23%"
		],
		"correct":"3",
		"explanation":"1,000円から194万9,000円までが5%、195万円から329万9,000円までが10%、330万円から694万9,000円までが20%、695万円から899万9,000円までが23%になります。 ",
		"url":"https://x.gd/5wJLi"
	},
	{
		"questionId":"34",
		"genreId":"1",
		"question":"所得税の計算方法は以下のうちどれでしょう",
		"answers":[
			"1.課税所得金額+税率×控除額",
			"2.課税所得金額×税率＋控除額",
			"3.課税所得金額×(税率＋控除額)",
			"4.課税所得金額×税率－控除額"
		],
		"correct":"4",
		"explanation":"正解は４の課税所得金額×税率－控除額です。",
		"url":"https://x.gd/ym15J"
	},
	{
		"questionId":"35",
		"genreId":"1",
		"question":"税金を納期までに納めなかった場合どうなるのか以下のうちから初めに起こることを選んでください",
		"answers":[
			"1.何も起きない",
			"2.督促状が届く",
			"3.財産調査",
			"4.財産の差し押さえ"
		],
		"correct":"2",
		"explanation":"払わなかった場合は、催促状が届く→財産調査→差し押さえの順番で行われます。",
		"url":"https://x.gd/Fgftv"
	},
	{
		"questionId":"36",
		"genreId":"1",
		"question":"以下のうち国税ではないものはどれでしょうか",
		"answers":[
			"1.所得税",
			"2.法人税",
			"3.贈与税",
			"4.自動車税"
		],
		"correct":"4",
		"explanation":"所得税、法人税、贈与税は国税ですが、自動車税は地方税です。",
		"url":"https://x.gd/apF9d"
	},
	{
		"questionId":"37",
		"genreId":"1",
		"question":"独身世帯の時に税金が一番得な年収は以下のうちどれでしょう",
		"answers":[
			"1.690万前後",
			"2.830万前後",
			"3.520万前後",
			"4.910万前後"
		],
		"correct":"1",
		"explanation":"所得税は650万円あたりから急激に上がり始め、780万円あたりから住民税よりも高くなります。基礎控除のみの給与所得でシミュレーションすると、年収700万円が損得の分岐点といえます。そのため、690万前後がコスパの良い年収になります。",
		"url":"https://x.gd/5u8Cg"
	},
	{
		"questionId":"38",
		"genreId":"1",
		"question":"税金の納付は最大どれだけ待ってもらえるでしょう",
		"answers":[
			"1.３ヵ月",
			"2.半年",
			"3.１年",
			"4.１年半"
		],
		"correct":"3",
		"explanation":"納付を待ってもらえる期間は、原則として１年間が限度になっています。",
		"url":"https://x.gd/DMl42"
	},
	{
		"questionId":"39",
		"genreId":"1",
		"question":"以下のうち地方税はどれでしょう",
		"answers":[
			"1.贈与税",
			"2.消費税",
			"3.酒税",
			"4.住民税"
		],
		"correct":"4",
		"explanation":"贈与税、消費税、酒税は国税で、住民税は地方税です。",
		"url":"https://x.gd/apF9d"
	},
	{
		"questionId":"40",
		"genreId":"2",
		"question":"メールで使用される「CC」の意味とはどれでしょうか？",
		"answers":[
			"1.Copy to（コピー先）",
			"2.Courtesy Copy（丁寧なコピー）",
			"3.Carbon Copy（カーボンコピー）",
			"4.Current Copy（最新のコピー）"
		],
		"correct":"3",
		"explanation":"「CC」とは、カーボン・コピー（Carbon Copy）の略で、「複写」の意味があります。TOの宛先となる人の他に、内容を共有したい相手のアドレスを入力すると、同じ（複写）メールが送信されます。",
		"url":"https://x.gd/4nFBP"
	},
	{
		"questionId":"41",
		"genreId":"2",
		"question":"ビジネスメールの最初に書くものとして適切なものは何か？",
		"answers":[
			"1.挨拶文",
			"2.要件",
			"3.宛名",
			"4.署名"
		],
		"correct":"3",
		"explanation":"メールの本文の最初には必ず宛名を書きます。いきなり用件から入ってはいけません。社外の人にメールをするときには「会社名」「部署名」「名前」という順番で書くのが基本。",
		"url":""
	},
	{
		"questionId":"42",
		"genreId":"2",
		"question":"署名を作る際に気を付けるポイントとして不適切なものはどれでしょうか？",
		"answers":[
			"1.過剰な装飾は避ける",
			"2.環境によって文字化けする可能性がある点に注意する",
			"3.情報が変わったらすぐに変更する",
			"4.自分の情報と相手の情報を詳細に書く"
		],
		"correct":"4",
		"explanation":"ビジネスメールの署名には必要最小限の情報を含め、他者とのコミュニケーションに必要な要素に絞ることが一般的です。",
		"url":"https://x.gd/gy23l"
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
    if ( ! (choise_index.includes(idx))){
        i++;
		console.log(idx)
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
	if(quiz[quizCount].url.length != 0){
		document.getElementById('js-explanation').innerHTML = "<b>正解:"+quiz[quizCount].answers[quiz[quizCount].correct-1]+"</b><br>"+quiz[quizCount].explanation+"<br><a href='"+quiz[quizCount].url+"'target='_blank' rel='noopener noreferrer'>詳しく見る</a>"
	}else{
		document.getElementById('js-explanation').innerHTML = "<b>正解:"+quiz[quizCount].answers[quiz[quizCount].correct-1]+"</b><br>"+quiz[quizCount].explanation
	}


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