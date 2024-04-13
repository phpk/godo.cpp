<template>
    <a-row :gutter="16">
        <a-col :lg="24">
            <a-card>
                <a-row
                    class="align-center"
                    type="flex">
                    <p
                        class="display-flex align-items-center"
                        style="background-color: #f6ffec; padding: 10px; box-sizing: border-box; width: 100%">
                        <check-circle-filled class="mr-4-1 color-success" />
                        {{ $t('pages.welcome.alertMessage') }}
                    </p>
                </a-row>
            </a-card>

            <a-card
                class="mt-8-2"
                :title="$t('pages.welcome.link')">
                <p>
                    快速轻量级推理服务器。
                    <copy-outlined
                        style="color: #10a6fa"
                        class="copy-btn"
                        data-clipboard-text=" gin-admin-cli new -d ~/go/src --name testapp --desc 'A test API service based on golang.' --pkg
                    'github.com/xxx/testapp"
                        @click="handleCopy" />
                </p>
            </a-card>

            <a-card
                class="mt-8-2"
                :title="$t('pages.welcome.quickStart')">
                <p>
                    <copy-outlined
                        style="color: #10a6fa"
                        class="copy-btn"
                        data-clipboard-text="gin-admin-cli new -d ~/go/src --name testapp --desc 'A test API service based on golang.' --pkg 'github.com/xxx/testapp'"
                        @click="handleCopy" />
                </p>

                <p>
                    <copy-outlined
                        style="color: #10a6fa"
                        class="copy-btn"
                        data-clipboard-text="cd ~/go/src/testapp"
                        @click="handleCopy" />
                </p>
                <p>
                    <copy-outlined
                        style="color: #10a6fa"
                        class="copy-btn"
                        data-clipboard-text="make start"
                        @click="handleCopy" />
                </p>
                <p></p>
            </a-card>

            <a-card
                class="mt-8-2"
                title="下载模型">
                <p>
                    <copy-outlined
                        style="color: #10a6fa"
                        class="copy-btn"
                        data-clipboard-text="gin-admin-cli gen -d . -m CMS -s Category --structs-comment 'Category management'"
                        @click="handleCopy" />
                </p>
            </a-card>
            <a-card
                class="mt-8-2"
                title="管理模型">
                <p>
                    <copy-outlined
                        style="color: #10a6fa"
                        class="copy-btn"
                        data-clipboard-text="gin-admin-cli rm -d . -m CMS -s Category"
                        @click="handleCopy" />
                </p>
            </a-card>
        </a-col>
    </a-row>
</template>

<script setup>
import ClipboardJS from 'clipboard'
import { CheckCircleFilled, CopyOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
defineOptions({
    name: 'home',
})
const handleCopy = () => {
    const clipboard = new ClipboardJS('.copy-btn')
    clipboard.on('success', (e) => {
        e.clearSelection()
        message.success('copy success!')
    })
    clipboard.on('error', () => {
        message.error('copy error!')
    })
}
</script>

<style lang="less" scoped>
p {
    box-shadow: 0 0 3px 3px #f9f9f9;
    padding: 20px;
}
</style>
