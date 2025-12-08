/**
 * Ball x Pit 游戏数据配置文件
 * 
 * 添加新球或公式时, 只需修改此文件即可
 * 
 * 数据结构说明:
 * - baseBalls: 基础球 (id, name, nameCn, img, effectCn, damageType, statusEffects, tags)
 * - evolutions: 基础进化 (name, nameCn, row, col, img, effectCn, alt?, damageTypes, statusEffects, tags)
 * - advancedEvolutions: 高级进化 (name, nameCn, components[], img, effectCn, damageTypes, statusEffects, tags)
 * - baseItems: 基础装备 (name, nameCn, img)
 * - passiveEvolutions: 被动道具进化 (name, nameCn, components[], img, effectCn)
 */

// ==================== 伤害类型定义 ====================
const DAMAGE_TYPE = {
  NORMAL: { id: "kNormal", name: "Normal", nameCn: "普通", icon: "⚪" },
  FIRE: { id: "kFire", name: "Fire", nameCn: "火焰", icon: "🔥" },
  ICE: { id: "kIce", name: "Ice", nameCn: "冰霜", icon: "❄️" },
  LASER: { id: "kLaser", name: "Laser", nameCn: "激光", icon: "🔦" },
  LIGHTNING: { id: "kLightning", name: "Lightning", nameCn: "闪电", icon: "⚡" },
  BOMB: { id: "kBomb", name: "Bomb", nameCn: "爆炸", icon: "💣" },
  POISON: { id: "kPoison", name: "Poison", nameCn: "毒素", icon: "☠️" },
  BLEED: { id: "kBleed", name: "Bleed", nameCn: "流血", icon: "🩸" },
  EARTHQUAKE: { id: "kEarthquake", name: "Earthquake", nameCn: "地震", icon: "🌋" },
  GHOST: { id: "kGhost", name: "Ghost", nameCn: "幽灵", icon: "👻" },
  VAMPIRE: { id: "kVampire", name: "Vampire", nameCn: "吸血", icon: "🧛" },
  WIND: { id: "kWind", name: "Wind", nameCn: "风", icon: "🌪️" },
  INSTANT_KILL: { id: "kInstantKill", name: "Instant Kill", nameCn: "即死", icon: "💀" },
  CHARM: { id: "kCharm", name: "Charm", nameCn: "魅惑", icon: "💕" },
  LIGHT: { id: "kLight", name: "Light", nameCn: "光明", icon: "✨" },
  DARK: { id: "kDark", name: "Dark", nameCn: "黑暗", icon: "🌑" }
};

// ==================== 状态效果定义 ====================
const STATUS_EFFECT = {
  BURN: { id: "kBurn", name: "Burn", nameCn: "燃烧", icon: "🔥", desc: "持续火焰伤害" },
  FROZEN: { id: "kFrozen", name: "Frozen", nameCn: "冰冻", icon: "🧊", desc: "无法移动和攻击" },
  POISON: { id: "kPoison", name: "Poison", nameCn: "中毒", icon: "☠️", desc: "持续毒素伤害" },
  BLEED: { id: "kBleed", name: "Bleed", nameCn: "流血", icon: "🩸", desc: "持续流血伤害, 可叠加" },
  LIGHTNING_ROD: { id: "kLightningRod", name: "Lightning Rod", nameCn: "避雷针", icon: "🗼", desc: "吸引闪电攻击" },
  LEECH: { id: "kLeech", name: "Leech", nameCn: "水蛭", icon: "🪱", desc: "附着并持续伤害" },
  DISEASE: { id: "kDisease", name: "Disease", nameCn: "疾病", icon: "🦠", desc: "减少治疗并持续伤害" },
  SLOW: { id: "kSlow", name: "Slow", nameCn: "减速", icon: "🐌", desc: "降低移动速度" },
  CHARM: { id: "kCharm", name: "Charm", nameCn: "魅惑", icon: "💕", desc: "停止攻击或攻击友方" },
  BERSERK: { id: "kBerserk", name: "Berserk", nameCn: "狂暴", icon: "😤", desc: "攻击友方, 伤害增加" },
  BLIND: { id: "kBlind", name: "Blind", nameCn: "致盲", icon: "😵", desc: "降低命中率" },
  CURSE: { id: "kCurse", name: "Curse", nameCn: "诅咒", icon: "💜", desc: "数次攻击后造成大量伤害" },
  MAGGOT: { id: "kMaggot", name: "Maggot", nameCn: "蛆虫", icon: "🪱", desc: "死亡时生成小球" },
  FROSTBURN: { id: "kFrostburn", name: "Frostburn", nameCn: "冰火", icon: "🌡️", desc: "冰火双重持续伤害" },
  RADIATION: { id: "kRadiation", name: "Radiation", nameCn: "辐射", icon: "☢️", desc: "持续辐射伤害, 可叠加" },
  LOVESTRUCK: { id: "kLovestruck", name: "Lovestruck", nameCn: "热恋", icon: "💘", desc: "停止攻击并降低防御" },
  OVERGROWTH: { id: "kOvergrowth", name: "Overgrowth", nameCn: "过度生长", icon: "🌿", desc: "荆棘缠绕持续伤害" }
};

