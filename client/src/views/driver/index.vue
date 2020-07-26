<template>
    <div>
        <h1>ドライバー一覧</h1>
        <div class="l-1-00-m--all">
            <div>
                <router-link :to="{ name: 'driver_create' }" class="button--oval--primary">
                    ドライバー登録
                </router-link>
                <router-link :to="{ name: 'driver_update' }" class="button--oval--other">
                    ドライバー編集
                </router-link>
            </div>
        </div>
    </div>
</template>
