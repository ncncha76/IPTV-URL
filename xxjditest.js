import { Crypto, load, _ } from './lib/cat.js';
//import axios from 'axios';

let key = 'JOJO';
let HOST = 'https://www.jiohub.top/';
let parseMap = {};
let siteKey = '';
let siteType = 0;

const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
/*
async function request(reqUrl) {
    let res = await req(reqUrl, {
        method: 'get',
        headers: {
            'User-Agent': UA,
            
			
        },
    });
    return res.content;
}
async function requestp(reqUrl) {
    let res = await req(reqUrl, {
        method: 'post',
        headers: {
            'User-Agent': UA,
            'Content-Type': 'application/json',
            'Authorization': null,
        },
    });
    return res.content;
}
*/

async function requestp(reqUrl) {
    let res = await req(reqUrl, {
        method: 'get',
        headers: {
            'User-Agent': UA,
            
			
        },
    });
    return res.content;
}

async function request(reqUrl, referer, mth, data, hd) {
    const headers = {
        "User-Agent": UA,
		'Content-Type': 'application/json',
        'Authorization': "",
    };
    let res = await req(reqUrl, {
        method: mth || "get",
        headers: headers,
        data: data,
    });
    return res.content;
}
/*
async function request(reqUrl,rsdata) {
    let res = await axios.post(reqUrl, rsdata,{
        headers: {
            'User-Agent': UA,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': null

            
        }

    });
    return res.data;
}
*/


async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
}


async function home(filter) {
    const classes = [{'type_id':'电影','type_name':'电影'},{'type_id':'美剧','type_name':'美剧'},{'type_id':'韩剧','type_name':'韩剧'},{'type_id':'日剧','type_name':'日剧'},{'type_id':'动漫','type_name':'动漫'},{'type_id':'国产','type_name':'国产'}];
    const filterObj = {'电影': [{'key': 'cateid', 'name': '剧情', 'init': '', 'value': [{'n': '全部', 'v': '全部'},{'n': '剧情', 'v': '剧情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '动作', 'v': '动作'}, {'n': '科幻', 'v': '科幻'}, {'n': '剧情', 'v': '剧情'}, {'n': '战争', 'v': '战争'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '动画', 'v': '动画'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '武侠', 'v': '武侠'}, {'n': '冒险', 'v': '冒险'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '惊悚', 'v': '惊悚'},  {'n': '同性', 'v': '同性'}, {'n': '情色', 'v': '情色'}, {'n': '儿童', 'v': '儿童'}, {'n': '纪录片', 'v': '纪录片'}]}, {'key':'year','name':'年代','init':'','value':[{'n':'全部','v':'全部'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2010','v':'2024'}]}],
	'美剧': [{'key': 'cateid', 'name': '剧情', 'init': '', 'value': [{'n': '全部', 'v': '全部'},{'n': '剧情', 'v': '剧情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '动作', 'v': '动作'}, {'n': '科幻', 'v': '科幻'}, {'n': '剧情', 'v': '剧情'}, {'n': '战争', 'v': '战争'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '动画', 'v': '动画'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '武侠', 'v': '武侠'}, {'n': '冒险', 'v': '冒险'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '惊悚', 'v': '惊悚'},  {'n': '同性', 'v': '同性'}, {'n': '情色', 'v': '情色'}, {'n': '儿童', 'v': '儿童'}, {'n': '纪录片', 'v': '纪录片'}]}, {'key':'year','name':'年代','init':'','value':[{'n':'全部','v':'全部'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2010','v':'2024'}]}],
	'韩剧': [{'key': 'cateid', 'name': '剧情', 'init': '', 'value': [{'n': '全部', 'v': '全部'},{'n': '剧情', 'v': '剧情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '动作', 'v': '动作'}, {'n': '科幻', 'v': '科幻'}, {'n': '剧情', 'v': '剧情'}, {'n': '战争', 'v': '战争'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '动画', 'v': '动画'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '武侠', 'v': '武侠'}, {'n': '冒险', 'v': '冒险'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '惊悚', 'v': '惊悚'},  {'n': '同性', 'v': '同性'}, {'n': '情色', 'v': '情色'}, {'n': '儿童', 'v': '儿童'}, {'n': '纪录片', 'v': '纪录片'}]}, {'key':'year','name':'年代','init':'','value':[{'n':'全部','v':'全部'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2010','v':'2024'}]}],
	'日剧': [{'key': 'cateid', 'name': '剧情', 'init': '', 'value': [{'n': '全部', 'v': '全部'},{'n': '剧情', 'v': '剧情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '动作', 'v': '动作'}, {'n': '科幻', 'v': '科幻'}, {'n': '剧情', 'v': '剧情'}, {'n': '战争', 'v': '战争'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '动画', 'v': '动画'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '武侠', 'v': '武侠'}, {'n': '冒险', 'v': '冒险'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '惊悚', 'v': '惊悚'},  {'n': '同性', 'v': '同性'}, {'n': '情色', 'v': '情色'}, {'n': '儿童', 'v': '儿童'}, {'n': '纪录片', 'v': '纪录片'}]}, {'key':'year','name':'年代','init':'','value':[{'n':'全部','v':'全部'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2010','v':'2024'}]}],
	'动漫': [{'key': 'cateid', 'name': '剧情', 'init': '', 'value': [{'n': '全部', 'v': '全部'},{'n': '剧情', 'v': '剧情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '动作', 'v': '动作'}, {'n': '科幻', 'v': '科幻'}, {'n': '剧情', 'v': '剧情'}, {'n': '战争', 'v': '战争'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '动画', 'v': '动画'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '武侠', 'v': '武侠'}, {'n': '冒险', 'v': '冒险'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '惊悚', 'v': '惊悚'},  {'n': '同性', 'v': '同性'}, {'n': '情色', 'v': '情色'}, {'n': '儿童', 'v': '儿童'}, {'n': '纪录片', 'v': '纪录片'}]}, {'key':'year','name':'年代','init':'','value':[{'n':'全部','v':'全部'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2010','v':'2024'}]}],
	'国产': [{'key': 'cateid', 'name': '剧情', 'init': '', 'value': [{'n': '全部', 'v': '全部'},{'n': '剧情', 'v': '剧情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '动作', 'v': '动作'}, {'n': '科幻', 'v': '科幻'}, {'n': '剧情', 'v': '剧情'}, {'n': '战争', 'v': '战争'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '动画', 'v': '动画'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '武侠', 'v': '武侠'}, {'n': '冒险', 'v': '冒险'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '惊悚', 'v': '惊悚'},  {'n': '同性', 'v': '同性'}, {'n': '情色', 'v': '情色'}, {'n': '儿童', 'v': '儿童'}, {'n': '纪录片', 'v': '纪录片'}]}, {'key':'year','name':'年代','init':'','value':[{'n':'全部','v':'全部'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'2015'},{'n':'2014','v':'2014'},{'n':'2013','v':'2013'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2010','v':'2024'}]}]
    };
    return JSON.stringify({
        class: classes,
        filters: filterObj,
    });
}

