<template>
    <div>
        <h1>車両一覧</h1>
        <div class="l-1-00-m--all">
            <div>
                <router-link :to="{ name: 'vehicle_create' }" class="button--oval--primary">
                    車両登録
                </router-link>
                <router-link :to="{ name: 'vehicle_update' }" class="button--oval--other">
                    車両編集
                </router-link>
            </div>
        </div>
    </div>
</template>
