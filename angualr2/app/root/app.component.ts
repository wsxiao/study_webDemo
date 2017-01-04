/**
 * Created by DKings on 2017/1/3.
 */
//引入组件@Component装饰器
import { Component, OnInit, Inject } from '@angular/core';

// //从hero.ts中导出Hero类,在本组件文件中引用它
// import { Hero } from '../hero/hero';
// //导入HeroService服务
// import { HeroService } from '../hero-service/hero.service';

@Component({
    //selector标识元素标签
    selector: 'my-app',
    template: `<h1>hello world</h1>`,
    // style:[],    // 没有可以不写
    //注册一个HeroService提供商,告诉注入器如何创建HeroService,在@Component组件的元数据底部添加providers数组属性如下
    providers: [
        HeroService
    ]
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';

    heroes: Hero[];        //暴露英雄,以供绑定
    selectedHero: Hero;     //暴露选中的英雄

    constructor(
        @Inject(HeroService) private heroService: HeroService
    ) {}

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    //ngOnInit生命周期钩子
    ngOnInit(): void {
        this.getHeroes();
    }
}