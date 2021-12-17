<template>
    <div class="user">
        <div class="search">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="城市">
                    <el-select v-model="searchForm.city">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="楼盘名称">
                    <el-select v-model="searchForm.house">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                    <el-button type="primary" @click="search">下载模板</el-button>
                    <el-button type="primary" @click="search">批量添加</el-button>
                    <el-button type="primary" @click="search">单个添加</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="tableData">
            <el-table-column prop="num" label="序号"></el-table-column>
            <el-table-column prop="city" label="城市"></el-table-column>
            <el-table-column prop="house" label="楼盘名称"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="card" label="证件类型"></el-table-column>
            <el-table-column prop="cardNum" label="证件号码"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope='scope'>
                    <el-button type="text" @click="deleteP(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagebar">
            <el-pagination background layout="prev, pager, next" :current-page.sync="currentPage"
                @current-change="handleCurrentChange" :total="totalSize">
            </el-pagination>
        </div>
        <loading ref="loadingNode"></loading>
        <el-button @click="showLoading">测试loading</el-button>
        <el-button @click="showLoading2">loading</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchForm: {
                city: '',
                house: ''
            },
            currentPage: 1,
            totalSize: 100,
            tableData: [
                { num: 1, city: '上海', house: 'xx楼盘', name: 'lyg', card: '身份证', cardNum: '141122111111111111' }
            ]
        }
    },
    created: function() {
        this.search()
    },
    methods: {
        search() {},
        handleCurrentChange() {
            console.log(this.currentPage)
        },
        deleteP(row) {
            console.log(row.cardNum)
        },
        showLoading() {
            this.$refs.loadingNode.show()
            setTimeout(() => {
                this.$refs.loadingNode.hide()
            }, 3000)
        },
        showLoading2() {
            this.createLoading()
            setTimeout(() => {
                this.destroyLoading()
            }, 2000)
        },
        createLoading() {
            const loadingWrapper = document.createElement('div')
            loadingWrapper.className = 'loading-wrapper'
            const dialog = document.createElement('div')
            dialog.className = 'loading'
            const out = document.createElement('div')
            out.className = 'circle-out'
            const inNode = document.createElement('div')
            inNode.className = 'circle-in'
            const msg = document.createElement('div')
            msg.className = 'loading-msg'
            const msgText = document.createTextNode('Loading')
            msg.append(msgText)
            dialog.append(out)
            dialog.append(inNode)
            dialog.append(msg)
            loadingWrapper.append(dialog)
            document.body.append(loadingWrapper)
        },
        destroyLoading() {
            const loadingWrapper = document.getElementsByClassName('loading-wrapper')
            document.body.removeChild(loadingWrapper[0])
        }
    }
}
</script>

<style lang="stylus">
.pagebar {
    margin-top: 10px;
    background: #fff;
    padding: 5px 0;
}

.loading-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
}

.loading {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -100px 0 0 -100px;
}

@keyframes circle {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loading .circle-out {
    width: 200px;
    height: 200px;
    border: 1px solid #a6a7aa;
    border-radius: 200px;
    animation: circle 2s ease infinite;
}

.loading .circle-in {
    width: 170px;
    height: 170px;
    border: 1px solid #a6a7aa;
    border-radius: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -85px 0 0 -85px;
    animation: circle 2s linear infinite;
}

.loading .circle-out::after, .loading .circle-in::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 99%;
    height: 99%;
    border-radius: 200px;
    border: 5px solid transparent;
    border-top-color: #2aa298;
    border-left-color: #2aa298;
}

.loading .circle-in::after {
    border: 3px solid transparent;
    border-top-color: #829601;
    border-left-color: #829601;
}

@keyframes fade {
    50% {
        opacity: 0.05;
    }
}

.loading .loading-msg {
    position: absolute;
    text-align: center;
    font-size: 18px;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -10px;
    color: gray;
    animation: fade 2s ease infinite;
}
</style>
