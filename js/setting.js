/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'kumamoto_kikuyo_budget';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* kikuyo cofog */
// 議会費 1
  '1': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-1': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },// 議会費 1-1
// 総務費 2
  '2': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-1': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#0AB971' },// 総務管理費 2-1
  '2-2': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#0AB971' },// 徴税費 2-2
  '2-3': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#0AB971' },// 戸籍住民基本台帳費 2-3
  '2-4': { icon: 'icons/vote.svg', color: '#C75746', bcolor: '#0AB971' },// 選挙費 2-4
  '2-5': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#0AB971' },// 統計調査費 2-5
  '2-6': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },// 監査委員費 2-6
// 民生費 3
  '3': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-1': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' },// 社会福祉費 3-1
  '3-2': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#4E6D00' },// 児童福祉費 3-2
// 衛生費 4
  '4': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '4-1': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },// 保健衛生費 4-1
  '4-2': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#D33673' },// 清掃費 4-2
// 労働費 5
  '5': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03' },
  '5-1': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03'  },// 労働諸費  5-1
// 農林水産業費 6
  '6': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-1': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },// 農業費 6-1
  '6-2': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' },// 林業費 6-2
// 商工費 7
  '7': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },
  '7-1': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },// 商工費 7-1
// 土木費 8
  '8': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#98C7DA' },
  '8-1': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#98C7DA' },// 土木管理費 8-1
  '8-2': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#98C7DA' },// 道路橋梁費 8-2
  '8-3': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#98C7DA' },// 都市計画費 8-3
  '8-4': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#98C7DA' },// 住宅費 8-4
// 消防費 9
  '9': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#FF0000' },
  '9-1': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#FF0000' },// 消防費 9-1
// 教育費 10
  '10': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '10-1': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },// 教育総務費 10-1
  '10-2': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' },// 小学校費  10-2
  '10-3': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#790586' },// 中学校費  10-3
  '10-4': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },// 幼稚園費  10-4
  '10-5': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },// 社会教育費 10-5
  '10-6': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#790586' },// 保健体育費 10-6
// 災害復旧費 11
  '11': { icon: 'icons/restoration.svg', color: '#C75746', bcolor: '#B68942' },
  '11-1': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#B68942' },// 農林水産業施設災害復旧費  11-1
  '11-2': { icon: 'icons/restoration.svg', color: '#C75746', bcolor: '#B68942' },// 公共土木施設災害復旧費 11-2
// 公債費 12
  '12': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#3F3381' },
  '12-1': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#3F3381' },// 公債費 12-1
// 公債費 14
  '14': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D0D9DB' },
  '14-1': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D0D9DB' },// 予備費 14-1
};


