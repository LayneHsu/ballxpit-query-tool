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
  BURN: { id: "kBurn", name: "Burn", nameCn: "燃烧", icon: "🔥", desc: "Deals fire damage over time", descCn: "持续火焰伤害" },
  FROZEN: { id: "kFrozen", name: "Frozen", nameCn: "冰冻", icon: "🧊", desc: "Unable to move or attack", descCn: "无法移动和攻击" },
  POISON: { id: "kPoison", name: "Poison", nameCn: "中毒", icon: "☠️", desc: "Deals poison damage over time", descCn: "持续毒素伤害" },
  BLEED: { id: "kBleed", name: "Bleed", nameCn: "流血", icon: "🩸", desc: "Deals bleed damage over time, stackable", descCn: "持续流血伤害, 可叠加" },
  LIGHTNING_ROD: { id: "kLightningRod", name: "Lightning Rod", nameCn: "避雷针", icon: "🗼", desc: "Attracts lightning attacks", descCn: "吸引闪电攻击" },
  LEECH: { id: "kLeech", name: "Leech", nameCn: "水蛭", icon: "🪱", desc: "Attaches and deals continuous damage", descCn: "附着并持续伤害" },
  DISEASE: { id: "kDisease", name: "Disease", nameCn: "疾病", icon: "🦠", desc: "Reduces healing and deals damage over time", descCn: "减少治疗并持续伤害" },
  SLOW: { id: "kSlow", name: "Slow", nameCn: "减速", icon: "🐌", desc: "Reduces movement speed", descCn: "降低移动速度" },
  CHARM: { id: "kCharm", name: "Charm", nameCn: "魅惑", icon: "💕", desc: "Stops attacking or attacks allies", descCn: "停止攻击或攻击友方" },
  BERSERK: { id: "kBerserk", name: "Berserk", nameCn: "狂暴", icon: "😤", desc: "Attacks allies with increased damage", descCn: "攻击友方, 伤害增加" },
  BLIND: { id: "kBlind", name: "Blind", nameCn: "致盲", icon: "😵", desc: "Reduces accuracy", descCn: "降低命中率" },
  CURSE: { id: "kCurse", name: "Curse", nameCn: "诅咒", icon: "💜", desc: "Deals massive damage after several hits", descCn: "数次攻击后造成大量伤害" },
  MAGGOT: { id: "kMaggot", name: "Maggot", nameCn: "蛆虫", icon: "🪱", desc: "Spawns small balls on death", descCn: "死亡时生成小球" },
  FROSTBURN: { id: "kFrostburn", name: "Frostburn", nameCn: "冰火", icon: "🌡️", desc: "Deals both ice and fire damage over time", descCn: "冰火双重持续伤害" },
  RADIATION: { id: "kRadiation", name: "Radiation", nameCn: "辐射", icon: "☢️", desc: "Deals radiation damage over time, stackable", descCn: "持续辐射伤害, 可叠加" },
  LOVESTRUCK: { id: "kLovestruck", name: "Lovestruck", nameCn: "热恋", icon: "💘", desc: "Stops attacking and reduces defense", descCn: "停止攻击并降低防御" },
  OVERGROWTH: { id: "kOvergrowth", name: "Overgrowth", nameCn: "过度生长", icon: "🌿", desc: "Thorns deal continuous damage", descCn: "荆棘缠绕持续伤害" }
};

