<template>
<div class="home">创然集团</div>
<el-button @click="jump">测试</el-button>
</template>

<script setup name="Index">
import {useRouter} from 'vue-router'
const router = useRouter()

const jump = () => {
router.push('/detail/index')

}
</script>

<style scoped lang="scss">
.home {
	font-size: 70px;
	color: purple;
}
</style>

