<template>
    <div>
        <h1>页面二</h1>
        <div>
            <router-link :to="{name:'ChildOne',params:{userName:'刘宇'}}">子页面一</router-link> |
            <!-- <router-link to="/pagetwo/childtwo">子页面二</router-link> -->
            <router-link :to="{path:'/pagetwo/childtwo',query:{age:20,sex:'男'}}">子页面二</router-link> |
            <router-link to="/pagetwo/childthree/aaaaa">子页面三</router-link>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>