import { ResourceData, SummaryData, LicenseSection } from './types';

// Section 1: Resource Sites
export const RESOURCE_SITES: ResourceData[] = [
  {
    title: "玉龙铜业",
    mainStats: [{ label: "铜资源量", value: "23432万吨" }, { label: "铁资源量", value: "23432万吨" }],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "Mo", grade: "2.5%", amount: "327482wt" },
      { element: "TFe", grade: "2.5%", amount: "327482wt" },
      { element: "mFe", grade: "2.5%", amount: "" }, // Empty as per image pattern implying visual spacing or missing data
    ]
  },
  {
    title: "茶亭",
    mainStats: [{ label: "铜资源量", value: "23432万吨" }],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "Au", grade: "2.5g/t", amount: "3274t" },
      { element: "Ag", grade: "2.5g/t", amount: "32t" },
    ]
  },
  {
    title: "锡铁山主矿区",
    mainStats: [{ label: "铅锌资源量", value: "23432万吨" }],
    table: [
      { element: "Pb", grade: "2.5%", amount: "327482wt" },
      { element: "Zn", grade: "2.5%", amount: "327482wt" },
      { element: "S", grade: "2.5%", amount: "327482wt" },
      { element: "Au", grade: "22g/t", amount: "327t" },
      { element: "Ag", grade: "22g/t", amount: "32t" },
    ]
  },
  {
    title: "锡铁山中间沟-断层沟",
    mainStats: [{ label: "铅锌资源量", value: "23432万吨" }],
    table: [
      { element: "Pb", grade: "2.5%", amount: "327482wt" },
      { element: "Zn", grade: "2.5%", amount: "327482wt" },
      { element: "S", grade: "2.5%", amount: "327482wt" },
      { element: "Au", grade: "22g/t", amount: "32t" },
      { element: "Ag", grade: "22g/t", amount: "327t" },
    ]
  },
  {
    title: "西部铜业",
    mainStats: [
      { label: "铜资源量", value: "23432万吨" },
      { label: "铅锌资源量", value: "23432万吨" },
      { label: "铁资源量", value: "23432万吨" }
    ],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "Pb", grade: "2.5%", amount: "327482wt" },
      { element: "Zn", grade: "2.5%", amount: "327482wt" },
      { element: "Ag", grade: "22g/t", amount: "327482wt" },
      { element: "TFe", grade: "2.5%", amount: "" },
      { element: "mFe", grade: "2.5%", amount: "" },
    ]
  },
  {
    title: "双利矿业",
    mainStats: [
      { label: "铜资源量", value: "23432万吨" },
      { label: "铅锌资源量", value: "23432万吨" },
      { label: "铁资源量", value: "23432万吨" }
    ],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "Pb", grade: "30%", amount: "327482wt" },
      { element: "Zn", grade: "30%", amount: "327482wt" },
      { element: "TFe", grade: "30%", amount: "" },
      { element: "mFe", grade: "30%", amount: "" },
    ]
  },
  {
    title: "鑫源-呷村",
    mainStats: [{ label: "铅锌资源量", value: "23432万吨" }],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "Pb", grade: "2.5%", amount: "327482wt" },
      { element: "Zn", grade: "2.5%", amount: "327482wt" },
      { element: "Ag", grade: "30g/t", amount: "3274t" },
    ]
  },
  {
    title: "鑫源-有热",
    mainStats: [{ label: "铅锌资源量", value: "23432万吨" }],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "Pb", grade: "2.5%", amount: "327482wt" },
      { element: "Zn", grade: "2.5%", amount: "327482wt" },
      { element: "Ag", grade: "30g/t", amount: "327t" },
    ]
  },
  {
    title: "肃北博伦",
    mainStats: [
      { label: "铁资源量", value: "23432万吨" },
      { label: "钒资源量", value: "23432万吨" }
    ],
    table: [
      { element: "TFe", grade: "2.5%", amount: "" },
      { element: "mFe", grade: "2.5%", amount: "" },
      { element: "V2O5", grade: "2.5%", amount: "327482wt" },
    ]
  },
  {
    title: "哈密博伦",
    mainStats: [{ label: "铁资源量", value: "23432万吨" }],
    table: [
      { element: "TFe", grade: "2.5%", amount: "" },
      { element: "mFe", grade: "2.5%", amount: "" },
    ]
  },
  {
    title: "新疆瑞伦",
    mainStats: [{ label: "铜资源量", value: "23432万吨" }],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "Ni", grade: "2.5%", amount: "327482wt" },
    ]
  },
  {
    title: "鸿丰伟业",
    mainStats: [{ label: "铁资源量", value: "23432万吨" }],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "TFe", grade: "2.5%", amount: "" },
      { element: "mFe", grade: "2.5%", amount: "" },
    ]
  },
  {
    title: "大梁矿业",
    mainStats: [{ label: "铅锌资源量", value: "23432万吨" }],
    table: [
      { element: "Pb", grade: "2.5%", amount: "327482wt" },
      { element: "Zn", grade: "2.5%", amount: "327482wt" },
      { element: "Ag", grade: "30g/t", amount: "327t" },
    ]
  },
  {
    title: "它温查汗西",
    mainStats: [
      { label: "铁资源量", value: "23432万吨" },
      { label: "铜资源量", value: "23432万吨" }
    ],
    table: [
      { element: "Cu", grade: "2.5%", amount: "327482wt" },
      { element: "TFe", grade: "2.5%", amount: "" },
      { element: "mFe", grade: "2.5%", amount: "" },
    ]
  },
  {
    title: "它温查汗",
    mainStats: [{ label: "铁资源量", value: "23432万吨" }],
    table: [
      { element: "TFe", grade: "2.5%", amount: "" },
      { element: "mFe", grade: "2.5%", amount: "" },
    ]
  }
];

