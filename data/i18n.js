/**
 * 国际化配置文件 (i18n = internationalization)
 * 
 * 包含所有界面文字的中英双语配置
 */

const I18N = {
  // ==================== 中文 ====================
  zh: {
    // 页面标题
    title: "BALL x PIT 进化图鉴",
    subtitle: "完整进化组合参考",
    
    // 搜索框
    searchPlaceholder: "搜索球名...",
    
    // 视图标签
    viewMatrix: "矩阵",
    viewList: "列表",
    viewGallery: "图鉴",
    
    // 筛选按钮
    filterAll: "全部",
    filterDot: "持续伤害",
    filterCc: "控制",
    filterAoe: "范围",
    filterSummon: "召唤",
    filterLifesteal: "吸血",
    filterPenetrate: "穿透",
    
    // 图鉴分类标题
    sectionBasic: "基础球 Basic Balls",
    sectionEvolved: "进化球 Evolved Balls",
    sectionAdvanced: "高级进化 Advanced Evolutions",
    sectionPassive: "被动道具 Passive Items",
    
    // 底部区域标题
    advancedTitle: "高级弹珠进化",
    passiveTitle: "被动道具进化",
    
    // 弹窗标签
    modalRecipe: "合成配方 / Recipe",
    modalAttributes: "属性信息 / Attributes",
    modalEffect: "效果描述 / Effect",
    
    // 属性分类
    attrDamageType: "伤害类型",
    attrStatusEffect: "状态效果",
    attrAoeType: "范围类型",
    attrTags: "特性标签",
    
    // 列表视图
    combosCount: "种组合",
    
    // 页脚
    footerVisits: "总访问量",
    footerVisitors: "总访客",
    footerPageViews: "本页浏览",
    footerTimes: "次",
    footerPeople: "人",
    
    // 语言切换
    langSwitch: "🌐 English"
  },
  
  // ==================== 英文 ====================
  en: {
    // 页面标题
    title: "BALL x PIT Evolution Guide",
    subtitle: "Complete Evolution Reference",
    
    // 搜索框
    searchPlaceholder: "Search balls...",
    
    // 视图标签
    viewMatrix: "Matrix",
    viewList: "List",
    viewGallery: "Gallery",
    
    // 筛选按钮
    filterAll: "All",
    filterDot: "DoT",
    filterCc: "CC",
    filterAoe: "AoE",
    filterSummon: "Summon",
    filterLifesteal: "Lifesteal",
    filterPenetrate: "Penetrate",
    
    // 图鉴分类标题
    sectionBasic: "Basic Balls",
    sectionEvolved: "Evolved Balls",
    sectionAdvanced: "Advanced Evolutions",
    sectionPassive: "Passive Items",
    
    // 底部区域标题
    advancedTitle: "Advanced Ball Evolutions",
    passiveTitle: "Passive Item Evolutions",
    
    // 弹窗标签
    modalRecipe: "Recipe",
    modalAttributes: "Attributes",
    modalEffect: "Effect",
    
    // 属性分类
    attrDamageType: "Damage Type",
    attrStatusEffect: "Status Effects",
    attrAoeType: "AoE Type",
    attrTags: "Tags",
    
    // 列表视图
    combosCount: "combos",
    
    // 页脚
    footerVisits: "Total Visits",
    footerVisitors: "Visitors",
    footerPageViews: "Page Views",
    footerTimes: "",
    footerPeople: "",
    
    // 语言切换
    langSwitch: "🌐 中文"
  }
};

// 导出供其他模块使用
if (typeof window !== 'undefined') {
  window.I18N = I18N;
}
