/**
 * Ball x Pit 游戏数据配置文件
 * 
 * 添加新球或公式时, 只需修改此文件即可
 * 
 * 数据结构说明:
 * - baseBalls: 基础球 (id, name, nameCn, img, effectCn)
 * - evolutions: 基础进化 (name, nameCn, row, col, img, effectCn, alt?)
 * - advancedEvolutions: 高级进化 (name, nameCn, components[], img, effectCn)
 * - baseItems: 基础装备 (name, nameCn, img)
 * - passiveEvolutions: 被动道具进化 (name, nameCn, components[], img, effectCn)
 */

const GAME_DATA = {
  // ==================== 基础球 ====================
  baseBalls: [
    { id: "BLEED", name: "Bleed", nameCn: "流血", img: "ball_icon_bleed.png", effectCn: "攻击会使敌人流血，在一段时间内造成持续伤害。" },
    { id: "BROOD_MOTHER", name: "Brood Mother", nameCn: "育母", img: "ball_icon_brood_mother.png", effectCn: "周期性地产生小型单位为你作战。" },
    { id: "BURN", name: "Burn", nameCn: "燃烧", img: "ball_icon_burn.png", effectCn: "攻击会点燃敌人，造成持续的火焰伤害。" },
    { id: "CELL", name: "Cell", nameCn: "细胞", img: "ball_icon_cell.png", effectCn: "具有分裂和增殖能力的弹珠。" },
    { id: "CHARM", name: "Charm", nameCn: "魅惑", img: "ball_icon_love_charm.png", effectCn: "攻击会迷惑敌人，使其暂时停止攻击或攻击其友军。" },
    { id: "DARK", name: "Dark", nameCn: "黑暗", img: "ball_icon_dark.png", effectCn: "运用暗影能量，通常附带诅咒或削弱效果。" },
    { id: "EARTHQUAKE", name: "Earthquake", nameCn: "地震", img: "ball_icon_earthquake.png", effectCn: "造成范围性的地面冲击和伤害。" },
    { id: "EGG_SAC", name: "Egg Sac", nameCn: "卵囊", img: "ball_icon_egg_sac.png", effectCn: "可以孵化出小型生物的卵囊。" },
    { id: "FREEZE", name: "Freeze", nameCn: "冰冻", img: "ball_icon_freeze.png", effectCn: "攻击可以冰冻或减速敌人。" },
    { id: "GHOST", name: "Ghost", nameCn: "幽灵", img: "ball_icon_ghost.png", effectCn: "可以穿透敌人，造成难以防御的伤害。" },
    { id: "IRON", name: "Iron", nameCn: "钢铁", img: "ball_icon_iron.png", effectCn: "坚硬的弹珠，通常具有更高的基础伤害或破甲效果。" },
    { id: "LASER_H", name: "Laser H", nameCn: "激光(横)", img: "ball_icon_laser_horizontal.png", effectCn: "发射一道直线激光，穿透路径上的所有敌人。" },
    { id: "LASER_V", name: "Laser V", nameCn: "激光(竖)", img: "ball_icon_laser_vertical.png", effectCn: "发射一道直线激光，穿透路径上的所有敌人。" },
    { id: "LIGHT", name: "Light", nameCn: "光明", img: "ball_icon_light.png", effectCn: "运用光明力量，通常带有治疗或致盲效果。" },
    { id: "LIGHTNING", name: "Lightning", nameCn: "闪电", img: "ball_icon_lightning.png", effectCn: "攻击可以释放连锁闪电，弹射到多个敌人身上。" },
    { id: "POISON", name: "Poison", nameCn: "毒", img: "ball_icon_poison.png", effectCn: "攻击会使敌人中毒，在长时间内造成持续伤害。" },
    { id: "VAMPIRE", name: "Vampire", nameCn: "吸血鬼", img: "ball_icon_vampire.png", effectCn: "攻击可以将造成的部分伤害转化为自身生命值。" },
    { id: "WIND", name: "Wind", nameCn: "风", img: "ball_icon_wind.png", effectCn: "可以吹飞敌人或增强其他元素效果的范围。" }
  ],

  // ==================== 基础进化 ====================
  // row 和 col 对应基础球的 id, alt 表示有替代配方
  evolutions: [
    { name: "Leech", nameCn: "水蛭", row: "BLEED", col: "BROOD_MOTHER", img: "ball_icon_leech.png", effectCn: "球击中敌人后，会附着在其身上，每秒造成伤害。" },
    { name: "Berserk", nameCn: "狂暴", row: "CHARM", col: "BLEED", img: "ball_icon_berserk.png", effectCn: "暴怒，伤害增加100%。", alt: true },
    { name: "Berserk", nameCn: "狂暴", row: "CHARM", col: "BURN", img: "ball_icon_berserk.png", effectCn: "暴怒，伤害增加100%。", alt: true },
    { name: "Sacrifice", nameCn: "献祭", row: "BLEED", col: "DARK", img: "ball_icon_sacrifice.png", effectCn: "对敌人造成4层流血效果，上限为15层。施加诅咒，5次攻击后造成大量伤害。" },
    { name: "Hemorrhage", nameCn: "大出血", row: "BLEED", col: "IRON", img: "ball_icon_hemorrhage.png", effectCn: "穿透敌人的护甲并造成伤害。" },
    { name: "Vampire Lord", nameCn: "吸血鬼领主", row: "BLEED", col: "VAMPIRE", img: "ball_icon_vampire_lord.png", effectCn: "终极吸血鬼，将对敌人造成的伤害转化为生命值。球会不时产生蝙蝠，攻击附近的敌人。" },
    { name: "Maggot", nameCn: "蛆虫", row: "BROOD_MOTHER", col: "CELL", img: "ball_icon_maggot.png", effectCn: "向敌人发射蛆虫，敌人死亡时会生出小球。" },
    { name: "Spider Queen", nameCn: "蜘蛛女王", row: "BROOD_MOTHER", col: "EGG_SAC", img: "ball_icon_spider_queen.png", effectCn: "每隔一段时间产生蜘蛛卵，孵化出的蜘蛛会攻击附近的敌人。" },
    { name: "Mosquito King", nameCn: "蚊王", row: "BROOD_MOTHER", col: "VAMPIRE", img: "ball_icon_mosquito_king.png", effectCn: "召唤蚊子攻击敌人，将造成的伤害转化为生命值。" },
    { name: "Magma", nameCn: "岩浆", row: "BURN", col: "EARTHQUAKE", img: "ball_icon_magma.png", effectCn: "每隔一段时间喷出岩浆块，对敌人造成伤害并施加最多3层灼烧效果。" },
    { name: "Frozen Flame", nameCn: "冰冻火焰", row: "BURN", col: "FREEZE", img: "ball_icon_frozen_flame.png", effectCn: "对敌人造成冰火双重伤害。" },
    { name: "Bomb", nameCn: "炸弹", row: "BURN", col: "IRON", img: "ball_icon_bomb.png", effectCn: "击中敌人时会发生爆炸，对爆炸范围内的所有敌人造成伤害。" },
    { name: "Sun", nameCn: "太阳", row: "BURN", col: "LIGHT", img: "ball_icon_sun.png", effectCn: "化身为太阳，灼烧周围的敌人。" },
    { name: "Inferno", nameCn: "炼狱", row: "BURN", col: "WIND", img: "ball_icon_inferno.png", effectCn: "对半径2格内的敌人施加1层灼烧效果，持续6秒。" },
    { name: "Overgrowth", nameCn: "过度生长", row: "CELL", col: "EARTHQUAKE", img: "ball_icon_overgrowth.png", effectCn: "从地面召唤荆棘，对大范围内的敌人造成伤害。" },
    { name: "Radiation Beam", nameCn: "辐射光束", row: "CELL", col: "LASER_H", img: "ball_icon_radiation_beam.png", effectCn: "激光束会造成辐射伤害。", alt: true },
    { name: "Virus", nameCn: "病毒", row: "CELL", col: "POISON", img: "ball_icon_vrius.png", effectCn: "感染敌人，病毒会在敌人之间传播，并持续造成伤害。", alt: true },
    { name: "Incubus", nameCn: "梦魇", row: "CHARM", col: "DARK", img: "ball_icon_incubus.png", effectCn: "迷惑敌人，使其在短时间内为你作战。" },
    { name: "Lovestruck", nameCn: "热恋", row: "CHARM", col: "LIGHT", img: "ball_icon_lovestruck.png", effectCn: "让敌人陷入爱河，使其停止攻击并降低防御力。", alt: true },
    { name: "Succubus", nameCn: "魅魔", row: "CHARM", col: "VAMPIRE", img: "ball_icon_succubus.png", effectCn: "引诱敌人，吸取其生命精华为你恢复生命值。" },
    { name: "Phantom", nameCn: "幻影", row: "DARK", col: "GHOST", img: "ball_icon_phantom.png", effectCn: "虚无形态，可穿过敌人。" },
    { name: "Assassin", nameCn: "刺客", row: "DARK", col: "IRON", img: "ball_icon_dark_assassin.png", effectCn: "对生命值低于20%的敌人造成致命一击。", alt: true },
    { name: "Flicker", nameCn: "闪烁", row: "DARK", col: "LIGHT", img: "ball_icon_flicker.png", effectCn: "每隔几秒对屏幕上的所有敌人造成伤害。" },
    { name: "Noxious", nameCn: "剧毒", row: "DARK", col: "WIND", img: "ball_icon_noxious.png", effectCn: "制造一团毒云，随风飘散，对云中的所有敌人造成持续伤害。", alt: true },
    { name: "Glacier", nameCn: "冰川", row: "EARTHQUAKE", col: "FREEZE", img: "ball_icon_glacier.png", effectCn: "每隔一段时间释放冰川尖刺，对敌人造成伤害并冰冻敌人。" },
    { name: "Swamp", nameCn: "沼泽", row: "EARTHQUAKE", col: "POISON", img: "ball_icon_swamp.png", effectCn: "将地面变为剧毒沼泽，减速并持续毒害其中的所有敌人。" },
    { name: "Sandstorm", nameCn: "沙尘暴", row: "EARTHQUAKE", col: "WIND", img: "ball_icon_sandstorm.png", effectCn: "穿过敌人时，每秒对敌人造成大量伤害。" },
    { name: "Shotgun", nameCn: "霰弹枪", row: "IRON", col: "EGG_SAC", img: "ball_icon_shotgun.png", effectCn: "发射多个投射物。" },
    { name: "Wraith", nameCn: "怨灵", row: "FREEZE", col: "GHOST", img: "ball_icon_wraith.png", effectCn: "穿过敌人时冰冻敌人。" },
    { name: "Freeze Ray", nameCn: "冰冻射线", row: "FREEZE", col: "LASER_H", img: "ball_icon_freeze_ray.png", effectCn: "发射一道激光，冻结路径上的敌人。" },
    { name: "Blizzard", nameCn: "暴风雪", row: "FREEZE", col: "WIND", img: "ball_icon_blizzard.png", effectCn: "在小范围内冻结所有敌人，并造成伤害。", alt: true },
    { name: "Soul Sucker", nameCn: "灵魂吸取者", row: "GHOST", col: "VAMPIRE", img: "ball_icon_soul_sucker.png", effectCn: "直接从敌人身上吸取灵魂，造成伤害并为你恢复生命值。" },
    { name: "Holy Laser", nameCn: "神圣激光", row: "LASER_V", col: "LASER_H", img: "ball_icon_holy_laser.png", effectCn: "对同一行和同一列的所有敌人造成伤害。" },
    { name: "Laser Beam", nameCn: "激光束", row: "LASER_H", col: "LIGHT", img: "ball_icon_laser_beam.png", effectCn: "强化激光，使其更粗、伤害更高，并能点燃敌人造成持续伤害。" },
    { name: "Flash", nameCn: "闪光", row: "LIGHT", col: "LIGHTNING", img: "ball_icon_flash.png", effectCn: "以闪电般的速度移动和攻击。" },
    { name: "Lightning Rod", nameCn: "避雷针", row: "LIGHTNING", col: "IRON", img: "ball_pit_lightning_rod.png", effectCn: "在击中点形成一个避雷针，持续吸引闪电攻击周围的敌人。" },
    { name: "Storm", nameCn: "风暴", row: "LIGHTNING", col: "WIND", img: "ball_icon_storm.png", effectCn: "释放闪电攻击附近的敌人。" },
    { name: "Mosquito Swarm", nameCn: "蚊群", row: "VAMPIRE", col: "EGG_SAC", img: "ball_icon_mosquito_swarm_erfffn.png", effectCn: "击中时爆裂成多只蚊子。" },
    { name: "Voluptuous Egg Sac", nameCn: "丰满卵囊", row: "EGG_SAC", col: "CELL", img: "ball_icon_voluptuous_egg_sac.png", effectCn: "爆裂成多个卵囊。" }
  ],

  // ==================== 高级进化 ====================
  // components 数组包含所需的进化球名称
  advancedEvolutions: [
    { name: "Nuclear Bomb", nameCn: "核弹", components: ["Bomb", "Poison"], img: "ball_icon_nuclear_bomb.png", effectCn: "制造一场巨大的核爆，对全屏敌人造成高额初始伤害，并在后续留下强烈的辐射区域持续造成伤害。" },
    { name: "Black Hole", nameCn: "黑洞", components: ["Sun", "Dark"], img: "ball_icon_black_hole.png", effectCn: "在屏幕上创建一个强大的引力奇点，将周围的敌人和投射物全部吸入并湮灭。" },
    { name: "Satan", nameCn: "撒旦", components: ["Incubus", "Succubus"], img: "ball_icon_satan.png", effectCn: "召唤恶魔之王撒旦，同时拥有梦魇的控制和魅魔的吸取能力，是战场上的终极主宰。" },
    { name: "Nosferatu", nameCn: "诺斯费拉图", components: ["Vampire Lord", "Mosquito King", "Spider Queen"], img: "ball_icon_nosferatu.png", effectCn: "吸血鬼、蚊子和蜘蛛的终极融合体，拥有无与伦比的生命汲取能力和仆从大军，是真正的不死君王。" }
  ],

  // ==================== 基础装备 ====================
  // 用于被动道具进化配方显示
  baseItems: [
    { name: "Everflowing Goblet", nameCn: "永流圣杯", img: "everflowingGoblet.png" },
    { name: "Vampiric Sword", nameCn: "吸血剑", img: "vampiricSword.png" },
    { name: "Baby Rattle", nameCn: "婴儿摇铃", img: "babyRattle.png" },
    { name: "War Horn", nameCn: "战争号角", img: "warHorn.png" },
    { name: "Ethereal Cloak", nameCn: "虚无斗篷", img: "etherealCloak.png" },
    { name: "Ghostly Corset", nameCn: "幽灵胸衣", img: "ghostlyCorset.png" },
    { name: "Breastplate", nameCn: "胸甲", img: "breastplate.png" },
    { name: "Corrupted Onion", nameCn: "腐烂洋葱", img: "wretchedOnion.png" },
    { name: "Reacher's Spear", nameCn: "延伸者之矛", img: "reachersSpear.png" },
    { name: "Deadeye's Amulet", nameCn: "神射手护符", img: "deadeyesAmulet.png" },
    { name: "Crown of Thorns", nameCn: "荆棘王冠", img: "crownOfThorns.png" },
    { name: "Spiked Collar", nameCn: "尖刺项圈", img: "spikedCollar.png" },
    { name: "Fleet Feet", nameCn: "疾行之靴", img: "fleetFeet.png" },
    { name: "Radiant Feather", nameCn: "光辉羽毛", img: "radiantFeather.png" },
    { name: "Diamond-Hilted Dagger", nameCn: "钻石柄匕首", img: "diamondHiltedDagger.png" },
    { name: "Emerald-Hilted Dagger", nameCn: "翡翠柄匕首", img: "emeraldHiltedDagger.png" },
    { name: "Ruby-Hilted Dagger", nameCn: "红宝石柄匕首", img: "rubyHiltedDagger.png" },
    { name: "Sapphire-Hilted Dagger", nameCn: "蓝宝石柄匕首", img: "sapphireHiltedDagger.png" }
  ],

  // ==================== 被动道具进化 ====================
  // components 数组包含所需的基础装备名称
  passiveEvolutions: [
    { name: "Soul Reaver", nameCn: "灵魂掠夺者", components: ["Everflowing Goblet", "Vampiric Sword"], img: "soulReaver.png", effectCn: "极大地增强你的生命偷取效果，并将溢出的治疗量转化为一个可以吸收伤害的护盾。" },
    { name: "Cornucopia", nameCn: "丰饶之角", components: ["Baby Rattle", "War Horn"], img: "cornucopia.png", effectCn: "周期性地产生各种资源，包括金币、宝石和生命恢复，是持续作战的强大保障。" },
    { name: "Phantom Regalia", nameCn: "幻影王权", components: ["Ethereal Cloak", "Ghostly Corset"], img: "phantomRegalia.png", effectCn: "提供极高的闪避几率，并让你在闪避成功后短暂进入无敌状态。" },
    { name: "Odiferous Shell", nameCn: "恶臭之壳", components: ["Breastplate", "Corrupted Onion"], img: "odiferousShell.png", effectCn: "当你受到伤害时，会释放出一股恶臭，对周围的敌人造成伤害并降低其攻击力。" },
    { name: "Gracious Impaler", nameCn: "优雅穿刺者", components: ["Reacher's Spear", "Deadeye's Amulet"], img: "graciousImpaler.png", effectCn: "你的所有投射物都将获得穿透效果，并对被穿透的每个敌人造成递增的伤害。" },
    { name: "Tormentor's Mask", nameCn: "折磨者面具", components: ["Crown of Thorns", "Spiked Collar"], img: "tormentorsMask.png", effectCn: "将你受到的部分伤害反弹给攻击者，并且你的攻击会对生命值低于50%的敌人造成额外伤害。" },
    { name: "Wings of the Anointed", nameCn: "受膏者之翼", components: ["Fleet Feet", "Radiant Feather"], img: "wingsOfTheAnnointed.png", effectCn: "极大地提升你的移动速度，并让你能够免疫地面上的陷阱和减速效果。" },
    { name: "Deadeye's Cross", nameCn: "神射手十字", components: ["Diamond-Hilted Dagger", "Emerald-Hilted Dagger", "Ruby-Hilted Dagger", "Sapphire-Hilted Dagger"], img: "deadeyesCross.png", effectCn: "融合四把元素匕首的力量，大幅提升暴击率、暴击伤害和投射物速度，每一击都精准而致命。" }
  ]
};
