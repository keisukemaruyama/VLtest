<template>
    <div class="wrapper">
        <div class="menu">
            <div class="logo">
                <img src="@/assets/images/logo.png" alt="管クリ">
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link :to="{ name: 'driver_list' }" active-class="is-current">
                            ドライバー管理
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'vehicle_list' }" active-class="is-current">
                            車両管理
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="content">
            <div class="header">
                <nav>
                    <ul>
                        <li>
                            <router-link :to="{ name: 'root' }">
                                ログアウト
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="dashboard">
                <router-view />
            </div>
        </div>
    </div>
</template>
