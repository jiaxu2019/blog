<template>
    <div class="main">    
     <div class="AA">
     <el-row class="tac">
  <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>全部分类</span>
        </template>
        <el-menu-item-group>
          <template slot="title">一级造价工程师</template>
          <el-menu-item index="1-1">安装工程</el-menu-item>
          <el-menu-item index="1-2">土木工程</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="二级造价工程师">
          <el-menu-item index="1-3">修理工</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">水电工</el-menu-item>
        </el-submenu>
      </el-submenu>
     
    </el-menu>
  </el-col>
  
     </el-row>
     </div>   
     <div class="BB">
    <el-form ref="form" :model="form" label-width="80px">
      
    
       <el-form-item label="课程标题 :" class="A">
       <el-input v-model="form.name" placeholder="请选择"></el-input>
       </el-form-item>
       <el-form-item label="讲师 :" class="B">
       <el-input v-model="form.name2" placeholder="请选择"></el-input>
       </el-form-item>
       <el-form-item label="状态 :" class="C">
       <el-input v-model="form.name3" placeholder="请选择"></el-input>
       </el-form-item>

        <el-form-item class="D">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
        <el-button>新增</el-button>
     </el-form-item>
     </el-form>

     <!-- 表单部分 -->
        
    <el-table
      :data="list1"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="120">
      </el-table-column>
      <el-table-column
        prop="objects"
        label="课程标题"
        width="120">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="讲师"
        width="80"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="销售价格"
        width="180"
        >
      </el-table-column>
      <el-table-column
        prop="number"
        label="销量"
        width="180"
        >
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="170"
        >
      </el-table-column>

      <el-table-column
        prop="state"
        label="操作"
        width="380"
        >
        <template>
        <el-button
          size="mini"
         >查看</el-button>
        <el-button
          size="mini"
          @click="Edit(list1)"
         >编辑</el-button>



        <el-button
          size="mini"
          type="删除"
          @click="Delete(list1.id)"
        >删除</el-button>

        
        <el-button
          size="mini"
          type="置顶"
        >置顶</el-button>
      </template>
      </el-table-column>
    </el-table>

    <!-- 不使用组件  使用vue直接循环出来 -->
    <div class="todo">
   
    </div>
     </div>


     <!-- 导航菜单 -->
    


</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          name1:'',
          name2:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',


          
        },
         list1: [{
            id: '111111',
            objects: '语文',
            teacher: '小朱',
            price:2,
            number:31,
            state:"草稿"
          }, {
            id: '222222',
            objects: '数学',
            teacher: '小青',
            price:231,
            number:13,
            state:"草稿"
          }, {
            id: '333333',
            objects: '英语',
            teacher: '小张',
            price:33,
            number:67,
            state:"商家"
          }, {
            id: '444444',
            objects: '地理',
            teacher: '小美',
            price:499,
            number:78,
            state:"下家"
          }],

    }
    
  },
  methods:{
      Delete:function(id){
           for (var i=0;i<this.list1.length;i++){
                    if (this.list1[i].ID == id) {
                        this.list1.splice(i, 1);
                        break;
                    }
                }
        alert("www")
      },
      Edit:function(){
          alert("我被编辑啦")
      }
  }

  }
</script>
<style>
    *{
        padding: 0;
        margin: 0;
    }
    .A{
        width: 300PX;
    }
    .B{
        width: 300PX;
    }
    .C{
        width: 550PX;
        clear: both;
    }
    .D{
       position: absolute;
       top: 185px;
       left: 1200px;
    }
    .AA{
        width: 300px;
    }
    .BB{
        width: 1300px;
        float: left;
    }
    .A,.B,.AA{
        float: left;
    }
</style>