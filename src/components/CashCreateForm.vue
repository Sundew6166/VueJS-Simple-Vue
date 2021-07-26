<template>
  <div>
      ระบบบันทึกรายรับ-รายจ่าย
    <div>
        <div>
            <label for="date">วัน/เดือน/ปี </label>
            <input type="text" v-model="form.date_list.date">
        </div>   

        <div>
            <label for="list">รายการ </label>
            <input type="text" v-model="form.date_list.list">
        </div>  

        <div>
            <label for="income">รายรับ </label>
            <input type="text" v-model="form.date_list.income">
        </div> 

         <div>
            <label for="expense">รายจ่าย </label>
            <input type="text" v-model="form.date_list.expense">
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
                date_list: {
                    date: '',
                    list: '',
                    income: '',
                    expense: ''
                }
            }
        }
    },
    methods: {
        clearForm() {
            this.form = {
                date_list: {
                    date: '',
                    list: '',
                    income: '',
                    expense: ''
                }
            }
        },
        addCash() {
            let payload = {
                date_list: this.form.date_list
            }
            console.log(payload)
            CashStore.dispatch("addCash", payload)

            this.clearForm()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>