// ==================== 范围攻击类型定义 ====================
const AOE_TYPE = {
  LIGHTNING: { id: "kLightning", name: "Chain", nameCn: "连锁", icon: "⚡", desc: "弹射到多个敌人" },
  LASER_H: { id: "kLaserHorz", name: "H-Laser", nameCn: "横向激光", icon: "➡️", desc: "穿透同行敌人" },
  LASER_V: { id: "kLaserVert", name: "V-Laser", nameCn: "纵向激光", icon: "⬇️", desc: "穿透同列敌人" },
  LASER_CROSS: { id: "kLaserCross", name: "Cross", nameCn: "十字激光", icon: "✚", desc: "穿透同行同列敌人" },
  BOMB: { id: "kBomb", name: "Explosion", nameCn: "爆炸", icon: "💥", desc: "范围爆炸伤害" },
  EARTHQUAKE: { id: "kEarthquake", name: "Quake", nameCn: "地震", icon: "🌋", desc: "范围地面冲击" },
  AURA: { id: "kAura", name: "Aura", nameCn: "光环", icon: "🔆", desc: "持续范围效果" },
  NUKE: { id: "kNuke", name: "Nuclear", nameCn: "核爆", icon: "☢️", desc: "全屏伤害+辐射" },
  FLASH: { id: "kFlash", name: "Flash", nameCn: "闪光", icon: "💫", desc: "全屏瞬间伤害" }
};

// ==================== 标签定义 ====================
const TAGS = {
  DOT: { id: "dot", name: "DoT", nameCn: "持续伤害", color: "#e74c3c" },
  CC: { id: "cc", name: "CC", nameCn: "控制效果", color: "#3498db" },
  AOE: { id: "aoe", name: "AoE", nameCn: "范围伤害", color: "#f39c12" },
  SUMMON: { id: "summon", name: "Summon", nameCn: "召唤", color: "#9b59b6" },
  LIFESTEAL: { id: "lifesteal", name: "Lifesteal", nameCn: "吸血", color: "#c0392b" },
  PENETRATE: { id: "penetrate", name: "Penetrate", nameCn: "穿透", color: "#1abc9c" },
  DEBUFF: { id: "debuff", name: "Debuff", nameCn: "减益", color: "#8e44ad" },
  EXECUTE: { id: "execute", name: "Execute", nameCn: "斩杀", color: "#2c3e50" },
  MULTI_HIT: { id: "multiHit", name: "Multi-Hit", nameCn: "多段攻击", color: "#e67e22" }
};