async function homeVod() {}


async function category(tid, pg, filter, extend) {
    if (pg <= 0) pg = 1;

    const link ='https://pan.syrme.top/v1/api/video/jojo/type/tag/year?type='+encodeURIComponent(extend.class ||tid)+'&tag='+encodeURIComponent(extend.cateid ||"全部")+'&year='+encodeURIComponent(extend.year ||"全部") +'&page=1&size=24';
    console.log(link);
	
    const data ={
        "type": encodeURIComponent(extend.class||tid),
        "tag": encodeURIComponent(extend.cateid||"全部"),
        "year": encodeURIComponent(extend.year||"全部"),
        "page": pg,
        "size": "24"
}

	const html = await request(link,"","post",data);
	const htmll = JSON.parse(html);
	const items = htmll.data;
	//const htmlrr =  requestp(HOST + Crypto.enc.Base64.parse(encodeURIComponent("https://super.ffzy-online6.com/20240516/31219_2757ba53/index.m3u8")));
//const htmlr =  requestp("https://www.jiohub.top/" + items[1].ID);
	const videos = _.map(items, (item) => {
    //const htmlr =  requestp(HOST+item.ID+"/"+decodeURIComponent(item.title) + item.image + "/"+ decodeURIComponent(item.url_content.split('$')[0]));
		return {
			vod_id: item.ID,
			vod_name: item.title,
			vod_pic: item.image,
			vod_remarks: item.url_content.split('$')[0],
		};
	});
	const limit = 24;

	const pgCount = parseInt(pg)+1;
    

    //const hasMore = (items.length === 40);
    //const pgCount = hasMore ? parseInt(pg) + 1 : parseInt(pg);

	return  JSON.stringify({
			page: parseInt(pg),
			pagecount: pgCount,
			limit: limit,
			total: limit * pgCount,
			list: videos,
		});

	}


async function detail(id) {
    const link = 'https://pan.syrme.top/v1/api/video/jojo/id?id='+ String(id);
    const data ={
        "id": String(id)
    }
    const html = await request(link,"","post",data);
	const htmll = JSON.parse(html);
    const item = htmll.data;

    const vod = {
        vod_id: id,
        vod_name: item.title.trim(),
        vod_area: item.video_type,
        vod_year: item.year,
        vod_director: item.director,
        vod_actor: item.authors,
        vod_pic: item.image,
        vod_remarks: item.video_tags,
        vod_content: item.content,
    };
    const playMap = {};
    const tabs = ["未知"];
    const playlists = item.url_content.split("\n");
    _.each(tabs, (tab, i) => {
       // const $tab = $(tab);
        const from = tab;
        let list = playlists;
        _.each(list, (it) => {
            const title = it.split('$')[0];
            const playUrl = it.split('$')[1];

            if (!playMap.hasOwnProperty(from)) {
                playMap[from] = [];
            }
            playMap[from].push(it);
        });
    });
    vod.vod_play_from = _.keys(playMap).join('$$$');
    const urls = _.values(playMap);
    const vod_play_url = _.map(urls, (urlist) => {
        return urlist.join('#');
    });
    vod.vod_play_url = vod_play_url.join('$$$');
    console.log(vod);
    return JSON.stringify({
        list: [vod],
    });

}

function base64Encode(text) {
    return Crypto.enc.Base64.stringify(Crypto.enc.Utf8.parse(text));
}

async function play(flag, id, flags) {
    const baseid = base64Encode(id)

	
    let playUrl = "https://oss.jiohub.top/v1/api/file/hls/proxy/"+baseid +".m3u8";
	const html = await requestp(playUrl);
    return JSON.stringify({
        parse: 0,
        url: playUrl,
        header: {
            'User-Agent': UA,
        }
    });
}


async function search(wd, quick) {
    const data = JSON.parse(await request(HOST + '/index.php/ajax/suggest?mid=1&limit=50&wd=' + wd)).list;
    const videos = _.map(data, (vod) => {
        return {
            vod_id: vod.id,
            vod_name: vod.name,
            vod_pic: vod.pic,
            vod_remarks: '',
        };
    });
    return JSON.stringify({
        list: videos,
    });
}


export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
    };
}	