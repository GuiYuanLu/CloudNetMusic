import {
    Swipe,
    SwipeItem
} from 'vant';

//存入数组
const plugins = [Swipe, SwipeItem]

//循环数组并调用app.use() 导出这个函数

export default function getVant(app) {
    plugins.forEach((item) => {
        return app.use(item)
    })
}