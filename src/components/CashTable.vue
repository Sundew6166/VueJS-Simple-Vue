<template>
   <div>
      <table>
          <thead>
              <tr>
                <th>ลำดับที่</th>
                <th>วัน/เดือน/ปี</th>
                <th>รายการ</th>
                <th>รายรับ</th>
                <th>รายจ่าย</th> 
              </tr>
          </thead>
          <tbody>
              <tr v-for="(c, index) in cashs" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ c.date_list.date }}</td>
                  <td>{{ c.date_list.list }}</td>
                  <td>{{ c.date_list.income }}</td>
                  <td>{{ c.date_list.expense }}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import CashStore from '@/store/Cash'

export default {
    data() {
        return {
            cashs: []
        }
    },

    created() {
        this.fetchCash()
    },

    methods: {
        fetchCash() {
            CashStore.dispatch('fetchCash')

            this.cashs = CashStore.getters.cashs
        }
    }
}
</script>

<style lang="scss" scoped>
</style>