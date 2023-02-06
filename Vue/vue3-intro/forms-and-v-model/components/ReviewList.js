app.component('review-list', {
    props: {
        reviews: {
        type: Array,
        required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            <strong>{{ review.name }}</strong> gave this product <strong>{{ review.rating }}</strong> stars.
            <br/>
            <br/>
            Would they recommend this product? <strong>{{review.recommend}}</strong>
            <br/>
            <br/>
            "{{ review.review }}"
            <br/>
        </li>
        </ul>
    </div>`
})