const GAME_DATA = {
  // ==================== 基础球 ====================
  baseBalls: [
    { id: "BLEED", name: "Bleed", nameCn: "流血", img: "ball_icon_bleed.png", effectCn: "攻击会使敌人流血，在一段时间内造成持续伤害。",
      damageType: DAMAGE_TYPE.BLEED, statusEffects: [STATUS_EFFECT.BLEED], tags: [TAGS.DOT] },
    { id: "BROOD_MOTHER", name: "Brood Mother", nameCn: "育母", img: "ball_icon_brood_mother.png", effectCn: "周期性地产生小型单位为你作战。",
      damageType: DAMAGE_TYPE.NORMAL, tags: [TAGS.SUMMON] },
    { id: "BURN", name: "Burn", nameCn: "燃烧", img: "ball_icon_burn.png", effectCn: "攻击会点燃敌人，造成持续的火焰伤害。",
      damageType: DAMAGE_TYPE.FIRE, statusEffects: [STATUS_EFFECT.BURN], tags: [TAGS.DOT] },
    { id: "CELL", name: "Cell", nameCn: "细胞", img: "ball_icon_cell.png", effectCn: "具有分裂和增殖能力的弹珠。",
      damageType: DAMAGE_TYPE.NORMAL, tags: [TAGS.SUMMON] },
    { id: "CHARM", name: "Charm", nameCn: "魅惑", img: "ball_icon_love_charm.png", effectCn: "攻击会迷惑敌人，使其暂时停止攻击或攻击其友军。",
      damageType: DAMAGE_TYPE.CHARM, statusEffects: [STATUS_EFFECT.CHARM], tags: [TAGS.CC, TAGS.DEBUFF] },
    { id: "DARK", name: "Dark", nameCn: "黑暗", img: "ball_icon_dark.png", effectCn: "运用暗影能量，通常附带诅咒或削弱效果。",
      damageType: DAMAGE_TYPE.DARK, statusEffects: [STATUS_EFFECT.CURSE], tags: [TAGS.DEBUFF] },
    { id: "EARTHQUAKE", name: "Earthquake", nameCn: "地震", img: "ball_icon_earthquake.png", effectCn: "造成范围性的地面冲击和伤害。",
      damageType: DAMAGE_TYPE.EARTHQUAKE, aoeType: AOE_TYPE.EARTHQUAKE, tags: [TAGS.AOE] },
    { id: "EGG_SAC", name: "Egg Sac", nameCn: "卵囊", img: "ball_icon_egg_sac.png", effectCn: "可以孵化出小型生物的卵囊。",
      damageType: DAMAGE_TYPE.NORMAL, tags: [TAGS.SUMMON, TAGS.MULTI_HIT] },
    { id: "FREEZE", name: "Freeze", nameCn: "冰冻", img: "ball_icon_freeze.png", effectCn: "攻击可以冰冻或减速敌人。",
      damageType: DAMAGE_TYPE.ICE, statusEffects: [STATUS_EFFECT.FROZEN, STATUS_EFFECT.SLOW], tags: [TAGS.CC] },
    { id: "GHOST", name: "Ghost", nameCn: "幽灵", img: "ball_icon_ghost.png", effectCn: "可以穿透敌人，造成难以防御的伤害。",
      damageType: DAMAGE_TYPE.GHOST, tags: [TAGS.PENETRATE] },
    { id: "IRON", name: "Iron", nameCn: "钢铁", img: "ball_icon_iron.png", effectCn: "坚硬的弹珠，通常具有更高的基础伤害或破甲效果。",
      damageType: DAMAGE_TYPE.NORMAL, tags: [TAGS.PENETRATE] },
    { id: "LASER_H", name: "Laser H", nameCn: "激光(横)", img: "ball_icon_laser_horizontal.png", effectCn: "发射一道直线激光，穿透路径上的所有敌人。",
      damageType: DAMAGE_TYPE.LASER, aoeType: AOE_TYPE.LASER_H, tags: [TAGS.AOE, TAGS.PENETRATE] },
    { id: "LASER_V", name: "Laser V", nameCn: "激光(竖)", img: "ball_icon_laser_vertical.png", effectCn: "发射一道直线激光，穿透路径上的所有敌人。",
      damageType: DAMAGE_TYPE.LASER, aoeType: AOE_TYPE.LASER_V, tags: [TAGS.AOE, TAGS.PENETRATE] },
    { id: "LIGHT", name: "Light", nameCn: "光明", img: "ball_icon_light.png", effectCn: "运用光明力量，通常带有治疗或致盲效果。",
      damageType: DAMAGE_TYPE.LIGHT, statusEffects: [STATUS_EFFECT.BLIND], tags: [TAGS.DEBUFF] },
    { id: "LIGHTNING", name: "Lightning", nameCn: "闪电", img: "ball_icon_lightning.png", effectCn: "攻击可以释放连锁闪电，弹射到多个敌人身上。",
      damageType: DAMAGE_TYPE.LIGHTNING, aoeType: AOE_TYPE.LIGHTNING, tags: [TAGS.AOE, TAGS.MULTI_HIT] },
    { id: "POISON", name: "Poison", nameCn: "毒", img: "ball_icon_poison.png", effectCn: "攻击会使敌人中毒，在长时间内造成持续伤害。",
      damageType: DAMAGE_TYPE.POISON, statusEffects: [STATUS_EFFECT.POISON], tags: [TAGS.DOT] },
    { id: "VAMPIRE", name: "Vampire", nameCn: "吸血鬼", img: "ball_icon_vampire.png", effectCn: "攻击可以将造成的部分伤害转化为自身生命值。",
      damageType: DAMAGE_TYPE.VAMPIRE, tags: [TAGS.LIFESTEAL] },
    { id: "WIND", name: "Wind", nameCn: "风", img: "ball_icon_wind.png", effectCn: "可以吹飞敌人或增强其他元素效果的范围。",
      damageType: DAMAGE_TYPE.WIND, tags: [TAGS.CC, TAGS.AOE] }
  ],

  // ==================== 基础进化 ====================
  // row 和 col 对应基础球的 id, alt 表示有替代配方
  evolutions: [
    { name: "Leech", nameCn: "水蛭", row: "BLEED", col: "BROOD_MOTHER", img: "ball_icon_leech.png", effectCn: "球击中敌人后，会附着在其身上，每秒造成伤害。",
      damageTypes: [DAMAGE_TYPE.BLEED], statusEffects: [STATUS_EFFECT.LEECH, STATUS_EFFECT.BLEED], tags: [TAGS.DOT] },
    { name: "Berserk", nameCn: "狂暴", row: "CHARM", col: "BLEED", img: "ball_icon_berserk.png", effectCn: "暴怒，伤害增加100%。", alt: true,
      damageTypes: [DAMAGE_TYPE.CHARM], statusEffects: [STATUS_EFFECT.BERSERK], tags: [TAGS.CC, TAGS.DEBUFF] },
    { name: "Berserk", nameCn: "狂暴", row: "CHARM", col: "BURN", img: "ball_icon_berserk.png", effectCn: "暴怒，伤害增加100%。", alt: true,
      damageTypes: [DAMAGE_TYPE.CHARM], statusEffects: [STATUS_EFFECT.BERSERK], tags: [TAGS.CC, TAGS.DEBUFF] },
    { name: "Sacrifice", nameCn: "献祭", row: "BLEED", col: "DARK", img: "ball_icon_sacrifice.png", effectCn: "对敌人造成4层流血效果，上限为15层。施加诅咒，5次攻击后造成大量伤害。",
      damageTypes: [DAMAGE_TYPE.BLEED, DAMAGE_TYPE.DARK], statusEffects: [STATUS_EFFECT.BLEED, STATUS_EFFECT.CURSE], tags: [TAGS.DOT, TAGS.DEBUFF] },
    { name: "Hemorrhage", nameCn: "大出血", row: "BLEED", col: "IRON", img: "ball_icon_hemorrhage.png", effectCn: "穿透敌人的护甲并造成伤害。",
      damageTypes: [DAMAGE_TYPE.BLEED], statusEffects: [STATUS_EFFECT.BLEED], tags: [TAGS.DOT, TAGS.PENETRATE] },
    { name: "Vampire Lord", nameCn: "吸血鬼领主", row: "BLEED", col: "VAMPIRE", img: "ball_icon_vampire_lord.png", effectCn: "终极吸血鬼，将对敌人造成的伤害转化为生命值。球会不时产生蝙蝠，攻击附近的敌人。",
      damageTypes: [DAMAGE_TYPE.VAMPIRE, DAMAGE_TYPE.BLEED], statusEffects: [STATUS_EFFECT.BLEED], tags: [TAGS.LIFESTEAL, TAGS.DOT, TAGS.SUMMON] },
    { name: "Maggot", nameCn: "蛆虫", row: "BROOD_MOTHER", col: "CELL", img: "ball_icon_maggot.png", effectCn: "向敌人发射蛆虫，敌人死亡时会生出小球。",
      damageTypes: [DAMAGE_TYPE.NORMAL], statusEffects: [STATUS_EFFECT.MAGGOT], tags: [TAGS.SUMMON] },
    { name: "Spider Queen", nameCn: "蜘蛛女王", row: "BROOD_MOTHER", col: "EGG_SAC", img: "ball_icon_spider_queen.png", effectCn: "每隔一段时间产生蜘蛛卵，孵化出的蜘蛛会攻击附近的敌人。",
      damageTypes: [DAMAGE_TYPE.NORMAL], tags: [TAGS.SUMMON] },
    { name: "Mosquito King", nameCn: "蚊王", row: "BROOD_MOTHER", col: "VAMPIRE", img: "ball_icon_mosquito_king.png", effectCn: "召唤蚊子攻击敌人，将造成的伤害转化为生命值。",
      damageTypes: [DAMAGE_TYPE.VAMPIRE], tags: [TAGS.SUMMON, TAGS.LIFESTEAL] },
    { name: "Magma", nameCn: "岩浆", row: "BURN", col: "EARTHQUAKE", img: "ball_icon_magma.png", effectCn: "每隔一段时间喷出岩浆块，对敌人造成伤害并施加最多3层灼烧效果。",
      damageTypes: [DAMAGE_TYPE.FIRE, DAMAGE_TYPE.EARTHQUAKE], statusEffects: [STATUS_EFFECT.BURN], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Frozen Flame", nameCn: "冰冻火焰", row: "BURN", col: "FREEZE", img: "ball_icon_frozen_flame.png", effectCn: "对敌人造成冰火双重伤害。",
      damageTypes: [DAMAGE_TYPE.FIRE, DAMAGE_TYPE.ICE], statusEffects: [STATUS_EFFECT.BURN, STATUS_EFFECT.FROZEN, STATUS_EFFECT.FROSTBURN], tags: [TAGS.DOT, TAGS.CC] },
    { name: "Bomb", nameCn: "炸弹", row: "BURN", col: "IRON", img: "ball_icon_bomb.png", effectCn: "击中敌人时会发生爆炸，对爆炸范围内的所有敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.BOMB], aoeType: AOE_TYPE.BOMB, tags: [TAGS.AOE] },
    { name: "Sun", nameCn: "太阳", row: "BURN", col: "LIGHT", img: "ball_icon_sun.png", effectCn: "化身为太阳，灼烧周围的敌人。",
      damageTypes: [DAMAGE_TYPE.FIRE, DAMAGE_TYPE.LIGHT], statusEffects: [STATUS_EFFECT.BURN], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Inferno", nameCn: "炼狱", row: "BURN", col: "WIND", img: "ball_icon_inferno.png", effectCn: "对半径2格内的敌人施加1层灼烧效果，持续6秒。",
      damageTypes: [DAMAGE_TYPE.FIRE, DAMAGE_TYPE.WIND], statusEffects: [STATUS_EFFECT.BURN], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Overgrowth", nameCn: "过度生长", row: "CELL", col: "EARTHQUAKE", img: "ball_icon_overgrowth.png", effectCn: "从地面召唤荆棘，对大范围内的敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.EARTHQUAKE], statusEffects: [STATUS_EFFECT.OVERGROWTH], aoeType: AOE_TYPE.EARTHQUAKE, tags: [TAGS.AOE, TAGS.DOT] },
    { name: "Radiation Beam", nameCn: "辐射光束", row: "CELL", col: "LASER_H", img: "ball_icon_radiation_beam.png", effectCn: "激光束会造成辐射伤害。", alt: true,
      damageTypes: [DAMAGE_TYPE.LASER], statusEffects: [STATUS_EFFECT.RADIATION], aoeType: AOE_TYPE.LASER_H, tags: [TAGS.AOE, TAGS.DOT, TAGS.PENETRATE] },
    { name: "Virus", nameCn: "病毒", row: "CELL", col: "POISON", img: "ball_icon_vrius.png", effectCn: "感染敌人，病毒会在敌人之间传播，并持续造成伤害。", alt: true,
      damageTypes: [DAMAGE_TYPE.POISON], statusEffects: [STATUS_EFFECT.DISEASE], tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Incubus", nameCn: "梦魇", row: "CHARM", col: "DARK", img: "ball_icon_incubus.png", effectCn: "迷惑敌人，使其在短时间内为你作战。",
      damageTypes: [DAMAGE_TYPE.CHARM, DAMAGE_TYPE.DARK], statusEffects: [STATUS_EFFECT.CHARM], tags: [TAGS.CC] },
    { name: "Lovestruck", nameCn: "热恋", row: "CHARM", col: "LIGHT", img: "ball_icon_lovestruck.png", effectCn: "让敌人陷入爱河，使其停止攻击并降低防御力。", alt: true,
      damageTypes: [DAMAGE_TYPE.CHARM, DAMAGE_TYPE.LIGHT], statusEffects: [STATUS_EFFECT.LOVESTRUCK], tags: [TAGS.CC, TAGS.DEBUFF] },
    { name: "Succubus", nameCn: "魅魔", row: "CHARM", col: "VAMPIRE", img: "ball_icon_succubus.png", effectCn: "引诱敌人，吸取其生命精华为你恢复生命值。",
      damageTypes: [DAMAGE_TYPE.CHARM, DAMAGE_TYPE.VAMPIRE], statusEffects: [STATUS_EFFECT.CHARM], tags: [TAGS.CC, TAGS.LIFESTEAL] },
    { name: "Phantom", nameCn: "幻影", row: "DARK", col: "GHOST", img: "ball_icon_phantom.png", effectCn: "虚无形态，可穿过敌人。",
      damageTypes: [DAMAGE_TYPE.GHOST, DAMAGE_TYPE.DARK], tags: [TAGS.PENETRATE] },
    { name: "Assassin", nameCn: "刺客", row: "DARK", col: "IRON", img: "ball_icon_dark_assassin.png", effectCn: "对生命值低于20%的敌人造成致命一击。", alt: true,
      damageTypes: [DAMAGE_TYPE.DARK, DAMAGE_TYPE.INSTANT_KILL], tags: [TAGS.EXECUTE] },
    { name: "Flicker", nameCn: "闪烁", row: "DARK", col: "LIGHT", img: "ball_icon_flicker.png", effectCn: "每隔几秒对屏幕上的所有敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.DARK, DAMAGE_TYPE.LIGHT], aoeType: AOE_TYPE.FLASH, tags: [TAGS.AOE] },
    { name: "Noxious", nameCn: "剧毒", row: "DARK", col: "WIND", img: "ball_icon_noxious.png", effectCn: "制造一团毒云，随风飘散，对云中的所有敌人造成持续伤害。", alt: true,
      damageTypes: [DAMAGE_TYPE.POISON, DAMAGE_TYPE.WIND], statusEffects: [STATUS_EFFECT.POISON], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Glacier", nameCn: "冰川", row: "EARTHQUAKE", col: "FREEZE", img: "ball_icon_glacier.png", effectCn: "每隔一段时间释放冰川尖刺，对敌人造成伤害并冰冻敌人。",
      damageTypes: [DAMAGE_TYPE.ICE, DAMAGE_TYPE.EARTHQUAKE], statusEffects: [STATUS_EFFECT.FROZEN], aoeType: AOE_TYPE.EARTHQUAKE, tags: [TAGS.CC, TAGS.AOE] },
    { name: "Swamp", nameCn: "沼泽", row: "EARTHQUAKE", col: "POISON", img: "ball_icon_swamp.png", effectCn: "将地面变为剧毒沼泽，减速并持续毒害其中的所有敌人。",
      damageTypes: [DAMAGE_TYPE.POISON, DAMAGE_TYPE.EARTHQUAKE], statusEffects: [STATUS_EFFECT.POISON, STATUS_EFFECT.SLOW], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.CC, TAGS.AOE] },
    { name: "Sandstorm", nameCn: "沙尘暴", row: "EARTHQUAKE", col: "WIND", img: "ball_icon_sandstorm.png", effectCn: "穿过敌人时，每秒对敌人造成大量伤害。",
      damageTypes: [DAMAGE_TYPE.EARTHQUAKE, DAMAGE_TYPE.WIND], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE, TAGS.PENETRATE] },
    { name: "Shotgun", nameCn: "霰弹枪", row: "IRON", col: "EGG_SAC", img: "ball_icon_shotgun.png", effectCn: "发射多个投射物。",
      damageTypes: [DAMAGE_TYPE.NORMAL], tags: [TAGS.MULTI_HIT] },
    { name: "Wraith", nameCn: "怨灵", row: "FREEZE", col: "GHOST", img: "ball_icon_wraith.png", effectCn: "穿过敌人时冰冻敌人。",
      damageTypes: [DAMAGE_TYPE.ICE, DAMAGE_TYPE.GHOST], statusEffects: [STATUS_EFFECT.FROZEN], tags: [TAGS.CC, TAGS.PENETRATE] },
    { name: "Freeze Ray", nameCn: "冰冻射线", row: "FREEZE", col: "LASER_H", img: "ball_icon_freeze_ray.png", effectCn: "发射一道激光，冻结路径上的敌人。",
      damageTypes: [DAMAGE_TYPE.ICE, DAMAGE_TYPE.LASER], statusEffects: [STATUS_EFFECT.FROZEN], aoeType: AOE_TYPE.LASER_H, tags: [TAGS.CC, TAGS.AOE, TAGS.PENETRATE] },
    { name: "Blizzard", nameCn: "暴风雪", row: "FREEZE", col: "WIND", img: "ball_icon_blizzard.png", effectCn: "在小范围内冻结所有敌人，并造成伤害。", alt: true,
      damageTypes: [DAMAGE_TYPE.ICE, DAMAGE_TYPE.WIND], statusEffects: [STATUS_EFFECT.FROZEN], aoeType: AOE_TYPE.AURA, tags: [TAGS.CC, TAGS.AOE] },
    { name: "Soul Sucker", nameCn: "灵魂吸取者", row: "GHOST", col: "VAMPIRE", img: "ball_icon_soul_sucker.png", effectCn: "直接从敌人身上吸取灵魂，造成伤害并为你恢复生命值。",
      damageTypes: [DAMAGE_TYPE.GHOST, DAMAGE_TYPE.VAMPIRE], tags: [TAGS.LIFESTEAL, TAGS.PENETRATE] },
    { name: "Holy Laser", nameCn: "神圣激光", row: "LASER_V", col: "LASER_H", img: "ball_icon_holy_laser.png", effectCn: "对同一行和同一列的所有敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.LASER, DAMAGE_TYPE.LIGHT], aoeType: AOE_TYPE.LASER_CROSS, tags: [TAGS.AOE, TAGS.PENETRATE] },
    { name: "Laser Beam", nameCn: "激光束", row: "LASER_H", col: "LIGHT", img: "ball_icon_laser_beam.png", effectCn: "强化激光，使其更粗、伤害更高，并能点燃敌人造成持续伤害。",
      damageTypes: [DAMAGE_TYPE.LASER, DAMAGE_TYPE.FIRE], statusEffects: [STATUS_EFFECT.BURN], aoeType: AOE_TYPE.LASER_H, tags: [TAGS.AOE, TAGS.DOT, TAGS.PENETRATE] },
    { name: "Flash", nameCn: "闪光", row: "LIGHT", col: "LIGHTNING", img: "ball_icon_flash.png", effectCn: "以闪电般的速度移动和攻击。",
      damageTypes: [DAMAGE_TYPE.LIGHT, DAMAGE_TYPE.LIGHTNING], tags: [TAGS.MULTI_HIT] },
    { name: "Lightning Rod", nameCn: "避雷针", row: "LIGHTNING", col: "IRON", img: "ball_pit_lightning_rod.png", effectCn: "在击中点形成一个避雷针，持续吸引闪电攻击周围的敌人。",
      damageTypes: [DAMAGE_TYPE.LIGHTNING], statusEffects: [STATUS_EFFECT.LIGHTNING_ROD], aoeType: AOE_TYPE.LIGHTNING, tags: [TAGS.AOE, TAGS.MULTI_HIT] },
    { name: "Storm", nameCn: "风暴", row: "LIGHTNING", col: "WIND", img: "ball_icon_storm.png", effectCn: "释放闪电攻击附近的敌人。",
      damageTypes: [DAMAGE_TYPE.LIGHTNING, DAMAGE_TYPE.WIND], aoeType: AOE_TYPE.LIGHTNING, tags: [TAGS.AOE, TAGS.MULTI_HIT] },
    { name: "Mosquito Swarm", nameCn: "蚊群", row: "VAMPIRE", col: "EGG_SAC", img: "ball_icon_mosquito_swarm_erfffn.png", effectCn: "击中时爆裂成多只蚊子。",
      damageTypes: [DAMAGE_TYPE.VAMPIRE], tags: [TAGS.SUMMON, TAGS.LIFESTEAL, TAGS.MULTI_HIT] },
    { name: "Voluptuous Egg Sac", nameCn: "丰满卵囊", row: "EGG_SAC", col: "CELL", img: "ball_icon_voluptuous_egg_sac.png", effectCn: "爆裂成多个卵囊。",
      damageTypes: [DAMAGE_TYPE.NORMAL], tags: [TAGS.SUMMON, TAGS.MULTI_HIT] }
  ],

  // ==================== 高级进化 ====================
  // components 数组包含所需的进化球名称
  advancedEvolutions: [
    { name: "Nuclear Bomb", nameCn: "核弹", components: ["Bomb", "Poison"], img: "ball_icon_nuclear_bomb.png", effectCn: "制造一场巨大的核爆，对全屏敌人造成高额初始伤害，并在后续留下强烈的辐射区域持续造成伤害。",
      damageTypes: [DAMAGE_TYPE.BOMB, DAMAGE_TYPE.POISON], statusEffects: [STATUS_EFFECT.RADIATION], aoeType: AOE_TYPE.NUKE, tags: [TAGS.AOE, TAGS.DOT] },
    { name: "Black Hole", nameCn: "黑洞", components: ["Sun", "Dark"], img: "ball_icon_black_hole.png", effectCn: "在屏幕上创建一个强大的引力奇点，将周围的敌人和投射物全部吸入并湮灭。",
      damageTypes: [DAMAGE_TYPE.DARK], aoeType: AOE_TYPE.AURA, tags: [TAGS.AOE, TAGS.CC] },
    { name: "Satan", nameCn: "撒旦", components: ["Incubus", "Succubus"], img: "ball_icon_satan.png", effectCn: "召唤恶魔之王撒旦，同时拥有梦魇的控制和魅魔的吸取能力，是战场上的终极主宰。",
      damageTypes: [DAMAGE_TYPE.CHARM, DAMAGE_TYPE.DARK, DAMAGE_TYPE.VAMPIRE], statusEffects: [STATUS_EFFECT.CHARM], tags: [TAGS.CC, TAGS.LIFESTEAL] },
    { name: "Nosferatu", nameCn: "诺斯费拉图", components: ["Vampire Lord", "Mosquito King", "Spider Queen"], img: "ball_icon_nosferatu.png", effectCn: "吸血鬼、蚊子和蜘蛛的终极融合体，拥有无与伦比的生命汲取能力和仆从大军，是真正的不死君王。",
      damageTypes: [DAMAGE_TYPE.VAMPIRE, DAMAGE_TYPE.BLEED], statusEffects: [STATUS_EFFECT.BLEED], tags: [TAGS.LIFESTEAL, TAGS.SUMMON, TAGS.DOT] }
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

// 导出类型定义供其他模块使用
if (typeof window !== 'undefined') {
  window.DAMAGE_TYPE = DAMAGE_TYPE;
  window.STATUS_EFFECT = STATUS_EFFECT;
  window.AOE_TYPE = AOE_TYPE;
  window.TAGS = TAGS;
}
