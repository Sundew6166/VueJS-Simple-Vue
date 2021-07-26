<template>
  <div>
      ระบบบันทึกรายรับ-รายจ่าย
    <div>
        <div>
            <label for="date">วัน/เดือน/ปี </label>
            <input type="text" v-model="form.date">
        </div>   

        <div>
            <label for="list">รายการ </label>
            <input type="text" v-model="form.list">
        </div>  

        <div>
            <label for="income">รายรับ </label>
            <input type="text" v-model="form.income">
        </div> 

         <div>
            <label for="expense">รายจ่าย </label>
            <input type="text" v-model="form.expense">
        </div> 

        <div>
            <button @click="addCash">บันทึก</button>
            
        </div>
    </div>
  </div>
</template>

<script>
import CashStore from '@/store/Cash'

export default {
    data() {
        return {
            form: {
                    date: '',
                    list: '',
                    income: 0,
                    expense: 0,
                    total: 0
                }
        }
    },
    methods: {
        clearForm() {
            this.form = {
                    date: '',
                    list: '',
                    income: 0,
                    expense: 0,
                    total: 0
            }
        },
        addCash() {
            let payload = this.form
    
            console.log(payload)
            CashStore.dispatch("addCash", payload)

            this.clearForm()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>