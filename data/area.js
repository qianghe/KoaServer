const areas = [{
    "id": 4,
    "name": "北京",
    "children": [{
      "id": 1,
      "name": "北京",
      "price": 60
    }]
  }, {
    "id": 5,
    "name": "天津",
    "children": [{
      "id": 18,
      "name": "天津",
      "price": 40
    }]
  }, {
    "id": 14,
    "name": "上海",
    "children": [{
      "id": 2,
      "name": "上海",
      "price": 50
    }]
  }, {
    "id": 20,
    "name": "重庆",
    "children": [{
      "id": 37,
      "name": "重庆",
      "price": 60
    }]
  }, {
    "id": 1,
    "name": "辽宁",
    "children": [{
      "id": 147,
      "name": "大连",
      "price": 30
    }, {
      "id": 188,
      "name": "沈阳",
      "price": 30
    }, {
      "id": 523,
      "name": "鞍山",
      "price": 30
    }, {
      "id": 2038,
      "name": "辽阳",
      "price": 30
    }, {
      "id": 2041,
      "name": "盘锦",
      "price": 30
    }, {
      "id": 2354,
      "name": "锦州",
      "price": 30
    }, {
      "id": 3279,
      "name": "瓦房店",
      "price": 30
    }, {
      "id": 3306,
      "name": "庄河",
      "price": 30
    }, {
      "id": 3445,
      "name": "丹东",
      "price": 30
    }, {
      "id": 5722,
      "name": "抚顺",
      "price": 30
    }, {
      "id": 5845,
      "name": "本溪",
      "price": 30
    }, {
      "id": 5898,
      "name": "营口",
      "price": 30
    }, {
      "id": 6729,
      "name": "铁岭",
      "price": 30
    }, {
      "id": 10088,
      "name": "葫芦岛",
      "price": 30
    }, {
      "id": 10097,
      "name": "阜新",
      "price": 30
    }, {
      "id": 10106,
      "name": "朝阳",
      "price": 30
    }]
  }, {
    "id": 2,
    "name": "黑龙江",
    "children": [{
      "id": 202,
      "name": "哈尔滨",
      "price": 30
    }, {
      "id": 375,
      "name": "大庆",
      "price": 30
    }, {
      "id": 3489,
      "name": "牡丹江",
      "price": 30
    }, {
      "id": 5853,
      "name": "齐齐哈尔",
      "price": 30
    }, {
      "id": 6718,
      "name": "绥化",
      "price": 30
    }, {
      "id": 6776,
      "name": "佳木斯",
      "price": 30
    }, {
      "id": 7289,
      "name": "鸡西",
      "price": 30
    }, {
      "id": 9061,
      "name": "鹤岗",
      "price": 30
    }, {
      "id": 9773,
      "name": "伊春",
      "price": 30
    }, {
      "id": 9837,
      "name": "双鸭山",
      "price": 30
    }, {
      "id": 9848,
      "name": "七台河",
      "price": 30
    }, {
      "id": 9862,
      "name": "黑河",
      "price": 30
    }, {
      "id": 9878,
      "name": "大兴安岭",
      "price": 30
    }]
  }, {
    "id": 3,
    "name": "吉林",
    "children": [{
      "id": 319,
      "name": "长春",
      "price": 40
    }, {
      "id": 700,
      "name": "吉林",
      "price": 30
    }, {
      "id": 2315,
      "name": "松原",
      "price": 30
    }, {
      "id": 2501,
      "name": "辽源",
      "price": 30
    }, {
      "id": 3184,
      "name": "延边",
      "price": 30
    }, {
      "id": 5918,
      "name": "白城",
      "price": 30
    }, {
      "id": 10159,
      "name": "通化",
      "price": 30
    }, {
      "id": 10171,
      "name": "四平",
      "price": 30
    }, {
      "id": 10179,
      "name": "白山",
      "price": 30
    }, {
      "id": 10175,
      "name": "公主岭",
      "price": 30
    }]
  }, {
    "id": 6,
    "name": "河北",
    "children": [{
      "id": 241,
      "name": "石家庄",
      "price": 30
    }, {
      "id": 276,
      "name": "唐山",
      "price": 30
    }, {
      "id": 424,
      "name": "保定",
      "price": 30
    }, {
      "id": 572,
      "name": "邯郸",
      "price": 30
    }, {
      "id": 652,
      "name": "沧州",
      "price": 30
    }, {
      "id": 751,
      "name": "邢台",
      "price": 30
    }, {
      "id": 772,
      "name": "廊坊",
      "price": 30
    }, {
      "id": 993,
      "name": "衡水",
      "price": 30
    }, {
      "id": 1078,
      "name": "秦皇岛",
      "price": 30
    }, {
      "id": 3198,
      "name": "正定",
      "price": 30
    }, {
      "id": 3328,
      "name": "张家口",
      "price": 30
    }, {
      "id": 6760,
      "name": "承德",
      "price": 30
    }, {
      "id": 8398,
      "name": "定州",
      "price": 30
    }, {
      "id": 8706,
      "name": "馆陶",
      "price": 30
    }, {
      "id": 9048,
      "name": "赵县",
      "price": 30
    }, {
      "id": 11201,
      "name": "张北",
      "price": 30
    }, {
      "id": 428,
      "name": "涿州",
      "price": 30
    }, {
      "id": 577,
      "name": "武安",
      "price": 30
    }, {
      "id": 656,
      "name": "任丘",
      "price": 30
    }, {
      "id": 776,
      "name": "三河",
      "price": 30
    }, {
      "id": 12804,
      "name": "燕郊",
      "price": 30
    }, {
      "id": 26048,
      "name": "雄安新区",
      "price": 30
    }, {
      "id": 284,
      "name": "迁安",
      "price": 30
    }]
  }, {
    "id": 7,
    "name": "山西",
    "children": [{
      "id": 740,
      "name": "太原",
      "price": 30
    }, {
      "id": 3222,
      "name": "吕梁",
      "price": 30
    }, {
      "id": 3350,
      "name": "晋城",
      "price": 30
    }, {
      "id": 3453,
      "name": "忻州",
      "price": 30
    }, {
      "id": 5653,
      "name": "运城",
      "price": 30
    }, {
      "id": 5669,
      "name": "临汾",
      "price": 30
    }, {
      "id": 6921,
      "name": "长治",
      "price": 30
    }, {
      "id": 6964,
      "name": "大同",
      "price": 30
    }, {
      "id": 8760,
      "name": "阳泉",
      "price": 30
    }, {
      "id": 8854,
      "name": "晋中",
      "price": 30
    }, {
      "id": 9193,
      "name": "临猗",
      "price": 30
    }, {
      "id": 9871,
      "name": "朔州",
      "price": 30
    }, {
      "id": 10908,
      "name": "清徐",
      "price": 30
    }]
  }, {
    "id": 8,
    "name": "内蒙古",
    "children": [{
      "id": 801,
      "name": "包头",
      "price": 30
    }, {
      "id": 811,
      "name": "呼和浩特",
      "price": 30
    }, {
      "id": 2037,
      "name": "鄂尔多斯",
      "price": 30
    }, {
      "id": 2043,
      "name": "海拉尔",
      "price": 30
    }, {
      "id": 2404,
      "name": "乌海",
      "price": 30
    }, {
      "id": 2408,
      "name": "锡林郭勒",
      "price": 30
    }, {
      "id": 6700,
      "name": "赤峰",
      "price": 30
    }, {
      "id": 9976,
      "name": "兴安盟",
      "price": 30
    }, {
      "id": 9993,
      "name": "乌兰察布",
      "price": 30
    }, {
      "id": 10015,
      "name": "通辽",
      "price": 30
    }, {
      "id": 10039,
      "name": "呼伦贝尔",
      "price": 30
    }, {
      "id": 10070,
      "name": "巴彦淖尔市",
      "price": 30
    }, {
      "id": 10083,
      "name": "阿拉善盟",
      "price": 30
    }]
  }, {
    "id": 9,
    "name": "陕西",
    "children": [{
      "id": 483,
      "name": "西安",
      "price": 60
    }, {
      "id": 2044,
      "name": "宝鸡",
      "price": 30
    }, {
      "id": 3157,
      "name": "安康",
      "price": 30
    }, {
      "id": 3163,
      "name": "汉中",
      "price": 30
    }, {
      "id": 5733,
      "name": "渭南",
      "price": 30
    }, {
      "id": 5942,
      "name": "榆林",
      "price": 30
    }, {
      "id": 7453,
      "name": "咸阳",
      "price": 30
    }, {
      "id": 8973,
      "name": "延安",
      "price": 30
    }, {
      "id": 9832,
      "name": "铜川",
      "price": 30
    }, {
      "id": 9854,
      "name": "商洛",
      "price": 30
    }, {
      "id": 5944,
      "name": "神木",
      "price": 30
    }]
  }, {
    "id": 10,
    "name": "甘肃",
    "children": [{
      "id": 952,
      "name": "兰州",
      "price": 30
    }, {
      "id": 7112,
      "name": "临夏",
      "price": 30
    }, {
      "id": 7154,
      "name": "平凉",
      "price": 30
    }, {
      "id": 7428,
      "name": "金昌",
      "price": 30
    }, {
      "id": 8601,
      "name": "天水",
      "price": 30
    }, {
      "id": 10304,
      "name": "白银",
      "price": 30
    }, {
      "id": 10322,
      "name": "定西",
      "price": 30
    }, {
      "id": 10343,
      "name": "甘南",
      "price": 30
    }, {
      "id": 10362,
      "name": "嘉峪关",
      "price": 30
    }, {
      "id": 10387,
      "name": "酒泉",
      "price": 30
    }, {
      "id": 10415,
      "name": "陇南",
      "price": 30
    }, {
      "id": 10448,
      "name": "武威",
      "price": 30
    }, {
      "id": 10454,
      "name": "张掖",
      "price": 30
    }, {
      "id": 10475,
      "name": "庆阳",
      "price": 30
    }]
  }, {
    "id": 11,
    "name": "宁夏",
    "children": [{
      "id": 2054,
      "name": "银川",
      "price": 30
    }, {
      "id": 2421,
      "name": "固原",
      "price": 30
    }, {
      "id": 9951,
      "name": "中卫",
      "price": 30
    }, {
      "id": 9962,
      "name": "吴忠",
      "price": 30
    }, {
      "id": 9971,
      "name": "石嘴山",
      "price": 30
    }]
  }, {
    "id": 12,
    "name": "青海",
    "children": [{
      "id": 2052,
      "name": "西宁",
      "price": 30
    }, {
      "id": 9888,
      "name": "玉树",
      "price": 30
    }, {
      "id": 9896,
      "name": "黄南",
      "price": 30
    }, {
      "id": 9902,
      "name": "海西",
      "price": 30
    }, {
      "id": 9909,
      "name": "海东",
      "price": 30
    }, {
      "id": 9917,
      "name": "海北",
      "price": 30
    }, {
      "id": 9936,
      "name": "果洛",
      "price": 30
    }, {
      "id": 10574,
      "name": "海南",
      "price": 30
    }]
  }, {
    "id": 13,
    "name": "新疆",
    "children": [{
      "id": 984,
      "name": "乌鲁木齐",
      "price": 30
    }, {
      "id": 2042,
      "name": "克拉玛依",
      "price": 30
    }, {
      "id": 7452,
      "name": "哈密",
      "price": 30
    }, {
      "id": 8582,
      "name": "昌吉",
      "price": 30
    }, {
      "id": 9326,
      "name": "喀什",
      "price": 30
    }, {
      "id": 9472,
      "name": "伊犁",
      "price": 30
    }, {
      "id": 9475,
      "name": "吐鲁番",
      "price": 30
    }, {
      "id": 9489,
      "name": "和田",
      "price": 30
    }, {
      "id": 9499,
      "name": "阿克苏",
      "price": 30
    }, {
      "id": 9519,
      "name": "克孜勒苏",
      "price": 30
    }, {
      "id": 9529,
      "name": "博尔塔拉",
      "price": 30
    }, {
      "id": 9530,
      "name": "巴音郭楞",
      "price": 30
    }, {
      "id": 9539,
      "name": "阿拉尔",
      "price": 30
    }, {
      "id": 9551,
      "name": "石河子",
      "price": 30
    }, {
      "id": 9559,
      "name": "图木舒克",
      "price": 30
    }, {
      "id": 9562,
      "name": "五家渠",
      "price": 30
    }]
  }, {
    "id": 15,
    "name": "山东",
    "children": [{
      "id": 122,
      "name": "青岛",
      "price": 40
    }, {
      "id": 228,
      "name": "烟台",
      "price": 30
    }, {
      "id": 265,
      "name": "济南",
      "price": 50
    }, {
      "id": 362,
      "name": "潍坊",
      "price": 30
    }, {
      "id": 385,
      "name": "淄博",
      "price": 30
    }, {
      "id": 450,
      "name": "济宁",
      "price": 30
    }, {
      "id": 505,
      "name": "临沂",
      "price": 40
    }, {
      "id": 518,
      "name": "威海",
      "price": 30
    }, {
      "id": 623,
      "name": "东营",
      "price": 30
    }, {
      "id": 686,
      "name": "泰安",
      "price": 30
    }, {
      "id": 728,
      "name": "德州",
      "price": 30
    }, {
      "id": 882,
      "name": "聊城",
      "price": 30
    }, {
      "id": 944,
      "name": "滨州",
      "price": 30
    }, {
      "id": 961,
      "name": "枣庄",
      "price": 30
    }, {
      "id": 2292,
      "name": "莱芜",
      "price": 30
    }, {
      "id": 3177,
      "name": "日照",
      "price": 30
    }, {
      "id": 5632,
      "name": "菏泽",
      "price": 30
    }, {
      "id": 8680,
      "name": "章丘",
      "price": 30
    }, {
      "id": 9146,
      "name": "诸城",
      "price": 30
    }, {
      "id": 11313,
      "name": "垦利",
      "price": 30
    }, {
      "id": 233,
      "name": "龙口",
      "price": 30
    }, {
      "id": 235,
      "name": "莱州",
      "price": 30
    }, {
      "id": 237,
      "name": "蓬莱",
      "price": 30
    }, {
      "id": 367,
      "name": "青州",
      "price": 30
    }, {
      "id": 369,
      "name": "寿光",
      "price": 30
    }, {
      "id": 371,
      "name": "高密",
      "price": 30
    }, {
      "id": 455,
      "name": "邹城",
      "price": 30
    }, {
      "id": 520,
      "name": "乳山",
      "price": 30
    }, {
      "id": 522,
      "name": "荣成",
      "price": 30
    }, {
      "id": 627,
      "name": "广饶",
      "price": 30
    }, {
      "id": 689,
      "name": "新泰",
      "price": 30
    }, {
      "id": 690,
      "name": "肥城",
      "price": 30
    }, {
      "id": 946,
      "name": "邹平",
      "price": 30
    }, {
      "id": 967,
      "name": "滕州",
      "price": 30
    }, {
      "id": 3180,
      "name": "莒县",
      "price": 30
    }, {
      "id": 3325,
      "name": "招远",
      "price": 30
    }, {
      "id": 5636,
      "name": "单县",
      "price": 30
    }, {
      "id": 5638,
      "name": "曹县",
      "price": 30
    }, {
      "id": 7335,
      "name": "桓台",
      "price": 30
    }]
  }, {
    "id": 16,
    "name": "江苏",
    "children": [{
      "id": 5,
      "name": "苏州",
      "price": 40
    }, {
      "id": 93,
      "name": "无锡",
      "price": 40
    }, {
      "id": 172,
      "name": "南京",
      "price": 40
    }, {
      "id": 394,
      "name": "南通",
      "price": 30
    }, {
      "id": 463,
      "name": "常州",
      "price": 40
    }, {
      "id": 471,
      "name": "徐州",
      "price": 30
    }, {
      "id": 613,
      "name": "盐城",
      "price": 30
    }, {
      "id": 637,
      "name": "扬州",
      "price": 30
    }, {
      "id": 645,
      "name": "镇江",
      "price": 30
    }, {
      "id": 693,
      "name": "泰州",
      "price": 30
    }, {
      "id": 968,
      "name": "淮安",
      "price": 30
    }, {
      "id": 2049,
      "name": "连云港",
      "price": 30
    }, {
      "id": 2350,
      "name": "宿迁",
      "price": 30
    }, {
      "id": 5772,
      "name": "沭阳",
      "price": 30
    }, {
      "id": 11279,
      "name": "大丰",
      "price": 30
    }, {
      "id": 16,
      "name": "昆山",
      "price": 40
    }, {
      "id": 397,
      "name": "如皋",
      "price": 30
    }, {
      "id": 399,
      "name": "海门",
      "price": 30
    }, {
      "id": 400,
      "name": "启东",
      "price": 30
    }, {
      "id": 401,
      "name": "海安",
      "price": 30
    }, {
      "id": 402,
      "name": "如东",
      "price": 30
    }, {
      "id": 468,
      "name": "金坛",
      "price": 30
    }, {
      "id": 469,
      "name": "溧阳",
      "price": 30
    }, {
      "id": 477,
      "name": "邳州",
      "price": 30
    }, {
      "id": 478,
      "name": "新沂",
      "price": 30
    }, {
      "id": 615,
      "name": "东台",
      "price": 30
    }, {
      "id": 618,
      "name": "建湖",
      "price": 30
    }, {
      "id": 648,
      "name": "丹阳",
      "price": 30
    }, {
      "id": 649,
      "name": "扬中",
      "price": 30
    }, {
      "id": 696,
      "name": "泰兴",
      "price": 30
    }, {
      "id": 697,
      "name": "姜堰",
      "price": 30
    }, {
      "id": 698,
      "name": "靖江",
      "price": 30
    }, {
      "id": 699,
      "name": "兴化",
      "price": 30
    }, {
      "id": 2147,
      "name": "东海",
      "price": 30
    }, {
      "id": 2148,
      "name": "灌云",
      "price": 30
    }, {
      "id": 2150,
      "name": "灌南",
      "price": 30
    }, {
      "id": 5958,
      "name": "泗洪",
      "price": 30
    }, {
      "id": 5959,
      "name": "泗阳",
      "price": 30
    }, {
      "id": 11349,
      "name": "沛县",
      "price": 30
    }, {
      "id": 14486,
      "name": "宝应县",
      "price": 30
    }]
  }, {
    "id": 17,
    "name": "浙江",
    "children": [{
      "id": 79,
      "name": "杭州",
      "price": 50
    }, {
      "id": 135,
      "name": "宁波",
      "price": 40
    }, {
      "id": 330,
      "name": "温州",
      "price": 50
    }, {
      "id": 355,
      "name": "绍兴",
      "price": 40
    }, {
      "id": 403,
      "name": "台州",
      "price": 30
    }, {
      "id": 497,
      "name": "嘉兴",
      "price": 40
    }, {
      "id": 531,
      "name": "金华",
      "price": 30
    }, {
      "id": 831,
      "name": "湖州",
      "price": 30
    }, {
      "id": 6793,
      "name": "衢州",
      "price": 30
    }, {
      "id": 7921,
      "name": "丽水",
      "price": 30
    }, {
      "id": 8481,
      "name": "舟山",
      "price": 30
    }, {
      "id": 12291,
      "name": "义乌",
      "price": 40
    }, {
      "id": 13950,
      "name": "乐清",
      "price": 30
    }, {
      "id": 13951,
      "name": "瑞安",
      "price": 30
    }, {
      "id": 5333,
      "name": "余姚",
      "price": 30
    }, {
      "id": 357,
      "name": "诸暨",
      "price": 30
    }, {
      "id": 407,
      "name": "临海",
      "price": 30
    }, {
      "id": 408,
      "name": "温岭",
      "price": 30
    }, {
      "id": 409,
      "name": "玉环",
      "price": 30
    }, {
      "id": 500,
      "name": "海宁",
      "price": 30
    }, {
      "id": 502,
      "name": "桐乡",
      "price": 30
    }, {
      "id": 536,
      "name": "东阳",
      "price": 30
    }, {
      "id": 537,
      "name": "永康",
      "price": 30
    }, {
      "id": 834,
      "name": "长兴",
      "price": 30
    }, {
      "id": 835,
      "name": "德清",
      "price": 30
    }, {
      "id": 836,
      "name": "安吉",
      "price": 30
    }, {
      "id": 5334,
      "name": "慈溪",
      "price": 30
    }, {
      "id": 6738,
      "name": "象山",
      "price": 30
    }, {
      "id": 7576,
      "name": "苍南",
      "price": 30
    }, {
      "id": 14357,
      "name": "嘉善",
      "price": 30
    }]
  }, {
    "id": 18,
    "name": "安徽",
    "children": [{
      "id": 837,
      "name": "合肥",
      "price": 80
    }, {
      "id": 2039,
      "name": "马鞍山",
      "price": 30
    }, {
      "id": 2045,
      "name": "芜湖",
      "price": 30
    }, {
      "id": 2319,
      "name": "淮南",
      "price": 30
    }, {
      "id": 2323,
      "name": "黄山",
      "price": 30
    }, {
      "id": 2325,
      "name": "阜阳",
      "price": 30
    }, {
      "id": 2328,
      "name": "六安",
      "price": 30
    }, {
      "id": 2329,
      "name": "亳州",
      "price": 30
    }, {
      "id": 3251,
      "name": "安庆",
      "price": 30
    }, {
      "id": 3359,
      "name": "宿州",
      "price": 30
    }, {
      "id": 3470,
      "name": "蚌埠",
      "price": 30
    }, {
      "id": 5633,
      "name": "宣城",
      "price": 30
    }, {
      "id": 9357,
      "name": "淮北",
      "price": 30
    }, {
      "id": 10229,
      "name": "巢湖",
      "price": 30
    }, {
      "id": 10260,
      "name": "池州",
      "price": 30
    }, {
      "id": 10266,
      "name": "滁州",
      "price": 30
    }, {
      "id": 10285,
      "name": "铜陵",
      "price": 30
    }, {
      "id": 10892,
      "name": "和县",
      "price": 30
    }, {
      "id": 11226,
      "name": "霍邱",
      "price": 30
    }, {
      "id": 11296,
      "name": "桐城",
      "price": 30
    }, {
      "id": 5645,
      "name": "宁国",
      "price": 30
    }, {
      "id": 10273,
      "name": "天长",
      "price": 30
    }]
  }, {
    "id": 19,
    "name": "江西",
    "children": [{
      "id": 669,
      "name": "南昌",
      "price": 30
    }, {
      "id": 2247,
      "name": "九江",
      "price": 30
    }, {
      "id": 2248,
      "name": "萍乡",
      "price": 30
    }, {
      "id": 2360,
      "name": "景德镇",
      "price": 30
    }, {
      "id": 2363,
      "name": "赣州",
      "price": 30
    }, {
      "id": 2364,
      "name": "吉安",
      "price": 30
    }, {
      "id": 3209,
      "name": "鹰潭",
      "price": 30
    }, {
      "id": 5709,
      "name": "宜春",
      "price": 30
    }, {
      "id": 10115,
      "name": "新余",
      "price": 30
    }, {
      "id": 10120,
      "name": "上饶",
      "price": 30
    }, {
      "id": 10134,
      "name": "抚州",
      "price": 30
    }, {
      "id": 11077,
      "name": "永新",
      "price": 30
    }, {
      "id": 9070,
      "name": "乐平",
      "price": 30
    }]
  }, {
    "id": 21,
    "name": "四川",
    "children": [{
      "id": 102,
      "name": "成都",
      "price": 60
    }, {
      "id": 1057,
      "name": "绵阳",
      "price": 40
    }, {
      "id": 2371,
      "name": "攀枝花",
      "price": 30
    }, {
      "id": 2372,
      "name": "泸州",
      "price": 30
    }, {
      "id": 2373,
      "name": "德阳",
      "price": 40
    }, {
      "id": 2378,
      "name": "南充",
      "price": 30
    }, {
      "id": 2380,
      "name": "宜宾",
      "price": 30
    }, {
      "id": 2381,
      "name": "广安",
      "price": 30
    }, {
      "id": 3237,
      "name": "乐山",
      "price": 30
    }, {
      "id": 5928,
      "name": "内江",
      "price": 30
    }, {
      "id": 6745,
      "name": "自贡",
      "price": 30
    }, {
      "id": 6803,
      "name": "资阳",
      "price": 30
    }, {
      "id": 9687,
      "name": "雅安",
      "price": 30
    }, {
      "id": 9688,
      "name": "遂宁",
      "price": 30
    }, {
      "id": 9704,
      "name": "眉山",
      "price": 40
    }, {
      "id": 9717,
      "name": "凉山",
      "price": 30
    }, {
      "id": 9749,
      "name": "广元",
      "price": 30
    }, {
      "id": 9764,
      "name": "甘孜",
      "price": 30
    }, {
      "id": 9799,
      "name": "达州",
      "price": 30
    }, {
      "id": 9811,
      "name": "巴中",
      "price": 30
    }, {
      "id": 9817,
      "name": "阿坝",
      "price": 30
    }, {
      "id": 6805,
      "name": "简阳",
      "price": 40
    }, {
      "id": 6806,
      "name": "安岳",
      "price": 40
    }, {
      "id": 8735,
      "name": "广汉",
      "price": 40
    }, {
      "id": 9706,
      "name": "仁寿",
      "price": 40
    }]
  }, {
    "id": 22,
    "name": "云南",
    "children": [{
      "id": 541,
      "name": "昆明",
      "price": 30
    }, {
      "id": 2040,
      "name": "玉溪",
      "price": 30
    }, {
      "id": 2389,
      "name": "曲靖",
      "price": 30
    }, {
      "id": 2390,
      "name": "保山",
      "price": 30
    }, {
      "id": 2392,
      "name": "丽江",
      "price": 30
    }, {
      "id": 2393,
      "name": "楚雄",
      "price": 30
    }, {
      "id": 2394,
      "name": "红河",
      "price": 30
    }, {
      "id": 2395,
      "name": "文山",
      "price": 30
    }, {
      "id": 2397,
      "name": "西双版纳",
      "price": 30
    }, {
      "id": 2398,
      "name": "大理",
      "price": 30
    }, {
      "id": 9409,
      "name": "昭通",
      "price": 30
    }, {
      "id": 9422,
      "name": "临沧",
      "price": 30
    }, {
      "id": 9432,
      "name": "迪庆",
      "price": 30
    }, {
      "id": 9437,
      "name": "德宏",
      "price": 30
    }, {
      "id": 9444,
      "name": "普洱",
      "price": 30
    }, {
      "id": 9462,
      "name": "怒江",
      "price": 30
    }]
  }, {
    "id": 23,
    "name": "贵州",
    "children": [{
      "id": 2015,
      "name": "贵阳",
      "price": 50
    }, {
      "id": 7468,
      "name": "安顺",
      "price": 30
    }, {
      "id": 7620,
      "name": "遵义",
      "price": 30
    }, {
      "id": 9363,
      "name": "黔东南",
      "price": 30
    }, {
      "id": 10417,
      "name": "铜仁",
      "price": 30
    }, {
      "id": 10434,
      "name": "黔西南",
      "price": 30
    }, {
      "id": 10492,
      "name": "黔南",
      "price": 30
    }, {
      "id": 10506,
      "name": "六盘水",
      "price": 30
    }, {
      "id": 10564,
      "name": "毕节",
      "price": 30
    }, {
      "id": 7624,
      "name": "仁怀",
      "price": 30
    }]
  }, {
    "id": 24,
    "name": "西藏",
    "children": [{
      "id": 2055,
      "name": "拉萨",
      "price": 30
    }, {
      "id": 9576,
      "name": "山南",
      "price": 30
    }, {
      "id": 9615,
      "name": "日喀则",
      "price": 30
    }, {
      "id": 9618,
      "name": "那曲",
      "price": 30
    }, {
      "id": 9646,
      "name": "林芝",
      "price": 30
    }, {
      "id": 9648,
      "name": "昌都",
      "price": 30
    }, {
      "id": 9678,
      "name": "阿里",
      "price": 30
    }, {
      "id": 9684,
      "name": "改则",
      "price": 30
    }]
  }, {
    "id": 25,
    "name": "河南",
    "children": [{
      "id": 342,
      "name": "郑州",
      "price": 40
    }, {
      "id": 556,
      "name": "洛阳",
      "price": 30
    }, {
      "id": 592,
      "name": "南阳",
      "price": 30
    }, {
      "id": 933,
      "name": "周口",
      "price": 30
    }, {
      "id": 977,
      "name": "许昌",
      "price": 30
    }, {
      "id": 979,
      "name": "禹州",
      "price": 30
    }, {
      "id": 1005,
      "name": "平顶山",
      "price": 30
    }, {
      "id": 1016,
      "name": "新乡",
      "price": 30
    }, {
      "id": 1029,
      "name": "商丘",
      "price": 30
    }, {
      "id": 1067,
      "name": "驻马店",
      "price": 30
    }, {
      "id": 1096,
      "name": "安阳",
      "price": 30
    }, {
      "id": 2342,
      "name": "开封",
      "price": 30
    }, {
      "id": 2344,
      "name": "鹤壁",
      "price": 30
    }, {
      "id": 2346,
      "name": "濮阳",
      "price": 30
    }, {
      "id": 2347,
      "name": "漯河",
      "price": 30
    }, {
      "id": 3266,
      "name": "焦作",
      "price": 30
    }, {
      "id": 8541,
      "name": "明港",
      "price": 30
    }, {
      "id": 8694,
      "name": "信阳",
      "price": 30
    }, {
      "id": 9123,
      "name": "鄢陵",
      "price": 30
    }, {
      "id": 9317,
      "name": "三门峡",
      "price": 30
    }, {
      "id": 9344,
      "name": "长葛",
      "price": 30
    }, {
      "id": 9918,
      "name": "济源",
      "price": 30
    }, {
      "id": 935,
      "name": "项城",
      "price": 30
    }, {
      "id": 1010,
      "name": "汝州",
      "price": 30
    }, {
      "id": 5936,
      "name": "长垣",
      "price": 30
    }, {
      "id": 7389,
      "name": "杞县",
      "price": 30
    }, {
      "id": 9321,
      "name": "灵宝",
      "price": 30
    }, {
      "id": 7121,
      "name": "偃师",
      "price": 30
    }]
  }, {
    "id": 26,
    "name": "湖北",
    "children": [{
      "id": 158,
      "name": "武汉",
      "price": 30
    }, {
      "id": 858,
      "name": "宜昌",
      "price": 30
    }, {
      "id": 891,
      "name": "襄阳",
      "price": 30
    }, {
      "id": 1734,
      "name": "黄石",
      "price": 30
    }, {
      "id": 2032,
      "name": "十堰",
      "price": 30
    }, {
      "id": 2296,
      "name": "荆门",
      "price": 30
    }, {
      "id": 2299,
      "name": "黄冈",
      "price": 30
    }, {
      "id": 2302,
      "name": "恩施",
      "price": 30
    }, {
      "id": 3434,
      "name": "孝感",
      "price": 30
    }, {
      "id": 3479,
      "name": "荆州",
      "price": 30
    }, {
      "id": 9517,
      "name": "天门",
      "price": 30
    }, {
      "id": 9605,
      "name": "神农架",
      "price": 30
    }, {
      "id": 9617,
      "name": "咸宁",
      "price": 30
    }, {
      "id": 9656,
      "name": "随州",
      "price": 30
    }, {
      "id": 9669,
      "name": "潜江",
      "price": 30
    }, {
      "id": 9709,
      "name": "鄂州",
      "price": 30
    }, {
      "id": 9736,
      "name": "仙桃",
      "price": 30
    }, {
      "id": 864,
      "name": "宜都",
      "price": 30
    }, {
      "id": 896,
      "name": "枣阳",
      "price": 30
    }, {
      "id": 3439,
      "name": "汉川",
      "price": 30
    }]
  }, {
    "id": 27,
    "name": "湖南",
    "children": [{
      "id": 414,
      "name": "长沙",
      "price": 50
    }, {
      "id": 821,
      "name": "岳阳",
      "price": 30
    }, {
      "id": 872,
      "name": "常德",
      "price": 30
    }, {
      "id": 914,
      "name": "衡阳",
      "price": 30
    }, {
      "id": 1086,
      "name": "株洲",
      "price": 30
    }, {
      "id": 2047,
      "name": "湘潭",
      "price": 30
    }, {
      "id": 2303,
      "name": "邵阳",
      "price": 30
    }, {
      "id": 2307,
      "name": "永州",
      "price": 30
    }, {
      "id": 5695,
      "name": "郴州",
      "price": 30
    }, {
      "id": 5756,
      "name": "怀化",
      "price": 30
    }, {
      "id": 6788,
      "name": "张家界",
      "price": 30
    }, {
      "id": 9481,
      "name": "娄底",
      "price": 30
    }, {
      "id": 10198,
      "name": "益阳",
      "price": 30
    }, {
      "id": 10219,
      "name": "湘西",
      "price": 30
    }, {
      "id": 1091,
      "name": "醴陵",
      "price": 30
    }]
  }, {
    "id": 28,
    "name": "福建",
    "children": [{
      "id": 291,
      "name": "泉州",
      "price": 30
    }, {
      "id": 304,
      "name": "福州",
      "price": 40
    }, {
      "id": 606,
      "name": "厦门",
      "price": 30
    }, {
      "id": 710,
      "name": "漳州",
      "price": 30
    }, {
      "id": 2048,
      "name": "三明",
      "price": 30
    }, {
      "id": 2429,
      "name": "莆田",
      "price": 30
    }, {
      "id": 6752,
      "name": "龙岩",
      "price": 30
    }, {
      "id": 7951,
      "name": "宁德",
      "price": 30
    }, {
      "id": 10291,
      "name": "南平",
      "price": 30
    }, {
      "id": 10761,
      "name": "武夷山",
      "price": 30
    }, {
      "id": 293,
      "name": "南安",
      "price": 30
    }, {
      "id": 296,
      "name": "石狮",
      "price": 30
    }, {
      "id": 297,
      "name": "晋江",
      "price": 30
    }, {
      "id": 713,
      "name": "龙海",
      "price": 30
    }]
  }, {
    "id": 29,
    "name": "广东",
    "children": [{
      "id": 3,
      "name": "广州",
      "price": 50
    }, {
      "id": 4,
      "name": "深圳",
      "price": 50
    }, {
      "id": 222,
      "name": "佛山",
      "price": 50
    }, {
      "id": 413,
      "name": "东莞",
      "price": 60
    }, {
      "id": 629,
      "name": "江门",
      "price": 30
    }, {
      "id": 679,
      "name": "茂名",
      "price": 30
    }, {
      "id": 722,
      "name": "惠州",
      "price": 30
    }, {
      "id": 771,
      "name": "中山",
      "price": 30
    }, {
      "id": 783,
      "name": "汕头",
      "price": 50
    }, {
      "id": 791,
      "name": "湛江",
      "price": 30
    }, {
      "id": 901,
      "name": "肇庆",
      "price": 30
    }, {
      "id": 910,
      "name": "珠海",
      "price": 30
    }, {
      "id": 927,
      "name": "揭阳",
      "price": 30
    }, {
      "id": 2192,
      "name": "韶关",
      "price": 30
    }, {
      "id": 2284,
      "name": "阳江",
      "price": 30
    }, {
      "id": 7303,
      "name": "清远",
      "price": 30
    }, {
      "id": 8566,
      "name": "阳春",
      "price": 30
    }, {
      "id": 8716,
      "name": "顺德",
      "price": 30
    }, {
      "id": 9389,
      "name": "梅州",
      "price": 30
    }, {
      "id": 9449,
      "name": "汕尾",
      "price": 30
    }, {
      "id": 10461,
      "name": "潮州",
      "price": 30
    }, {
      "id": 10467,
      "name": "河源",
      "price": 30
    }, {
      "id": 10485,
      "name": "云浮",
      "price": 30
    }, {
      "id": 11263,
      "name": "台山",
      "price": 30
    }, {
      "id": 725,
      "name": "惠东",
      "price": 30
    }, {
      "id": 726,
      "name": "博罗",
      "price": 30
    }, {
      "id": 9459,
      "name": "海丰",
      "price": 30
    }]
  }, {
    "id": 30,
    "name": "广西",
    "children": [{
      "id": 845,
      "name": "南宁",
      "price": 30
    }, {
      "id": 1039,
      "name": "桂林",
      "price": 40
    }, {
      "id": 2046,
      "name": "梧州",
      "price": 30
    }, {
      "id": 2335,
      "name": "钦州",
      "price": 30
    }, {
      "id": 2337,
      "name": "玉林",
      "price": 30
    }, {
      "id": 2340,
      "name": "河池",
      "price": 30
    }, {
      "id": 6770,
      "name": "贵港",
      "price": 30
    }, {
      "id": 7133,
      "name": "柳州",
      "price": 30
    }, {
      "id": 10513,
      "name": "百色",
      "price": 30
    }, {
      "id": 10524,
      "name": "崇左",
      "price": 30
    }, {
      "id": 10536,
      "name": "北海",
      "price": 30
    }, {
      "id": 10539,
      "name": "防城港",
      "price": 30
    }, {
      "id": 10549,
      "name": "贺州",
      "price": 30
    }, {
      "id": 10552,
      "name": "来宾",
      "price": 30
    }]
  }, {
    "id": 31,
    "name": "海南",
    "children": [{
      "id": 2053,
      "name": "海口",
      "price": 30
    }, {
      "id": 2422,
      "name": "三亚",
      "price": 30
    }, {
      "id": 9952,
      "name": "五指山",
      "price": 30
    }, {
      "id": 13722,
      "name": "三沙",
      "price": 30
    }, {
      "id": 9984,
      "name": "文昌",
      "price": 30
    }, {
      "id": 10022,
      "name": "万宁",
      "price": 30
    }, {
      "id": 10044,
      "name": "屯昌",
      "price": 30
    }, {
      "id": 10064,
      "name": "琼中",
      "price": 30
    }, {
      "id": 10136,
      "name": "琼海",
      "price": 30
    }, {
      "id": 10184,
      "name": "陵水",
      "price": 30
    }, {
      "id": 10250,
      "name": "东方",
      "price": 30
    }, {
      "id": 10303,
      "name": "定安",
      "price": 30
    }, {
      "id": 10331,
      "name": "澄迈",
      "price": 30
    }, {
      "id": 10367,
      "name": "保亭",
      "price": 30
    }, {
      "id": 10380,
      "name": "白沙",
      "price": 30
    }, {
      "id": 10394,
      "name": "儋州",
      "price": 30
    }]
  }, {
    "id": 32,
    "name": "香港",
    "children": [{
      "id": 2050,
      "name": "香港",
      "price": 30
    }]
  }, {
    "id": 33,
    "name": "台湾",
    "children": [{
      "id": 2051,
      "name": "台湾",
      "price": 30
    }]
  }, {
    "id": 34,
    "name": "澳门",
    "children": [{
      "id": 9399,
      "name": "澳门",
      "price": 30
    }]
  }]

  export default areas;
