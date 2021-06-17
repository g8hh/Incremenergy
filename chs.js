/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    'Info': '信息',
    'levels to the first 3 Energy Upgrades.': '升级到前 3 次能源升级。',
    'Main': '首页',
    'Mega-Energy': '巨型能源',
    'Options': '选项',
    'Super': '超级',
    'Super Drives': '超级驱动器',
    'Super-Energy': '超级能源',
    'Superchargers': '超级充电器',
    'weaker, and adds': '较弱，并增加',
    'Self-Charging Batteries': '自充电电池',
    ', which adds': '，增加',
    ', which makes Energy Overflow': '，这就产生了能源溢出',
    '\t\tYou have': '\t\t你有',
    '\t\t\tYou have split': '\t\t\你分裂了',
    '\t\t\t\tYour best Energy exponent in an Unfortunate run is': '\t\t\t\t你在不幸运行中的最佳能源指数是',
    '\t\t\t\tYou have': '\t\t\t\t你有',
    'Archaic Processors': '古老的处理器',
    'atoms, which adds': '原子，这增加了',
    'Chargers': '充电器',
    'Currently': '当前',
    'Energy': '能源',
    'Reset Hyper Upgrades': '重置究极升级',
    'Sacrifice all previous progress to build a Mega Factory.': '牺牲之前的所有进度来建造超级工厂。',
    'and reduce the Mega Energy effect softcap\'s power by': '并通过以下方式降低 巨型能源 效果 软上限 的功率',
    'to all previous Energy exponents.': '到所有以前的能源指数。',
    'to the Energy & Super-Energy exponents.': '到能源和超级能源指数。',
    'to the Fortune Energy exponent.': '到财富能源指数。',
    'to the Hyper-Energy exponent.': '到究极能源指数。',
    'Hyper-Energy': '究极能源',
    'Fortune Energy': '财富能源',
    'Galvanic Compressors': '电流压缩机',
    'Gifts, which multiply the Fortune Energy exponent by': '礼物，将财富能源指数乘以',
    'Supercharge your Energy to gain {{formatWhole(tmp.sup.gain)}} base Super-Energy, and to increase the Super-Energy exponent by {{format(tmp.sup.expInc)}}.': '增压你的能源以获得 {{formatWhole(tmp.sup.gain)}} 基础超级能源，并将超级能源指数增加 {{format(tmp.sup.expInc)}}。',
    'You have supercharged your Energy {{formatWhole(player.sup.times)}} times.': '你已经将你的能源增压 {{formatWhole(player.sup.times)}} 次。',
    'WARNING: Each Hyper Upgrade level decreases the Hyper-Energy exponent by {{format(tmp.hyper.upgDecExp)}}. (Currently: -{{format(tmp.hyper.totalUpgs.times(tmp.hyper.upgDecExp))}}': '警告：每个究极升级级别都会将巨型能源指数降低 {{format(tmp.hyper.upgDecExp)}}。 （目前：-{{format(tmp.hyper.totalUpgs.times(tmp.hyper.upgDecExp))}}',
    '\t\t\tYou have': '\t\t\t你有',
    'Due to Energy Overflow, your Energy is being divided by {{format(tmp.en.divPerSec)}} every second.': '由于能源溢出，你的能源每秒除以 {{format(tmp.en.divPerSec)}}。',
    '{{formatWhole(tmp.skills[x].xpGain)}} XP (next at {{format(nextXP(x))}} {{skill_data[x].basedOn}}': '{{formatWhole(tmp.skills[x].xpGain)}} 经验 (下一个在 {{format(nextXP(x))}} {{skill_data[x].basedOn}}',
    '\t\t\tThe Energy mechanic works like this: You generate 1 Base Energy/sec, then it\'s raised to the power of the exponent shown.': '\t\t\t能源机制的工作原理是这样的：你每秒产生 1 基础能源，然后增加到所示指数的幂。',
    'Mega': '巨型',
    'Holy Destroyers': '神圣毁灭者',
    'Positive Karma = Higher chance of getting more Gifts. Negative Karma = Higher chance of getting less Gifts.': '正业力 = 获得更多礼物的机会更高。 负业力 = 获得更少礼物的机会更高。',
    'Put all your Energies into the Hypertube to split {{formatWhole(tmp.hyper.gain)}} atoms.': '将你所有的能源放入究极管以分裂 {{formatWhole(tmp.hyper.gain)}} 原子。',
    'Req: {{formatWhole(fortune_req)}} Fortune Energy.': '要求: {{formatWhole(fortune_req)}} 财富能源.',
    'True Souls': '真正的灵魂',
    'Voltaic Conductors': '光伏导线',
    'Auto': '自动',
    'You have put all your energies into the Hypertube {{formatWhole(player.hyper.times)}} times.': '你已经把所有的能源都投入到究极管 {{formatWhole(player.hyper.times)}} 次。',
    'Automated Archaic Processors': '自动化古老处理器',
    'Automated Chargers': '自动化充电器',
    'Automated Galvanic Compressors': '自动化电流压缩机',
    'Automated Heroic Stones': '自动化英雄石',
    'Automated Holy Destroyers': '自动化神圣毁灭者',
    'Automated Mega Organic Tellers': '自动化巨型有机柜员机',
    'Automated Mega Trophies': '自动化巨型奖杯',
    'Automated Organic Tellers': '自动化有机柜员',
    'Automated Power Plants': '自动化发电厂',
    'Automated Prestige Cities': '自动化声望城市',
    'Automated Self-Charging Batteries': '自动化自充电电池',
    'Automated Super Drives': '自动化超级驱动器',
    'Automated Super-Energy exponent gain': '自动化超级能源指数增益',
    'Automated Superchargers': '自动化增压器',
    'Automated True Souls': '自动化真灵魂',
    'Automated Voltaic Conductors': '自动化光伏导线',
    'Organic Tellers': '有机柜员',
    'Power Plants': '发电厂',
    'Prestige Cities': '声望城市',
    'Prestigeless Power': '无声望力量',
    'Prestige Cities boost themselves.': '声望城市自我提升。',
    'Purged Heroes': '清除英雄',
    'Self-Charging Batteries & Holy Destroyers are boosted by your Mega-Energy.': '自充电电池和神圣毁灭者由您的巨型能源增强。',
    'Skill Levels require less XP based on your Energy exponent.': '根据您的能源指数，技能等级需要更少的 经验。',
    'Skill Plus': '技能+',
    'Skill XP adds to the Energy, Super-Energy, & Mega-Energy exponents.': '技能 经验 添加到能源、超级能源和巨型能源指数中。',
    'Skills': '技能',
    'The first two Skills gain more XP based on your Mega Factories.': '前两个技能根据您的超级工厂获得更多 经验。',
    'Anti-Slowdown Measures': '防减速措施',
    'Antitrust Energy': '反垄断能源',
    'Buy max Energy Upgrades, and add 0.5 to Mega-Energy exponent for each Mega Upgrade.': '购买最大能源升级，并为每个超级升级增加 0.5 到超级能源指数。',
    'Dirt Regime': '污垢制度',
    'Energy Overflow starts 1e10x later for every Energy Upgrade level.': '能源溢出在每一次能源升级的1e10倍之后开始。',
    'Excess Explosion': '过度爆炸',
    'False Denial': '虚假否认',
    'Experienced Ancient': '经验老者',
    'Haven of Gods': '神的天堂',
    'Increase the Mega Energy exponent by 0.02 for every Super Upgrade level.': '超级升级每升一级，巨型能源指数增加 0.02。',
    'Mega Evolution': '巨型进化',
    'Mega Factories add to the first 6 Super Upgrade effects.': '巨型工厂添加到前 6 个超级升级效果。',
    'Mega Factories boost the base Super-Energy exponent.': '巨型工厂提升基础超级能源指数。',
    'Heroic Stones': '英雄石',
    'Mega Organic Tellers': '巨型有机柜员',
    'Mega Trophies': '巨型奖杯',
    'Automated Mega Upgrades': '自动化巨型升级',
    'Automated Skill XP Gain': '自动化技能 经验 获得',
    'Automated Skilled Ninja': '自动化熟练忍者',
    'Automated Subatomic Generators': '自动亚原子发生器',
    'Fortune': '财富',
    'Hyper': '究极',
    'Automated Hyper Plants': '自动化究极工厂',
    'Automated Mega Factories': '自动化巨型工厂',
    'Hypercharged': '究极充电',
    'Maintained Power': '维持电力',
    'Manufactured Tellers': '人造柜员',
    'Mega Drives': '巨型驱动器',
    'Swordsmith\'s Dream': '铸剑师的梦想',
    'The Atomic Present': '原子存在',
    'The first Skill\'s effect also affects the first & third scalings, and the Super-Energy exponent is 50% higher when below 10,000.': '第一个技能的效果也影响第一个和第三个缩放，超级能源指数在10000以下时提高50%。',
    'Titanium Vessels': '钛制容器',
    'Unfazed Reactions': '冷静的反应',
    'Uranium Vessels': '铀容器',
    'Uranium Vessels are stronger based on their level.': '铀容器的强度取决于它们的等级。',
    'Accelerated Neutrinos': '加速中微子',
    'Broken Particles': '破碎粒子',
    'Destroy 1 Fortune Energy to get gifts!': '摧毁1个财富能量获得礼物!',
    'Exit this Unfortunate run.': '退出这个不幸的运行。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Increase the Energy exponent by ": "将能源指数提高 ",
    "Increase the above upgrade\'s effect by ": "提升以上升级效果 ",
    "Level: ": "等级: ",
    "Energy increases its exponent by ": "能源将其指数增加 ",
    "Karma: ": "业力：",
    "Req: Energy exponent of ": "要求：能源指数",
    "Mega Factories increase the effects of both above upgrades by ": "巨型工厂增加了上述两种升级的效果",
    "Mega Factories, which increase the Mega-Energy exponent by": "巨型工厂，将 巨型能源 指数增加",
    "Self-Charging Batteries increase their effect by ": "自充电电池增加其效果",
    "\t\tNext Feature: Requires an Energy exponent of ": "\t\t下一个功能：需要能源指数为",
    "Galvanic Compressors increase the Super-Energy exponent by ": "电流压缩机将巨型能源指数增加",
    "Mega-Energy: ": "巨型能源：",
    "Super-Energy: ": "超级能源: ",
    "The Mega-Energy effect uses a better formula (": "巨型能源 效果使用了一个更好的公式（",
    "Energy: ": "能源: ",
    "\t\tYou have reached the end! (": "\t\你已经到了终点！ (",
    "Hyper: ": "究极: ",
    "Hyper-Energy increases the Super-Energy exponent by ": "究极能源 将 超级能源 指数增加",
    "Split atoms subtract the Mega Factory requirement by ": "分裂原子减去巨型工厂要求",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    'ON': '打开',
    'OFF': '关闭',
    " Base Super-Energy/sec": " 基础超级能源/秒",
    " reset of Supercharged resets/sec": " 重置增压重置/秒",
    " Gift clicks/sec": "礼物点击/秒",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^成本: (.+) 能源$/,
    /^由于能源溢出，你的能源每秒除以 (.+)。$/,
    /^业力：(.+)$/,
    /^([\d\.,]+)$/,
    /^e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\d\.]+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^The (.+) of times supercharged adds (.+) to the Super-Energy effect.$/, '$1次 增压增加 $2 的超级能源效果。'],
    [/^The 2nd Energy Upgrade's cost increases (.+)\% slower$/, '第二能源升级的成本增长速度降低了 $1\%'],
    [/^The first 3 Energy Upgrade costs are extended by (.+) levels.$/, '前 3 次能源升级费用扩展 $1 级。'],
    [/^The Super-Energy effect softcap is (.+)\% weaker$/, '超级能源效应软上限变弱 $1\%'],
    [/^(.+)Level: (.+) \(Next: (.+) more XP$/, '等级：$2（下一个：$3 经验'],
    [/^Mega Factories are (.+)\% more efficient$/, '巨型工厂的效率提高了 $1\%'],
    [/^(.+) 经验 \(下一个在 (.+) Super-Energy$/, '$1 经验 \(下一个在 $2 超级能源'],
    [/^(.+) 经验 \(下一个在 (.+) Mega-Energy$/, '$1 经验 \(下一个在 $2 巨型能源'],
    [/^Energy adds (.+) to the Super-Energy exponent.$/, '能源将超级能源指数增加 $1。'],
    [/^Get (.+) more supercharged resets on each Super reset.$/, '每次超级重置获得 $1 次以上的增压重置。'],
    [/^The first (.+) Energy Upgrade costs are extended by (.+) levels.$/, '前 $1 次能源升级费用增加 $2 级。'],
    [/^Mega Energy adds (.+) levels to the first (.+) Super Upgrades.$/, '巨型能源 为前 $1 个超级升级增加了 $2 级。'],
    [/^Mega Factories add (.+) levels to all Energy upgrades.$/, '巨型工厂为所有能量升级增加 $1 级。'],
    [/^Cost: (.+) Energy$/, '成本: $1 能源'],
    [/^Cost: (.+) Mega-Energy$/, '成本: $1 巨型能源'],
    [/^Cost: (.+) Hyper-Energy$/, '成本: $1 究极能源'],
    [/^Cost: (.+) Super-Energy$/, '成本: $1 超级能源'],
    [/^Super-Energy adds (.+) free levels to the above upgrade.$/, '超级能源增加了 $1 免费等级针对以上升级。'],
    [/^\t\tNext Feature: Requires (.+) Super-Energy. \((.+)$/, '\t\t下一个功能：需要 $1 超级能源。 \($2'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);