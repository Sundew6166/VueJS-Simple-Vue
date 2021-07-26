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
                  <td>{{ c.date }}</td>
                  <td>{{ c.list }}</td>
                  <td>{{ c.income }}</td>
                    <!-- <td v-else-if="false"></td> -->
                <td>{{ funcTotal(c.income, c.total) }}</td>
                  <td>{{ c.expense }}</td>
                  <td>{{ c.total }}</td>
              </tr>
          </tbody>
      </table>
      
        <!-- <label v-if="funcTotal(c.income)">ยอดคงเหลือ = {{ total }}</label>
        <label v-else-if="false">ยอดคงเหลือ = {{ total }}</label> -->
        <!-- {{total}} -->
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
        },
        funcTotal(income, total) {
            console.log("here");

            // for (let index = 0; index < this.cashs.length; index++) {
            //     console.log("index :"+index+" == "+this.cashs[index].income+" : "+this.total);
            //     this.total = parseInt(this.cashs[index].income) + parseInt(this.total)
            //     console.log("total :"+this.total); 
            // }

            total = parseInt(income) + parseInt(total)

            console.log(total);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>