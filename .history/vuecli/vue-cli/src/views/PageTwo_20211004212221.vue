<template>
    <div>
        <h1>页面二</h1>
        <div>
            <router-link to="/pagetwo/childone">子页面一</router-link> |
            <router-link to="/pagetwo/childtwo">子页面二</router-link>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>