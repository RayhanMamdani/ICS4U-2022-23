app.component(
    'product-details', {
        props: {
            details: {
                type: Array,
                required: true
            }
        },
        template:
            /*html*/
            `<p>{{ printDetails }}</p>`
        ,
        computed: {
            printDetails() {
                var detailString = '';
                for (let index = 0; index < this.details.length - 1; index++) {
                    detailString += this.details[index] += ', ';
                }
                return detailString += this.details[this.details.length - 1];
            }
        }
    }
)