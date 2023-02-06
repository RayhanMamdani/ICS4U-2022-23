const app = Vue.createApp({
   data() {
      return {
         cart: [],
         premium: true
      }
   },
   methods: {
      updateCart(id) {
         this.cart.push(id);
      },
      removeFromCart(id) {
         if (this.cart.length != 0) {
            var removeID;
            for (let index = 0; index < this.cart.length; index++) {
               if (this.cart[index] == id) {
                  removeID = index;
               }
            }
            if (removeID != null)
               this.cart.splice(removeID);
         }
      }
   }
})