// Section 2: Resource Summary
export const RESOURCE_SUMMARY: SummaryData[] = [
  { name: "铜", value: "23432万吨" },
  { name: "铅", value: "23432万吨" },
  { name: "锌", value: "23432万吨" },
  { name: "镍", value: "23432万吨" },
  { name: "钼", value: "23432万吨" },
  { name: "金", value: "32吨" },
  { name: "银", value: "432吨" },
  { name: "五氧化二钒", value: "23432万吨" },
  { name: "铁", value: "23432万吨" },
];

// Section 3: Salt Lake Summary
export const SALT_LAKE_SUMMARY: SummaryData[] = [
  { name: "柯柯", subName: "NaCl", value: "23432万吨" },
  { name: "茶卡", subName: "NaCl", value: "23432万吨" },
  { name: "镁业", subName: "MgCl₂", value: "23432万吨" },
  { name: "东台", subName: "Li", value: "23432万吨" },
];

// Section 4: Licenses
export const MINING_LICENSES: LicenseSection = {
  title: "采矿证",
  count: 15,
  items: [
    { company: "西藏玉龙铜业股份有限公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "西部矿业股份有限公司锡铁山分公司", detail1: "生产规模: 150万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "西部矿业股份有限公司锡铁山分公司", detail1: "生产规模: 20万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "巴彦淖尔西部铜业有限公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "内蒙古双利矿业有限公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "四川鑫源矿业有限责任公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "四川鑫源矿业有限责任公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "四川会东大梁矿业有限公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "肃北县博伦矿业开发有限责任公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "哈密博伦矿业有限责任公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "新疆瑞伦矿业有限责任公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "青海鸿丰伟业矿产投资有限公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "青海茶卡盐业有限公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "青海柯柯制盐有限公司", detail1: "生产规模: 450万吨/年", detail2: "深度: 4340-3700米", validity: "2024-11-14 至 2031-11-29" }
  ]
};

export const EXPLORATION_LICENSES: LicenseSection = {
  title: "探矿证",
  count: 7,
  items: [
    { company: "西部矿业股份有限公司锡铁山分公司", detail1: "面积: 4.3平方千米", validity: "2024-11-14 至 2031-11-29" },
    { company: "格尔木西矿资源开发有限公司", detail1: "面积: 3.9平方千米", validity: "2024-11-14 至 2034-10-12" },
    { company: "格尔木西矿资源开发有限公司", detail1: "面积: 4.3平方千米", validity: "2024-11-14 至 2031-11-29" },
    { company: "青海淦鑫矿业开发有限公司", detail1: "面积: 4.3平方千米", validity: "2024-11-14 至 2031-11-29" },
  ]
};