// ==================== 范围攻击类型定义 ====================
const AOE_TYPE = {
  LIGHTNING: { id: "kLightning", name: "Chain", nameCn: "连锁", icon: "⚡", desc: "Bounces to multiple enemies", descCn: "弹射到多个敌人" },
  LASER_H: { id: "kLaserHorz", name: "H-Laser", nameCn: "横向激光", icon: "➡️", desc: "Pierces enemies in the same row", descCn: "穿透同行敌人" },
  LASER_V: { id: "kLaserVert", name: "V-Laser", nameCn: "纵向激光", icon: "⬇️", desc: "Pierces enemies in the same column", descCn: "穿透同列敌人" },
  LASER_CROSS: { id: "kLaserCross", name: "Cross", nameCn: "十字激光", icon: "✚", desc: "Pierces enemies in both row and column", descCn: "穿透同行同列敌人" },
  BOMB: { id: "kBomb", name: "Explosion", nameCn: "爆炸", icon: "💥", desc: "Area explosion damage", descCn: "范围爆炸伤害" },
  EARTHQUAKE: { id: "kEarthquake", name: "Quake", nameCn: "地震", icon: "🌋", desc: "Ground shockwave in area", descCn: "范围地面冲击" },
  AURA: { id: "kAura", name: "Aura", nameCn: "光环", icon: "🔆", desc: "Continuous area effect", descCn: "持续范围效果" },
  NUKE: { id: "kNuke", name: "Nuclear", nameCn: "核爆", icon: "☢️", desc: "Full screen damage + radiation", descCn: "全屏伤害+辐射" },
  FLASH: { id: "kFlash", name: "Flash", nameCn: "闪光", icon: "💫", desc: "Instant full screen damage", descCn: "全屏瞬间伤害" }
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

// ==================== 策略协同类型定义 ====================
const SYNERGY_TYPE = {
  DAMAGE_AMP: { id: "dmgAmp", name: "Damage Amplify", nameCn: "增伤", color: "#e74c3c" },
  SUSTAIN: { id: "sustain", name: "Sustain", nameCn: "续航", color: "#27ae60" },
  CONTROL: { id: "control", name: "Control", nameCn: "控制", color: "#3498db" },
  AOE_COMBO: { id: "aoeCombo", name: "AoE Combo", nameCn: "范围联动", color: "#f39c12" },
  DOT_STACK: { id: "dotStack", name: "DoT Stack", nameCn: "持续叠加", color: "#9b59b6" },
  SUMMON_ARMY: { id: "summonArmy", name: "Summon Army", nameCn: "召唤流", color: "#1abc9c" }
};

// ==================== 策略组合推荐 ====================
const STRATEGIES = [
  {
    id: "bleed_burst",
    name: "Bleed Burst",
    nameCn: "流血爆发",
    type: SYNERGY_TYPE.DOT_STACK,
    difficulty: 2,
    rating: 5,
    core: ["BLEED", "Hemorrhage"],
    synergy: ["Vampire Lord", "Sacrifice", "Leech"],
    desc: "Stack bleed to 15, then use Hemorrhage to deal % current HP damage.",
    descCn: "堆叠流血至15层, 然后使用出血症造成当前生命百分比伤害。",
    mechanism: [
      { ball: "Bleed", role: "Core stacker", roleCn: "核心叠层" },
      { ball: "Hemorrhage", role: "Burst finisher", roleCn: "爆发收割" },
      { ball: "Vampire Lord", role: "Sustain + stack", roleCn: "续航+叠层" }
    ]
  },
  {
    id: "freeze_nuke",
    name: "Freeze & Nuke",
    nameCn: "冰冻核爆",
    type: SYNERGY_TYPE.DAMAGE_AMP,
    difficulty: 2,
    rating: 5,
    core: ["FREEZE", "Nuclear Bomb"],
    synergy: ["Frozen Flame", "Blizzard", "Glacier"],
    desc: "Frozen enemies take 25% more damage. Radiation stacks further amplify damage.",
    descCn: "冰冻的敌人受到25%额外伤害, 辐射层数进一步增幅伤害。",
    mechanism: [
      { ball: "Freeze", role: "+25% damage taken", roleCn: "增伤25%" },
      { ball: "Nuclear Bomb", role: "Massive AoE + Radiation", roleCn: "大范围+辐射" },
      { ball: "Frozen Flame", role: "Frostburn DoT + amp", roleCn: "霜焰+增伤" }
    ]
  },
  {
    id: "sun_satan",
    name: "Hellfire",
    nameCn: "地狱烈焰",
    type: SYNERGY_TYPE.AOE_COMBO,
    difficulty: 3,
    rating: 5,
    core: ["Sun", "Satan"],
    synergy: ["BURN", "Inferno", "Berserk"],
    desc: "Sun blinds all enemies, Satan makes them berserk and burn. Enemies kill each other.",
    descCn: "太阳致盲所有敌人, 撒旦使其狂暴并燃烧, 敌人互相残杀。",
    mechanism: [
      { ball: "Sun", role: "Global blind + burn", roleCn: "全屏致盲+燃烧" },
      { ball: "Satan", role: "Global burn + berserk", roleCn: "全屏燃烧+狂暴" },
      { ball: "Berserk", role: "Make enemies fight", roleCn: "敌人互攻" }
    ]
  },
  {
    id: "vampire_sustain",
    name: "Eternal Life",
    nameCn: "永生不灭",
    type: SYNERGY_TYPE.SUSTAIN,
    difficulty: 1,
    rating: 4,
    core: ["VAMPIRE", "Vampire Lord"],
    synergy: ["Succubus", "Mosquito King", "Soul Sucker"],
    desc: "Multiple lifesteal sources ensure you never die.",
    descCn: "多重吸血来源确保永不死亡。",
    mechanism: [
      { ball: "Vampire", role: "Basic lifesteal", roleCn: "基础吸血" },
      { ball: "Vampire Lord", role: "Bleed + heal burst", roleCn: "流血+爆发回复" },
      { ball: "Succubus", role: "Charm + heal", roleCn: "魅惑+回复" }
    ]
  },
  {
    id: "spider_army",
    name: "Spider Army",
    nameCn: "蜘蛛大军",
    type: SYNERGY_TYPE.SUMMON_ARMY,
    difficulty: 2,
    rating: 4,
    core: ["BROOD_MOTHER", "Spider Queen"],
    synergy: ["EGG_SAC", "Maggot", "CELL"],
    desc: "Spawn endless baby balls and egg sacs to overwhelm enemies.",
    descCn: "无限生成小球和卵囊淹没敌人。",
    mechanism: [
      { ball: "Brood Mother", role: "Spawn babies", roleCn: "产生小球" },
      { ball: "Spider Queen", role: "Spawn egg sacs", roleCn: "产生卵囊" },
      { ball: "Maggot", role: "Death explosion", roleCn: "死亡爆炸" }
    ]
  },
  {
    id: "cc_chain",
    name: "CC Chain",
    nameCn: "控制链",
    type: SYNERGY_TYPE.CONTROL,
    difficulty: 2,
    rating: 4,
    core: ["FREEZE", "CHARM"],
    synergy: ["LIGHT", "Lovestruck", "Succubus"],
    desc: "Keep enemies permanently disabled with overlapping CC effects.",
    descCn: "通过叠加控制效果使敌人永久失能。",
    mechanism: [
      { ball: "Freeze", role: "Hard CC + amp", roleCn: "硬控+增伤" },
      { ball: "Charm", role: "Make allies", roleCn: "转化友军" },
      { ball: "Light", role: "50% miss chance", roleCn: "50%闪避" }
    ]
  },
  {
    id: "lightning_storm",
    name: "Lightning Storm",
    nameCn: "雷霆风暴",
    type: SYNERGY_TYPE.AOE_COMBO,
    difficulty: 2,
    rating: 4,
    core: ["LIGHTNING", "Storm"],
    synergy: ["Lightning Rod", "Flash"],
    desc: "Chain lightning bounces between enemies. Storm provides continuous AoE damage.",
    descCn: "连锁闪电在敌人之间弹射, 风暴提供持续范围伤害。",
    mechanism: [
      { ball: "Lightning", role: "Chain damage", roleCn: "连锁伤害" },
      { ball: "Storm", role: "AoE + Lightning", roleCn: "范围+闪电" },
      { ball: "Lightning Rod", role: "Attract lightning", roleCn: "吸引闪电" }
    ]
  },
  {
    id: "poison_swamp",
    name: "Toxic Swamp",
    nameCn: "毒沼地狱",
    type: SYNERGY_TYPE.DOT_STACK,
    difficulty: 2,
    rating: 4,
    core: ["POISON", "Swamp"],
    synergy: ["Noxious", "Virus"],
    desc: "Poison stacks deal continuous damage. Swamp leaves toxic tar that slows and poisons.",
    descCn: "毒素层数持续伤害, 沼泽留下毒焦油减速并中毒。",
    mechanism: [
      { ball: "Poison", role: "Stack poison", roleCn: "叠加毒素" },
      { ball: "Swamp", role: "Tar + slow + poison", roleCn: "焦油+减速+中毒" },
      { ball: "Noxious", role: "Enhanced poison", roleCn: "强化中毒" }
    ]
  }
];

const GAME_DATA = {
  // ==================== 基础球 ====================
  baseBalls: [
    { id: "BLEED", name: "Bleed", nameCn: "放血", img: "ball_icon_bleed.png",
      effect: "Inflicts stacks of bleed. Bleeding enemies receive 1 damage per stack when hit by a ball (Max 15 stacks).",
      effectCn: "施加流血层数。每层流血将使敌人在受到弹珠攻击时额外承受1点伤害（最高15层）。",
      damageType: DAMAGE_TYPE.BLEED, statusEffects: [STATUS_EFFECT.BLEED], tags: [TAGS.DOT] },
    { id: "BROOD_MOTHER", name: "Brood Mother", nameCn: "育母", img: "ball_icon_brood_mother.png",
      effect: "Has a chance of birthing a baby ball each time it hits an enemy.",
      effectCn: "每次命中敌人时有一定几率创造1颗迷你弹珠。",
      damageType: DAMAGE_TYPE.NORMAL, tags: [TAGS.SUMMON] },
    { id: "BURN", name: "Burn", nameCn: "燃烧", img: "ball_icon_burn.png",
      effect: "Add 1 stack of burn on hit (max 4 stacks). Burnt units are dealt damage per stack per second.",
      effectCn: "命中时施加1层燃烧（最高4层）。每层燃烧每秒造成伤害。",
      damageType: DAMAGE_TYPE.FIRE, statusEffects: [STATUS_EFFECT.BURN], tags: [TAGS.DOT] },
    { id: "CELL", name: "Cell", nameCn: "细胞", img: "ball_icon_cell.png",
      effect: "Splits into a clone on hit several times.",
      effectCn: "命中后分裂出1颗相同的弹珠，可多次分裂。",
      damageType: DAMAGE_TYPE.NORMAL, tags: [TAGS.SUMMON] },
    { id: "CHARM", name: "Charm", nameCn: "魅惑", img: "ball_icon_charm.png",
      effect: "Each hit has a chance of charming the enemy for several seconds. Charmed units walk up the board and attack enemies.",
      effectCn: "每次命中时有一定几率魅惑敌人。被魅惑的单位将会转而向上方移动并攻击其他敌人。",
      damageType: DAMAGE_TYPE.CHARM, statusEffects: [STATUS_EFFECT.CHARM], tags: [TAGS.CC, TAGS.DEBUFF] },
    { id: "DARK", name: "Dark", nameCn: "黑暗", img: "ball_icon_dark.png",
      effect: "Deals double damage but destroys itself after hitting an enemy. Has a cooldown before it can be shot again.",
      effectCn: "造成双倍伤害，但是在命中敌人后将自毁。每次发射后需要等待冷却时间。",
      damageType: DAMAGE_TYPE.DARK, statusEffects: [STATUS_EFFECT.CURSE], tags: [TAGS.DEBUFF] },
    { id: "EARTHQUAKE", name: "Earthquake", nameCn: "地震", img: "ball_icon_earthquake.png",
      effect: "Deals area ground impact and damage.",
      effectCn: "对一定范围内的单位造成伤害。",
      damageType: DAMAGE_TYPE.EARTHQUAKE, aoeType: AOE_TYPE.EARTHQUAKE, tags: [TAGS.AOE] },
    { id: "EGG_SAC", name: "Egg Sac", nameCn: "巢囊", img: "ball_icon_egg_sac.png",
      effect: "Explodes into several baby balls on hitting an enemy. Has a cooldown before it can be shot again.",
      effectCn: "命中敌人时分裂出多颗迷你弹珠。每次发射后需要等待冷却时间。",
      damageType: DAMAGE_TYPE.NORMAL, tags: [TAGS.SUMMON, TAGS.MULTI_HIT] },
    { id: "FREEZE", name: "Freeze", nameCn: "冰冻", img: "ball_icon_freeze.png",
      effect: "Has a chance to freeze enemies for several seconds. Frozen enemies receive 25% more damage.",
      effectCn: "有一定几率冰冻敌人。被冰冻的敌人将额外承受25%伤害。",
      damageType: DAMAGE_TYPE.ICE, statusEffects: [STATUS_EFFECT.FROZEN, STATUS_EFFECT.SLOW], tags: [TAGS.CC] },
    { id: "GHOST", name: "Ghost", nameCn: "幽灵", img: "ball_icon_ghost.png",
      effect: "Passes through enemies.",
      effectCn: "穿过敌人。",
      damageType: DAMAGE_TYPE.GHOST, tags: [TAGS.PENETRATE] },
    { id: "IRON", name: "Iron", nameCn: "黑铁", img: "ball_icon_iron.png",
      effect: "Deals double damage but moves slower.",
      effectCn: "造成双倍伤害，但是移动速度较慢。",
      damageType: DAMAGE_TYPE.NORMAL, tags: [TAGS.PENETRATE] },
    { id: "LASER_H", name: "Laser H", nameCn: "激光(横)", img: "ball_icon_laser_horizontal.png",
      effect: "Fires a straight laser that penetrates all enemies in its path.",
      effectCn: "发射一道直线激光，穿透路径上的所有敌人。",
      damageType: DAMAGE_TYPE.LASER, aoeType: AOE_TYPE.LASER_H, tags: [TAGS.AOE, TAGS.PENETRATE] },
    { id: "LASER_V", name: "Laser V", nameCn: "激光(竖)", img: "ball_icon_laser_vertical.png",
      effect: "Fires a straight laser that penetrates all enemies in its path.",
      effectCn: "发射一道直线激光，穿透路径上的所有敌人。",
      damageType: DAMAGE_TYPE.LASER, aoeType: AOE_TYPE.LASER_V, tags: [TAGS.AOE, TAGS.PENETRATE] },
    { id: "LIGHT", name: "Light", nameCn: "光明", img: "ball_icon_light.png",
      effect: "Blinds enemies on hit for several seconds. Blinded units have a hard time detecting you and have a 50% chance of missing when they attack.",
      effectCn: "命中时使敌人致盲。致盲的敌人将难以察觉到你的存在，并且攻击时有50%几率失手。",
      damageType: DAMAGE_TYPE.LIGHT, statusEffects: [STATUS_EFFECT.BLIND], tags: [TAGS.DEBUFF] },
    { id: "LIGHTNING", name: "Lightning", nameCn: "闪电", img: "ball_icon_lightning.png",
      effect: "Deals damage to up to 3 nearby enemies.",
      effectCn: "对附近至多3名敌人造成伤害。",
      damageType: DAMAGE_TYPE.LIGHTNING, aoeType: AOE_TYPE.LIGHTNING, tags: [TAGS.AOE, TAGS.MULTI_HIT] },
    { id: "POISON", name: "Poison", nameCn: "中毒", img: "ball_icon_poison.png",
      effect: "Applies 1 stack of poison on hit (max 5 stacks). Each stack deals damage per second.",
      effectCn: "命中时施加1层中毒（最高5层）。每层中毒每秒造成伤害。",
      damageType: DAMAGE_TYPE.POISON, statusEffects: [STATUS_EFFECT.POISON], tags: [TAGS.DOT] },
    { id: "VAMPIRE", name: "Vampire", nameCn: "吸血鬼", img: "ball_icon_vampire.png",
      effect: "Each hit has a chance of healing health.",
      effectCn: "每次命中时有一定几率恢复生命值。",
      damageType: DAMAGE_TYPE.VAMPIRE, tags: [TAGS.LIFESTEAL] },
    { id: "WIND", name: "Wind", nameCn: "疾风", img: "ball_icon_wind.png",
      effect: "Passes through enemies and slows them down, but deals 25% less damage.",
      effectCn: "穿过敌人并使其减速，但仅造成75%伤害。",
      damageType: DAMAGE_TYPE.WIND, tags: [TAGS.CC, TAGS.AOE] }
  ],

  // ==================== 基础进化 ====================
  // row 和 col 对应基础球的 id, alt 表示有替代配方
  evolutions: [
    { name: "Leech", nameCn: "吸血水蛭", row: "BLEED", col: "BROOD_MOTHER", img: "ball_icon_leech.png",
      effect: "Attaches up to 1 leech onto enemies it hits, which adds stacks of bleed per second (Max 15 stacks).",
      effectCn: "命中时对敌人施加至多1层吸血水蛭，吸血水蛭每秒施加流血层数（最高15层）。",
      damageTypes: [DAMAGE_TYPE.BLEED], statusEffects: [STATUS_EFFECT.LEECH, STATUS_EFFECT.BLEED], tags: [TAGS.DOT] },
    { name: "Berserk", nameCn: "狂暴", row: "CHARM", col: "BLEED", img: "ball_icon_berserk.png",
      effect: "Each hit has a chance of causing enemies to go berserk. Berserk enemies deal damage to adjacent enemies every second.",
      effectCn: "每次命中有一定几率使敌人狂暴。狂暴的敌人将对毗邻的其他敌人造成伤害。", alt: true,
      damageTypes: [DAMAGE_TYPE.CHARM], statusEffects: [STATUS_EFFECT.BERSERK], tags: [TAGS.CC, TAGS.DEBUFF] },
    { name: "Berserk", nameCn: "狂暴", row: "CHARM", col: "BURN", img: "ball_icon_berserk.png",
      effect: "Each hit has a chance of causing enemies to go berserk. Berserk enemies deal damage to adjacent enemies every second.",
      effectCn: "每次命中有一定几率使敌人狂暴。狂暴的敌人将对毗邻的其他敌人造成伤害。", alt: true,
      damageTypes: [DAMAGE_TYPE.CHARM], statusEffects: [STATUS_EFFECT.BERSERK], tags: [TAGS.CC, TAGS.DEBUFF] },
    { name: "Sacrifice", nameCn: "活祭", row: "BLEED", col: "DARK", img: "ball_icon_sacrifice.png",
      effect: "Inflicts stacks of bleed and applies curse to hit enemies. Cursed enemies are dealt massive damage after being hit several times.",
      effectCn: "命中时施加流血层数以及诅咒。被诅咒的敌人在受到多次攻击后将承受大量伤害。",
      damageTypes: [DAMAGE_TYPE.BLEED, DAMAGE_TYPE.DARK], statusEffects: [STATUS_EFFECT.BLEED, STATUS_EFFECT.CURSE], tags: [TAGS.DOT, TAGS.DEBUFF] },
    { name: "Hemorrhage", nameCn: "血流如注", row: "BLEED", col: "IRON", img: "ball_icon_hemorrhage.png",
      effect: "Inflicts stacks of bleed. When hitting an enemy with max stacks of bleed, consumes all stacks to deal percentage of their current health.",
      effectCn: "施加流血层数。如果敌人身上的流血效果已达上限，击中敌人时将消耗所有流血层数，并造成等同于敌人最大生命值一定百分比的伤害。",
      damageTypes: [DAMAGE_TYPE.BLEED], statusEffects: [STATUS_EFFECT.BLEED], tags: [TAGS.DOT, TAGS.PENETRATE] },
    { name: "Vampire Lord", nameCn: "吸血鬼领主", row: "BLEED", col: "VAMPIRE", img: "ball_icon_vampire_lord.png",
      effect: "Each hit inflicts stacks of bleed. Heals health and consumes all stacks when hitting an enemy with enough bleed stacks.",
      effectCn: "每次命中时施加流血层数。如果敌人身上有足够的流血效果，击中敌人时将消耗所有流血层数，并为你恢复生命值。",
      damageTypes: [DAMAGE_TYPE.VAMPIRE, DAMAGE_TYPE.BLEED], statusEffects: [STATUS_EFFECT.BLEED], tags: [TAGS.LIFESTEAL, TAGS.DOT, TAGS.SUMMON] },
    { name: "Maggot", nameCn: "蛆虫", row: "BROOD_MOTHER", col: "CELL", img: "ball_icon_maggot.png",
      effect: "Infest enemies on hit with maggots. When they die, they explode into baby balls.",
      effectCn: "命中时将使敌人被蛆虫缠身。这些敌人死亡时将会分裂出多颗迷你弹珠。",
      damageTypes: [DAMAGE_TYPE.NORMAL], statusEffects: [STATUS_EFFECT.MAGGOT], tags: [TAGS.SUMMON] },
    { name: "Spider Queen", nameCn: "蜘蛛女皇", row: "BROOD_MOTHER", col: "EGG_SAC", img: "ball_icon_spider_queen.png",
      effect: "Has a chance of birthing an Egg Sac each time it hits an enemy.",
      effectCn: "每次命中敌人时有一定几率创造1颗巢囊。",
      damageTypes: [DAMAGE_TYPE.NORMAL], tags: [TAGS.SUMMON] },
    { name: "Mosquito Swarm", nameCn: "蚊群", row: "BROOD_MOTHER", col: "VAMPIRE", img: "ball_icon_mosquito_king.png",
      effect: "Spawns a mosquito each time it hits an enemy. Mosquitos attack random enemies. If a mosquito kills an enemy, it steals health.",
      effectCn: "每次命中敌人时生成1只蚊子。蚊子将会对随机敌人发起攻击。如果蚊子成功杀死敌人，它们将能够为你窃取生命值。",
      damageTypes: [DAMAGE_TYPE.VAMPIRE], tags: [TAGS.SUMMON, TAGS.LIFESTEAL] },
    { name: "Magma", nameCn: "岩浆", row: "BURN", col: "EARTHQUAKE", img: "ball_icon_magma.png",
      effect: "Emits lava blobs periodically, dealing damage and applying up to 4 stacks of burn.",
      effectCn: "持续释放岩浆池。经过岩浆池的敌人将承受伤害以及燃烧效果。此弹珠与释放的岩浆池在命中时还会对周遭敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.FIRE, DAMAGE_TYPE.EARTHQUAKE], statusEffects: [STATUS_EFFECT.BURN], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Frozen Flame", nameCn: "冰霜之焰", row: "BURN", col: "FREEZE", img: "ball_icon_frozen_flame.png",
      effect: "Add 1 stack of frostburn on hit (max 4 stacks). Frostburnt units take damage per stack per second and receive 25% more damage.",
      effectCn: "命中时施加1层霜燃（最高4层）。每层霜燃每秒造成伤害，并使目标敌人承受的其他伤害提高25%。",
      damageTypes: [DAMAGE_TYPE.FIRE, DAMAGE_TYPE.ICE], statusEffects: [STATUS_EFFECT.BURN, STATUS_EFFECT.FROZEN, STATUS_EFFECT.FROSTBURN], tags: [TAGS.DOT, TAGS.CC] },
    { name: "Bomb", nameCn: "炸弹", row: "BURN", col: "IRON", img: "ball_icon_bomb.png",
      effect: "Explodes when hitting an enemy, dealing damage to nearby enemies. Has a cooldown before it can be shot again.",
      effectCn: "命中敌人时爆炸，对周遭敌人造成伤害。每次发射后需要等待冷却时间。",
      damageTypes: [DAMAGE_TYPE.BOMB], aoeType: AOE_TYPE.BOMB, tags: [TAGS.AOE] },
    { name: "Sun", nameCn: "太阳", row: "BURN", col: "LIGHT", img: "ball_icon_sun.png",
      effect: "Blind all enemies in view and add 1 stack of burn every second (max 4 stacks).",
      effectCn: "致盲视野内的所有敌人并每秒施加1层燃烧（最高4层）。",
      damageTypes: [DAMAGE_TYPE.FIRE, DAMAGE_TYPE.LIGHT], statusEffects: [STATUS_EFFECT.BURN], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Inferno", nameCn: "炼狱", row: "BURN", col: "WIND", img: "ball_icon_inferno.png",
      effect: "Applies 1 stack of burn every second to all enemies within a certain tile radius.",
      effectCn: "每秒对一定范围内的敌人施加1层燃烧。",
      damageTypes: [DAMAGE_TYPE.FIRE, DAMAGE_TYPE.WIND], statusEffects: [STATUS_EFFECT.BURN], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Overgrowth", nameCn: "蔓延", row: "CELL", col: "EARTHQUAKE", img: "ball_icon_overgrowth.png",
      effect: "Applies 1 stack of overgrowth. Upon reaching max stacks, consume all stacks and deal damage to all enemies in a large area.",
      effectCn: "施加1层蔓延。堆叠达到上限后，消耗所有层数并对一定范围内的所有敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.EARTHQUAKE], statusEffects: [STATUS_EFFECT.OVERGROWTH], aoeType: AOE_TYPE.EARTHQUAKE, tags: [TAGS.AOE, TAGS.DOT] },
    { name: "Radiation Beam", nameCn: "辐射光束", row: "CELL", col: "LASER_H", img: "ball_icon_radiation_beam.png",
      effect: "Emits a radiation beam that deals radiation damage over time.", alt: true,
      effectCn: "激光束会造成辐射伤害。",
      damageTypes: [DAMAGE_TYPE.LASER], statusEffects: [STATUS_EFFECT.RADIATION], aoeType: AOE_TYPE.LASER_H, tags: [TAGS.AOE, TAGS.DOT, TAGS.PENETRATE] },
    { name: "Virus", nameCn: "病毒", row: "CELL", col: "POISON", img: "ball_icon_virus.png",
      effect: "Applies 1 stack of disease to units it hits. Disease deals damage per second and diseased units have a chance of passing a stack to nearby enemies.", alt: true,
      effectCn: "命中时施加1层瘟疫。每层瘟疫每秒造成伤害，承受瘟疫的敌人有几率向周遭的健康敌人传染瘟疫。",
      damageTypes: [DAMAGE_TYPE.POISON], statusEffects: [STATUS_EFFECT.DISEASE], tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Incubus", nameCn: "梦淫妖", row: "CHARM", col: "DARK", img: "ball_icon_incubus.png",
      effect: "Each hit has a chance of charming the enemy. Charmed enemies curse nearby enemies. Cursed enemies take damage after being hit several times.",
      effectCn: "每次命中时有一定几率魅惑敌人。被魅惑的敌人将诅咒周遭的敌人。被诅咒的敌人在受到多次攻击后将承受伤害。",
      damageTypes: [DAMAGE_TYPE.CHARM, DAMAGE_TYPE.DARK], statusEffects: [STATUS_EFFECT.CHARM], tags: [TAGS.CC] },
    { name: "Lovestruck", nameCn: "热恋", row: "CHARM", col: "LIGHT", img: "ball_icon_lovestruck.png",
      effect: "Inflicts lovestruck on hit enemies. Lovestruck units have a 50% chance of healing you when they attack.", alt: true,
      effectCn: "对命中的敌人施加热恋。陷入热恋的单位在发起攻击时将有50%几率转而为你恢复生命值。",
      damageTypes: [DAMAGE_TYPE.CHARM, DAMAGE_TYPE.LIGHT], statusEffects: [STATUS_EFFECT.LOVESTRUCK], tags: [TAGS.CC, TAGS.DEBUFF] },
    { name: "Succubus", nameCn: "魅魔", row: "CHARM", col: "VAMPIRE", img: "ball_icon_succubus.png",
      effect: "Each hit has a chance of charming the enemy. Heals health when hitting a charmed enemy.",
      effectCn: "每次命中时有一定几率魅惑敌人。命中被魅惑的敌人时恢复生命值。",
      damageTypes: [DAMAGE_TYPE.CHARM, DAMAGE_TYPE.VAMPIRE], statusEffects: [STATUS_EFFECT.CHARM], tags: [TAGS.CC, TAGS.LIFESTEAL] },
    { name: "Phantom", nameCn: "恶灵", row: "DARK", col: "GHOST", img: "ball_icon_phantom.png",
      effect: "Curse enemies on hit. Cursed enemies take damage after being hit several times.",
      effectCn: "命中时施加诅咒。被诅咒的敌人在受到多次攻击后将承受伤害。",
      damageTypes: [DAMAGE_TYPE.GHOST, DAMAGE_TYPE.DARK], tags: [TAGS.PENETRATE] },
    { name: "Assassin", nameCn: "刺客", row: "DARK", col: "IRON", img: "ball_icon_assassin.png",
      effect: "Passes through the front of enemies, but not the back. Backstabs deal bonus damage.", alt: true,
      effectCn: "从正面穿过敌人，但是不会穿过敌人的后背。背刺造成额外伤害。",
      damageTypes: [DAMAGE_TYPE.DARK, DAMAGE_TYPE.INSTANT_KILL], tags: [TAGS.EXECUTE] },
    { name: "Flicker", nameCn: "闪烁", row: "DARK", col: "LIGHT", img: "ball_icon_flicker.png",
      effect: "Deals damage to every enemy on screen every few seconds.",
      effectCn: "每隔数秒对场上的所有敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.DARK, DAMAGE_TYPE.LIGHT], aoeType: AOE_TYPE.FLASH, tags: [TAGS.AOE] },
    { name: "Noxious", nameCn: "毒云", row: "DARK", col: "WIND", img: "ball_icon_noxious.png",
      effect: "Passes through enemies and applies stacks of poison to nearby enemies within a certain tile radius.", alt: true,
      effectCn: "穿过敌人，并且对其周遭一定范围内的所有敌人施加多层中毒。",
      damageTypes: [DAMAGE_TYPE.POISON, DAMAGE_TYPE.WIND], statusEffects: [STATUS_EFFECT.POISON], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE] },
    { name: "Glacier", nameCn: "冰川", row: "EARTHQUAKE", col: "FREEZE", img: "ball_icon_glacier.png",
      effect: "Releases glacial spikes over time that deal damage to enemies and freeze them. Also deals area damage.",
      effectCn: "持续释放冰刺，对触碰冰刺的敌人造成伤害并施加冰冻。此弹珠与释放的冰刺还会对周遭敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.ICE, DAMAGE_TYPE.EARTHQUAKE], statusEffects: [STATUS_EFFECT.FROZEN], aoeType: AOE_TYPE.EARTHQUAKE, tags: [TAGS.CC, TAGS.AOE] },
    { name: "Swamp", nameCn: "沼泽", row: "EARTHQUAKE", col: "POISON", img: "ball_icon_swamp.png",
      effect: "Leaves behind tar blobs that slow and poison all enemies within.",
      effectCn: "将地面变为剧毒沼泽，减速并持续毒害其中的所有敌人。",
      damageTypes: [DAMAGE_TYPE.POISON, DAMAGE_TYPE.EARTHQUAKE], statusEffects: [STATUS_EFFECT.POISON, STATUS_EFFECT.SLOW], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.CC, TAGS.AOE] },
    { name: "Sandstorm", nameCn: "沙尘暴", row: "EARTHQUAKE", col: "WIND", img: "ball_icon_sandstorm.png",
      effect: "Goes through enemies, dealing massive damage per second while passing through.",
      effectCn: "穿过敌人时，每秒对敌人造成大量伤害。",
      damageTypes: [DAMAGE_TYPE.EARTHQUAKE, DAMAGE_TYPE.WIND], aoeType: AOE_TYPE.AURA, tags: [TAGS.DOT, TAGS.AOE, TAGS.PENETRATE] },
    { name: "Shotgun", nameCn: "霰弹枪", row: "IRON", col: "EGG_SAC", img: "ball_icon_shotgun.png",
      effect: "Shoots 3-7 iron baby balls as projectiles.",
      effectCn: "发射多个投射物。",
      damageTypes: [DAMAGE_TYPE.NORMAL], tags: [TAGS.MULTI_HIT] },
    { name: "Wraith", nameCn: "怨灵", row: "FREEZE", col: "GHOST", img: "ball_icon_wraith.png",
      effect: "Freezes any enemy it passes through.",
      effectCn: "穿过敌人时冰冻敌人。",
      damageTypes: [DAMAGE_TYPE.ICE, DAMAGE_TYPE.GHOST], statusEffects: [STATUS_EFFECT.FROZEN], tags: [TAGS.CC, TAGS.PENETRATE] },
    { name: "Freeze Ray", nameCn: "冰冻射线", row: "FREEZE", col: "LASER_H", img: "ball_icon_freeze_ray.png",
      effect: "Emits a freeze ray dealing 20-50 damage to all enemies in its path, with 10% chance to freeze for 10 seconds.",
      effectCn: "发射一道激光，冻结路径上的敌人。",
      damageTypes: [DAMAGE_TYPE.ICE, DAMAGE_TYPE.LASER], statusEffects: [STATUS_EFFECT.FROZEN], aoeType: AOE_TYPE.LASER_H, tags: [TAGS.CC, TAGS.AOE, TAGS.PENETRATE] },
    { name: "Blizzard", nameCn: "暴风雪", row: "FREEZE", col: "WIND", img: "ball_icon_blizzard.png",
      effect: "Freezes all enemies within a 2 tile radius for 0.8 seconds, dealing 1-50 damage.", alt: true,
      effectCn: "在小范围内冻结所有敌人，并造成伤害。",
      damageTypes: [DAMAGE_TYPE.ICE, DAMAGE_TYPE.WIND], statusEffects: [STATUS_EFFECT.FROZEN], aoeType: AOE_TYPE.AURA, tags: [TAGS.CC, TAGS.AOE] },
    { name: "Soul Sucker", nameCn: "吸魂妖", row: "GHOST", col: "VAMPIRE", img: "ball_icon_soul_sucker.png",
      effect: "Passes through enemies, directly draining their souls for damage and healing.",
      effectCn: "直接从敌人身上吸取灵魂，造成伤害并为你恢复生命值。",
      damageTypes: [DAMAGE_TYPE.GHOST, DAMAGE_TYPE.VAMPIRE], tags: [TAGS.LIFESTEAL, TAGS.PENETRATE] },
    { name: "Holy Laser", nameCn: "神圣激光", row: "LASER_V", col: "LASER_H", img: "ball_icon_holy_laser.png",
      effect: "Deals 24-36 damage to all enemies in the same row and column.",
      effectCn: "对同一行和同一列的所有敌人造成伤害。",
      damageTypes: [DAMAGE_TYPE.LASER, DAMAGE_TYPE.LIGHT], aoeType: AOE_TYPE.LASER_CROSS, tags: [TAGS.AOE, TAGS.PENETRATE] },
    { name: "Laser Beam", nameCn: "激光束", row: "LASER_H", col: "LIGHT", img: "ball_icon_laser_beam.png",
      effect: "Emits an enhanced laser beam that is wider, deals more damage, and ignites enemies.",
      effectCn: "强化激光，使其更粗、伤害更高，并能点燃敌人造成持续伤害。",
      damageTypes: [DAMAGE_TYPE.LASER, DAMAGE_TYPE.FIRE], statusEffects: [STATUS_EFFECT.BURN], aoeType: AOE_TYPE.LASER_H, tags: [TAGS.AOE, TAGS.DOT, TAGS.PENETRATE] },
    { name: "Flash", nameCn: "闪光", row: "LIGHT", col: "LIGHTNING", img: "ball_icon_flash.png",
      effect: "Damages all enemies on screen for 1-3 damage and blinds them for 2 seconds.",
      effectCn: "以闪电般的速度移动和攻击。",
      damageTypes: [DAMAGE_TYPE.LIGHT, DAMAGE_TYPE.LIGHTNING], tags: [TAGS.MULTI_HIT] },
    { name: "Lightning Rod", nameCn: "避雷针", row: "LIGHTNING", col: "IRON", img: "ball_icon_lightning_rod.png",
      effect: "Plants a lightning rod at the hit point that continuously attracts lightning to strike nearby enemies.",
      effectCn: "在击中点形成一个避雷针，持续吸引闪电攻击周围的敌人。",
      damageTypes: [DAMAGE_TYPE.LIGHTNING], statusEffects: [STATUS_EFFECT.LIGHTNING_ROD], aoeType: AOE_TYPE.LIGHTNING, tags: [TAGS.AOE, TAGS.MULTI_HIT] },
    { name: "Storm", nameCn: "风暴", row: "LIGHTNING", col: "WIND", img: "ball_icon_storm.png",
      effect: "Emits lightning to strike nearby enemies every second, dealing 1-40 damage.",
      effectCn: "释放闪电攻击附近的敌人。",
      damageTypes: [DAMAGE_TYPE.LIGHTNING, DAMAGE_TYPE.WIND], aoeType: AOE_TYPE.LIGHTNING, tags: [TAGS.AOE, TAGS.MULTI_HIT] },
    { name: "Mosquito Swarm", nameCn: "蚊群", row: "VAMPIRE", col: "EGG_SAC", img: "ball_icon_mosquito_swarm.png",
      effect: "Explodes into 3-6 mosquitoes on hit that attack and lifesteal.",
      effectCn: "击中时爆裂成多只蚊子。",
      damageTypes: [DAMAGE_TYPE.VAMPIRE], tags: [TAGS.SUMMON, TAGS.LIFESTEAL, TAGS.MULTI_HIT] },
    { name: "Voluptuous Egg Sac", nameCn: "肿胀巢囊", row: "EGG_SAC", col: "CELL", img: "ball_icon_voluptuous_egg_sac.png",
      effect: "Explodes into 2-3 egg sacs on hit.",
      effectCn: "爆裂成多个卵囊。",
      damageTypes: [DAMAGE_TYPE.NORMAL], tags: [TAGS.SUMMON, TAGS.MULTI_HIT] }
  ],

  // ==================== 高级进化 ====================
  // components 数组包含所需的进化球名称
  advancedEvolutions: [
    { name: "Nuclear Bomb", nameCn: "核弹", components: ["Bomb", "Poison"], img: "ball_icon_nuclear_bomb.png",
      effect: "Creates a massive nuclear explosion dealing high initial damage to all enemies on screen, leaving behind a radiation zone.",
      effectCn: "制造一场巨大的核爆，对全屏敌人造成高额初始伤害，并在后续留下强烈的辐射区域持续造成伤害。",
      damageTypes: [DAMAGE_TYPE.BOMB, DAMAGE_TYPE.POISON], statusEffects: [STATUS_EFFECT.RADIATION], aoeType: AOE_TYPE.NUKE, tags: [TAGS.AOE, TAGS.DOT] },
    { name: "Black Hole", nameCn: "黑洞", components: ["Sun", "Dark"], img: "ball_icon_black_hole.png",
      effect: "Instantly kills the first non-boss enemy it hits, then destroys itself. Has a 7 second cooldown.",
      effectCn: "在屏幕上创建一个强大的引力奇点，将周围的敌人和投射物全部吸入并湮灭。",
      damageTypes: [DAMAGE_TYPE.DARK], aoeType: AOE_TYPE.AURA, tags: [TAGS.AOE, TAGS.CC] },
    { name: "Satan", nameCn: "撒旦", components: ["Incubus", "Succubus"], img: "ball_icon_satan.png",
      effect: "Summons Satan, the demon king. Combines Incubus control and Succubus lifesteal abilities.",
      effectCn: "召唤恶魔之王撒旦，同时拥有梦魇的控制和魅魔的吸取能力，是战场上的终极主宰。",
      damageTypes: [DAMAGE_TYPE.CHARM, DAMAGE_TYPE.DARK, DAMAGE_TYPE.VAMPIRE], statusEffects: [STATUS_EFFECT.CHARM], tags: [TAGS.CC, TAGS.LIFESTEAL] },
    { name: "Nosferatu", nameCn: "诺斯费拉图", components: ["Vampire Lord", "Mosquito King", "Spider Queen"], img: "ball_icon_nosferatu.png",
      effect: "Spawns vampire bats. Ultimate fusion of vampire, mosquito and spider with unmatched lifesteal and minion army.",
      effectCn: "吸血鬼、蚊子和蜘蛛的终极融合体，拥有无与伦比的生命汲取能力和仆从大军，是真正的不死君王。",
      damageTypes: [DAMAGE_TYPE.VAMPIRE, DAMAGE_TYPE.BLEED], statusEffects: [STATUS_EFFECT.BLEED], tags: [TAGS.LIFESTEAL, TAGS.SUMMON, TAGS.DOT] }
  ],

  // ==================== 基础装备 ====================
  // 用于被动道具进化配方显示
  baseItems: [
    { name: "Everflowing Goblet", nameCn: "不竭圣杯", img: "everflowingGoblet.png",
      effect: "Restores 1 health every 5 seconds.",
      effectCn: "每5秒恢复1点生命值。" },
    { name: "Vampiric Sword", nameCn: "吸血鬼之剑", img: "vampiricSword.png",
      effect: "Each kill heals you, but each shot you take deals 2 damage to you.",
      effectCn: "每次击杀敌人将为你恢复生命值，但是被射中时你将承受2点伤害。" },
    { name: "Baby Rattle", nameCn: "拨浪鼓", img: "babyRattle.png",
      effect: "Gain additional baby balls, but your aim becomes scattered.",
      effectCn: "获得额外迷你弹珠，但是开火时无法精确瞄准。" },
    { name: "War Horn", nameCn: "战争号角", img: "warHorn.png",
      effect: "Increases ball damage by 10%.",
      effectCn: "你的球造成的伤害增加10%。" },
    { name: "Ethereal Cloak", nameCn: "幻影斗篷", img: "etherealCloak.png",
      effect: "Balls go through enemies and deal bonus damage until they hit the back of the field.",
      effectCn: "弹珠能够穿过敌人并造成额外伤害，此效果持续至弹珠命中屏幕上方的尽头区域。" },
    { name: "Ghostly Corset", nameCn: "幽灵束腰", img: "ghostlyCorset.png",
      effect: "Balls go through enemies and deal bonus damage when hitting them from the side.",
      effectCn: "从两侧命中敌人时，弹珠将穿过敌人并造成额外伤害。" },
    { name: "Breastplate", nameCn: "胸甲", img: "breastplate.png",
      effect: "Increases armor by 10.",
      effectCn: "护甲提高10点。" },
    { name: "Corrupted Onion", nameCn: "腐烂洋葱", img: "wretchedOnion.png",
      effect: "When taking damage, deals 10 damage to nearby enemies.",
      effectCn: "受到伤害时，对周围的敌人造成10点伤害。" },
    { name: "Reacher's Spear", nameCn: "突刺之矛", img: "reachersSpear.png",
      effect: "Increase crit chance when hitting enemies in the same column as you.",
      effectCn: "命中与你处于同一列的敌人时，暴击率提高。" },
    { name: "Deadeye's Amulet", nameCn: "靶眼护符", img: "deadeyesAmulet.png",
      effect: "Critical hits deal bonus damage.",
      effectCn: "暴击造成额外伤害。" },
    { name: "Crown of Thorns", nameCn: "荆棘之冠", img: "crownOfThorns.png",
      effect: "Reflects 50% of damage taken to attackers.",
      effectCn: "将50%的伤害反弹给攻击者。" },
    { name: "Spiked Collar", nameCn: "尖刺项圈", img: "spikedCollar.png",
      effect: "Deal damage to enemies the first time you get into their melee attack range.",
      effectCn: "首次进入敌人的近战攻击范围时，对其造成伤害。" },
    { name: "Fleet Feet", nameCn: "迅捷之靴", img: "fleetFeet.png",
      effect: "Increases movement speed by 10%.",
      effectCn: "移动速度提高10%。" },
    { name: "Radiant Feather", nameCn: "辉光之羽", img: "radiantFeather.png",
      effect: "Increases movement speed by 5% and dodge chance by 5%.",
      effectCn: "移动速度提高5%，躲避几率提高5%。" },
    { name: "Diamond-Hilted Dagger", nameCn: "钻石匕首", img: "diamondHiltedDagger.png",
      effect: "Backstab: Attacks from behind deal bonus damage.",
      effectCn: "背刺：从背后攻击造成额外伤害。" },
    { name: "Emerald-Hilted Dagger", nameCn: "绿宝石匕首", img: "emeraldHiltedDagger.png",
      effect: "Right stab: Attacks from the right deal bonus damage.",
      effectCn: "右刺：从右侧攻击造成额外伤害。" },
    { name: "Ruby-Hilted Dagger", nameCn: "红宝石匕首", img: "rubyHiltedDagger.png",
      effect: "Left stab: Attacks from the left deal bonus damage.",
      effectCn: "左刺：从左侧攻击造成额外伤害。" },
    { name: "Sapphire-Hilted Dagger", nameCn: "蓝宝石匕首", img: "sapphireHiltedDagger.png",
      effect: "Front stab: Attacks from the front deal bonus damage.",
      effectCn: "正刺：从正面攻击造成额外伤害。" },
    // 新增的基础被动道具
    { name: "Ghostly Shield", nameCn: "幽灵护盾", img: "ghostlyShield.png",
      effect: "Balls go through allies and heal them.",
      effectCn: "弹珠能够穿过友方单位并为其恢复生命值。" },
    { name: "Kiss of Death", nameCn: "死亡之吻", img: "kissOfDeath.png",
      effect: "Charmed enemies have a chance of dying after recovering.",
      effectCn: "被魅惑的敌人在魅惑效果结束时有几率死亡。" },
    { name: "Lover's Quiver", nameCn: "爱之箭袋", img: "loversQuiver.png",
      effect: "Projectiles have a chance to heal you instead of hurting you.",
      effectCn: "投射物有几率为你恢复生命值，而不是对你造成伤害。" },
    { name: "Protective Charm", nameCn: "护身符", img: "protectiveCharm.png",
      effect: "Gain a shield that blocks the next damage you would receive. Recharges over time.",
      effectCn: "获得一面能够抵挡1次伤害的盾牌。盾牌将在触发效果后重新充能。" },
    { name: "Rubber Headband", nameCn: "弹力头带", img: "rubberHeadband.png",
      effect: "Balls start off slow but increase speed with each bounce.",
      effectCn: "弹珠初速较慢，但是每次反弹将使速度提高。" },
    { name: "Silver Blindfold", nameCn: "白银眼罩", img: "silverBlindfold.png",
      effect: "Increase crit chance when hitting blinded enemies.",
      effectCn: "命中致盲的敌人时，暴击率提高。" },
    { name: "Traitor's Cowl", nameCn: "叛徒兜帽", img: "traitorsCowl.png",
      effect: "Stone allies can now be damaged by your balls, but you heal when a ball hits one.",
      effectCn: "你的弹珠将对各类岩石友军造成伤害，但是每次命中这些友军时，你将恢复生命值。" },
    { name: "Upturned Hatchet", nameCn: "逆转手斧", img: "upturnedHatchet.png",
      effect: "Balls deal more damage after hitting the back of the field, otherwise damage is reduced.",
      effectCn: "弹珠命中屏幕上方的尽头区域后伤害提高，但没有命中时伤害降低。" },
    { name: "Voodoo Doll", nameCn: "巫毒人偶", img: "voodooDoll.png",
      effect: "Curse has a chance of killing enemies.",
      effectCn: "诅咒有几率杀死敌人。" }
  ],

  // ==================== 被动道具进化 ====================
  // components 数组包含所需的基础装备名称
  passiveEvolutions: [
    { name: "Soul Reaver", nameCn: "灵魂收割者", components: ["Everflowing Goblet", "Vampiric Sword"], img: "soulReaver.png",
      effect: "Each kill heals you and you can heal past your max health.",
      effectCn: "每次击杀敌人为你恢复生命值，并且允许治疗效果超出最大生命值上限。" },
    { name: "Cornucopia", nameCn: "丰饶之角", components: ["Baby Rattle", "War Horn"], img: "cornucopia.png",
      effect: "Each time baby balls are created, spawn additional baby balls.",
      effectCn: "每次创造迷你弹珠时，生成额外迷你弹珠。" },
    { name: "Phantom Regalia", nameCn: "幻影华服", components: ["Ethereal Cloak", "Ghostly Corset"], img: "phantomRegalia.png",
      effect: "Balls go through enemies until they hit the back wall. Balls deal more damage when going through enemies.",
      effectCn: "弹珠能够穿过敌人，直到命中屏幕上方的尽头区域。弹珠穿过敌人时将额外造成伤害。" },
    { name: "Odiferous Shell", nameCn: "腐臭之躯", components: ["Breastplate", "Corrupted Onion"], img: "odiferousShell.png",
      effect: "When you touch enemies, they have a chance of instantly dying.",
      effectCn: "当你触碰敌人时，它们有一定几率立即死亡。" },
    { name: "Gracious Impaler", nameCn: "优雅刺枪", components: ["Reacher's Spear", "Deadeye's Amulet"], img: "graciousImpaler.png",
      effect: "Critical hits have a chance to instantly kill enemies.",
      effectCn: "暴击有一定几率立即击杀敌人。" },
    { name: "Tormentor's Mask", nameCn: "处刑者的面具", components: ["Crown of Thorns", "Spiked Collar"], img: "tormentersMask.png",
      effect: "Enemies have a chance of dying immediately the first time they detect you.",
      effectCn: "首次发现你（头顶显示惊叹号）时，敌人有一定几率立即死亡。" },
    { name: "Wings of the Anointed", nameCn: "圣礼者之翼", components: ["Fleet Feet", "Radiant Feather"], img: "wingsOfTheAnointed.png",
      effect: "Balls and you move faster. You no longer are affected by environmental hazards on the ground.",
      effectCn: "弹珠和你的移动速度加快。无视场地上的环境危险影响。" },
    { name: "Deadeye's Cross", nameCn: "靶眼十字架", components: ["Diamond-Hilted Dagger", "Emerald-Hilted Dagger", "Ruby-Hilted Dagger", "Sapphire-Hilted Dagger"], img: "deadeyesCross.png",
      effect: "Increase critical hit chance greatly.",
      effectCn: "大幅提升暴击率。" }
  ]
};

// ==================== 预计算优化 ====================
// 为每个带tags的项目预计算 tagsData 字符串, 避免渲染时重复计算
(function precomputeTagsData() {
  const computeTags = (item) => {
    if (item.tags && item.tags.length > 0) {
      item.tagsData = item.tags.map(t => t.id).join(',');
    }
    else {
      item.tagsData = '';
    }
  };
  
  GAME_DATA.baseBalls.forEach(computeTags);
  GAME_DATA.evolutions.forEach(computeTags);
  GAME_DATA.advancedEvolutions.forEach(computeTags);
  GAME_DATA.passiveEvolutions.forEach(computeTags);
})();

// 导出类型定义供其他模块使用
if (typeof window !== 'undefined') {
  window.DAMAGE_TYPE = DAMAGE_TYPE;
  window.STATUS_EFFECT = STATUS_EFFECT;
  window.AOE_TYPE = AOE_TYPE;
  window.TAGS = TAGS;
  window.SYNERGY_TYPE = SYNERGY_TYPE;
  window.STRATEGIES = STRATEGIES;
}
