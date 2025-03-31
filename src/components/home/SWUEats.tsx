import { SWUEatsCard } from './SWUEatsCard';

const foods = [
  {
    image: '/images/food/xiaoyiyuan3.jpg',
    store: '味之源菜馆（别名：校医院三代目）',
    time: '2025-03-20',
    review: '熟悉的味道，经典的肘子和鱼，鉴于曾经在校医院天天白嫖给你4星（',
    rating: 4
  },
  {
    image: '/images/food/wujie.jpg',
    store: '无届青年餐厅',
    time: '2025-03-12',
    review: '菜品颜值很高，菜量不大，干煸四季豆和鸡很好吃',
    rating: 4
  },
  {
    image: '/images/food/zuixing.jpg',
    store: '醉兴川菜馆',
    time: '2025-03-09',
    review: '记忆犹新的是辣子鸡里面几乎只有辣椒……',
    rating: 4
  },
  {
    image: '/images/food/wanzhoukaoyu.jpg',
    store: '万州烤鱼肥肠鸡',
    time: '2025-03-07',
    review: '鱼和鸡都很好吃😋',
    rating: 5
  },
  {
    image: '/images/food/xixiangji.jpg',
    store: '稀湘记湘菜馆',
    time: '2025-02-23',
    review: '这一桌拍起来很好看，菜品也很靠近正宗湘菜的味道',
    rating: 4
  },
  {
    image: '/images/food/chenqunhuoguo.jpg',
    store: '陈群火锅',
    time: '2024-11-30',
    review: '必须五星，或许是这样的一个日子让人印象深刻',
    rating: 5
  },
  {
    image: '/images/food/shijilaoshaguo.jpg',
    store: '十吉老砂锅',
    time: '2024-11-20',
    review: '感觉蔬菜不甚新鲜👎',
    rating: 2
  },
  {
    image: '/images/food/xiaoyiyuan2.jpg',
    store: '西南大学南区校医院二代目',
    time: '2024-11-01',
    review: '最好吃的校医院，菜品大方又搭配很好，吃过最正宗的盐煎肉，可惜已经成为了时代的眼泪😭',
    rating: 5
  },
  {
    image: '/images/food/chaihuoji.jpg',
    store: '海绮柴火鸡',
    time: '2024-10-30',
    review: '壁垒，鸡一般，唯怡+百事可乐= ¥28 + ¥15 = ¥43😎🤏🕶️😭👎',
    rating: 1
  },
  {
    image: '/images/food/luoguanzhong.jpg',
    store: '罗罐中米粉',
    time: '2024-10-25',
    review: '只吃他们家的烫饭，番茄肉末烫饭最好吃',
    rating: 5
  },
  {
    image: '/images/food/nuoxiangzhang.jpg',
    store: '糯香掌干锅',
    time: '2024-10-23',
    review: '糯香味的好吃，干锅太油',
    rating: 4
  },
  {
    image: '/images/food/dongbei.jpg',
    store: '东北饺子铁锅炖',
    time: '2024-10-16',
    review: '最经典的东北菜，菜量大，口味也比较正，但吃多了好像有点觉得一般了（',
    rating: 4
  },
  {
    image: '/images/food/hanxiaoer.jpg',
    store: '憨小二坛子焖肉米饭',
    time: '2024-10-06',
    review: '实惠的一家店，肉很多',
    rating: 4
  },
  {
    image: '/images/food/qingyunian.jpg',
    store: '庆鱼年酸汤乌鱼馆',
    time: '2024-09-25',
    review: '强力推荐，乌鱼非常鲜，锅边烙的饼是我吃过最好吃的饼！🤤',
    rating: 5
  },
  {
    image: '/images/food/liyuanxiaochao.jpg',
    store: '李园小炒',
    time: '2024-09-20',
    review: '经济实惠，和搭子们在中图学习完后的好去处',
    rating: 3
  },
  {
    image: '/images/food/maogelaoyatang.jpg',
    store: '毛哥老鸭汤',
    time: '2024-09-18',
    review: '看在这家店承载了很多回忆的情形下给你个3星（',
    rating: 3
  },
  {
    image: '/images/food/fuluduo.jpg',
    store: '福禄哆牛肉串串',
    time: '2024-07-09',
    review: '好吃😋',
    rating: 4
  },
  {
    image: '/images/food/xiaoyiyuan1.jpg',
    store: '校医院一代目',
    time: '2024-06-03',
    review: '吃腻了，不多说😩',
    rating: 2
  },
  {
    image: '/images/food/qiyuan.jpg',
    store: '栖院',
    time: '2024-03-10',
    review: '食材用的非常好，那条鱼非常新鲜，很好吃。菜品有点小贵但也还算合理，主要是在校内',
    rating: 5
  },
  {
    image: '/images/food/shenxiangzikaoyufang.jpg',
    store: '深巷子烤鱼坊',
    time: '2024-01-09',
    review: '冬天吃热气腾腾的烤鱼可爽啦',
    rating: 4
  },
  {
    image: '/images/food/beicunzhaji.jpg',
    store: '北村炸鸡',
    time: '2023-12-10',
    review: '校门口最好吃的炸鸡',
    rating: 5
  }
];

interface SWUEatsProps {
  limit?: number;
}

export function SWUEats({ limit }: SWUEatsProps) {
  const displayedFoods = limit ? foods.slice(0, limit) : foods;

  return (
    <section className="my-16">
      <h2 className="mb-8 text-3xl font-bold">Eating in SWU</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedFoods.map((food, i) => (
          <SWUEatsCard key={i} {...food} />
        ))}
      </div>
    </section>
  );
}
