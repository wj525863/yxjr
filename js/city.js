cityareaname=new Array(35);
cityareacode=new Array(35);
function first(preP,preC,VeryHuo,selectP,selectC)
{
a=0;
if (selectP=='01')
{ a=1;tempoption=new Option('上海市','01',false,true); }
else
{ tempoption=new Option('上海市','01'); }
eval('document.'+VeryHuo+'.'+preP+'.options[1]=tempoption;');
cityareacode[0]=new Array('0101','0102','0103','0104','0105','0106','0107','0108','0109','0110','0111','0112','0113','0114','0115','0116','0117');
cityareaname[0]=new Array('黄浦区','徐汇区','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','奉贤区','崇明县');
if (selectP=='02')
{ a=2;tempoption=new Option('北京市','02',false,true); }
else
{ tempoption=new Option('北京市','02'); }
eval('document.'+VeryHuo+'.'+preP+'.options[2]=tempoption;');
cityareacode[1]=new Array('0201','0202','0203','0204','0205','0206','0207','0208','0209','0210','0211','0212','0213','0214','0215','0216');
cityareaname[1]=new Array('东城区','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','昌平区','大兴区','怀柔区','平谷区','密云县','延庆县');
if (selectP=='03')
{ a=3;tempoption=new Option('深圳市','03',false,true); }
else
{ tempoption=new Option('深圳市','03'); }
eval('document.'+VeryHuo+'.'+preP+'.options[3]=tempoption;');
cityareacode[2]=new Array('0301','0302','0303','0304','0305','0306');
cityareaname[2]=new Array('罗湖区','福田区','南山区','盐田区','宝安区','龙岗区');
if (selectP=='04')
{ a=4;tempoption=new Option('重庆市','04',false,true); }
else
{ tempoption=new Option('重庆市','04'); }
eval('document.'+VeryHuo+'.'+preP+'.options[4]=tempoption;');
cityareacode[3]=new Array('0401','0402','0403','0404','0405','0406','0407','0408','0409','0410','0411','0412','0413','0414','0415','0416','0417','0418','0419','0420','0421','0422','0423','0424','0425','0426','0427','0428','0429','0430','0431','0432','0433','0434','0435','0436','0437');
cityareaname[3]=new Array('万州区','涪陵区','渝中区','大渡口区','江北区','沙坪坝区','九龙坡区','南岸区','北碚区','綦江区','大足区','渝北区','巴南区','黔江区','长寿区','江津区','合川区','永川区','南川区','潼南县','铜梁县','荣昌县','璧山县','梁平县','城口县','丰都县','垫江县','武隆县','忠县','开县','云阳县','奉节县','巫山县','巫溪县','石柱土家族自治县','秀山土家族苗族自治县','酉阳土家族苗族自治县','彭水苗族土家族自治县');
if (selectP=='05')
{ a=5;tempoption=new Option('天津市','05',false,true); }
else
{ tempoption=new Option('天津市','05'); }
eval('document.'+VeryHuo+'.'+preP+'.options[5]=tempoption;');
cityareacode[4]=new Array('0501','0502','0503','0504','0505','0506','0507','0508','0509','0510','0511','0512','0513','0514','0515','0516');
cityareaname[4]=new Array('和平区','河东区','河西区','南开区','河北区','红桥区','东丽区','西青区','津南区','北辰区','武清区','宝坻区','滨海新区','宁河县','静海县','蓟县');
if (selectP=='06')
{ a=6;tempoption=new Option('广东省','06',false,true); }
else
{ tempoption=new Option('广东省','06'); }
eval('document.'+VeryHuo+'.'+preP+'.options[6]=tempoption;');
cityareacode[5]=new Array('0601','0602','0603','0604','0605','0606','0607','0608','0609','0610','0611','0612','0613','0614','0615','0616','0617','0618','0619','0620','0621');
cityareaname[5]=new Array('广州市','韶关市','深圳市','珠海市','汕头市','佛山市','江门市','湛江市','茂名市','肇庆市','惠州市','梅州市','汕尾市','河源市','阳江市','清远市','东莞市','中山市','潮州市','揭阳市','云浮市');
if (selectP=='07')
{ a=7;tempoption=new Option('河北省','07',false,true); }
else
{ tempoption=new Option('河北省','07'); }
eval('document.'+VeryHuo+'.'+preP+'.options[7]=tempoption;');
cityareacode[6]=new Array('0701','0702','0703','0704','0705','0706','0707','0708','0709','0710','0711','0712');
cityareaname[6]=new Array('石家庄市','唐山市','秦皇岛市','邯郸市','邢台市','张家口市','保定市','张家口市','承德市','沧州市','廊坊市','衡水市');
if (selectP=='08')
{ a=8;tempoption=new Option('山西省','08',false,true); }
else
{ tempoption=new Option('山西省','08'); }
eval('document.'+VeryHuo+'.'+preP+'.options[8]=tempoption;');
cityareacode[7]=new Array('0801','0802','0803','0804','0805','0806','0807','0808','0809','0810','0811');
cityareaname[7]=new Array('太原市','大同市','阳泉市','长治市','晋城市','朔州市','晋中市','运城市','忻州市','临汾市','吕梁市');
if (selectP=='09')
{ a=9;tempoption=new Option('内蒙古自治区','09',false,true); }
else
{ tempoption=new Option('内蒙古自治区','09'); }
eval('document.'+VeryHuo+'.'+preP+'.options[9]=tempoption;');
cityareacode[8]=new Array('0901','0902','0903','0904','0905','0906','0907','0908','0909','0910','0911','0912');
cityareaname[8]=new Array('呼和浩特市','包头市','乌海市','赤峰市','通辽市','鄂尔多斯市','呼伦贝尔市','巴彦淖尔市','乌兰察布市','兴安盟','锡林郭勒盟','阿拉善盟');
if (selectP=='10')
{ a=10;tempoption=new Option('辽宁省','10',false,true); }
else
{ tempoption=new Option('辽宁省','10'); }
eval('document.'+VeryHuo+'.'+preP+'.options[10]=tempoption;');
cityareacode[9]=new Array('1001','1002','1003','1004','1005','1006','1007','1008','1009','1010','1011','1012','1013','1014');
cityareaname[9]=new Array('沈阳市','大连市','鞍山市','抚顺市','本溪市','丹东市','锦州市','营口市','阜新市','辽阳市','盘锦市','铁岭市','朝阳市','葫芦岛市');
if (selectP=='11')
{ a=11;tempoption=new Option('吉林省','11',false,true); }
else
{ tempoption=new Option('吉林省','11'); }
eval('document.'+VeryHuo+'.'+preP+'.options[11]=tempoption;');
cityareacode[10]=new Array('1101','1102','1103','1104','1105','1106','1107','1108','1109');
cityareaname[10]=new Array('长春市','吉林市','四平市','辽源市','通化市','白山市','松原市','白城市','延边朝鲜族自治州');
if (selectP=='12')
{ a=12;tempoption=new Option('黑龙江省','12',false,true); }
else
{ tempoption=new Option('黑龙江省','12'); }
eval('document.'+VeryHuo+'.'+preP+'.options[12]=tempoption;');
cityareacode[11]=new Array('1201','1202','1203','1204','1205','1206','1207','1208','1209','1210','1211','1212','1213');
cityareaname[11]=new Array('哈尔滨市','齐齐哈尔市','鸡西市','鹤岗市','双鸭山市','大庆市','伊春市','佳木斯市','七台河市','牡丹江市','黑河市','绥化市','大兴安岭地区');
if (selectP=='13')
{ a=13;tempoption=new Option('江苏省','13',false,true); }
else
{ tempoption=new Option('江苏省','13'); }
eval('document.'+VeryHuo+'.'+preP+'.options[13]=tempoption;');
cityareacode[12]=new Array('1301','1302','1303','1304','1305','1306','1307','1308','1309','1310','1311','1312','1313');
cityareaname[12]=new Array('南京市','无锡市','徐州市','常州市','苏州市','南通市','连云港市','淮安市','盐城市','扬州市','镇江市','泰州市','宿迁市');
if (selectP=='14')
{ a=14;tempoption=new Option('浙江省','14',false,true); }
else
{ tempoption=new Option('浙江省','14'); }
eval('document.'+VeryHuo+'.'+preP+'.options[14]=tempoption;');
cityareacode[13]=new Array('1401','1402','1403','1404','1405','1406','1407','1408','1409','1410','1411');
cityareaname[13]=new Array('杭州市','宁波市','温州市','嘉兴市','湖州市','绍兴市','金华市','衢州市','舟山市','台州市','丽水市');
if (selectP=='15')
{ a=15;tempoption=new Option('安徽省','15',false,true); }
else
{ tempoption=new Option('安徽省','15'); }
eval('document.'+VeryHuo+'.'+preP+'.options[15]=tempoption;');
cityareacode[14]=new Array('1501','1502','1503','1504','1505','1506','1507','1508','1509','1510','1511','1512','1513','1514','1515','1516','1517');
cityareaname[14]=new Array('合肥市','芜湖市','蚌埠市','淮南市','马鞍山市','淮北市','铜陵市','安庆市','黄山市','滁州市','阜阳市','宿州市','六安市','亳州市','池州市','巢湖市','宣城市');
if (selectP=='16')
{ a=16;tempoption=new Option('福建省','16',false,true); }
else
{ tempoption=new Option('福建省','16'); }
eval('document.'+VeryHuo+'.'+preP+'.options[16]=tempoption;');
cityareacode[15]=new Array('1601','1602','1603','1604','1605','1606','1607','1608','1609');
cityareaname[15]=new Array('福州市','厦门市','莆田市','三明市','泉州市','漳州市','南平市','龙岩市','宁德市');
if (selectP=='17')
{ a=17;tempoption=new Option('江西省','17',false,true); }
else
{ tempoption=new Option('江西省','17'); }
eval('document.'+VeryHuo+'.'+preP+'.options[17]=tempoption;');
cityareacode[16]=new Array('1701','1702','1703','1704','1705','1706','1707','1708','1709','1710','1711');
cityareaname[16]=new Array('南昌市','景德镇市','萍乡市','九江市','新余市','鹰潭市','赣州市','吉安市','宜春市','抚州市','上饶市');
if (selectP=='18')
{ a=18;tempoption=new Option('山东省','18',false,true); }
else
{ tempoption=new Option('山东省','18'); }
eval('document.'+VeryHuo+'.'+preP+'.options[18]=tempoption;');
cityareacode[17]=new Array('1801','1802','1803','1804','1805','1806','1807','1808','1809','1810','1811','1812','1813','1814','1815','1816','1817');
cityareaname[17]=new Array('济南市','青岛市','淄博市','枣庄市','东营市','烟台市','潍坊市','济宁市','泰安市','威海市','日照市','莱芜市','临沂市','德州市','聊城市','滨州市','菏泽市');
if (selectP=='19')
{ a=19;tempoption=new Option('河南省','19',false,true); }
else
{ tempoption=new Option('河南省','19'); }
eval('document.'+VeryHuo+'.'+preP+'.options[19]=tempoption;');
cityareacode[18]=new Array('1901','1902','1903','1904','1905','1906','1907','1908','1909','1910','1911','1912','1913','1914','1915','1916','1917','1918');
cityareaname[18]=new Array('郑州市','开封市','洛阳市','平顶山市','安阳市','鹤壁市','新乡市','焦作市','濮阳市','许昌市','漯河市','三门峡市','南阳市','商丘市','信阳市','周口市','驻马店市','济源市');
if (selectP=='20')
{ a=20;tempoption=new Option('湖北省','20',false,true); }
else
{ tempoption=new Option('湖北省','20'); }
eval('document.'+VeryHuo+'.'+preP+'.options[20]=tempoption;');
cityareacode[19]=new Array('2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017');
cityareaname[19]=new Array('武汉市','黄石市','十堰市','宜昌市','襄阳市','鄂州市','荆门市','孝感市','荆州市','黄冈市','咸宁市','随州市','恩施土家族苗族自治州','仙桃市','天门市','潜江市','神农架市');
if (selectP=='21')
{ a=21;tempoption=new Option('湖南省','21',false,true); }
else
{ tempoption=new Option('湖南省','21'); }
eval('document.'+VeryHuo+'.'+preP+'.options[21]=tempoption;');
cityareacode[20]=new Array('2101','2102','2103','2104','2105','2106','2107','2108','2109','2110','2111','2112','2113','2114');
cityareaname[20]=new Array('长沙市','株州市','湘潭市','衡阳市','邵阳市','岳阳市','常德市','张家界市','益阳市','郴州市','永州市','怀化市','娄底市','湘西土家族苗族自治州');
if (selectP=='22')
{ a=22;tempoption=new Option('广西壮族自治区','22',false,true); }
else
{ tempoption=new Option('广西壮族自治区','22'); }
eval('document.'+VeryHuo+'.'+preP+'.options[22]=tempoption;');
cityareacode[21]=new Array('2201','2202','2203','2204','2205','2206','2207','2208','2209','2210','2211','2212','2213','2214');
cityareaname[21]=new Array('南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市');
if (selectP=='23')
{ a=23;tempoption=new Option('海南省','23',false,true); }
else
{ tempoption=new Option('海南省','23'); }
eval('document.'+VeryHuo+'.'+preP+'.options[23]=tempoption;');
cityareacode[22]=new Array('2301','2302','2303','2304','2305','2306','2307','2308','2309','2310','2311','2312','2313','2314','2315','2316','2317','2318','2319');
cityareaname[22]=new Array('海口市','三亚市','三沙市','五指山市','琼海市','儋州市','文昌市','万宁市','东方市','定安县','屯昌县','澄迈县','临高县','白沙黎族自治县','昌江黎族自治县','乐东黎族自治县','陵水黎族自治县','保亭黎族苗族自治县','琼中黎族苗族自治县');
if (selectP=='24')
{ a=24;tempoption=new Option('四川省','24',false,true); }
else
{ tempoption=new Option('四川省','24'); }
eval('document.'+VeryHuo+'.'+preP+'.options[24]=tempoption;');
cityareacode[23]=new Array('2401','2402','2403','2404','2405','2406','2407','2408','2409','2410','2411','2412','2413','2414','2415','2416','2417','2418','2419','2420','2421');
cityareaname[23]=new Array('成都市','自贡市','攀枝花市','泸州市','德阳市','绵阳市','广元市','遂宁市','内江市','乐山市','南充市','眉山市','宜宾市','广安市','达州市','雅安市','巴中市','资阳市','阿坝藏族羌族自治州','甘孜藏族自治州','凉山彝族自治州');
if (selectP=='25')
{ a=25;tempoption=new Option('贵州省','25',false,true); }
else
{ tempoption=new Option('贵州省','25'); }
eval('document.'+VeryHuo+'.'+preP+'.options[25]=tempoption;');
cityareacode[24]=new Array('2501','2502','2503','2504','2505','2506','2507','2508','2509');
cityareaname[24]=new Array('贵阳市','六盘水市','遵义市','安顺市','毕节市','铜仁市','黔西南布依族苗族自治州 ','黔东南苗族侗族自治州','黔南布依族苗族自治州');
if (selectP=='26')
{ a=26;tempoption=new Option('云南省','26',false,true); }
else
{ tempoption=new Option('云南省','26'); }
eval('document.'+VeryHuo+'.'+preP+'.options[26]=tempoption;');
cityareacode[25]=new Array('2601','2602','2603','2604','2605','2606','2607','2608','2609','2610','2611','2612','2613','2614','2615','2616');
cityareaname[25]=new Array('昆明市','曲靖市','玉溪市','保山市','昭通市','丽江市','普洱市','临沧市','楚雄彝族自治州','红河哈尼族彝族自治州','文山壮族苗族自治州','西双版纳傣族自治州','大理白族自治州','德宏傣族景颇族自治州','怒江傈僳族自治州','迪庆藏族自治州');
if (selectP=='27')
{ a=27;tempoption=new Option('西藏自治区','27',false,true); }
else
{ tempoption=new Option('西藏自治区','27'); }
eval('document.'+VeryHuo+'.'+preP+'.options[27]=tempoption;');
cityareacode[26]=new Array('2701','2702','2703','2704','2705','2706','2707');
cityareaname[26]=new Array('拉萨市','昌都地区','山南地区','日喀则地区','那曲地区','阿里地区','林芝地区');
if (selectP=='28')
{ a=28;tempoption=new Option('陕西省','28',false,true); }
else
{ tempoption=new Option('陕西省','28'); }
eval('document.'+VeryHuo+'.'+preP+'.options[28]=tempoption;');
cityareacode[27]=new Array('2801','2802','2803','2804','2805','2806','2807','2808','2809','2810');
cityareaname[27]=new Array('西安市','铜川市','宝鸡市','咸阳市','渭南市','延安市','汉中市','榆林市','安康市','商洛市');
if (selectP=='29')
{ a=29;tempoption=new Option('甘肃省','29',false,true); }
else
{ tempoption=new Option('甘肃省','29'); }
eval('document.'+VeryHuo+'.'+preP+'.options[29]=tempoption;');
cityareacode[28]=new Array('2901','2902','2903','2904','2905','2906','2907','2908','2909','2910','2911','2912','2913','2914','2915','2916');
cityareaname[28]=new Array('兰州市','嘉峪关市','金昌市','白银市','天水市','武威市','张掖市','平凉市','酒泉市','庆阳市','定西市','陇南市','临夏回族自治州','临夏市','甘南藏族自治州','合作市');
if (selectP=='30')
{ a=30;tempoption=new Option('青海省','30',false,true); }
else
{ tempoption=new Option('青海省','30'); }
eval('document.'+VeryHuo+'.'+preP+'.options[30]=tempoption;');
cityareacode[29]=new Array('3001','3002','3003','3004','3005','3006','3007','3008');
cityareaname[29]=new Array('西宁市','海东地区',' 海北藏族自治州 ','黄南藏族自治州','海南藏族自治州','果洛藏族自治州','玉树藏族自治州','海西蒙古族藏族自治州');
if (selectP=='31')
{ a=31;tempoption=new Option('宁夏回族自治区','31',false,true); }
else
{ tempoption=new Option('宁夏回族自治区','31'); }
eval('document.'+VeryHuo+'.'+preP+'.options[31]=tempoption;');
cityareacode[30]=new Array('3101','3102','3103','3104','3105');
cityareaname[30]=new Array('银川市','石嘴山市','吴忠市','固原市','中卫市');
if (selectP=='32')
{ a=32;tempoption=new Option('新疆维吾尔自治区','32',false,true); }
else
{ tempoption=new Option('新疆维吾尔自治区','32'); }
eval('document.'+VeryHuo+'.'+preP+'.options[32]=tempoption;');
cityareacode[31]=new Array('3201','3202','3203','3204','3205','3206','3207','3208','3209','3210','3211','3212','3213','3214','3215','3216','3217','3218');
cityareaname[31]=new Array('乌鲁木齐市','克拉玛依市','吐鲁番地区','哈密地区','昌吉回族自治州','博尔塔拉蒙古自治州','巴音郭楞蒙古自治州','阿克苏地区','克孜勒苏柯尔克孜自治州','喀什地区','和田地区','伊犁哈萨克自治州','塔城地区','阿勒泰地区','石河子市','阿拉尔市','图木舒克市','五家渠市');
if (selectP=='33')
{ a=33;tempoption=new Option('香港特别行政区','33',false,true); }
else
{ tempoption=new Option('香港特别行政区','33'); }
eval('document.'+VeryHuo+'.'+preP+'.options[33]=tempoption;');
cityareacode[32]=new Array('3301','3302','3303');
cityareaname[32]=new Array('香港岛','九龙','新界');
if (selectP=='34')
{ a=34;tempoption=new Option('澳门特别行政区','34',false,true); }
else
{ tempoption=new Option('澳门特别行政区','34'); }
eval('document.'+VeryHuo+'.'+preP+'.options[34]=tempoption;');
cityareacode[33]=new Array('3401','3402','3403');
cityareaname[33]=new Array('澳门半岛','澳门离岛','无堂区划分区域');
if (selectP=='35')
{ a=35;tempoption=new Option('台湾','35',false,true); }
else
{ tempoption=new Option('台湾','35'); }
eval('document.'+VeryHuo+'.'+preP+'.options[35]=tempoption;');
cityareacode[34]=new Array('3501','3502','3503','3504','3505','3506','3507','3508','3509','3510','351','3512','3513','3514','3515','3516','3517','3518','3519','3520','3521','3522','3523');
cityareaname[34]=new Array('台北市','高雄市','基隆市','台中市','台南市','新竹市','嘉义市','台北县','宜兰县','新竹县','桃园县','苗栗县','台中县','彰化县','南投县','嘉义县','云林县','台南县','高雄县','屏东县','台东县','花莲县','澎湖县');
eval('document.'+VeryHuo+'.'+preP+'.options[a].selected=true;');
cityid=selectP;
if (cityid!='0')
{
b=0;for (i=0;i<cityareaname[cityid-1].length;i++)
{
if (selectC==cityareacode[cityid-1][i])
{b=i+1;tempoption=new Option(cityareaname[cityid-1][i],cityareacode[cityid-1][i],false,true);}
else
tempoption=new Option(cityareaname[cityid-1][i],cityareacode[cityid-1][i]);
eval('document.'+VeryHuo+'.'+preC+'.options[i+1]=tempoption;');
}
eval('document.'+VeryHuo+'.'+preC+'.options[b].selected=true;');
}
}
function selectcityarea(preP,preC,VeryHuo)
{
cityid=eval('document.'+VeryHuo+'.'+preP+'.selectedIndex;');
j=eval('document.'+VeryHuo+'.'+preC+'.length;');
for (i=1;i<j;i++)
{eval('document.'+VeryHuo+'.'+preC+'.options[j-i]=null;')}
if (cityid!="0")
{
for (i=0;i<cityareaname[cityid-1].length;i++)
{
tempoption=new Option(cityareaname[cityid-1][i],cityareacode[cityid-1][i]);
eval('document.'+VeryHuo+'.'+preC+'.options[i+1]=tempoption;');
}
}
}